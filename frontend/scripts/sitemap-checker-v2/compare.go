package main

import (
	"bufio"
	"fmt"
	"os"
	"sort"
	"strings"
)

func loadUrlsFromFile(filename string) ([]string, error) {
	file, err := os.Open(filename)
	if err != nil {
		return nil, err
	}
	defer file.Close()

	var urls []string
	scanner := bufio.NewScanner(file)
	for scanner.Scan() {
		url := strings.TrimSpace(scanner.Text())
		if url != "" {
			urls = append(urls, url)
		}
	}

	if err := scanner.Err(); err != nil {
		return nil, err
	}

	return urls, nil
}

func normalizeUrl(url string) string {
	// Normalize localhost URLs to production URLs for comparison
	url = strings.Replace(url, "http://localhost:4321", "https://hexmos.com", 1)
	url = strings.Replace(url, "http://127.0.0.1", "https://hexmos.com", 1)
	return url
}

func compareUrls(prodFile, localFile string) error {
	prodUrls, err := loadUrlsFromFile(prodFile)
	if err != nil {
		return fmt.Errorf("failed to load prod URLs: %v", err)
	}

	localUrls, err := loadUrlsFromFile(localFile)
	if err != nil {
		return fmt.Errorf("failed to load local URLs: %v", err)
	}

	// Normalize local URLs for comparison
	normalizedLocalUrls := make(map[string]string) // normalized -> original
	for _, url := range localUrls {
		normalized := normalizeUrl(url)
		normalizedLocalUrls[normalized] = url
	}

	// Create prod URL map
	prodUrlMap := make(map[string]bool)
	for _, url := range prodUrls {
		prodUrlMap[url] = true
	}

	// Find missing in local and extra in local
	var missingInLocal []string
	var extraInLocal []string

	// Check prod URLs - missing in local
	for _, prodUrl := range prodUrls {
		if _, exists := normalizedLocalUrls[prodUrl]; !exists {
			missingInLocal = append(missingInLocal, prodUrl)
		}
	}

	// Check local URLs - extra in local
	for normalized, original := range normalizedLocalUrls {
		if !prodUrlMap[normalized] {
			extraInLocal = append(extraInLocal, original)
		}
	}

	// Sort for consistent output
	sort.Strings(missingInLocal)
	sort.Strings(extraInLocal)

	// Print results
	fmt.Println("\n" + strings.Repeat("=", 70))
	fmt.Println("SITEMAP COMPARISON RESULTS")
	fmt.Println(strings.Repeat("=", 70))
	fmt.Printf("Production URLs: %d\n", len(prodUrls))
	fmt.Printf("Local URLs:      %d\n", len(localUrls))
	fmt.Println(strings.Repeat("-", 70))
	fmt.Printf("Missing in Local: %d URLs\n", len(missingInLocal))
	fmt.Printf("Extra in Local:   %d URLs\n", len(extraInLocal))
	fmt.Println(strings.Repeat("=", 70))

	if len(missingInLocal) > 0 {
		fmt.Println("\n📋 URLs Missing in Local:")
		fmt.Println(strings.Repeat("-", 70))
		for i, url := range missingInLocal {
			if i >= 20 {
				fmt.Printf("... and %d more URLs missing in local\n", len(missingInLocal)-20)
				break
			}
			fmt.Printf("  %s\n", url)
		}
	}

	if len(extraInLocal) > 0 {
		fmt.Println("\n📋 URLs Extra in Local:")
		fmt.Println(strings.Repeat("-", 70))
		for i, url := range extraInLocal {
			if i >= 20 {
				fmt.Printf("... and %d more URLs extra in local\n", len(extraInLocal)-20)
				break
			}
			fmt.Printf("  %s\n", url)
		}
	}

	if len(missingInLocal) == 0 && len(extraInLocal) == 0 {
		fmt.Println("\n✅ Perfect match! All URLs are identical.")
	}

	fmt.Println()

	// Save missing and extra URLs to files
	// Extract directory from prodFile path
	prodDir := ""
	if lastSlash := strings.LastIndex(prodFile, "/"); lastSlash != -1 {
		prodDir = prodFile[:lastSlash+1]
	}

	// Determine file type from filename
	fileType := "svg"
	if strings.Contains(prodFile, "png") {
		fileType = "png"
	} else if strings.Contains(prodFile, "emoji") {
		fileType = "emoji"
	}

	missingFile := fmt.Sprintf("%slocal-missing-%s.txt", prodDir, fileType)
	extraFile := fmt.Sprintf("%slocal-extra-%s.txt", prodDir, fileType)

	// Write missing URLs
	if len(missingInLocal) > 0 {
		missingF, err := os.Create(missingFile)
		if err == nil {
			for _, url := range missingInLocal {
				fmt.Fprintln(missingF, url)
			}
			missingF.Close()
			fmt.Printf("📄 Missing URLs saved to: %s\n", missingFile)
		}
	}

	// Write extra URLs
	if len(extraInLocal) > 0 {
		extraF, err := os.Create(extraFile)
		if err == nil {
			for _, url := range extraInLocal {
				fmt.Fprintln(extraF, url)
			}
			extraF.Close()
			fmt.Printf("📄 Extra URLs saved to: %s\n", extraFile)
		}
	}

	return nil
}

func main() {
	if len(os.Args) < 3 {
		fmt.Fprintf(os.Stderr, "Usage: %s <prod_file> <local_file>\n", os.Args[0])
		os.Exit(1)
	}

	prodFile := os.Args[1]
	localFile := os.Args[2]

	if err := compareUrls(prodFile, localFile); err != nil {
		fmt.Fprintf(os.Stderr, "Error: %v\n", err)
		os.Exit(1)
	}
}

