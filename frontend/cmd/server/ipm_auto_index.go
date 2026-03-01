package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"net/url"
	"strings"
	"time"

	"fdt-templ/internal/db/installerpedia"
)

// RepologyProject represents a project from Repology API
type RepologyProject struct {
	Repo    string `json:"repo"`
	Version string `json:"version"`
	Summary string `json:"summary"`
}

// RepologyResponse is the response from Repology API
type RepologyResponse map[string][]RepologyProject

// GitHubSearchItem represents a GitHub search result item
type GitHubSearchItem struct {
	FullName    string `json:"full_name"`
	Description string `json:"description"`
	Stars       int    `json:"stargazers_count"`
}

// GitHubSearchResponse represents GitHub API search response
type GitHubSearchResponse struct {
	Items []GitHubSearchItem `json:"items"`
}

// SearchResult represents a unified search result with similarity score
type SearchResult struct {
	Name        string
	Description string
	Stars       int
	SourceType  string // "github" or "repology"
	Similarity  float64
}

// fetchRepologyRepos searches Repology for packages matching the query
func fetchRepologyRepos(query string) (RepologyResponse, error) {
	url := fmt.Sprintf("https://repology.org/api/v1/projects/?search=%s", url.QueryEscape(query))

	client := &http.Client{Timeout: 10 * time.Second}
	req, _ := http.NewRequest("GET", url, nil)
	req.Header.Set("User-Agent", "Mozilla/5.0 (IPM-CLI-Tool; contact@example.com)")

	resp, err := client.Do(req)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("bad status: %d", resp.StatusCode)
	}

	var fullResult RepologyResponse
	if err := json.NewDecoder(resp.Body).Decode(&fullResult); err != nil {
		return nil, err
	}

	// Limit to 10 entries
	limitedResult := make(RepologyResponse)
	count := 0
	for pkg, project := range fullResult {
		if count >= 10 {
			break
		}
		limitedResult[pkg] = project
		count++
	}

	return limitedResult, nil
}

// fetchGitHubRepos searches GitHub for repositories matching the query
func fetchGitHubRepos(query string) ([]GitHubSearchItem, error) {
	url := fmt.Sprintf("https://api.github.com/search/repositories?q=%s&per_page=10", url.QueryEscape(query))
	resp, err := http.Get(url)
	if err != nil {
		return nil, fmt.Errorf("GitHub search failed: %v", err)
	}
	defer resp.Body.Close()

	var result GitHubSearchResponse
	if err := json.NewDecoder(resp.Body).Decode(&result); err != nil {
		return nil, fmt.Errorf("Failed to parse GitHub response: %v", err)
	}
	return result.Items, nil
}

// calculateSimilarity calculates a simple similarity score between two strings (0-100)
// Uses a combination of exact match, contains, and normalized Levenshtein distance
func calculateSimilarity(searchTerm, candidate string) float64 {
	searchLower := strings.ToLower(strings.TrimSpace(searchTerm))
	candidateLower := strings.ToLower(strings.TrimSpace(candidate))

	// Exact match
	if searchLower == candidateLower {
		return 100.0
	}

	// Contains match (high score)
	if strings.Contains(candidateLower, searchLower) || strings.Contains(searchLower, candidateLower) {
		return 85.0
	}

	// Word-based similarity
	searchWords := strings.Fields(searchLower)
	candidateWords := strings.Fields(candidateLower)

	matchingWords := 0
	for _, sw := range searchWords {
		for _, cw := range candidateWords {
			if sw == cw || strings.Contains(cw, sw) || strings.Contains(sw, cw) {
				matchingWords++
				break
			}
		}
	}

	if len(searchWords) > 0 {
		wordScore := float64(matchingWords) / float64(len(searchWords)) * 70.0

		// Add Levenshtein-based score
		levenshteinScore := levenshteinSimilarity(searchLower, candidateLower) * 30.0

		return wordScore + levenshteinScore
	}

	// Fallback to Levenshtein
	return levenshteinSimilarity(searchLower, candidateLower) * 100.0
}

// levenshteinSimilarity calculates normalized Levenshtein similarity (0-1)
func levenshteinSimilarity(s1, s2 string) float64 {
	if len(s1) == 0 && len(s2) == 0 {
		return 1.0
	}
	if len(s1) == 0 || len(s2) == 0 {
		return 0.0
	}

	distance := levenshteinDistance(s1, s2)
	maxLen := len(s1)
	if len(s2) > maxLen {
		maxLen = len(s2)
	}

	if maxLen == 0 {
		return 1.0
	}

	return 1.0 - float64(distance)/float64(maxLen)
}

