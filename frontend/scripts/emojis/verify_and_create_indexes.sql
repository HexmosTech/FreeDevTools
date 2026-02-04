-- Verify and create all necessary indexes for emoji queries

-- Check and create category_hash index (critical for filtering)
CREATE INDEX IF NOT EXISTS idx_emojis_category_hash ON emojis(category_hash);

-- Check and create composite index for category pagination
CREATE INDEX IF NOT EXISTS idx_emojis_category_hash_slug 
ON emojis(category_hash, slug) 
WHERE slug IS NOT NULL;

-- Check and create title index for ordering
CREATE INDEX IF NOT EXISTS idx_emojis_category_hash_title 
ON emojis(category_hash, title) 
WHERE slug IS NOT NULL AND title IS NOT NULL;

-- Verify indexes exist
SELECT name, sql FROM sqlite_master 
WHERE type='index' AND tbl_name='emojis' 
ORDER BY name;

-- Show index usage stats
PRAGMA index_info('idx_emojis_category_hash');
PRAGMA index_info('idx_emojis_category_hash_slug');

-- Analyze to update query planner
ANALYZE emojis;

