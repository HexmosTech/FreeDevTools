package main

import (
	"crypto/sha256"
	"database/sql"
	"encoding/binary"
	"fmt"
	"log"
	"net/url"
	"os"
	"path/filepath"
	"strings"

	_ "github.com/mattn/go-sqlite3"
)

// HashURLToKey generates a hash ID from mainCategory, subCategory, and slug
func HashURLToKey(mainCategory, subCategory, slug string) int64 {
	combined := mainCategory + subCategory + slug
	hash := sha256.Sum256([]byte(combined))
	return int64(binary.BigEndian.Uint64(hash[:8]))
}

type ManPageRecord struct {
	MainCategory string
	SubCategory  string
	Slug         string
	Title        string
	Filename     string
	HashID       int64
}

func main() {
	dbPath := filepath.Join("db", "all_dbs", "man-pages-db-v4.db")
	if len(os.Args) > 1 {
		dbPath = os.Args[1]
	}

	db, err := sql.Open("sqlite3", dbPath)
	if err != nil {
		log.Fatalf("Failed to open database: %v", err)
	}
	defer db.Close()

	// Sample 404 URLs from the file
	notFoundURLs := []string{
		"/freedevtools/man-pages/games/game/performous/",
		"/freedevtools/man-pages/system-calls/filesystem-&-metadata/nvme_identify_ns/",
		"/freedevtools/man-pages/library-functions/value/zt_false-zt_false/",
		"/freedevtools/man-pages/library-functions/value/mpi_info_set/",
		"/freedevtools/man-pages/library-functions/value/glclearcolor/",
		"/freedevtools/man-pages/system-admin/process-and-service-management/pacemaker-11/",
		"/freedevtools/man-pages/system-admin/process-and-service-management/kprobe/",
		"/freedevtools/man-pages/system-admin/process-and-service-management/bpftool-map/",
		"/freedevtools/man-pages/system-admin/process-and-service-management/asql/",
		"/freedevtools/man-pages/system-admin/process-and-service-management/aa-logprof/",
		"/freedevtools/man-pages/system-admin/process-and-service-management/28/",
	}

	fmt.Println("=== ROOT CAUSE ANALYSIS: Man-Pages 404 Errors ===\n")

	for _, fullURL := range notFoundURLs {
		// Extract path segments
		path := strings.TrimPrefix(fullURL, "/freedevtools/man-pages/")
		path = strings.TrimSuffix(path, "/")
		parts := strings.Split(path, "/")

		if len(parts) != 3 {
			continue
		}

		category := parts[0]
		subcategory := parts[1]
		slug := parts[2]

		// Unescape URL-encoded parts
		if decoded, err := url.QueryUnescape(category); err == nil {
			category = decoded
		}
		if decoded, err := url.QueryUnescape(subcategory); err == nil {
			subcategory = decoded
		}
		if decoded, err := url.QueryUnescape(slug); err == nil {
			slug = decoded
		}

		fmt.Printf("404 URL: %s\n", fullURL)
		fmt.Printf("  Parsed: category=%s, subcategory=%s, slug=%s\n", category, subcategory, slug)

		// Check if category/subcategory exists
		var catCount, subcatCount int
		db.QueryRow("SELECT COUNT(*) FROM category WHERE name = ?", category).Scan(&catCount)
		db.QueryRow("SELECT COUNT(*) FROM sub_category WHERE main_category = ? AND name = ?", category, subcategory).Scan(&subcatCount)

		fmt.Printf("  Category exists: %v, Subcategory exists: %v\n", catCount > 0, subcatCount > 0)

		// Calculate expected hash
		expectedHash := HashURLToKey(category, subcategory, slug)
		fmt.Printf("  Expected hash_id: %d\n", expectedHash)

		// Check if hash exists in database
		var exists bool
		db.QueryRow("SELECT EXISTS(SELECT 1 FROM man_pages WHERE hash_id = ?)", expectedHash).Scan(&exists)
		fmt.Printf("  Hash exists in DB: %v\n", exists)

		// If hash doesn't exist, search for similar slugs in same category/subcategory
		if !exists {
			rows, err := db.Query(`
				SELECT slug, title, filename, hash_id 
				FROM man_pages 
				WHERE main_category = ? AND sub_category = ?
				LIMIT 5
			`, category, subcategory)
			if err == nil {
				fmt.Printf("  Similar pages in same category/subcategory:\n")
				for rows.Next() {
					var rec ManPageRecord
					rows.Scan(&rec.Slug, &rec.Title, &rec.Filename, &rec.HashID)
					fmt.Printf("    - slug: %s, title: %s, filename: %s\n", rec.Slug, rec.Title, rec.Filename)
				}
				rows.Close()
			}

			// Check if slug exists with different category/subcategory
			var altCount int
			db.QueryRow("SELECT COUNT(*) FROM man_pages WHERE slug = ?", slug).Scan(&altCount)
			if altCount > 0 {
				fmt.Printf("  Slug '%s' exists %d times in DB (possibly different category/subcategory)\n", slug, altCount)
				rows, err := db.Query(`
					SELECT main_category, sub_category, slug, title 
					FROM man_pages 
					WHERE slug = ?
					LIMIT 3
				`, slug)
				if err == nil {
					for rows.Next() {
						var mc, sc, s, t string
						rows.Scan(&mc, &sc, &s, &t)
						fmt.Printf("    Found in: %s/%s/%s (title: %s)\n", mc, sc, s, t)
					}
					rows.Close()
				}
			}
		}

		fmt.Println()
	}

	// Summary statistics
	fmt.Println("=== SUMMARY ===")
	var totalPages int
	db.QueryRow("SELECT COUNT(*) FROM man_pages").Scan(&totalPages)
	fmt.Printf("Total man pages in DB: %d\n", totalPages)

	var totalCategories int
	db.QueryRow("SELECT COUNT(*) FROM category").Scan(&totalCategories)
	fmt.Printf("Total categories in DB: %d\n", totalCategories)

	var totalSubcategories int
	db.QueryRow("SELECT COUNT(*) FROM sub_category").Scan(&totalSubcategories)
	fmt.Printf("Total subcategories in DB: %d\n", totalSubcategories)
}
