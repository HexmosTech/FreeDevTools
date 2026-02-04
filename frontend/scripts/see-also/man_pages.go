package main

import (
	"database/sql"
	"fmt"
	"path/filepath"
	"strings"

	_ "github.com/mattn/go-sqlite3"
)

// ManPagesProcessor implements Processor for Man Pages
type ManPagesProcessor struct {
	db *sql.DB
}

// NewManPagesProcessor creates a new Man Pages processor
func NewManPagesProcessor() (*ManPagesProcessor, error) {
	dbPath := filepath.Join("db", "all_dbs", "man-pages-db-v4.db")
	absPath, err := filepath.Abs(dbPath)
	if err != nil {
		return nil, fmt.Errorf("failed to get absolute path: %w", err)
	}

	// Use write mode for updates
	db, err := sql.Open("sqlite3", absPath+"?mode=rw")
	if err != nil {
		return nil, fmt.Errorf("failed to open database: %w", err)
	}

	return &ManPagesProcessor{db: db}, nil
}

// Close closes the database connection
func (p *ManPagesProcessor) Close() error {
	return p.db.Close()
}

// GetAllPages retrieves all Man Pages from the database
func (p *ManPagesProcessor) GetAllPages(limit int) ([]PageData, error) {
	query := `
		SELECT 
			hash_id,
			category_hash,
			main_category,
			sub_category,
			title,
			slug,
			content_html
		FROM man_pages
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
		var mainCategory string
		var subCategory string
		var title sql.NullString
		var slug sql.NullString
		var contentHTML sql.NullString

		err := rows.Scan(
			&page.HashID,
			&page.CategoryID,
			&mainCategory,
			&subCategory,
			&title,
			&slug,
			&contentHTML,
		)
		if err != nil {
			continue
		}

		// Strip HTML from content_html for text extraction
		contentText := ""
		if contentHTML.Valid && contentHTML.String != "" {
			contentText = StripHTML(contentHTML.String)
		}

		page.Key = slug.String
		page.Category = fmt.Sprintf("%s/%s", mainCategory, subCategory)
		page.Title = title.String
		page.Description = "" // Man pages don't have description field
		page.Content = contentText
		page.Keywords = title.String // Use title as keywords

		pages = append(pages, page)
	}

	return pages, rows.Err()
}

// UpdatePage updates the see_also column for a Man Page
func (p *ManPagesProcessor) UpdatePage(hashID, categoryID int64, seeAlsoJSON string) error {
	query := `
		UPDATE man_pages
		SET see_also = ?
		WHERE hash_id = ?
	`

	_, err := p.db.Exec(query, seeAlsoJSON, hashID)
	if err != nil {
		return fmt.Errorf("failed to update page: %w", err)
	}

	return nil
}

// GetCurrentPath returns the current page path for filtering
func (p *ManPagesProcessor) GetCurrentPath(page PageData) string {
	// Man pages use format /freedevtools/man-pages/{main_category}/{sub_category}/{slug}/
	// page.Category is "main_category/sub_category"
	parts := strings.Split(page.Category, "/")
	if len(parts) == 2 {
		return fmt.Sprintf("/freedevtools/man-pages/%s/%s/%s/", parts[0], parts[1], page.Key)
	}
	// Fallback
	return fmt.Sprintf("/freedevtools/man-pages/%s/", page.Key)
}
