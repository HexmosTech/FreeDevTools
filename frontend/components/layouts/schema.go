package layouts

import (
	"encoding/json"
	"regexp"
	"strings"

	"fdt-templ/internal/config"
)

// SchemaGenerator generates JSON-LD structured data
type SchemaGenerator struct {
	props BaseLayoutProps
}

// NewSchemaGenerator creates a new schema generator
func NewSchemaGenerator(props BaseLayoutProps) *SchemaGenerator {
	return &SchemaGenerator{props: props}
}

// matchPattern uses regex for proper pattern matching
func matchPattern(path, pattern string) (bool, error) {
	matched, err := regexp.MatchString(pattern, path)
	return matched, err
}

// DeterminePageType determines the page type based on path
func (sg *SchemaGenerator) DeterminePageType() string {
	if sg.props.PageType != "" {
		return sg.props.PageType
	}

	path := sg.props.Path
	if path == "" {
		path = sg.props.Canonical
	}

	// Normalize path: remove trailing slash for pattern matching
	path = strings.TrimSuffix(path, "/")

	// SVG Icon pages
	if strings.Contains(path, "/svg_icons/") || strings.HasSuffix(path, "/svg_icons") {
		if matched, _ := matchPattern(path, `/svg_icons/[^/]+/[^/]+$`); matched {
			return "ImageObject"
		}
		if matched, _ := matchPattern(path, `/svg_icons/[^/]+$`); matched {
			return "CollectionPage"
		}
		return "CollectionPage"
	}

	// PNG Icon pages
	if strings.Contains(path, "/png_icons/") || strings.HasSuffix(path, "/png_icons") {
		if matched, _ := matchPattern(path, `/png_icons/[^/]+/[^/]+$`); matched {
			return "ImageObject"
		}
		if matched, _ := matchPattern(path, `/png_icons/[^/]+$`); matched {
			return "CollectionPage"
		}
		return "CollectionPage"
	}

	// Tool pages
	if strings.Contains(path, "/t/") || strings.HasSuffix(path, "/t") {
		if matched, _ := matchPattern(path, `/t/[^/]+$`); matched {
			return "SoftwareApplication"
		}
		if matched, _ := matchPattern(path, `/t/[^/]+/[^/]+$`); matched {
			return "SoftwareApplication"
		}
		return "CollectionPage"
	}

	// Cheatsheet pages
	if strings.Contains(path, "/c/") || strings.HasSuffix(path, "/c") {
		if matched, _ := matchPattern(path, `/c/[^/]+/[^/]+$`); matched {
			return "TechArticle"
		}
		if matched, _ := matchPattern(path, `/c/[^/]+$`); matched {
			return "CollectionPage"
		}
		return "CollectionPage"
	}

	// TLDR pages
	if strings.Contains(path, "/tldr/") || strings.HasSuffix(path, "/tldr") {
		if matched, _ := matchPattern(path, `/tldr/[^/]+/[^/]+$`); matched {
			return "TechArticle"
		}
		if matched, _ := matchPattern(path, `/tldr/[^/]+$`); matched {
			return "CollectionPage"
		}
		return "CollectionPage"
	}

	// MCP pages
	if strings.Contains(path, "/mcp/") || strings.HasSuffix(path, "/mcp") {
		if matched, _ := matchPattern(path, `/mcp/[^/]+/[^/]+$`); matched {
			return "SoftwareApplication"
		}
		if matched, _ := matchPattern(path, `/mcp/[^/]+$`); matched {
			return "CollectionPage"
		}
		return "CollectionPage"
	}

	// Emoji pages
	if strings.Contains(path, "/emojis/") || strings.HasSuffix(path, "/emojis") {
		// Specific emoji pages (regular and vendor-specific) should be Articles
		if matched, _ := matchPattern(path, `/emojis/[^/]+$`); matched {
			// Vendor indices should stay CollectionPage
			if strings.HasSuffix(path, "/apple-emojis") || strings.HasSuffix(path, "/discord-emojis") {
				return "CollectionPage"
			}
			return "Article"
		}
		if matched, _ := matchPattern(path, `/emojis/[^/]+/[^/]+$`); matched {
			return "Article"
		}
		return "CollectionPage"
	}

	// Installerpedia pages
	if strings.Contains(path, "/installerpedia/") || strings.HasSuffix(path, "/installerpedia") {
		if matched, _ := matchPattern(path, `/installerpedia/[^/]+/[^/]+$`); matched {
			return "TechArticle"
		}
		if matched, _ := matchPattern(path, `/installerpedia/[^/]+$`); matched {
			return "CollectionPage"
		}
		return "CollectionPage"
	}

	// Man pages
	if strings.Contains(path, "/man-pages/") || strings.HasSuffix(path, "/man-pages") {
		// Individual man page (category/subcategory/slug)
		if matched, _ := matchPattern(path, `/man-pages/[^/]+/[^/]+/[^/]+$`); matched {
			return "TechArticle"
		}
		// Indices (root, category, subcategory)
		return "CollectionPage"
	}

	// Default
	return "WebPage"
}

