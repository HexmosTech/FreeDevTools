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
	"sync"

	"strings"
	"time"

	"regexp"

	"github.com/clipperhouse/jargon"
	"github.com/clipperhouse/jargon/filters/ascii"
	"github.com/clipperhouse/jargon/filters/contractions"
	"github.com/clipperhouse/jargon/filters/stemmer"
	_ "github.com/mattn/go-sqlite3"
)

var updateMu sync.Mutex

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
}

func setupInstallerpediaApiRoutes(mux *http.ServeMux, db *installerpedia.DB) {
	base := GetBasePath() + "/api/installerpedia"

	// Clean routing table
	mux.HandleFunc(base+"/add-entry", handleAddEntry(db))
	mux.HandleFunc(base+"/generate_ipm_repo", handleGenerateRepo())
	mux.HandleFunc(base+"/auto_index", handleAutoIndex(db))

}

// handleAddEntry handles the HTTP concerns (parsing, headers, logging)
func handleAddEntry(db *installerpedia.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		if r.Method != http.MethodPost {
			http.Error(w, "Method Not Allowed", http.StatusMethodNotAllowed)
			return
		}

		var payload EntryPayload
		if err := json.NewDecoder(r.Body).Decode(&payload); err != nil {
			log.Printf("⚠️  [Installerpedia API] Bad JSON: %v", err)
			http.Error(w, "Invalid JSON", http.StatusBadRequest)
			return
		}

		// Delegate logic to the DB helper
		success, err := saveInstallerpediaEntry(db, payload)
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
func saveInstallerpediaEntry(db *installerpedia.DB, p EntryPayload) (bool, error) {
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

	tx, err := db.GetConn().Begin()
	if err != nil {
		return false, err
	}
	defer tx.Rollback()

	res, err := tx.Exec(`
        INSERT OR IGNORE INTO ipm_data (
            slug_hash, repo, repo_slug, repo_type, category_hash, 
            has_installation, is_deleted, prerequisites, 
            installation_methods, post_installation, resources_of_interest, description, 
            stars, keywords, updated_at
        ) VALUES (?, ?, ?, ?, ?, ?, 0, ?, ?, ?, ?, ?, ?, ?, ?)
    `, slugHash, p.Repo, repoSlug, p.RepoType, categoryHash,
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
