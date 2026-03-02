package main

import (
	"encoding/json"
	"fdt-templ/internal/config"
	"fdt-templ/internal/db/installerpedia"
	"fmt"
	"log"
	"net/http"
	"strings"
	"time"

	_ "github.com/mattn/go-sqlite3"
)


func getReadmeLastModified(repoName string) (time.Time, error) {
	cfg := config.GetConfig()
	githubToken := cfg.GithubToken
    url := fmt.Sprintf("https://api.github.com/repos/%s/readme", repoName)
    log.Printf("[Installerpedia API] Fetching README metadata for: %s", repoName)
    
    client := &http.Client{Timeout: 5 * time.Second}
    req, _ := http.NewRequest("GET", url, nil)

    if githubToken != "" {
        req.Header.Set("Authorization", "Bearer "+githubToken)
    }

    resp, err := client.Do(req)
    if err != nil {
        log.Printf("[Installerpedia API] ❌ Request failed for %s: %v", repoName, err)
        return time.Time{}, err
    }
    defer resp.Body.Close()

    if resp.StatusCode != http.StatusOK {
        log.Printf("[Installerpedia API] ⚠️ Non-200 status for %s: %d", repoName, resp.StatusCode)
        return time.Time{}, fmt.Errorf("GitHub status: %d", resp.StatusCode)
    }

    lastMod := resp.Header.Get("Last-Modified")
    if lastMod == "" {
        log.Printf("[Installerpedia API] ℹ️ No Last-Modified header for %s. Using current time.", repoName)
        return time.Now(), nil 
    }

    t, err := time.Parse(time.RFC1123, lastMod)
    log.Printf("[Installerpedia API] ✅ README for %s was last modified at: %v", repoName, t)
    return t, err
}


func refineInstallationWithGemini(existing EntryPayload, repoName string) (EntryPayload, error) {
	log.Printf("[Installerpedia API] Refining installation steps for %s...", repoName)

	// 1. Fetch Fresh Context
	readmeBody, _ := fetchReadme(repoName)
	release, _ := fetchLatestRelease(repoName)

	releaseText := "No release assets found."
	if release != nil {
		releaseText = fmt.Sprintf("Tag: %s, Assets: ", release.TagName)
		for _, a := range release.Assets {
			releaseText += fmt.Sprintf("[%s : %s] ", a.Name, a.BrowseUrl)
		}
	}

	// 2. Prepare Existing Methods for Comparison
	existingMethodsJSON, _ := json.MarshalIndent(existing.InstallationMethods, "", "  ")

	// 3. Strict Schema (Outputting ONLY the refined array)
	schema := map[string]interface{}{
		"type": "object",
		"properties": map[string]interface{}{
			"installation_methods": map[string]interface{}{
				"type": "array",
				"items": map[string]interface{}{
					"type": "object",
					"properties": map[string]interface{}{
						"title": map[string]interface{}{"type": "string"},
						"instructions": map[string]interface{}{
							"type": "array",
							"items": map[string]interface{}{
								"type": "object",
								"properties": map[string]interface{}{
									"command": map[string]interface{}{"type": "string"},
								},
								"required": []string{"command"},
							},
						},
					},
					"required": []string{"title", "instructions"},
				},
			},
		},
		"required": []string{"installation_methods"},
	}

	// 4. Enhanced Prompt with Safeguards and Negative Constraints
	prompt := fmt.Sprintf(`
		You are an Expert DevOps Engineer. Update the installation instructions for '%s' by comparing the EXISTING_METHODS against the LATEST_SOURCE_MATERIAL.

		### EXISTING_METHODS (Current Database):
		%s

		### LATEST_SOURCE_MATERIAL:
		- **README CONTENT:** %s
		- **RELEASE INFO:** %s

		### MANDATORY REFINEMENT RULES:
		1. **COMPARE & SYNC:** Identify if the LATEST_SOURCE_MATERIAL contains newer versions, updated URLs, or new methods (Docker, Homebrew, etc.) not present in EXISTING_METHODS.
		2. **RETAIN VALIDITY:** If EXISTING_METHODS are more detailed or contain valid methods not mentioned in the new README, retain them.
		3. **ATOMICITY:** Every method must be a complete, "zero-to-running" sequence.
		4. **STRICT SOURCE REQUIREMENT:** Every 'Source' method MUST begin with 'git clone <url>' and 'cd <folder_name>'. Do not use placeholders like <folder>.
		5. **NON-INTERACTIVE:** Every command MUST be non-interactive (e.g., append -y, --noconfirm, or --non-interactive). Include 'sudo ' where necessary.
		6. **WORST-CASE FALLBACK:** If the README is empty or provides no clear build steps, and the existing methods are also invalid, output ONLY the "Safe Default": git clone followed by cd.

		### NEGATIVE CONSTRAINTS (CRITICAL):
		- **NO PLACEHOLDERS:** Never output generic folder placeholders like <folder>, [repo], or your-repo-name.
		- **NO HALLUCINATION:** Never output commands for local files (./setup.sh, make) unless explicitly found in the latest context.
		- **NO COMMENTARY:** Output ONLY raw JSON. No markdown fences, no backticks.
		- **NO DANGLING COMMANDS:** Never reference a file (like 'python main.py') without a preceding command that fetches or creates it.

		### OUTPUT FORMAT:
		Return ONLY a JSON object containing the "installation_methods" array.
	`, repoName, string(existingMethodsJSON), readmeBody, releaseText)

	// 5. Query Gemini
	rawResult, err := QueryGemini(prompt, schema)
	if err != nil {
		return existing, fmt.Errorf("gemini refinement failed: %w", err)
	}

	// 6. Parse Result and Merge
	var refinedData struct {
		Methods interface{} `json:"installation_methods"`
	}
	if err := json.Unmarshal([]byte(rawResult), &refinedData); err != nil {
		return existing, fmt.Errorf("failed to parse refined JSON: %w", err)
	}

	updated := existing
	updated.InstallationMethods = refinedData.Methods
	updated.UpdatedAt = time.Now().UTC().Format(time.RFC3339)

	log.Printf("[Installerpedia API] Successfully refined %s based on README/Release changes.", repoName)
	return updated, nil
}

