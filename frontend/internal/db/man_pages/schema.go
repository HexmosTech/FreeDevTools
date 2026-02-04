package man_pages

import (
	"encoding/json"
)

// ManPage represents a man page from the database
type ManPage struct {
	MainCategory string         `json:"main_category"`
	SubCategory  string         `json:"sub_category"`
	Title        string         `json:"title"`
	Slug         string         `json:"slug"`
	Filename     string         `json:"filename,omitempty"`
	Content      ManPageContent `json:"content,omitempty"`
	ContentHTML  string         `json:"content_html,omitempty"`
	SeeAlso      string         `json:"see_also"` // JSON string containing array of objects
	UpdatedAt    string         `json:"updated_at"`
}

// ManPageContent represents the dynamic content sections of a man page
type ManPageContent map[string]string

// Category represents a main category
type Category struct {
	Name        string `json:"name"`
	Count       int    `json:"count"`
	Description string `json:"description"`
	Path        string `json:"path"`
	UpdatedAt   string `json:"updated_at"`
}

// SubCategory represents a subcategory
type SubCategory struct {
	Name        string `json:"name"`
	Count       int    `json:"count"`
	Description string `json:"description"`
	UpdatedAt   string `json:"updated_at"`
}

// Overview represents overview statistics
type Overview struct {
	ID            int    `json:"id"`
	TotalCount    int    `json:"total_count"`
	LastUpdatedAt string `json:"last_updated_at"`
}

// TotalSubCategoriesManPagesCount represents counts for a category
type TotalSubCategoriesManPagesCount struct {
	SubCategoryCount int `json:"sub_category_count"`
	ManPagesCount    int `json:"man_pages_count"`
}

// Raw database row types (before JSON parsing)
type rawManPageRow struct {
	Title       string
	Slug        string
	Filename    string
	Content     string // JSON string
	ContentHTML string // Pre-rendered HTML
	SeeAlso     string // JSON string
	UpdatedAt   string
}

type rawCategoryRow struct {
	Name        string
	Count       int
	Description string
	Path        string
	UpdatedAt   string
}

type rawSubCategoryRow struct {
	Name        string
	Count       int
	Description string
	UpdatedAt   string
}

type rawOverviewRow struct {
	ID            int
	TotalCount    int
	LastUpdatedAt string
}

// parseJSONObject parses a JSON object string into ManPageContent
func parseJSONObject(s string) ManPageContent {
	if s == "" {
		return ManPageContent{}
	}
	var content ManPageContent
	if err := json.Unmarshal([]byte(s), &content); err != nil {
		return ManPageContent{}
	}
	return content
}

// parseJSONArray parses a JSON array string into a []string
func parseJSONArray(s string) []string {
	if s == "" {
		return []string{}
	}
	var arr []string
	if err := json.Unmarshal([]byte(s), &arr); err != nil {
		return []string{}
	}
	return arr
}

// toManPage converts a rawManPageRow to ManPage
func (r *rawManPageRow) toManPage(mainCategory, subCategory string) ManPage {
	content := ManPageContent{}
	if r.Content != "" {
		content = parseJSONObject(r.Content)
	}
	return ManPage{
		MainCategory: mainCategory,
		SubCategory:  subCategory,
		Title:        r.Title,
		Slug:         r.Slug,
		Filename:     r.Filename,
		Content:      content,
		ContentHTML:  r.ContentHTML,
		SeeAlso:      r.SeeAlso,
	}
}

// toCategory converts a rawCategoryRow to Category
func (r *rawCategoryRow) toCategory() Category {
	return Category{
		Name:        r.Name,
		Count:       r.Count,
		Description: r.Description,
		Path:        r.Path,
	}
}

// toSubCategory converts a rawSubCategoryRow to SubCategory
func (r *rawSubCategoryRow) toSubCategory() SubCategory {
	return SubCategory{
		Name:        r.Name,
		Count:       r.Count,
		Description: r.Description,
	}
}
