package png_icons

import (
	"database/sql"
	"fmt"
	"path/filepath"

	db_config "fdt-templ/db/config"

	_ "github.com/mattn/go-sqlite3"
)

// DB wraps a database connection
type DB struct {
	conn *sql.DB
}

// NewDB creates a new database connection
func NewDB(dbPath string) (*DB, error) {
	// Optimize SQLite connection string for read-only performance
	// Note: _immutable=1 means SQLite ignores WAL completely - DB must be checkpointed before shipping
	// Do NOT include _journal_mode=WAL in DSN - it doesn't work correctly for read-only/immutable mode
	connStr := dbPath + db_config.PngIconsDBConfig
	conn, err := sql.Open("sqlite3", connStr)
	if err != nil {
		return nil, fmt.Errorf("failed to open database: %w", err)
	}

	// Configure connection pool for optimal performance on 2 vCPUs
	// Sweet spot: 10-20 connections (anything above 20 gives no extra RPS)
	conn.SetMaxOpenConns(25)
	conn.SetMaxIdleConns(25)
	conn.SetConnMaxLifetime(0) // Keep connections alive forever (stmt caching)

	// Test connection
	if err := conn.Ping(); err != nil {
		return nil, fmt.Errorf("failed to ping database: %w", err)
	}

	return &DB{conn: conn}, nil
}

// Close closes the database connection
func (db *DB) Close() error {
	return db.conn.Close()
}

// GetTotalIcons returns the total number of icons
func (db *DB) GetTotalIcons() (int, error) {
	cacheKey := getCacheKey("getTotalIcons", nil)
	if val, ok := globalCache.Get(cacheKey); ok {
		return val.(int), nil
	}

	var total int
	err := db.conn.QueryRow("SELECT total_count FROM overview WHERE id = 1").Scan(&total)
	if err != nil {
		if err == sql.ErrNoRows {
			return 0, nil
		}
		return 0, err
	}

	globalCache.Set(cacheKey, total, CacheTTLTotalIcons)
	return total, nil
}

// GetOverview returns the overview stats
func (db *DB) GetOverview() (*Overview, error) {
	cacheKey := "getOverview"
	if val, ok := globalCache.Get(cacheKey); ok {
		return val.(*Overview), nil
	}

	var overview Overview
	query := `SELECT total_count, last_updated_at FROM overview WHERE id = 1`
	err := db.conn.QueryRow(query).Scan(&overview.TotalCount, &overview.LastUpdatedAt)
	if err != nil {
		if err == sql.ErrNoRows {
			return &Overview{}, nil
		}
		return nil, fmt.Errorf("failed to get overview: %w", err)
	}

	globalCache.Set(cacheKey, &overview, CacheTTLTotalIcons)
	return &overview, nil
}

// GetTotalClusters returns the total number of clusters
func (db *DB) GetTotalClusters() (int, error) {
	cacheKey := getCacheKey("getTotalClusters", nil)
	if val, ok := globalCache.Get(cacheKey); ok {
		return val.(int), nil
	}

	var total int
	err := db.conn.QueryRow("SELECT total_count FROM overview WHERE id = 2").Scan(&total)
	if err != nil {
		if err == sql.ErrNoRows {
			return 0, nil
		}
		return 0, err
	}

	globalCache.Set(cacheKey, total, CacheTTLTotalClusters)
	return total, nil
}

