package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"path/filepath"
	"strings"

	_ "github.com/mattn/go-sqlite3"
)

// PngIconsProcessor implements Processor for PNG icon pages
type PngIconsProcessor struct {
	db *sql.DB
}

// NewPngIconsProcessor creates a new PNG icons processor
func NewPngIconsProcessor() (*PngIconsProcessor, error) {
	dbPath := filepath.Join("db", "all_dbs", "png-icons-db-v5.db")
	absPath, err := filepath.Abs(dbPath)
	if err != nil {
		return nil, fmt.Errorf("failed to get absolute path: %w", err)
	}

	// Use write mode for updates
	db, err := sql.Open("sqlite3", absPath+"?mode=rw")
	if err != nil {
		return nil, fmt.Errorf("failed to open database: %w", err)
	}

	return &PngIconsProcessor{db: db}, nil
}

// Close closes the database connection
func (p *PngIconsProcessor) Close() error {
	return p.db.Close()
}

// GetAllPages retrieves all PNG icon pages from the database
func (p *PngIconsProcessor) GetAllPages(limit int) ([]PageData, error) {
	query := `
		SELECT 
			url_hash AS hash_id,
			name AS page,
			description,
			usecases,
			industry,
			emotional_cues,
			img_alt,
			tags AS keywords,
			cluster
		FROM icon
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
		var hashID int64
		var name sql.NullString
		var description sql.NullString
		var usecases sql.NullString
		var industry sql.NullString
		var emotionalCues sql.NullString
		var imgAlt sql.NullString
		var tags sql.NullString
		var cluster sql.NullString

		err := rows.Scan(
			&hashID,
			&name,
			&description,
			&usecases,
			&industry,
			&emotionalCues,
			&imgAlt,
			&tags,
			&cluster,
		)
		if err != nil {
			continue
		}

		// Combine all text fields for content
		contentParts := []string{}
		if description.Valid && description.String != "" {
			contentParts = append(contentParts, description.String)
		}
		if usecases.Valid && usecases.String != "" {
			contentParts = append(contentParts, usecases.String)
		}
		if industry.Valid && industry.String != "" {
			contentParts = append(contentParts, industry.String)
		}
		if emotionalCues.Valid && emotionalCues.String != "" {
			contentParts = append(contentParts, emotionalCues.String)
		}
		if imgAlt.Valid && imgAlt.String != "" {
			contentParts = append(contentParts, imgAlt.String)
		}

		// Parse tags JSON if available
		keywordsText := ""
		if tags.Valid && tags.String != "" {
			var tagsList []string
			if err := json.Unmarshal([]byte(tags.String), &tagsList); err == nil {
				keywordsText = strings.Join(tagsList, " ")
			} else {
				keywordsText = tags.String
			}
		}

		page.HashID = hashID
		page.CategoryID = hashStringToInt64(cluster.String)
		page.Key = name.String
		page.Category = cluster.String
		page.Title = name.String
		page.Description = description.String
		page.Content = strings.Join(contentParts, " ")
		page.Keywords = keywordsText

		pages = append(pages, page)
	}

	return pages, rows.Err()
}

// UpdatePage updates the see_also column for a PNG icon page
func (p *PngIconsProcessor) UpdatePage(hashID, categoryID int64, seeAlsoJSON string) error {
	query := `
		UPDATE icon
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
func (p *PngIconsProcessor) GetCurrentPath(page PageData) string {
	// PNG icon pages use format /freedevtools/png_icons/{cluster}/{name}/
	return fmt.Sprintf("/freedevtools/png_icons/%s/%s/", page.Category, page.Key)
}
