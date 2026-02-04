package tldr

import (
	"database/sql"
	"fmt"
	"path/filepath"

	db_config "fdt-templ/db/config"

	_ "github.com/mattn/go-sqlite3"
)

// DB wraps a database connection
type DB struct {
	conn  *sql.DB
	cache *Cache
}

// NewDB creates a new database connection
func NewDB(dbPath string) (*DB, error) {
	connStr := dbPath + db_config.TldrDBConfig
	// Open database in read-only mode with immutable flag for performance
	conn, err := sql.Open("sqlite3", connStr)
	if err != nil {
		return nil, fmt.Errorf("failed to open database: %w", err)
	}

	// Configure connection pool
	conn.SetMaxOpenConns(20)
	conn.SetMaxIdleConns(20)
	conn.SetConnMaxLifetime(0)

	if err := conn.Ping(); err != nil {
		return nil, fmt.Errorf("failed to ping database: %w", err)
	}

	return &DB{
		conn:  conn,
		cache: NewCache(),
	}, nil
}

// Close closes the database connection
func (db *DB) Close() error {
	return db.conn.Close()
}

// GetDB returns a database instance
func GetDB() (*DB, error) {
	// Standard path for tldr db
	dbPath, err := filepath.Abs("db/all_dbs/tldr-db-v4.db")
	if err != nil {
		return nil, err
	}
	return NewDB(dbPath)
}

// GetAllClusters retrieves all clusters (platforms)
func (db *DB) GetAllClusters() ([]Cluster, error) {
	key := "GetAllClusters"
	if val, ok := db.cache.Get(key); ok {
		return val.([]Cluster), nil
	}

	query := `
		SELECT hash, name, count, preview_commands_json, updated_at 
		FROM cluster 
		ORDER BY name ASC
	`

	rows, err := db.conn.Query(query)
	if err != nil {
		return nil, fmt.Errorf("failed to query clusters: %w", err)
	}
	defer rows.Close()

	var clusters []Cluster
	for rows.Next() {
		var raw RawClusterRow
		if err := rows.Scan(&raw.Hash, &raw.Name, &raw.Count, &raw.PreviewCommandsJSON, &raw.UpdatedAt); err != nil {
			return nil, fmt.Errorf("failed to scan cluster: %w", err)
		}

		previewCommands, err := ParsePreviewCommands(raw.PreviewCommandsJSON)
		if err != nil {
			// Log error but continue
			fmt.Printf("Error parsing preview commands for %s: %v\n", raw.Name, err)
			continue
		}

		// Fix URLs in preview commands if they are missing
		for i := range previewCommands {
			if previewCommands[i].URL == "" {
				previewCommands[i].URL = fmt.Sprintf("/freedevtools/tldr/%s/%s/", raw.Name, previewCommands[i].Name)
			}
		}

		clusters = append(clusters, Cluster{
			Name:            raw.Name,
			Count:           raw.Count,
			PreviewCommands: previewCommands,
			UpdatedAt:       raw.UpdatedAt,
		})
	}

	db.cache.Set(key, clusters, CacheTTLAllPlatformClusters)
	return clusters, nil
}

// GetCluster gets a specific cluster by name (platform)
func (db *DB) GetCluster(hash int64) (*Cluster, error) {
	key := fmt.Sprintf("GetCluster:%d", hash)
	if val, ok := db.cache.Get(key); ok {
		return val.(*Cluster), nil
	}

	query := `SELECT hash, name, count, preview_commands_json FROM cluster WHERE hash = ?`
	row := db.conn.QueryRow(query, hash)

	var raw RawClusterRow
	if err := row.Scan(&raw.Hash, &raw.Name, &raw.Count, &raw.PreviewCommandsJSON); err != nil {
		if err == sql.ErrNoRows {
			return nil, nil
		}
		return nil, fmt.Errorf("failed to get cluster %d: %w", hash, err)
	}

	previewCommands, err := ParsePreviewCommands(raw.PreviewCommandsJSON)
	if err != nil {
		return nil, err
	}
	cluster := &Cluster{
		Name:            raw.Name,
		Count:           raw.Count,
		PreviewCommands: previewCommands,
		UpdatedAt:       raw.UpdatedAt,
	}

	db.cache.Set(key, cluster, CacheTTLPlatformCommands)
	return cluster, nil
}

