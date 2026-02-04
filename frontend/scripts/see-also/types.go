package main

// SeeAlsoItem represents a single "See Also" item
type SeeAlsoItem struct {
	Text     string `json:"text"`
	Link     string `json:"link"`
	Category string `json:"category"`
	Icon     string `json:"icon"`
	Code     string `json:"code,omitempty"`
	Image    string `json:"image,omitempty"`
}

// PageData represents the data needed to process a page
type PageData struct {
	HashID      int64
	CategoryID  int64
	Key         string
	Title       string
	Description string
	Content     string
	Keywords    string
	Category    string // For cheatsheets, stores the category name
}

// Processor defines the interface for category-specific processors
type Processor interface {
	GetAllPages(limit int) ([]PageData, error)
	UpdatePage(hashID, categoryID int64, seeAlsoJSON string) error
	GetCurrentPath(page PageData) string
	Close() error
}

