import sqlite3
import sys
import re
import logging
from pathlib import Path

# Configuration Paths
BASE_DIR = Path(__file__).resolve().parent.parent.parent
DB_PATH = BASE_DIR / "db" / "all_dbs" / "man-pages-db.db"
LOG_FILE = BASE_DIR / "slug_fix_log.log"

# Setup Logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(levelname)s - %(message)s",
    handlers=[
        logging.FileHandler(LOG_FILE),
        logging.StreamHandler(sys.stdout)
    ]
)

def create_seo_slug(filename):
    """
    Generates a clean, SEO-friendly slug from a filename.
    Logic:
    1. Remove extension (.md).
    2. Remove section suffix (e.g., .1, .3pm, .3perl) from the end.
    3. Lowercase.
    4. Replace non-alphanumeric chars with hyphens.
    5. intelligent Truncation:
       - Try to keep first 3 words.
       - If still > 40 chars, hard cut at 40.
    6. Strip trailing hyphens or symbols.
    """
    # 1. Remove Extension
    stem = Path(filename).stem
    
    # 2. Remove section suffix
    # Matches dot + digit + optional alphanumeric chars at the end of the string
    # Examples: 'file.1' -> 'file', 'Module.3pm' -> 'Module', 'conf.5.md' (already stemmed) -> 'conf'
    stem = re.sub(r'\.\d+[a-zA-Z0-9]*$', '', stem)
    
    # 3. Lowercase
    stem = stem.lower()
    
    # 4. Replace symbols with hyphens (Keep only a-z, 0-9)
    # Convert "foo_bar" -> "foo-bar", "foo+bar" -> "foo-bar"
    cleaned = re.sub(r'[^a-z0-9]+', '-', stem)
    
    # 5. Length / SEO Check (Targeting ~40 chars)
    if len(cleaned) > 40:
        parts = list(filter(None, cleaned.split('-')))
        
        # Attempt to keep the first 3 words if they fit nicely
        if len(parts) >= 3:
            temp_slug = "-".join(parts[:3])
            if len(temp_slug) <= 40:
                cleaned = temp_slug
            else:
                # First 3 words are still too long, hard cut to 40
                cleaned = cleaned[:40]
        else:
            # Not enough words (one giant word), hard cut to 40
            cleaned = cleaned[:40]

    # 6. Final Cleanup
    # Ensure it doesn't start or end with a hyphen or any non-alphanumeric char
    cleaned = re.sub(r'^[^a-z0-9]+|[^a-z0-9]+$', '', cleaned)
    
    if not cleaned:
        return "manpage"
        
    return cleaned

def fix_numeric_slugs(conn):
    cur = conn.cursor()
    
    # 1. Fetch candidates matching the pattern (e.g., 'slug-1', 'slug-2-3')
    print("🔍 Searching for slugs with numeric suffixes...")
    
    query = """
        SELECT id, slug, sub_category, main_category, filename
        FROM man_pages 
        WHERE slug GLOB '*-[0-9]*'
    """
    cur.execute(query)
    candidates = cur.fetchall()
    
    if not candidates:
        logging.info("✅ No numeric slugs found to fix.")
        return

    logging.info(f"Found {len(candidates)} candidates to process.")
    
    updated_count = 0
    
    for row in candidates:
        row_id, old_slug, sub_cat, main_cat, filename = row
        
        if not filename:
            logging.warning(f"Skipping ID {row_id} ({old_slug}): No filename present.")
            continue

        # Generate base new slug
        base_new_slug = create_seo_slug(filename)
        final_slug = base_new_slug
        
        # Check for uniqueness in the SAME category context
        counter = 1
        while True:
            check_sql = """
                SELECT 1 FROM man_pages 
                WHERE main_category = ? 
                AND sub_category = ? 
                AND slug = ?
                AND id != ?
            """
            cur.execute(check_sql, (main_cat, sub_cat, final_slug, row_id))
            
            if cur.fetchone() is None:
                break # Unique found
            
            # Collision: Append number
            final_slug = f"{base_new_slug}-{counter}"
            counter += 1
        
        # Only update if the slug actually changes
        if final_slug != old_slug:
            update_sql = "UPDATE man_pages SET slug = ? WHERE id = ?"
            cur.execute(update_sql, (final_slug, row_id))
            updated_count += 1
            logging.info(f"   ✏️  Renamed: '{old_slug}' -> '{final_slug}' (File: {filename})")
    
    conn.commit()
    logging.info(f"--------------------------------------------------")
    logging.info(f"✅ Process Complete. Updated {updated_count} slugs.")
    logging.info(f"--------------------------------------------------")

if __name__ == "__main__":
    if not DB_PATH.exists():
        logging.error(f"Database not found at {DB_PATH}")
        sys.exit(1)
        
    try:
        with sqlite3.connect(DB_PATH) as conn:
            fix_numeric_slugs(conn)
    except sqlite3.Error as e:
        logging.error(f"Database error: {e}")