import sqlite3
import json
import sys
import logging
from pathlib import Path
from urllib.parse import urlparse
from bs4 import BeautifulSoup

# Configuration Paths
BASE_DIR = Path(__file__).resolve().parent.parent.parent
DB_PATH = BASE_DIR / "db" / "all_dbs" / "man-pages-db.db"
LOG_FILE = BASE_DIR / "link_fix_log.log"
INPUT_JSON = "man-page-not-found-pages.json" # Assuming you save your 404 list here

# Setup Logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(levelname)s - %(message)s",
    handlers=[
        logging.FileHandler(LOG_FILE),
        logging.StreamHandler(sys.stdout)
    ]
)

def load_404_data(filename):
    try:
        with open(filename, 'r') as f:
            return json.load(f)
    except FileNotFoundError:
        logging.error(f"Input file '{filename}' not found.")
        sys.exit(1)

def extract_page_info(url):
    """
    Extracts main_category, sub_category, and slug from the referrer URL.
    Assumes URL structure: .../man-pages/{main}/{sub}/{slug}/
    """
    parsed = urlparse(url)
    path = parsed.path.strip('/')
    parts = path.split('/')
    
    # Based on your example: freedevtools/man-pages/device-files/graphics-devices/m-gif/
    # slug = -1, sub = -2, main = -3
    if len(parts) < 3:
        return None, None, None
        
    slug = parts[-1]
    sub_category = parts[-2]
    main_category = parts[-3]
    
    return main_category, sub_category, slug

def disable_link_in_html(html_content, target_filename):
    """
    Parses HTML, finds <a> tags pointing to target_filename,
    and converts them to <span> with data-href.
    Returns: (modified_html, boolean_did_modify)
    """
    if not html_content or not isinstance(html_content, str):
        return html_content, False

    soup = BeautifulSoup(html_content, 'html.parser')
    modified = False

    # Find all anchor tags
    for a in soup.find_all('a', href=True):
        href = a['href']
        
        # Check if this link points to our 404 target
        # We check if the href *ends with* the filename to handle relative paths like "../man1/file.html"
        if href.endswith(target_filename):
            # Create new span tag
            new_tag = soup.new_tag("span")
            new_tag.string = a.text if a.text else ""
            
            # Copy classes if they exist
            if a.get('class'):
                new_tag['class'] = a['class']
                
            # Move href to data-href
            new_tag['data-href'] = href
            
            # Replace the anchor with the span
            a.replace_with(new_tag)
            modified = True

    if modified:
        # Return string, ensuring we don't add extra html/body tags if they weren't there
        return str(soup), True
    
    return html_content, False

def fix_broken_links(conn, error_list):
    cur = conn.cursor()
    total_fixes = 0

    print(f"🔍 Processing {len(error_list)} reported 404 errors...")

    for error_obj in error_list:
        broken_url = error_obj.get('404_url')
        referrers = error_obj.get('referrers', [])
        
        # Extract the specific filename causing the 404 (e.g., "medcon.1.html")
        target_filename = Path(urlparse(broken_url).path).name
        
        if not target_filename:
            continue

        for referrer in referrers:
            main_cat, sub_cat, slug = extract_page_info(referrer)
            
            if not slug:
                logging.warning(f"Could not parse referrer: {referrer}")
                continue

            # 1. Fetch the Content from DB
            query = """
                SELECT id, content 
                FROM man_pages 
                WHERE main_category = ? AND sub_category = ? AND slug = ?
            """
            cur.execute(query, (main_cat, sub_cat, slug))
            row = cur.fetchone()

            if not row:
                logging.warning(f"   ⚠️  Page not found in DB: {slug} (Cat: {main_cat}/{sub_cat})")
                continue

            row_id, raw_content = row
            
            try:
                content_dict = json.loads(raw_content)
            except (json.JSONDecodeError, TypeError):
                logging.error(f"   ❌ Invalid JSON content for ID {row_id}")
                continue

            # 2. Iterate through content sections and modify HTML
            db_needs_update = False
            
            for key, html_snippet in content_dict.items():
                new_html, was_changed = disable_link_in_html(html_snippet, target_filename)
                if was_changed:
                    content_dict[key] = new_html
                    db_needs_update = True
                    logging.info(f"   🛠️  Fixed link to '{target_filename}' in section '{key}' of page '{slug}'")

            # 3. Update DB if changes were made
            if db_needs_update:
                update_sql = "UPDATE man_pages SET content = ? WHERE id = ?"
                cur.execute(update_sql, (json.dumps(content_dict), row_id))
                total_fixes += 1
            else:
                logging.info(f"   ℹ️  No matching link found in '{slug}' content (maybe already fixed?)")

    conn.commit()
    logging.info("-" * 50)
    logging.info(f"✅ Process Complete. Modified {total_fixes} pages.")
    logging.info("-" * 50)

if __name__ == "__main__":
    if not DB_PATH.exists():
        logging.error(f"Database not found at {DB_PATH}")
        sys.exit(1)
    
    # Ensure you create this file with your JSON data before running
    if not Path(INPUT_JSON).exists():
        logging.error(f"Input file {INPUT_JSON} not found. Please create it with your 404 data.")
        sys.exit(1)

    data = load_404_data(INPUT_JSON)
    
    try:
        with sqlite3.connect(DB_PATH) as conn:
            fix_broken_links(conn, data)
    except sqlite3.Error as e:
        logging.error(f"Database error: {e}")