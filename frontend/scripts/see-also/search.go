package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"os"
	"path/filepath"
	"strings"
	"time"

	"github.com/pelletier/go-toml/v2"
)

var (
	meiliSearchAPIKey = getAPIKey()
	meiliSearchURL    = getMeiliURL()
)

type MeiliConfig struct {
	MasterKey string `toml:"meili_master_key"`
	URL       string `toml:"meili_url"`
}

func getAPIKey() string {
	// Try environment variable first
	if key := os.Getenv("MEILI_SEARCH_KEY"); key != "" {
		return key
	}
	// Fallback to master key from environment
	if key := os.Getenv("MEILI_MASTER_KEY"); key != "" {
		return key
	}
	// Try to read from fdt-dev.toml
	key, _ := loadMeiliConfig()
	if key != "" {
		return key
	}
	// Error if not found
	fmt.Fprintf(os.Stderr, "Error: MEILI_MASTER_KEY not found in environment or fdt-dev.toml\n")
	os.Exit(1)
	return ""
}

func getMeiliURL() string {
	// Try environment variable first
	if url := os.Getenv("MEILI_SEARCH_URL"); url != "" {
		return url + "/indexes/freedevtools/search"
	}
	// Try to read from fdt-dev.toml
	_, url := loadMeiliConfig()
	if url != "" {
		return url + "/indexes/freedevtools/search"
	}
	// Default fallback
	return "http://localhost:7700/indexes/freedevtools/search"
}

func loadMeiliConfig() (string, string) {
	// Find fdt-dev.toml relative to this script
	// Script is in frontend/scripts/see-also/, config is in frontend/
	// Get the directory where this source file is located
	_, err := os.Getwd()
	if err != nil {
		return "", ""
	}
	
	// Try multiple possible paths relative to current working directory
	possiblePaths := []string{
		"../../fdt-dev.toml",                    // from scripts/see-also/ to frontend/
		"../../../frontend/fdt-dev.toml",       // from scripts/see-also/ via root
		"../fdt-dev.toml",                       // fallback
		"fdt-dev.toml",                         // if run from frontend/
	}
	
	for _, configPath := range possiblePaths {
		absPath, err := filepath.Abs(configPath)
		if err != nil {
			continue
		}
		
		data, err := os.ReadFile(absPath)
		if err != nil {
			continue
		}
		
		var config MeiliConfig
		if err := toml.Unmarshal(data, &config); err != nil {
			continue
		}
		
		if config.MasterKey != "" {
			return config.MasterKey, config.URL
		}
	}
	
	return "", ""
}

// SearchResult represents a single search hit
type SearchResult struct {
	ID          string `json:"id"`
	Name        string `json:"name"`
	Title       string `json:"title"`
	Description string `json:"description"`
	Category    string `json:"category"`
	Path        string `json:"path"`
	Image       string `json:"image"`
	Code        string `json:"code"`
}

// SearchResponse represents the Meilisearch API response
type SearchResponse struct {
	Hits               []SearchResult `json:"hits"`
	Query              string         `json:"query"`
	ProcessingTimeMs   int            `json:"processingTimeMs"`
	Limit              int            `json:"limit"`
	Offset             int            `json:"offset"`
	EstimatedTotalHits int            `json:"estimatedTotalHits"`
}

// printCurlCommand prints the curl equivalent of the request for debugging
func printCurlCommand(query string, jsonData []byte) {
	// Escape single quotes in the JSON for shell safety
	jsonEscaped := strings.ReplaceAll(string(jsonData), "'", "'\\''")
	
	curlCmd := fmt.Sprintf("curl -X POST '%s' \\\n"+
		"  -H 'Content-Type: application/json' \\\n"+
		"  -H 'Authorization: Bearer %s' \\\n"+
		"  -d '%s'",
		meiliSearchURL, meiliSearchAPIKey, jsonEscaped)
	
	fmt.Fprintf(os.Stderr, "\n[DEBUG] Meilisearch request for query: %q\n", query)
	fmt.Fprintf(os.Stderr, "[DEBUG] Curl command:\n%s\n", curlCmd)
}

// SearchMeilisearch searches the Meilisearch API for a query
func SearchMeilisearch(query string) (*SearchResponse, error) {
	searchBody := map[string]interface{}{
		"q":     query,
		"limit": 10,
		"offset": 0,
		"attributesToRetrieve": []string{
			"id", "name", "title", "description", "category", "path", "image", "code",
		},
	}

	jsonData, err := json.Marshal(searchBody)
	if err != nil {
		return nil, fmt.Errorf("failed to marshal search body: %w", err)
	}

	// Print curl command for debugging
	printCurlCommand(query, jsonData)

	req, err := http.NewRequest("POST", meiliSearchURL, bytes.NewBuffer(jsonData))
	if err != nil {
		return nil, fmt.Errorf("failed to create request: %w", err)
	}

	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", "Bearer "+meiliSearchAPIKey)

	client := &http.Client{Timeout: 10 * time.Second}
	requestStart := time.Now()
	resp, err := client.Do(req)
	requestDuration := time.Since(requestStart)
	if err != nil {
		fmt.Fprintf(os.Stderr, "[DEBUG] Request failed after %s: %v\n", requestDuration.Round(time.Millisecond), err)
		return nil, fmt.Errorf("search request failed: %w", err)
	}
	defer resp.Body.Close()

	fmt.Fprintf(os.Stderr, "[DEBUG] Request completed in %s (status: %d)\n", requestDuration.Round(time.Millisecond), resp.StatusCode)

	if resp.StatusCode != http.StatusOK {
		body, _ := io.ReadAll(resp.Body)
		fmt.Fprintf(os.Stderr, "[DEBUG] Error response body: %s\n", string(body))
		return nil, fmt.Errorf("search failed with status %d: %s", resp.StatusCode, string(body))
	}

	var searchResp SearchResponse
	if err := json.NewDecoder(resp.Body).Decode(&searchResp); err != nil {
		return nil, fmt.Errorf("failed to decode response: %w", err)
	}

	fmt.Fprintf(os.Stderr, "[DEBUG] Response: %d hits, processingTimeMs: %d\n\n", len(searchResp.Hits), searchResp.ProcessingTimeMs)

	return &searchResp, nil
}

