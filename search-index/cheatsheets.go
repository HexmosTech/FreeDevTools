package main

import (
	"context"
	"fmt"
	"io/ioutil"
	"log"
	"path/filepath"
	"regexp"
	jargon_stemmer "search-index/jargon-stemmer"
	"sort"
	"strings"
	"time"
)

func generateCheatsheetsData(ctx context.Context) ([]CheatsheetData, error) {
	fmt.Println("📖 Generating cheatsheets data...")

	// Path to cheatsheet files
	basePath := "../frontend/data/cheatsheets"

	files, err := filepath.Glob(filepath.Join(basePath, "**", "*.html"))
	if err != nil {
		return nil, fmt.Errorf("failed to find HTML files: %w", err)
	}

	var cheatsheetsData []CheatsheetData
	categoriesSet := make(map[string]bool) // To track unique categories

	for _, file := range files {
		select {
		case <-ctx.Done():
			return nil, ctx.Err()
		default:
		}

		data, category, err := processCheatsheetFile(file, basePath)
		if err != nil {
			fmt.Printf("⚠️  Warning: Failed to process %s: %v\n", file, err)
			continue
		}

		if data != nil {
			cheatsheetsData = append(cheatsheetsData, *data)
			// Track the category
			if category != "" {
				categoriesSet[category] = true
			}
		}
	}

	// Add entries for each category/folder (like Python script does)
	for category := range categoriesSet {
		categoryData := createCategoryEntry(category)
		cheatsheetsData = append(cheatsheetsData, categoryData)
	}

	// Sort by ID
	sort.Slice(cheatsheetsData, func(i, j int) bool {
		return cheatsheetsData[i].ID < cheatsheetsData[j].ID
	})

	categoriesCount := len(categoriesSet)
	individualCheatsheets := len(cheatsheetsData) - categoriesCount

	fmt.Printf("📖 Summary:\n")
	fmt.Printf("  Categories found: %d\n", categoriesCount)
	fmt.Printf("  Individual cheatsheets: %d\n", individualCheatsheets)
	fmt.Printf("  Total entries: %d\n", len(cheatsheetsData))

	return cheatsheetsData, nil
}

func processCheatsheetFile(filePath, basePath string) (*CheatsheetData, string, error) {
	content, err := ioutil.ReadFile(filePath)
	if err != nil {
		return nil, "", err
	}

	contentStr := string(content)

	// Extract relative path from base
	relPath, err := filepath.Rel(basePath, filePath)
	if err != nil {
		return nil, "", err
	}

	// Extract category and name from path
	pathParts := strings.Split(relPath, string(filepath.Separator))
	if len(pathParts) < 2 {
		return nil, "", fmt.Errorf("invalid path structure")
	}

	category := pathParts[0]
	fileName := pathParts[len(pathParts)-1]
	fileBaseName := strings.TrimSuffix(fileName, ".html")

	// Extract title from HTML content using fallback hierarchy
	name := extractHTMLTitle(contentStr)
	if name == "" {
		// Fallback to formatted filename: replace _ with space and capitalize words
		name = formatFilenameAsTitle(fileBaseName)
	}

	// Extract description from HTML (prefer meta description)
	description := extractHTMLDescription(contentStr)
	if description == "" {
		description = fmt.Sprintf("Cheatsheet for %s", name)
	}

	// Generate path (using fileBaseName for the URL)
	fullPath := fmt.Sprintf("/freedevtools/c/%s/%s/", category, fileBaseName)

	// Generate ID
	id := generateCheatsheetID(fullPath)

	cheatsheetData := &CheatsheetData{
		ID:          id,
		Name:        name,
		Description: description,
		Path:        fullPath,
		Category:    "cheatsheets",
	}

	return cheatsheetData, category, nil
}

func createCategoryEntry(category string) CheatsheetData {
	// Create the path for category
	categoryPath := fmt.Sprintf("/freedevtools/c/%s", category)

	// Generate valid document ID from path
	categoryID := generateCheatsheetID(categoryPath)

	return CheatsheetData{
		ID:          categoryID,
		Name:        fmt.Sprintf("%s cheatsheets", category),
		Description: fmt.Sprintf("Collection of cheatsheets for %s", category),
		Path:        categoryPath,
		Category:    "cheatsheets",
	}
}

func extractHTMLDescription(content string) string {
	// Extract description from meta tag (using regex similar to Python)
	descRegex := regexp.MustCompile(`<meta\s+name=["']description["']\s+content=["']([^"']*)["']`)
	match := descRegex.FindStringSubmatch(content)
	if len(match) > 1 {
		return strings.TrimSpace(match[1])
	}

	// Fallback: try property="og:description"
	ogDescRegex := regexp.MustCompile(`<meta\s+property=["']og:description["']\s+content=["']([^"']*)["']`)
	match = ogDescRegex.FindStringSubmatch(content)
	if len(match) > 1 {
		return strings.TrimSpace(match[1])
	}

	return ""
}

