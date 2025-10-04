package main

import (
	"context"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"path/filepath"
	"regexp"
	"sort"
	"strings"
)

func generateEmojisData(ctx context.Context) ([]EmojiData, error) {
	fmt.Println("😀 Generating emojis data...")

	// Path to emoji data files
	basePath := "../frontend/public/emoji_data"

	files, err := filepath.Glob(filepath.Join(basePath, "*", "*.json"))
	if err != nil {
		return nil, fmt.Errorf("failed to find emoji JSON files: %w", err)
	}

	var emojisData []EmojiData

	for _, file := range files {
		select {
		case <-ctx.Done():
			return nil, ctx.Err()
		default:
		}

		data, err := processEmojiFile(file)
		if err != nil {
			fmt.Printf("⚠️  Warning: Failed to process %s: %v\n", file, err)
			continue
		}

		if data != nil {
			emojisData = append(emojisData, *data)
		}
	}

	// Sort by ID
	sort.Slice(emojisData, func(i, j int) bool {
		return emojisData[i].ID < emojisData[j].ID
	})

	fmt.Printf("😀 Processed %d emoji files\n", len(emojisData))
	return emojisData, nil
}

func processEmojiFile(filePath string) (*EmojiData, error) {
	content, err := ioutil.ReadFile(filePath)
	if err != nil {
		return nil, err
	}

	var emojiData EmojiJSONData
	if err := json.Unmarshal(content, &emojiData); err != nil {
		return nil, fmt.Errorf("failed to parse emoji JSON: %w", err)
	}

	// Extract folder name (slug)
	folderPath := filepath.Dir(filePath)
	slug := filepath.Base(folderPath)

	// Extract title using the same logic as Python script
	title := emojiData.Title
	if title == "" && emojiData.FluentUIMetadata != nil {
		if cldr, ok := emojiData.FluentUIMetadata["cldr"].(string); ok {
			title = cldr
		}
	}
	if title == "" {
		title = emojiData.Slug
	}

	// Extract code using the same logic as Python script
	code := emojiData.Code
	if code == "" && emojiData.FluentUIMetadata != nil {
		if glyph, ok := emojiData.FluentUIMetadata["glyph"].(string); ok {
			code = glyph
		}
	}
	if code == "" {
		code = emojiData.Glyph
	}

	// Clean description
	description := cleanDescription(emojiData.Description)

	// If description is empty, try to find nested definition
	if description == "" {
		nestedDef := findNestedDefinition(emojiData)
		if nestedDef != "" {
			description = cleanDescription(nestedDef)
		}
	}

	// If still no description, create a default one
	if description == "" {
		description = fmt.Sprintf("Learn about the %s emoji %s. Find meanings, shortcodes, and usage information.", title, code)
	}

	// Create the path
	path := fmt.Sprintf("/freedevtools/emoji/%s/", slug)

	// Generate ID
	id := fmt.Sprintf("emojis-%s", slug)

	emojiDataResult := &EmojiData{
		ID:          id,
		Name:       title,
		Code:        code,
		Description: description,
		Path:        path,
		Category:    "emojis",
	}

	return emojiDataResult, nil
}

func cleanDescription(text string) string {
	if text == "" {
		return ""
	}

	// Remove HTML tags
	htmlRegex := regexp.MustCompile(`<[^>]*>`)
	text = htmlRegex.ReplaceAllString(text, "")

	// Remove HTML entities
	entityRegex := regexp.MustCompile(`&[a-zA-Z0-9#]+;`)
	text = entityRegex.ReplaceAllString(text, "")

	// Clean up whitespace
	text = strings.TrimSpace(text)

	return text
}

func findNestedDefinition(emojiData EmojiJSONData) string {
	// This is a simplified version of the nested definition search
	// In a real implementation, you might need to traverse the entire JSON structure
	if emojiData.FluentUIMetadata != nil {
		if def, ok := emojiData.FluentUIMetadata["definition"].(string); ok {
			return def
		}
	}
	return ""
}
