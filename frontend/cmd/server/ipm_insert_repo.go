package main

import (
	"bytes"
	"crypto/sha256"
	"encoding/binary"
	"encoding/json"
	"fdt-templ/internal/config"
	"fdt-templ/internal/db/installerpedia"
	"fmt"
	"log"
	"net/http"

	"strings"
	"time"

	"regexp"

	"github.com/clipperhouse/jargon"
	"github.com/clipperhouse/jargon/filters/ascii"
	"github.com/clipperhouse/jargon/filters/contractions"
	"github.com/clipperhouse/jargon/filters/stemmer"
	_ "github.com/mattn/go-sqlite3"
)


type EntryPayload struct {
	Repo                string      `json:"repo"`
	RepoType            string      `json:"repo_type"`
	HasInstallation     bool        `json:"has_installation"`
	Keywords            []string    `json:"keywords"`
	Prerequisites       interface{} `json:"prerequisites"`
	InstallationMethods interface{} `json:"installation_methods"`
	PostInstallation    interface{} `json:"post_installation"`
	ResourcesOfInterest interface{} `json:"resources_of_interest"`
	Description         string      `json:"description"`
	Stars               int         `json:"stars"`
	UpdatedAt           string      `json:"updated_at"` // <--- Add this
}

type InstallMethod struct {
	Title        string        `json:"title"`
	Instructions []Instruction `json:"instructions"`
}

type Instruction struct {
	Command string `json:"command"`
	Meaning string `json:"meaning"`
}

func setupInstallerpediaApiRoutes(mux *http.ServeMux, db *installerpedia.DB) {
	base := GetBasePath() + "/api/installerpedia"

	// Clean routing table
	mux.HandleFunc(base+"/add-entry", handleAddEntry(db))
	mux.HandleFunc(base+"/generate_ipm_repo", handleGenerateRepo())
	mux.HandleFunc(base+"/generate_ipm_repo_method",handleGenerateRepoMethod())
	mux.HandleFunc(base+"/update-entry",handleUpdateRepoMethods(db))
	mux.HandleFunc(base+"/auto_index", handleAutoIndex(db))
	mux.HandleFunc(base+"/featured", handleGetFeatured())
	mux.HandleFunc(base+"/check_ipm_repo", handleCheckRepoExists(db))
	mux.HandleFunc(base+"/check_ipm_repo_updates", handleCheckRepoUpdates(db))

}


func handleGetFeatured() http.HandlerFunc {
    return func(w http.ResponseWriter, r *http.Request) {
        // --- Configuration Variables (Change these anytime) ---
        title := "Featured: Git-LRC"
        tagline := "Free, unlimited AI code reviews that run on commit"
        link := "https://www.producthunt.com/products/git-lrc"
        cta := "Upvote and support us on Product Hunt!" 
        // ------------------------------------------------------

        w.Header().Set("Content-Type", "application/json")

        // Constructing the message
        // Added the CTA at the end for maximum visibility
        msg := fmt.Sprintf("%s - %s. %s: %s", title, tagline, cta, link)

        resp := map[string]string{"message": msg}
        
        if err := json.NewEncoder(w).Encode(resp); err != nil {
            http.Error(w, err.Error(), http.StatusInternalServerError)
        }
    }
}
// handleAddEntry handles the HTTP concerns (parsing, headers, logging)
func handleAddEntry(db *installerpedia.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		if r.Method != http.MethodPost {
			http.Error(w, "Method Not Allowed", http.StatusMethodNotAllowed)
			return
		}
		overwrite := r.URL.Query().Get("overwrite") == "true"
		var payload EntryPayload
		if err := json.NewDecoder(r.Body).Decode(&payload); err != nil {
			log.Printf("⚠️  [Installerpedia API] Bad JSON: %v", err)
			http.Error(w, "Invalid JSON", http.StatusBadRequest)
			return
		}

		// Delegate logic to the DB helper
		success, err := saveInstallerpediaEntry(db, payload,overwrite)
		if err != nil {
			log.Printf("❌ [Installerpedia API] Error: %v", err)
			http.Error(w, "Internal Server Error", http.StatusInternalServerError)
			return
		}

		w.Header().Set("Content-Type", "application/json")
		if !success {
			log.Printf("ℹ️ [Installerpedia API] Duplicate entry skipped: %s", payload.Repo) // Add this!
			w.WriteHeader(http.StatusOK)
			fmt.Fprintf(w, `{"success": false, "message": "Duplicate entry skipped"}`)
			return
		}

		if success {
			go func() {
				// Use the payload directly to sync to Meili
				if err := SyncSingleRepoToMeili(payload); err != nil {
					log.Printf("[Installerpedia API] ⚠️ Background Meili Update Error: %v\n", err)
				} else {
					log.Println("[Installerpedia API] ✅ Background Meili Update Successful")
				}
			}()
		}

		log.Printf("✅ [Installerpedia API] Added: %s", payload.Repo)
		w.WriteHeader(http.StatusCreated)
		fmt.Fprintf(w, `{"success": true, "repo": "%s"}`, payload.Repo)
	}
}

