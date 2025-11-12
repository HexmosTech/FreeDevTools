#!/usr/bin/env python3
"""
Fix empty slugs in man pages database by generating fallback slugs.

This script finds all man pages with empty/NULL slugs and generates
fallback slugs using the pattern: main-category-subcategory-N
where N is an incremental number to ensure uniqueness.
"""

import sqlite3
import logging
from pathlib import Path
from typing import List, Tuple

# Setup paths
BASE_DIR = Path(__file__).parent
DB_PATH = BASE_DIR.parent.parent / "db" / "man_pages" / "man-pages-db.db"
LOG_FILE = BASE_DIR / "fix_empty_slugs.log"

# Setup logging
def setup_logging():
    """Setup logging to file and console."""
    logging.basicConfig(
        level=logging.INFO,
        format='%(asctime)s - %(levelname)s - %(message)s',
        handlers=[
            logging.FileHandler(LOG_FILE, mode='w', encoding='utf-8'),
            logging.StreamHandler()
        ]
    )
    return logging.getLogger(__name__)

logger = setup_logging()


def find_empty_slugs(conn: sqlite3.Connection) -> List[Tuple[int, str, str, str, str]]:
    """Find all man pages with empty or NULL slugs."""
    cur = conn.cursor()
    cur.execute("""
        SELECT id, main_category, sub_category, title, filename
        FROM man_pages 
        WHERE slug IS NULL OR slug = '' OR TRIM(slug) = ''
        ORDER BY main_category, sub_category, filename
    """)
    
    results = cur.fetchall()
    logger.info(f"🔍 Found {len(results)} man pages with empty slugs")
    return results


def generate_fallback_slug(conn: sqlite3.Connection, main_category: str, sub_category: str) -> str:
    """Generate a unique fallback slug using main-category-subcategory-N pattern."""
    cur = conn.cursor()
    
    # Base slug pattern
    base_slug = f"{main_category}-{sub_category}"
    
    # Check if base slug exists
    cur.execute(
        "SELECT COUNT(*) FROM man_pages WHERE main_category = ? AND sub_category = ? AND slug = ?",
        (main_category, sub_category, base_slug)
    )
    
    if cur.fetchone()[0] == 0:
        # Base slug is available
        return base_slug
    
    # Find the next available number
    counter = 1
    while True:
        candidate_slug = f"{base_slug}-{counter}"
        
        cur.execute(
            "SELECT COUNT(*) FROM man_pages WHERE main_category = ? AND sub_category = ? AND slug = ?",
            (main_category, sub_category, candidate_slug)
        )
        
        if cur.fetchone()[0] == 0:
            return candidate_slug
            
        counter += 1
        
        # Safety check
        if counter > 1000:
            logger.error(f"Too many iterations for {base_slug}")
            return f"{base_slug}-{int(datetime.now().timestamp())}"


def fix_empty_slugs(conn: sqlite3.Connection) -> int:
    """Fix all empty slugs by generating fallback slugs."""
    empty_slug_records = find_empty_slugs(conn)
    
    if not empty_slug_records:
        logger.info("✅ No empty slugs found!")
        return 0
    
    logger.info(f"🔧 Fixing {len(empty_slug_records)} empty slugs...")
    
    cur = conn.cursor()
    fixed_count = 0
    
    for record in empty_slug_records:
        record_id, main_category, sub_category, title, filename = record
        
        try:
            # Generate fallback slug
            fallback_slug = generate_fallback_slug(conn, main_category, sub_category)
            
            # Update the record
            cur.execute(
                "UPDATE man_pages SET slug = ? WHERE id = ?",
                (fallback_slug, record_id)
            )
            
            fixed_count += 1
            logger.info(f"✅ Fixed {filename}: {main_category}/{sub_category} → slug: {fallback_slug}")
            
            # Show progress every 10 records
            if fixed_count % 10 == 0:
                logger.info(f"  📄 Progress: {fixed_count}/{len(empty_slug_records)} fixed")
                
        except Exception as e:
            logger.error(f"❌ Failed to fix {filename}: {e}")
            continue
    
    # Commit all changes
    conn.commit()
    logger.info(f"🎉 Successfully fixed {fixed_count} empty slugs")
    
    return fixed_count


def verify_fixes(conn: sqlite3.Connection) -> None:
    """Verify that all slugs are now populated."""
    cur = conn.cursor()
    
    # Check for remaining empty slugs
    cur.execute("""
        SELECT COUNT(*) FROM man_pages 
        WHERE slug IS NULL OR slug = '' OR TRIM(slug) = ''
    """)
    
    remaining_empty = cur.fetchone()[0]
    
    if remaining_empty == 0:
        logger.info("✅ All slugs are now populated!")
    else:
        logger.warning(f"⚠️ Still {remaining_empty} empty slugs remaining")
    
    # Show some examples of generated slugs
    cur.execute("""
        SELECT main_category, sub_category, slug, filename
        FROM man_pages 
        WHERE slug LIKE '%-%-_%'
        ORDER BY slug
        LIMIT 10
    """)
    
    generated_examples = cur.fetchall()
    if generated_examples:
        logger.info("📄 Examples of generated fallback slugs:")
        for main_cat, sub_cat, slug, filename in generated_examples:
            logger.info(f"  {slug} ({main_cat}/{sub_cat}) - {filename}")


def analyze_empty_slugs(conn: sqlite3.Connection) -> None:
    """Analyze the distribution of empty slugs."""
    cur = conn.cursor()
    
    # Count by category
    cur.execute("""
        SELECT main_category, sub_category, COUNT(*) as count
        FROM man_pages 
        WHERE slug IS NULL OR slug = '' OR TRIM(slug) = ''
        GROUP BY main_category, sub_category
        ORDER BY count DESC
        LIMIT 10
    """)
    
    category_counts = cur.fetchall()
    
    if category_counts:
        logger.info("📊 Empty slugs by category/subcategory:")
        for main_cat, sub_cat, count in category_counts:
            logger.info(f"  {main_cat}/{sub_cat}: {count} empty slugs")
    
    # Check if titles are also empty
    cur.execute("""
        SELECT COUNT(*) FROM man_pages 
        WHERE (slug IS NULL OR slug = '' OR TRIM(slug) = '')
        AND (title IS NULL OR title = '' OR TRIM(title) = '')
    """)
    
    empty_titles_count = cur.fetchone()[0]
    
    if empty_titles_count > 0:
        logger.warning(f"⚠️ Found {empty_titles_count} records with both empty slug AND empty title")


def main() -> None:
    """Main entry point."""
    if not DB_PATH.exists():
        logger.error(f"❌ Database not found: {DB_PATH}")
        logger.error("Please run build_sqlite_from_markdown.py first")
        return
    
    logger.info(f"🔧 Fixing empty slugs in: {DB_PATH}")
    
    with sqlite3.connect(DB_PATH) as conn:
        # Analyze the problem first
        analyze_empty_slugs(conn)
        
        # Fix empty slugs
        fixed_count = fix_empty_slugs(conn)
        
        # Verify the fixes
        verify_fixes(conn)
        
        logger.info(f"\n✅ Fixed {fixed_count} empty slugs")
        logger.info(f"📝 Full log written to: {LOG_FILE}")


if __name__ == "__main__":
    main()