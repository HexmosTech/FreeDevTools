import sqlite3
import json
import sys
import logging
from pathlib import Path

# Configuration Paths
BASE_DIR = Path(__file__).resolve().parent.parent.parent
DB_PATH = BASE_DIR / "db" / "all_dbs" / "man-pages-db.db"
LOG_FILE = BASE_DIR / "build_log.log"
JSON_CONFIG_FILE = "category.json"

# Setup Logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(levelname)s - %(message)s",
    handlers=[
        logging.FileHandler(LOG_FILE),
        logging.StreamHandler(sys.stdout)
    ]
)

def load_category_mapping(filename):
    """Loads the category mapping from an external JSON file."""
    try:
        with open(filename, 'r') as f:
            logging.info(f"Loaded category mapping from {filename}")
            return json.load(f)
    except FileNotFoundError:
        logging.error(f"Configuration file '{filename}' not found.")
        sys.exit(1)
    except json.JSONDecodeError as e:
        logging.error(f"Failed to parse JSON in '{filename}': {e}")
        sys.exit(1)

def populate_category_and_overview(conn: sqlite3.Connection) -> None:
    """
    Refreshes the helper tables (category, sub_category, overview) based on the
    current state of the man_pages table.
    """
    cur = conn.cursor()
    logging.info("Refreshing helper tables (category, sub_category, overview)...")

    try:
        # 1. Clear existing helper data
        cur.execute("DELETE FROM category;")
        cur.execute("DELETE FROM sub_category;")
        cur.execute("DELETE FROM overview;")

        # 2. Re-populate Categories
        cur.execute("""
            INSERT INTO category (name, count, description, keywords, path)
            SELECT main_category, COUNT(*), 'Category for ' || main_category, json_array(main_category), '/' || main_category
            FROM man_pages GROUP BY main_category;
        """)

        # 3. Re-populate Sub-Categories
        cur.execute("""
            INSERT INTO sub_category (name, count, description, keywords, path)
            SELECT sub_category, COUNT(*), 'Subcategory for ' || sub_category, json_array(sub_category), '/' || sub_category
            FROM man_pages GROUP BY sub_category;
        """)

        # 4. Re-populate Overview
        # Note: Populating with detailed breakdown per main category
        cur.execute("""
            INSERT INTO overview (total_count)
            SELECT COUNT(*) FROM man_pages;
        """)
        
        conn.commit()
        logging.info("Helper tables refreshed successfully.")
    except sqlite3.Error as e:
        logging.error(f"Database error during refresh: {e}")
        conn.rollback()

def validate_categories_exist(conn: sqlite3.Connection, mapping: dict) -> bool:
    """
    Soft Validation: Checks which categories exist.
    Logs warnings for missing ones but allows execution to proceed.
    """
    logging.info("--------------------------------------------------")
    logging.info("🔍 Starting Database Validation...")
    
    main_cat = mapping.get("category")
    if not main_cat:
        logging.error("❌ JSON is missing the top-level 'category' key.")
        return False
        
    cur = conn.cursor()
    
    # 1. Get all known subcategories for this main category from the DB
    cur.execute("SELECT DISTINCT sub_category FROM man_pages WHERE main_category = ?", (main_cat,))
    db_subcats = set(row[0] for row in cur.fetchall())
    
    if not db_subcats:
        logging.error(f"❌ No pages found in database for main category '{main_cat}'.")
        return False

    # 2. Iterate through JSON and check against DB
    missing_count = 0
    for group in mapping.get('groups', []):
        alternates = group.get('alternates', [])
        for alt in alternates:
            if alt not in db_subcats:
                # We just warn here, we do NOT return False
                logging.warning(f"   ⚠️  Category '{alt}' listed in JSON not found in DB. It will be skipped.")
                missing_count += 1
                
    if missing_count > 0:
        logging.info(f"ℹ️  Validation finished. {missing_count} categories were missing and will be ignored.")
    else:
        logging.info("✅ Validation Passed. All categories exist.")
        
    logging.info("--------------------------------------------------")
    return True

