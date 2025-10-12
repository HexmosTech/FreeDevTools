package main

import (
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
    runtime.GOMAXPROCS(runtime.NumCPU()) // Use all CPU cores

    var sitemapUrl string
    flag.StringVar(&sitemapUrl, "sitemap", "", "Sitemap URL")
    flag.IntVar(&concurrency, "concurrency", 200, "Number of concurrent workers") // Large concurrency allowed
    flag.StringVar(&mode, "mode", "prod", "Mode: prod or local")
    flag.IntVar(&maxPages, "maxPages", 0, "Limit pages for testing")
    flag.Parse()

    if sitemapUrl == "" {
        fmt.Println("Usage: go run main.go --sitemap=<url> [--concurrency=200] [--mode=prod|local] [--maxPages=10]")
        os.Exit(1)
    }

    // Tuned HTTP client allowing very high concurrency
    client = &http.Client{
        Timeout: 1500 * time.Second,
        Transport: &http.Transport{
            MaxIdleConns:        4000,
            MaxIdleConnsPerHost: 4000,
            MaxConnsPerHost:     4000,
            IdleConnTimeout:     90 * time.Second,
        },
    }

    // Load sitemap content
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

    if maxPages > 0 && len(urls) > maxPages {
        urls = urls[:maxPages]
    }

    fmt.Printf("Total URLs to check: %d\n", len(urls))

    jobs := make(chan string, len(urls))
    results := make(chan UrlResult, len(urls))
    var wg sync.WaitGroup
    var completed int32
    totalUrls := len(urls)

    // Start the worker goroutines before sending jobs!
    for i := 0; i < concurrency; i++ {
        wg.Add(1)
        go func(workerID int) {
            defer wg.Done()
            for url := range jobs {
                // fmt.Printf("[Worker %d] Processing %s\n", workerID, url) // Debug print to confirm concurrency
                res := checkUrl(url)
                results <- res
                atomic.AddInt32(&completed, 1) // progress count increment
            }
        }(i)
    }

    // Progress display goroutine
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

    // Send all URLs to the jobs channel immediately
    for _, u := range urls {
        jobs <- u
    }
    close(jobs) // Signal no more jobs

    // Wait for all workers to finish processing
    wg.Wait()
    close(results) // Close results channel when workers are done

    var all []UrlResult
    for r := range results {
        all = append(all, r)
    }

    generatePDF(all, "sitemap_report.pdf")
}
