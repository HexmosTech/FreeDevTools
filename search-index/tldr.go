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

func generateTLDRData(ctx context.Context) ([]TLDRData, error) {
	fmt.Println("📚 Generating TLDR data...")

	// Path to the SQLite database
	dbPath := filepath.Join("..", "db", "all_dbs", "tldr-db-v5.db")
	db, err := sql.Open("sqlite3", dbPath)
	if err != nil {
		return nil, fmt.Errorf("failed to open database: %w", err)
	}
	defer db.Close()

	// Query all TLDR pages from the database
	query := `
		SELECT url, title, description
		FROM pages
		WHERE url IS NOT NULL AND url != ''
		ORDER BY url
	`
	rows, err := db.QueryContext(ctx, query)
	if err != nil {
		return nil, fmt.Errorf("failed to query pages: %w", err)
	}
	defer rows.Close()

	var tldrData []TLDRData
	processedCount := 0

	for rows.Next() {
		select {
		case <-ctx.Done():
			return nil, ctx.Err()
		default:
		}

		var url string
		var title, description sql.NullString

		if err := rows.Scan(&url, &title, &description); err != nil {
			fmt.Printf("⚠️  Warning: Failed to scan row: %v\n", err)
			continue
		}

		processedCount++
		if processedCount%1000 == 0 {
			fmt.Printf("  Processed %d TLDR entries...\n", processedCount)
		}

		// Ensure path ends with trailing slash
		path := url
		if !strings.HasSuffix(path, "/") {
			path = path + "/"
		}

		// Generate ID from path
		id := generateIDFromPath(path)

		// Use title if available, otherwise extract name from URL
		name := title.String
		if name == "" {
			// Extract name from URL: /freedevtools/tldr/common/tar/ -> tar
			pathParts := strings.Split(strings.TrimSuffix(path, "/"), "/")
			if len(pathParts) > 0 {
				name = pathParts[len(pathParts)-1]
			}
		}
		// Format the name with first letter capitalized
		formattedName := capitalizeFirstLetter(name)
		// Clean name (strip suffixes and trim)
		formattedName = cleanName(formattedName)

		// Use description from database, trim it
		desc := strings.TrimSpace(description.String)
		if desc == "" {
			desc = fmt.Sprintf("TLDR page for %s", formattedName)
		}

		tldrData = append(tldrData, TLDRData{
			ID:          id,
			Name:        formattedName,
			Description: desc,
			Path:        path,
			Category:    "tldr",
		})
	}

	if err := rows.Err(); err != nil {
		return nil, fmt.Errorf("error iterating rows: %w", err)
	}

	fmt.Printf("  Processed %d total TLDR entries\n", processedCount)

	// Sort by ID
	sort.Slice(tldrData, func(i, j int) bool {
		return tldrData[i].ID < tldrData[j].ID
	})

	fmt.Printf("📚 Generated %d TLDR data entries\n", len(tldrData))
	return tldrData, nil
}

func generateIDFromPath(path string) string {
	// Remove the base path and convert to ID format
	cleanPath := strings.Replace(path, "/freedevtools/tldr/", "", 1)

	// Remove trailing slash if present
	cleanPath = strings.TrimSuffix(cleanPath, "/")

	// Replace remaining slashes with dashes
	cleanPath = strings.Replace(cleanPath, "/", "-", -1)

	// Replace any invalid characters with underscores
	reg := regexp.MustCompile(`[^a-zA-Z0-9\-_]`)
	cleanPath = reg.ReplaceAllString(cleanPath, "_")

	return fmt.Sprintf("tldr-%s", sanitizeID(cleanPath))
}

func capitalizeFirstLetter(name string) string {
	if len(name) == 0 {
		return name
	}
	return strings.ToUpper(string(name[0])) + strings.ToLower(name[1:])
}

func RunTLDROnly(ctx context.Context, start time.Time) {
	fmt.Println("📚 Generating TLDR data only...")

	tldr, err := generateTLDRData(ctx)
	if err != nil {
		log.Fatalf("❌ TLDR data generation failed: %v", err)
	}

	// Save to JSON
	if err := saveToJSON("tldr_pages.json", tldr); err != nil {
		log.Fatalf("Failed to save TLDR data: %v", err)
	}

	elapsed := time.Since(start)
	fmt.Printf("\n🎉 TLDR data generation completed in %v\n", elapsed)
	fmt.Printf("📊 Generated %d TLDR pages\n", len(tldr))

	// Show sample data
	fmt.Println("\n📝 Sample TLDR pages:")
	for i, page := range tldr {
		if i >= 10 { // Show first 10
			fmt.Printf("  ... and %d more pages\n", len(tldr)-10)
			break
		}
		fmt.Printf("  %d. %s (ID: %s, Category: %s)\n", i+1, page.Name, page.ID, page.Category)
		if page.Description != "" {
			fmt.Printf("     Description: %s\n", truncateString(page.Description, 80))
		}
		fmt.Printf("     Path: %s\n", page.Path)
		fmt.Println()
	}

	fmt.Printf("💾 Data saved to output/tldr_pages.json\n")

	// Automatically run stem processing
	fmt.Println("\n🔍 Running stem processing...")
	if err := jargon_stemmer.ProcessJSONFile("output/tldr_pages.json"); err != nil {
		log.Fatalf("❌ Stem processing failed: %v", err)
	}
	fmt.Println("✅ Stem processing completed!")
}
