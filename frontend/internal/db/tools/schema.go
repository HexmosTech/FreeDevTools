package tools

type Config struct {
	config *Tool
	cache  *Cache
}
var ToolsConfig = map[string]Tool{}

type Tool struct {
	ID              string
	Title           string
	Name            string
	Path            string
	Description     string
	Category        string
	Icon            string
	ThemeColor      string
	Canonical       string
	Keywords        []string
	Features        []string
	OgImage         string
	TwitterImage    string
	VariationOf     string
	DatePublished   string
	SoftwareVersion string
	LastModifiedAt  string
}
