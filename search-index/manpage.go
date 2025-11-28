package main

import (
	"context"
	"database/sql"
	"fmt"
	"log"
	"path/filepath"
	"sort"
	"strings"

	jargon_stemmer "search-index/jargon-stemmer"

	_ "github.com/mattn/go-sqlite3"
)

// ManPageData represents a single man page entry for search indexing
type ManPageData struct {
	ID          string `json:"id"`
	Name        string `json:"name"`
	AltName     string `json:"altName,omitempty"`
	Description string `json:"description,omitempty"`
	Path        string `json:"path"`
	Category    string `json:"category"`
	Subcategory string `json:"subcategory,omitempty"`
	Slug        string `json:"slug,omitempty"`
}

// generateManPagesData queries the database and returns all man page entries
func generateManPagesData(ctx context.Context) ([]ManPageData, error) {
	// Path to the SQLite database
	dbPath := filepath.Join("..", "frontend", "db", "all_dbs", "man-pages-db.db")
	db, err := sql.Open("sqlite3", dbPath)
	if err != nil {
		return nil, fmt.Errorf("failed to open database: %w", err)
	}
	defer db.Close()

	query := `
		SELECT id, title, filename, main_category, sub_category, slug
		FROM man_pages
	`
	rows, err := db.QueryContext(ctx, query)
	if err != nil {
		return nil, fmt.Errorf("failed to query man_pages: %w", err)
	}
	defer rows.Close()

	var manPages []ManPageData

	for rows.Next() {
        var idInt int
        var title, filename, mainCategory, subCategory, slug string

        if err := rows.Scan(&idInt, &title, &filename, &mainCategory, &subCategory, &slug); err != nil {
            log.Printf("Warning: failed to scan row: %v", err)
            continue
        }

        // 1. Create the raw ID first
        rawID := fmt.Sprintf("manpages-%s-%s-%s", mainCategory, subCategory, slug)

        // 2. Sanitize the ENTIRE ID string at once
        // MeiliSearch IDs allows: A-Z, a-z, 0-9, hyphens (-), and underscores (_)
        id := strings.Map(func(r rune) rune {
            if (r >= 'a' && r <= 'z') || 
               (r >= 'A' && r <= 'Z') || 
               (r >= '0' && r <= '9') || 
               r == '-' || r == '_' {
                return r
            }
            // Replace invalid characters with underscore
            // (Or return -1 to remove them entirely)
            return '_' 
        }, rawID)
		name := title
		description := ""
		if idx := strings.Index(title, "—"); idx != -1 {
			name = strings.TrimSpace(title[:idx])
			description = strings.TrimSpace(title[idx+len("—"):])
		} else if idx := strings.Index(title, "-"); idx != -1 {
			name = strings.TrimSpace(title[:idx])
			description = strings.TrimSpace(title[idx+1:])
		}
		altName := filename
		path := fmt.Sprintf("/freedevtools/man-pages/%s/%s/%s/", mainCategory, subCategory, slug)
		category := "man_pages"
		subcategory := subCategory

		manPages = append(manPages, ManPageData{
			ID:          id,
			Name:        name,
			AltName:     altName,
			Description: description,
			Path:        path,
			Category:    category,
			Subcategory: subcategory,
			Slug:        slug,
		})
	}

	// Sort by ID for consistency
	sort.Slice(manPages, func(i, j int) bool {
		return manPages[i].ID < manPages[j].ID
	})

	return manPages, nil
}

// RunManPagesOnly runs only the man page data generation
func RunManPagesOnly(ctx context.Context, startTime int64) {
	fmt.Println("🔧 Generating Man Pages data only...")

	manPages, err := generateManPagesData(ctx)
	if err != nil {
		log.Fatalf("❌ Man Pages data generation failed: %v", err)
	}

	// Save to JSON
	if err := saveToJSON("man_pages.json", manPages); err != nil {
		log.Fatalf("Failed to save Man Pages data: %v", err)
	}

	fmt.Printf("📊 Generated %d Man Pages\n", len(manPages))
	fmt.Printf("💾 Data saved to output/man_pages.json\n")

	// Show sample data
	for i, mp := range manPages {
		if i >= 10 {
			fmt.Printf("  ... and %d more man pages\n", len(manPages)-10)
			break
		}
		fmt.Printf("  %d. %s (ID: %s)\n", i+1, mp.Name, mp.ID)
		fmt.Printf("     Category: %s | Subcategory: %s | Path: %s\n", mp.Category, mp.Subcategory, mp.Path)
	}

	// Automatically run stem processing
	fmt.Println("\n🔍 Running stem processing...")
	if err := jargon_stemmer.ProcessJSONFile("output/man_pages.json"); err != nil {
		log.Fatalf("❌ Stem processing failed: %v", err)
	}
	fmt.Println("✅ Stem processing completed!")
}
