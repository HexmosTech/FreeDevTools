package main

import (
	"context"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"regexp"
	"sort"
	"strings"
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
		fmt.Printf("  %d. %s (%d icons)\n", categoryCount, clusterEntry.Name, len(clusterEntry.FileNames))

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

