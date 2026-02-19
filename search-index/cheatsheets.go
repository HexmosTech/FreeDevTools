package main

import (
	"context"
	"database/sql"
	"fmt"
	"log"
	"path/filepath"
	"regexp"
	jargon_stemmer "search-index/jargon-stemmer"
	"sort"
	"strings"
	"time"

	_ "github.com/mattn/go-sqlite3"
)

func generateCheatsheetsData(ctx context.Context) ([]CheatsheetData, error) {
	fmt.Println("📖 Generating cheatsheets data...")

	// Path to the SQLite database
	dbPath := filepath.Join("..", "db", "all_dbs", "cheatsheets-db-v5.db")
	db, err := sql.Open("sqlite3", dbPath)
	if err != nil {
		return nil, fmt.Errorf("failed to open database: %w", err)
	}
	defer db.Close()

	var cheatsheetsData []CheatsheetData
	categoriesSet := make(map[string]bool) // To track unique categories

	// Query all cheatsheets from the database
	query := `
		SELECT category, slug, title, description
		FROM cheatsheet
		ORDER BY category, slug
	`
	rows, err := db.QueryContext(ctx, query)
	if err != nil {
		return nil, fmt.Errorf("failed to query cheatsheets: %w", err)
	}
	defer rows.Close()

	for rows.Next() {
		select {
		case <-ctx.Done():
			return nil, ctx.Err()
		default:
		}

		var category, slug string
		var title, description sql.NullString

		if err := rows.Scan(&category, &slug, &title, &description); err != nil {
			fmt.Printf("⚠️  Warning: Failed to scan row: %v\n", err)
			continue
		}

		// Generate path
		fullPath := fmt.Sprintf("/freedevtools/c/%s/%s/", category, slug)

		// Generate ID
		id := generateCheatsheetID(fullPath)

		// Use title if available, otherwise format slug as title
		name := title.String
		if name == "" {
			name = formatFilenameAsTitle(slug)
		} else {
			name = cleanTitle(name)
		}
		// Clean name (strip suffixes and trim)
		name = cleanName(name)

		// Use description if available, otherwise create default
		desc := strings.TrimSpace(description.String)
		if desc == "" {
			desc = fmt.Sprintf("Cheatsheet for %s", name)
		}

		cheatsheetData := CheatsheetData{
			ID:          id,
			Name:        name,
			Description: desc,
			Path:        fullPath,
			Category:    "cheatsheets",
		}

		cheatsheetsData = append(cheatsheetsData, cheatsheetData)
		// Track the category
		if category != "" {
			categoriesSet[category] = true
		}
	}

	if err := rows.Err(); err != nil {
		return nil, fmt.Errorf("error iterating rows: %w", err)
	}

	// Add entries for each category
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

func createCategoryEntry(category string) CheatsheetData {
	// Create the path for category
	categoryPath := fmt.Sprintf("/freedevtools/c/%s", category)

	// Generate valid document ID from path
	categoryID := generateCheatsheetID(categoryPath)

	return CheatsheetData{
		ID:          categoryID,
		Name:        strings.TrimSpace(fmt.Sprintf("%s cheatsheets", category)),
		Description: strings.TrimSpace(fmt.Sprintf("Collection of cheatsheets for %s", category)),
		Path:        categoryPath,
		Category:    "cheatsheets",
	}
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
