-- Optimize man pages database queries by adding missing indexes
-- These indexes target the three slowest queries:
-- 1. getManPagesCountBySubcategory (sub_category.hash_id lookup)
-- 2. getSubCategoriesByMainCategoryPaginated (sub_category.main_category_hash + ORDER BY name)
-- 3. getManPagesBySubcategoryPaginated (man_pages.category_hash)

-- Index for sub_category.main_category_hash (used in getSubCategoriesByMainCategoryPaginated)
-- This allows fast filtering by main_category_hash
CREATE INDEX IF NOT EXISTS idx_sub_category_main_category_hash 
ON sub_category(main_category_hash);

-- Covering index for sub_category pagination query
-- Includes main_category_hash (filter) and name (ORDER BY) for optimal performance
-- This allows SQLite to read entirely from index without table lookups
CREATE INDEX IF NOT EXISTS idx_sub_category_main_hash_name_covering
ON sub_category(main_category_hash, name);

-- Index for man_pages.category_hash (used in getManPagesBySubcategoryPaginated)
-- This allows fast filtering by category_hash
CREATE INDEX IF NOT EXISTS idx_man_pages_category_hash 
ON man_pages(category_hash);

-- Covering index for man_pages pagination query
-- Includes category_hash (filter) and title, slug (SELECT columns) for optimal performance
-- This allows SQLite to read entirely from index without table lookups
CREATE INDEX IF NOT EXISTS idx_man_pages_category_hash_covering
ON man_pages(category_hash, title, slug);

-- Note: sub_category.hash_id is already indexed as PRIMARY KEY
-- If it's still slow, it might be due to cache misses or other factors

-- Analyze tables to update query planner statistics
ANALYZE sub_category;
ANALYZE man_pages;
ANALYZE category;

PRAGMA index_list(sub_category); 
PRAGMA index_list(man_pages); 
PRAGMA index_list(category); 
