package emojis

import (
	"database/sql"
	"fmt"
	"log"
	"regexp"
	"sort"
	"strconv"
	"strings"
	"time"
)

// Compiled regexes for iOS version extraction (compile once, reuse many times)
var iosVersionRegex = regexp.MustCompile(`(?:iOS|iPhone[_\s]?OS)[_\s]?([0-9.]+)`)
var versionNumbersRegex = regexp.MustCompile(`\d+`)

// FetchImageFromDB returns a file path for an emoji image
func (db *DB) FetchImageFromDB(slug string, filename string) (string, error) {
	startTime := time.Now()

	cacheKey := getCacheKey("fetchImageFromDB", fmt.Sprintf("%s:%s", slug, filename))
	if val, ok := globalCache.Get(cacheKey); ok {
		log.Printf("[EMOJI_DB] Apple fetchImageFromDB %v", time.Since(startTime))
		return val.(string), nil
	}

	// Use hash for O(1) lookup
	slugHash := hashStringToInt64(slug)

	// Query image type from database using hash
	query := `SELECT image_type FROM images WHERE emoji_slug_only_hash = ? AND filename = ?`
	var imageType string
	err := db.conn.QueryRow(query, slugHash, filename).Scan(&imageType)
	if err != nil {
		globalCache.Set(cacheKey, "", CacheTTLEmojiImages)
		return "", err
	}

	// Build file path instead of base64 data URI
	filePath := buildEmojiImagePath(slug, imageType, filename)

	globalCache.Set(cacheKey, filePath, CacheTTLEmojiImages)
	totalTime := time.Since(startTime)
	log.Printf("[EMOJI_DB] Apple fetchImageFromDB %v", totalTime)
	return filePath, nil
}

// FetchCategoryIconsBatch fetches multiple category icons in a single query
func (db *DB) FetchCategoryIconsBatch(iconRequests []struct {
	Slug     string
	Filename string
}) (map[string]string, error) {
	startTime := time.Now()

	if len(iconRequests) == 0 {
		return make(map[string]string), nil
	}

	// Build query with multiple conditions using OR
	var conditions []string
	var args []interface{}
	filenameToKey := make(map[string]string) // Maps filename to "slug:filename" key

	for _, req := range iconRequests {
		slugHash := hashStringToInt64(req.Slug)
		key := fmt.Sprintf("%s:%s", req.Slug, req.Filename)
		conditions = append(conditions, "(emoji_slug_only_hash = ? AND filename = ?)")
		args = append(args, slugHash, req.Filename)
		filenameToKey[req.Filename] = key
	}

	query := fmt.Sprintf(`
		SELECT emoji_slug, filename, image_type 
		FROM images 
		WHERE %s
	`, strings.Join(conditions, " OR "))

	rows, err := db.conn.Query(query, args...)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	result := make(map[string]string)
	for rows.Next() {
		var emojiSlug string
		var filename string
		var imageType string
		err := rows.Scan(&emojiSlug, &filename, &imageType)
		if err != nil {
			continue
		}

		// Use filename to find the key
		if key, ok := filenameToKey[filename]; ok {
			// Build file path instead of base64 data URI
			filePath := buildEmojiImagePath(emojiSlug, imageType, filename)
			result[key] = filePath
		}
	}

	totalTime := time.Since(startTime)
	log.Printf("[EMOJI_DB] Apple fetchCategoryIconsBatch %v", totalTime)
	return result, nil
}

// Apple-specific constants for category previews (match Astro worker)
var appleValidCategories = []string{
	"Smileys & Emotion",
	"People & Body",
	"Animals & Nature",
	"Food & Drink",
	"Travel & Places",
	"Activities",
	"Objects",
	"Symbols",
	"Flags",
}

// Slugs excluded from Apple vendor pages (match astro_freedevtools/src/lib/emojis-consts.ts)
var appleVendorExcludedSlugs = []string{
	"person-with-beard",
	"woman-in-motorized-wheelchair-facing-right",
	"person-in-bed-medium-skin-tone",
	"person-in-bed-light-skin-tone",
	"person-in-bed-dark-skin-tone",
	"person-in-bed-medium-light-skin-tone",
	"person-in-bed-medium-dark-skin-tone",
	"snowboarder-medium-light-skin-tone",
	"snowboarder-dark-skin-tone",
	"snowboarder-medium-dark-skin-tone",
	"snowboarder-light-skin-tone",
	"snowboarder-medium-skin-tone",
	"medical-symbol",
	"male-sign",
	"female-sign",
	"woman-with-headscarf",
}

