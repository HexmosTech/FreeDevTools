package main

import (
	"database/sql"
	"flag"
	"fmt"
	"log"
	"regexp"
	"strings"

	_ "github.com/mattn/go-sqlite3"
)

// DefaultDBPath points to the standard location
const DefaultDBPath = "/home/gk/hex/fdt-templ/db/all_dbs/mcp-db-v6.db"

func main() {
	dbPathPtr := flag.String("db", DefaultDBPath, "Path to the SQLite database")
	revertPtr := flag.Bool("revert", false, "Revert changes (restore src from no-src)")
	flag.Parse()

	fmt.Printf("Opening database: %s\n", *dbPathPtr)
	if *revertPtr {
		fmt.Println("MODE: REVERT (Restoring hidden images)")
	} else {
		fmt.Println("MODE: HIDE (Hiding 12px images)")
	}

	db, err := sql.Open("sqlite3", *dbPathPtr)
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	// 1. Select only rows that likely contain image tags
	rows, err := db.Query("SELECT hash_id, readme_content FROM mcp_pages WHERE readme_content LIKE '%<img%'")
	if err != nil {
		log.Fatal(err)
	}
	defer rows.Close()

	// 2. Compile Regex
	// This finds the entire <img ... > tag
	reImgTag := regexp.MustCompile(`(?i)<img\s+[^>]+>`)

	// Enable Mode Regexes (src -> no-src)
	reSrcAttr := regexp.MustCompile(`(?i)(\s+)src=`)
	reSrcStart := regexp.MustCompile(`(?i)(<\s*img\s+)src=`)

	// Revert Mode Regexes (no-src -> src)
	reNoSrcAttr := regexp.MustCompile(`(?i)(\s+)no-src=`)
	reNoSrcStart := regexp.MustCompile(`(?i)(<\s*img\s+)no-src=`)

	fmt.Println("Scanning rows...")

	updateCount := 0
	modifiedRows := 0

	// Start a transaction for bulk updates
	tx, err := db.Begin()
	if err != nil {
		log.Fatal(err)
	}

	// Prepare the update statement within the transaction
	stmt, err := tx.Prepare("UPDATE mcp_pages SET readme_content = ? WHERE hash_id = ?")
	if err != nil {
		tx.Rollback()
		log.Fatal(err)
	}
	defer stmt.Close()

	for rows.Next() {
		var hashID string
		var content string

		if err := rows.Scan(&hashID, &content); err != nil {
			log.Println("Error scanning row:", err)
			continue
		}

		originalContent := content

		// Find all <img ...> tags in the content
		content = reImgTag.ReplaceAllStringFunc(content, func(imgTag string) string {

			// Filter: ONLY touch images with height="12" as requested
			if !strings.Contains(strings.ToLower(imgTag), `height="12"`) {
				return imgTag
			}

			if *revertPtr {
				// --- REVERT MODE: no-src -> src ---

				// Check if this specific tag has no-src to replace
				if !strings.Contains(strings.ToLower(imgTag), "no-src=") {
					return imgTag
				}

				// Avoid restoring if src already exists (prevent duplicates/mess)
				if strings.Contains(strings.ToLower(imgTag), " src=") {
					return imgTag
				}

				// Replace ' no-src=' with ' src='
				newTag := reNoSrcAttr.ReplaceAllString(imgTag, "${1}src=")

				// Replace '<img no-src=' with '<img src='
				newTag = reNoSrcStart.ReplaceAllString(newTag, "${1}src=")

				if newTag != imgTag {
					updateCount++
				}
				return newTag

			} else {
				// --- HIDE MODE: src -> no-src ---

				// Check if this specific tag actually has a src attribute to replace
				if !strings.Contains(strings.ToLower(imgTag), "src=") {
					return imgTag
				}

				// Don't touch it if it already has no-src
				if strings.Contains(strings.ToLower(imgTag), "no-src=") {
					return imgTag
				}

				// Replace ' src=' with ' no-src=' (Standard case)
				newTag := reSrcAttr.ReplaceAllString(imgTag, "${1}no-src=")

				// Replace '<img src=' with '<img no-src=' (Edge case: src is first attr)
				newTag = reSrcStart.ReplaceAllString(newTag, "${1}no-src=")

				if newTag != imgTag {
					updateCount++
				}
				return newTag
			}
		})

		// Only update the database if something actually changed
		if content != originalContent {
			_, err := stmt.Exec(content, hashID)
			if err != nil {
				log.Printf("Failed to update row %s: %v\n", hashID, err)
			} else {
				modifiedRows++
			}
		}
	}

	// Commit the transaction
	if err := tx.Commit(); err != nil {
		log.Fatal(err)
	}

	fmt.Println("------------------------------------------------")
	fmt.Printf("Process Complete.\n")
	fmt.Printf("Total <img> tags modified: %d\n", updateCount)
	fmt.Printf("Total Rows updated in DB:  %d\n", modifiedRows)
	fmt.Println("------------------------------------------------")
}