func handleCheckRepoUpdates(db *installerpedia.DB) http.HandlerFunc {
    return func(w http.ResponseWriter, r *http.Request) {
        if r.Method != http.MethodPost {
            http.Error(w, "Method Not Allowed", http.StatusMethodNotAllowed)
            return
        }

        var req struct {
            Repo string `json:"repo"`
        }
        if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
            http.Error(w, "Invalid JSON", http.StatusBadRequest)
            return
        }

        log.Printf("[Installerpedia API] 🔍 Checking for updates: %s", req.Repo)

        // 1. Get existing data from local DB
        existingEntry, err := fetchFullEntryFromDB(db, req.Repo)
        if err != nil {
            log.Printf("[Installerpedia API] ℹ️ Repo %s not found in local DB. Skipping update check.", req.Repo)
            json.NewEncoder(w).Encode(map[string]interface{}{"has_update": false})
            return
        }

        // 2. Compare Timestamps
        ghTime, err := getReadmeLastModified(req.Repo)
        if err != nil {
            log.Printf("[Installerpedia API]⚠️ Could not fetch GH metadata for %s: %v", req.Repo, err)
            json.NewEncoder(w).Encode(map[string]interface{}{"has_update": false})
            return
        }

        // Parse local DB time
        dbTime, err := time.Parse(time.RFC3339, existingEntry.UpdatedAt)
        if err != nil {
            log.Printf("[Installerpedia API] ⚠️ Error parsing DB timestamp '%s' for %s: %v", existingEntry.UpdatedAt, req.Repo, err)
            // If we can't parse the DB time, we should probably assume we need an update to be safe
            dbTime = time.Time{} 
        }

        // Detailed Comparison Log
        diff := ghTime.Sub(dbTime)
        log.Printf("[Installerpedia API] 🕒 Timestamp Comparison for %s:", req.Repo)
        log.Printf("      - GitHub README: %v", ghTime.Format(time.RFC1123))
        log.Printf("      - Local DB:      %v", dbTime.Format(time.RFC1123))
        log.Printf("      - Difference:    %v (Positive means GH is newer)", diff)

        if !ghTime.After(dbTime) {
            log.Printf("[Installerpedia API] ✅ %s is up to date. No action needed.", req.Repo)
            json.NewEncoder(w).Encode(map[string]interface{}{"has_update": false})
            return
        }

        // 3. README is newer! Trigger Refinement
        log.Printf("[Installerpedia API] 🔄 TRIGGER: README is newer. Starting Gemini refinement for %s...", req.Repo)
        
        updatedPayload, err := refineInstallationWithGemini(existingEntry, req.Repo)
        if err != nil {
            log.Printf("[Installerpedia API] ❌ Refinement failed for %s: %v", req.Repo, err)
            http.Error(w, "Refinement failed", http.StatusInternalServerError)
            return
        }

		err = updateRepoMethodsOnly(db, req.Repo, updatedPayload.InstallationMethods)
        if err != nil {
            log.Printf("[Installerpedia API] ❌ Failed to update methods for %s: %v", req.Repo, err)
            http.Error(w, "Failed to persist update", http.StatusInternalServerError)
            return
        }
        
        // Refresh the payload from DB to ensure we have the full object for Meili sync
        finalEntry, err := fetchFullEntryFromDB(db, req.Repo)
        if err != nil {
             log.Printf("[Installerpedia API] ⚠️ Refetch failed: %v", err)
             finalEntry = updatedPayload // Fallback
        }
        log.Printf("[Installerpedia API] 💾 Successfully saved updated data for %s to local DB.", req.Repo)

        // 5. Sync to Meili in background
        go func() {
            log.Printf("[Installerpedia API] 🚀 Starting MeiliSearch sync for %s...", req.Repo)
            if err := SyncSingleRepoToMeili(finalEntry); err != nil {
                log.Printf("[Installerpedia API] ⚠️ Meili Sync Error: %v", err)
            }
        }()

        // 6. Return response
        w.Header().Set("Content-Type", "application/json")
        json.NewEncoder(w).Encode(map[string]interface{}{
            "has_update": true,
            "data":       updatedPayload,
        })
    }
}


func updateRepoMethodsOnly(db *installerpedia.DB, repoName string, methods interface{}) error {
    // Generate the slug/hash exactly as your DB schema expects
    repoSlug := strings.ReplaceAll(strings.ToLower(repoName), "/", "-")
    slugHash := hashStringToInt64(repoSlug)
    updatedAt := time.Now().UTC().Format(time.RFC3339)

    methodsJSON, err := json.Marshal(methods)
    if err != nil {
        return err
    }

    _, err = db.GetConn().Exec(`
        UPDATE ipm_data 
        SET installation_methods = ?, 
            updated_at = ?
        WHERE slug_hash = ?
    `, string(methodsJSON), updatedAt, slugHash)

    return err
}