// GetIconsByCluster returns all icons in a cluster with pagination
func (db *DB) GetIconsByCluster(cluster string, categoryName *string, limit, offset int) ([]IconWithMetadata, error) {
	cacheKey := getCacheKey("getIconsByCluster", map[string]interface{}{
		"cluster": cluster, "categoryName": categoryName, "limit": limit, "offset": offset,
	})
	if val, ok := globalCache.Get(cacheKey); ok {
		return val.([]IconWithMetadata), nil
	}
	hashName := HashClusterToKey(cluster)

	// println(hashName)

	query := `SELECT COALESCE(id, url_hash) as id, cluster, name, base64,
		COALESCE(description, 'Free ' || name || ' icon') as description,
		COALESCE(usecases, '') as usecases,
		COALESCE(synonyms, '[]') as synonyms,
		COALESCE(tags, '[]') as tags,
		COALESCE(industry, '') as industry,
		COALESCE(emotional_cues, '') as emotional_cues,
		enhanced,
		COALESCE(img_alt, ''),
		updated_at
		FROM icon WHERE cluster_hash = ? ORDER BY url_hash LIMIT ? OFFSET ?`

	rows, err := db.conn.Query(query, hashName, limit, offset)
	if err != nil {
		println(err)
		return nil, err
	}
	defer rows.Close()

	var icons []IconWithMetadata
	for rows.Next() {
		var row rawIconRow
		err := rows.Scan(
			&row.ID, &row.Cluster, &row.Name, &row.Base64,
			&row.Description, &row.Usecases, &row.Synonyms, &row.Tags,
			&row.Industry, &row.EmotionalCues, &row.Enhanced, &row.ImgAlt, &row.UpdatedAt,
		)
		if err != nil {
			continue
		}

		icon := IconWithMetadata{
			Icon: row.toIcon(),
		}

		if categoryName != nil {
			icon.Category = categoryName
			author := "Free DevTools"
			icon.Author = &author
			license := "MIT"
			icon.License = &license
			url := fmt.Sprintf("/freedevtools/png_icons/%s/%s/", *categoryName, row.Name)
			icon.URL = &url
		}

		icons = append(icons, icon)
	}

	globalCache.Set(cacheKey, icons, CacheTTLIconsByCluster)
	return icons, nil
}

// GetClustersWithPreviewIcons returns paginated clusters with preview icons
func (db *DB) GetClustersWithPreviewIcons(page, itemsPerPage, previewIconsPerCluster int, transform bool) (interface{}, error) {
	cacheKey := getCacheKey("getClustersWithPreviewIcons", map[string]interface{}{
		"page": page, "itemsPerPage": itemsPerPage, "previewIconsPerCluster": previewIconsPerCluster, "transform": transform,
	})
	if val, ok := globalCache.Get(cacheKey); ok {
		return val, nil
	}

	offset := (page - 1) * itemsPerPage
	query := `SELECT name, count, source_folder, preview_icons_json
		FROM cluster
		ORDER BY hash_name
		LIMIT ? OFFSET ?`

	rows, err := db.conn.Query(query, itemsPerPage, offset)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	if transform {
		var result []ClusterTransformed
		for rows.Next() {
			var row rawClusterPreviewRow
			err := rows.Scan(&row.Name, &row.Count, &row.SourceFolder, &row.PreviewIconsJSON)
			if err != nil {
				continue
			}

			previewIcons := parseJSONArrayToPreviewIcons(row.PreviewIconsJSON)

			transformed := ClusterTransformed{
				ID:           row.SourceFolder,
				Name:         row.Name,
				Description:  "",
				Icon:         fmt.Sprintf("/freedevtools/png_icons/%s/", row.Name),
				IconCount:    row.Count,
				URL:          fmt.Sprintf("/freedevtools/png_icons/%s/", row.Name),
				Keywords:     []string{},
				Features:     []string{},
				PreviewIcons: previewIcons,
			}

			result = append(result, transformed)
		}
		globalCache.Set(cacheKey, result, CacheTTLClustersWithPreview)
		return result, nil
	}

	var result []ClusterWithPreviewIcons
	for rows.Next() {
		var row rawClusterPreviewRow
		err := rows.Scan(&row.Name, &row.Count, &row.SourceFolder, &row.PreviewIconsJSON)
		if err != nil {
			continue
		}

		previewIcons := parseJSONArrayToPreviewIcons(row.PreviewIconsJSON)

		cluster := ClusterWithPreviewIcons{
			ID:               0,
			Name:             row.Name,
			Count:            row.Count,
			SourceFolder:     row.SourceFolder,
			Path:             "",
			Keywords:         []string{},
			Tags:             []string{},
			Title:            "",
			Description:      "",
			PracticalApp:     "",
			AlternativeTerms: []string{},
			About:            "",
			WhyChooseUs:      []string{},
			PreviewIcons:     previewIcons,
		}

		result = append(result, cluster)
	}
	globalCache.Set(cacheKey, result, CacheTTLClustersWithPreview)
	return result, nil
}

