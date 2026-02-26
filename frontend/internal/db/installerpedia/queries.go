package installerpedia

import (
	"database/sql"
	"fmt"
	"path/filepath"

	"fdt-templ/internal/config"

	_ "github.com/mattn/go-sqlite3"
)

// Configuration resolution happens in GetDB() and GetWriteDB() to avoid startup panics

type DB struct {
	conn *sql.DB
}

func (db *DB) Close() error {
	if db == nil || db.conn == nil {
		return nil
	}
	return db.conn.Close()
}

type RawRepoListRow struct {
	ID          int
	Repo        string
	RepoType    string
	Description sql.NullString
	Stars       int
}

func ParseRepoListRow(row RawRepoListRow) RepoData {
	desc := ""
	if row.Description.Valid {
		desc = row.Description.String
	}

	return RepoData{
		ID:          row.ID,
		Repo:        row.Repo,
		RepoType:    row.RepoType,
		Description: desc,
		Stars:       row.Stars,
	}
}

// -------------------------
// DB init
// -------------------------
func GetDB() (*DB, error) {
	if config.DBConfig == nil {
		if err := config.LoadDBToml(); err != nil {
			return nil, fmt.Errorf("failed to load db.toml for Installerpedia DB: %w", err)
		}
	}
	dbPathConfig := config.DBConfig.IpmDB
	if dbPathConfig == "" {
		return nil, fmt.Errorf("IPM DB path is empty in db.toml")
	}
	// IPM_DB_FILE already contains the full path including db/all_dbs/ due to safeJoin
	dbPath := filepath.Join(".", dbPathConfig)

	// Match man_pages read-only + immutable configuration
	connStr := "file:" + dbPath + "?mode=ro&_immutable=1"
	conn, err := sql.Open("sqlite3", connStr)
	if err != nil {
		return nil, err
	}

	conn.SetMaxOpenConns(20)
	conn.SetMaxIdleConns(20)
	conn.SetConnMaxLifetime(0)

	conn.Exec("PRAGMA temp_store = MEMORY")
	conn.Exec("PRAGMA mmap_size = 2726297600") // ~2.6GB
	conn.Exec("PRAGMA cache_size = -1048576")  // 1GB

	if err := conn.Ping(); err != nil {
		return nil, err
	}

	return &DB{conn: conn}, nil
}

func GetWriteDB() (*DB, error) {
	if err := config.LoadDBToml(); err != nil {
		return nil, fmt.Errorf("failed to load db.toml for Installerpedia DB: %w", err)
	}
	dbPathConfig := config.DBConfig.IpmDB
	if dbPathConfig == "" {
		return nil, fmt.Errorf("IPM DB path is empty in db.toml")
	}
	dbPath := filepath.Join(".", dbPathConfig)

	// Remove mode=ro and add WAL for concurrent write/read
	connStr := "file:" + dbPath + "?_journal=WAL&_sync=NORMAL"
	conn, err := sql.Open("sqlite3", connStr)
	if err != nil {
		return nil, err
	}

	// Standard write-safe pool settings
	conn.SetMaxOpenConns(1) // SQLite handles writes best with a single connection
	conn.SetMaxIdleConns(1) // Fix: replaced the undefined method
	if err := conn.Ping(); err != nil {
		return nil, err
	}

	return &DB{conn: conn}, nil
}

// GetConn exported helper to let the API use the internal connection
func (db *DB) GetConn() *sql.DB {
	return db.conn
}

