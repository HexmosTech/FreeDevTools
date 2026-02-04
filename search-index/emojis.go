package main

import (
	"context"
	"database/sql"
	"fmt"
	"log"
	"path/filepath"
	"regexp"
	jargon_stemmer "search-index/jargon-stemmer"
	"sort"
	"strings"
	"time"

	_ "github.com/mattn/go-sqlite3"
)

func generateEmojisData(ctx context.Context) ([]EmojiData, error) {
	fmt.Println("😀 Generating emojis data...")

	// Path to the SQLite database
	dbPath := filepath.Join("..", "db", "all_dbs", "emoji-db-v4.db")
	db, err := sql.Open("sqlite3", dbPath)
	if err != nil {
		return nil, fmt.Errorf("failed to open database: %w", err)
	}
	defer db.Close()

	// Query all emojis from the database
	query := `
		SELECT slug, title, code, description
		FROM emojis
		WHERE slug IS NOT NULL AND slug != ''
		ORDER BY slug
	`
	rows, err := db.QueryContext(ctx, query)
	if err != nil {
		return nil, fmt.Errorf("failed to query emojis: %w", err)
	}
	defer rows.Close()

	var emojisData []EmojiData
	processedCount := 0

	for rows.Next() {
		select {
		case <-ctx.Done():
			return nil, ctx.Err()
		default:
		}

		var slug, title, code string
		var description sql.NullString

		if err := rows.Scan(&slug, &title, &code, &description); err != nil {
			fmt.Printf("⚠️  Warning: Failed to scan row: %v\n", err)
			continue
		}

		processedCount++
		if processedCount%1000 == 0 {
			fmt.Printf("  Processed %d emoji entries...\n", processedCount)
		}

		// Use slug from database
		slug = strings.TrimSpace(slug)
		if slug == "" {
			continue
		}

		// Extract title, clean it
		title = strings.TrimSpace(title)
		if title == "" {
			title = slug
		}

		// For emojis, split by ":" and take only the first part
		if idx := strings.Index(title, ":"); idx != -1 {
			title = strings.TrimSpace(title[:idx])
		}

		// Extract code
		code = strings.TrimSpace(code)

		// Clean description
		desc := strings.TrimSpace(description.String)
		if desc == "" {
			desc = fmt.Sprintf("Learn about the %s emoji %s. Find meanings, shortcodes, and usage information.", cleanName(title), code)
		} else {
			desc = cleanDescription(desc)
		}

		// Create the path - use /emojis/ (plural) and the slug
		path := fmt.Sprintf("/freedevtools/emojis/%s/", slug)

		// Generate ID - sanitize to only allow alphanumeric, hyphens, and underscores
		sanitizedSlug := sanitizeID(slug)
		id := fmt.Sprintf("emojis-%s", sanitizedSlug)

		emojiDataResult := EmojiData{
			ID:          id,
			Name:        cleanName(title),
			Code:        code,
			Description: desc,
			Path:        path,
			Category:    "emojis",
		}

		emojisData = append(emojisData, emojiDataResult)
	}

	if err := rows.Err(); err != nil {
		return nil, fmt.Errorf("error iterating rows: %w", err)
	}

	fmt.Printf("  Processed %d total emoji entries\n", processedCount)

	// Sort by ID
	sort.Slice(emojisData, func(i, j int) bool {
		return emojisData[i].ID < emojisData[j].ID
	})

	fmt.Printf("😀 Generated %d emoji data entries\n", len(emojisData))
	return emojisData, nil
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

func RunEmojisOnly(ctx context.Context, start time.Time) {
	fmt.Println("😀 Generating emojis data only...")

	emojis, err := generateEmojisData(ctx)
	if err != nil {
		log.Fatalf("❌ Emojis data generation failed: %v", err)
	}

	// Save to JSON
	if err := saveToJSON("emojis.json", emojis); err != nil {
		log.Fatalf("Failed to save emojis data: %v", err)
	}

	elapsed := time.Since(start)
	fmt.Printf("\n🎉 Emojis data generation completed in %v\n", elapsed)
	fmt.Printf("📊 Generated %d emojis\n", len(emojis))

	// Show sample data
	fmt.Println("\n📝 Sample emojis:")
	for i, emoji := range emojis {
		if i >= 10 { // Show first 10
			fmt.Printf("  ... and %d more emojis\n", len(emojis)-10)
			break
		}
		fmt.Printf("  %d. %s %s (ID: %s)\n", i+1, emoji.Name, emoji.Code, emoji.ID)
		if emoji.Description != "" {
			fmt.Printf("     Description: %s\n", truncateString(emoji.Description, 80))
		}
		fmt.Printf("     Path: %s\n", emoji.Path)
		fmt.Println()
	}

	fmt.Printf("💾 Data saved to output/emojis.json\n")

	// Automatically run stem processing
	fmt.Println("\n🔍 Running stem processing...")
	if err := jargon_stemmer.ProcessJSONFile("output/emojis.json"); err != nil {
		log.Fatalf("❌ Stem processing failed: %v", err)
	}
	fmt.Println("✅ Stem processing completed!")
}