func extractHTMLTitle(content string) string {
	// 1. Try <title> tag first
	titleRegex := regexp.MustCompile(`<title[^>]*>([^<]+)</title>`)
	match := titleRegex.FindStringSubmatch(content)
	if len(match) > 1 {
		title := strings.TrimSpace(match[1])
		if title != "" {
			return cleanTitle(title)
		}
	}

	// 2. Try <meta property="og:title">
	ogTitleRegex := regexp.MustCompile(`<meta\s+property="og:title"\s+content="([^"]+)"`)
	match = ogTitleRegex.FindStringSubmatch(content)
	if len(match) > 1 {
		title := strings.TrimSpace(match[1])
		if title != "" {
			return cleanTitle(title)
		}
	}

	// 3. Try <meta property="twitter:title">
	twitterTitleRegex := regexp.MustCompile(`<meta\s+property="twitter:title"\s+content="([^"]+)"`)
	match = twitterTitleRegex.FindStringSubmatch(content)
	if len(match) > 1 {
		title := strings.TrimSpace(match[1])
		if title != "" {
			return cleanTitle(title)
		}
	}

	// 4. Try H1 tag
	h1Regex := regexp.MustCompile(`<h1[^>]*>([^<]+)</h1>`)
	match = h1Regex.FindStringSubmatch(content)
	if len(match) > 1 {
		title := strings.TrimSpace(match[1])
		if title != "" {
			return cleanTitle(title)
		}
	}

	return ""
}

func cleanTitle(title string) string {
	// Split by | and take only the first part
	parts := strings.Split(title, "|")
	if len(parts) > 0 {
		title = strings.TrimSpace(parts[0])
	}
	
	// Replace common HTML entities and Unicode escapes
	title = strings.ReplaceAll(title, "\\u0026", "&")
	title = strings.ReplaceAll(title, "&amp;", "&")
	title = strings.ReplaceAll(title, "&lt;", "<")
	title = strings.ReplaceAll(title, "&gt;", ">")
	title = strings.ReplaceAll(title, "&quot;", "\"")
	title = strings.ReplaceAll(title, "&#39;", "'")
	title = strings.ReplaceAll(title, "&nbsp;", " ")
	
	// Remove emojis and other Unicode symbols (keep only basic ASCII letters, numbers, spaces, and common punctuation)
	reg := regexp.MustCompile(`[^\x20-\x7E]`)
	title = reg.ReplaceAllString(title, "")
	
	// Clean up multiple spaces
	title = regexp.MustCompile(`\s+`).ReplaceAllString(title, " ")
	title = strings.TrimSpace(title)
	
	return title
}

func formatFilenameAsTitle(filename string) string {
	// Replace underscores with spaces
	formatted := strings.ReplaceAll(filename, "_", " ")
	
	// Split into words and capitalize each word
	words := strings.Fields(formatted)
	for i, word := range words {
		if len(word) > 0 {
			words[i] = strings.ToUpper(string(word[0])) + strings.ToLower(word[1:])
		}
	}
	
	return strings.Join(words, " ")
}

func generateCheatsheetID(path string) string {
	// Remove the base path
	cleanPath := strings.Replace(path, "/freedevtools/c/", "", 1)
	// Remove trailing slash if present
	cleanPath = strings.TrimSuffix(cleanPath, "/")
	// Replace slashes with hyphens
	cleanPath = strings.Replace(cleanPath, "/", "-", -1)
	// Replace any invalid characters with underscores
	reg := regexp.MustCompile(`[^a-zA-Z0-9\-_]`)
	cleanPath = reg.ReplaceAllString(cleanPath, "_")
	// Add prefix
	return fmt.Sprintf("cheatsheets-%s", cleanPath)
}

func RunCheatsheetsOnly(ctx context.Context, start time.Time) {
	fmt.Println("📖 Generating cheatsheets data only...")

	cheatsheets, err := generateCheatsheetsData(ctx)
	if err != nil {
		log.Fatalf("❌ Cheatsheets data generation failed: %v", err)
	}

	// Save to JSON
	if err := saveToJSON("cheatsheets.json", cheatsheets); err != nil {
		log.Fatalf("Failed to save cheatsheets data: %v", err)
	}

	elapsed := time.Since(start)
	fmt.Printf("\n🎉 Cheatsheets data generation completed in %v\n", elapsed)
	fmt.Printf("📊 Generated %d cheatsheets\n", len(cheatsheets))

	// Show sample data
	fmt.Println("\n📝 Sample cheatsheets:")
	for i, sheet := range cheatsheets {
		if i >= 10 { // Show first 10
			fmt.Printf("  ... and %d more cheatsheets\n", len(cheatsheets)-10)
			break
		}
		fmt.Printf("  %d. %s (ID: %s)\n", i+1, sheet.Name, sheet.ID)
		if sheet.Description != "" {
			fmt.Printf("     Description: %s\n", truncateString(sheet.Description, 80))
		}
		fmt.Printf("     Path: %s\n", sheet.Path)
		fmt.Println()
	}

	fmt.Printf("💾 Data saved to output/cheatsheets.json\n")
	
	// Automatically run stem processing
	fmt.Println("\n🔍 Running stem processing...")
	if err := jargon_stemmer.ProcessJSONFile("output/cheatsheets.json"); err != nil {
		log.Fatalf("❌ Stem processing failed: %v", err)
	}
	fmt.Println("✅ Stem processing completed!")
}