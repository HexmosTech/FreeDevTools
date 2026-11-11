package main

import (
	"crypto/subtle"
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"
	"path/filepath"
	"regexp"
	"strings"
	"time"

	"fdt-templ/internal/config"
	"fdt-templ/internal/db/bookmarks"
	"fdt-templ/internal/db/installerpedia"
)

// isIPMRepoTombstoned reports whether the repo was removed (is_deleted = 1).
// Removed rows are kept as tombstones so INSERT OR IGNORE / auto-index never
// recreates them.
func isIPMRepoTombstoned(db *installerpedia.DB, slugHash int64) bool {
	var isDeleted int
	err := db.GetConn().QueryRow(`SELECT is_deleted FROM ipm_data WHERE slug_hash = ?`, slugHash).Scan(&isDeleted)
	return err == nil && isDeleted == 1
}

// deleteInstallerpediaRepo soft-deletes a repo (tombstone) and refreshes the counters.
// Returns repo_type and repo_slug, or sql.ErrNoRows if the repo does not exist.
func deleteInstallerpediaRepo(db *installerpedia.DB, repoName string) (string, string, error) {
	repoSlug := strings.ReplaceAll(strings.ToLower(repoName), "/", "-")
	slugHash := hashStringToInt64(repoSlug)
	updatedAt := time.Now().UTC().Format(time.RFC3339)

	tx, err := db.GetConn().Begin()
	if err != nil {
		return "", "", err
	}
	defer tx.Rollback()

	var repoType, storedSlug string
	var categoryHash int64
	if err := tx.QueryRow(`SELECT repo_type, repo_slug, category_hash FROM ipm_data WHERE slug_hash = ?`, slugHash).Scan(&repoType, &storedSlug, &categoryHash); err != nil {
		return "", "", err
	}

	if _, err := tx.Exec(`UPDATE ipm_data SET is_deleted = 1, updated_at = ? WHERE slug_hash = ?`, updatedAt, slugHash); err != nil {
		return "", "", fmt.Errorf("failed to mark repo deleted: %w", err)
	}

	if _, err := tx.Exec(`UPDATE ipm_category
		SET repo_count = (SELECT COUNT(*) FROM ipm_data WHERE is_deleted = 0 AND category_hash = ?), updated_at = ?
		WHERE category_hash = ?`, categoryHash, updatedAt, categoryHash); err != nil {
		return "", "", fmt.Errorf("failed to update ipm_category: %w", err)
	}

	if _, err := tx.Exec(`UPDATE overview
		SET total_count = (SELECT COUNT(*) FROM ipm_data WHERE is_deleted = 0), last_updated_at = ?
		WHERE id = 1`, updatedAt); err != nil {
		return "", "", fmt.Errorf("failed to update overview: %w", err)
	}

	LogIPMQuery("UPDATE ipm_data SET is_deleted = 1 WHERE slug_hash = ?", slugHash)
	return repoType, storedSlug, tx.Commit()
}

// removeRepoFromMeili deletes the repo's search document.
func removeRepoFromMeili(repoName string) error {
	apiKey := config.GetConfig().MeiliWriteKey
	if apiKey == "" {
		return fmt.Errorf("MEILI_WRITE_KEY not set")
	}
	repoSlug := strings.ReplaceAll(strings.ToLower(repoName), "/", "-")
	docID := fmt.Sprintf("installerpedia-%d", hashStringToInt64(repoSlug))

	req, err := http.NewRequest("DELETE", "https://search.apps.hexmos.com/indexes/freedevtools/documents/"+docID, nil)
	if err != nil {
		return err
	}
	req.Header.Set("Authorization", "Bearer "+apiKey)
	resp, err := (&http.Client{Timeout: 10 * time.Second}).Do(req)
	if err != nil {
		return err
	}
	defer resp.Body.Close()
	if resp.StatusCode >= 300 && resp.StatusCode != http.StatusNotFound {
		return fmt.Errorf("meilisearch delete status %d", resp.StatusCode)
	}
	return nil
}

// handleAdminDeleteRepo: POST {"repo": "owner/name"} (admin only).
func handleAdminDeleteRepo(db *installerpedia.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		if r.Method != http.MethodPost {
			http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
			return
		}
		var payload struct {
			Repo string `json:"repo"`
		}
		if err := json.NewDecoder(r.Body).Decode(&payload); err != nil {
			http.Error(w, "Invalid JSON", http.StatusBadRequest)
			return
		}
		repo := strings.TrimSpace(payload.Repo)
		if repo == "" || len(repo) > 200 {
			http.Error(w, "repo is required (e.g. owner/name)", http.StatusBadRequest)
			return
		}

		repoType, repoSlug, err := deleteInstallerpediaRepo(db, repo)
		if err == sql.ErrNoRows {
			http.Error(w, "repo not found in Installerpedia", http.StatusNotFound)
			return
		}
		if err != nil {
			log.Printf("[Admin] Error deleting IPM repo %q: %v", repo, err)
			http.Error(w, "Internal server error", http.StatusInternalServerError)
			return
		}

		meiliErr := removeRepoFromMeili(repo)
		if meiliErr != nil {
			log.Printf("[Admin] ⚠️ Deleted %q from DB but Meili removal failed: %v", repo, meiliErr)
		}
		// nginx serves static HTML before SSR, so the pre-rendered page must go too.
		staticRemoved, staticErr := removeStaticRepoPage(repoType, repoSlug)
		if staticErr != nil {
			log.Printf("[Admin] ⚠️ Deleted %q from DB but static page removal failed: %v", repo, staticErr)
		}
		log.Printf("[Admin] 🗑️ Installerpedia repo removed: %s (type=%s, static_removed=%v)", repo, repoType, staticRemoved)

		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(map[string]interface{}{
			"success":        true,
			"repo":           repo,
			"repo_type":      repoType,
			"meili_removed":  meiliErr == nil,
			"static_removed": staticRemoved,
		})
	}
}

var safePathPart = regexp.MustCompile(`^[a-z0-9][a-z0-9._-]*$`)

// removeStaticRepoPage deletes static/freedevtools/installerpedia/<type>/<slug>/ if present.
// Returns true if a directory was removed. Only touches that one validated path.
func removeStaticRepoPage(repoType, repoSlug string) (bool, error) {
	if !safePathPart.MatchString(repoType) || !safePathPart.MatchString(repoSlug) || strings.Contains(repoSlug, "..") {
		return false, fmt.Errorf("refusing unsafe path parts type=%q slug=%q", repoType, repoSlug)
	}
	base := filepath.Join("static", "freedevtools", "installerpedia")
	target := filepath.Join(base, repoType, repoSlug)
	if _, err := os.Stat(target); os.IsNotExist(err) {
		return false, nil
	}
	if err := os.RemoveAll(target); err != nil {
		return false, err
	}
	log.Printf("[Admin] Removed static page dir: %s", target)
	return true, nil
}

// adminOrToken allows either an admin cookie session (UI) or the IPM_ADMIN_TOKEN
// header (CLI: make ipm-delete). If IPM_ADMIN_TOKEN is unset, token auth is disabled.
func adminOrToken(fdtPgDB *bookmarks.DB, next http.HandlerFunc) http.HandlerFunc {
	adminOnly := requireAdmin(fdtPgDB, next)
	return func(w http.ResponseWriter, r *http.Request) {
		token := os.Getenv("IPM_ADMIN_TOKEN")
		got := r.Header.Get("X-Admin-Token")
		if token != "" && got != "" && subtle.ConstantTimeCompare([]byte(token), []byte(got)) == 1 {
			next(w, r)
			return
		}
		adminOnly(w, r)
	}
}