// saveInstallerpediaEntry handles the data transformation and DB transaction
func saveInstallerpediaEntry(db *installerpedia.DB, p EntryPayload, overwrite bool) (bool, error) {
	repoSlug := strings.ReplaceAll(strings.ToLower(p.Repo), "/", "-")
	slugHash := hashStringToInt64(repoSlug)
	categoryHash := hashStringToInt64(p.RepoType)
	updatedAt := time.Now().UTC().Format(time.RFC3339) + "Z"

	// JSON Helper
	m := func(v interface{}) string {
		if v == nil {
			return ""
		}
		b, _ := json.Marshal(v)
		if string(b) == "null" {
			return ""
		}
		return string(b)
	}

	// Determine the SQL verb
	verb := "INSERT OR IGNORE"
	if overwrite {
		verb = "INSERT OR REPLACE"
	}

	tx, err := db.GetConn().Begin()
	if err != nil {
		return false, err
	}
	defer tx.Rollback()

	res, err := tx.Exec(fmt.Sprintf(`
		%s INTO ipm_data (
			slug_hash, repo, repo_slug, repo_type, category_hash, 
			has_installation, is_deleted, prerequisites, 
			installation_methods, post_installation, resources_of_interest, description, 
			stars, keywords, updated_at
		) VALUES (?, ?, ?, ?, ?, ?, 0, ?, ?, ?, ?, ?, ?, ?, ?)
	`, verb), slugHash, p.Repo, repoSlug, p.RepoType, categoryHash,
		p.HasInstallation, m(p.Prerequisites), m(p.InstallationMethods),
		m(p.PostInstallation), m(p.ResourcesOfInterest), p.Description, p.Stars, m(p.Keywords), updatedAt)
	if err != nil {
		return false, err
	}

	rowsAffected, _ := res.RowsAffected()
	if rowsAffected == 0 {
		return false, nil // Duplicate
	}

	// 1. Run ipm_category update
	_, err = tx.Exec(`INSERT INTO ipm_category (category_hash, repo_type, repo_count, updated_at)
    SELECT category_hash, repo_type, COUNT(*), ? FROM ipm_data 
    WHERE is_deleted = 0 AND category_hash = ?
    GROUP BY category_hash
    ON CONFLICT(category_hash) DO UPDATE SET repo_count=excluded.repo_count, updated_at=excluded.updated_at`, updatedAt, categoryHash)
	if err != nil {
		return false, fmt.Errorf("failed to update ipm_category: %w", err)
	}

	// 2. Run overview update
	_, err = tx.Exec(`INSERT INTO overview (id, total_count, last_updated_at)
    SELECT 1, COUNT(*), ? FROM ipm_data WHERE is_deleted = 0
    ON CONFLICT(id) DO UPDATE SET total_count=excluded.total_count, last_updated_at=excluded.last_updated_at`, updatedAt)
	if err != nil {
		return false, fmt.Errorf("failed to update overview: %w", err)
	}

	return true, tx.Commit()
}

func hashStringToInt64(s string) int64 {
	h := sha256.Sum256([]byte(s))
	return int64(binary.BigEndian.Uint64(h[:8]))
}

// CleanName handles suffix stripping and whitespace trimming
func CleanName(name string) string {
	name = strings.TrimSpace(name)
	re := regexp.MustCompile(`(?i)\s*\|\s*online\s+free\s+devtools?\s+by\s+hexmos?\s*$`)
	name = re.ReplaceAllString(name, "")
	return strings.TrimSpace(name)
}

// ProcessText applies the jargon stemming logic directly
func ProcessText(text string) string {
	stream := jargon.TokenizeString(text).
		Filter(contractions.Expand).
		Filter(ascii.Fold).
		Filter(stemmer.English)

	var results []string
	for stream.Scan() {
		token := stream.Token()
		if !token.IsSpace() {
			results = append(results, token.String())
		}
	}
	return strings.Join(results, " ")
}

