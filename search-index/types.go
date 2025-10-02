package main

// ToolData represents a tool configuration entry (simplified)
type ToolData struct {
	ID          string `json:"id"`
	Name        string `json:"name"`
	Description string `json:"description"`
	Path        string `json:"path"`
	Category    string `json:"category"`
}

// TLDRData represents a TLDR page entry
type TLDRData struct {
	ID          string `json:"id"`
	Name        string `json:"name"`
	Description string `json:"description"`
	Path        string `json:"path"`
	Category    string `json:"category"`
}

// EmojiData represents an emoji entry
type EmojiData struct {
	ID          string `json:"id"`
	Name        string `json:"name"`
	Code        string `json:"code"`
	Description string `json:"description"`
	Path        string `json:"path"`
	Category    string `json:"category"`
}

// SVGIconData represents an SVG icon entry
type SVGIconData struct {
	ID          string `json:"id"`
	Name        string `json:"name"`
	Description string `json:"description"`
	Path        string `json:"path"`
	Image       string `json:"image"` // Changed from "imagePath" to "image" to match Python
	Category    string `json:"category"`
}

// CheatsheetData represents a cheatsheet entry
type CheatsheetData struct {
	ID          string `json:"id"`
	Name        string `json:"name"`
	Description string `json:"description"`
	Path        string `json:"path"`
	Category    string `json:"category"`
}

// FrontMatter represents YAML frontmatter in markdown files
type FrontMatter struct {
	Title       string   `yaml:"title"`
	Name        string   `yaml:"name"`
	Path        string   `yaml:"path"`
	Description string   `yaml:"description"`
	Category    string   `yaml:"category"`
	Keywords    []string `yaml:"keywords"`
	Features    []string `yaml:"features"`
}

// SVGCluster represents the structure of cluster.json
type SVGCluster struct {
	Clusters map[string]ClusterEntry `json:"clusters"`
}

// ClusterEntry represents a single cluster in the SVG icons data
type ClusterEntry struct {
	Name         string     `json:"name"`
	SourceFolder string     `json:"source_folder"`
	Path         string     `json:"path"`
	Keywords     []string   `json:"keywords"`
	Features     []string   `json:"features"`
	Title        string     `json:"title"`
	Description  string     `json:"description"`
	FileNames    []FileName `json:"fileNames"`
	Enhanced     bool       `json:"enhanced"`
}

// FileName represents a file entry in the cluster with all available fields
type FileName struct {
	FileName      string   `json:"fileName"`
	Description   string   `json:"description"`
	Usecases      string   `json:"usecases"`
	Synonyms      []string `json:"synonyms"`
	Tags          []string `json:"tags"`
	Industry      string   `json:"industry"`
	EmotionalCues string   `json:"emotional_cues"`
	Enhanced      bool     `json:"enhanced"`
}

// EmojiJSONData represents the structure of emoji JSON files
type EmojiJSONData struct {
	Title              string                 `json:"title"`
	Description        string                 `json:"description"`
	Code               string                 `json:"code"`
	Glyph              string                 `json:"glyph"`
	Slug               string                 `json:"slug"`
	FluentUIMetadata   map[string]interface{} `json:"fluentui_metadata"`
	// Add other fields as needed based on the actual structure
}
