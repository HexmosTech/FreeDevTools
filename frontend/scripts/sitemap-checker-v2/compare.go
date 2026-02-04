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

type UrlInfo struct {
	OriginalUrl string
	Priority    string
	Lastmod     string
}

func parseLine(line string) (string, string, string) {
	parts := strings.Split(line, "|")
	url := parts[0]
	priority := "0.5"
	lastmod := ""
	if len(parts) >= 2 {
		priority = parts[1]
	}
	if len(parts) >= 3 {
		lastmod = parts[2]
	}
	return url, priority, lastmod
}

func compareUrls(prodFile, localFile string) error {
	prodLines, err := loadUrlsFromFile(prodFile)
	if err != nil {
		return fmt.Errorf("failed to load prod URLs: %v", err)
	}

	localLines, err := loadUrlsFromFile(localFile)
	if err != nil {
		return fmt.Errorf("failed to load local URLs: %v", err)
	}

	// Process Local URLs
	// Map: NormalizedURL -> {OriginalURL, Priority}
	localMap := make(map[string]UrlInfo)
	var duplicateUrls []string
	duplicateCount := 0

	for _, line := range localLines {
		url, priority, lastmod := parseLine(line)
		normalized := normalizeUrl(url)

		if _, exists := localMap[normalized]; exists {
			duplicateCount++
			duplicateUrls = append(duplicateUrls, line)
		} else {
			localMap[normalized] = UrlInfo{OriginalUrl: url, Priority: priority, Lastmod: lastmod}
		}
	}

	// Process Prod URLs
	prodMap := make(map[string]struct{ Priority, Lastmod string })
	for _, line := range prodLines {
		url, priority, lastmod := parseLine(line)
		prodMap[url] = struct{ Priority, Lastmod string }{Priority: priority, Lastmod: lastmod}
	}

	// Compare
	var missingInLocal []string
	var extraInLocal []string
	var priorityMismatch []string
	var lastmodMismatch []string

	// Check Prod vs Local
	for prodUrl, prodData := range prodMap {
		if localInfo, exists := localMap[prodUrl]; !exists {
			missingInLocal = append(missingInLocal, prodUrl)
		} else {
			// Check priority
			if localInfo.Priority != prodData.Priority {
				priorityMismatch = append(priorityMismatch, fmt.Sprintf("%s (Prod: %s, Local: %s)", prodUrl, prodData.Priority, localInfo.Priority))
			}
			// Check lastmod
			if localInfo.Lastmod != prodData.Lastmod {
				lastmodMismatch = append(lastmodMismatch, fmt.Sprintf("%s (Prod: %s, Local: %s)", prodUrl, prodData.Lastmod, localInfo.Lastmod))
			}
		}
	}

	// Check Local vs Prod
	for normalized, info := range localMap {
		if _, exists := prodMap[normalized]; !exists {
			extraInLocal = append(extraInLocal, info.OriginalUrl)
		}
	}

	// Sort
	sort.Strings(missingInLocal)
	sort.Strings(extraInLocal)
	sort.Strings(priorityMismatch)
	sort.Strings(lastmodMismatch)

	// Print results
	fmt.Println("\n" + strings.Repeat("=", 70))
	fmt.Println("SITEMAP COMPARISON RESULTS")
	fmt.Println(strings.Repeat("=", 70))
	fmt.Printf("Production URLs: %d\n", len(prodLines))
	fmt.Printf("Local URLs:      %d\n", len(localLines))
	fmt.Printf("  (Unique: %d, Duplicates: %d)\n", len(localMap), duplicateCount)
	fmt.Println(strings.Repeat("-", 70))
	fmt.Printf("Missing in Local:      %d URLs\n", len(missingInLocal))
	fmt.Printf("Extra in Local:        %d URLs\n", len(extraInLocal))
	fmt.Printf("Priority Mismatches:   %d URLs\n", len(priorityMismatch))
	fmt.Printf("Lastmod Mismatches:    %d URLs\n", len(lastmodMismatch))
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

	if len(lastmodMismatch) > 0 {
		fmt.Println("\n📅 Lastmod Mismatches:")
		fmt.Println(strings.Repeat("-", 70))
		for i, msg := range lastmodMismatch {
			if i >= 20 {
				fmt.Printf("... and %d more mismatches\n", len(lastmodMismatch)-20)
				break
			}
			fmt.Printf("  %s\n", msg)
		}
	}

	if len(missingInLocal) == 0 && len(extraInLocal) == 0 && len(priorityMismatch) == 0 && len(lastmodMismatch) == 0 {
		fmt.Println("\n✅ Perfect match! All URLs, priorities, and lastmod dates are identical.")
	}

	fmt.Println()

	// Save results
	prodDir := ""
	if lastSlash := strings.LastIndex(prodFile, "/"); lastSlash != -1 {
		prodDir = prodFile[:lastSlash+1]
	}

	fileType := "svg"
	if strings.Contains(prodFile, "png") {
		fileType = "png"
	} else if strings.Contains(prodFile, "emoji") {
		fileType = "emoji"
	} else if strings.Contains(prodFile, "tldr") {
		fileType = "tldr"
	} else if strings.Contains(prodFile, "tools") {
		fileType = "tools"
	} else if strings.Contains(prodFile, "cheatsheets") {
		fileType = "cheatsheets"
	} else if strings.Contains(prodFile, "man-pages") {
		fileType = "man-pages"
	}

	missingFile := fmt.Sprintf("%slocal-missing-%s.log", prodDir, fileType)
	extraFile := fmt.Sprintf("%slocal-extra-%s.log", prodDir, fileType)
	mismatchFile := fmt.Sprintf("%slocal-mismatch-%s.log", prodDir, fileType)
	lastmodFile := fmt.Sprintf("%slocal-lastmod-%s.log", prodDir, fileType)

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

	// Write mismatches
	if len(priorityMismatch) > 0 {
		mismatchF, err := os.Create(mismatchFile)
		if err == nil {
			for _, msg := range priorityMismatch {
				fmt.Fprintln(mismatchF, msg)
			}
			mismatchF.Close()
			fmt.Printf("📄 Priority Mismatches saved to: %s\n", mismatchFile)
		}
	}

	// Write lastmod mismatches
	if len(lastmodMismatch) > 0 {
		lastmodF, err := os.Create(lastmodFile)
		if err == nil {
			for _, msg := range lastmodMismatch {
				fmt.Fprintln(lastmodF, msg)
			}
			lastmodF.Close()
			fmt.Printf("📄 Lastmod Mismatches saved to: %s\n", lastmodFile)
		}
	}

	// Write duplicate URLs
	duplicatesFile := fmt.Sprintf("%slocal-duplicates-%s.log", prodDir, fileType)
	if len(duplicateUrls) > 0 {
		dupF, err := os.Create(duplicatesFile)
		if err == nil {
			for _, url := range duplicateUrls {
				fmt.Fprintln(dupF, url)
			}
			dupF.Close()
			fmt.Printf("📄 Duplicate URLs saved to: %s\n", duplicatesFile)
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
