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
	SlugHash int
	Repo     string
	RepoSlug string
	RepoType string

	CategoryHash int
	CategoryName string

	HasInstallation     bool
	IsDeleted           bool    // <- new field
	Prerequisites       string
	InstallationMethods string
	PostInstallation    string
	ResourcesOfInterest string
	Description         string
	Stars               int
	Keywords            string
	Note                string
}

var IPM_DB_FILE = "ipm-db-v6.db"

func generateInstallerpediaData(ctx context.Context) ([]InstallerpediaData, error) {
	var err error

	dbPath := filepath.Join("..","frontend", "db", "all_dbs", IPM_DB_FILE)
	dbPool, err = sql.Open("sqlite3", dbPath)
	if err != nil {
		log.Fatalf("❌ Failed to open SQLite DB: %v", err)
	}
	defer dbPool.Close()

	if err := dbPool.Ping(); err != nil {
		log.Fatalf("❌ Failed to ping SQLite DB: %v", err)
	}

	rows, err := dbPool.Query(`
		SELECT
			d.slug_hash,
			d.repo,
			d.repo_slug,
			d.repo_type,

			d.category_hash,
			c.repo_type AS category_name,   -- 👈 THIS IS THE KEY

			d.has_installation,
			d.is_deleted,
			COALESCE(d.prerequisites, '') AS prerequisites,
			COALESCE(d.installation_methods, '') AS installation_methods,
			COALESCE(d.post_installation, '') AS post_installation,
			COALESCE(d.resources_of_interest, '') AS resources_of_interest,
			COALESCE(d.description, '') AS description,
			COALESCE(d.stars, 0) AS stars,
			COALESCE(d.keywords, '') AS keywords,
			COALESCE(d.note, '') AS note
		FROM ipm_data d
		JOIN ipm_category c
		ON d.category_hash = c.category_hash
		WHERE d.has_installation = 1
		AND d.is_deleted = 0;
	`)
	if err != nil {
		return nil, fmt.Errorf("failed to query installerpedia: %w", err)
	}
	defer rows.Close()

	var guides []InstallerpediaData

	for rows.Next() {
		var raw RawInstallerpediaRow

		err := rows.Scan(
			&raw.SlugHash,
			&raw.Repo,
			&raw.RepoSlug,
			&raw.RepoType,

			&raw.CategoryHash,
			&raw.CategoryName,

			&raw.HasInstallation,
			&raw.IsDeleted, 
			&raw.Prerequisites,
			&raw.InstallationMethods,
			&raw.PostInstallation,
			&raw.ResourcesOfInterest,
			&raw.Description,
			&raw.Stars,
			&raw.Keywords,
			&raw.Note,
		)

		if err != nil {
			return nil, fmt.Errorf("failed to scan installerpedia row: %w", err)
		}

		if !raw.HasInstallation {
			continue
		}

		guide, err := parseInstallerpediaRow(raw)
		if err != nil {
			return nil, fmt.Errorf(
				"failed to parse installerpedia row slug_hash=%d: %w",
				raw.SlugHash,
				err,
			)
		}

		guides = append(guides, guide)
	}

	return guides, nil
}

func parseInstallerpediaRow(raw RawInstallerpediaRow) (InstallerpediaData, error) {
	var prerequisites []Prerequisite
	if raw.Prerequisites != "" {
		if err := json.Unmarshal([]byte(raw.Prerequisites), &prerequisites); err != nil {
			log.Printf("⚠️ Invalid prerequisites JSON slug_hash=%d: %v", raw.SlugHash, err)
			prerequisites = []Prerequisite{}
		}
	}

	var methods []InstallMethod
	if raw.InstallationMethods != "" {
		if err := json.Unmarshal([]byte(raw.InstallationMethods), &methods); err != nil {
			log.Printf("⚠️ Invalid installation_methods JSON slug_hash=%d: %v", raw.SlugHash, err)
			methods = []InstallMethod{}
		}
	}

	var post []string
	if raw.PostInstallation != "" {
		if err := json.Unmarshal([]byte(raw.PostInstallation), &post); err != nil {
			log.Printf("⚠️ Invalid post_installation JSON slug_hash=%d: %v", raw.SlugHash, err)
			post = []string{}
		}
	}

	var resources []Resource
	if raw.ResourcesOfInterest != "" {
		if err := json.Unmarshal([]byte(raw.ResourcesOfInterest), &resources); err != nil {
			log.Printf("⚠️ Invalid resources_of_interest JSON slug_hash=%d: %v", raw.SlugHash, err)
			resources = []Resource{}
		}
	}

	return InstallerpediaData{
		ID:          fmt.Sprintf("installerpedia-%d", raw.SlugHash),
		Name:        raw.Repo,
		Description: raw.Description,

		Path: fmt.Sprintf(
			"/freedevtools/installerpedia/%s/%s/",
			raw.CategoryName,
			raw.RepoSlug,
		),

		Category: "installerpedia",

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

type VersionString string

func (v *VersionString) UnmarshalJSON(data []byte) error {
	// number → string
	var num float64
	if err := json.Unmarshal(data, &num); err == nil {
		*v = VersionString(fmt.Sprintf("%g", num))
		return nil
	}

	// string → string
	var str string
	if err := json.Unmarshal(data, &str); err == nil {
		*v = VersionString(str)
		return nil
	}

	// null → empty
	*v = ""
	return nil
}
