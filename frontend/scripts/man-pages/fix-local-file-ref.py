import sqlite3
import json
import sys
import logging
from pathlib import Path
from bs4 import BeautifulSoup

# Configuration Paths
BASE_DIR = Path(__file__).resolve().parent.parent.parent
DB_PATH = BASE_DIR / "db" / "all_dbs" / "man-pages-db.db"
LOG_FILE = BASE_DIR / "local_link_fix_log.log"

# Setup Logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(levelname)s - %(message)s",
    handlers=[
        logging.FileHandler(LOG_FILE),
        logging.StreamHandler(sys.stdout)
    ]
)

def disable_local_links(html_content):
    """
    Parses HTML, finds <a> tags with href starting with 'file:',
    and converts them to <span> with data-href.
    Returns: (modified_html, boolean_did_modify)
    """
    if not html_content or not isinstance(html_content, str):
        return html_content, False

    soup = BeautifulSoup(html_content, 'html.parser')
    modified = False

    # Find all anchor tags with href attribute
    for a in soup.find_all('a', href=True):
        href = a['href'].strip()
        
        # Check for file protocol (case-insensitive)
        # This catches file:///usr, file://localhost, file:/etc, etc.
        if href.lower().startswith('file:'):
            # Create new span tag
            new_tag = soup.new_tag("span")
            new_tag.string = a.text if a.text else ""
            
            # Copy classes if they exist
            if a.get('class'):
                new_tag['class'] = a['class']
                
            # Move href to data-href (preserve the bad link for reference)
            new_tag['data-href'] = href
            
            # Add a class to style these if needed later
            existing_classes = new_tag.get('class', [])
            new_tag['class'] = existing_classes + ['disabled-local-link']
            
            # Replace the anchor with the span
            a.replace_with(new_tag)
            modified = True

    if modified:
        return str(soup), True
    
    return html_content, False

def fix_local_file_references(conn):
    cur = conn.cursor()
    
    print("🔍 Searching for pages containing 'file:/' links...")
    
    # 1. Find candidate rows - Searching for file:/ pattern as requested
    query = """
        SELECT id, slug, content 
        FROM man_pages 
        WHERE content LIKE '%file:/%'
    """
    cur.execute(query)
    candidates = cur.fetchall()
    
    if not candidates:
        logging.info("✅ No pages with local file links found.")
        return

    logging.info(f"Found {len(candidates)} candidates. Scanning for actual links...")
    
    total_fixes = 0
    
    for row in candidates:
        row_id, slug, raw_content = row
        
        try:
            content_dict = json.loads(raw_content)
        except (json.JSONDecodeError, TypeError):
            logging.error(f"   ❌ Invalid JSON content for ID {row_id} ({slug})")
            continue

        db_needs_update = False
        
        # 2. Iterate through content sections
        for key, html_snippet in content_dict.items():
            new_html, was_changed = disable_local_links(html_snippet)
            
            if was_changed:
                content_dict[key] = new_html
                db_needs_update = True
                logging.info(f"   🛠️  Fixed local file link in section '{key}' of page '{slug}'")

        # 3. Update DB if changes were made
        if db_needs_update:
            update_sql = "UPDATE man_pages SET content = ? WHERE id = ?"
            cur.execute(update_sql, (json.dumps(content_dict), row_id))
            total_fixes += 1

    conn.commit()
    logging.info("-" * 50)
    logging.info(f"✅ Process Complete. Modified {total_fixes} pages.")
    logging.info("-" * 50)

if __name__ == "__main__":
    if not DB_PATH.exists():
        logging.error(f"Database not found at {DB_PATH}")
        sys.exit(1)
        
    try:
        with sqlite3.connect(DB_PATH) as conn:
            fix_local_file_references(conn)
    except sqlite3.Error as e:
        logging.error(f"Database error: {e}")