// GetClusterBySourceFolder returns a cluster by its source_folder
func (db *DB) GetClusterBySourceFolder(sourceFolder string) (*Cluster, error) {
	cacheKey := getCacheKey("getClusterBySourceFolder", map[string]interface{}{"sourceFolder": sourceFolder})
	if val, ok := globalCache.Get(cacheKey); ok {
		if val == nil {
			return nil, nil
		}
		return val.(*Cluster), nil
	}

	query := `SELECT id, hash_name, name, count, source_folder, path,
		keywords_json, tags_json,
		title, description, practical_application, alternative_terms_json,
		about, why_choose_us_json, updated_at
		FROM cluster WHERE source_folder = ?`

	var row rawClusterRow
	err := db.conn.QueryRow(query, sourceFolder).Scan(
		&row.ID, &row.HashName, &row.Name, &row.Count, &row.SourceFolder, &row.Path,
		&row.KeywordsJSON, &row.TagsJSON,
		&row.Title, &row.Description, &row.PracticalApp, &row.AlternativeTermsJSON,
		&row.About, &row.WhyChooseUsJSON, &row.UpdatedAt,
	)
	if err != nil {
		fmt.Printf("[PNG Icons DB] GetClusterBySourceFolder query failed - sourceFolder: %s, error: %v\n", sourceFolder, err)
		if err == sql.ErrNoRows {
			globalCache.Set(cacheKey, nil, CacheTTLClusterByName)
			return nil, nil
		}
		return nil, err
	}
	fmt.Printf("[PNG Icons DB] GetClusterBySourceFolder found - sourceFolder: %s, id: %d, name: %s\n", sourceFolder, row.ID, row.Name)

	cluster := row.toCluster()
	globalCache.Set(cacheKey, &cluster, CacheTTLClusterByName)
	return &cluster, nil
}

// GetClusterByName returns a cluster by its hash name
func (db *DB) GetClusterByName(hashName int64) (*Cluster, error) {
	cacheKey := getCacheKey("getClusterByName", map[string]interface{}{"hashName": hashName})
	if val, ok := globalCache.Get(cacheKey); ok {
		if val == nil {
			return nil, nil
		}
		return val.(*Cluster), nil
	}

	query := `SELECT id, hash_name, name, count, source_folder, path,
		keywords_json, tags_json,
		title, description, practical_application, alternative_terms_json,
		about, why_choose_us_json, updated_at
		FROM cluster WHERE hash_name = ?`

	var row rawClusterRow
	err := db.conn.QueryRow(query, hashName).Scan(
		&row.ID, &row.HashName, &row.Name, &row.Count, &row.SourceFolder, &row.Path,
		&row.KeywordsJSON, &row.TagsJSON,
		&row.Title, &row.Description, &row.PracticalApp, &row.AlternativeTermsJSON,
		&row.About, &row.WhyChooseUsJSON, &row.UpdatedAt,
	)
	if err != nil {
		if err == sql.ErrNoRows {
			globalCache.Set(cacheKey, nil, CacheTTLClusterByName)
			return nil, nil
		}
		return nil, err
	}

	cluster := row.toCluster()
	globalCache.Set(cacheKey, &cluster, CacheTTLClusterByName)
	return &cluster, nil
}

// GetClusters returns all clusters
func (db *DB) GetClusters() ([]Cluster, error) {
	cacheKey := getCacheKey("getClusters", nil)
	if val, ok := globalCache.Get(cacheKey); ok {
		return val.([]Cluster), nil
	}

	query := `SELECT id, hash_name, name, count, source_folder, path,
		keywords_json, tags_json,
		title, description, practical_application, alternative_terms_json,
		about, why_choose_us_json, updated_at
		FROM cluster ORDER BY name`

	rows, err := db.conn.Query(query)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var clusters []Cluster
	for rows.Next() {
		var row rawClusterRow
		err := rows.Scan(
			&row.ID, &row.HashName, &row.Name, &row.Count, &row.SourceFolder, &row.Path,
			&row.KeywordsJSON, &row.TagsJSON,
			&row.Title, &row.Description, &row.PracticalApp, &row.AlternativeTermsJSON,
			&row.About, &row.WhyChooseUsJSON, &row.UpdatedAt,
		)
		if err != nil {
			continue
		}
		clusters = append(clusters, row.toCluster())
	}

	globalCache.Set(cacheKey, clusters, CacheTTLClusters)
	return clusters, nil
}

