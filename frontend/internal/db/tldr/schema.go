package tldr

import (
	"database/sql"
)

// Overview represents section stats
type Overview struct {
	TotalCount    int    `json:"total_count"`
	TotalClusters int    `json:"total_clusters"`
	TotalPages    int    `json:"total_pages"`
	LastUpdatedAt string `json:"last_updated_at"`
}

// PageMetadata represents the metadata for a TLDR page
type PageMetadata struct {
	Keywords []string `json:"keywords"`
	Features []string `json:"features"`
}

// Page represents a TLDR page
type Page struct {
	Title       string       `json:"title"`
	Description string       `json:"description"`
	HTMLContent string       `json:"html_content"`
	Metadata    PageMetadata `json:"metadata"`
	SeeAlso     string       `json:"see_also"` // JSON string containing array of objects
	UpdatedAt   string       `json:"updated_at"`
}

// PreviewCommand represents a command preview
type PreviewCommand struct {
	Name string `json:"name"`
	URL  string `json:"url"`
}

// Command represents a full command definition (extends PreviewCommand)
type Command struct {
	Name        string   `json:"name"`
	URL         string   `json:"url"`
	Description string   `json:"description"`
	Features    []string `json:"features"`
	UpdatedAt   string   `json:"updated_at"`
}

// Cluster represents a group of commands (platform)
type Cluster struct {
	Name            string           `json:"name"`
	Count           int              `json:"count"`
	PreviewCommands []PreviewCommand `json:"preview_commands"`
	UpdatedAt       string           `json:"updated_at"`
}

// RawClusterRow represents a raw row from the clusters table
type RawClusterRow struct {
	Hash                int64  `db:"hash"`
	Name                string `db:"name"`
	Count               int    `db:"count"`
	PreviewCommandsJSON string `db:"preview_commands_json"`
	UpdatedAt           string `db:"updated_at"`
}

// RawPageRow represents a raw row from the pages table
type RawPageRow struct {
	URLHash     int64          `db:"url_hash"`
	URL         string         `db:"url"`
	Title       sql.NullString `db:"title"`
	Description sql.NullString `db:"description"`
	HTMLContent sql.NullString `db:"html_content"`
	Metadata    string         `db:"metadata"`
	SeeAlso     string         `db:"see_also"`
	UpdatedAt   string         `db:"updated_at"`
}
