package emojis

import (
	"database/sql"
	"fmt"
	"log"
	"regexp"
	"sort"
	"strings"
	"time"
)

// Discord-specific constants for category previews (match Astro worker)
var discordValidCategories = []string{
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

// Slugs excluded from Discord vendor pages (match astro_freedevtools/src/lib/emojis-consts.ts)
var discordVendorExcludedSlugs = []string{
	// Add Discord-specific exclusions if needed
}

// Compiled regex for Discord version extraction (compile once, reuse many times)
var discordVersionRegex = regexp.MustCompile(`[_-]([\d.]+)\.(png|jpg|jpeg|webp|svg)$`)

// GetDiscordCategoriesWithPreviewEmojis returns Discord categories with preview emojis.
// This mirrors the Astro worker's getDiscordCategoriesWithPreviewEmojis implementation.
func (db *DB) GetDiscordCategoriesWithPreviewEmojis(previewCount int) ([]CategoryWithPreview, error) {
	startTime := time.Now()

	cacheKey := getCacheKey("getDiscordCategoriesWithPreviewEmojis", previewCount)
	if val, ok := globalCache.Get(cacheKey); ok {
		log.Printf("[EMOJI_DB] Discord getDiscordCategoriesWithPreviewEmojis %v", time.Since(startTime))
		return val.([]CategoryWithPreview), nil
	}

	// Build placeholders
	validPlaceholders := strings.TrimRight(strings.Repeat("?,", len(discordValidCategories)), ",")

	excludedCond := ""
	excludedPlaceholders := ""
	if len(discordVendorExcludedSlugs) > 0 {
		excludedPlaceholders = strings.TrimRight(strings.Repeat("?,", len(discordVendorExcludedSlugs)), ",")
		excludedCond = "AND e.slug NOT IN (" + excludedPlaceholders + ")"
	}

	// Mirror the CTE-based query from emoji-worker.ts, but filter by Discord vendor images
	// Use EXISTS instead of INNER JOIN for better performance
	baseQuery := `
		WITH normalized_emojis AS (
			SELECT 
				CASE 
					WHEN e.category IN (%s) THEN e.category
					ELSE 'Other'
				END as normalized_category,
				e.code,
				e.slug,
				e.title
			FROM emojis e
			WHERE e.category IS NOT NULL
			  AND e.slug IS NOT NULL
			  AND EXISTS (
			    SELECT 1 FROM images i 
			    WHERE i.emoji_slug_only_hash = e.slug_hash 
			    AND i.image_type = 'twemoji-vendor'
			    LIMIT 1
			  )
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
	args := make([]interface{}, 0, len(discordValidCategories)+len(discordVendorExcludedSlugs)+1)
	for _, c := range discordValidCategories {
		args = append(args, c)
	}
	for _, s := range discordVendorExcludedSlugs {
		args = append(args, s)
	}
	args = append(args, previewCount)

	rows, err := db.conn.Query(query, args...)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

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
	log.Printf("[EMOJI_DB] Discord getDiscordCategoriesWithPreviewEmojis %v", totalTime)
	return categories, nil
}

// GetEmojisByCategoryWithDiscordImagesPaginated returns paginated Discord emojis with images
func (db *DB) GetEmojisByCategoryWithDiscordImagesPaginated(category string, page, itemsPerPage int) ([]EmojiData, int, error) {
	startTime := time.Now()
	log.Printf("[EMOJI_DB] Handling getEmojisByCategoryWithDiscordImagesPaginated category=%s page=%d", category, page)

	cacheKey := getCacheKey("getEmojisByCategoryWithDiscordImagesPaginated", map[string]interface{}{
		"category": category, "page": page, "itemsPerPage": itemsPerPage,
	})
	cacheCheckStart := time.Now()
	if val, ok := globalCache.Get(cacheKey); ok {
		log.Printf("[EMOJI_DB] Cache hit for getEmojisByCategoryWithDiscordImagesPaginated in %v", time.Since(cacheCheckStart))
		result := val.(struct {
			Emojis []EmojiData
			Total  int
		})
		log.Printf("[EMOJI_DB] Completed getEmojisByCategoryWithDiscordImagesPaginated in %v (cached)", time.Since(startTime))
		return result.Emojis, result.Total, nil
	}
	log.Printf("[EMOJI_DB] Cache miss for getEmojisByCategoryWithDiscordImagesPaginated (check took %v)", time.Since(cacheCheckStart))

	offset := (page - 1) * itemsPerPage

	// Match Astro worker: look up by category_hash and consider only Discord images
	// (twemoji-vendor image type).
	categoryHash := hashStringToInt64(category)

	// Precompute excluded slug hashes (Discord vendor exclusions)
	excludedHashes := make([]int64, 0, len(discordVendorExcludedSlugs))
	for _, s := range discordVendorExcludedSlugs {
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

	// Second: Get ONLY the paginated emojis we need (36 emojis, not 2585!)
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
	              AND i.image_type = 'twemoji-vendor'
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

	result := struct {
		Emojis []EmojiData
		Total  int
	}{emojis, total}
	cacheSetStart := time.Now()
	globalCache.Set(cacheKey, result, CacheTTLEmojisByCategory)
	cacheSetTime := time.Since(cacheSetStart)
	log.Printf("[EMOJI_DB] Cache set took %v", cacheSetTime)

	totalTime := time.Since(startTime)
	log.Printf("[EMOJI_DB] Discord getEmojisByCategoryWithDiscordImagesPaginated %v", totalTime)
	return emojis, total, nil
}

// extractDiscordVersion extracts Discord version from filename (matching Astro's extractDiscordVersion)
// Returns format like "1.0", "2.1", "15.0.3" etc.
func extractDiscordVersion(filename string) string {
	// Match patterns like _1.0.png, -14.1.webp, twitter_2.7.png, etc.
	// Matches [_-]([\d.]+)\.(png|jpg|jpeg|webp|svg)$
	matches := discordVersionRegex.FindStringSubmatch(filename)
	if len(matches) > 1 {
		return matches[1]
	}
	return "0"
}

// compareVersions compares two version strings (e.g., "1.0", "2.1", "15.0.3")
// Returns: >0 if v1 > v2, <0 if v1 < v2, 0 if equal
func compareVersions(v1, v2 string) int {
	// Parse as floats for simple comparison (matching Astro's parseFloat approach)
	var f1, f2 float64
	fmt.Sscanf(v1, "%f", &f1)
	fmt.Sscanf(v2, "%f", &f2)
	if f1 > f2 {
		return 1
	} else if f1 < f2 {
		return -1
	}
	return 0
}

// GetDiscordEvolutionImages returns all Discord evolution images for an emoji slug
func (db *DB) GetDiscordEvolutionImages(slug string) ([]EvolutionImage, error) {
	startTime := time.Now()

	cacheKey := getCacheKey("getDiscordEvolutionImages", slug)
	if val, ok := globalCache.Get(cacheKey); ok {
		log.Printf("[EMOJI_DB] Discord getDiscordEvolutionImages %v", time.Since(startTime))
		return val.([]EvolutionImage), nil
	}

	// Use hash for O(1) lookup (matching Apple implementation)
	slugHash := hashStringToInt64(slug)
	query := `SELECT emoji_slug, filename, image_type
	          FROM images
	          WHERE emoji_slug_only_hash = ? AND image_type = 'twemoji-vendor'
	          ORDER BY filename`

	queryStart := time.Now()
	rows, err := db.conn.Query(query, slugHash)
	queryTime := time.Since(queryStart)
	log.Printf("[EMOJI_DB] Discord evolution images query took %v", queryTime)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	// Map to deduplicate by version (keep only one image per Discord version)
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

		version := extractDiscordVersion(filename)
		if version == "" || version == "0" {
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

	// Sort by version (ascending) - matching Astro's versionToNumbers logic
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
	log.Printf("[EMOJI_DB] Discord getDiscordEvolutionImages %v", totalTime)
	return images, nil
}

// GetLatestDiscordImage returns the latest Discord image for an emoji slug as file path
func (db *DB) GetLatestDiscordImage(slug string) (*string, error) {
	startTime := time.Now()

	evolutionImages, err := db.GetDiscordEvolutionImages(slug)
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
	log.Printf("[EMOJI_DB] Discord getLatestDiscordImage %v", totalTime)
	return &latest, nil
}

// GetDiscordEmojiBySlug returns a Discord emoji by slug
func (db *DB) GetDiscordEmojiBySlug(slug string) (*EmojiData, error) {
	startTime := time.Now()

	cacheKey := getCacheKey("getDiscordEmojiBySlug", slug)
	if val, ok := globalCache.Get(cacheKey); ok {
		log.Printf("[EMOJI_DB] Discord getDiscordEmojiBySlug %v", time.Since(startTime))
		return val.(*EmojiData), nil
	}

	// First get the emoji to use its stored slug_hash (matching category query pattern)
	emoji, err := db.GetEmojiBySlug(slug)
	if err != nil {
		return nil, err
	}
	if emoji == nil {
		return nil, nil
	}

	// Check if emoji has Discord image using stored slug_hash (same as category query)
	checkStart := time.Now()
	var hasDiscordImage bool
	err = db.conn.QueryRow(`
		SELECT COUNT(*) > 0
		FROM images
		WHERE emoji_slug_only_hash = ? AND image_type = 'twemoji-vendor'
	`, emoji.SlugHash).Scan(&hasDiscordImage)
	checkTime := time.Since(checkStart)
	log.Printf("[EMOJI_DB] Discord image check query took %v (hasImage=%v)", checkTime, hasDiscordImage)
	if err != nil || !hasDiscordImage {
		return nil, nil
	}

	globalCache.Set(cacheKey, emoji, CacheTTLEmojiBySlug)
	totalTime := time.Since(startTime)
	log.Printf("[EMOJI_DB] Discord getDiscordEmojiBySlug %v", totalTime)
	return emoji, nil
}

// GetSitemapDiscordEmojis returns all Discord emojis for sitemap generation.
// Mirrors Astro worker getSitemapDiscordEmojis: slugs that have at least one
// twemoji-vendor image, excluding discord vendor excluded slugs (handled on
// the Astro side). Here we don't apply exclusions at the DB level.
func (db *DB) GetSitemapDiscordEmojis() ([]SitemapEmoji, error) {
	startTime := time.Now()

	query := `
		SELECT e.slug, e.category, e.updated_at
		FROM emojis e
		WHERE e.slug IS NOT NULL
		  AND EXISTS (
		    SELECT 1 FROM images i 
		    WHERE i.emoji_slug_only_hash = e.slug_hash 
		    AND i.image_type = 'twemoji-vendor'
		    LIMIT 1
		  )
		 `

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
	log.Printf("[EMOJI_DB] Discord getSitemapDiscordEmojis %v", totalTime)
	return emojis, nil
}
