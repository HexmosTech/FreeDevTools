package emojis

import (
	"bytes"
	"crypto/sha256"
	"database/sql"
	"encoding/binary"
	"fmt"
	"log"
	"path/filepath"
	"strings"
	"time"

	db_config "fdt-templ/db/config"
	"fdt-templ/internal/config"

	_ "github.com/mattn/go-sqlite3"
)

// detectMimeType detects MIME type from buffer content (matching Astro's detectMime)
func detectMimeType(buffer []byte) string {
	if len(buffer) == 0 {
		return "application/octet-stream"
	}

	// Check first 16 bytes for content signatures
	checkLen := 16
	if len(buffer) < checkLen {
		checkLen = len(buffer)
	}

	ascii := string(buffer[:checkLen])
	if strings.Contains(ascii, "<svg") {
		return "image/svg+xml"
	}
	if strings.HasPrefix(ascii, "RIFF") {
		return "image/webp"
	}
	if len(buffer) >= 8 && buffer[0] == 0x89 && strings.Contains(ascii, "PNG") {
		return "image/png"
	}
	if strings.Contains(ascii, "JFIF") || strings.Contains(ascii, "Exif") {
		return "image/jpeg"
	}
	return "application/octet-stream"
}

// buildEmojiImagePath builds the file path for an emoji image
// Returns path like /freedevtools/public/emojis/{emoji_slug}/{filename} or
// /freedevtools/public/emojis/{emoji_slug}/apple-emojis/{filename} for apple-vendor
func buildEmojiImagePath(emojiSlug string, imageType string, filename string) string {
	basePath := "/freedevtools/public/emojis"
	if imageType == "apple-vendor" {
		return fmt.Sprintf("%s/%s/apple-emojis/%s", basePath, emojiSlug, filename)
	}
	return fmt.Sprintf("%s/%s/%s", basePath, emojiSlug, filename)
}

// DB wraps a database connection
type DB struct {
	conn *sql.DB
}

// hashStringToInt64 hashes a string using SHA-256 and returns the first 8 bytes
// as a signed big-endian int64. This matches the Node.js implementation that
// uses crypto.createHash('sha256').update(value || ”).digest().readBigInt64BE(0).
func hashStringToInt64(s string) int64 {
	// Handle empty string like Node.js (value || '')
	if s == "" {
		s = ""
	}
	sum := sha256.Sum256([]byte(s))
	// Read as signed big-endian int64 to match Node.js readBigInt64BE(0)
	var result int64
	buf := bytes.NewReader(sum[0:8])
	binary.Read(buf, binary.BigEndian, &result)
	return result
}

