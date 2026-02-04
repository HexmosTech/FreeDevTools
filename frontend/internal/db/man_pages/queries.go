package man_pages

import (
	"database/sql"
	"fmt"
	"log"
	"path/filepath"
	"time"

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
	connStr := dbPath + db_config.ManPagesDBConfig
	conn, err := sql.Open("sqlite3", connStr)
	if err != nil {
		return nil, fmt.Errorf("failed to open database: %w", err)
	}

	// Configure connection pool for optimal performance on 2 vCPUs
	// Sweet spot: 10-20 connections (anything above 20 gives no extra RPS)
	conn.SetMaxOpenConns(20)
	conn.SetMaxIdleConns(20)

	conn.SetConnMaxLifetime(0) // Keep connections alive forever (stmt caching)

	// Set additional PRAGMAs for memory-mapped I/O optimization
	// These help SQLite use OS page cache more efficiently
	conn.Exec("PRAGMA temp_store = MEMORY")    // Use RAM for temp tables
	conn.Exec("PRAGMA mmap_size = 2726297600") // 2.6GB mmap (covers full 2.48GB DB + overhead)
	conn.Exec("PRAGMA cache_size = -1048576")  // 1GB cache (negative = KB)

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

// GetManPageCategories returns all categories from the category table
func (db *DB) GetManPageCategories() ([]Category, error) {
	startTime := time.Now()

	cacheKey := getCacheKey("getManPageCategories", nil)
	if val, ok := globalCache.Get(cacheKey); ok {
		log.Printf("[MAN_PAGES_DB] ManPages getManPageCategories %v", time.Since(startTime))
		return val.([]Category), nil
	}

	query := `SELECT name, count, description, path
	          FROM category 
	          ORDER BY name`

	rows, err := db.conn.Query(query)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var categories []Category
	for rows.Next() {
		var row rawCategoryRow
		err := rows.Scan(&row.Name, &row.Count, &row.Description, &row.Path)
		if err != nil {
			continue
		}
		categories = append(categories, row.toCategory())
	}

	globalCache.Set(cacheKey, categories, CacheTTLCategories)
	totalTime := time.Since(startTime)
	log.Printf("[MAN_PAGES_DB] ManPages getManPageCategories %v", totalTime)
	return categories, nil
}

// GetOverview returns the overview statistics
func (db *DB) GetOverview() (*Overview, error) {
	startTime := time.Now()

	cacheKey := getCacheKey("getOverview", nil)
	if val, ok := globalCache.Get(cacheKey); ok {
		log.Printf("[MAN_PAGES_DB] ManPages getOverview %v", time.Since(startTime))
		return val.(*Overview), nil
	}

	var overview Overview
	err := db.conn.QueryRow("SELECT id, total_count, last_updated_at FROM overview WHERE id = 1").Scan(&overview.ID, &overview.TotalCount, &overview.LastUpdatedAt)
	if err != nil {
		if err == sql.ErrNoRows {
			return nil, nil
		}
		return nil, err
	}

	globalCache.Set(cacheKey, &overview, CacheTTLTotalManPages)
	totalTime := time.Since(startTime)
	log.Printf("[MAN_PAGES_DB] ManPages getOverview %v", totalTime)
	return &overview, nil
}

// GetSubCategoriesByMainCategoryPaginated returns paginated subcategories for a main category
func (db *DB) GetSubCategoriesByMainCategoryPaginated(mainCategory string, limit, offset int) ([]SubCategory, error) {
	startTime := time.Now()

	cacheKey := getCacheKey("getSubCategoriesByMainCategoryPaginated", map[string]interface{}{
		"mainCategory": mainCategory, "limit": limit, "offset": offset,
	})
	if val, ok := globalCache.Get(cacheKey); ok {
		log.Printf("[MAN_PAGES_DB] ManPages getSubCategoriesByMainCategoryPaginated %v", time.Since(startTime))
		return val.([]SubCategory), nil
	}

	// Use hash-based lookup matching the worker query
	categoryHashID := HashURLToKey(mainCategory, "", "")
	query := `SELECT name, description, count
	          FROM sub_category 
	          WHERE main_category_hash = ?
	          ORDER BY name
	          LIMIT ? OFFSET ?`

	rows, err := db.conn.Query(query, categoryHashID, limit, offset)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var subcategories []SubCategory
	for rows.Next() {
		var row rawSubCategoryRow
		err := rows.Scan(&row.Name, &row.Description, &row.Count)
		if err != nil {
			continue
		}
		subcategories = append(subcategories, row.toSubCategory())
	}

	globalCache.Set(cacheKey, subcategories, CacheTTLSubCategories)
	totalTime := time.Since(startTime)
	log.Printf("[MAN_PAGES_DB] ManPages getSubCategoriesByMainCategoryPaginated %v", totalTime)
	return subcategories, nil
}

// GetTotalSubCategoriesManPagesCount returns both subcategory count and total man pages count for a category
func (db *DB) GetTotalSubCategoriesManPagesCount(mainCategory string) (*TotalSubCategoriesManPagesCount, error) {
	startTime := time.Now()

	cacheKey := getCacheKey("getTotalSubCategoriesManPagesCount", map[string]interface{}{
		"mainCategory": mainCategory,
	})
	if val, ok := globalCache.Get(cacheKey); ok {
		log.Printf("[MAN_PAGES_DB] ManPages getTotalSubCategoriesManPagesCount %v", time.Since(startTime))
		return val.(*TotalSubCategoriesManPagesCount), nil
	}

	// Use hash-based lookup matching the worker query
	categoryHashID := HashURLToKey(mainCategory, "", "")
	var result TotalSubCategoriesManPagesCount

	err := db.conn.QueryRow(`
		SELECT count, sub_category_count
		FROM category 
		WHERE hash_id = ?
	`, categoryHashID).Scan(&result.ManPagesCount, &result.SubCategoryCount)
	if err != nil {
		if err == sql.ErrNoRows {
			result.ManPagesCount = 0
			result.SubCategoryCount = 0
		} else {
			return nil, err
		}
	}

	globalCache.Set(cacheKey, &result, CacheTTLCountQueries)
	totalTime := time.Since(startTime)
	log.Printf("[MAN_PAGES_DB] ManPages getTotalSubCategoriesManPagesCount %v", totalTime)
	return &result, nil
}

// GetManPagesBySubcategoryPaginated returns paginated man pages for a subcategory
func (db *DB) GetManPagesBySubcategoryPaginated(mainCategory, subCategory string, limit, offset int) ([]ManPage, error) {
	startTime := time.Now()

	cacheKey := getCacheKey("getManPagesBySubcategoryPaginated", map[string]interface{}{
		"mainCategory": mainCategory, "subCategory": subCategory, "limit": limit, "offset": offset,
	})
	if val, ok := globalCache.Get(cacheKey); ok {
		log.Printf("[MAN_PAGES_DB] ManPages getManPagesBySubcategoryPaginated %v", time.Since(startTime))
		return val.([]ManPage), nil
	}

	// Use hash-based lookup matching the worker query
	categoryHashID := HashURLToKey(mainCategory, subCategory, "")
	query := `SELECT title, slug
	          FROM man_pages 
	          WHERE category_hash = ?
	          LIMIT ? OFFSET ?`

	rows, err := db.conn.Query(query, categoryHashID, limit, offset)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var manPages []ManPage
	for rows.Next() {
		var row rawManPageRow
		err := rows.Scan(&row.Title, &row.Slug)
		if err != nil {
			continue
		}
		// Note: Filename and Content are not in this query - they're fetched separately for individual pages
		// Set empty values for list view
		row.Filename = ""
		row.Content = ""
		manPages = append(manPages, row.toManPage(mainCategory, subCategory))
	}

	globalCache.Set(cacheKey, manPages, CacheTTLManPagesBySubcategory)
	totalTime := time.Since(startTime)
	log.Printf("[MAN_PAGES_DB] ManPages getManPagesBySubcategoryPaginated %v", totalTime)
	return manPages, nil
}

// GetManPagesCountBySubcategory returns the count of man pages in a subcategory
func (db *DB) GetManPagesCountBySubcategory(mainCategory, subCategory string) (int, error) {
	startTime := time.Now()

	cacheKey := getCacheKey("getManPagesCountBySubcategory", map[string]interface{}{
		"mainCategory": mainCategory, "subCategory": subCategory,
	})
	if val, ok := globalCache.Get(cacheKey); ok {
		log.Printf("[MAN_PAGES_DB] ManPages getManPagesCountBySubcategory %v", time.Since(startTime))
		return val.(int), nil
	}

	// Use hash-based lookup matching the worker query
	categoryHashID := HashURLToKey(mainCategory, subCategory, "")
	var count int
	err := db.conn.QueryRow(`
		SELECT count
		FROM sub_category 
		WHERE hash_id = ?
	`, categoryHashID).Scan(&count)
	if err != nil {
		if err == sql.ErrNoRows {
			return 0, nil
		}
		return 0, err
	}

	globalCache.Set(cacheKey, count, CacheTTLCountQueries)
	totalTime := time.Since(startTime)
	log.Printf("[MAN_PAGES_DB] ManPages getManPagesCountBySubcategory %v", totalTime)
	return count, nil
}

// GetManPageBySlug returns a single man page by slug
func (db *DB) GetManPageBySlug(mainCategory, subCategory, slug string) (*ManPage, error) {
	startTime := time.Now()

	cacheKey := getCacheKey("getManPageBySlug", map[string]interface{}{
		"mainCategory": mainCategory, "subCategory": subCategory, "slug": slug,
	})
	if val, ok := globalCache.Get(cacheKey); ok {
		log.Printf("[MAN_PAGES_DB] ManPages getManPageBySlug %v", time.Since(startTime))
		return val.(*ManPage), nil
	}

	// Use hash-based lookup matching the worker query
	hashID := HashURLToKey(mainCategory, subCategory, slug)
	var row rawManPageRow
	err := db.conn.QueryRow(`
		SELECT title, slug, filename, content_html, see_also
		FROM man_pages 
		WHERE hash_id = ?
	`, hashID).Scan(
		&row.Title, &row.Slug, &row.Filename, &row.ContentHTML, &row.SeeAlso,
	)
	if err != nil {
		if err == sql.ErrNoRows {
			return nil, nil
		}
		return nil, err
	}

	manPage := row.toManPage(mainCategory, subCategory)
	globalCache.Set(cacheKey, &manPage, CacheTTLManPageBySlug)
	totalTime := time.Since(startTime)
	log.Printf("[MAN_PAGES_DB] ManPages getManPageBySlug %v", totalTime)
	return &manPage, nil
}

// GetManPageBySlugOnly searches for a man page by slug only (fallback search)
// Returns all matches as a slice of (mainCategory, subCategory, slug) tuples
// Limited to 2 results - we only need to know if there's 0, 1, or multiple matches
func (db *DB) GetManPageBySlugOnly(slug string) ([]struct{ MainCategory, SubCategory, Slug string }, error) {
	startTime := time.Now()

	cacheKey := getCacheKey("getManPageBySlugOnly", map[string]interface{}{
		"slug": slug,
	})
	if val, ok := globalCache.Get(cacheKey); ok {
		log.Printf("[MAN_PAGES_DB] ManPages getManPageBySlugOnly (cached) %v", time.Since(startTime))
		return val.([]struct{ MainCategory, SubCategory, Slug string }), nil
	}

	rows, err := db.conn.Query(`
		SELECT main_category, sub_category, slug
		FROM man_pages 
		WHERE slug = ?
		LIMIT 2
	`, slug)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var results []struct{ MainCategory, SubCategory, Slug string }
	for rows.Next() {
		var mainCategory, subCategory, foundSlug string
		if err := rows.Scan(&mainCategory, &subCategory, &foundSlug); err != nil {
			continue
		}
		results = append(results, struct{ MainCategory, SubCategory, Slug string }{
			MainCategory: mainCategory,
			SubCategory:  subCategory,
			Slug:         foundSlug,
		})
	}

	globalCache.Set(cacheKey, results, CacheTTLManPageBySlug)
	totalTime := time.Since(startTime)
	log.Printf("[MAN_PAGES_DB] ManPages getManPageBySlugOnly %v", totalTime)
	return results, rows.Err()
}

// GetManPageBySlugAndMainCategory searches for a man page by slug and main category
// Returns all matches as a slice of (mainCategory, subCategory, slug) tuples
// Limited to 2 results - we only need to know if there's 0, 1, or multiple matches
func (db *DB) GetManPageBySlugAndMainCategory(slug, mainCategory string) ([]struct{ MainCategory, SubCategory, Slug string }, error) {
	startTime := time.Now()

	cacheKey := getCacheKey("getManPageBySlugAndMainCategory", map[string]interface{}{
		"slug": slug, "mainCategory": mainCategory,
	})
	if val, ok := globalCache.Get(cacheKey); ok {
		log.Printf("[MAN_PAGES_DB] ManPages getManPageBySlugAndMainCategory (cached) %v", time.Since(startTime))
		return val.([]struct{ MainCategory, SubCategory, Slug string }), nil
	}

	rows, err := db.conn.Query(`
		SELECT main_category, sub_category, slug
		FROM man_pages 
		WHERE slug = ? AND main_category = ?
		LIMIT 2
	`, slug, mainCategory)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var results []struct{ MainCategory, SubCategory, Slug string }
	for rows.Next() {
		var foundMainCategory, subCategory, foundSlug string
		if err := rows.Scan(&foundMainCategory, &subCategory, &foundSlug); err != nil {
			continue
		}
		results = append(results, struct{ MainCategory, SubCategory, Slug string }{
			MainCategory: foundMainCategory,
			SubCategory:  subCategory,
			Slug:         foundSlug,
		})
	}

	globalCache.Set(cacheKey, results, CacheTTLManPageBySlug)
	totalTime := time.Since(startTime)
	log.Printf("[MAN_PAGES_DB] ManPages getManPageBySlugAndMainCategory %v", totalTime)
	return results, rows.Err()
}

// GetManPageBySlugLike searches for man pages by slug using LIKE with first 5 characters
// pattern should be either "prefix%" (starts with) or "%prefix%" (contains)
// Returns all matches as a slice of (mainCategory, subCategory, slug) tuples
func (db *DB) GetManPageBySlugLike(slugPrefix, pattern string) ([]struct{ MainCategory, SubCategory, Slug string }, error) {
	// Use first 5 characters for LIKE query
	prefix := slugPrefix
	if len(prefix) > 5 {
		prefix = prefix[:5]
	}

	// Build the LIKE pattern
	likePattern := ""
	if pattern == "starts" {
		likePattern = prefix + "%"
	} else {
		likePattern = "%" + prefix + "%"
	}

	rows, err := db.conn.Query(`
		SELECT main_category, sub_category, slug
		FROM man_pages 
		WHERE slug LIKE ?
		LIMIT 1
	`, likePattern)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var results []struct{ MainCategory, SubCategory, Slug string }
	for rows.Next() {
		var mainCategory, subCategory, foundSlug string
		if err := rows.Scan(&mainCategory, &subCategory, &foundSlug); err != nil {
			continue
		}
		results = append(results, struct{ MainCategory, SubCategory, Slug string }{
			MainCategory: mainCategory,
			SubCategory:  subCategory,
			Slug:         foundSlug,
		})
	}

	return results, rows.Err()
}

// GetAllManPagesPaginated returns all man pages for sitemap generation (paginated)
func (db *DB) GetAllManPagesPaginated(limit, offset int) ([]ManPage, error) {
	startTime := time.Now()

	query := `SELECT main_category, sub_category, slug, updated_at
	          FROM man_pages
	          ORDER BY hash_id
	          LIMIT ? OFFSET ?`

	rows, err := db.conn.Query(query, limit, offset)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var manPages []ManPage
	for rows.Next() {
		var mainCategory, subCategory, slug, updatedAt string
		err := rows.Scan(&mainCategory, &subCategory, &slug, &updatedAt)
		if err != nil {
			continue
		}
		// For sitemap, we only need basic info
		manPages = append(manPages, ManPage{
			MainCategory: mainCategory,
			SubCategory:  subCategory,
			Slug:         slug,
			Content:      ManPageContent{},
			UpdatedAt:    updatedAt,
		})
	}

	totalTime := time.Since(startTime)
	log.Printf("[MAN_PAGES_DB] ManPages getAllManPagesPaginated %v", totalTime)
	return manPages, nil
}

// Sitemap structs
type CategorySitemapItem struct {
	Name             string
	SubCategoryCount int
	UpdatedAt        string
}

type SubCategorySitemapItem struct {
	MainCategory string
	SubCategory  string
	Count        int
	UpdatedAt    string
}

// GetAllCategoriesForSitemap returns all categories with subcategory counts
func (db *DB) GetAllCategoriesForSitemap() ([]CategorySitemapItem, error) {
	cacheKey := getCacheKey("getAllCategoriesForSitemap", nil)
	if val, ok := globalCache.Get(cacheKey); ok {
		return val.([]CategorySitemapItem), nil
	}

	query := `SELECT name, sub_category_count, updated_at FROM category ORDER BY name`
	rows, err := db.conn.Query(query)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var categories []CategorySitemapItem
	for rows.Next() {
		var c CategorySitemapItem
		if err := rows.Scan(&c.Name, &c.SubCategoryCount, &c.UpdatedAt); err != nil {
			continue
		}
		categories = append(categories, c)
	}

	globalCache.Set(cacheKey, categories, CacheTTLCategories)
	return categories, nil
}

// GetAllSubCategoriesForSitemap returns all subcategories with man page counts and main category name
func (db *DB) GetAllSubCategoriesForSitemap() ([]SubCategorySitemapItem, error) {
	cacheKey := getCacheKey("getAllSubCategoriesForSitemap", nil)
	if val, ok := globalCache.Get(cacheKey); ok {
		return val.([]SubCategorySitemapItem), nil
	}

	// Join with category table to get main category name
	// Assuming category.hash_id = sub_category.main_category_hash
	query := `
		SELECT c.name, sc.name, sc.count, sc.updated_at
		FROM sub_category sc
		JOIN category c ON sc.main_category_hash = c.hash_id
		ORDER BY c.name, sc.name
	`
	rows, err := db.conn.Query(query)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var subcategories []SubCategorySitemapItem
	for rows.Next() {
		var sc SubCategorySitemapItem
		if err := rows.Scan(&sc.MainCategory, &sc.SubCategory, &sc.Count, &sc.UpdatedAt); err != nil {
			continue
		}
		subcategories = append(subcategories, sc)
	}

	globalCache.Set(cacheKey, subcategories, CacheTTLCategories)
	return subcategories, nil
}

// GetCategoryUpdatedAt returns the updated_at timestamp for a category
func (db *DB) GetCategoryUpdatedAt(category string) (string, error) {
	categoryHashID := HashURLToKey(category, "", "")
	var updatedAt string
	err := db.conn.QueryRow(`SELECT updated_at FROM category WHERE hash_id = ?`, categoryHashID).Scan(&updatedAt)
	if err != nil {
		if err == sql.ErrNoRows {
			return "", nil
		}
		return "", err
	}
	return updatedAt, nil
}

// SubCategoryExists checks if a subcategory exists in the database
func (db *DB) SubCategoryExists(mainCategory, subCategory string) (bool, error) {
	categoryHashID := HashURLToKey(mainCategory, subCategory, "")
	var exists int
	err := db.conn.QueryRow(`SELECT 1 FROM sub_category WHERE hash_id = ? LIMIT 1`, categoryHashID).Scan(&exists)
	if err != nil {
		if err == sql.ErrNoRows {
			return false, nil
		}
		return false, err
	}
	return true, nil
}

// GetSubCategoryUpdatedAt returns the updated_at timestamp for a subcategory
func (db *DB) GetSubCategoryUpdatedAt(category, subCategory string) (string, error) {
	scHashID := HashURLToKey(category, subCategory, "")
	var updatedAt string
	err := db.conn.QueryRow(`SELECT updated_at FROM sub_category WHERE hash_id = ?`, scHashID).Scan(&updatedAt)
	if err != nil {
		if err == sql.ErrNoRows {
			return "", nil
		}
		return "", err
	}
	return updatedAt, nil
}

// GetManPageUpdatedAt returns the updated_at timestamp for a man page
func (db *DB) GetManPageUpdatedAt(hashID int64) (string, error) {
	var updatedAt string
	err := db.conn.QueryRow(`SELECT updated_at FROM man_pages WHERE hash_id = ?`, hashID).Scan(&updatedAt)
	if err != nil {
		if err == sql.ErrNoRows {
			return "", nil
		}
		return "", err
	}
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