def merge_device_file_subcategories(conn: sqlite3.Connection, mapping: dict) -> None:
    """
    Updates the 'man_pages' table to merge 'alternate' subcategories 
    into their 'common' parent category.
    """
    cur = conn.cursor()
    total_changes = 0
    total_renames = 0
    
    logging.info("Starting subcategory merge execution...")

    try:
        main_cat = mapping.get("category")

        # Iterate through each group in the JSON mapping
        for group in mapping.get('groups', []):
            target_category = group['common']
            alternates = group.get('alternates', [])
            
            if not alternates:
                continue
                
            # --- FILTERING STEP ---
            # Only process alternates that actually exist in the DB
            placeholders = ', '.join(['?'] * len(alternates))
            
            # 1. Find which of these alternates actually exist in the DB
            check_existence_sql = f"""
                SELECT DISTINCT sub_category 
                FROM man_pages 
                WHERE main_category = ? AND sub_category IN ({placeholders})
            """
            params = [main_cat] + alternates
            cur.execute(check_existence_sql, params)
            existing_alternates = [row[0] for row in cur.fetchall()]

            # If none of the alternates exist, skip this group entirely
            if not existing_alternates:
                continue

            # 2. Now fetch the actual rows for the VALID alternates
            valid_placeholders = ', '.join(['?'] * len(existing_alternates))
            fetch_sql = f"""
                SELECT id, slug, main_category, sub_category
                FROM man_pages
                WHERE main_category = ? AND sub_category IN ({valid_placeholders})
            """
            fetch_params = [main_cat] + existing_alternates
            cur.execute(fetch_sql, fetch_params)
            candidates = cur.fetchall()
            
            if not candidates:
                continue

            logging.info(f"Processing group '{target_category}': Merging {len(candidates)} pages from {existing_alternates}...")

            group_changes = 0
            
            # Process each file individually to handle conflicts
            for row_id, current_slug, row_main_cat, old_sub_cat in candidates:
                
                final_slug = current_slug
                counter = 1
                needs_rename = False

                # Conflict Check Loop
                while True:
                    check_sql = """
                        SELECT 1 FROM man_pages 
                        WHERE main_category = ? 
                        AND sub_category = ? 
                        AND slug = ?
                        AND id != ?
                    """
                    cur.execute(check_sql, (row_main_cat, target_category, final_slug, row_id))
                    
                    if cur.fetchone() is None:
                        break # No conflict
                    
                    # Conflict found, increment slug
                    final_slug = f"{current_slug}-{counter}"
                    counter += 1
                    needs_rename = True

                # Perform the Update
                update_sql = """
                    UPDATE man_pages 
                    SET sub_category = ?, slug = ?
                    WHERE id = ?
                """
                cur.execute(update_sql, (target_category, final_slug, row_id))
                group_changes += 1

                if needs_rename:
                    total_renames += 1
                    logging.info(f"   • Renamed: '{current_slug}' -> '{final_slug}'")

            total_changes += group_changes
            if group_changes > 0:
                logging.info(f"  - Merged {group_changes} pages into '{target_category}'")

        conn.commit()
        logging.info(f"Merge complete. Total Moved: {total_changes}, Total Renamed: {total_renames}")

        # Refresh aggregate tables
        populate_category_and_overview(conn)

    except sqlite3.Error as e:
        logging.error(f"Database error during merge: {e}")
        conn.rollback()
        sys.exit(1)

if __name__ == "__main__":
    # Check if DB exists
    if not DB_PATH.exists():
        logging.error(f"Database not found at {DB_PATH}")
        sys.exit(1)

    # 1. Load Configuration
    category_mapping = load_category_mapping(JSON_CONFIG_FILE)

    # 2. Connect to Real DB
    try:
        logging.info(f"Connecting to database: {DB_PATH}")
        with sqlite3.connect(DB_PATH) as db_conn:
            
            # 3. VALIDATE (Soft Check)
            if not validate_categories_exist(db_conn, category_mapping):
                logging.error("Critical validation error (missing main category). Aborting.")
                sys.exit(1)

            # 4. EXECUTE MERGE
            merge_device_file_subcategories(db_conn, category_mapping)
            
    except sqlite3.Error as e:
        logging.error(f"Critical database connection error: {e}")
        sys.exit(1)