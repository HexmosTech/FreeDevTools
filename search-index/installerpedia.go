package main

import (
	"context"
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"path/filepath"
	jargon_stemmer "search-index/jargon-stemmer"
	"time"

	_ "github.com/mattn/go-sqlite3"
)

var dbPool *sql.DB

// Raw DB row
type RawInstallerpediaRow struct {
	ID                  int
	Repo                string
	RepoType            string
	HasInstallation     bool
	Prerequisites       string
	InstallationMethods string
	PostInstallation    string
	ResourcesOfInterest string
	Description         string
	Stars               int
	Note                string
}

func generateInstallerpediaData(ctx context.Context) ([]InstallerpediaData, error) {
	var err error

	dbPool, err = sql.Open("sqlite3", "../frontend/db/all_dbs/ipm-db.db")
	if err != nil {
		log.Fatalf("❌ Failed to open SQLite DB: %v", err)
	}
	defer dbPool.Close()

	if err := dbPool.Ping(); err != nil {
		log.Fatalf("❌ Failed to ping SQLite DB: %v", err)
	}

	// Filter only rows WITH installation methods
	rows, err := dbPool.Query(`
        SELECT 
            id,
            repo,
            repo_type,
            has_installation,
            prerequisites,
            installation_methods,
            post_installation,
            resources_of_interest,
            description,
            stars,
            COALESCE(note, '') AS note
        FROM ipm_data
        WHERE has_installation = 1
    `)
	if err != nil {
		return nil, fmt.Errorf("failed to query installerpedia: %w", err)
	}
	defer rows.Close()

	var guides []InstallerpediaData

	for rows.Next() {
		var raw RawInstallerpediaRow

		err := rows.Scan(
			&raw.ID,
			&raw.Repo,
			&raw.RepoType,
			&raw.HasInstallation,
			&raw.Prerequisites,
			&raw.InstallationMethods,
			&raw.PostInstallation,
			&raw.ResourcesOfInterest,
			&raw.Description,
			&raw.Stars,
			&raw.Note,
		)
		if err != nil {
			return nil, fmt.Errorf("failed to scan installerpedia row: %w", err)
		}

		// Only keep rows that ACTUALLY have installation = true
		if !raw.HasInstallation {
			continue
		}

		guide, err := parseInstallerpediaRow(raw)
		if err != nil {
			return nil, fmt.Errorf("failed to parse installerpedia row id=%d: %w", raw.ID, err)
		}

		guides = append(guides, guide)
	}

	return guides, nil
}

func parseInstallerpediaRow(raw RawInstallerpediaRow) (InstallerpediaData, error) {
	// ---- prerequisites ----
	var prerequisites []Prerequisite
	if raw.Prerequisites != "" {
		if err := json.Unmarshal([]byte(raw.Prerequisites), &prerequisites); err != nil {
			log.Printf("⚠️ Invalid prerequisites JSON for id=%d: %v", raw.ID, err)
			prerequisites = []Prerequisite{}
		}
	}

	// ---- installation_methods ----
	var methods []InstallMethod
	if raw.InstallationMethods != "" {
		if err := json.Unmarshal([]byte(raw.InstallationMethods), &methods); err != nil {
			log.Printf("⚠️ Invalid installation_methods JSON for id=%d: %v", raw.ID, err)
			methods = []InstallMethod{}
		}
	}

	// ---- post_installation ----
	var post []string
	if raw.PostInstallation != "" {
		if err := json.Unmarshal([]byte(raw.PostInstallation), &post); err != nil {
			log.Printf("⚠️ Invalid post_installation JSON for id=%d: %v", raw.ID, err)
			post = []string{}
		}
	}

	// ---- resources_of_interest ----
	var resources []Resource
	if raw.ResourcesOfInterest != "" {
		if err := json.Unmarshal([]byte(raw.ResourcesOfInterest), &resources); err != nil {
			log.Printf("⚠️ Invalid resources_of_interest JSON for id=%d: %v", raw.ID, err)
			resources = []Resource{}
		}
	}

	// ---- final clean return ----
	return InstallerpediaData{
		ID:          fmt.Sprintf("installerpedia-%d", raw.ID),
		Name:        raw.Repo,
		Description: raw.Description,
		Path:        fmt.Sprintf("installerpedia/%s", raw.Repo),
		Category:    "installerpedia",

		RepoType: raw.RepoType,
		Stars:    raw.Stars,

		Prerequisites:       prerequisites,
		InstallationMethods: methods,
		PostInstallation:    post,
		ResourcesOfInterest: resources,
	}, nil
}


// ---------------------------------------------------------
//               RUNNER (unchanged except cleaner logs)
// ---------------------------------------------------------

func RunInstallerPediaOnly(ctx context.Context, start time.Time) {
	fmt.Println("🚀 Starting Installerpedia data generation...")

	data, err := generateInstallerpediaData(ctx)
	if err != nil {
		log.Fatalf("❌ Installerpedia data generation failed: %v", err)
	}

	fmt.Printf("✅ Installerpedia entries with installation: %d items\n", len(data))

	if err := saveToJSON("installerpedia.json", data); err != nil {
		log.Fatalf("❌ Failed to save Installerpedia data: %v", err)
	}

	filePath := filepath.Join("output", "installerpedia.json")
	fmt.Printf("🔍 Running stem processing for %s...\n", filePath)

	if err := jargon_stemmer.ProcessInstallerpediaJSONFile(filePath); err != nil {
		log.Fatalf("❌ Stem processing failed: %v", err)
	}

	elapsed := time.Since(start)
	fmt.Printf("\n🎉 Installerpedia generation completed in %v\n", elapsed)
	fmt.Printf("💾 Saved to %s\n", filePath)
}
