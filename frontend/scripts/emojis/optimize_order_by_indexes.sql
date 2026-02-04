-- Optimize ORDER BY performance for emoji category pagination queries
-- The main bottleneck is the ORDER BY with CASE/LIKE patterns and COALESCE
-- These indexes help SQLite sort more efficiently

-- Covering index for regular emoji pagination
-- Includes category_hash (filter), slug (for CASE evaluation), title (for ORDER BY)
-- This allows SQLite to read from index instead of table for sorting
CREATE INDEX IF NOT EXISTS idx_emojis_category_hash_slug_title_covering
ON emojis(category_hash, slug, title)
WHERE slug IS NOT NULL AND title IS NOT NULL;

-- Index for emojis without title (fallback to slug)
CREATE INDEX IF NOT EXISTS idx_emojis_category_hash_slug_covering
ON emojis(category_hash, slug)
WHERE slug IS NOT NULL AND title IS NULL;

-- For Apple/Discord queries with EXISTS filter, we need indexes that help with:
-- 1. category_hash filter
-- 2. EXISTS subquery (already covered by idx_images_apple_vendor_hash / idx_images_discord_vendor_hash)
-- 3. ORDER BY sorting

-- The existing idx_emojis_category_hash_slug and idx_emojis_category_hash_title help,
-- but we can add a covering index that includes more columns to avoid table lookups

-- Analyze tables to update query planner statistics
ANALYZE emojis;
ANALYZE images;


