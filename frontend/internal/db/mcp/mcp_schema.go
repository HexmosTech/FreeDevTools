package mcp

// Overview stats
type Overview struct {
	TotalCount         int    `json:"total_count"`
	TotalCategoryCount int    `json:"total_category_count"`
	LastUpdatedAt      string `json:"last_updated_at"`
}

// McpCategory represents a category of MCP repos
type McpCategory struct {
	Slug        string `json:"slug"`
	Name        string `json:"name"`
	Description string `json:"description"`
	Count       int    `json:"count"`
	UpdatedAt   string `json:"updated_at"`
}

// McpPage represents an MCP repository/tool/server
type McpPage struct {
	HashID        int64  `json:"hash_id"`
	CategoryID    int64  `json:"category_id"`
	Key           string `json:"key"`
	Name          string `json:"name"`
	Description   string `json:"description"`
	Owner         string `json:"owner"`
	Stars         int    `json:"stars"`
	Forks         int    `json:"forks"`
	Language      string `json:"language"`
	License       string `json:"license"`
	UpdatedAt     string `json:"updated_at"`
	ReadmeContent string `json:"readme_content"`
	URL           string `json:"url"` // GitHub URL
	ImageURL      string `json:"image_url"`
	NpmURL        string `json:"npm_url"`
	NpmDownloads  int    `json:"npm_downloads"`
	Keywords      string `json:"keywords"`
	SeeAlso       string `json:"see_also"` // JSON string containing array of objects, e.g., [{"text": "...", "link": "...", ...}]
}

// McpPageWithCategory includes the category slug for easier linking
type McpPageWithCategory struct {
	McpPage
	CategorySlug string `json:"category_slug"`
}

// SitemapMcpPage represents minimal data for sitemap
type SitemapMcpPage struct {
	Key          string
	CategorySlug string
	UpdatedAt    string
}
