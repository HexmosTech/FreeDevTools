package main

import (
	"encoding/json"
	"encoding/xml"
	"flag"
	"fmt"
	"io"
	"net/http"
	"os"
	"runtime"
	"strings"
	"sync"
	"sync/atomic"
	"time"
)

var (
    concurrency int
    mode        string
    maxPages    int
    client      *http.Client
)

type UrlSet struct {
    URLs []struct {
        Loc string `xml:"loc"`
    } `xml:"url"`
}

type SitemapIndex struct {
    Sitemaps []struct {
        Loc string `xml:"loc"`
    } `xml:"sitemap"`
}

type UrlResult struct {
    URL       string
    Status    int
    Indexable bool
    Issues    []string
}




func main() {
    runtime.GOMAXPROCS(runtime.NumCPU())

    var sitemapUrl, inputJSON string
    var outputFormat string
    var useHead bool
    var compareProd bool

    flag.StringVar(&sitemapUrl, "sitemap", "", "Sitemap URL")
    flag.StringVar(&inputJSON, "input", "", "Input JSON file of URLs")
    flag.IntVar(&concurrency, "concurrency", 200, "Number of concurrent workers")
    flag.StringVar(&mode, "mode", "local", "Mode: prod or local")
    flag.IntVar(&maxPages, "maxPages", 0, "Limit pages for testing")
    flag.BoolVar(&useHead, "head", false, "Use HEAD requests only (check 404/200 without reading full body)")
    flag.StringVar(&outputFormat, "output", "pdf", "Output format: pdf, json, or both")
    flag.BoolVar(&compareProd, "compare-prod", false, "Compare local sitemap with production sitemap")

    flag.Parse()

    client = &http.Client{
        Timeout: 1500 * time.Second,
        Transport: &http.Transport{
            MaxIdleConns:        4000,
            MaxIdleConnsPerHost: 4000,
            MaxConnsPerHost:     4000,
            IdleConnTimeout:     90 * time.Second,
        },
    }

    var urls []string
    var comparison *SitemapComparison

    if compareProd && sitemapUrl != "" {
        fmt.Println("--- Starting Sitemap Comparison ---")
        // 1. Determine Prod and Local Sitemap URLs
        var prodSitemapUrl, localSitemapUrl string

        if strings.Contains(sitemapUrl, "localhost") {
            // Input is Local, derive Prod
            localSitemapUrl = sitemapUrl
            prodSitemapUrl = strings.Replace(sitemapUrl, "http://localhost:4321", "https://hexmos.com", 1)
        } else {
            // Input is Prod (or other), derive Local
            prodSitemapUrl = sitemapUrl
            localSitemapUrl = strings.Replace(sitemapUrl, "https://hexmos.com", "http://localhost:4321", 1)
        }

        fmt.Println("Fetching Production URLs from:", prodSitemapUrl)
        prodUrls := fetchRawSitemapUrls(prodSitemapUrl)
        fmt.Printf("Found %d URLs in Production\n", len(prodUrls))

        fmt.Println("Fetching Local URLs from:", localSitemapUrl)
        localUrls := fetchRawSitemapUrls(localSitemapUrl)
        fmt.Printf("Found %d URLs in Local\n", len(localUrls))

        // 3. Compare
        comparison = compareSitemaps(prodUrls, localUrls)
        fmt.Printf("Comparison Result: %d Missing in Local, %d Extra in Local\n", len(comparison.MissingInLocal), len(comparison.ExtraInLocal))
        fmt.Println("--- Comparison Done ---")
    }



    if sitemapUrl != "" {
        urls = loadUrlsFromSitemap(sitemapUrl)
    } else if inputJSON != "" {
        urls = loadUrlsFromJSON(inputJSON)
    } else {
        fmt.Println("Usage: go run main.go --sitemap=<url> OR --input=<file.json> [--concurrency=200] [--mode=prod|local] [--maxPages=10] [--output=pdf|json|both] [--compare-prod]")
        os.Exit(1)
    }

    if maxPages > 0 && len(urls) > maxPages {
        urls = urls[:maxPages]
    }

    fmt.Printf("Total URLs to check: %d\n", len(urls))

    jobs := make(chan string, len(urls))
    results := make(chan UrlResult, len(urls))
    var wg sync.WaitGroup
    var completed int32
    totalUrls := len(urls)

    for i := 0; i < concurrency; i++ {
        wg.Add(1)
        go func(workerID int) {
            defer wg.Done()
            for url := range jobs {
                res := checkUrl(url, useHead)
                results <- res
                atomic.AddInt32(&completed, 1)
            }
        }(i)
    }

    go func() {
        for {
            done := atomic.LoadInt32(&completed)
            fmt.Printf("\rProgress: %d/%d URLs checked", done, totalUrls)
            if int(done) >= totalUrls {
                break
            }
            time.Sleep(500 * time.Millisecond)
        }
        fmt.Println()
    }()

    for _, u := range urls {
        jobs <- u
    }
    close(jobs)

    wg.Wait()
    close(results)

    var all []UrlResult
    for r := range results {
        all = append(all, r)
    }

    // Timestamp for report filenames
    timestamp := time.Now().Format("2006-01-02_15-04")

    if outputFormat == "pdf" || outputFormat == "both" {
        pdfName := fmt.Sprintf("sitemap_report_%s.pdf", timestamp)
        generatePDF(all, pdfName, comparison)
        fmt.Println("✅ PDF saved as", pdfName)
    }

    if outputFormat == "json" || outputFormat == "both" {
        jsonName := fmt.Sprintf("sitemap_report_%s.json", timestamp)
        saveJSON(all, jsonName)
    }
}