// GetBaseSchema generates base schema properties
func (sg *SchemaGenerator) GetBaseSchema() map[string]interface{} {
	canonical := sg.props.Canonical
	if canonical == "" {
		canonical = sg.props.Path
	}

	// Ensure absolute URL
	if strings.HasPrefix(canonical, "/") {
		siteURL := config.GetSiteURL()
		basePath := config.GetBasePath()
		domain := strings.TrimSuffix(siteURL, basePath)
		canonical = domain + canonical
	}

	author := sg.props.Author
	if author == "" {
		author = "Free DevTools by Hexmos"
	}

	license := sg.props.License
	if license == "" || license == "MIT" {
		license = "https://opensource.org/licenses/MIT"
	}

	partOf := sg.props.PartOf
	if partOf == "" {
		partOf = "Free DevTools"
	}

	partOfUrl := sg.props.PartOfUrl
	if partOfUrl == "" {
		partOfUrl = "https://hexmos.com/freedevtools/"
	}

	schema := map[string]interface{}{
		"@context":   "https://schema.org",
		"url":        canonical,
		"inLanguage": "en",
		"author": map[string]interface{}{
			"@type": "Organization",
			"name":  author,
			"url":   "https://hexmos.com/freedevtools/",
		},
		"publisher": map[string]interface{}{
			"@type": "Organization",
			"name":  "Free DevTools by Hexmos",
			"url":   "https://hexmos.com/freedevtools/",
		},
		"isPartOf": map[string]interface{}{
			"@type": "Collection",
			"name":  partOf,
			"url":   partOfUrl,
		},
		"license": license,
		"mainEntityOfPage": map[string]interface{}{
			"@type": "WebPage",
			"@id":   canonical,
		},
	}

	if sg.props.DatePublished != "" {
		schema["datePublished"] = sg.props.DatePublished
	}

	if sg.props.DateModified != "" {
		schema["dateModified"] = sg.props.DateModified
	}

	return schema
}

