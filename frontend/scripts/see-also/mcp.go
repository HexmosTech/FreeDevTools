package main

import (
	"database/sql"
	"fmt"
	"path/filepath"

	_ "github.com/mattn/go-sqlite3"
)

// McpProcessor implements Processor for MCP pages
type McpProcessor struct {
	db *sql.DB
}

// NewMcpProcessor creates a new MCP processor
func NewMcpProcessor() (*McpProcessor, error) {
	dbPath := filepath.Join("db", "all_dbs", "mcp-db-v6.db")
	absPath, err := filepath.Abs(dbPath)
	if err != nil {
		return nil, fmt.Errorf("failed to get absolute path: %w", err)
	}

	// Use write mode for updates
	db, err := sql.Open("sqlite3", absPath+"?mode=rw")
	if err != nil {
		return nil, fmt.Errorf("failed to open database: %w", err)
	}

	return &McpProcessor{db: db}, nil
}

// Close closes the database connection
func (p *McpProcessor) Close() error {
	return p.db.Close()
}

// GetAllPages retrieves all MCP pages from the database
func (p *McpProcessor) GetAllPages(limit int) ([]PageData, error) {
	query := `
		SELECT hash_id, category_id, key, name, description, readme_content, keywords
		FROM mcp_pages
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
		var name sql.NullString
		var description sql.NullString
		var content sql.NullString
		var keywords sql.NullString

		err := rows.Scan(
			&page.HashID,
			&page.CategoryID,
			&page.Key,
			&name,
			&description,
			&content,
			&keywords,
		)
		if err != nil {
			continue
		}

		page.Title = name.String
		page.Description = description.String
		page.Content = content.String
		page.Keywords = keywords.String

		pages = append(pages, page)
	}

	return pages, rows.Err()
}

// UpdatePage updates the see_also column for an MCP page
func (p *McpProcessor) UpdatePage(hashID, categoryID int64, seeAlsoJSON string) error {
	query := `
		UPDATE mcp_pages
		SET see_also = ?
		WHERE hash_id = ? AND category_id = ?
	`

	_, err := p.db.Exec(query, seeAlsoJSON, hashID, categoryID)
	if err != nil {
		return fmt.Errorf("failed to update page: %w", err)
	}

	return nil
}

// GetCurrentPath returns the current page path for filtering
func (p *McpProcessor) GetCurrentPath(page PageData) string {
	// MCP pages use format /freedevtools/mcp/{category}/{repo}/
	// category_id is a hash, so we need to find the matching category
	var categorySlug string
	query := `SELECT slug FROM category WHERE id = ?`
	err := p.db.QueryRow(query, page.CategoryID).Scan(&categorySlug)
	if err != nil {
		// Fallback: use a generic path (normalization will handle matching)
		return fmt.Sprintf("/freedevtools/mcp/%s", page.Key)
	}

	return fmt.Sprintf("/freedevtools/mcp/%s/%s/", categorySlug, page.Key)
}