// levenshteinDistance calculates the Levenshtein distance between two strings
func levenshteinDistance(s1, s2 string) int {
	r1, r2 := []rune(s1), []rune(s2)
	column := make([]int, len(r1)+1)

	for y := 1; y <= len(r1); y++ {
		column[y] = y
	}

	for x := 1; x <= len(r2); x++ {
		column[0] = x
		lastDiag := x - 1
		for y := 1; y <= len(r1); y++ {
			oldDiag := column[y]
			cost := 0
			if r1[y-1] != r2[x-1] {
				cost = 1
			}
			column[y] = min(column[y]+1, column[y-1]+1, lastDiag+cost)
			lastDiag = oldDiag
		}
	}

	return column[len(r1)]
}

func min(a, b, c int) int {
	if a < b && a < c {
		return a
	}
	if b < c {
		return b
	}
	return c
}

// findBestMatch finds the best matching repository from GitHub and Repology results
func findBestMatch(searchTerm string, githubItems []GitHubSearchItem, repologyItems RepologyResponse) (*SearchResult, error) {
	var bestMatch *SearchResult
	bestScore := 0.0

	// Check GitHub results
	for _, item := range githubItems {
		// Calculate similarity for full name
		similarity := calculateSimilarity(searchTerm, item.FullName)

		// Also check description if available
		if item.Description != "" {
			descSimilarity := calculateSimilarity(searchTerm, item.Description) * 0.3
			similarity = similarity*0.7 + descSimilarity
		}

		if similarity > bestScore {
			bestScore = similarity
			bestMatch = &SearchResult{
				Name:        item.FullName,
				Description: item.Description,
				Stars:       item.Stars,
				SourceType:  "github",
				Similarity:  similarity,
			}
		}
	}

	// Check Repology results
	for pkg, entries := range repologyItems {
		if len(entries) == 0 {
			continue
		}

		entry := entries[0]
		similarity := calculateSimilarity(searchTerm, pkg)

		// Also check summary if available
		if entry.Summary != "" {
			summarySimilarity := calculateSimilarity(searchTerm, entry.Summary) * 0.3
			similarity = similarity*0.7 + summarySimilarity
		}

		if similarity > bestScore {
			bestScore = similarity
			bestMatch = &SearchResult{
				Name:        pkg,
				Description: entry.Summary,
				Stars:       0, // Repology doesn't provide stars
				SourceType:  "repology",
				Similarity:  similarity,
			}
		}
	}

	return bestMatch, nil
}