// -------------------------
// Categories
// -------------------------
func (db *DB) GetRepoCategories() ([]RepoCategory, error) {
	// Define the list of allowed categories
	fixedCategories := []string{
		"tool", "library", "cli", "server", "framework",
		"plugin", "mobile", "desktop", "sdk", "sample",
		"api", "container", "graphics",
	}

	// Use the IN clause to filter at the source
	// Note: If this list grows huge, consider a separate table or a join,
	// but for 13 strings, this is perfectly fine.
	query := `
        SELECT repo_type, COUNT(*)
        FROM ipm_data
        WHERE repo_type IN (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        GROUP BY repo_type
        ORDER BY COUNT(*) DESC
    `

	// Convert slice to interface slice for the Query method
	args := make([]any, len(fixedCategories))
	for i, v := range fixedCategories {
		args[i] = v
	}

	rows, err := db.conn.Query(query, args...)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var result []RepoCategory
	for rows.Next() {
		var c RepoCategory
		if err := rows.Scan(&c.Name, &c.Count); err != nil {
			return nil, err
		}
		result = append(result, c)
	}

	return result, nil
}

// -------------------------
// Overview
// -------------------------
func (db *DB) GetOverview() (Overview, error) {
	var o Overview
	query := `SELECT total_count, last_updated_at FROM overview WHERE id = 1`
	err := db.conn.QueryRow(query).Scan(&o.TotalCount, &o.LastUpdatedAt)
	return o, err
}

// -------------------------
// Paginated repos
// -------------------------
func (db *DB) GetReposByTypePaginated(category string, limit, offset int) ([]RepoData, error) {
	categoryHash := HashStringToInt64(category)

	rows, err := db.conn.Query(`
		SELECT
			slug_hash,
			repo,
			repo_type,
			description,
			stars
		FROM ipm_data
		WHERE category_hash = ?
		  AND is_deleted = 0
		ORDER BY stars DESC, slug_hash
		LIMIT ? OFFSET ?
	`, categoryHash, limit, offset)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var repos []RepoData
	for rows.Next() {
		var raw RawRepoListRow
		if err := rows.Scan(
			&raw.ID,
			&raw.Repo,
			&raw.RepoType,
			&raw.Description,
			&raw.Stars,
		); err != nil {
			return nil, err
		}
		repos = append(repos, ParseRepoListRow(raw))
	}

	return repos, nil
}

// -------------------------
// Counts
// -------------------------
func (db *DB) GetReposCountByType(category string) (int, error) {
	categoryHash := HashStringToInt64(category)

	var count int
	err := db.conn.QueryRow(`
		SELECT repo_count
		FROM ipm_category
		WHERE category_hash = ?
	`, categoryHash).Scan(&count)

	return count, err
}

func (db *DB) GetTotalReposCount() (int, error) {
	var count int
	err := db.conn.QueryRow(`SELECT COUNT(*) FROM ipm_data`).Scan(&count)
	return count, err
}

// -------------------------
// Slug lookup
// -------------------------
// GetRepo returns a repo by its hashID
func (db *DB) GetRepo(hashID int64) (*RepoData, error) {

	row := db.conn.QueryRow(`
		SELECT
			slug_hash,
			repo,
			repo_type,
			has_installation,
			is_deleted,
			prerequisites,
			installation_methods,
			post_installation,
			resources_of_interest,
			description,
			stars,
			note,
			keywords,
			see_also
		FROM ipm_data
		WHERE slug_hash = ?
		LIMIT 1
	`, hashID)

	var raw RawRepoRow
	if err := row.Scan(
		&raw.ID,
		&raw.Repo,
		&raw.RepoType,
		&raw.HasInstallation,
		&raw.IsDeleted,
		&raw.Prerequisites,
		&raw.InstallationMethods,
		&raw.PostInstallation,
		&raw.ResourcesOfInterest,
		&raw.Description,
		&raw.Stars,
		&raw.Note,
		&raw.Keywords,
		&raw.SeeAlso,
	); err != nil {
		if err == sql.ErrNoRows {
			return nil, nil
		}
		return nil, err
	}

	parsed := ParseRepoRow(raw)
	return &parsed, nil
}

