package main

import (
	"crypto/sha256"
	"encoding/binary"
	"encoding/json"
	"fdt-templ/internal/db/installerpedia"
	"fmt"
	"log"
	"net/http"
	"os/exec"
	"path/filepath"
	"sync"

	"strings"
	"time"

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
}

// handleAddEntry handles the HTTP concerns (parsing, headers, logging)
func handleAddEntry(db *installerpedia.DB) http.HandlerFunc {
    return func(w http.ResponseWriter, r *http.Request) {
        SetNoCacheHeaders(w)

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
            fmt.Fprintf(w, `{"success": false, "message": "Duplicate..."}`, payload.Repo)
            return 
        }

        if success {
            go func() {
                if err := TriggerMeiliUpdate(); err != nil {
                    fmt.Printf("⚠️ Background Meili Update Error: %v\n", err)
                } else {
                    fmt.Println("✅ Background Meili Update Successful")
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
        m(p.PostInstallation),  m(p.ResourcesOfInterest), p.Description, p.Stars, m(p.Keywords), updatedAt)

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


func TriggerMeiliUpdate() error {
    if !updateMu.TryLock() {
        return fmt.Errorf("update already in progress, skipping")
    }
    defer updateMu.Unlock()
    searchIndexPath, err := filepath.Abs("../search-index")
    if err != nil {
        return fmt.Errorf("could not resolve search-index path: %w", err)
    }

    // Run commands sequentially without invoking 'sh'
    tasks := [][]string{
        {"gen-installerpedia"},
        {"transfer-server"},
    }

    for _, args := range tasks {
        cmd := exec.Command("make", args...) // Executes 'make' directly
        cmd.Dir = searchIndexPath
        if output, err := cmd.CombinedOutput(); err != nil {
            return fmt.Errorf("make %s failed: %s: %w", args[0], string(output), err)
        }
    }

    return nil
}