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
    rateLimiter *RateLimiter
    logWriter   io.Writer
    logFile     *os.File
)

// RateLimiter limits the number of requests per second
type RateLimiter struct {
    tokens chan struct{}
    ticker *time.Ticker
}

// NewRateLimiter creates a new rate limiter that allows maxRequests per second
func NewRateLimiter(maxRequestsPerSecond int) *RateLimiter {
    interval := time.Second / time.Duration(maxRequestsPerSecond)
    rl := &RateLimiter{
        tokens: make(chan struct{}, maxRequestsPerSecond),
        ticker: time.NewTicker(interval),
    }
    
    // Start the token generator - adds one token every interval
    // This ensures exactly maxRequestsPerSecond tokens per second
    go func() {
        for range rl.ticker.C {
            select {
            case rl.tokens <- struct{}{}:
                // Token added successfully
            default:
                // Channel is full (all tokens consumed), skip adding
                // This prevents accumulation beyond the rate limit
            }
        }
    }()
    
    return rl
}

// Acquire waits for a token to be available
func (rl *RateLimiter) Acquire() {
    <-rl.tokens
}

// Stop stops the rate limiter
func (rl *RateLimiter) Stop() {
    if rl.ticker != nil {
        rl.ticker.Stop()
    }
}

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




// logPrint writes to both stdout and log file (if enabled)
func logPrint(format string, args ...interface{}) {
    msg := fmt.Sprintf(format, args...)
    fmt.Print(msg)
    if logWriter != nil {
        logWriter.Write([]byte(msg))
    }
}

// logPrintf writes formatted string to both stdout and log file (if enabled)
func logPrintf(format string, args ...interface{}) {
    msg := fmt.Sprintf(format, args...)
    fmt.Print(msg)
    if logWriter != nil {
        logWriter.Write([]byte(msg))
    }
}

// logPrintln writes to both stdout and log file (if enabled)
func logPrintln(args ...interface{}) {
    msg := fmt.Sprintln(args...)
    fmt.Print(msg)
    if logWriter != nil {
        logWriter.Write([]byte(msg))
    }
}

func main() {
    runtime.GOMAXPROCS(runtime.NumCPU())

    var sitemapUrl, inputJSON, logFilePath string
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
    flag.StringVar(&logFilePath, "log-file", "", "Log file path (optional, logs will also go to stdout)")

    flag.Parse()

    // Setup log file if specified
    if logFilePath != "" {
        var err error
        logFile, err = os.OpenFile(logFilePath, os.O_CREATE|os.O_WRONLY|os.O_APPEND, 0644)
        if err != nil {
            fmt.Printf("Failed to open log file %s: %v\n", logFilePath, err)
            os.Exit(1)
        }
        defer logFile.Close()
        // Write to both stdout and log file
        logWriter = io.MultiWriter(logFile)
        logPrintln("=== Sitemap Checker Started ===")
        logPrintln("Log file:", logFilePath)
    } else {
        logWriter = nil
    }

    client = &http.Client{
        Timeout: 1500 * time.Second,
        Transport: &http.Transport{
            MaxIdleConns:        4000,
            MaxIdleConnsPerHost: 4000,
            MaxConnsPerHost:     4000,
            IdleConnTimeout:     90 * time.Second,
            DisableKeepAlives:   false, // Keep keep-alive but ensure we read full body
        },
    }

    var urls []string
    var comparison *SitemapComparison

    if compareProd && sitemapUrl != "" {
        logPrintln("--- Starting Sitemap Comparison ---")
        // Production always uses hexmos.com
        // Local preserves the input origin (127.0.0.1 or localhost:4321)
        
        var prodSitemapUrl, localSitemapUrl string
        
        // Extract path from input URL
        var path string
        if strings.Contains(sitemapUrl, "127.0.0.1") {
            path = strings.Replace(sitemapUrl, "http://127.0.0.1", "", 1)
            localSitemapUrl = sitemapUrl
        } else if strings.Contains(sitemapUrl, "localhost:4321") {
            path = strings.Replace(sitemapUrl, "http://localhost:4321", "", 1)
            localSitemapUrl = sitemapUrl
        } else if strings.Contains(sitemapUrl, "hexmos.com") {
            path = strings.Replace(sitemapUrl, "https://hexmos.com", "", 1)
            // If input is prod, derive local as 127.0.0.1
            localSitemapUrl = "http://127.0.0.1" + path
        } else {
            // Unknown, assume it's local
            localSitemapUrl = sitemapUrl
            if strings.HasPrefix(sitemapUrl, "http://") {
                parts := strings.SplitN(sitemapUrl, "/", 4)
                if len(parts) >= 4 {
                    path = "/" + parts[3]
                } else {
                    path = strings.TrimPrefix(sitemapUrl, "http://")
                    if idx := strings.Index(path, "/"); idx != -1 {
                        path = path[idx:]
                    } else {
                        path = "/"
                    }
                }
            } else {
                path = sitemapUrl
            }
        }
        
        // Production always uses hexmos.com
        prodSitemapUrl = "https://hexmos.com" + path

        logPrintln("Fetching Production URLs from:", prodSitemapUrl)
        prodUrls := fetchRawSitemapUrls(prodSitemapUrl)
        logPrintf("Found %d URLs in Production\n", len(prodUrls))

        logPrintln("Fetching Local URLs from:", localSitemapUrl)
        localUrls := fetchRawSitemapUrls(localSitemapUrl)
        logPrintf("Found %d URLs in Local\n", len(localUrls))

        // 3. Compare
        comparison = compareSitemaps(prodUrls, localUrls)
        logPrintf("Comparison Result: %d Missing in Local, %d Extra in Local\n", len(comparison.MissingInLocal), len(comparison.ExtraInLocal))
        logPrintln("--- Comparison Done ---")
    }



    if sitemapUrl != "" {
        urls = loadUrlsFromSitemap(sitemapUrl)
    } else if inputJSON != "" {
        urls = loadUrlsFromJSON(inputJSON)
    } else {
        logPrintln("Usage: go run main.go --sitemap=<url> OR --input=<file.json> [--concurrency=200] [--mode=prod|local] [--maxPages=10] [--output=pdf|json|both] [--compare-prod] [--log-file=<path>]")
        logPrintln("Note: Rate limited to 50 requests/second")
        os.Exit(1)
    }

    if maxPages > 0 && len(urls) > maxPages {
        urls = urls[:maxPages]
    }

    logPrintf("Total URLs to check: %d\n", len(urls))

    // Initialize rate limiter: max 50 requests per second
    rateLimiter = NewRateLimiter(150)
    defer rateLimiter.Stop()
    logPrintln("Rate limiter: 150 requests/second")

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
                // Acquire rate limit token before making request
                rateLimiter.Acquire()
                res := checkUrl(url, useHead)
                results <- res
                atomic.AddInt32(&completed, 1)
            }
        }(i)
    }

    go func() {
        for {
            done := atomic.LoadInt32(&completed)
            logPrintf("\rProgress: %d/%d URLs checked", done, totalUrls)
            if int(done) >= totalUrls {
                break
            }
            time.Sleep(500 * time.Millisecond)
        }
        logPrintln()
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
        logPrintln("✅ PDF saved as", pdfName)
    }

    if outputFormat == "json" || outputFormat == "both" {
        jsonName := fmt.Sprintf("sitemap_report_%s.json", timestamp)
        saveJSON(all, jsonName)
    }

    if logFile != nil {
        logPrintln("=== Sitemap Checker Completed ===")
    }
}

