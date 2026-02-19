package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"path/filepath"
	"strings"

	_ "github.com/mattn/go-sqlite3"
)
var IPM_DB_FILE = "ipm-db-v6.db"
// IpmProcessor implements Processor for IPM (Installerpedia) pages
type IpmProcessor struct {
	db *sql.DB
}

// NewIpmProcessor creates a new IPM processor
func NewIpmProcessor() (*IpmProcessor, error) {
	dbPath := filepath.Join("db", "all_dbs", IPM_DB_FILE)
	absPath, err := filepath.Abs(dbPath)
	if err != nil {
		return nil, fmt.Errorf("failed to get absolute path: %w", err)
	}

	// Use write mode for updates
	db, err := sql.Open("sqlite3", absPath+"?mode=rw")
	if err != nil {
		return nil, fmt.Errorf("failed to open database: %w", err)
	}

	return &IpmProcessor{db: db}, nil
}

// Close closes the database connection
func (p *IpmProcessor) Close() error {
	return p.db.Close()
}

// GetAllPages retrieves all IPM pages from the database
func (p *IpmProcessor) GetAllPages(limit int) ([]PageData, error) {
	query := `
		SELECT 
			slug_hash,
			category_hash,
			repo AS page,
			keywords,
			description,
			resources_of_interest AS json_content
		FROM ipm_data
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
		var repo sql.NullString
		var keywords sql.NullString
		var description sql.NullString
		var jsonContent sql.NullString

		err := rows.Scan(
			&page.HashID,
			&page.CategoryID,
			&repo,
			&keywords,
			&description,
			&jsonContent,
		)
		if err != nil {
			continue
		}

		// Parse resources_of_interest JSON to extract text content
		contentParts := []string{}
		if description.Valid && description.String != "" {
			contentParts = append(contentParts, description.String)
		}

		// Parse resources_of_interest JSON array
		if jsonContent.Valid && jsonContent.String != "" {
			var resources []map[string]interface{}
			if err := json.Unmarshal([]byte(jsonContent.String), &resources); err == nil {
				for _, res := range resources {
					if title, ok := res["title"].(string); ok && title != "" {
						contentParts = append(contentParts, title)
					}
					if reason, ok := res["reason"].(string); ok && reason != "" {
						contentParts = append(contentParts, reason)
					}
				}
			}
		}

		// Parse keywords JSON array if available
		keywordsText := ""
		if keywords.Valid && keywords.String != "" {
			var keywordsList []string
			if err := json.Unmarshal([]byte(keywords.String), &keywordsList); err == nil {
				keywordsText = strings.Join(keywordsList, " ")
			} else {
				keywordsText = keywords.String
			}
		}

		// Get category name from category_hash
		var categoryName string
		categoryQuery := `SELECT repo_type FROM ipm_category WHERE category_hash = ?`
		err = p.db.QueryRow(categoryQuery, page.CategoryID).Scan(&categoryName)
		if err != nil {
			// Fallback: use empty string
			categoryName = ""
		}

		// Get repo_slug for the key
		var repoSlug string
		slugQuery := `SELECT repo_slug FROM ipm_data WHERE slug_hash = ?`
		err = p.db.QueryRow(slugQuery, page.HashID).Scan(&repoSlug)
		if err != nil {
			// Fallback: use repo name
			repoSlug = repo.String
		}

		page.Key = repoSlug
		page.Category = categoryName
		page.Title = repo.String
		page.Description = description.String
		page.Content = strings.Join(contentParts, " ")
		page.Keywords = keywordsText

		pages = append(pages, page)
	}

	return pages, rows.Err()
}

// UpdatePage updates the see_also column for an IPM page
func (p *IpmProcessor) UpdatePage(hashID, categoryID int64, seeAlsoJSON string) error {
	query := `
		UPDATE ipm_data
		SET see_also = ?
		WHERE slug_hash = ?
	`

	_, err := p.db.Exec(query, seeAlsoJSON, hashID)
	if err != nil {
		return fmt.Errorf("failed to update page: %w", err)
	}

	return nil
}

// GetCurrentPath returns the current page path for filtering
func (p *IpmProcessor) GetCurrentPath(page PageData) string {
	// IPM pages use format /freedevtools/installerpedia/{category}/{slug}/
	return fmt.Sprintf("/freedevtools/installerpedia/%s/%s/", page.Category, page.Key)
}
