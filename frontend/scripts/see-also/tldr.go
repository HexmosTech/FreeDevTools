package main

import (
	"database/sql"
	"fmt"
	"path/filepath"
	"strings"

	_ "github.com/mattn/go-sqlite3"
)

// TldrProcessor implements Processor for TLDR pages
type TldrProcessor struct {
	db *sql.DB
}

// NewTldrProcessor creates a new TLDR processor
func NewTldrProcessor() (*TldrProcessor, error) {
	dbPath := filepath.Join("db", "all_dbs", "tldr-db-v4.db")
	absPath, err := filepath.Abs(dbPath)
	if err != nil {
		return nil, fmt.Errorf("failed to get absolute path: %w", err)
	}

	// Use write mode for updates
	db, err := sql.Open("sqlite3", absPath+"?mode=rw")
	if err != nil {
		return nil, fmt.Errorf("failed to open database: %w", err)
	}

	return &TldrProcessor{db: db}, nil
}

// Close closes the database connection
func (p *TldrProcessor) Close() error {
	return p.db.Close()
}

// GetAllPages retrieves all TLDR pages from the database
func (p *TldrProcessor) GetAllPages(limit int) ([]PageData, error) {
	query := `
		SELECT
			url_hash AS hash_id,
			REPLACE(title, ' | Online Free DevTools by Hexmos', '') AS page,
			description,
			html_content AS content
		FROM pages
	`
	if limit > 0 {
		query += fmt.Sprintf(" LIMIT %d", limit)
	}

	rows, err := p.db.Query(query)
	if err != nil {
		return nil, fmt.Errorf("failed to query pages: %w", err)
	}
	defer rows.Close()

	var pages []PageData
	for rows.Next() {
		var page PageData
		var title sql.NullString
		var description sql.NullString
		var content sql.NullString

		err := rows.Scan(
			&page.HashID,
			&title,
			&description,
			&content,
		)
		if err != nil {
			continue
		}

		// Get URL to extract platform and command
		var url string
		urlQuery := `SELECT url FROM pages WHERE url_hash = ?`
		err = p.db.QueryRow(urlQuery, page.HashID).Scan(&url)
		if err != nil {
			continue
		}

		// Extract platform and command from URL: /freedevtools/tldr/{platform}/{command}/
		// Remove leading and trailing slashes, split by /
		urlParts := strings.Split(strings.Trim(url, "/"), "/")
		var platform, command string
		if len(urlParts) >= 3 && urlParts[0] == "freedevtools" && urlParts[1] == "tldr" {
			platform = urlParts[2]
			if len(urlParts) >= 4 {
				command = urlParts[3]
			}
		}

		// For TLDR, use platform as category and command as key
		page.CategoryID = hashStringToInt64(platform)
		page.Key = command
		page.Category = platform
		page.Title = title.String
		page.Description = description.String
		page.Content = content.String
		page.Keywords = "" // TLDR doesn't have keywords in this query

		pages = append(pages, page)
	}

	return pages, rows.Err()
}

// UpdatePage updates the see_also column for a TLDR page
func (p *TldrProcessor) UpdatePage(hashID, categoryID int64, seeAlsoJSON string) error {
	query := `
		UPDATE pages
		SET see_also = ?
		WHERE url_hash = ?
	`

	_, err := p.db.Exec(query, seeAlsoJSON, hashID)
	if err != nil {
		return fmt.Errorf("failed to update page: %w", err)
	}

	return nil
}

// GetCurrentPath returns the current page path for filtering
func (p *TldrProcessor) GetCurrentPath(page PageData) string {
	// TLDR pages use format /freedevtools/tldr/{platform}/{command}/
	return fmt.Sprintf("/freedevtools/tldr/%s/%s/", page.Category, page.Key)
}
