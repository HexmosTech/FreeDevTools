package main

import (
	"encoding/xml"
	"flag"
	"fmt"
	"io"
	"net/http"
	"os"
)

type SitemapIndex struct {
	XMLName  xml.Name `xml:"sitemapindex"`
	Sitemaps []struct {
		Loc     string `xml:"loc"`
		Lastmod string `xml:"lastmod"`
	} `xml:"sitemap"`
}

type UrlSet struct {
	XMLName xml.Name `xml:"urlset"`
	URLs    []struct {
		Loc      string `xml:"loc"`
		Priority string `xml:"priority"`
		Lastmod  string `xml:"lastmod"`
	} `xml:"url"`
}

func fetchSitemap(url, hostHeader string) ([]byte, error) {
	req, err := http.NewRequest("GET", url, nil)
	if err != nil {
		return nil, err
	}

	if hostHeader != "" {
		req.Host = hostHeader
		req.Header.Set("Host", hostHeader)
	}

	req.Header.Set("User-Agent", "SitemapChecker/1.0")
	req.Close = true

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()

	return io.ReadAll(resp.Body)
}

func extractUrlsFromXML(data []byte) ([]string, []string) {
	var urls []string
	var subSitemaps []string

	// Try parsing as UrlSet first
	var urlset UrlSet
	if err := xml.Unmarshal(data, &urlset); err == nil && len(urlset.URLs) > 0 {
		for _, u := range urlset.URLs {
			if u.Loc != "" {
				priority := u.Priority
				if priority == "" {
					priority = "0.5" // Default priority
				}
				lastmod := u.Lastmod
				urls = append(urls, fmt.Sprintf("%s|%s|%s", u.Loc, priority, lastmod))
			}
		}
		return urls, nil
	}

	// Try parsing as SitemapIndex
	var sitemapIndex SitemapIndex
	if err := xml.Unmarshal(data, &sitemapIndex); err == nil && len(sitemapIndex.Sitemaps) > 0 {
		for _, sm := range sitemapIndex.Sitemaps {
			if sm.Loc != "" {
				subSitemaps = append(subSitemaps, sm.Loc)
			}
		}
		return nil, subSitemaps
	}

	return urls, nil
}

func extractAllUrls(sitemapUrl, hostHeader string, visited map[string]bool) ([]string, error) {
	if visited == nil {
		visited = make(map[string]bool)
	}

	// Prevent infinite loops
	if visited[sitemapUrl] {
		return nil, nil
	}
	visited[sitemapUrl] = true

	var allUrls []string

	// Fetch sitemap
	data, err := fetchSitemap(sitemapUrl, hostHeader)
	if err != nil {
		return nil, fmt.Errorf("failed to fetch %s: %v", sitemapUrl, err)
	}

	// Extract URLs and sub-sitemaps
	urls, subSitemaps := extractUrlsFromXML(data)
	allUrls = append(allUrls, urls...)

	// Recursively fetch sub-sitemaps
	for _, subUrl := range subSitemaps {
		subUrls, err := extractAllUrls(subUrl, hostHeader, visited)
		if err != nil {
			fmt.Fprintf(os.Stderr, "Warning: Failed to fetch sub-sitemap %s: %v\n", subUrl, err)
			continue
		}
		allUrls = append(allUrls, subUrls...)
	}

	return allUrls, nil
}

func main() {
	var sitemapUrl, outputFile, hostHeader string

	flag.StringVar(&sitemapUrl, "url", "", "Sitemap URL to extract URLs from")
	flag.StringVar(&outputFile, "output", "", "Output file to save URLs (one per line)")
	flag.StringVar(&hostHeader, "host", "", "Host header for local requests (optional)")
	flag.Parse()

	if sitemapUrl == "" || outputFile == "" {
		fmt.Println("Usage: extract-urls -url <sitemap_url> -output <output_file> [-host <host_header>]")
		os.Exit(1)
	}

	// Extract all URLs recursively
	urls, err := extractAllUrls(sitemapUrl, hostHeader, nil)
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error: %v\n", err)
		os.Exit(1)
	}

	// Write URLs to file (one per line)
	file, err := os.Create(outputFile)
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error creating output file: %v\n", err)
		os.Exit(1)
	}
	defer file.Close()

	for _, url := range urls {
		fmt.Fprintln(file, url)
	}

	fmt.Printf("✅ Extracted %d URLs to: %s\n", len(urls), outputFile)
}
