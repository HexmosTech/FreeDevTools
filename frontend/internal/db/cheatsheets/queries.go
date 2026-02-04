package cheatsheets

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
	connStr := dbPath + db_config.CheatsheetsDBConfig
	conn, err := sql.Open("sqlite3", connStr)
	if err != nil {
		return nil, fmt.Errorf("failed to open database: %w", err)
	}

	conn.SetMaxOpenConns(10)
	conn.SetMaxIdleConns(10)
	conn.SetConnMaxLifetime(0)

	if err := conn.Ping(); err != nil {
		return nil, fmt.Errorf("failed to ping database: %w", err)
	}

	return &DB{conn: conn}, nil
}

// Close closes the database connection
func (db *DB) Close() error {
	return db.conn.Close()
}

// GetDB returns a database instance
func GetDB() (*DB, error) {
	dbPath := GetDBPath()
	absPath, err := filepath.Abs(dbPath)
	if err != nil {
		return nil, err
	}
	return NewDB(absPath)
}

// GetTotalCheatsheets returns the total number of cheatsheets
func (db *DB) GetTotalCheatsheets() (int, error) {
	cacheKey := getCacheKey("getTotalCheatsheets", nil)
	if val, ok := globalCache.Get(cacheKey); ok {
		return val.(int), nil
	}

	var total int
	// Attempt to get from overview table first
	err := db.conn.QueryRow("SELECT total_count FROM overview WHERE id = 1").Scan(&total)
	if err != nil {
		// Fallback to count query
		err = db.conn.QueryRow("SELECT COUNT(*) FROM cheatsheet").Scan(&total)
		if err != nil {
			return 0, err
		}
	}

	globalCache.Set(cacheKey, total, CacheTTLTotalCheatsheets)
	return total, nil
}

// GetOverview returns the overview stats
func (db *DB) GetOverview() (*Overview, error) {
	cacheKey := "getOverview"
	if val, ok := globalCache.Get(cacheKey); ok {
		return val.(*Overview), nil
	}

	var overview Overview
	query := `SELECT total_count, category_count, last_updated_at FROM overview WHERE id = 1`
	err := db.conn.QueryRow(query).Scan(&overview.TotalCount, &overview.CategoryCount, &overview.LastUpdatedAt)
	if err != nil {
		if err == sql.ErrNoRows {
			return &Overview{}, nil
		}
		return nil, fmt.Errorf("failed to get overview: %w", err)
	}

	globalCache.Set(cacheKey, &overview, CacheTTLTotalCheatsheets)
	return &overview, nil
}

// GetTotalCategories returns the total number of categories
func (db *DB) GetTotalCategories() (int, error) {
	cacheKey := getCacheKey("getTotalCategories", nil)
	if val, ok := globalCache.Get(cacheKey); ok {
		return val.(int), nil
	}

	var total int
	err := db.conn.QueryRow("SELECT COUNT(*) FROM category").Scan(&total)
	if err != nil {
		return 0, err
	}

	globalCache.Set(cacheKey, total, CacheTTLTotalCategories)
	return total, nil
}