func (db *DB) GetClusterUpdatedAt(hash int64) (string, error) {
	key := fmt.Sprintf("GetClusterUpdatedAt:%d", hash)
	if val, ok := db.cache.Get(key); ok {
		return val.(string), nil
	}

	query := `SELECT updated_at FROM cluster WHERE hash = ?`
	row := db.conn.QueryRow(query, hash)

	var updatedAt string
	if err := row.Scan(&updatedAt); err != nil {
		if err == sql.ErrNoRows {
			return "", nil
		}
		return "", fmt.Errorf("failed to get cluster updated at: %w", err)
	}

	db.cache.Set(key, updatedAt, CacheTTLPlatformCommands)
	return updatedAt, nil
}

// GetCommandsByClusterPaginated retrieves commands for a platform with pagination
func (db *DB) GetCommandsByClusterPaginated(platform string, limit, offset int) ([]Command, error) {
	key := fmt.Sprintf("GetCommandsByClusterPaginated:%s:%d:%d", platform, limit, offset)
	if val, ok := db.cache.Get(key); ok {
		return val.([]Command), nil
	}

	// Calculate cluster hash for lookup
	clusterHash := CalculateHash(platform)

	query := `
		SELECT url, title, description, metadata 
		FROM pages 
		WHERE cluster_hash = ? 
		ORDER BY url 
		LIMIT ? OFFSET ?
	`

	rows, err := db.conn.Query(query, clusterHash, limit, offset)
	if err != nil {
		return nil, fmt.Errorf("failed to query commands: %w", err)
	}
	defer rows.Close()

	var commands []Command
	for rows.Next() {
		var url, metadataJSON string
		var title, description sql.NullString

		if err := rows.Scan(&url, &title, &description, &metadataJSON); err != nil {
			return nil, fmt.Errorf("failed to scan command: %w", err)
		}

		metadata, err := ParsePageMetadata(metadataJSON)
		if err != nil {
			// Log but continue
			fmt.Printf("Error parsing metadata for %s: %v\n", url, err)
		}

		// Extract command name from URL: /common/tar -> tar
		name := filepath.Base(url)

		// Full URL for frontend
		// url in DB is already full path like /freedevtools/tldr/common/tar/
		frontendURL := url

		commands = append(commands, Command{
			Name:        name,
			URL:         frontendURL,
			Description: description.String,
			Features:    metadata.Features,
		})
	}

	db.cache.Set(key, commands, CacheTTLCommand)
	return commands, nil
}

// GetPage retrieves a single TLDR page
func (db *DB) GetPage(hash int64) (*Page, error) {
	key := fmt.Sprintf("GetPage:%d", hash)
	if val, ok := db.cache.Get(key); ok {
		return val.(*Page), nil
	}
	// Use hash for page lookup
	query := `
		SELECT title, description, html_content, metadata, see_also 
		FROM pages 
		WHERE url_hash = ?
	`
	row := db.conn.QueryRow(query, hash)

	var title, description, htmlContent sql.NullString
	var metadataJSON string
	var seeAlso string

	if err := row.Scan(&title, &description, &htmlContent, &metadataJSON, &seeAlso); err != nil {
		if err == sql.ErrNoRows {
			return nil, nil
		}
		return nil, fmt.Errorf("failed to get page %d: %w", hash, err)
	}

	metadata, err := ParsePageMetadata(metadataJSON)
	if err != nil {
		return nil, err
	}

	page := &Page{
		Title:       title.String,
		Description: description.String,
		HTMLContent: htmlContent.String,
		Metadata:    metadata,
		SeeAlso:     seeAlso,
	}

	db.cache.Set(key, page, CacheTTLPage)
	return page, nil
}

func (db *DB) GetUpdatedAtForCommands(hash int64) (string, error) {
	key := fmt.Sprintf("GetUpdatedAtForCommands:%d", hash)
	if val, ok := db.cache.Get(key); ok {
		return val.(string), nil
	}
	query := `SELECT updated_at FROM pages WHERE url_hash = ?`
	row := db.conn.QueryRow(query, hash)

	var updatedAt string
	if err := row.Scan(&updatedAt); err != nil {
		if err == sql.ErrNoRows {
			return "", nil
		}
		return "", fmt.Errorf("failed to get updated at for commands: %w", err)
	}

	db.cache.Set(key, updatedAt, CacheTTLCommand)
	return updatedAt, nil
}

