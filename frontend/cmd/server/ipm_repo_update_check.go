package main

import (
	"encoding/json"
	"errors"
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
    log.Printf("[Installerpedia API] Analyzing updates for %s...", repoName)

    // 1. Fetch Fresh Context
    readmeBody, _ := fetchReadme(repoName)
    release, _ := fetchLatestRelease(repoName)
    
    // Format Release Info for Gemini
    releaseText := "No release assets found."
    if release != nil {
        releaseText = fmt.Sprintf("Tag: %s, Assets: ", release.TagName)
        for _, a := range release.Assets {
            releaseText += fmt.Sprintf("[%s : %s] ", a.Name, a.BrowseUrl)
        }
    }

    existingMethodsJSON, _ := json.MarshalIndent(existing.InstallationMethods, "", "  ")

    // 2. Define Schema with the 'no_change' flag
    schema := map[string]interface{}{
        "type": "object",
        "properties": map[string]interface{}{
            "no_change": map[string]interface{}{"type": "boolean"},
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
                                    "command":  map[string]interface{}{"type": "string"},
                                    "meaning":  map[string]interface{}{"type": "string"},
                                    "optional": map[string]interface{}{"type": "boolean"},
                                },
                                "required": []string{"command"},
                            },
                        },
                    },
                    "required": []string{"title", "instructions"},
                },
            },
        },
    }


    prompt := fmt.Sprintf(`
        You are a cautious DevOps Update Bot for '%s'. 
        Your goal: Merge NEW information from README/Releases into EXISTING_METHODS without destroying what already works.

        ### INPUT DATA:
        - EXISTING_METHODS: %s
        - NEW_README: %s
        - LATEST_RELEASE_INFO: %s

        ### LOGIC STEPS:
        1. SENSITIVITY CHECK: Compare the installation commands in NEW_README against the commands in EXISTING_METHODS.
        - IF the actual command strings, version tags, or architectural paths have not changed: 
            RETURN {"no_change": true} immediately.
        - Ignore changes to README descriptions, emojis, or non-functional text.
        
        2. IF there are changes:
           - KEEP all methods from EXISTING_METHODS that are still valid.
           - UPDATE specific commands (like URLs or version tags) ONLY if the new source material explicitly contradicts the old ones.
           - ADD new methods only if they are unique and not already covered.
           - RETURN the full combined array in "installation_methods".

        ### CRITICAL CONSTRAINTS:
        - IGNORE any installation methods involving "IPM" or "Installerpedia" found in the README.
        - DO NOT delete valid "Source" or "Manual" methods just because they aren't mentioned in the new README. 
        - DO NOT use placeholders like <folder> or [version]. Use the actual repo name: %s.
        - Ensure every command is non-interactive (add -y, etc.).
    `, repoName, string(existingMethodsJSON), readmeBody, releaseText, repoName)

    rawResult, err := QueryGemini(prompt, schema)
    if err != nil {
        return existing, err
    }

    var result struct {
        NoChange bool        `json:"no_change"`
        Methods  interface{} `json:"installation_methods"`
    }
    
    if err := json.Unmarshal([]byte(rawResult), &result); err != nil {
        return existing, err
    }

    // 4. Return existing if no meaningful change was detected
    if result.NoChange || result.Methods == nil {
        log.Printf("[Installerpedia API] ✅ No-op: Gemini confirmed existing data is sufficient for %s.", repoName)
        return existing, errors.New("NO_CHANGE_REQUIRED")
    }

    updated := existing
    updated.InstallationMethods = result.Methods
    updated.UpdatedAt = time.Now().UTC().Format(time.RFC3339)

    log.Printf("[Installerpedia API] ✨ Successfully merged updates for %s.", repoName)
    return updated, nil
}

func handleCheckRepoUpdates(db *installerpedia.DB) http.HandlerFunc {
    force_update := false
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
        if !force_update {
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
        }

        // 3. README is newer! Trigger Refinement
        log.Printf("[Installerpedia API] 🔄 TRIGGER: README is newer. Starting Gemini refinement for %s...", req.Repo)
        
        updatedPayload, err := refineInstallationWithGemini(existingEntry, req.Repo)
        if err != nil {
            if err.Error() == "NO_CHANGE_REQUIRED" {
                log.Printf("[Installerpedia API] ✅ No significant changes found in README for %s.", req.Repo)
                w.Header().Set("Content-Type", "application/json")
                json.NewEncoder(w).Encode(map[string]interface{}{"has_update": false, "no_change": true})
                return
            }
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
    repoSlug := strings.ReplaceAll(strings.ToLower(repoName), "/", "-")
    slugHash := hashStringToInt64(repoSlug)
    updatedAt := time.Now().UTC().Format(time.RFC3339)

    methodsJSON, err := json.Marshal(methods)
    if err != nil {
        return err
    }

    // Capture query and args for logging
    update_ipm_method_query := `
        UPDATE ipm_data 
        SET installation_methods = ?, 
            updated_at = ?
        WHERE slug_hash = ?
    `
    update_ipm_method_query_args := []interface{}{string(methodsJSON), updatedAt, slugHash}

    _, err = db.GetConn().Exec(update_ipm_method_query, update_ipm_method_query_args...)
    
    // Add the log call here
    if err == nil {
        LogIPMQuery(update_ipm_method_query, update_ipm_method_query_args...)
    }

    return err
}