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

func generatePNGIconsData(ctx context.Context) ([]SVGIconData, error) {
	fmt.Println("🖼️ Generating PNG icons data...")

	// Path to the SQLite database
	dbPath := filepath.Join("..", "db", "all_dbs", "png-icons-db-v4.db")
	db, err := sql.Open("sqlite3", dbPath)
	if err != nil {
		return nil, fmt.Errorf("failed to open database: %w", err)
	}
	defer db.Close()

	// Query all PNG icons from the database
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

	var pngIconsData []SVGIconData
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
			fmt.Printf("  Processed %d PNG icon entries...\n", processedCount)
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

		// Keep original name for image path (preserve underscore if present)
		originalIconName := iconName
		// Remove .png extension if present for image path
		originalIconName = strings.TrimSuffix(originalIconName, ".png")
		originalIconName = strings.TrimSuffix(originalIconName, ".svg")

		// Remove leading underscore only for display name formatting
		displayIconName := strings.TrimPrefix(iconName, "_")
		displayIconName = strings.TrimSuffix(displayIconName, ".svg")
		displayIconName = strings.TrimSuffix(displayIconName, ".png")

		displayName := formatIconName(displayIconName)
		// Clean name (strip suffixes and trim)
		displayName = cleanName(displayName)

		// Create the path using originalIconName (preserves leading underscore from database)
		iconPath := fmt.Sprintf("/freedevtools/png_icons/%s/%s/", cluster, originalIconName)
		iconID := generatePNGIconIDFromPath(iconPath)

		// Use description from database, trim it
		desc := strings.TrimSpace(description.String)
		if desc == "" {
			desc = fmt.Sprintf("PNG icon for %s", displayName)
		}

		// Generate image path using original name (preserve underscore)
		// PNG icons are stored as SVG files in svg_icons directory
		imagePath := fmt.Sprintf("/svg_icons/%s/%s.svg", cluster, originalIconName)

		// Use img_alt from database, trim it
		imgAltValue := strings.TrimSpace(imgAlt.String)

		iconData := SVGIconData{
			ID:          iconID,
			Name:        displayName,
			Description: desc,
			Path:        iconPath,
			Image:       imagePath,
			Category:    "png_icons",
			ImgAlt:      imgAltValue,
		}

		pngIconsData = append(pngIconsData, iconData)
	}

	if err := rows.Err(); err != nil {
		return nil, fmt.Errorf("error iterating rows: %w", err)
	}

	fmt.Printf("  Processed %d total PNG icon entries\n", processedCount)

	// Sort by ID
	sort.Slice(pngIconsData, func(i, j int) bool {
		return pngIconsData[i].ID < pngIconsData[j].ID
	})

	fmt.Printf("🖼️ Generated %d PNG icon data entries\n", len(pngIconsData))
	return pngIconsData, nil
}

func generatePNGIconIDFromPath(path string) string {
	cleanPath := strings.Replace(path, "/freedevtools/png_icons/", "", 1)

	// Remove trailing slash if present
	cleanPath = strings.TrimSuffix(cleanPath, "/")

	// Replace remaining slashes with dashes
	cleanPath = strings.Replace(cleanPath, "/", "-", -1)

	reg := regexp.MustCompile(`[^a-zA-Z0-9\-_]`)
	cleanPath = reg.ReplaceAllString(cleanPath, "_")
	return fmt.Sprintf("png-icons-%s", sanitizeID(cleanPath))
}

func RunPNGIconsOnly(ctx context.Context, start time.Time) {
	fmt.Println("🖼️ Generating PNG icons data only...")

	icons, err := generatePNGIconsData(ctx)
	if err != nil {
		log.Fatalf("❌ PNG icons data generation failed: %v", err)
	}

	if err := saveToJSON("png_icons.json", icons); err != nil {
		log.Fatalf("Failed to save PNG icons data: %v", err)
	}

	elapsed := time.Since(start)
	fmt.Printf("\n🎉 PNG icons data generation completed in %v\n", elapsed)
	fmt.Printf("📊 Generated %d PNG icons\n", len(icons))

	// Show sample
	fmt.Println("\n📝 Sample PNG icons:")
	for i, icon := range icons {
		if i >= 10 {
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

	fmt.Printf("💾 Data saved to output/png_icons.json\n")

	// Automatically run stem processing
	fmt.Println("\n🔍 Running stem processing...")
	if err := jargon_stemmer.ProcessJSONFile("output/png_icons.json"); err != nil {
		log.Fatalf("❌ Stem processing failed: %v", err)
	}
	fmt.Println("✅ Stem processing completed!")
}