// GenerateSchema generates the complete schema based on page type
func (sg *SchemaGenerator) GenerateSchema() map[string]interface{} {
	pageType := sg.DeterminePageType()
	baseSchema := sg.GetBaseSchema()

	keywordsStr := ""
	if len(sg.props.Keywords) > 0 {
		keywordsStr = strings.Join(sg.props.Keywords, ", ")
	}

	switch pageType {
	case "ImageObject":
		imageUrl := sg.props.ThumbnailUrl
		if imageUrl == "" {
			imageUrl = sg.props.OgImage
		}

		encodingFormat := sg.props.EncodingFormat
		if encodingFormat == "" {
			if strings.Contains(sg.props.Path, "/png_icons/") {
				encodingFormat = "image/png"
			} else {
				encodingFormat = "image/svg+xml"
			}
		}

		schema := baseSchema
		schema["@type"] = "ImageObject"
		name := sg.props.Name
		if name == "" {
			name = sg.props.Title
		}
		schema["name"] = name
		schema["description"] = sg.props.Description
		schema["contentUrl"] = imageUrl
		schema["thumbnailUrl"] = imageUrl
		schema["image"] = imageUrl
		schema["encodingFormat"] = encodingFormat
		if sg.props.ImgWidth > 0 {
			schema["width"] = sg.props.ImgWidth
		}
		if sg.props.ImgHeight > 0 {
			schema["height"] = sg.props.ImgHeight
		}
		schema["keywords"] = keywordsStr
		schema["offers"] = map[string]interface{}{
			"@type":         "Offer",
			"price":         "0",
			"priceCurrency": "USD",
			"availability":  "https://schema.org/InStock",
		}
		schema["isAccessibleForFree"] = true
		return schema

	case "SoftwareApplication":
		path := sg.props.Path
		if path == "" {
			path = sg.props.Canonical
		}
		isMcpRepository := strings.Contains(path, "/mcp/")
		schema := baseSchema
		schema["@type"] = "SoftwareApplication"
		name := sg.props.Name
		if name == "" {
			name = sg.props.Title
		}
		schema["name"] = name
		schema["description"] = sg.props.Description
		schema["applicationCategory"] = "DeveloperTool"
		schema["operatingSystem"] = "Any"
		if isMcpRepository {
			schema["browserRequirements"] = "Requires Node.js, MCP Client"
			schema["programmingLanguage"] = "TypeScript"
			schema["runtimePlatform"] = "Node.js"
			schema["softwareRequirements"] = "Model Context Protocol (MCP) compatible client"
			schema["category"] = "Model Context Protocol Server"
			if sg.props.GithubUrl != "" {
				schema["codeRepository"] = map[string]interface{}{
					"@type":               "SoftwareSourceCode",
					"url":                 sg.props.GithubUrl,
					"programmingLanguage": "TypeScript",
					"license":             schema["license"],
				}
			}
		} else {
			schema["browserRequirements"] = "Requires JavaScript. Requires HTML5."
		}
		if sg.props.SoftwareVersion != "" {
			schema["softwareVersion"] = sg.props.SoftwareVersion
		}
		if len(sg.props.Features) > 0 {
			schema["featureList"] = sg.props.Features
		}
		schema["keywords"] = keywordsStr
		schema["screenshot"] = sg.props.OgImage
		schema["offers"] = map[string]interface{}{
			"@type":         "Offer",
			"price":         "0",
			"priceCurrency": "USD",
			"availability":  "https://schema.org/InStock",
		}
		return schema

	case "TechArticle":
		schema := baseSchema
		schema["@type"] = "TechArticle"
		name := sg.props.Name
		if name == "" {
			name = sg.props.Title
		}
		schema["headline"] = name
		schema["description"] = sg.props.Description
		schema["articleBody"] = sg.props.Description
		schema["keywords"] = keywordsStr
		if sg.props.CommandName != "" {
			schema["about"] = map[string]interface{}{
				"@type": "Thing",
				"name":  sg.props.CommandName,
			}
		}
		if sg.props.Platform != "" {
			schema["mentions"] = map[string]interface{}{
				"@type": "Thing",
				"name":  sg.props.Platform,
			}
		}
		if sg.props.CommandCategory != "" {
			schema["articleSection"] = sg.props.CommandCategory
		} else if sg.props.Category != "" {
			schema["articleSection"] = sg.props.Category
		}
		return schema

	case "Article":
		schema := baseSchema
		schema["@type"] = "Article"
		name := sg.props.Name
		if name == "" {
			name = sg.props.Title
		}
		schema["headline"] = name
		schema["description"] = sg.props.Description
		schema["keywords"] = keywordsStr
		if sg.props.OgImage != "" {
			schema["image"] = sg.props.OgImage
		}
		schema["articleBody"] = sg.props.Description
		return schema

	case "CollectionPage":
		schema := baseSchema
		schema["@type"] = "CollectionPage"
		name := sg.props.Name
		if name == "" {
			name = sg.props.Title
		}
		schema["name"] = name
		schema["description"] = sg.props.Description
		schema["keywords"] = keywordsStr
		return schema

	default:
		schema := baseSchema
		schema["@type"] = "WebPage"
		name := sg.props.Name
		if name == "" {
			name = sg.props.Title
		}
		schema["name"] = name
		schema["description"] = sg.props.Description
		schema["keywords"] = keywordsStr
		return schema
	}
}

// ToJSON converts the schema to JSON string
func (sg *SchemaGenerator) ToJSON() (string, error) {
	schema := sg.GenerateSchema()
	jsonBytes, err := json.Marshal(schema)
	if err != nil {
		return "", err
	}
	return string(jsonBytes), nil
}

// GenerateSchemaJSON is a helper function that can be called from templ
func GenerateSchemaJSON(props BaseLayoutProps) string {
	generator := NewSchemaGenerator(props)
	json, err := generator.ToJSON()
	if err != nil {
		return ""
	}
	return json
}