// GetAppleCategoriesWithPreviewEmojis returns Apple categories with preview emojis.
// This mirrors the Astro worker's getAppleCategoriesWithPreviewEmojis implementation.
func (db *DB) GetAppleCategoriesWithPreviewEmojis(previewCount int) ([]CategoryWithPreview, error) {
	startTime := time.Now()

	cacheKey := getCacheKey("getAppleCategoriesWithPreviewEmojis", previewCount)
	if val, ok := globalCache.Get(cacheKey); ok {
		log.Printf("[EMOJI_DB] Apple getAppleCategoriesWithPreviewEmojis %v", time.Since(startTime))
		return val.([]CategoryWithPreview), nil
	}

	// Build placeholders
	validPlaceholders := strings.TrimRight(strings.Repeat("?,", len(appleValidCategories)), ",")

	excludedCond := ""
	excludedPlaceholders := ""
	if len(appleVendorExcludedSlugs) > 0 {
		excludedPlaceholders = strings.TrimRight(strings.Repeat("?,", len(appleVendorExcludedSlugs)), ",")
		excludedCond = "AND slug NOT IN (" + excludedPlaceholders + ")"
	}

	// Mirror the CTE-based query from emoji-worker.ts
	baseQuery := `
		WITH normalized_emojis AS (
			SELECT 
				CASE 
					WHEN category IN (%s) THEN category
					ELSE 'Other'
				END as normalized_category,
				code,
				slug,
				title
			FROM emojis
			WHERE category IS NOT NULL
			%s
		),
		normalized_categories AS (
			SELECT DISTINCT normalized_category
			FROM normalized_emojis
		),
		category_counts AS (
			SELECT 
				normalized_category as category,
				COUNT(*) as count
			FROM normalized_emojis
			GROUP BY normalized_category
		),
		category_emojis AS (
			SELECT 
				nc.normalized_category as category,
				cc.count,
				(
					SELECT json_group_array(
						json_object(
							'code', e.code,
							'slug', e.slug,
							'title', e.title
						)
					)
					FROM (
						SELECT code, slug, title
						FROM normalized_emojis
						WHERE normalized_category = nc.normalized_category
						ORDER BY 
							CASE WHEN slug LIKE '%%-skin-tone%%' OR slug LIKE '%%skin-tone%%' THEN 1 ELSE 0 END,
							COALESCE(title, slug) COLLATE NOCASE
						LIMIT ?
					) e
				) as preview_emojis
			FROM normalized_categories nc
			JOIN category_counts cc ON nc.normalized_category = cc.category
			ORDER BY nc.normalized_category
		)
		SELECT 0 as category_hash, category, count, preview_emojis as preview_emojis_json, '' as updated_at
		FROM category_emojis
		WHERE category != 'Other'
		ORDER BY category`

	query := fmt.Sprintf(baseQuery, validPlaceholders, " "+excludedCond)

	// Build args: valid categories, excluded slugs (if any), previewCount
	args := make([]interface{}, 0, len(appleValidCategories)+len(appleVendorExcludedSlugs)+1)
	for _, c := range appleValidCategories {
		args = append(args, c)
	}
	for _, s := range appleVendorExcludedSlugs {
		args = append(args, s)
	}
	args = append(args, previewCount)

	queryStart := time.Now()
	rows, err := db.conn.Query(query, args...)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	queryTime := time.Since(queryStart)
	log.Printf("[EMOJI_DB] Apple categories query took %v", queryTime)

	var categories []CategoryWithPreview
	for rows.Next() {
		var row rawCategoryRow
		err := rows.Scan(&row.CategoryHash, &row.Category, &row.Count, &row.PreviewEmojisJSON, &row.UpdatedAt)
		if err != nil {
			continue
		}
		categories = append(categories, row.toCategoryWithPreview())
	}

	globalCache.Set(cacheKey, categories, CacheTTLCategoriesWithPreview)
	totalTime := time.Since(startTime)
	log.Printf("[EMOJI_DB] Apple getAppleCategoriesWithPreviewEmojis %v", totalTime)
	return categories, nil
}

