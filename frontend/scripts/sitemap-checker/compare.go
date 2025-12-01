package main

import (
	"encoding/xml"
	"fmt"
	"io"
	"sort"
	"strings"
)

type SitemapComparison struct {
	MissingInLocal []string
	ExtraInLocal   []string
	ProdTotal      int
	LocalTotal     int
}

func fetchRawSitemapUrls(sitemapUrl string) []string {
	resp, err := client.Get(sitemapUrl)
	if err != nil {
		fmt.Println("Failed to load sitemap for comparison:", err)
		return []string{}
	}
	defer resp.Body.Close()
	body, _ := io.ReadAll(resp.Body)

	var urls []string
	var urlset UrlSet
	var smIndex SitemapIndex

	if err := xml.Unmarshal(body, &urlset); err == nil && len(urlset.URLs) > 0 {
		for _, u := range urlset.URLs {
			urls = append(urls, u.Loc)
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
		normalized := strings.Replace(u, "http://localhost:4321", "https://hexmos.com", 1)
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
