import sqlite3
import json
import sys
import re
import html
import logging
from pathlib import Path

# Configuration Paths
BASE_DIR = Path(__file__).resolve().parent.parent.parent
DB_PATH = BASE_DIR / "db" / "all_dbs" / "man-pages-db.db"
LOG_FILE = BASE_DIR / "title_fix_log.log"

# Setup Logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(levelname)s - %(message)s",
    handlers=[
        logging.FileHandler(LOG_FILE),
        logging.StreamHandler(sys.stdout)
    ]
)

def create_title_from_filename(filename):
    """
    Generates a clean, human-readable title from a filename as a fallback.
    Example: 'Locale::RecodeData::ISO_10367_BOX.3pm.md' -> 'Locale RecodeData ISO 10367 BOX'
    """
    if not filename:
        return "Untitled Manpage"

    # 1. Remove Extension (.md)
    stem = Path(filename).stem
    
    # 2. Remove section suffix (e.g., .1, .3pm, .3perl) from the end
    # Matches dot + digit + optional alphanumeric chars at the end of the string
    stem = re.sub(r'\.\d+[a-zA-Z0-9]*$', '', stem)
    
    # 3. Replace separators (::, _, ., -) with spaces
    # We generally want to keep the case (e.g. Dpkg vs dpkg) for titles
    cleaned = re.sub(r'[:_.-]+', ' ', stem)
    
    return cleaned.strip()

def clean_and_extract_title(json_str):
    """
    Parses content JSON, extracts 'Name', removes HTML, 
    and returns the full clean title string.
    Returns None if valid title cannot be found.
    """
    try:
        if not json_str:
            return None
            
        data = json.loads(json_str)
        
        # 1. Get the 'Name' field
        raw_name_html = data.get("Name")
        if not raw_name_html:
            return None

        # 2. Remove HTML tags
        clean_text = re.sub(r'<[^>]+>', '', raw_name_html)
        
        # 3. Decode HTML entities
        clean_text = html.unescape(clean_text)
        
        # 4. Normalize Whitespace
        clean_text = " ".join(clean_text.split())
        
        # 5. Check for bad extractions (sometimes extraction gets headers)
        if clean_text.strip().upper() in ['DESCRIPTION', 'NAME', 'SYNOPSIS']:
            return None
            
        return clean_text.strip()

    except json.JSONDecodeError:
        return None
    except Exception as e:
        logging.error(f"Error parsing content: {e}")
        return None

def fix_titles(conn):
    cur = conn.cursor()
    
    # 1. Find rows with missing or bad titles
    print("🔍 Searching for pages with missing, empty, or generic titles...")
    
    query = """
        SELECT id, slug, content, filename, title
        FROM man_pages 
        WHERE title IS NULL 
           OR title = ''
           OR title = 'DESCRIPTION'
           OR title = 'NAME'
    """
    cur.execute(query)
    candidates = cur.fetchall()
    
    if not candidates:
        logging.info("✅ No problematic titles found.")
        return

    logging.info(f"Found {len(candidates)} candidates to fix.")
    
    updated_count = 0
    
    for row in candidates:
        row_id, slug, content, filename, old_title = row
        
        # A. Try to extract from JSON Content first
        new_title = clean_and_extract_title(content)
        
        # B. Fallback to Filename if content extraction failed
        if not new_title:
            new_title = create_title_from_filename(filename)
            source = "filename"
        else:
            source = "content"

        if new_title and new_title != old_title:
            # Update the DB
            update_sql = "UPDATE man_pages SET title = ? WHERE id = ?"
            cur.execute(update_sql, (new_title, row_id))
            updated_count += 1
            logging.info(f"   ✏️  ID {row_id}: '{old_title or 'NULL'}' -> '{new_title}' (Source: {source})")
        else:
            logging.warning(f"   ⚠️  ID {row_id}: Could not determine better title.")
    
    conn.commit()
    logging.info(f"--------------------------------------------------")
    logging.info(f"✅ Process Complete. Updated {updated_count} titles.")
    logging.info(f"--------------------------------------------------")

if __name__ == "__main__":
    if not DB_PATH.exists():
        logging.error(f"Database not found at {DB_PATH}")
        sys.exit(1)
        
    try:
        with sqlite3.connect(DB_PATH) as conn:
            fix_titles(conn)
    except sqlite3.Error as e:
        logging.error(f"Database error: {e}")