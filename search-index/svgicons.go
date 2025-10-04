package main

import (
	"context"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"regexp"
	"strings"
)

func generateSVGIconsData(ctx context.Context) ([]SVGIconData, error) {
	fmt.Println("🎨 Generating SVG icons data...")

	// Path to cluster.json file
	clusterPath := "../frontend/src/pages/svg_icons/cluster.json"

	content, err := ioutil.ReadFile(clusterPath)
	if err != nil {
		return nil, fmt.Errorf("failed to read cluster.json: %w", err)
	}

	var cluster SVGCluster
	if err := json.Unmarshal(content, &cluster); err != nil {
		return nil, fmt.Errorf("failed to parse cluster.json: %w", err)
	}

	var svgIconsData []SVGIconData
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

		// Process each icon in the cluster
		for _, fileName := range clusterEntry.FileNames {
			iconCount++

			// Remove leading underscore if present and get the name without extension
			iconName := strings.TrimPrefix(fileName.FileName, "_")
			iconName = strings.TrimSuffix(iconName, ".svg")

			// Format the display name to be more user-friendly
			displayName := formatIconName(iconName)

			// Create the path (similar to Python logic)
			iconPath := fmt.Sprintf("/freedevtools/svg_icons/%s/%s/", clusterEntry.SourceFolder, iconName)

			// Generate ID from path (similar to Python logic)
			iconID := generateIconIDFromPath(iconPath)

			// Use description from fileName if available, otherwise create default
			description := fileName.Description
			if description == "" {
				description = fmt.Sprintf("SVG icon for %s", displayName)
			}

			// Generate icon data
			iconData := SVGIconData{
				ID:          iconID,
				Name:        displayName,
				Description: description,
				Path:        iconPath,
				Image:   fmt.Sprintf("/svg_icons/%s/%s", clusterEntry.SourceFolder, fileName.FileName),
				Category:    "svg_icons",
			}

			svgIconsData = append(svgIconsData, iconData)
		}
	}

	fmt.Printf("🎨 Processed %d categories with %d icons total\n", categoryCount, iconCount)
	return svgIconsData, nil
}

func generateIconIDFromPath(path string) string {
	// Remove the base path (similar to Python logic)
	cleanPath := strings.Replace(path, "/freedevtools/svg_icons/", "", 1)
	// Replace slashes with hyphens
	cleanPath = strings.Replace(cleanPath, "/", "-", -1)
	// Replace any invalid characters with underscores
	reg := regexp.MustCompile(`[^a-zA-Z0-9\-_]`)
	cleanPath = reg.ReplaceAllString(cleanPath, "_")
	// Add prefix with hyphen
	return fmt.Sprintf("svg-icons-%s", cleanPath)
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
