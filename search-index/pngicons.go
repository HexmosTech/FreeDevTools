package main

import (
	"context"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"regexp"
	jargon_stemmer "search-index/jargon-stemmer"
	"sort"
	"strings"
	"time"
)

func generatePNGIconsData(ctx context.Context) ([]SVGIconData, error) {
	fmt.Println("🖼️ Generating PNG icons data...")

	// Path to PNG cluster.json file
	clusterPath := "../frontend/data/cluster_png.json"

	content, err := ioutil.ReadFile(clusterPath)
	if err != nil {
		return nil, fmt.Errorf("failed to read cluster_png.json: %w", err)
	}

	var cluster SVGCluster
	if err := json.Unmarshal(content, &cluster); err != nil {
		return nil, fmt.Errorf("failed to parse cluster_png.json: %w", err)
	}

	var pngIconsData []SVGIconData
	categoryCount := 0
	iconCount := 0

	fmt.Println("Processing categories:")

	for _, clusterEntry := range cluster.Clusters {
		select {
		case <-ctx.Done():
			return nil, ctx.Err()
		default:
		}

		categoryCount++

		for _, fileName := range clusterEntry.FileNames {
			iconCount++

			iconName := strings.TrimPrefix(fileName.FileName, "_")
			iconName = strings.TrimSuffix(iconName, ".svg")

			displayName := formatIconName(iconName)
			iconPath := fmt.Sprintf("/freedevtools/png_icons/%s/%s/", clusterEntry.SourceFolder, iconName)
			iconID := generatePNGIconIDFromPath(iconPath)

			description := fileName.Description
			if description == "" {
				description = fmt.Sprintf("PNG icon for %s", displayName)
			}

			iconData := SVGIconData{
				ID:          iconID,
				Name:        displayName,
				Description: description,
				Path:        iconPath,
				Image:       fmt.Sprintf("/svg_icons/%s/%s", clusterEntry.SourceFolder, fileName.FileName),
				Category:    "png_icons",
			}

			pngIconsData = append(pngIconsData, iconData)
		}
	}

	// Sort by ID
	sort.Slice(pngIconsData, func(i, j int) bool {
		return pngIconsData[i].ID < pngIconsData[j].ID
	})

	fmt.Printf("🖼️ Processed %d categories with %d PNG icons total\n", categoryCount, iconCount)
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