package cheatsheets

import (
	"database/sql"
	"encoding/json"
)

// Overview represents section stats
type Overview struct {
	TotalCount    int    `json:"total_count"`
	LastUpdatedAt string `json:"last_updated_at"`
	CategoryCount int    `json:"category_count"`
}

// Cheatsheet represents a cheatsheet from the database
type Cheatsheet struct {
	HashID      int64    `json:"hash_id"`
	Category    string   `json:"category"`
	Slug        string   `json:"slug"`
	Content     string   `json:"content"`
	Title       string   `json:"title"`
	Description string   `json:"description"`
	Keywords    []string `json:"keywords"`
	SeeAlso     string   `json:"see_also"` // JSON string containing array of objects
	UpdatedAt   string   `json:"updated_at"`
}

// Category represents a cheatsheet category
type Category struct {
	ID          int      `json:"id"`
	Name        string   `json:"name"`
	Slug        string   `json:"slug"`
	Description string   `json:"description"`
	Keywords    []string `json:"keywords"`
	Features    []string `json:"features"`
	UpdatedAt   string   `json:"updated_at"`
}

// CategoryWithPreview represents a category with a preview of cheatsheets
type CategoryWithPreview struct {
	Category
	CheatsheetCount    int          `json:"cheatsheet_count"`
	PreviewCheatsheets []Cheatsheet `json:"preview_cheatsheets"`
	URL                string       `json:"url"`
}

// Raw database row types
type rawCheatsheetRow struct {
	HashID      int64
	Category    string
	Slug        string
	Content     string
	Title       sql.NullString
	Description sql.NullString
	Keywords    string // JSON string
	SeeAlso     string // JSON string
	UpdatedAt   string
}

type rawCategoryRow struct {
	ID          int
	Name        string
	Slug        string
	Description sql.NullString
	Keywords    string // JSON string
	Features    string // JSON string
	UpdatedAt   string
}

// Helper functions to parse JSON
func parseJSONAPStringArray(s string) []string {
	if s == "" {
		return []string{}
	}
	var arr []string
	if err := json.Unmarshal([]byte(s), &arr); err != nil {
		return []string{}
	}
	return arr
}

func (r *rawCheatsheetRow) toCheatsheet() Cheatsheet {
	return Cheatsheet{
		HashID:      r.HashID,
		Category:    r.Category,
		Slug:        r.Slug,
		Content:     r.Content,
		Title:       r.Title.String,
		Description: r.Description.String,
		Keywords:    parseJSONAPStringArray(r.Keywords),
		SeeAlso:     r.SeeAlso,
		UpdatedAt:   r.UpdatedAt,
	}
}

func (r *rawCategoryRow) toCategory() Category {
	return Category{
		ID:          r.ID,
		Name:        r.Name,
		Slug:        r.Slug,
		Description: r.Description.String,
		Keywords:    parseJSONAPStringArray(r.Keywords),
		Features:    parseJSONAPStringArray(r.Features),
		UpdatedAt:   r.UpdatedAt,
	}
}