// GetOverview returns the overview stats
func (db *DB) GetOverview() (*Overview, error) {
	key := "GetOverview"
	if val, ok := db.cache.Get(key); ok {
		return val.(*Overview), nil
	}

	var overview Overview
	query := `SELECT total_count, total_clusters, total_pages, last_updated_at FROM overview WHERE id = 1`
	err := db.conn.QueryRow(query).Scan(
		&overview.TotalCount, &overview.TotalClusters, &overview.TotalPages, &overview.LastUpdatedAt,
	)
	if err != nil {
		if err == sql.ErrNoRows {
			return &Overview{}, nil
		}
		return nil, fmt.Errorf("failed to get overview: %w", err)
	}

	db.cache.Set(key, &overview, CacheTTLTotalOverview)
	return &overview, nil
}

// GetTotalOverview returns total commands count
func (db *DB) GetTotalOverview() (int, error) {
	ov, err := db.GetOverview()
	if err != nil {
		return 0, err
	}
	return ov.TotalCount, nil
}

// GetSitemapTotalCount returns the total number of items for sitemap (Root + Clusters + Pages)
func (db *DB) GetSitemapTotalCount() (int, error) {
	key := "GetSitemapTotalCount"
	if val, ok := db.cache.Get(key); ok {
		return val.(int), nil
	}

	query := `SELECT total_clusters + total_pages + 1 as count FROM overview WHERE id = 1`
	var count int
	err := db.conn.QueryRow(query).Scan(&count)
	if err != nil {
		return 0, fmt.Errorf("failed to get sitemap total count: %w", err)
	}

	db.cache.Set(key, count, CacheTTLTotalOverview)
	return count, nil
}

// GetSitemapURLs retrieves URLs for sitemap mimicking the efficient strategy in Astro worker
func (db *DB) GetSitemapURLs(limit, offset int) ([]string, error) {
	key := fmt.Sprintf("GetSitemapURLs:%d:%d", limit, offset)
	if val, ok := db.cache.Get(key); ok {
		return val.([]string), nil
	}

	var allUrls []string
	currentOffset := offset
	remainingLimit := limit

	// Root URL
	if currentOffset == 0 && remainingLimit > 0 {
		allUrls = append(allUrls, "/freedevtools/tldr/")
		remainingLimit--
	} else if currentOffset > 0 {
		currentOffset-- // Consumed by root
	}

	if remainingLimit <= 0 {
		return allUrls, nil
	}

	// Cluster URLs
	var clusterCount int
	err := db.conn.QueryRow("SELECT total_clusters FROM overview WHERE id = 1").Scan(&clusterCount)
	if err != nil {
		return nil, fmt.Errorf("failed to get cluster count: %w", err)
	}

	if currentOffset < clusterCount {
		fetchCount := remainingLimit
		if fetchCount > clusterCount-currentOffset {
			fetchCount = clusterCount - currentOffset
		}

		query := `SELECT name FROM cluster ORDER BY name LIMIT ? OFFSET ?`
		rows, err := db.conn.Query(query, fetchCount, currentOffset)
		if err != nil {
			return nil, fmt.Errorf("failed to query clusters for sitemap: %w", err)
		}
		defer rows.Close()

		for rows.Next() {
			var name string
			if err := rows.Scan(&name); err != nil {
				return nil, err
			}
			allUrls = append(allUrls, fmt.Sprintf("/freedevtools/tldr/%s/", name))
		}

		remainingLimit = limit - len(allUrls)
		currentOffset = 0
	} else {
		currentOffset -= clusterCount // Skip all clusters
	}

	if remainingLimit <= 0 {
		db.cache.Set(key, allUrls, CacheTTLSitemapURLs)
		return allUrls, nil
	}

	// Page URLs
	query := `SELECT url FROM pages ORDER BY url_hash LIMIT ? OFFSET ?`
	rows, err := db.conn.Query(query, remainingLimit, currentOffset)
	if err != nil {
		return nil, fmt.Errorf("failed to query pages for sitemap: %w", err)
	}
	defer rows.Close()

	for rows.Next() {
		var url string
		if err := rows.Scan(&url); err != nil {
			return nil, err
		}
		allUrls = append(allUrls, url)
	}

	db.cache.Set(key, allUrls, CacheTTLSitemapURLs)
	return allUrls, nil
}
