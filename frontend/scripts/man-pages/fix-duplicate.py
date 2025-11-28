import sqlite3
import json
import sys
import logging
from pathlib import Path
from urllib.parse import urlparse, unquote

# Configuration Paths
BASE_DIR = Path(__file__).resolve().parent.parent.parent
DB_PATH = BASE_DIR / "db" / "all_dbs" / "man-pages-db.db"
LOG_FILE = BASE_DIR / "deduplication_log.log"
INPUT_JSON = "identical.json"  # Save your JSON list to this file

# Setup Logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(levelname)s - %(message)s",
    handlers=[
        logging.FileHandler(LOG_FILE),
        logging.StreamHandler(sys.stdout)
    ]
)

def load_duplicate_data(filename):
    try:
        with open(filename, 'r') as f:
            return json.load(f)
    except FileNotFoundError:
        logging.error(f"Input file '{filename}' not found.")
        sys.exit(1)
    except json.JSONDecodeError:
        logging.error(f"Invalid JSON in '{filename}'.")
        sys.exit(1)

def extract_page_info(url):
    """
    Extracts main_category, sub_category, and slug from the URL.
    Decodes URL entities (e.g. %20 -> space).
    """
    parsed = urlparse(url)
    path = unquote(parsed.path).strip('/')
    parts = path.split('/')
    
    # Expected structure: freedevtools/man-pages/{main}/{sub}/{slug}
    # parts[-1] = slug
    # parts[-2] = sub_category
    # parts[-3] = main_category
    
    if len(parts) < 3:
        return None, None, None
        
    slug = parts[-1]
    sub_category = parts[-2]
    main_category = parts[-3]
    
    return main_category, sub_category, slug

def remove_duplicates(conn, clusters):
    cur = conn.cursor()
    total_deleted = 0
    clusters_processed = 0

    print(f"🔍 Processing {len(clusters)} duplicate clusters...")

    for cluster in clusters:
        urls = cluster.get('urls', [])
        
        if len(urls) < 2:
            continue # No duplicates to remove

        # The first URL is the "Keeper"
        keeper_url = urls[0]
        duplicates = urls[1:]

        logging.info(f"---- Processing Cluster {cluster.get('clusterNo')} ----")
        logging.info(f"✅ Keeping: {keeper_url}")

        for url in duplicates:
            main, sub, slug = extract_page_info(url)
            
            if not slug:
                logging.warning(f"   ⚠️  Could not parse URL: {url}")
                continue

            # Delete the record
            delete_sql = """
                DELETE FROM man_pages 
                WHERE main_category = ? 
                AND sub_category = ? 
                AND slug = ?
            """
            cur.execute(delete_sql, (main, sub, slug))
            
            if cur.rowcount > 0:
                logging.info(f"   🗑️  Deleted: {slug} (Cat: {main}/{sub})")
                total_deleted += cur.rowcount
            else:
                logging.warning(f"   ⚠️  DB Record not found for: {slug} (Cat: {main}/{sub})")

        clusters_processed += 1

    conn.commit()
    logging.info("-" * 50)
    logging.info(f"✅ Process Complete.")
    logging.info(f"   Clusters Processed: {clusters_processed}")
    logging.info(f"   Total Pages Deleted: {total_deleted}")
    logging.info("-" * 50)

if __name__ == "__main__":
    if not DB_PATH.exists():
        logging.error(f"Database not found at {DB_PATH}")
        sys.exit(1)
    
    # Ensure the input file exists
    if not Path(INPUT_JSON).exists():
        logging.error(f"Please save your duplicate list as '{INPUT_JSON}' in this folder.")
        sys.exit(1)

    data = load_duplicate_data(INPUT_JSON)
    
    try:
        with sqlite3.connect(DB_PATH) as conn:
            remove_duplicates(conn, data)
    except sqlite3.Error as e:
        logging.error(f"Database error: {e}")