func SyncSingleRepoToMeili(p EntryPayload) error {
	cfg := config.GetConfig()
	apiKey := cfg.MeiliWriteKey
	if apiKey == "" {
		return fmt.Errorf("MEILI_WRITE_KEY not found in environment")
	}

	// 1. Re-calculate slugs and IDs to match DB exactly
	repoSlug := strings.ReplaceAll(strings.ToLower(p.Repo), "/", "-")
	slugHash := hashStringToInt64(repoSlug)
	cleanedName := CleanName(p.Repo)

	// 2. Prepare the Meilisearch document
	meiliDoc := map[string]interface{}{
		"id":                    fmt.Sprintf("installerpedia-%d", slugHash),
		"name":                  cleanedName,
		"altName":               CleanName(ProcessText(cleanedName)),
		"description":           p.Description,
		"altDescription":        ProcessText(p.Description),
		"path":                  fmt.Sprintf("/freedevtools/installerpedia/%s/%s/", p.RepoType, repoSlug),
		"category":              "installerpedia",
		"repo_type":             p.RepoType,
		"stars":                 p.Stars,
		"prerequisites":         p.Prerequisites,
		"installation_methods":  p.InstallationMethods,
		"post_installation":     p.PostInstallation,
		"resources_of_interest": p.ResourcesOfInterest,
	}

	// 3. Prepare Payload
	payload, err := json.Marshal([]interface{}{meiliDoc})
	if err != nil {
		return fmt.Errorf("marshal failed: %w", err)
	}

	url := "https://search.apps.hexmos.com/indexes/freedevtools/documents"

	// 4. POST to production Meili instance
	req, err := http.NewRequest("POST", url, bytes.NewBuffer(payload))
	if err != nil {
		return err
	}

	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", "Bearer "+apiKey)

	var httpClient = &http.Client{
		Timeout: time.Second * 10,
	}
	resp, err := httpClient.Do(req)
	if err != nil {
		return fmt.Errorf("request failed: %w", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode >= 300 {
		// Helpful 403 debug info
		keyHint := "empty"
		if len(apiKey) > 8 {
			keyHint = fmt.Sprintf("%s...%s", apiKey[:4], apiKey[len(apiKey)-4:])
		}
		return fmt.Errorf("[Installerpedia API] meilisearch error: status %d (Key used: %s)", resp.StatusCode, keyHint)
	}

	log.Printf("[Installerpedia API] ✅ Synced '%s' to Meili successfully\n", cleanedName)
	return nil
}



// Updating new installation methods

func handleUpdateRepoMethods(db *installerpedia.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		if r.Method != http.MethodPost {
			http.Error(w, "Method Not Allowed", http.StatusMethodNotAllowed)
			return
		}

		var payload struct {
			Repo       string          `json:"repo"`
			NewMethods []InstallMethod `json:"new_methods"`
		}

		if err := json.NewDecoder(r.Body).Decode(&payload); err != nil {
			http.Error(w, "Invalid JSON", http.StatusBadRequest)
			return
		}

		// 1. Update the Local SQLite DB first (Append logic)
		// We do this first so that the DB contains the latest installation methods
		log.Printf("[Installerpedia API] Updating DB for %s...", payload.Repo)
		err := appendInstallerpediaMethods(db, payload.Repo, payload.NewMethods)
		if err != nil {
			log.Printf("❌ [Installerpedia API] DB Update error: %v", err)
			http.Error(w, "Internal DB error", http.StatusInternalServerError)
			return
		}

		// 2. Fetch the FULL, REFRESHED entry from the DB
		// This ensures we have the full metadata (stars, description, etc.) + the new methods
		updatedEntry, err := fetchFullEntryFromDB(db, payload.Repo)
		if err != nil {
			log.Printf("❌ [Installerpedia API] Post-update fetch failed for %s: %v", payload.Repo, err)
			http.Error(w, "Failed to retrieve updated record", http.StatusInternalServerError)
			return
		}

		// 3. Perform a Full Rewrite to Meilisearch
		// By using SyncSingleRepoToMeili, we send all fields.
		// If Meili had a "ruined" version, this will overwrite it with the correct full data.
		go func() {
			log.Printf("[Installerpedia API] Syncing full record to Meilisearch for %s...", payload.Repo)
			if err := SyncSingleRepoToMeili(updatedEntry); err != nil {
				log.Printf("⚠️ [Installerpedia API] Meili Sync failure: %v", err)
			} else {
				log.Printf("✅ [Installerpedia API] Meili fully restored/updated for %s", payload.Repo)
			}
		}()

		w.WriteHeader(http.StatusOK)
		fmt.Fprintf(w, "Successfully updated and synced full record for %s", payload.Repo)
	}
}
func appendInstallerpediaMethods(db *installerpedia.DB, repoName string, newMethods []InstallMethod) error {
    repoSlug := strings.ReplaceAll(strings.ToLower(repoName), "/", "-")
    slugHash := hashStringToInt64(repoSlug)
    updatedAt := time.Now().UTC().Format(time.RFC3339) + "Z"

    tx, err := db.GetConn().Begin()
    if err != nil {
        return err
    }
    defer tx.Rollback()

    // 1. Extract existing methods
    var existingJson string
    err = tx.QueryRow(`SELECT installation_methods FROM ipm_data WHERE slug_hash = ?`, slugHash).Scan(&existingJson)
    if err != nil {
        return fmt.Errorf("failed to fetch existing methods: %w", err)
    }

    var methods []InstallMethod
    if existingJson != "" && existingJson != "null" {
        if err := json.Unmarshal([]byte(existingJson), &methods); err != nil {
            return fmt.Errorf("failed to unmarshal existing methods: %w", err)
        }
    }

    // 2. Add the new methods into the list
    methods = append(methods, newMethods...)

    // 3. Re-marshal and update back
    updatedJson, err := json.Marshal(methods)
    if err != nil {
        return err
    }

    _, err = tx.Exec(`
        UPDATE ipm_data 
        SET installation_methods = ?, 
            updated_at = ?
        WHERE slug_hash = ?
    `, string(updatedJson), updatedAt, slugHash)

    if err != nil {
        return err
    }

    return tx.Commit()
}


func fetchFullEntryFromDB(db *installerpedia.DB,repoName string) (EntryPayload, error) {
    repoSlug := strings.ReplaceAll(strings.ToLower(repoName), "/", "-")
    slugHash := hashStringToInt64(repoSlug)

    var p EntryPayload
    var prereqJson, methodsJson, postJson, resourceJson, keywordsJson string

    err := db.GetConn().QueryRow(`
        SELECT repo, repo_type, has_installation, description, stars, 
               prerequisites, installation_methods, post_installation, 
               resources_of_interest, keywords, updated_at
        FROM ipm_data WHERE slug_hash = ?
    `, slugHash).Scan(
        &p.Repo, &p.RepoType, &p.HasInstallation, &p.Description, &p.Stars,
        &prereqJson, &methodsJson, &postJson, &resourceJson, &keywordsJson, &p.UpdatedAt, // <--- Scan it here
    )

    if err != nil {
        return p, err
    }

    // Unmarshal JSON fields into the payload structure
    json.Unmarshal([]byte(prereqJson), &p.Prerequisites)
    json.Unmarshal([]byte(methodsJson), &p.InstallationMethods)
    json.Unmarshal([]byte(postJson), &p.PostInstallation)
    json.Unmarshal([]byte(resourceJson), &p.ResourcesOfInterest)
    json.Unmarshal([]byte(keywordsJson), &p.Keywords)

    return p, nil
}


func handleCheckRepoExists(db *installerpedia.DB) http.HandlerFunc {
    return func(w http.ResponseWriter, r *http.Request) {
        repoName := r.URL.Query().Get("repo")
        if repoName == "" {
            http.Error(w, "Missing repo parameter", http.StatusBadRequest)
            return
        }

        w.Header().Set("Content-Type", "application/json")

        // Reuse your existing helper to fetch the data
        entry, err := fetchFullEntryFromDB(db, repoName)
        
        if err != nil {
            // If the error is "no rows", it just doesn't exist
            if strings.Contains(err.Error(), "no rows in result set") {
                json.NewEncoder(w).Encode(map[string]interface{}{
                    "exists": false,
                    "repo":   repoName,
                })
                return
            }
            log.Printf("❌ [Installerpedia API] DB Check Error: %v", err)
            http.Error(w, "Internal Server Error", http.StatusInternalServerError)
            return
        }

        // If we reached here, it exists. Return 'exists: true' + the full data
        resp := map[string]interface{}{
            "exists": true,
            "data":   entry,
        }
        json.NewEncoder(w).Encode(resp)
    }
}