// GetIconByCategoryAndName returns an icon by category and name
func (db *DB) GetIconByCategoryAndName(category, iconName string) (*Icon, error) {
	// First get cluster by source_folder (same approach as category handler)
	cluster, err := db.GetClusterBySourceFolder(category)

	// If not found, try by hashed name as fallback
	if err != nil || cluster == nil {
		hashName := HashNameToKey(category)
		cluster, err = db.GetClusterByName(hashName)
	}

	if err != nil || cluster == nil {
		return nil, err
	}

	// Try lookup by URL hash first (faster)
	// The database stores URLs in format: /freedevtools/png_icons/{source_folder}/{icon_name}
	url := fmt.Sprintf("/freedevtools/png_icons/%s/%s", cluster.SourceFolder, iconName)
	urlHash := HashURLToKey(url)

	query := `SELECT id, cluster, name,
		COALESCE(description, '') as description,
		COALESCE(usecases, '') as usecases,
		COALESCE(synonyms, '[]') as synonyms,
		COALESCE(tags, '[]') as tags,
		COALESCE(industry, '') as industry,
		COALESCE(emotional_cues, '') as emotional_cues,
		enhanced,
		COALESCE(img_alt, '') as img_alt,
		COALESCE(see_also, '') as see_also
		FROM icon WHERE url_hash = ?`

	var row rawIconRow
	err = db.conn.QueryRow(query, urlHash).Scan(
		&row.ID, &row.Cluster, &row.Name,
		&row.Description, &row.Usecases, &row.Synonyms, &row.Tags,
		&row.Industry, &row.EmotionalCues, &row.Enhanced, &row.ImgAlt, &row.SeeAlso,
	)

	if err != nil {
		if err == sql.ErrNoRows {
			fmt.Printf("Fallback query executed for PNG: %s/%s\n", cluster.SourceFolder, iconName)
			// Fallback: try direct lookup by cluster and name (more reliable if hash fails)
			query2 := `SELECT id, cluster, name,
				COALESCE(description, '') as description,
				COALESCE(usecases, '') as usecases,
				COALESCE(synonyms, '[]') as synonyms,
				COALESCE(tags, '[]') as tags,
				COALESCE(industry, '') as industry,
				COALESCE(emotional_cues, '') as emotional_cues,
				enhanced,
				COALESCE(img_alt, '') as img_alt,
				COALESCE(see_also, '') as see_also
				FROM icon WHERE cluster = ? AND name = ?`

			err = db.conn.QueryRow(query2, cluster.SourceFolder, iconName).Scan(
				&row.ID, &row.Cluster, &row.Name,
				&row.Description, &row.Usecases, &row.Synonyms, &row.Tags,
				&row.Industry, &row.EmotionalCues, &row.Enhanced, &row.ImgAlt, &row.SeeAlso,
			)
			if err != nil {
				if err == sql.ErrNoRows {
					return nil, nil
				}
				return nil, err
			}
		} else {
			return nil, err
		}
	}

	icon := row.toIcon()
	return &icon, nil
}

func (db *DB) GetClusterUpdatedAt(hashName int64) (string, error) {
	cacheKey := getCacheKey("getClusterUpdatedAt", map[string]interface{}{"hashName": hashName})
	if val, ok := globalCache.Get(cacheKey); ok {
		return val.(string), nil
	}
	query := `SELECT updated_at FROM cluster WHERE hash_name = ?`
	var updatedAt string
	err := db.conn.QueryRow(query, hashName).Scan(&updatedAt)
	if err != nil {
		return "", err
	}
	globalCache.Set(cacheKey, updatedAt, CacheTTLClusterUpdatedAt)
	return updatedAt, nil
}

func (db *DB) GetIconUpdatedAt(sourceFolder string, iconName string) (string, error) {
	url := fmt.Sprintf("/freedevtools/png_icons/%s/%s", sourceFolder, iconName)
	urlHash := HashURLToKey(url)
	cacheKey := getCacheKey("getIconUpdatedAt", map[string]interface{}{"urlHash": urlHash})
	if val, ok := globalCache.Get(cacheKey); ok {
		return val.(string), nil
	}
	query := `SELECT updated_at FROM icon WHERE url_hash = ?`
	var updatedAt string
	err := db.conn.QueryRow(query, urlHash).Scan(&updatedAt)
	if err != nil {
		return "", err
	}
	globalCache.Set(cacheKey, updatedAt, CacheTTLIconUpdatedAt)
	return updatedAt, nil
}

// GetDB returns a database instance using the default path
func GetDB() (*DB, error) {
	dbPath := GetDBPath()
	// Resolve to absolute path
	absPath, err := filepath.Abs(dbPath)
	if err != nil {
		return nil, err
	}
	return NewDB(absPath)
}