// GetCategoriesWithPreviews returns categories with preview cheatsheets (for index/pagination)
func (db *DB) GetCategoriesWithPreviews(page, itemsPerPage int) ([]CategoryWithPreview, error) {
	cacheKey := getCacheKey("getCategoriesWithPreviews", map[string]interface{}{
		"page": page, "limit": itemsPerPage,
	})
	if val, ok := globalCache.Get(cacheKey); ok {
		return val.([]CategoryWithPreview), nil
	}

	offset := (page - 1) * itemsPerPage
	query := `SELECT id, name, slug, description, keywords, features 
			  FROM category 
			  ORDER BY name 
			  LIMIT ? OFFSET ?`

	rows, err := db.conn.Query(query, itemsPerPage, offset)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var categories []CategoryWithPreview
	for rows.Next() {
		var r rawCategoryRow
		if err := rows.Scan(&r.ID, &r.Name, &r.Slug, &r.Description, &r.Keywords, &r.Features); err != nil {
			continue
		}
		cat := r.toCategory()

		// Get cheatsheet count for this category
		var count int
		err = db.conn.QueryRow("SELECT COUNT(*) FROM cheatsheet WHERE category = ?", cat.Slug).Scan(&count)
		if err != nil {
			count = 0
		}

		// Get preview cheatsheets (limit 3)
		previews := []Cheatsheet{}
		previewRows, err := db.conn.Query("SELECT hash_id, category, slug, title, description FROM cheatsheet WHERE category = ? LIMIT 3", cat.Slug)
		if err == nil {
			for previewRows.Next() {
				var p Cheatsheet
				var title, desc sql.NullString
				if err := previewRows.Scan(&p.HashID, &p.Category, &p.Slug, &title, &desc); err == nil {
					p.Title = title.String
					p.Description = desc.String
					previews = append(previews, p)
				}
			}
			previewRows.Close()
		}

		categories = append(categories, CategoryWithPreview{
			Category:           cat,
			CheatsheetCount:    count,
			PreviewCheatsheets: previews,
			URL:                fmt.Sprintf("/freedevtools/c/%s/", cat.Slug),
		})
	}

	globalCache.Set(cacheKey, categories, CacheTTLAllCategories)
	return categories, nil
}

// GetCategoryBySlug returns a category by its slug
func (db *DB) GetCategoryBySlug(slug string) (*Category, error) {
	cacheKey := getCacheKey("getCategoryBySlug", map[string]interface{}{"slug": slug})
	if val, ok := globalCache.Get(cacheKey); ok {
		return val.(*Category), nil
	}

	query := `SELECT id, name, slug, description, keywords, features FROM category WHERE slug = ?`
	var r rawCategoryRow
	err := db.conn.QueryRow(query, slug).Scan(&r.ID, &r.Name, &r.Slug, &r.Description, &r.Keywords, &r.Features)
	if err != nil {
		if err == sql.ErrNoRows {
			return nil, nil
		}
		return nil, err
	}

	cat := r.toCategory()
	globalCache.Set(cacheKey, &cat, CacheTTLCategoryBySlug)
	return &cat, nil
}

// GetCheatsheetsByCategory returns all cheatsheets for a category (paginated)
func (db *DB) GetCheatsheetsByCategory(categorySlug string, page, itemsPerPage int) ([]Cheatsheet, int, error) {
	cacheKey := getCacheKey("getCheatsheetsByCategory", map[string]interface{}{
		"category": categorySlug, "page": page, "limit": itemsPerPage,
	})
	if val, ok := globalCache.Get(cacheKey); ok {
		res := val.(struct {
			C []Cheatsheet
			T int
		})
		return res.C, res.T, nil
	}

	// Get total count for pagination
	var total int
	err := db.conn.QueryRow("SELECT COUNT(*) FROM cheatsheet WHERE category = ?", categorySlug).Scan(&total)
	if err != nil {
		return nil, 0, err
	}

	offset := (page - 1) * itemsPerPage
	query := `SELECT hash_id, category, slug, title, description, keywords 
			  FROM cheatsheet 
			  WHERE category = ? 
			  ORDER BY slug 
			  LIMIT ? OFFSET ?`

	rows, err := db.conn.Query(query, categorySlug, itemsPerPage, offset)
	if err != nil {
		return nil, 0, err
	}
	defer rows.Close()

	var cheatsheets []Cheatsheet
	for rows.Next() {
		var r rawCheatsheetRow
		if err := rows.Scan(&r.HashID, &r.Category, &r.Slug, &r.Title, &r.Description, &r.Keywords); err != nil {
			continue
		}
		// Content is not needed for list view, keeping it empty to save memory
		r.Content = ""
		cheatsheets = append(cheatsheets, r.toCheatsheet())
	}

	res := struct {
		C []Cheatsheet
		T int
	}{cheatsheets, total}
	globalCache.Set(cacheKey, res, CacheTTLCheatsheets)

	return cheatsheets, total, nil
}