// NewDB creates a new database connection
func NewDB(dbPath string) (*DB, error) {
	// Optimize SQLite connection string for read-only performance
	// Note: _immutable=1 means SQLite ignores WAL completely - DB must be checkpointed before shipping
	// Do NOT include _journal_mode=WAL in DSN - it doesn't work correctly for read-only/immutable mode
	connStr := dbPath + db_config.EmojiDBConfig
	conn, err := sql.Open("sqlite3", connStr)
	if err != nil {
		return nil, fmt.Errorf("failed to open database: %w", err)
	}

	// Configure connection pool for optimal performance on 2 vCPUs
	// Increased for better concurrency under load (read-only DB can handle more)
	conn.SetMaxOpenConns(20)
	conn.SetMaxIdleConns(20)
	conn.SetConnMaxLifetime(0) // Keep connections alive forever (stmt caching)

	// Set additional PRAGMAs for memory-mapped I/O optimization
	// These help SQLite use OS page cache more efficiently
	// Set BEFORE Ping() to ensure they take effect (matching man-pages pattern)
	conn.Exec("PRAGMA temp_store = MEMORY")    // Use RAM for temp tables
	conn.Exec("PRAGMA mmap_size = 2684354560") // 2.5GB mmap (covers full 2.3GB DB + overhead)
	conn.Exec("PRAGMA cache_size = -1048576")  // 1GB cache (negative = KB, matching man-pages)

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

// GetEmojiCategories returns all categories from the category table
func (db *DB) GetEmojiCategories() ([]string, error) {
	startTime := time.Now()

	cacheKey := getCacheKey("getEmojiCategories", nil)
	if val, ok := globalCache.Get(cacheKey); ok {
		log.Printf("[EMOJI_DB] Emoji getEmojiCategories %v", time.Since(startTime))
		return val.([]string), nil
	}

	// Use the precomputed category table (matches Astro worker behaviour)
	query := `SELECT category FROM category ORDER BY category`

	rows, err := db.conn.Query(query)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var categories []string
	for rows.Next() {
		var category string
		err := rows.Scan(&category)
		if err != nil {
			continue
		}
		categories = append(categories, category)
	}

	globalCache.Set(cacheKey, categories, CacheTTLCategories)
	totalTime := time.Since(startTime)
	log.Printf("[EMOJI_DB] Emoji getEmojiCategories %v", totalTime)
	return categories, nil
}

// GetTotalEmojis returns the total number of emojis
func (db *DB) GetTotalEmojis() (int, error) {
	startTime := time.Now()

	cacheKey := getCacheKey("getTotalEmojis", nil)
	if val, ok := globalCache.Get(cacheKey); ok {
		log.Printf("[EMOJI_DB] Emoji getTotalEmojis %v", time.Since(startTime))
		return val.(int), nil
	}

	query := "SELECT count FROM overview WHERE name='total_emoji'"
	var total int
	err := db.conn.QueryRow(query).Scan(&total)
	if err != nil {
		return 0, err
	}

	globalCache.Set(cacheKey, total, CacheTTLTotalEmojis)
	totalTime := time.Since(startTime)
	log.Printf("[EMOJI_DB] Emoji getTotalEmojis %v", totalTime)
	return total, nil
}

// GetOverview returns the overview stats
func (db *DB) GetOverview() (*Overview, error) {
	cacheKey := "getOverview"
	if val, ok := globalCache.Get(cacheKey); ok {
		return val.(*Overview), nil
	}

	var overview Overview
	query := `SELECT count, last_updated_at FROM overview WHERE name='total_emoji'`
	err := db.conn.QueryRow(query).Scan(&overview.TotalCount, &overview.LastUpdatedAt)
	if err != nil {
		if err == sql.ErrNoRows {
			return &Overview{}, nil
		}
		return nil, fmt.Errorf("failed to get overview: %w", err)
	}

	globalCache.Set(cacheKey, &overview, CacheTTLTotalEmojis)
	return &overview, nil
}

// GetCategoriesWithPreviewEmojis returns categories with preview emojis (optimized query)
func (db *DB) GetCategoriesWithPreviewEmojis(previewCount int) ([]CategoryWithPreview, error) {
	startTime := time.Now()

	cacheKey := getCacheKey("getCategoriesWithPreviewEmojis", previewCount)
	if val, ok := globalCache.Get(cacheKey); ok {
		log.Printf("[EMOJI_DB] Emoji getCategoriesWithPreviewEmojis %v", time.Since(startTime))
		return val.([]CategoryWithPreview), nil
	}

	query := `SELECT category_hash, category, count, preview_emojis_json
	          FROM category
	          WHERE category != 'Other'
	          ORDER BY category`

	rows, err := db.conn.Query(query)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var categories []CategoryWithPreview
	for rows.Next() {
		var row rawCategoryRow
		err := rows.Scan(&row.CategoryHash, &row.Category, &row.Count, &row.PreviewEmojisJSON)
		if err != nil {
			continue
		}
		categories = append(categories, row.toCategoryWithPreview())
	}

	globalCache.Set(cacheKey, categories, CacheTTLCategoriesWithPreview)
	totalTime := time.Since(startTime)
	log.Printf("[EMOJI_DB] Emoji getCategoriesWithPreviewEmojis %v", totalTime)
	return categories, nil
}

// GetEmojisByCategoryPaginated returns paginated emojis for a category
func (db *DB) GetEmojisByCategoryPaginated(category string, page, itemsPerPage int) ([]EmojiData, int, error) {
	startTime := time.Now()

	cacheKey := getCacheKey("getEmojisByCategoryPaginated", map[string]interface{}{
		"category": category, "page": page, "itemsPerPage": itemsPerPage,
	})
	if val, ok := globalCache.Get(cacheKey); ok {
		log.Printf("[EMOJI_DB] Emoji getEmojisByCategoryPaginated %v", time.Since(startTime))
		result := val.(struct {
			Emojis []EmojiData
			Total  int
		})
		return result.Emojis, result.Total, nil
	}

	offset := (page - 1) * itemsPerPage

	// Match Astro worker: look up by hashed category and ignore rows without slug
	categoryHash := hashStringToInt64(category)

	// Get total count from category table (precomputed) using category_hash for O(1) lookup
	var total int
	err := db.conn.QueryRow(`
		SELECT count
		FROM category
		WHERE category_hash = ?
	`, categoryHash).Scan(&total)
	if err != nil {
		if err == sql.ErrNoRows {
			// Category not found, return empty results
			return []EmojiData{}, 0, nil
		}
		return nil, 0, err
	}

	// Get paginated emojis
	// Optimized: Use CTE to pre-compute sort key, allowing better index usage
	// The covering index idx_emojis_category_hash_slug_title_covering helps with sorting
	query := `WITH sorted_emojis AS (
	          SELECT slug_hash, id, code, unicode, slug, title, category, description,
	                 apple_vendor_description, keywords, also_known_as, version, senses,
	                 shortcodes, discord_vendor_description, category_hash,
	                 CASE WHEN slug LIKE '%-skin-tone%' OR slug LIKE '%skin-tone%' THEN 1 ELSE 0 END as skin_tone_flag,
	                 COALESCE(title, slug) as sort_key
	          FROM emojis
	          WHERE category_hash = ?
	            AND slug IS NOT NULL
	        )
	        SELECT slug_hash, id, code, unicode, slug, title, category, description,
	               apple_vendor_description, keywords, also_known_as, version, senses,
	               shortcodes, discord_vendor_description, category_hash
	        FROM sorted_emojis
	        ORDER BY skin_tone_flag, sort_key COLLATE NOCASE
	        LIMIT ? OFFSET ?`

	emojisQueryStart := time.Now()
	log.Printf("[EMOJI_DB] Executing paginated emojis query (LIMIT %d OFFSET %d)", itemsPerPage, offset)
	rows, err := db.conn.Query(query, categoryHash, itemsPerPage, offset)
	if err != nil {
		return nil, 0, err
	}
	defer rows.Close()

	scanStart := time.Now()
	var emojis []EmojiData
	for rows.Next() {
		var row rawEmojiRow
		err := rows.Scan(
			&row.SlugHash, &row.ID, &row.Code, &row.Unicode, &row.Slug, &row.Title,
			&row.Category, &row.Description, &row.AppleVendorDescription,
			&row.Keywords, &row.AlsoKnownAs, &row.Version, &row.Senses,
			&row.Shortcodes, &row.DiscordVendorDescription, &row.CategoryHash,
		)
		if err != nil {
			continue
		}
		emojis = append(emojis, row.toEmojiData())
	}
	scanTime := time.Since(scanStart)
	emojisQueryTime := time.Since(emojisQueryStart)
	log.Printf("[EMOJI_DB] Paginated emojis query took %v (scan: %v, fetched %d emojis)", emojisQueryTime, scanTime, len(emojis))

	result := struct {
		Emojis []EmojiData
		Total  int
	}{emojis, total}
	globalCache.Set(cacheKey, result, CacheTTLEmojisByCategory)
	totalTime := time.Since(startTime)
	log.Printf("[EMOJI_DB] Emoji getEmojisByCategoryPaginated %v", totalTime)
	return emojis, total, nil
}

// GetEmojiBySlug returns a single emoji by slug
func (db *DB) GetEmojiBySlug(slug string) (*EmojiData, error) {
	startTime := time.Now()

	cacheKey := getCacheKey("getEmojiBySlug", slug)
	if val, ok := globalCache.Get(cacheKey); ok {
		log.Printf("[EMOJI_DB] Emoji getEmojiBySlug %v", time.Since(startTime))
		return val.(*EmojiData), nil
	}

	// Match Astro worker: look up by slug_hash instead of slug text.
	slugHash := hashStringToInt64(slug)
	query := `SELECT slug_hash, id, code, unicode, slug, title, category, description,
	          apple_vendor_description, keywords, also_known_as, version, senses,
	          shortcodes, discord_vendor_description, category_hash, see_also
	          FROM emojis
	          WHERE slug_hash = ?`

	var row rawEmojiRow
	err := db.conn.QueryRow(query, slugHash).Scan(
		&row.SlugHash, &row.ID, &row.Code, &row.Unicode, &row.Slug, &row.Title,
		&row.Category, &row.Description, &row.AppleVendorDescription,
		&row.Keywords, &row.AlsoKnownAs, &row.Version, &row.Senses,
		&row.Shortcodes, &row.DiscordVendorDescription, &row.CategoryHash, &row.SeeAlso,
	)
	if err != nil {
		if err == sql.ErrNoRows {
			return nil, nil
		}
		return nil, err
	}

	emoji := row.toEmojiData()
	globalCache.Set(cacheKey, &emoji, CacheTTLEmojiBySlug)
	totalTime := time.Since(startTime)
	log.Printf("[EMOJI_DB] Emoji getEmojiBySlug %v", totalTime)
	return &emoji, nil
}

// GetEmojiImages returns image variants for an emoji
func (db *DB) GetEmojiImages(slug string) (*EmojiImageVariants, error) {
	startTime := time.Now()

	cacheKey := getCacheKey("getEmojiImages", slug)
	if val, ok := globalCache.Get(cacheKey); ok {
		log.Printf("[EMOJI_DB] Emoji getEmojiImages %v", time.Since(startTime))
		return val.(*EmojiImageVariants), nil
	}

	// Get images for this emoji slug using hash for O(1) lookup
	slugHash := hashStringToInt64(slug)
	query := `SELECT emoji_slug, image_type, filename
	          FROM images
	          WHERE emoji_slug_only_hash = ?`

	rows, err := db.conn.Query(query, slugHash)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	processStart := time.Now()
	imageCount := 0
	variants := &EmojiImageVariants{}
	for rows.Next() {
		imageCount++
		var emojiSlug string
		var imageType string
		var filename string
		err := rows.Scan(&emojiSlug, &imageType, &filename)
		if err != nil {
			continue
		}

		// Build file path instead of base64 data URI
		filePath := buildEmojiImagePath(emojiSlug, imageType, filename)

		// Check filename patterns to determine variant type (matching Astro implementation)
		// This matches the Astro logic which checks filename patterns for all images
		// Order matches Astro: 3d -> color -> flat -> high_contrast
		lowerFilename := strings.ToLower(filename)

		// Use regex-like pattern matching to match Astro's /_3d|3d/i.test(lower) logic
		// Check for variant patterns in filename (order matches Astro: 3d, color, flat, high_contrast)
		if strings.Contains(lowerFilename, "_3d") || strings.Contains(lowerFilename, "3d") {
			if variants.ThreeD == nil {
				variants.ThreeD = &filePath
			}
		} else if strings.Contains(lowerFilename, "_color") || strings.Contains(lowerFilename, "color") {
			if variants.Color == nil {
				variants.Color = &filePath
			}
		} else if strings.Contains(lowerFilename, "_flat") || strings.Contains(lowerFilename, "flat") {
			if variants.Flat == nil {
				variants.Flat = &filePath
			}
		} else if strings.Contains(lowerFilename, "_high_contrast") ||
			strings.Contains(lowerFilename, "high_contrast") ||
			strings.Contains(lowerFilename, "highcontrast") {
			if variants.HighContrast == nil {
				variants.HighContrast = &filePath
			}
		}
	}
	processTime := time.Since(processStart)
	log.Printf("[EMOJI_DB] Processed %d images in %v", imageCount, processTime)

	globalCache.Set(cacheKey, variants, CacheTTLEmojiImages)
	totalTime := time.Since(startTime)
	log.Printf("[EMOJI_DB] Emoji getEmojiImages %v", totalTime)
	return variants, nil
}

// GetSitemapEmojis returns all emojis for sitemap generation (lightweight)
func (db *DB) GetSitemapEmojis() ([]SitemapEmoji, error) {
	startTime := time.Now()

	query := `SELECT slug, category, updated_at FROM emojis ORDER BY category, slug`

	rows, err := db.conn.Query(query)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var emojis []SitemapEmoji
	for rows.Next() {
		var emoji SitemapEmoji
		var category sql.NullString
		err := rows.Scan(&emoji.Slug, &category, &emoji.UpdatedAt)
		if err != nil {
			continue
		}
		if category.Valid {
			emoji.Category = &category.String
		}
		emojis = append(emojis, emoji)
	}

	totalTime := time.Since(startTime)
	log.Printf("[EMOJI_DB] Emoji getSitemapEmojis %v", totalTime)
	return emojis, nil
}

// GetDB returns a database instance using the default path
func GetDB() (*DB, error) {
	if err := config.LoadDBToml(); err != nil {
		return nil, fmt.Errorf("failed to load db.toml for Emoji DB: %w", err)
	}
	dbPath := config.DBConfig.EmojiDB
	if dbPath == "" {
		return nil, fmt.Errorf("Emoji DB path is empty in db.toml")
	}

	absPath, err := filepath.Abs(dbPath)
	if err != nil {
		return nil, fmt.Errorf("failed to resolve absolute path for Emoji DB: %w", err)
	}

	db, err := NewDB(absPath)
	if err != nil {
		return nil, fmt.Errorf("failed to open Emoji DB: %w", err)
	}
	return db, nil
}

// GetEmojiCategoryUpdatedAt returns the updated_at timestamp for a category
func (db *DB) GetEmojiCategoryUpdatedAt(category string) (string, error) {
	categoryHash := hashStringToInt64(category)
	var updatedAt string
	err := db.conn.QueryRow(`SELECT updated_at FROM category WHERE category_hash = ?`, categoryHash).Scan(&updatedAt)
	if err != nil {
		if err == sql.ErrNoRows {
			return "", nil
		}
		return "", err
	}
	return updatedAt, nil
}

// GetEmojiUpdatedAt returns the updated_at timestamp for an emoji
func (db *DB) GetEmojiUpdatedAt(slugHash int64) (string, error) {
	var updatedAt string
	err := db.conn.QueryRow(`SELECT updated_at FROM emojis WHERE slug_hash = ?`, slugHash).Scan(&updatedAt)
	if err != nil {
		if err == sql.ErrNoRows {
			return "", nil
		}
		return "", err
	}
	return updatedAt, nil
}

// HashStringToInt64 is the exported version of hashStringToInt64
func HashStringToInt64(s string) int64 {
	return hashStringToInt64(s)
}
