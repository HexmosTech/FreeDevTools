package mcp_pages

import (
	"fmt"
	"strings"
	"time"
	"unicode"
)

// FormatDate formats a date string (YYYY-MM-DD...) into MM/DD/YYYY
func FormatDate(dateStr string) string {
	if len(dateStr) < 10 {
		return dateStr
	}
	// Try parsing different common formats
	formats := []string{
		"2006-01-02 15:04:05",
		"2006-01-02T15:04:05Z",
		"2006-01-02",
	}

	var t time.Time
	var err error
	for _, f := range formats {
		t, err = time.Parse(f, dateStr)
		if err == nil {
			break
		}
		// Also try with just the first 10 chars for the simple date format
		if len(dateStr) >= 10 {
			t, err = time.Parse(f, dateStr[:10])
			if err == nil {
				break
			}
		}
	}

	if err != nil {
		return dateStr[:10] // Fallback to just the date part if it exists
	}

	return t.Format("01/02/2006")
}

// GetCategoryEmoji returns an emoji for a given category icon/slug
func GetCategoryEmoji(icon string) string {
	iconMap := map[string]string{
		// Direct category ID mappings
		"aggregators":                  "🔧",
		"apis-and-http-requests":       "🌐",
		"art--culture":                 "🎨",
		"blockchain-and-crypto":        "₿",
		"browser-automation":           "🌐",
		"business-tools":               "💼",
		"cloud-platforms":              "☁️",
		"cloud-services":               "☁️",
		"coding-agents":                "💻",
		"command-line":                 "💻",
		"communication":                "💬",
		"community-servers":            "👥",
		"content-creation":             "🎨",
		"crm-and-sales-tools":          "💼",
		"customer-data-platforms":      "📊",
		"data-analytics":               "📊",
		"data-labeling-and-annotation": "🏷️",
		"data-platforms":               "🗄️",
		"data-science-tools":           "📊",
		"databases":                    "🗄️",
		"developer-tools":              "🔧",
		"devops-and-ci-cd":             "⚙️",
		"digital-marketing":            "📈",
		"document-processing":          "📄",
		"e-commerce-and-retail":        "🛒",
		"education-and-learning":       "📚",
		"email-and-messaging":          "📧",
		"embedded-system":              "🔌",
		"file-conversion":              "🔄",
		"file-management":              "📁",

		// Legacy icon mappings
		"pickaxe":  "⛏️",
		"code":     "💻",
		"brain":    "🧠",
		"shield":   "🛡️",
		"bitcoin":  "₿",
		"browser":  "🌐",
		"cloud":    "☁️",
		"message":  "💬",
		"palette":  "🎨",
		"database": "🗄️",
		"terminal": "💻",
		"users":    "👥",
		"star":     "⭐",
		"tool":     "🔧",
	}

	normalizedIcon := strings.TrimSpace(strings.ToLower(icon))

	if emoji, ok := iconMap[normalizedIcon]; ok {
		return emoji
	}

	// Substring matching
	for key, emoji := range iconMap {
		if strings.Contains(normalizedIcon, key) {
			return emoji
		}
	}

	return "🔧"
}

// GetCategoryDescription returns category description with fallback
func GetCategoryDescription(description, categoryName string) string {
	if strings.TrimSpace(description) != "" {
		return description
	}
	return "Explore MCP repositories in the " + categoryName + " category"
}

// ParseTags parses a JSON string array of tags
func ParseTags(tagsJSON string) []string {
	// Simple cleanup if it looks like JSON array
	clean := strings.Trim(tagsJSON, "[]\"")
	if clean == "" {
		return []string{}
	}
	// Handle "tag1","tag2" format
	clean = strings.ReplaceAll(clean, "\"", "")
	parts := strings.Split(clean, ",")
	var result []string
	for _, p := range parts {
		trimmed := strings.TrimSpace(p)
		if trimmed != "" {
			result = append(result, trimmed)
		}
	}
	return result
}

// FormatNumber converts a number to a string, using 'K' suffix for thousands
func FormatNumber(num int) string {
	if num >= 1000 {
		return fmt.Sprintf("%.1fK", float64(num)/1000)
	}
	return fmt.Sprintf("%d", num)

}

// FormatRepoName formats a repo name by replacing hyphens with spaces and capitalizing each word
func FormatRepoName(name string) string {
	// Replace hyphens with spaces
	formatted := strings.ReplaceAll(name, "-", " ")

	// Split into words and capitalize first letter of each
	words := strings.Fields(formatted)
	for i, word := range words {
		if len(word) > 0 {
			runes := []rune(word)
			runes[0] = unicode.ToUpper(runes[0])
			words[i] = string(runes)
		}
	}

	return strings.Join(words, " ")
}

// FormatImageURL formats image URLs for proper serving
// Profile pictures: /freedevtools/mcp/pfp/... -> /freedevtools/public/mcp/pfp/...
// Other images: /freedevtools/... -> /freedevtools/static/images/...
func FormatImageURL(imageURL string) string {
	// Handle profile pictures: /freedevtools/mcp/pfp/... -> /freedevtools/public/mcp/pfp/...
	if strings.Contains(imageURL, "/mcp/pfp/") {
		return strings.Replace(imageURL, "/freedevtools/mcp/pfp/", "/freedevtools/public/mcp/pfp/", 1)
	}
	// Handle other images: /freedevtools/... -> /freedevtools/static/images/...
	return strings.Replace(imageURL, "/freedevtools/", "/freedevtools/static/images/", 1)
}
