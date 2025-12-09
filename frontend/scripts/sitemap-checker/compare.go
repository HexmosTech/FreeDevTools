package main

import (
	"encoding/xml"
	"io"
	"net/http"
	"sort"
	"strings"
)

type SitemapComparison struct {
	MissingInLocal []string
	ExtraInLocal   []string
	ProdTotal      int
	LocalTotal     int
}

// fetchWithHostHeader makes a GET request with the appropriate Host header
func fetchWithHostHeader(url string) (*http.Response, error) {
	req, err := http.NewRequest("GET", url, nil)
	if err != nil {
		return nil, err
	}
	req.Header.Set("User-Agent", "GoSitemapChecker/1.0")
	// Disable keep-alive for this request to avoid connection reuse issues
	req.Close = true
	
	// Set Host header for nginx routing
	hostHeader := getHostHeader(url)
	if hostHeader != "" {
		req.Host = hostHeader
		req.Header.Set("Host", hostHeader)
	}
	
	return client.Do(req)
}

// normalizeUrlToOrigin converts a URL to use the specified origin
// If URL is already absolute, extract path and prepend origin
// If URL is relative, prepend origin
func normalizeUrlToOrigin(url, origin string) string {
	if strings.HasPrefix(url, "http://") || strings.HasPrefix(url, "https://") {
		// Extract path from absolute URL
		if strings.Contains(url, "hexmos.com") {
			path := strings.Replace(url, "https://hexmos.com", "", 1)
			return origin + path
		} else if strings.Contains(url, "127.0.0.1") {
			path := strings.Replace(url, "http://127.0.0.1", "", 1)
			return origin + path
		} else if strings.Contains(url, "localhost:4321") {
			path := strings.Replace(url, "http://localhost:4321", "", 1)
			return origin + path
		}
		// Unknown domain, try to extract path
		parts := strings.SplitN(url, "/", 4)
		if len(parts) >= 4 {
			return origin + "/" + parts[3]
		}
		return url
	}
	// Relative URL
	if strings.HasPrefix(url, "/") {
		return origin + url
	}
	return origin + "/" + url
}

// getOriginFromUrl extracts the origin (scheme + host) from a URL
func getOriginFromUrl(url string) string {
	if strings.Contains(url, "127.0.0.1") {
		return "http://127.0.0.1"
	} else if strings.Contains(url, "localhost:4321") {
		return "http://localhost:4321"
	} else if strings.Contains(url, "hexmos.com") {
		return "https://hexmos.com"
	}
	// Default fallback
	return "http://127.0.0.1"
}

func fetchRawSitemapUrls(sitemapUrl string) []string {
	resp, err := fetchWithHostHeader(sitemapUrl)
	if err != nil {
		logPrintln("Failed to load sitemap for comparison:", err)
		return []string{}
	}
	defer resp.Body.Close()
	body, _ := io.ReadAll(resp.Body)

	var urls []string
	var urlset UrlSet
	var smIndex SitemapIndex
	
	// Get origin from input URL to preserve it for sub-sitemaps
	origin := getOriginFromUrl(sitemapUrl)

	if err := xml.Unmarshal(body, &urlset); err == nil && len(urlset.URLs) > 0 {
		for _, u := range urlset.URLs {
			urls = append(urls, u.Loc)
		}
	} else if err := xml.Unmarshal(body, &smIndex); err == nil && len(smIndex.Sitemaps) > 0 {
		for _, sm := range smIndex.Sitemaps {
			// Normalize sub-sitemap URL to use same origin as input
			normalizedSubUrl := normalizeUrlToOrigin(sm.Loc, origin)
			subResp, err := fetchWithHostHeader(normalizedSubUrl)
			if err != nil {
				continue
			}
			data, _ := io.ReadAll(subResp.Body)
			subResp.Body.Close()

			var subUrlset UrlSet
			if err := xml.Unmarshal(data, &subUrlset); err == nil {
				for _, u := range subUrlset.URLs {
					urls = append(urls, u.Loc)
				}
			}
		}
	}
	return urls
}

func compareSitemaps(prodUrls, localUrls []string) *SitemapComparison {
	// Sort both lists
	sort.Strings(prodUrls)
	sort.Strings(localUrls)

	missing := []string{}
	extra := []string{}

	// Create maps for faster lookup
	prodMap := make(map[string]bool)
	for _, u := range prodUrls {
		prodMap[u] = true
	}

	localMap := make(map[string]bool)
	for _, u := range localUrls {
		// Normalize local URL to prod domain for comparison
		// Handle both 127.0.0.1 and localhost:4321
		normalized := u
		normalized = strings.Replace(normalized, "http://127.0.0.1", "https://hexmos.com", 1)
		normalized = strings.Replace(normalized, "http://localhost:4321", "https://hexmos.com", 1)
		localMap[normalized] = true

		if !prodMap[normalized] {
			extra = append(extra, u)
		}
	}

	for _, u := range prodUrls {
		if !localMap[u] {
			missing = append(missing, u)
		}
	}

	return &SitemapComparison{
		MissingInLocal: missing,
		ExtraInLocal:   extra,
		ProdTotal:      len(prodUrls),
		LocalTotal:     len(localUrls),
	}
}
