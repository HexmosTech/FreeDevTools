package main

import (
	"context"
	"fmt"
	"io/ioutil"
	"path/filepath"
	"regexp"
	"sort"
	"strings"
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

	// Extract H1 title from HTML content
	name := extractHTMLTitle(contentStr)
	if name == "" {
		// Fallback to filename if no H1 found
		name = fileBaseName
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
	// Try H1 tag first
	h1Regex := regexp.MustCompile(`<h1[^>]*>([^<]+)</h1>`)
	match := h1Regex.FindStringSubmatch(content)
	if len(match) > 1 {
		return strings.TrimSpace(match[1])
	}

	return ""
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