// -------------------------
// Helper Functions
// -------------------------

func loadUrlsFromSitemap(sitemapUrl string) []string {
    fmt.Println("Fetching sitemap:", sitemapUrl)
    resp, err := client.Get(sitemapUrl)
    if err != nil {
        fmt.Println("Failed to load sitemap:", err)
        os.Exit(1)
    }
    defer resp.Body.Close()
    body, _ := io.ReadAll(resp.Body)

    var urls []string
    var urlset UrlSet
    var smIndex SitemapIndex

    // Try parsing as UrlSet
    if err := xml.Unmarshal(body, &urlset); err == nil && len(urlset.URLs) > 0 {
        fmt.Printf("Found %d URLs in sitemap: %s\n", len(urlset.URLs), sitemapUrl)
        for _, u := range urlset.URLs {
            urls = append(urls, ToOfflineUrl(u.Loc))
        }
    } else if err := xml.Unmarshal(body, &smIndex); err == nil && len(smIndex.Sitemaps) > 0 {
        // Try parsing as SitemapIndex
        fmt.Printf("Found Sitemap Index with %d sub-sitemaps: %s\n", len(smIndex.Sitemaps), sitemapUrl)
        for _, sm := range smIndex.Sitemaps {
            fmt.Println("  -> Fetching sub-sitemap:", sm.Loc)
            subResp, err := client.Get(sm.Loc)
            if err != nil {
                fmt.Printf("  [ERROR] Failed to fetch sub-sitemap %s: %v\n", sm.Loc, err)
                continue
            }
            
            data, _ := io.ReadAll(subResp.Body)
            subResp.Body.Close()

            var subUrlset UrlSet
            if err := xml.Unmarshal(data, &subUrlset); err == nil {
                fmt.Printf("     Found %d URLs in sub-sitemap\n", len(subUrlset.URLs))
                for _, u := range subUrlset.URLs {
                    urls = append(urls, ToOfflineUrl(u.Loc))
                }
            } else {
                 fmt.Printf("  [ERROR] Failed to parse sub-sitemap %s: %v\n", sm.Loc, err)
            }
        }
    } else {
        fmt.Println("Warning: No URLs or Sub-Sitemaps found in:", sitemapUrl)
    }

    return urls
}

func loadUrlsFromJSON(file string) []string {
    data, err := os.ReadFile(file)
    if err != nil {
        fmt.Println("Failed to read JSON file:", err)
        os.Exit(1)
    }
    var urls []string
    if err := json.Unmarshal(data, &urls); err != nil {
        fmt.Println("Invalid JSON file format:", err)
        os.Exit(1)
    }

    // ✅ Apply ToOfflineUrl to each
    for i, u := range urls {
        urls[i] = ToOfflineUrl(u)
    }

    return urls
}




// -------------------------
// Save JSON Report
// -------------------------

func saveJSON(results []UrlResult, filename string) {
    data, err := json.MarshalIndent(results, "", "  ")
    if err != nil {
        fmt.Println("Failed to marshal JSON:", err)
        return
    }
    if err := os.WriteFile(filename, data, 0644); err != nil {
        fmt.Println("Failed to write JSON file:", err)
        return
    }
    fmt.Println("✅ JSON saved as", filename)
}