// GetEmojisByCategoryWithAppleImagesPaginated returns paginated Apple emojis with images
func (db *DB) GetEmojisByCategoryWithAppleImagesPaginated(category string, page, itemsPerPage int) ([]EmojiData, int, error) {
	startTime := time.Now()

	cacheKey := getCacheKey("getEmojisByCategoryWithAppleImagesPaginated", map[string]interface{}{
		"category": category, "page": page, "itemsPerPage": itemsPerPage,
	})
	if val, ok := globalCache.Get(cacheKey); ok {
		log.Printf("[EMOJI_DB] Apple getEmojisByCategoryWithAppleImagesPaginated %v", time.Since(startTime))
		result := val.(struct {
			Emojis []EmojiData
			Total  int
		})
		return result.Emojis, result.Total, nil
	}

	offset := (page - 1) * itemsPerPage

	// Match Astro worker: look up by category_hash and consider only Apple images
	// whose filename contains 'iOS' (latest Apple-style artwork).
	categoryHash := hashStringToInt64(category)

	// Precompute excluded slug hashes (Apple vendor exclusions)
	excludedHashes := make([]int64, 0, len(appleVendorExcludedSlugs))
	for _, s := range appleVendorExcludedSlugs {
		excludedHashes = append(excludedHashes, hashStringToInt64(s))
	}

	// Use category table for count (fast O(1) lookup, no JOIN needed)
	countQueryStart := time.Now()
	var total int
	err := db.conn.QueryRow(`
		SELECT count
		FROM category
		WHERE category_hash = ?
	`, categoryHash).Scan(&total)
	countQueryTime := time.Since(countQueryStart)
	log.Printf("[EMOJI_DB] Category count query took %v (found %d total)", countQueryTime, total)
	if err != nil {
		if err == sql.ErrNoRows {
			return []EmojiData{}, 0, nil
		}
		return nil, 0, err
	}

	// Second: Get ONLY the paginated emojis we need (36 emojis, not all!)
	// Optimized: Use CTE to pre-compute sort key, allowing better index usage
	emojisQuery := `WITH filtered_emojis AS (
	          SELECT e.slug_hash, e.id, e.code, e.unicode, e.slug, e.title, e.category, e.description,
	                 e.apple_vendor_description, e.keywords, e.also_known_as, e.version, e.senses,
	                 e.shortcodes, e.discord_vendor_description, e.category_hash, e.updated_at,
	                 CASE WHEN e.slug LIKE '%-skin-tone%' OR e.slug LIKE '%skin-tone%' THEN 1 ELSE 0 END as skin_tone_flag,
	                 COALESCE(e.title, e.slug) as sort_key
	          FROM emojis e
	          WHERE e.category_hash = ?
	            AND e.slug IS NOT NULL
	            AND EXISTS (
	              SELECT 1 FROM images i 
	              WHERE i.emoji_slug_only_hash = e.slug_hash 
	              AND i.image_type = 'apple-vendor'
	              LIMIT 1
	            )`

	if len(excludedHashes) > 0 {
		placeholders := strings.TrimRight(strings.Repeat("?,", len(excludedHashes)), ",")
		emojisQuery += " AND e.slug_hash NOT IN (" + placeholders + ")"
	}
	emojisQuery += `
	        )
	        SELECT e.slug_hash, e.id, e.code, e.unicode, e.slug, e.title, e.category, e.description,
	               e.apple_vendor_description, e.keywords, e.also_known_as, e.version, e.senses,
	               e.shortcodes, e.discord_vendor_description, e.category_hash, e.updated_at
	        FROM filtered_emojis e
	        ORDER BY e.skin_tone_flag, e.sort_key COLLATE NOCASE
	        LIMIT ? OFFSET ?`

	// Build args
	args := make([]interface{}, 0, 3+len(excludedHashes))
	args = append(args, categoryHash)
	for _, h := range excludedHashes {
		args = append(args, h)
	}
	args = append(args, itemsPerPage, offset)

	emojisQueryStart := time.Now()
	log.Printf("[EMOJI_DB] Executing paginated emojis query (LIMIT %d OFFSET %d)", itemsPerPage, offset)
	log.Printf("[EMOJI_DB] Emojis query SQL: %s", emojisQuery)
	log.Printf("[EMOJI_DB] Emojis query args: categoryHash=%d, excludedHashes=%d, limit=%d, offset=%d", categoryHash, len(excludedHashes), itemsPerPage, offset)
	rows, err := db.conn.Query(emojisQuery, args...)
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
			&row.Shortcodes, &row.DiscordVendorDescription, &row.CategoryHash, &row.UpdatedAt,
		)
		if err != nil {
			continue
		}
		emojis = append(emojis, row.toEmojiData())
	}
	scanTime := time.Since(scanStart)
	emojisQueryTime := time.Since(emojisQueryStart)
	log.Printf("[EMOJI_DB] Paginated emojis query took %v (scan: %v, fetched %d emojis)", emojisQueryTime, scanTime, len(emojis))

	// Debug: if we have a non-zero total but no rows for this page, log it.
	if len(emojis) == 0 && total > 0 {
		log.Printf("[DEBUG] Apple paginated empty page: category=%s page=%d itemsPerPage=%d offset=%d total=%d",
			category, page, itemsPerPage, offset, total)
	}

	result := struct {
		Emojis []EmojiData
		Total  int
	}{emojis, total}
	globalCache.Set(cacheKey, result, CacheTTLEmojisByCategory)
	totalTime := time.Since(startTime)
	log.Printf("[EMOJI_DB] Apple getEmojisByCategoryWithAppleImagesPaginated %v", totalTime)
	return emojis, total, nil
}

