package main

import (
	"encoding/json"
	"fmt"
	"strings"
	"time"
)

const baseURL = "https://hexmos.com"

// ProcessPageResult contains the results and timing breakdown
type ProcessPageResult struct {
	Items            []SeeAlsoItem
	MeilisearchTime time.Duration
	ProcessingTime  time.Duration
}

// ProcessPage processes a single page and returns see_also results with timing breakdown
func ProcessPage(page PageData, processor Processor, numItems int) ([]SeeAlsoItem, time.Duration, time.Duration, error) {
	processStart := time.Now()
	
	// Clean HTML from content
	cleanContent := StripHTML(page.Content)
	cleanDescription := StripHTML(page.Description)

	// Parse keywords (assuming JSON array format)
	keywordsText := ""
	if page.Keywords != "" {
		var keywordsList []string
		if err := json.Unmarshal([]byte(page.Keywords), &keywordsList); err == nil {
			keywordsText = strings.Join(keywordsList, " ")
		} else {
			keywordsText = page.Keywords
		}
	}

	// Combine: page + description + content + keywords
	toSearch := strings.TrimSpace(fmt.Sprintf("%s %s %s %s", page.Key, cleanDescription, cleanContent, keywordsText))

	if toSearch == "" {
		return []SeeAlsoItem{}, 0, time.Since(processStart), nil
	}

	// Extract top N keywords
	topKeywords := GetTopKeywords(toSearch, numItems)
	if len(topKeywords) == 0 {
		return []SeeAlsoItem{}, 0, time.Since(processStart), nil
	}

	// Get current page path for filtering
	currentPath := normalizePath(processor.GetCurrentPath(page))

	// Search for each keyword
	topResults := make([]SearchResult, 0)
	var totalMeilisearchTime time.Duration
	for _, keyword := range topKeywords {
		meiliStart := time.Now()
		searchResp, err := SearchMeilisearch(keyword)
		meiliTime := time.Since(meiliStart)
		totalMeilisearchTime += meiliTime
		if err != nil {
			continue // Skip failed searches
		}

		// Find first unique result that's not the current page
		for _, hit := range searchResp.Hits {
			if hit.Path == "" {
				continue
			}

			normalizedHitPath := normalizePath(hit.Path)

			// Skip current page
			if normalizedHitPath == currentPath {
				continue
			}

			// Skip duplicates
			isDuplicate := false
			for _, existing := range topResults {
				if normalizePath(existing.Path) == normalizedHitPath {
					isDuplicate = true
					break
				}
			}
			if isDuplicate {
				continue
			}

			topResults = append(topResults, hit)
			break // Take only first unique result per keyword
		}
	}

	// Take up to numItems unique results
	if len(topResults) > numItems {
		topResults = topResults[:numItems]
	}

	// Convert to see_also format
	seeAlsoItems := make([]SeeAlsoItem, 0, len(topResults))
	for _, result := range topResults {
		iconType := getCategoryIcon(result.Category)
		categoryLabel := formatCategoryLabel(result.Category)

		// Build full URL
		path := result.Path
		var link string
		if path != "" && !strings.HasPrefix(path, "http") {
			if strings.HasPrefix(path, "/") {
				link = baseURL + path
			} else {
				link = baseURL + "/" + path
			}
		} else {
			link = path
			if link == "" {
				link = "#"
			}
		}

		item := SeeAlsoItem{
			Text:     getString(result.Name, result.Title, "Untitled"),
			Link:     link,
			Category: categoryLabel,
			Icon:     iconType,
		}

		if result.Code != "" {
			item.Code = result.Code
		} else if result.Image != "" {
			item.Image = result.Image
		}

		seeAlsoItems = append(seeAlsoItems, item)
	}

	processingTime := time.Since(processStart) - totalMeilisearchTime
	return seeAlsoItems, totalMeilisearchTime, processingTime, nil
}

// Helper functions
func normalizePath(path string) string {
	return strings.ToLower(strings.TrimSuffix(path, "/"))
}

func getCategoryIcon(category string) string {
	categoryLower := strings.ToLower(category)
	switch categoryLower {
	case "tools":
		return "gear"
	case "tldr", "cheatsheets":
		return "fileText"
	default:
		return "rocket"
	}
}

func formatCategoryLabel(category string) string {
	if category == "" {
		return "General"
	}

	// Replace underscores/hyphens with spaces, title case
	titleCased := strings.ReplaceAll(category, "_", " ")
	titleCased = strings.ReplaceAll(titleCased, "-", " ")
	titleCased = strings.TrimSpace(titleCased)

	words := strings.Fields(titleCased)
	for i, word := range words {
		if len(word) > 0 {
			words[i] = strings.ToUpper(word[:1]) + strings.ToLower(word[1:])
		}
	}
	titleCased = strings.Join(words, " ")

	// Replace specific format words
	titleCased = strings.ReplaceAll(titleCased, "Png", "PNG")
	titleCased = strings.ReplaceAll(titleCased, "Svg", "SVG")

	return titleCased
}

func getString(values ...string) string {
	for _, v := range values {
		if v != "" {
			return v
		}
	}
	return ""
}

