package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"path/filepath"
	"strings"

	_ "github.com/mattn/go-sqlite3"
)

// EmojisProcessor implements Processor for Emoji pages (excluding discord and apple)
type EmojisProcessor struct {
	db *sql.DB
}

// NewEmojisProcessor creates a new Emojis processor
func NewEmojisProcessor() (*EmojisProcessor, error) {
	dbPath := filepath.Join("db", "all_dbs", "emoji-db-v4.db")
	absPath, err := filepath.Abs(dbPath)
	if err != nil {
		return nil, fmt.Errorf("failed to get absolute path: %w", err)
	}

	// Use write mode for updates
	db, err := sql.Open("sqlite3", absPath+"?mode=rw")
	if err != nil {
		return nil, fmt.Errorf("failed to open database: %w", err)
	}

	return &EmojisProcessor{db: db}, nil
}

// Close closes the database connection
func (p *EmojisProcessor) Close() error {
	return p.db.Close()
}

// GetAllPages retrieves all Emoji pages from the database (excluding discord and apple)
func (p *EmojisProcessor) GetAllPages(limit int) ([]PageData, error) {
	query := `
		SELECT 
			slug_hash,
			slug,
			title AS page,
			keywords,
			description,
			category,
			senses AS json_content
		FROM emojis
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
		var slug string
		var title sql.NullString
		var keywords sql.NullString
		var description sql.NullString
		var category sql.NullString
		var jsonContent sql.NullString

		err := rows.Scan(
			&page.HashID,
			&slug,
			&title,
			&keywords,
			&description,
			&category,
			&jsonContent,
		)
		if err != nil {
			continue
		}

		// Parse senses JSON to extract text content
		contentParts := []string{}
		if description.Valid && description.String != "" {
			contentParts = append(contentParts, description.String)
		}

		// Parse senses JSON object (has adjectives, verbs, nouns arrays)
		if jsonContent.Valid && jsonContent.String != "" {
			var senses map[string]interface{}
			if err := json.Unmarshal([]byte(jsonContent.String), &senses); err == nil {
				// Extract adjectives
				if adj, ok := senses["adjectives"].([]interface{}); ok {
					for _, a := range adj {
						if str, ok := a.(string); ok && str != "" {
							contentParts = append(contentParts, str)
						}
					}
				}
				// Extract verbs
				if verbs, ok := senses["verbs"].([]interface{}); ok {
					for _, v := range verbs {
						if str, ok := v.(string); ok && str != "" {
							contentParts = append(contentParts, str)
						}
					}
				}
				// Extract nouns
				if nouns, ok := senses["nouns"].([]interface{}); ok {
					for _, n := range nouns {
						if str, ok := n.(string); ok && str != "" {
							contentParts = append(contentParts, str)
						}
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

		// Get category_hash for category_id
		var categoryHash int64
		if category.Valid && category.String != "" {
			categoryHash = hashStringToInt64(category.String)
		}

		page.Key = slug
		page.CategoryID = categoryHash
		page.Category = category.String
		page.Title = title.String
		page.Description = description.String
		page.Content = strings.Join(contentParts, " ")
		page.Keywords = keywordsText

		pages = append(pages, page)
	}

	return pages, rows.Err()
}

// UpdatePage updates the see_also column for an Emoji page
func (p *EmojisProcessor) UpdatePage(hashID, categoryID int64, seeAlsoJSON string) error {
	query := `
		UPDATE emojis
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
func (p *EmojisProcessor) GetCurrentPath(page PageData) string {
	// Emoji pages use format /freedevtools/emojis/{slug}/
	return fmt.Sprintf("/freedevtools/emojis/%s/", page.Key)
}
