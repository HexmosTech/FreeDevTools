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

    flag.StringVar(&sitemapUrl, "sitemap", "", "Sitemap URL")
    flag.StringVar(&inputJSON, "input", "", "Input JSON file of URLs")
    flag.IntVar(&concurrency, "concurrency", 200, "Number of concurrent workers")
    flag.StringVar(&mode, "mode", "prod", "Mode: prod or local")
    flag.IntVar(&maxPages, "maxPages", 0, "Limit pages for testing")
    flag.BoolVar(&useHead, "head", false, "Use HEAD requests only (check 404/200 without reading full body)")
    flag.StringVar(&outputFormat, "output", "pdf", "Output format: pdf, json, or both")

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

    if sitemapUrl != "" {
        urls = loadUrlsFromSitemap(sitemapUrl)
    } else if inputJSON != "" {
        urls = loadUrlsFromJSON(inputJSON)
    } else {
        fmt.Println("Usage: go run main.go --sitemap=<url> OR --input=<file.json> [--concurrency=200] [--mode=prod|local] [--maxPages=10] [--output=pdf|json|both]")
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
        generatePDF(all, pdfName)
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

    if err := xml.Unmarshal(body, &urlset); err == nil && len(urlset.URLs) > 0 {
        for _, u := range urlset.URLs {
            urls = append(urls, ToOfflineUrl(u.Loc))
        }
    } else if err := xml.Unmarshal(body, &smIndex); err == nil && len(smIndex.Sitemaps) > 0 {
        for _, sm := range smIndex.Sitemaps {
            subResp, err := client.Get(sm.Loc)
            if err != nil {
                continue
            }
            data, _ := io.ReadAll(subResp.Body)
            subResp.Body.Close()

            var subUrlset UrlSet
            if err := xml.Unmarshal(data, &subUrlset); err == nil {
                for _, u := range subUrlset.URLs {
                    urls = append(urls, ToOfflineUrl(u.Loc))
                }
            }
        }
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