// EvolutionImage represents an evolution image with version info
type EvolutionImage struct {
	URL     string
	Version string
}

// extractIOSVersion extracts iOS version from filename (matching Astro's extractIOSVersion)
// Returns format like "iOS 18.4" to match Astro's output
func extractIOSVersion(filename string) string {
	// Match patterns like iOS_18.4.png, iOS 18.4.png, iOS_18_4.png, iPhoneOS_18.4.png
	matches := iosVersionRegex.FindStringSubmatch(filename)
	if len(matches) > 1 {
		// Normalize separators to dots and format as "iOS X.Y"
		version := strings.ReplaceAll(matches[1], "_", ".")
		return fmt.Sprintf("iOS %s", version)
	}
	return "Unknown"
}

// versionToNumbers converts version string to comparable numbers (matching Astro's versionToNumbers)
func versionToNumbers(version string) []int {
	// Extract just the numbers (handles "iOS 18.4" format)
	matches := versionNumbersRegex.FindAllString(version, -1)
	nums := make([]int, len(matches))
	for i, match := range matches {
		num, _ := strconv.Atoi(match)
		nums[i] = num
	}
	return nums
}

// GetAppleEvolutionImages returns all Apple iOS evolution images for an emoji slug
func (db *DB) GetAppleEvolutionImages(slug string) ([]EvolutionImage, error) {
	startTime := time.Now()

	cacheKey := getCacheKey("getAppleEvolutionImages", slug)
	if val, ok := globalCache.Get(cacheKey); ok {
		log.Printf("[EMOJI_DB] Apple getAppleEvolutionImages %v", time.Since(startTime))
		return val.([]EvolutionImage), nil
	}

	// Use hash for O(1) lookup and filter iOS pattern in SQL
	slugHash := hashStringToInt64(slug)
	query := `SELECT emoji_slug, filename, image_type
	          FROM images
	          WHERE emoji_slug_only_hash = ? AND filename LIKE '%iOS%'
	          ORDER BY filename`

	queryStart := time.Now()
	rows, err := db.conn.Query(query, slugHash)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	queryTime := time.Since(queryStart)
	log.Printf("[EMOJI_DB] Evolution images query took %v", queryTime)

	// Map to deduplicate by version (keep only one image per iOS version)
	versionMap := make(map[string]EvolutionImage)

	processStart := time.Now()
	imageCount := 0
	for rows.Next() {
		imageCount++
		var emojiSlug string
		var filename string
		var imageType string
		if err := rows.Scan(&emojiSlug, &filename, &imageType); err != nil {
			continue
		}

		version := extractIOSVersion(filename)
		if version == "" || version == "Unknown" {
			continue
		}

		// Deduplicate: if we already have this version, skip (keep first one)
		if _, exists := versionMap[version]; exists {
			continue
		}

		// Build file path instead of base64 data URI
		filePath := buildEmojiImagePath(emojiSlug, imageType, filename)

		versionMap[version] = EvolutionImage{
			URL:     filePath,
			Version: version,
		}
	}
	processTime := time.Since(processStart)
	log.Printf("[EMOJI_DB] Processed %d images in %v", imageCount, processTime)

	// Convert map to slice
	images := make([]EvolutionImage, 0, len(versionMap))
	for _, img := range versionMap {
		images = append(images, img)
	}

	// Sort by version (ascending)
	sortStart := time.Now()
	sort.Slice(images, func(i, j int) bool {
		vi := versionToNumbers(images[i].Version)
		vj := versionToNumbers(images[j].Version)
		maxLen := len(vi)
		if len(vj) > maxLen {
			maxLen = len(vj)
		}
		for k := 0; k < maxLen; k++ {
			viVal := 0
			vjVal := 0
			if k < len(vi) {
				viVal = vi[k]
			}
			if k < len(vj) {
				vjVal = vj[k]
			}
			if viVal != vjVal {
				return viVal < vjVal
			}
		}
		return false
	})
	sortTime := time.Since(sortStart)
	log.Printf("[EMOJI_DB] Sort took %v", sortTime)

	globalCache.Set(cacheKey, images, CacheTTLEmojiImages)
	totalTime := time.Since(startTime)
	log.Printf("[EMOJI_DB] Apple getAppleEvolutionImages %v", totalTime)
	return images, nil
}