// -------------------------
// Row parsing
// -------------------------
func ParseRepoRow(row RawRepoRow) RepoData {
	var prereqs []Prerequisite
	var methods []InstallMethod
	var post []string
	var resources []Resource
	var keywords []Keywords

	parseJSON(row.Prerequisites, &prereqs)
	parseJSON(row.InstallationMethods, &methods)
	parseJSON(row.PostInstallation, &post)
	parseJSON(row.ResourcesOfInterest, &resources)
	parseJSON(row.Keywords, &keywords)

	desc := ""
	if row.Description.Valid {
		desc = row.Description.String
	}

	return RepoData{
		ID:                  row.ID,
		Repo:                row.Repo,
		RepoType:            row.RepoType,
		HasInstallation:     row.HasInstallation,
		Prerequisites:       prereqs,
		InstallationMethods: methods,
		PostInstallation:    post,
		ResourcesOfInterest: resources,
		Description:         desc,
		Stars:               row.Stars,
		Note:                row.Note,
		Keywords:            keywords,
		SeeAlso:             row.SeeAlso,
		IsDeleted:           row.IsDeleted,
	}
}

// SitemapItem represents a sitemap item with slug and update time
type SitemapItem struct {
	Slug      string
	UpdatedAt string
}

// GetReposByCategoryForSitemap returns all repos for a category with updated_at for sitemap
func (db *DB) GetReposByCategoryForSitemap(category string) ([]SitemapItem, error) {
	categoryHash := HashStringToInt64(category)
	rows, err := db.conn.Query(`
		SELECT repo_slug, updated_at
		FROM ipm_data
		WHERE category_hash = ?
		  AND is_deleted = 0
		ORDER BY repo_slug
	`, categoryHash)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var items []SitemapItem
	for rows.Next() {
		var item SitemapItem
		if err := rows.Scan(&item.Slug, &item.UpdatedAt); err != nil {
			continue
		}
		items = append(items, item)
	}
	return items, nil
}

// GetRepoCategoriesForSitemap returns categories with updated_at for sitemap
func (db *DB) GetRepoCategoriesForSitemap() ([]SitemapItem, error) {
	rows, err := db.conn.Query(`
		SELECT repo_type, updated_at
		FROM ipm_category
		ORDER BY repo_type
	`)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var result []SitemapItem
	for rows.Next() {
		var item SitemapItem
		if err := rows.Scan(&item.Slug, &item.UpdatedAt); err != nil {
			continue
		}
		result = append(result, item)
	}
	return result, nil
}

// -------------------------
// ETag / Caching Support
// -------------------------

// GetLastUpdatedAt returns the global last updated timestamp
func (db *DB) GetLastUpdatedAt() (string, error) {
	var updatedAt string
	query := `SELECT last_updated_at FROM overview WHERE id = 1`
	err := db.conn.QueryRow(query).Scan(&updatedAt)
	if err != nil {
		if err == sql.ErrNoRows {
			return "", nil
		}
		return "", err
	}
	return updatedAt, nil
}

// GetCategoryUpdatedAt returns the updated_at timestamp for a category
// It tries to find it in ipm_category first (used for sitemaps), otherwise falls back to global
func (db *DB) GetCategoryUpdatedAt(category string) (string, error) {
	categoryHash := HashStringToInt64(category)
	var updatedAt string

	// Try getting from ipm_category which has updated_at
	query := `SELECT updated_at FROM ipm_category WHERE category_hash = ?`
	err := db.conn.QueryRow(query, categoryHash).Scan(&updatedAt)
	if err != nil {
		if err == sql.ErrNoRows {
			// If not found (unlikely for valid category), fallback to global
			return db.GetLastUpdatedAt()
		}
		return "", err
	}
	return updatedAt, nil
}

// GetRepoUpdatedAt returns the updated_at timestamp for a specific repo
func (db *DB) GetRepoUpdatedAt(hashID int64) (string, error) {

	// Although ipm_data doesn't explicitly show updated_at in the struct scan earlier,
	// the Sitemap query uses 'updated_at' from ipm_data, so it must exist.
	query := `SELECT updated_at FROM ipm_data WHERE slug_hash = ?`
	var updatedAt string
	err := db.conn.QueryRow(query, hashID).Scan(&updatedAt)
	if err != nil {
		if err == sql.ErrNoRows {
			return "", nil
		}
		return "", err
	}
	return updatedAt, nil
}
