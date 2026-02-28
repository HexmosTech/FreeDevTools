package mcp

import (
	"database/sql"
)

// GetOverview returns the overview stats
func (db *DB) GetOverview() (*Overview, error) {
	cacheKey := "overview"
	if val, ok := globalCache.Get(cacheKey); ok {
		return val.(*Overview), nil
	}

	var overview Overview
	err := db.conn.QueryRow("SELECT total_count, total_category_count, last_updated_at FROM overview WHERE id = 1").Scan(
		&overview.TotalCount, &overview.TotalCategoryCount, &overview.LastUpdatedAt,
	)
	if err != nil {
		if err == sql.ErrNoRows {
			return &Overview{}, nil
		}
		return nil, err
	}

	globalCache.Set(cacheKey, &overview, CacheTTLOverview)
	return &overview, nil
}

// GetAllMcpCategories returns all categories
func (db *DB) GetAllMcpCategories(page, itemsPerPage int) ([]McpCategory, error) {
	offset := (page - 1) * itemsPerPage

	cacheKey := getCacheKey("getAllMcpCategories", map[string]int{"page": page, "itemsPerPage": itemsPerPage})
	if val, ok := globalCache.Get(cacheKey); ok {
		return val.([]McpCategory), nil
	}

	query := "SELECT slug, name, description, count, updated_at FROM category ORDER BY name LIMIT ? OFFSET ?"
	rows, err := db.conn.Query(query, itemsPerPage, offset)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var categories []McpCategory
	for rows.Next() {
		var cat McpCategory
		if err := rows.Scan(&cat.Slug, &cat.Name, &cat.Description, &cat.Count, &cat.UpdatedAt); err != nil {
			continue
		}
		categories = append(categories, cat)
	}

	globalCache.Set(cacheKey, categories, CacheTTLCategories)

	return categories, nil
}

// GetMcpCategory returns a category by slug
func (db *DB) GetMcpCategory(slug string) (*McpCategory, error) {
	cacheKey := getCacheKey("getMcpCategory", slug)
	if val, ok := globalCache.Get(cacheKey); ok {
		return val.(*McpCategory), nil
	}

	var cat McpCategory
	err := db.conn.QueryRow("SELECT slug, name, description, count FROM category WHERE slug = ?", slug).Scan(
		&cat.Slug, &cat.Name, &cat.Description, &cat.Count,
	)
	if err != nil {
		if err == sql.ErrNoRows {
			return nil, nil
		}
		return nil, err
	}

	globalCache.Set(cacheKey, &cat, CacheTTLCategoryBySlug)
	return &cat, nil
}

// GetMcpPagesByCategory returns repos for a category with pagination
func (db *DB) GetMcpPagesByCategory(categorySlug string, page, itemsPerPage int) ([]McpPage, error) {
	// First convert slug to ID
	categoryID := HashToID(categorySlug)

	cacheKey := getCacheKey("getMcpPagesByCategory", map[string]interface{}{"slug": categorySlug, "page": page, "limit": itemsPerPage})
	if val, ok := globalCache.Get(cacheKey); ok {
		return val.([]McpPage), nil
	}

	offset := (page - 1) * itemsPerPage
	// Select all fields needed for RepoCard
	query := `SELECT hash_id, "key", name, description, owner, stars, image_url, license, npm_downloads
		FROM mcp_pages WHERE category_id = ? LIMIT ? OFFSET ?`

	rows, err := db.conn.Query(query, categoryID, itemsPerPage, offset)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var repos []McpPage
	for rows.Next() {
		var r McpPage
		err := rows.Scan(
			&r.HashID, &r.Key, &r.Name, &r.Description, &r.Owner, &r.Stars, &r.ImageURL, &r.License, &r.NpmDownloads,
		)
		if err != nil {
			continue
		}
		repos = append(repos, r)
	}

	globalCache.Set(cacheKey, repos, CacheTTLReposByCategory)
	return repos, nil
}

