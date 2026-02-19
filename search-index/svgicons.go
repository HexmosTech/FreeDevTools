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

func generateSVGIconsData(ctx context.Context) ([]SVGIconData, error) {
	fmt.Println("🎨 Generating SVG icons data...")

	// Path to the SQLite database
	dbPath := filepath.Join("..", "db", "all_dbs", "svg-icons-db-v5.db")
	db, err := sql.Open("sqlite3", dbPath)
	if err != nil {
		return nil, fmt.Errorf("failed to open database: %w", err)
	}
	defer db.Close()

	// Query all SVG icons from the database
	query := `
		SELECT cluster, name, description, url, img_alt
		FROM icon
		WHERE url IS NOT NULL AND url != ''
		ORDER BY cluster, name
	`
	rows, err := db.QueryContext(ctx, query)
	if err != nil {
		return nil, fmt.Errorf("failed to query icons: %w", err)
	}
	defer rows.Close()

	var svgIconsData []SVGIconData
	processedCount := 0

	for rows.Next() {
		select {
		case <-ctx.Done():
			return nil, ctx.Err()
		default:
		}

		var cluster, name, url string
		var description, imgAlt sql.NullString

		if err := rows.Scan(&cluster, &name, &description, &url, &imgAlt); err != nil {
			fmt.Printf("⚠️  Warning: Failed to scan row: %v\n", err)
			continue
		}

		processedCount++
		if processedCount%1000 == 0 {
			fmt.Printf("  Processed %d SVG icon entries...\n", processedCount)
		}

		// Extract icon name from URL if needed (URL format: /cluster/name)
		iconName := name
		if iconName == "" && url != "" {
			// Extract name from URL: /cluster/name -> name
			pathParts := strings.Split(strings.TrimPrefix(url, "/"), "/")
			if len(pathParts) >= 2 {
				iconName = pathParts[len(pathParts)-1]
			}
		}

		// Keep original name for image path - use name from database as-is
		// The database name field should match the actual file name
		originalIconName := name
		if originalIconName == "" {
			originalIconName = iconName
		}
		// Remove .svg extension if present for image path
		originalIconName = strings.TrimSuffix(originalIconName, ".svg")

		// Remove leading underscore only for display name formatting
		displayIconName := strings.TrimPrefix(iconName, "_")
		displayIconName = strings.TrimSuffix(displayIconName, ".svg")

		// Format the display name to be more user-friendly
		displayName := formatIconName(displayIconName)
		// Clean name (strip suffixes and trim)
		displayName = cleanName(displayName)

		// Create the path using originalIconName (preserves leading underscore from database)
		iconPath := fmt.Sprintf("/freedevtools/svg_icons/%s/%s/", cluster, originalIconName)

		// Generate ID from path
		iconID := generateIconIDFromPath(iconPath)

		// Use description from database, trim it
		desc := strings.TrimSpace(description.String)
		if desc == "" {
			desc = fmt.Sprintf("SVG icon for %s", displayName)
		}

		// Generate image path using original name (preserve underscore)
		imagePath := fmt.Sprintf("/svg_icons/%s/%s.svg", cluster, originalIconName)

		// Use img_alt from database, trim it
		imgAltValue := strings.TrimSpace(imgAlt.String)

		// Generate icon data
		iconData := SVGIconData{
			ID:          iconID,
			Name:        displayName,
			Description: desc,
			Path:        iconPath,
			Image:       imagePath,
			Category:    "svg_icons",
			ImgAlt:      imgAltValue,
		}

		svgIconsData = append(svgIconsData, iconData)
	}

	if err := rows.Err(); err != nil {
		return nil, fmt.Errorf("error iterating rows: %w", err)
	}

	fmt.Printf("  Processed %d total SVG icon entries\n", processedCount)

	// Sort by ID
	sort.Slice(svgIconsData, func(i, j int) bool {
		return svgIconsData[i].ID < svgIconsData[j].ID
	})

	fmt.Printf("🎨 Generated %d SVG icon data entries\n", len(svgIconsData))
	return svgIconsData, nil
}

func generateIconIDFromPath(path string) string {
	// Remove the base path (similar to Python logic)
	cleanPath := strings.Replace(path, "/freedevtools/svg_icons/", "", 1)

	// Remove trailing slash if present
	cleanPath = strings.TrimSuffix(cleanPath, "/")

	// Replace remaining slashes with hyphens
	cleanPath = strings.Replace(cleanPath, "/", "-", -1)

	// Replace any invalid characters with underscores
	reg := regexp.MustCompile(`[^a-zA-Z0-9\-_]`)
	cleanPath = reg.ReplaceAllString(cleanPath, "_")

	// Add prefix with hyphen and sanitize
	return fmt.Sprintf("svg-icons-%s", sanitizeID(cleanPath))
}

func formatIconName(iconName string) string {
	// Replace underscores and hyphens with spaces
	name := strings.Replace(iconName, "_", " ", -1)
	name = strings.Replace(name, "-", " ", -1)

	// Title case
	words := strings.Fields(name)
	for i, word := range words {
		if len(word) > 0 {
			words[i] = strings.ToUpper(word[:1]) + strings.ToLower(word[1:])
		}
	}

	return strings.Join(words, " ")
}

func RunSVGIconsOnly(ctx context.Context, start time.Time) {
	fmt.Println("🎨 Generating SVG icons data only...")

	icons, err := generateSVGIconsData(ctx)
	if err != nil {
		log.Fatalf("❌ SVG icons data generation failed: %v", err)
	}

	// Save to JSON
	if err := saveToJSON("svg_icons.json", icons); err != nil {
		log.Fatalf("Failed to save SVG icons data: %v", err)
	}

	elapsed := time.Since(start)
	fmt.Printf("\n🎉 SVG icons data generation completed in %v\n", elapsed)
	fmt.Printf("📊 Generated %d SVG icons\n", len(icons))

	// Show sample data
	fmt.Println("\n📝 Sample SVG icons:")
	for i, icon := range icons {
		if i >= 10 { // Show first 10
			fmt.Printf("  ... and %d more icons\n", len(icons)-10)
			break
		}
		fmt.Printf("  %d. %s (ID: %s)\n", i+1, icon.Name, icon.ID)
		if icon.Description != "" {
			fmt.Printf("     Description: %s\n", truncateString(icon.Description, 80))
		}
		fmt.Printf("     Image: %s\n", icon.Image)
		fmt.Printf("     Path: %s\n", icon.Path)
		fmt.Println()
	}

	fmt.Printf("💾 Data saved to output/svg_icons.json\n")

	// Automatically run stem processing
	fmt.Println("\n🔍 Running stem processing...")
	if err := jargon_stemmer.ProcessJSONFile("output/svg_icons.json"); err != nil {
		log.Fatalf("❌ Stem processing failed: %v", err)
	}
	fmt.Println("✅ Stem processing completed!")
}
