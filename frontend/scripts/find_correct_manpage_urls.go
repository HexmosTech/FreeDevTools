package main

import (
	"database/sql"
	"fmt"
	"log"
	"net/url"
	"os"
	"strings"

	"fdt-templ/internal/db/man_pages"

	_ "github.com/mattn/go-sqlite3"
)

func main() {
	log.SetOutput(os.Stdout)
	log.SetFlags(0)

	// Open database
	dbPath := man_pages.GetDBPath()
	db, err := sql.Open("sqlite3", dbPath)
	if err != nil {
		log.Fatalf("Error opening database: %v", err)
	}
	defer db.Close()

	// Read 404.txt
	inputFile := "404.txt"
	content, err := os.ReadFile(inputFile)
	if err != nil {
		log.Fatalf("Error reading %s: %v", inputFile, err)
	}

	lines := strings.Split(string(content), "\n")
	var outputLines []string

	log.Printf("Processing %d URLs...\n", len(lines))

	for i, line := range lines {
		line = strings.TrimSpace(line)
		if line == "" {
			outputLines = append(outputLines, "")
			continue
		}

		// Parse URL: /freedevtools/man-pages/{mainCategory}/{subCategory}/{slug}/
		// or: /freedevtools/man-pages/{subCategory}/{slug}/
		path := strings.TrimPrefix(line, "/freedevtools/man-pages/")
		path = strings.TrimSuffix(path, "/")
		parts := strings.Split(path, "/")

		var properURL string
		var mainCategory, subCategory, slug string

		if len(parts) == 2 {
			// Format: subCategory/slug (missing mainCategory)
			subCategory = parts[0]
			slug = parts[1]
			// Try to find by slug across all categories
			properURL = findManPageBySlug(db, slug)
		} else if len(parts) == 3 {
			// Format: mainCategory/subCategory/slug
			mainCategory = parts[0]
			subCategory = parts[1]
			slug = parts[2]
			// Unescape URL components
			mainCategory, _ = url.PathUnescape(mainCategory)
			subCategory, _ = url.PathUnescape(subCategory)
			slug, _ = url.PathUnescape(slug)

			// Try exact match first
			properURL = findManPageByCategoryAndSlug(db, mainCategory, subCategory, slug)
			if properURL == "" {
				// If not found, try searching by slug only
				properURL = findManPageBySlug(db, slug)
			}
		} else {
			// Invalid format, keep original
			properURL = line
		}

		// Write: original_url,proper_url
		if properURL == "" {
			properURL = line // If not found, use original
		}
		outputLines = append(outputLines, fmt.Sprintf("%s,%s", line, properURL))

		if (i+1)%50 == 0 {
			log.Printf("Processed %d/%d URLs...", i+1, len(lines))
		}
	}

	// Write back to 404.txt
	output := strings.Join(outputLines, "\n")
	err = os.WriteFile(inputFile, []byte(output), 0644)
	if err != nil {
		log.Fatalf("Error writing to %s: %v", inputFile, err)
	}

	log.Printf("\n✓ Completed! Updated %s with proper URLs", inputFile)
	log.Printf("Format: original_url,proper_url")
}

// findManPageByCategoryAndSlug finds a man page by mainCategory, subCategory, and slug
func findManPageByCategoryAndSlug(db *sql.DB, mainCategory, subCategory, slug string) string {
	// Use hash-based lookup
	hashID := man_pages.HashURLToKey(mainCategory, subCategory, slug)

	var foundMainCategory, foundSubCategory, foundSlug string
	err := db.QueryRow(`
		SELECT main_category, sub_category, slug
		FROM man_pages 
		WHERE hash_id = ?
	`, hashID).Scan(&foundMainCategory, &foundSubCategory, &foundSlug)

	if err == sql.ErrNoRows {
		return ""
	}
	if err != nil {
		return ""
	}

	// Construct proper URL
	return fmt.Sprintf("/freedevtools/man-pages/%s/%s/%s/",
		url.PathEscape(foundMainCategory),
		url.PathEscape(foundSubCategory),
		url.PathEscape(foundSlug))
}

// findManPageBySlug searches for a man page by slug across all categories
func findManPageBySlug(db *sql.DB, slug string) string {
	var foundMainCategory, foundSubCategory, foundSlug string
	err := db.QueryRow(`
		SELECT main_category, sub_category, slug
		FROM man_pages 
		WHERE slug = ?
		LIMIT 1
	`, slug).Scan(&foundMainCategory, &foundSubCategory, &foundSlug)

	if err == sql.ErrNoRows {
		return ""
	}
	if err != nil {
		return ""
	}

	// Construct proper URL
	return fmt.Sprintf("/freedevtools/man-pages/%s/%s/%s/",
		url.PathEscape(foundMainCategory),
		url.PathEscape(foundSubCategory),
		url.PathEscape(foundSlug))
}