// -------------------------
// Helper Functions
// -------------------------

func loadUrlsFromSitemap(sitemapUrl string) []string {
    logPrintln("Fetching sitemap:", sitemapUrl)
    resp, err := fetchWithHostHeader(sitemapUrl)
    if err != nil {
        logPrintln("Failed to load sitemap:", err)
        os.Exit(1)
    }
    defer resp.Body.Close()
    body, _ := io.ReadAll(resp.Body)

    var urls []string
    var urlset UrlSet
    var smIndex SitemapIndex
    
    // Get origin from input URL to preserve it for sub-sitemaps and URLs
    origin := getOriginFromUrl(sitemapUrl)

    // Try parsing as UrlSet
    if err := xml.Unmarshal(body, &urlset); err == nil && len(urlset.URLs) > 0 {
        logPrintf("Found %d URLs in sitemap: %s\n", len(urlset.URLs), sitemapUrl)
        for _, u := range urlset.URLs {
            // Normalize URL to use same origin as input
            normalizedUrl := normalizeUrlToOrigin(u.Loc, origin)
            urls = append(urls, ToOfflineUrl(normalizedUrl))
        }
    } else if err := xml.Unmarshal(body, &smIndex); err == nil && len(smIndex.Sitemaps) > 0 {
        // Try parsing as SitemapIndex
        logPrintf("Found Sitemap Index with %d sub-sitemaps: %s\n", len(smIndex.Sitemaps), sitemapUrl)
        for _, sm := range smIndex.Sitemaps {
            // Normalize sub-sitemap URL to use same origin as input
            normalizedSubUrl := normalizeUrlToOrigin(sm.Loc, origin)
            logPrintln("  -> Fetching sub-sitemap:", normalizedSubUrl)
            subResp, err := fetchWithHostHeader(normalizedSubUrl)
            if err != nil {
                logPrintf("  [ERROR] Failed to fetch sub-sitemap %s: %v\n", normalizedSubUrl, err)
                continue
            }
            
            data, _ := io.ReadAll(subResp.Body)
            subResp.Body.Close()

            var subUrlset UrlSet
            if err := xml.Unmarshal(data, &subUrlset); err == nil {
                logPrintf("     Found %d URLs in sub-sitemap\n", len(subUrlset.URLs))
                for _, u := range subUrlset.URLs {
                    // Normalize URL to use same origin as input
                    normalizedUrl := normalizeUrlToOrigin(u.Loc, origin)
                    urls = append(urls, ToOfflineUrl(normalizedUrl))
                }
            } else {
                 logPrintf("  [ERROR] Failed to parse sub-sitemap %s: %v\n", normalizedSubUrl, err)
            }
        }
    } else {
        logPrintln("Warning: No URLs or Sub-Sitemaps found in:", sitemapUrl)
    }

    return urls
}

func loadUrlsFromJSON(file string) []string {
    data, err := os.ReadFile(file)
    if err != nil {
        logPrintln("Failed to read JSON file:", err)
        os.Exit(1)
    }
    var urls []string
    if err := json.Unmarshal(data, &urls); err != nil {
        logPrintln("Invalid JSON file format:", err)
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
        logPrintln("Failed to marshal JSON:", err)
        return
    }
    if err := os.WriteFile(filename, data, 0644); err != nil {
        logPrintln("Failed to write JSON file:", err)
        return
    }
    logPrintln("✅ JSON saved as", filename)
}
