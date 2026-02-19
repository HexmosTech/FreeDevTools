package main

import (
	"encoding/xml"
	"flag"
	"fmt"
	"io"
	"net/http"
	"os"
	"path/filepath"
	"strings"
)

type SitemapIndex struct {
	Sitemaps []struct {
		Loc string `xml:"loc"`
	} `xml:"sitemap"`
}

type UrlSet struct {
	URLs []struct {
		Loc string `xml:"loc"`
	} `xml:"url"`
}

func downloadSitemap(url, destDir string, visited map[string]bool) error {
	if visited[url] {
		return nil
	}
	visited[url] = true

	fmt.Printf("Downloading: %s\n", url)
	resp, err := http.Get(url)
	if err != nil {
		fmt.Printf("Error fetching %s: %v\n", url, err)
		return err
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		fmt.Printf("Non-200 status for %s: %d\n", url, resp.StatusCode)
		return fmt.Errorf("non-200 status: %d", resp.StatusCode)
	}

	data, err := io.ReadAll(resp.Body)
	if err != nil {
		fmt.Printf("Error reading body for %s: %v\n", url, err)
		return err
	}

	// Determine file name from URL
	fileName := strings.TrimPrefix(url, "https://")
	fileName = strings.TrimPrefix(fileName, "http://")
	fileName = strings.ReplaceAll(fileName, "/", "_")
	if !strings.HasSuffix(fileName, ".xml") {
		fileName += ".xml"
	}

	filePath := filepath.Join(destDir, fileName)
	fmt.Printf("Saving to: %s\n", filePath)
	if err := os.WriteFile(filePath, data, 0644); err != nil {
		fmt.Printf("Error writing file %s: %v\n", filePath, err)
		return err
	}

	// Try to parse as index to see if we need to recurse
	var index SitemapIndex
	if err := xml.Unmarshal(data, &index); err == nil && len(index.Sitemaps) > 0 {
		for _, s := range index.Sitemaps {
			if err := downloadSitemap(s.Loc, destDir, visited); err != nil {
				fmt.Printf("Warning: failed to download sub-sitemap %s: %v\n", s.Loc, err)
			}
		}
	}

	return nil
}

func normalizeUrl(u string) string {
	return strings.TrimSuffix(strings.TrimSpace(u), "/")
}

func checkUrl(targetUrl, sitemapsDir string) {
	files, err := os.ReadDir(sitemapsDir)
	if err != nil {
		fmt.Printf("Error reading sitemaps directory: %v\n", err)
		return
	}

	normalizedTarget := normalizeUrl(targetUrl)
	found := false
	for _, file := range files {
		if !strings.HasSuffix(file.Name(), ".xml") {
			continue
		}

		path := filepath.Join(sitemapsDir, file.Name())
		data, err := os.ReadFile(path)
		if err != nil {
			continue
		}

		var urlset UrlSet
		if err := xml.Unmarshal(data, &urlset); err == nil {
			for _, u := range urlset.URLs {
				if normalizeUrl(u.Loc) == normalizedTarget {
					fmt.Printf("✅ Found in: %s\n", file.Name())
					found = true
				}
			}
		}
	}

	if !found {
		fmt.Printf("❌ URL not found in any local sitemap.\n")
	}
}

func main() {
	downloadCmd := flag.NewFlagSet("download", flag.ExitOnError)
	rootUrl := downloadCmd.String("root", "https://hexmos.com/freedevtools/sitemap.xml", "Root sitemap URL")
	destDir := downloadCmd.String("dir", "sitemaps", "Directory to store sitemaps")

	checkCmd := flag.NewFlagSet("check", flag.ExitOnError)
	targetUrl := checkCmd.String("url", "", "URL to search for")
	checkDir := checkCmd.String("dir", "sitemaps", "Directory to search in")

	if len(os.Args) < 2 {
		fmt.Println("Expected 'download' or 'check' subcommands")
		os.Exit(1)
	}

	switch os.Args[1] {
	case "download":
		downloadCmd.Parse(os.Args[2:])
		if err := os.MkdirAll(*destDir, 0755); err != nil {
			fmt.Printf("Error creating directory: %v\n", err)
			os.Exit(1)
		}
		visited := make(map[string]bool)
		if err := downloadSitemap(*rootUrl, *destDir, visited); err != nil {
			fmt.Printf("Error: %v\n", err)
			os.Exit(1)
		}
		fmt.Println("Download complete.")
	case "check":
		checkCmd.Parse(os.Args[2:])
		if *targetUrl == "" {
			fmt.Println("Please provide a URL to check with -url")
			os.Exit(1)
		}
		checkUrl(*targetUrl, *checkDir)
	default:
		fmt.Println("Expected 'download' or 'check' subcommands")
		os.Exit(1)
	}
}