// handleAutoIndex handles the auto-index endpoint
func handleAutoIndex(db *installerpedia.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		if r.Method != http.MethodPost {
			http.Error(w, "Method Not Allowed", http.StatusMethodNotAllowed)
			return
		}

		var payload struct {
			SearchTerm string `json:"search_term"`
		}
		if err := json.NewDecoder(r.Body).Decode(&payload); err != nil {
			log.Printf("⚠️ [Installerpedia Auto-Index] Bad JSON: %v", err)
			http.Error(w, "Invalid JSON", http.StatusBadRequest)
			return
		}

		searchTerm := strings.TrimSpace(payload.SearchTerm)
		if searchTerm == "" {
			http.Error(w, "search_term is required", http.StatusBadRequest)
			return
		}

		log.Printf("🔍 [Auto-Index] Searching for: %s", searchTerm)

		// Search both GitHub and Repology
		githubItems, err := fetchGitHubRepos(searchTerm)
		if err != nil {
			log.Printf("⚠️ [Auto-Index] GitHub search error: %v", err)
			githubItems = []GitHubSearchItem{} // Continue with empty results
		}

		repologyItems, err := fetchRepologyRepos(searchTerm)
		if err != nil {
			log.Printf("⚠️ [Auto-Index] Repology search error: %v", err)
			repologyItems = RepologyResponse{} // Continue with empty results
		}

		// Find best match
		bestMatch, err := findBestMatch(searchTerm, githubItems, repologyItems)
		if err != nil || bestMatch == nil {
			log.Printf("❌ [Auto-Index] No matches found for: %s", searchTerm)
			w.Header().Set("Content-Type", "application/json")
			w.WriteHeader(http.StatusNotFound)
			fmt.Fprintf(w, `{"success": false, "message": "No matches found"}`)
			return
		}

		// Check similarity threshold (60%)
		if bestMatch.Similarity < 60.0 {
			log.Printf("⚠️ [Auto-Index] Best match similarity (%.2f%%) below threshold (60%%) for: %s", bestMatch.Similarity, searchTerm)
			w.Header().Set("Content-Type", "application/json")
			w.WriteHeader(http.StatusOK)
			fmt.Fprintf(w, `{"success": false, "message": "Similarity too low", "similarity": %.2f, "best_match": "%s"}`, bestMatch.Similarity, bestMatch.Name)
			return
		}

		log.Printf("✅ [Auto-Index] Best match found: %s (%.2f%% similarity, source: %s)", bestMatch.Name, bestMatch.Similarity, bestMatch.SourceType)

		// Generate repo data
		var contextData string
		var releaseText string

		if bestMatch.SourceType == "repology" {
			repologyData, err := fetchRepologyContext(bestMatch.Name)
			if err != nil {
				log.Printf("⚠️ [Auto-Index] Error fetching Repology context for %s: %v", bestMatch.Name, err)
				contextData = ""
			} else {
				contextData = repologyData
			}
			releaseText = "Source: Repology Package Repository"
		} else {
			// GitHub logic
			readmeBody, err := fetchReadme(bestMatch.Name)
			if err != nil {
				log.Printf("⚠️ [Auto-Index] Error fetching README for %s: %v", bestMatch.Name, err)
				contextData = ""
			} else {
				contextData = readmeBody
			}

			release, err := fetchLatestRelease(bestMatch.Name)
			if err != nil {
				log.Printf("⚠️ [Auto-Index] Error fetching latest release for %s: %v", bestMatch.Name, err)
				releaseText = ""
			} else if release != nil {
				releaseText = fmt.Sprintf("Tag: %s, Assets: ", release.TagName)
				for _, a := range release.Assets {
					releaseText += fmt.Sprintf("[%s : %s] ", a.Name, a.BrowseUrl)
				}
			} else {
				releaseText = ""
			}
		}

		// Generate IPM JSON
		log.Printf("🤖 [Auto-Index] Generating IPM data for: %s", bestMatch.Name)
		rawJson, err := generateIPMJson(bestMatch.Name, contextData, releaseText, bestMatch.SourceType)
		if err != nil {
			log.Printf("❌ [Auto-Index] AI Analysis failed: %v", err)
			http.Error(w, "Generation failed", http.StatusInternalServerError)
			return
		}

		// Parse and prepare entry payload
		cleanJson := strings.TrimSpace(strings.TrimPrefix(strings.TrimSuffix(rawJson, "```"), "```json"))
		var tempMap map[string]interface{}
		if err := json.Unmarshal([]byte(cleanJson), &tempMap); err != nil {
			log.Printf("❌ [Auto-Index] Failed to parse generated JSON: %v", err)
			http.Error(w, "Failed to parse generated data", http.StatusInternalServerError)
			return
		}

		// Set metadata
		tempMap["name"] = bestMatch.Name
		tempMap["description"] = bestMatch.Description
		tempMap["stars"] = bestMatch.Stars

		mergedBytes, err := json.Marshal(tempMap)
		if err != nil {
			log.Printf("❌ [Auto-Index] Failed to marshal merged JSON: %v", err)
			http.Error(w, "Failed to prepare entry", http.StatusInternalServerError)
			return
		}

		// Parse into EntryPayload
		var entryPayload EntryPayload
		if err := json.Unmarshal(mergedBytes, &entryPayload); err != nil {
			log.Printf("❌ [Auto-Index] Failed to parse entry payload: %v", err)
			http.Error(w, "Failed to parse entry", http.StatusInternalServerError)
			return
		}

		// Set repo field if not present
		entryPayload.Repo = bestMatch.Name

		// Insert into database
		log.Printf("💾 [Auto-Index] Inserting entry for: %s", entryPayload.Repo)
		success, err := saveInstallerpediaEntry(db, entryPayload,false)
		if err != nil {
			log.Printf("❌ [Auto-Index] Error saving entry: %v", err)
			http.Error(w, "Failed to save entry", http.StatusInternalServerError)
			return
		}

		w.Header().Set("Content-Type", "application/json")
		if !success {
			log.Printf("ℹ️ [Auto-Index] Duplicate entry skipped: %s", entryPayload.Repo)
			w.WriteHeader(http.StatusOK)
			fmt.Fprintf(w, `{"success": false, "message": "Duplicate entry skipped", "repo": "%s"}`, entryPayload.Repo)
			return
		}

		// Sync to MeiliSearch in background
		if success {
			go func() {
				if err := SyncSingleRepoToMeili(entryPayload); err != nil {
					log.Printf("[Auto-Index] ⚠️ Background Meili Update Error: %v\n", err)
				} else {
					log.Println("[Auto-Index] ✅ Background Meili Update Successful")
				}
			}()
		}

		log.Printf("✅ [Auto-Index] Successfully indexed: %s (similarity: %.2f%%)", entryPayload.Repo, bestMatch.Similarity)
		w.WriteHeader(http.StatusCreated)
		fmt.Fprintf(w, `{"success": true, "repo": "%s", "similarity": %.2f, "source_type": "%s"}`, entryPayload.Repo, bestMatch.Similarity, bestMatch.SourceType)
	}
}