func (db *DB) GetUpdatedAtForCategory(categorySlug string) (string, error) {
	cacheKey := getCacheKey("getUpdatedAtForCategory", map[string]interface{}{"category": categorySlug})
	if val, ok := globalCache.Get(cacheKey); ok {
		return val.(string), nil
	}
	query := `SELECT updated_at FROM category WHERE slug = ?`
	var updatedAt string
	err := db.conn.QueryRow(query, categorySlug).Scan(&updatedAt)
	if err != nil {
		return "", err
	}
	globalCache.Set(cacheKey, updatedAt, CacheTTLCategoryBySlug)
	return updatedAt, nil
}

// GetCheatsheet returns a single cheatsheet by category and slug
func (db *DB) GetCheatsheet(hashID int64) (*Cheatsheet, error) {
	cacheKey := getCacheKey("getCheatsheet", map[string]interface{}{
		"hash_id": hashID,
	})
	if val, ok := globalCache.Get(cacheKey); ok {
		return val.(*Cheatsheet), nil
	}

	query := `SELECT hash_id, category, slug, content, title, description, keywords, see_also 
			  FROM cheatsheet 
			  WHERE hash_id = ?`

	var r rawCheatsheetRow
	err := db.conn.QueryRow(query, hashID).Scan(
		&r.HashID, &r.Category, &r.Slug, &r.Content, &r.Title, &r.Description, &r.Keywords, &r.SeeAlso,
	)
	if err != nil {
		if err == sql.ErrNoRows {
			return nil, nil
		}
		return nil, err
	}

	cs := r.toCheatsheet()
	globalCache.Set(cacheKey, &cs, CacheTTLCheatsheet)
	return &cs, nil
}

func (db *DB) GetUpdatedAtForCheatsheet(hashID int64) (string, error) {
	cacheKey := getCacheKey("getUpdatedAtForCheatsheet", map[string]interface{}{
		"hash_id": hashID,
	})
	if val, ok := globalCache.Get(cacheKey); ok {
		return val.(string), nil
	}

	query := `SELECT updated_at FROM cheatsheet WHERE hash_id = ?`
	var updatedAt string
	err := db.conn.QueryRow(query, hashID).Scan(&updatedAt)
	if err != nil {
		return "", err
	}
	globalCache.Set(cacheKey, updatedAt, CacheTTLCheatsheet)
	return updatedAt, nil
}

// SitemapItem represents a sitemap item with slug and update time
type SitemapItem struct {
	Slug      string
	UpdatedAt string
}

// GetAllCategoriesSitemap returns all category slugs for sitemap
func (db *DB) GetAllCategoriesSitemap() ([]SitemapItem, error) {
	cacheKey := getCacheKey("getAllCategoriesSitemap", nil)
	if val, ok := globalCache.Get(cacheKey); ok {
		return val.([]SitemapItem), nil
	}

	query := `SELECT slug, updated_at FROM category ORDER BY slug`
	rows, err := db.conn.Query(query)
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

	globalCache.Set(cacheKey, items, CacheTTLAllCategories) // Reuse TTL or define new one
	return items, nil
}

// GetCheatsheetsByCategorySitemap returns all cheatsheet slugs for a category for sitemap
func (db *DB) GetCheatsheetsByCategorySitemap(categorySlug string) ([]SitemapItem, error) {
	cacheKey := getCacheKey("getCheatsheetsByCategorySitemap", map[string]interface{}{"category": categorySlug})
	if val, ok := globalCache.Get(cacheKey); ok {
		return val.([]SitemapItem), nil
	}

	query := `SELECT slug, updated_at FROM cheatsheet WHERE category = ? ORDER BY slug`
	rows, err := db.conn.Query(query, categorySlug)
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

	globalCache.Set(cacheKey, items, CacheTTLCheatsheets) // Reuse TTL
	return items, nil
}