// GetLatestAppleImage returns the latest Apple image for an emoji slug as file path
func (db *DB) GetLatestAppleImage(slug string) (*string, error) {
	startTime := time.Now()

	evolutionImages, err := db.GetAppleEvolutionImages(slug)
	if err != nil {
		return nil, err
	}
	if len(evolutionImages) == 0 {
		log.Printf("[EMOJI_DB] No evolution images found for slug=%s", slug)
		return nil, nil
	}
	// Latest is the last one after sorting
	latest := evolutionImages[len(evolutionImages)-1].URL
	totalTime := time.Since(startTime)
	log.Printf("[EMOJI_DB] Apple getLatestAppleImage %v", totalTime)
	return &latest, nil
}

// GetAppleEmojiBySlug returns an Apple emoji by slug
func (db *DB) GetAppleEmojiBySlug(slug string) (*EmojiData, error) {
	startTime := time.Now()

	cacheKey := getCacheKey("getAppleEmojiBySlug", slug)
	if val, ok := globalCache.Get(cacheKey); ok {
		log.Printf("[EMOJI_DB] Apple getAppleEmojiBySlug %v", time.Since(startTime))
		return val.(*EmojiData), nil
	}

	// Get emoji data directly (no need to check for Apple images - emoji will always be in DB)
	emoji, err := db.GetEmojiBySlug(slug)
	if err != nil {
		return nil, err
	}

	if emoji != nil {
		globalCache.Set(cacheKey, emoji, CacheTTLEmojiBySlug)
	}
	totalTime := time.Since(startTime)
	log.Printf("[EMOJI_DB] Apple getAppleEmojiBySlug %v", totalTime)
	return emoji, nil
}

// GetSitemapAppleEmojis returns all Apple emojis for sitemap generation.
// Mirrors Astro worker getSitemapAppleEmojis: slugs that have at least one
// iOS Apple image, excluding appleVendorExcludedSlugs.
func (db *DB) GetSitemapAppleEmojis() ([]SitemapEmoji, error) {
	startTime := time.Now()

	// Precompute excluded slug hashes
	excludedHashes := make([]int64, 0, len(appleVendorExcludedSlugs))
	for _, s := range appleVendorExcludedSlugs {
		excludedHashes = append(excludedHashes, hashStringToInt64(s))
	}

	query := `
		SELECT slug, category, updated_at
		FROM emojis
		WHERE slug IS NOT NULL
		  `
	if len(excludedHashes) > 0 {
		placeholders := strings.TrimRight(strings.Repeat("?,", len(excludedHashes)), ",")
		query += " AND slug_hash NOT IN (" + placeholders + ")"
	}

	args := make([]interface{}, 0, len(excludedHashes))
	for _, h := range excludedHashes {
		args = append(args, h)
	}

	queryStart := time.Now()
	rows, err := db.conn.Query(query, args...)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	queryTime := time.Since(queryStart)
	log.Printf("[EMOJI_DB] Sitemap Apple emojis query took %v", queryTime)

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
	log.Printf("[EMOJI_DB] Apple getSitemapAppleEmojis %v", totalTime)
	return emojis, nil
}
