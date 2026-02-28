package main
import (
	"encoding/json"
	"fdt-templ/internal/db/installerpedia"
	"fmt"
	"log"
	"net/http"

	"time"
	"os"

	_ "github.com/mattn/go-sqlite3"
)


func getReadmeLastModified(repoName string) (time.Time, error) {
	url := fmt.Sprintf("https://api.github.com/repos/%s/contents/README.md", repoName)
	client := &http.Client{Timeout: 5 * time.Second}
	req, _ := http.NewRequest("GET", url, nil)

	if token := os.Getenv("GITHUB_TOKEN"); token != "" {
		req.Header.Set("Authorization", "Bearer "+token)
	}

	resp, err := client.Do(req)
	if err != nil {
		return time.Time{}, err
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return time.Time{}, fmt.Errorf("GitHub status: %d", resp.StatusCode)
	}

	// GitHub returns RFC1123 in headers (e.g., "Wed, 21 Oct 2015 07:28:00 GMT")
	return time.Parse(time.RFC1123, resp.Header.Get("Last-Modified"))
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

		// 1. Get existing data from local DB
		existingEntry, err := fetchFullEntryFromDB(db, req.Repo)
		if err != nil {
			// If it doesn't exist, we can't update it
			json.NewEncoder(w).Encode(map[string]interface{}{"has_update": false})
			return
		}

		// 2. Compare Timestamps
		ghTime, err := getReadmeLastModified(req.Repo)
		if err != nil {
			log.Printf("⚠️ Update Check: Could not fetch GH metadata for %s: %v", req.Repo, err)
			json.NewEncoder(w).Encode(map[string]interface{}{"has_update": false})
			return
		}

		dbTime, _ := time.Parse(time.RFC3339, existingEntry.UpdatedAt)

		if !ghTime.After(dbTime) {
			// README is not newer than our last DB update
			json.NewEncoder(w).Encode(map[string]interface{}{"has_update": false})
			return
		}

		// 3. README is newer! Trigger Refinement
		log.Printf("🔄 %s: README updated (%v > %v). Triggering refinement...", req.Repo, ghTime, dbTime)
		updatedPayload, err := refineInstallationWithGemini(existingEntry, req.Repo)
		if err != nil {
			http.Error(w, "Refinement failed", http.StatusInternalServerError)
			return
		}

		// 4. Save/Overwrite in DB
		success, err := saveInstallerpediaEntry(db, updatedPayload, true)
		if err != nil || !success {
			http.Error(w, "Failed to persist update", http.StatusInternalServerError)
			return
		}

		// 5. Sync to Meili in background
		go func() {
			if err := SyncSingleRepoToMeili(updatedPayload); err != nil {
				log.Printf("⚠️ Meili Sync Error during update: %v", err)
			}
		}()

		// 6. Return the new JSON so IPM can use it immediately
		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(map[string]interface{}{
			"has_update": true,
			"data":       updatedPayload,
		})
	}
}