package main

import (
	"crypto/sha256"
	"database/sql"
	"encoding/binary"
	"fmt"
	"path/filepath"

	_ "github.com/mattn/go-sqlite3"
)

// CheatsheetProcessor implements Processor for Cheatsheet pages
type CheatsheetProcessor struct {
	db *sql.DB
}

// NewCheatsheetProcessor creates a new Cheatsheet processor
func NewCheatsheetProcessor() (*CheatsheetProcessor, error) {
	dbPath := filepath.Join("db", "all_dbs", "cheatsheets-db-v5.db")
	absPath, err := filepath.Abs(dbPath)
	if err != nil {
		return nil, fmt.Errorf("failed to get absolute path: %w", err)
	}

	// Use write mode for updates
	db, err := sql.Open("sqlite3", absPath+"?mode=rw")
	if err != nil {
		return nil, fmt.Errorf("failed to open database: %w", err)
	}

	return &CheatsheetProcessor{db: db}, nil
}

// Close closes the database connection
func (p *CheatsheetProcessor) Close() error {
	return p.db.Close()
}

// GetAllPages retrieves all Cheatsheet pages from the database
func (p *CheatsheetProcessor) GetAllPages(limit int) ([]PageData, error) {
	query := `
		SELECT hash_id, category, slug, title, description, content, keywords
		FROM cheatsheet
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
		var category string
		var slug string
		var title sql.NullString
		var description sql.NullString
		var content sql.NullString
		var keywords sql.NullString

		err := rows.Scan(
			&page.HashID,
			&category,
			&slug,
			&title,
			&description,
			&content,
			&keywords,
		)
		if err != nil {
			continue
		}

		// For cheatsheets, category_id is the hash of category
		page.CategoryID = hashStringToInt64(category)
		page.Key = slug
		page.Category = category
		page.Title = title.String
		page.Description = description.String
		page.Content = content.String
		page.Keywords = keywords.String

		pages = append(pages, page)
	}

	return pages, rows.Err()
}

// UpdatePage updates the see_also column for a Cheatsheet page
func (p *CheatsheetProcessor) UpdatePage(hashID, categoryID int64, seeAlsoJSON string) error {
	query := `
		UPDATE cheatsheet
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
func (p *CheatsheetProcessor) GetCurrentPath(page PageData) string {
	// Cheatsheet pages use format /freedevtools/cheatsheets/{category}/{slug}/
	return fmt.Sprintf("/freedevtools/cheatsheets/%s/%s/", page.Category, page.Key)
}

// hashStringToInt64 generates a hash ID from a string (same as HashToID)
func hashStringToInt64(s string) int64 {
	hash := sha256.Sum256([]byte(s))
	return int64(binary.BigEndian.Uint64(hash[:8]))
}