// GetMcpPage returns a repo by hashID
func (db *DB) GetMcpPage(hashID int64) (*McpPage, error) {
	cacheKey := getCacheKey("getMcpPage", hashID)
	if val, ok := globalCache.Get(cacheKey); ok {
		return val.(*McpPage), nil
	}

	var r McpPage
	query := `SELECT hash_id, category_id, "key", name, description, owner, stars, forks, 
		language, license, url, image_url, npm_url, npm_downloads, keywords, readme_content, see_also
		FROM mcp_pages WHERE hash_id = ?`

	err := db.conn.QueryRow(query, hashID).Scan(
		&r.HashID, &r.CategoryID, &r.Key, &r.Name, &r.Description, &r.Owner, &r.Stars, &r.Forks,
		&r.Language, &r.License, &r.URL, &r.ImageURL, &r.NpmURL, &r.NpmDownloads, &r.Keywords, &r.ReadmeContent, &r.SeeAlso,
	)
	// r.ReadmeContent is left empty
	if err != nil {
		if err == sql.ErrNoRows {
			return nil, nil
		}
		return nil, err
	}

	globalCache.Set(cacheKey, &r, CacheTTLRepoByKey)
	return &r, nil
}

// GetMcpPageKeysByCategory returns all page keys and updated_at for a category
// Optimized to only fetch what is needed and strictly for sitemaps if really needed
func (db *DB) GetMcpPageKeysByCategory(categorySlug string) ([]SitemapMcpPage, error) {
	return db.GetMcpPageKeysByCategoryPaginated(categorySlug, 10000, 0)
}

// GetMcpPageKeysByCategoryPaginated returns page keys for a category with pagination
// Used for splitting large category sitemaps
func (db *DB) GetMcpPageKeysByCategoryPaginated(categorySlug string, limit, offset int) ([]SitemapMcpPage, error) {
	categoryID := HashToID(categorySlug)
	cacheKey := getCacheKey("getMcpPageKeysByCategoryPaginated", map[string]interface{}{"slug": categorySlug, "limit": limit, "offset": offset})
	if val, ok := globalCache.Get(cacheKey); ok {
		return val.([]SitemapMcpPage), nil
	}

	query := `SELECT "key", updated_at FROM mcp_pages WHERE category_id = ? ORDER BY key LIMIT ? OFFSET ?`

	rows, err := db.conn.Query(query, categoryID, limit, offset)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var pages []SitemapMcpPage
	for rows.Next() {
		var p SitemapMcpPage
		p.CategorySlug = categorySlug
		if err := rows.Scan(&p.Key, &p.UpdatedAt); err != nil {
			continue
		}
		pages = append(pages, p)
	}

	globalCache.Set(cacheKey, pages, CacheTTLSitemap)
	return pages, nil
}

// GetLastUpdatedAt returns the last updated_at timestamp across all mcp pages
func (db *DB) GetLastUpdatedAt() (string, error) {
	cacheKey := "GetLastUpdatedAt"
	if val, ok := globalCache.Get(cacheKey); ok {
		return val.(string), nil
	}

	var updatedAt string
	// Check overview first as it aggregates updates
	err := db.conn.QueryRow("SELECT last_updated_at FROM overview WHERE id = 1").Scan(&updatedAt)
	if err != nil {
		if err == sql.ErrNoRows {
			return "", nil
		}
		return "", err
	}

	globalCache.Set(cacheKey, updatedAt, CacheTTLUpdatedAt)
	return updatedAt, nil
}

// GetCategoryUpdatedAt returns the updated_at timestamp for a category
func (db *DB) GetCategoryUpdatedAt(categorySlug string) (string, error) {
	cacheKey := getCacheKey("GetCategoryUpdatedAt", categorySlug)
	if val, ok := globalCache.Get(cacheKey); ok {
		return val.(string), nil
	}

	var updatedAt string
	query := "SELECT updated_at FROM category WHERE slug = ?"
	err := db.conn.QueryRow(query, categorySlug).Scan(&updatedAt)
	if err != nil {
		if err == sql.ErrNoRows {
			return "", nil
		}
		return "", err
	}

	globalCache.Set(cacheKey, updatedAt, CacheTTLUpdatedAt)
	return updatedAt, nil
}

// GetMcpPageUpdatedAt returns the updated_at timestamp for an mcp page
func (db *DB) GetMcpPageUpdatedAt(hashID int64) (string, error) {
	cacheKey := getCacheKey("GetMcpPageUpdatedAt", hashID)

	if val, ok := globalCache.Get(cacheKey); ok {
		return val.(string), nil
	}

	var updatedAt string
	query := "SELECT updated_at FROM mcp_pages WHERE hash_id = ?"
	err := db.conn.QueryRow(query, hashID).Scan(&updatedAt)
	if err != nil {
		if err == sql.ErrNoRows {
			return "", nil
		}
		return "", err
	}

	globalCache.Set(cacheKey, updatedAt, CacheTTLUpdatedAt)
	return updatedAt, nil
}
