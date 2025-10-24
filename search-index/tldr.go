package main

import (
	"context"
	"fmt"
	"io/ioutil"
	"path/filepath"
	"regexp"
	"sort"
	"strings"

	"gopkg.in/yaml.v2"
)

func generateTLDRData(ctx context.Context) ([]TLDRData, error) {
	fmt.Println("📚 Generating TLDR data...")

	// Path to TLDR markdown files
	basePath := "../frontend/data/tldr"

	files, err := filepath.Glob(filepath.Join(basePath, "**", "*.md"))
	if err != nil {
		return nil, fmt.Errorf("failed to find markdown files: %w", err)
	}

	var tldrData []TLDRData

	for _, file := range files {
		select {
		case <-ctx.Done():
			return nil, ctx.Err()
		default:
		}

		data, err := processTLDRFile(file)
		if err != nil {
			fmt.Printf("⚠️  Warning: Failed to process %s: %v\n", file, err)
			continue
		}

		if data != nil {
			tldrData = append(tldrData, *data)
		}
	}

	// Sort by ID
	sort.Slice(tldrData, func(i, j int) bool {
		return tldrData[i].ID < tldrData[j].ID
	})

	fmt.Printf("📚 Processed %d TLDR files\n", len(tldrData))
	return tldrData, nil
}

func processTLDRFile(filePath string) (*TLDRData, error) {
	content, err := ioutil.ReadFile(filePath)
	if err != nil {
		return nil, err
	}

	contentStr := string(content)

	// Check if file starts with frontmatter
	if !strings.HasPrefix(contentStr, "---") {
		return nil, fmt.Errorf("no frontmatter found")
	}

	// Find the end of frontmatter
	endMarker := strings.Index(contentStr[3:], "---")
	if endMarker == -1 {
		return nil, fmt.Errorf("frontmatter not properly closed")
	}

	// Extract frontmatter content
	frontmatterContent := contentStr[3 : endMarker+3]

	var frontmatter FrontMatter
	if err := yaml.Unmarshal([]byte(frontmatterContent), &frontmatter); err != nil {
		return nil, fmt.Errorf("failed to parse YAML frontmatter: %w", err)
	}

	// Generate ID from path
	id := generateIDFromPath(frontmatter.Path)

	// Ensure path ends with trailing slash
	path := frontmatter.Path
	if !strings.HasSuffix(path, "/") {
		path = path + "/"
	}

	// Format the name with first letter capitalized
	formattedName := capitalizeFirstLetter(frontmatter.Name)

	tldrData := &TLDRData{
		ID:          id,
		Name:        formattedName,
		Description: frontmatter.Description,
		Path:        path,
		Category:    "tldr", // Always set to "tldr" for all TLDR entries
	}

	return tldrData, nil
}

func generateIDFromPath(path string) string {
	// Remove the base path and convert to ID format
	cleanPath := strings.Replace(path, "/freedevtools/tldr/", "", 1)
	
	// Remove trailing slash if present
	cleanPath = strings.TrimSuffix(cleanPath, "/")
	
	// Replace remaining slashes with dashes
	cleanPath = strings.Replace(cleanPath, "/", "-", -1)

	// Replace any invalid characters with underscores
	reg := regexp.MustCompile(`[^a-zA-Z0-9\-_]`)
	cleanPath = reg.ReplaceAllString(cleanPath, "_")

	return fmt.Sprintf("tldr-%s", sanitizeID(cleanPath))
}


func capitalizeFirstLetter(name string) string {
	if len(name) == 0 {
		return name
	}
	return strings.ToUpper(string(name[0])) + strings.ToLower(name[1:])
}
