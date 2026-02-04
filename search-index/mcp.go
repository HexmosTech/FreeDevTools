package main

import (
	"context"
	"crypto/sha256"
	"database/sql"
	"encoding/binary"
	"fmt"
	"log"
	"path/filepath"
	"sort"
	"strings"
	"time"

	jargon_stemmer "search-index/jargon-stemmer"

	_ "github.com/mattn/go-sqlite3"
)

// hashToID generates a hash ID from a string key (matches internal/db/mcp/utils.go)
func hashToID(key string) int64 {
	hash := sha256.Sum256([]byte(key))
	// Take first 8 bytes and convert to int64 (big-endian)
	return int64(binary.BigEndian.Uint64(hash[:8]))
}

// generateMCPData queries the database and returns all MCP entries
func generateMCPData(ctx context.Context) ([]MCPData, error) {
	fmt.Println("🔧 Generating MCP data...")

	// Path to the SQLite database
	dbPath := filepath.Join("..", "db", "all_dbs", "mcp-db-v5.db")
	db, err := sql.Open("sqlite3", dbPath)
	if err != nil {
		return nil, fmt.Errorf("failed to open database: %w", err)
	}
	defer db.Close()

	// First, get all categories and build a map from category_id (hash) to category_slug
	categoryRows, err := db.QueryContext(ctx, "SELECT slug FROM category")
	if err != nil {
		return nil, fmt.Errorf("failed to query categories: %w", err)
	}
	defer categoryRows.Close()

	categoryIDToSlug := make(map[int64]string)
	categoryCount := 0
	for categoryRows.Next() {
		var categorySlug string
		if err := categoryRows.Scan(&categorySlug); err != nil {
			continue
		}
		categoryID := hashToID(categorySlug)
		categoryIDToSlug[categoryID] = categorySlug
		categoryCount++
	}
	fmt.Printf("  Loaded %d categories\n", categoryCount)

	// Query all MCP pages from the database
	query := `
		SELECT category_id, key, name, description, owner, stars, language
		FROM mcp_pages
		WHERE description != '' AND description IS NOT NULL
		ORDER BY category_id, key
	`
	rows, err := db.QueryContext(ctx, query)
	if err != nil {
		return nil, fmt.Errorf("failed to query mcp_pages: %w", err)
	}
	defer rows.Close()

	var mcpData []MCPData
	processedCount := 0

	for rows.Next() {
		select {
		case <-ctx.Done():
			return nil, ctx.Err()
		default:
		}

		var categoryID int64
		var key, name, description, owner, language string
		var stars int

		if err := rows.Scan(&categoryID, &key, &name, &description, &owner, &stars, &language); err != nil {
			fmt.Printf("⚠️  Warning: Failed to scan row: %v\n", err)
			continue
		}

		processedCount++
		if processedCount%1000 == 0 {
			fmt.Printf("  Processed %d MCP entries...\n", processedCount)
		}

		// Get category slug from the map
		categorySlug, ok := categoryIDToSlug[categoryID]
		if !ok {
			fmt.Printf("⚠️  Warning: Category ID %d not found in category map\n", categoryID)
			continue
		}

		// Trim description
		description = strings.TrimSpace(description)
		if description == "" {
			description = fmt.Sprintf("MCP server: %s", name)
		}

		// Create a unique ID for the repository
		id := fmt.Sprintf("mcp-%s-%s", sanitizeID(categorySlug), sanitizeID(key))

		// Generate a path for the repository
		path := fmt.Sprintf("/freedevtools/mcp/%s/%s/", categorySlug, key)

		// Format the repository name properly
		formattedName := formatRepositoryName(name)
		// Clean name (strip suffixes and trim)
		formattedName = cleanName(formattedName)

		// Create MCPData entry
		mcpEntry := MCPData{
			ID:          id,
			Name:        formattedName,
			Description: description,
			Path:        path,
			Category:    "mcp",
			Owner:       strings.TrimSpace(owner),
			Stars:       stars,
			Language:    strings.TrimSpace(language),
		}

		mcpData = append(mcpData, mcpEntry)
	}

	if err := rows.Err(); err != nil {
		return nil, fmt.Errorf("error iterating rows: %w", err)
	}

	fmt.Printf("  Processed %d total MCP entries\n", processedCount)

	// Sort by ID
	sort.Slice(mcpData, func(i, j int) bool {
		return mcpData[i].ID < mcpData[j].ID
	})

	fmt.Printf("  Generated %d MCP data entries\n", len(mcpData))
	return mcpData, nil
}

func formatRepositoryName(name string) string {
	// Only capitalize the first letter, keep everything else as is
	if len(name) == 0 {
		return name
	}
	return strings.ToUpper(string(name[0])) + strings.ToLower(name[1:])
}

// RunMCPOnly runs only the MCP data generation
func RunMCPOnly(ctx context.Context, start time.Time) {
	fmt.Println("🔧 Generating MCP data only...")

	mcpData, err := generateMCPData(ctx)
	if err != nil {
		log.Fatalf("❌ MCP data generation failed: %v", err)
	}

	// Save to JSON
	if err := saveToJSON("mcp.json", mcpData); err != nil {
		log.Fatalf("Failed to save MCP data: %v", err)
	}

	elapsed := time.Since(start)
	fmt.Printf("\n🎉 MCP data generation completed in %v\n", elapsed)
	fmt.Printf("📊 Generated %d MCP repositories\n", len(mcpData))

	// Show sample data
	fmt.Println("\n📝 Sample MCP repositories:")
	for i, repo := range mcpData {
		if i >= 10 { // Show first 10
			fmt.Printf("  ... and %d more repositories\n", len(mcpData)-10)
			break
		}
		fmt.Printf("  %d. %s (ID: %s)\n", i+1, repo.Name, repo.ID)
		if repo.Description != "" {
			fmt.Printf("     Description: %s\n", truncateString(repo.Description, 80))
		}
		fmt.Printf("     Owner: %s | Stars: %d | Language: %s\n", repo.Owner, repo.Stars, repo.Language)
		fmt.Printf("     Path: %s\n", repo.Path)
		fmt.Println()
	}

	fmt.Printf("💾 Data saved to output/mcp.json\n")

	// Automatically run stem processing
	fmt.Println("\n🔍 Running stem processing...")
	if err := jargon_stemmer.ProcessJSONFile("output/mcp.json"); err != nil {
		log.Fatalf("❌ Stem processing failed: %v", err)
	}
	fmt.Println("✅ Stem processing completed!")
}
