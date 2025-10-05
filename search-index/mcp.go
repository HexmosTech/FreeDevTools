package main

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"os"
	"path/filepath"
	"sort"
	"time"
)

// MCPMetadata represents the structure of the metadata JSON file
type MCPMetadata struct {
	TotalCategories    int                    `json:"totalCategories"`
	TotalRepositories  int                    `json:"totalRepositories"`
	ProcessingStarted  string                 `json:"processing_started"`
	ProcessingCompleted string                `json:"processing_completed"`
	Categories         map[string]MCPCategoryMeta `json:"categories"`
	Summary            MCPSummary             `json:"summary"`
}

// MCPCategoryMeta represents category metadata
type MCPCategoryMeta struct {
	CategoryDisplay   string `json:"categoryDisplay"`
	TotalRepositories int    `json:"totalRepositories"`
	TotalStars        int    `json:"totalStars"`
	TotalForks        int    `json:"totalForks"`
	NpmPackages       int    `json:"npmPackages"`
	NpmDownloads      int    `json:"npmDownloads"`
}

// MCPSummary represents overall summary statistics
type MCPSummary struct {
	TotalStars    int `json:"totalStars"`
	TotalForks    int `json:"totalForks"`
	NpmPackages   int `json:"npmPackages"`
	NpmDownloads  int `json:"npmDownloads"`
}

// MCPCategory represents a category of MCP repositories
type MCPCategory struct {
	Category           string                       `json:"category"`
	CategoryDisplay    string                       `json:"categoryDisplay"`
	Description        string                       `json:"description"`
	TotalRepositories  int                          `json:"totalRepositories"`
	Repositories       map[string]MCPRepository     `json:"repositories"`
}

// MCPRepository represents a single MCP repository
type MCPRepository struct {
	Owner               string      `json:"owner"`
	Name                string      `json:"name"`
	URL                 string      `json:"url"`
	ImageURL            string      `json:"imageUrl"`
	Enhanced            bool        `json:"enhanced"`
	Processed           bool        `json:"processed"`
	GotData             bool        `json:"got_data"`
	ProcessingTimestamp string      `json:"processing_timestamp"`
	CollectionTimestamp string      `json:"collection_timestamp"`
	Stars               int         `json:"stars"`
	Forks               int         `json:"forks"`
	License             string      `json:"license"`
	Language            string      `json:"language"`
	CreatedAt           string      `json:"created_at"`
	UpdatedAt           string      `json:"updated_at"`
	OpenIssues          int         `json:"open_issues"`
	GithubSuccess       bool        `json:"github_success"`
	GithubError         interface{} `json:"github_error"`
	NPMURL              string      `json:"npm_url"`
	NPMDownloads        int         `json:"npm_downloads"`
	NPMPackageName      interface{} `json:"npm_package_name"`
	NPMSuccess          bool        `json:"npm_success"`
	NPMError            interface{} `json:"npm_error"`
	Description         string      `json:"description"`
	ReadmeContent       string      `json:"readme_content"`
}

// generateMCPData processes the MCP metadata and category JSON files to generate search index data
func generateMCPData(ctx context.Context) ([]MCPData, error) {
	// Path to the MCP metadata file
	metadataPath := filepath.Join("..", "frontend", "public", "mcp", "meta_data.json")
	
	// Check if metadata file exists
	if _, err := os.Stat(metadataPath); os.IsNotExist(err) {
		return nil, fmt.Errorf("MCP metadata file not found at %s", metadataPath)
	}

	// Read the metadata JSON file
	metadataData, err := os.ReadFile(metadataPath)
	if err != nil {
		return nil, fmt.Errorf("failed to read MCP metadata file: %w", err)
	}

	// Parse the metadata JSON
	var metadata MCPMetadata
	if err := json.Unmarshal(metadataData, &metadata); err != nil {
		return nil, fmt.Errorf("failed to parse MCP metadata JSON: %w", err)
	}

	var mcpData []MCPData

	// Process each category
	for categoryKey := range metadata.Categories {
		// Path to the specific category JSON file
		categoryPath := filepath.Join("..", "frontend", "public", "mcp", "input", categoryKey+".json")
		
		// Check if category file exists
		if _, err := os.Stat(categoryPath); os.IsNotExist(err) {
			fmt.Printf("Warning: Category file not found: %s\n", categoryPath)
			continue
		}

		// Read the category JSON file
		categoryData, err := os.ReadFile(categoryPath)
		if err != nil {
			fmt.Printf("Warning: Failed to read category file %s: %v\n", categoryPath, err)
			continue
		}

		// Parse the category JSON
		var category MCPCategory
		if err := json.Unmarshal(categoryData, &category); err != nil {
			fmt.Printf("Warning: Failed to parse category JSON %s: %v\n", categoryPath, err)
			continue
		}

		// Process each repository in the category
		for repoKey, repo := range category.Repositories {
			// Skip if repository doesn't have data
			if !repo.GotData || !repo.Processed {
				continue
			}

			// Create a unique ID for the repository
			id := fmt.Sprintf("mcp-%s-%s", categoryKey, repoKey)

			// Generate a path for the repository
			path := fmt.Sprintf("/freedevtools/mcp/%s/%s/", categoryKey, repoKey)

			// Use description from repository, fallback to category description
			description := repo.Description
			if description == "" {
				description = category.Description
			}
			if description == "" {
				description = fmt.Sprintf("MCP server: %s", repo.Name)
			}

			// Create MCPData entry
			mcpEntry := MCPData{
				ID:          id,
				Name:        repo.Name,
				Description: description,
				Path:        path,
				Category:    "mcp",
				Owner:       repo.Owner,
				Stars:       repo.Stars,
				Language:    repo.Language,
			}

			mcpData = append(mcpData, mcpEntry)
		}
	}

	// Sort by ID
	sort.Slice(mcpData, func(i, j int) bool {
		return mcpData[i].ID < mcpData[j].ID
	})

	return mcpData, nil
}

// runMCPOnly runs only the MCP data generation
func runMCPOnly(ctx context.Context, start time.Time) {
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
}
