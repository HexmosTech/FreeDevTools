package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"html"
	"log"
	"path/filepath"
	"regexp"
	"sort"
	"strings"

	man_pages_db "fdt-templ/internal/db/man_pages"

	_ "github.com/mattn/go-sqlite3"
)

// renderContentToHTML converts ManPageContent JSON to HTML matching the template structure
func renderContentToHTML(content man_pages_db.ManPageContent) string {
	if len(content) == 0 {
		return ""
	}

	// Sort sections alphabetically (matching getTOCSections logic)
	var sections []string
	for section := range content {
		if content[section] != "" {
			sections = append(sections, section)
		}
	}
	sort.Strings(sections)

	var htmlBuilder strings.Builder

	// TOC Section (matching prod.html structure)
	htmlBuilder.WriteString(`<div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-0 rounded-lg p-4 mb-6"><h2 class="text-lg font-semibold mb-3">Contents</h2><nav class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">`)
	for _, section := range sections {
		sectionID := strings.ToLower(section)
		htmlBuilder.WriteString(fmt.Sprintf(
			`<a href="#%s" class="block px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded transition-colors">%s</a>`,
			html.EscapeString(sectionID),
			html.EscapeString(section),
		))
	}
	htmlBuilder.WriteString(`</nav></div>`)

	// Main Content Section with outer wrapper
	htmlBuilder.WriteString(`<div class="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-6"><div class="space-y-8">`)

	for _, section := range sections {
		contentText := content[section]
		if contentText == "" {
			continue
		}

		// Content is already HTML, don't escape it (template uses @templ.Raw())
		// Only escape the section name and ID for safety
		sectionID := strings.ToLower(section)

		htmlBuilder.WriteString(fmt.Sprintf(
			`<section id="%s"><h2 class="text-xl font-bold font-mono mb-4 scroll-mt-32">%s</h2><div class="font-mono text-sm leading-relaxed whitespace-pre-wrap bg-white dark:bg-slate-900 p-2 rounded border border-slate-200 dark:border-slate-700 overflow-x-auto">%s</div></section>`,
			html.EscapeString(sectionID),
			html.EscapeString(section),
			contentText, // Raw HTML content, not escaped
		))
	}

	htmlBuilder.WriteString(`</div></div>`)

	// Minify HTML by removing unnecessary whitespace between tags
	return minifyHTML(htmlBuilder.String())
}

// minifyHTML removes unnecessary whitespace from HTML while preserving content whitespace
func minifyHTML(html string) string {
	// Remove whitespace between tags (but preserve whitespace inside text nodes)
	// This regex matches > followed by whitespace followed by <
	html = regexp.MustCompile(`>\s+<`).ReplaceAllString(html, "><")

	// Remove leading/trailing whitespace from the entire string
	html = strings.TrimSpace(html)

	return html
}

func main() {
	// Get database path
	dbPath, err := man_pages_db.GetDBPath()
	if err != nil {
		log.Fatalf("Error getting DB path: %v", err)
	}
	absPath, err := filepath.Abs(dbPath)
	if err != nil {
		log.Fatalf("Failed to resolve database path: %v", err)
	}

	// Connect to database in writable mode (no read-only flags)
	connStr := absPath
	conn, err := sql.Open("sqlite3", connStr)
	if err != nil {
		log.Fatalf("Failed to open database: %v", err)
	}
	defer conn.Close()

	// Test connection
	if err := conn.Ping(); err != nil {
		log.Fatalf("Failed to ping database: %v", err)
	}

	log.Printf("Connected to database: %s", absPath)

	// Drop content_html column if it exists
	// SQLite 3.35.0+ supports DROP COLUMN, but we need to handle gracefully
	log.Println("Attempting to drop content_html column if it exists...")
	_, err = conn.Exec("ALTER TABLE man_pages DROP COLUMN content_html")
	if err != nil {
		// Column might not exist or SQLite version doesn't support DROP COLUMN
		// Check if error is about column not existing
		if !strings.Contains(err.Error(), "no such column") && !strings.Contains(err.Error(), "DROP COLUMN") {
			log.Printf("Warning: Could not drop column (may not exist or SQLite version < 3.35.0): %v", err)
		} else {
			log.Println("Column does not exist or cannot be dropped (this is OK)")
		}
	} else {
		log.Println("✓ Dropped content_html column")
	}

	// Add content_html column
	log.Println("Adding content_html column...")
	_, err = conn.Exec("ALTER TABLE man_pages ADD COLUMN content_html TEXT")
	if err != nil {
		if strings.Contains(err.Error(), "duplicate column") {
			log.Println("Column already exists, continuing...")
		} else {
			log.Fatalf("Failed to add content_html column: %v", err)
		}
	} else {
		log.Println("✓ Added content_html column")
	}

	// Query all rows with content
	log.Println("Querying all man pages...")
	rows, err := conn.Query("SELECT hash_id, content FROM man_pages WHERE content IS NOT NULL AND content != ''")
	if err != nil {
		log.Fatalf("Failed to query man pages: %v", err)
	}
	defer rows.Close()

	var totalRows int
	var processedRows int
	var updatedRows int

	// Process rows in batches
	batchSize := 100
	batch := make([]struct {
		hashID  int64
		content string
		html    string
	}, 0, batchSize)

	for rows.Next() {
		var hashID int64
		var contentJSON string

		if err := rows.Scan(&hashID, &contentJSON); err != nil {
			log.Printf("Error scanning row: %v", err)
			continue
		}

		totalRows++

		// Parse JSON content
		var content man_pages_db.ManPageContent
		if err := json.Unmarshal([]byte(contentJSON), &content); err != nil {
			log.Printf("Error parsing JSON for hash_id %d: %v", hashID, err)
			continue
		}

		// Render to HTML
		htmlContent := renderContentToHTML(content)

		batch = append(batch, struct {
			hashID  int64
			content string
			html    string
		}{hashID: hashID, content: contentJSON, html: htmlContent})

		// Process batch when full
		if len(batch) >= batchSize {
			if err := updateBatch(conn, batch); err != nil {
				log.Printf("Error updating batch: %v", err)
			} else {
				updatedRows += len(batch)
				processedRows += len(batch)
			}
			batch = batch[:0] // Clear batch
		}
	}

	// Process remaining batch
	if len(batch) > 0 {
		if err := updateBatch(conn, batch); err != nil {
			log.Printf("Error updating final batch: %v", err)
		} else {
			updatedRows += len(batch)
			processedRows += len(batch)
		}
	}

	if err := rows.Err(); err != nil {
		log.Fatalf("Error iterating rows: %v", err)
	}

	log.Printf("✓ Processing complete!")
	log.Printf("  Total rows: %d", totalRows)
	log.Printf("  Processed: %d", processedRows)
	log.Printf("  Updated: %d", updatedRows)
}

func updateBatch(conn *sql.DB, batch []struct {
	hashID  int64
	content string
	html    string
}) error {
	tx, err := conn.Begin()
	if err != nil {
		return fmt.Errorf("failed to begin transaction: %w", err)
	}
	defer tx.Rollback()

	stmt, err := tx.Prepare("UPDATE man_pages SET content_html = ? WHERE hash_id = ?")
	if err != nil {
		return fmt.Errorf("failed to prepare statement: %w", err)
	}
	defer stmt.Close()

	for _, item := range batch {
		if _, err := stmt.Exec(item.html, item.hashID); err != nil {
			return fmt.Errorf("failed to update hash_id %d: %w", item.hashID, err)
		}
	}

	if err := tx.Commit(); err != nil {
		return fmt.Errorf("failed to commit transaction: %w", err)
	}

	return nil
}
