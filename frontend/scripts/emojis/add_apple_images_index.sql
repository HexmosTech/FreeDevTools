-- Add composite indexes for Apple and Discord images query optimization
-- These indexes cover: emoji_slug_only_hash, image_type for fast EXISTS lookups

-- Composite index for the EXISTS subquery (emoji_slug_only_hash + image_type)
-- This helps both Apple and Discord queries
CREATE INDEX IF NOT EXISTS idx_images_hash_type 
ON images(emoji_slug_only_hash, image_type);

-- Partial index for apple-vendor images only (smaller, faster)
CREATE INDEX IF NOT EXISTS idx_images_apple_vendor_hash 
ON images(emoji_slug_only_hash) 
WHERE image_type = 'apple-vendor';

-- Partial index for twemoji-vendor (Discord) images only (smaller, faster)
CREATE INDEX IF NOT EXISTS idx_images_discord_vendor_hash 
ON images(emoji_slug_only_hash) 
WHERE image_type = 'twemoji-vendor';

-- Index on emojis.category_hash if it doesn't exist
CREATE INDEX IF NOT EXISTS idx_emojis_category_hash ON emojis(category_hash);

-- Index on emojis.slug_hash for NOT IN exclusion check
CREATE INDEX IF NOT EXISTS idx_emojis_slug_hash ON emojis(slug_hash);

-- Index for regular emoji category pagination query
-- Helps with WHERE category_hash = ? AND slug IS NOT NULL
-- And ORDER BY title/slug
CREATE INDEX IF NOT EXISTS idx_emojis_category_hash_slug 
ON emojis(category_hash, slug) 
WHERE slug IS NOT NULL;

-- Index for ordering by title (helps with COALESCE(title, slug))
CREATE INDEX IF NOT EXISTS idx_emojis_category_hash_title 
ON emojis(category_hash, title) 
WHERE slug IS NOT NULL AND title IS NOT NULL;

-- Analyze tables to update query planner statistics
ANALYZE images;
ANALYZE emojis;

