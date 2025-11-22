#!/usr/bin/env python3
"""
Build a SQLite database from man page markdown files and verify contents.

- Scans scripts/man-pages/*/* for markdown files
- Creates SQLite DB at db/all_dbs/man-pages-db.db
- Fixes slug generation (No timestamps, smart fallbacks)
- Handles parallel processing constraints
"""

import json
import sqlite3
import yaml
import re
import multiprocessing as mp
import logging
from datetime import datetime
from pathlib import Path
from typing import Dict, Any, List, Tuple

# === CONFIGURATION ===
BASE_DIR = Path(__file__).parent
# Adjust this path if necessary to match your exact folder structure
MD_DIR = Path("/home/lince/ubuntu-sitemaps/organized")
DB_PATH = Path(__file__).parent.parent.parent / "db" / "all_dbs" / "man-pages-db.db"
LOG_FILE = BASE_DIR / "build_log.log"

addLimit = False  # Set to True to only insert LIMIT_COUNT records for testing
LIMIT_COUNT = 100


# === LOGGING ===
def setup_logging():
    """Setup logging to file and console."""
    logging.basicConfig(
        level=logging.INFO,
        format="%(asctime)s - %(levelname)s - %(message)s",
        handlers=[
            logging.FileHandler(LOG_FILE, mode="w", encoding="utf-8"),
            logging.StreamHandler(),
        ],
    )
    return logging.getLogger(__name__)


logger = setup_logging()


# === CORE LOGIC ===

def generate_slug(title: str, filename: str, main_cat: str, sub_cat: str) -> str:
    """
    Generate a URL-friendly slug.
    Priority: Cleaned Title -> Cleaned Filename -> Category-Filename combination.
    NO hashes, NO timestamps.
    """
    def clean_text(text):
        if not text: return ""
        # Extract command part if " — " or " - " exists
        if " — " in text: text = text.split(" — ")[0]
        elif " - " in text: text = text.split(" - ")[0]
        
        # Lowercase and replace special chars with hyphens
        slug = re.sub(r"[^\w\s-]", "-", text.strip().lower())
        return re.sub(r"[-\s]+", "-", slug).strip("-")

    # 1. Try the Title
    slug = clean_text(title)

    # 2. If Title resulted in empty/too short slug, try Filename (removing extension)
    if not slug or len(slug) < 2:
        # Remove .md and man section (e.g., "grep.1.md" -> "grep")
        clean_name = filename.replace(".md", "")
        clean_name = re.sub(r"\.\d+$", "", clean_name) 
        slug = clean_text(clean_name)

    # 3. If still empty/short, use Category + Subcategory + Filename
    if not slug or len(slug) < 2:
        slug = clean_text(f"{main_cat}-{sub_cat}-{filename}")

    # Truncate if massive (but keep it readable)
    if len(slug) > 80:
        slug = slug[:80].rstrip("-")

    return slug


def generate_unique_slug(
    conn: sqlite3.Connection, 
    base_slug: str, 
    main_category: str, 
    sub_category: str,
    slug_tracker: dict = None
) -> str:
    """
    Generate unique slug by appending -2, -3.
    Checks BOTH the Database and the Local Tracker (for parallel safety).
    """
    cur = conn.cursor()
    unique_slug = base_slug
    counter = 2
    
    # Get locally pending slugs for this category
    category_key = f"{main_category}/{sub_category}"
    local_slugs = set()
    if slug_tracker and category_key in slug_tracker:
        local_slugs = slug_tracker[category_key]

    while True:
        # 1. Check Local Tracker (Pending inserts in other threads)
        if unique_slug in local_slugs:
            unique_slug = f"{base_slug}-{counter}"
            counter += 1
            continue

        # 2. Check Database (Committed data)
        cur.execute(
            "SELECT COUNT(*) FROM man_pages WHERE main_category = ? AND sub_category = ? AND slug = ?",
            (main_category, sub_category, unique_slug),
        )

        if cur.fetchone()[0] == 0:
            return unique_slug

        # Conflict found, increment and retry
        unique_slug = f"{base_slug}-{counter}"
        counter += 1
        
        # Safety break
        if counter > 10000:
            logger.error(f"⚠️ Slug generation gave up on {base_slug} after 10,000 tries. Using raw counter.")
            return f"{base_slug}-{counter}"


def sanitize_yaml_content(yaml_str: str) -> str:
    """Sanitize YAML content to fix common parsing issues with multi-line strings and HTML."""
    lines = yaml_str.split("\n")
    sanitized_lines = []
    in_multiline_value = False
    current_key = None
    multiline_content = []

    for i, line in enumerate(lines):
        stripped = line.strip()

        # Skip empty lines when not in multiline
        if not stripped and not in_multiline_value:
            sanitized_lines.append(line)
            continue

        # Check if we're starting or continuing a multi-line value
        if ":" in line and not in_multiline_value:
            key_part, value_part = line.split(":", 1)
            key = key_part.strip()
            value = value_part.strip()

            # Check if this starts a problematic multi-line value
            if value.startswith('"') and (not value.endswith('"') or value.count('"') == 1):
                in_multiline_value = True
                current_key = key
                multiline_content = [value]
                continue
            elif value.startswith("<") or "catmandu" in value.lower() or "pre>" in value:
                # Likely contains HTML or complex content - make it literal
                escaped_value = value.replace('"', '\\"').replace("\n", "\\n")
                sanitized_lines.append(f'{key}: "{escaped_value}"')
                continue
            else:
                # Normal key-value pair
                if value and not value.startswith('"') and not value.startswith("'"):
                    if any(char in value for char in ['"', "'", "\n", "\r", "\t", "\\", "<", ">", "&"]):
                        value = value.replace('"', '\\"')
                        value = f'"{value}"'
                sanitized_lines.append(f"{key}: {value}")
                continue

        elif in_multiline_value:
            multiline_content.append(line)
            if stripped.endswith('"') and stripped.count('"') % 2 == 1:
                # Found closing quote
                full_content = "\n".join(multiline_content)
                if full_content.startswith('"'): full_content = full_content[1:]
                if full_content.endswith('"'): full_content = full_content[:-1]

                sanitized_lines.append(f"{current_key}: |")
                for content_line in full_content.split("\n"):
                    sanitized_lines.append(f"  {content_line}")

                in_multiline_value = False
                current_key = None
                multiline_content = []
                continue
            continue
        else:
            sanitized_lines.append(line)

    if in_multiline_value and multiline_content:
        full_content = "\n".join(multiline_content)
        if full_content.startswith('"'): full_content = full_content[1:]
        full_content = full_content.rstrip('"').strip()
        sanitized_lines.append(f"{current_key}: |")
        for content_line in full_content.split("\n"):
            sanitized_lines.append(f"  {content_line}")

    return "\n".join(sanitized_lines)


def parse_markdown_frontmatter(md_file: Path) -> Tuple[Dict[str, Any], str]:
    """Parse YAML frontmatter from markdown file with robust error handling."""
    try:
        content = md_file.read_text(encoding="utf-8")
    except UnicodeDecodeError:
        try:
            content = md_file.read_text(encoding="latin-1")
        except Exception:
            raise ValueError(f"Cannot read file {md_file} - encoding issues")

    if not content.startswith("---"):
        raise ValueError(f"No frontmatter found in {md_file}")

    lines = content.split("\n")
    frontmatter_lines = []
    body_lines = []
    in_frontmatter = False
    frontmatter_ended = False

    for i, line in enumerate(lines):
        if i == 0 and line.strip() == "---":
            in_frontmatter = True
            continue
        elif in_frontmatter and line.strip() == "---":
            frontmatter_ended = True
            body_lines = lines[i + 1 :]
            break
        elif in_frontmatter:
            frontmatter_lines.append(line)

    if not frontmatter_ended:
        raise ValueError(f"Invalid frontmatter in {md_file} - no closing ---")

    frontmatter_str = "\n".join(frontmatter_lines)
    body = "\n".join(body_lines).strip()

    try:
        frontmatter = yaml.safe_load(frontmatter_str)
        if frontmatter is None: frontmatter = {}
        return frontmatter, body
    except yaml.YAMLError:
        try:
            sanitized_yaml = sanitize_yaml_content(frontmatter_str)
            frontmatter = yaml.safe_load(sanitized_yaml)
            if frontmatter is None: frontmatter = {}
            return frontmatter, body
        except Exception:
            raise ValueError(f"YAML parsing failed for {md_file}")


def process_markdown_file(md_file: Path) -> Tuple[str, str, str, str, str, str] | None:
    """Process a single markdown file and return data tuple or None if failed."""
    try:
        frontmatter, body = parse_markdown_frontmatter(md_file)

        parts = md_file.parts
        main_category = parts[-3]
        sub_category = parts[-2]

        # Robust title extraction
        title = frontmatter.get("title")
        if not title or not str(title).strip():
            title = md_file.stem.replace(".md", "")

        main_cat = frontmatter.get("main_category", main_category)
        sub_cat = frontmatter.get("sub_category", sub_category)

        if sub_cat:
            sub_cat = sub_cat.strip().lower().replace(" ", "-")

        content_dict = frontmatter.get("content", {})
        filename = md_file.name

        # --- USE SMART SLUG GENERATION ---
        slug = generate_slug(title, filename, main_cat, sub_cat)
        
        content_json = json.dumps(content_dict)
        
        # Optional debug
        # print(f"Processed: {filename} | Slug: {slug}")

        return (main_cat, sub_cat, title, slug, filename, content_json)

    except Exception as e:
        # print(f"✗ Failed to process {md_file}: {e} (file will be skipped)")
        return None


def process_markdown_batch(file_batch: List[Path]) -> List[Tuple[str, str, str, str, str, str]]:
    """Process a batch of markdown files in parallel worker."""
    results = []
    for md_file in file_batch:
        result = process_markdown_file(md_file)
        if result:
            results.append(result)
    return results


# === DATABASE MANAGEMENT ===

def ensure_schema(conn: sqlite3.Connection) -> None:
    """Create database schema with tables and indexes."""
    cur = conn.cursor()

    # Create category table
    cur.execute("""
        CREATE TABLE IF NOT EXISTS category (
            name TEXT PRIMARY KEY,
            count INTEGER NOT NULL DEFAULT 0,
            description TEXT DEFAULT '',
            keywords TEXT DEFAULT '[]',
            path TEXT DEFAULT ''
        );
    """)

    # Create sub_category table
    cur.execute("""
        CREATE TABLE IF NOT EXISTS sub_category (
            name TEXT PRIMARY KEY,
            count INTEGER NOT NULL DEFAULT 0,
            description TEXT DEFAULT '',
            keywords TEXT DEFAULT '[]',
            path TEXT DEFAULT ''
        );
    """)

    # Create man_pages table
    cur.execute("""
        CREATE TABLE IF NOT EXISTS man_pages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            main_category TEXT NOT NULL,
            sub_category TEXT NOT NULL,
            title TEXT NOT NULL,
            slug TEXT NOT NULL,
            filename TEXT NOT NULL,
            content TEXT DEFAULT '{}'
        );
    """)

    # Create overview table
    cur.execute("""
        CREATE TABLE IF NOT EXISTS overview (
            id INTEGER PRIMARY KEY CHECK(id = 1),
            total_count INTEGER NOT NULL DEFAULT 0
        );
    """)

    # Create indexes
    cur.execute("CREATE INDEX IF NOT EXISTS idx_man_pages_main_category ON man_pages(main_category);")
    cur.execute("CREATE INDEX IF NOT EXISTS idx_man_pages_sub_category ON man_pages(sub_category);")
    cur.execute("CREATE INDEX IF NOT EXISTS idx_man_pages_category_sub ON man_pages(main_category, sub_category);")
    cur.execute("CREATE UNIQUE INDEX IF NOT EXISTS idx_man_pages_filename ON man_pages(filename);")
    cur.execute("CREATE UNIQUE INDEX IF NOT EXISTS idx_man_pages_slug ON man_pages(main_category, sub_category, slug);")

    conn.commit()
    print("✓ Database schema created")


def populate_category_and_overview(conn: sqlite3.Connection) -> None:
    """Populate helper tables from man_pages data."""
    cur = conn.cursor()

    cur.execute("DELETE FROM category;")
    cur.execute("DELETE FROM sub_category;")
    cur.execute("DELETE FROM overview;")

    cur.execute("""
        INSERT INTO category (name, count, description, keywords, path)
        SELECT main_category, COUNT(*), 'Category for ' || main_category, json_array(main_category), '/' || main_category
        FROM man_pages GROUP BY main_category;
    """)

    cur.execute("""
        INSERT INTO sub_category (name, count, description, keywords, path)
        SELECT sub_category, COUNT(*), 'Subcategory for ' || sub_category, json_array(sub_category), '/' || sub_category
        FROM man_pages GROUP BY sub_category;
    """)

    cur.execute("SELECT COUNT(*) FROM man_pages;")
    total_count = cur.fetchone()[0]
    cur.execute("INSERT INTO overview (id, total_count) VALUES (1, ?);", (total_count,))

    conn.commit()
    print("✓ Populated helper tables")


def load_markdown_files(conn: sqlite3.Connection) -> Tuple[int, int]:
    """Main loop: Scan, Process, and Insert files."""
    if not MD_DIR.exists():
        raise SystemExit(f"Markdown directory not found: {MD_DIR}")

    print("🔍 Scanning for markdown files...")
    all_md_files = []
    
    # Recursive scan through organized folders
    for main_cat_dir in [d for d in MD_DIR.iterdir() if d.is_dir() and not d.name.startswith(".")]:
        for sub_cat_dir in [d for d in main_cat_dir.iterdir() if d.is_dir() and not d.name.startswith(".")]:
            all_md_files.extend(list(sub_cat_dir.glob("*.md")))

    total_files = len(all_md_files)
    print(f"📁 Found {total_files} markdown files")

    if addLimit:
        all_md_files = all_md_files[:LIMIT_COUNT]
        print(f"⚠️  addLimit is True: Processing first {LIMIT_COUNT} files")

    if total_files == 0:
        return 0, 0

    num_processes = min(8, mp.cpu_count(), max(1, total_files // 1000))
    print(f"🚀 Using {num_processes} parallel processes")

    # Batch processing
    batch_size = max(1, len(all_md_files) // num_processes)
    file_batches = [all_md_files[i : i + batch_size] for i in range(0, len(all_md_files), batch_size)]

    print("⚡ Processing files in parallel...")
    all_results = []
    with mp.Pool(processes=num_processes) as pool:
        batch_results = pool.map(process_markdown_batch, file_batches)
        for results in batch_results:
            all_results.extend(results)

    print("💾 Inserting into database...")
    logger.info("💾 Starting database insertion...")
    cur = conn.cursor()
    inserted = 0
    slug_tracker = {} # Tracks usage for parallel batch consistency

    for result in all_results:
        main_cat, sub_cat, title, base_slug, filename, content_json = result
        try:
            # Check existing
            cur.execute("SELECT 1 FROM man_pages WHERE filename = ? AND main_category = ? AND sub_category = ? LIMIT 1;", 
                        (filename, main_cat, sub_cat))
            if cur.fetchone():
                continue

            category_key = f"{main_cat}/{sub_cat}"
            if category_key not in slug_tracker:
                slug_tracker[category_key] = set()

            # Generate unique slug using DB + Local Tracker
            final_slug = generate_unique_slug(conn, base_slug, main_cat, sub_cat, slug_tracker)
            
            # Record usage in local tracker
            slug_tracker[category_key].add(final_slug)

            cur.execute("""
                INSERT INTO man_pages (main_category, sub_category, title, slug, filename, content)
                VALUES (?, ?, ?, ?, ?, json(?));
            """, (main_cat, sub_cat, title, final_slug, filename, content_json))
            
            inserted += 1
            if inserted % 5000 == 0:
                print(f"  💾 Inserted {inserted:,} records...")

        except Exception as e:
            logger.error(f"✗ Failed to insert {filename}: {e}")

    conn.commit()
    logger.info(f"✅ Successfully inserted {inserted:,} files")
    return inserted, total_files


def process_failed_files(conn: sqlite3.Connection) -> int:
    """Process files that failed previously. Uses the new safe slug logic."""
    if not MD_DIR.exists(): return 0
    logger.info("🔧 Checking for missed files...")

    cur = conn.cursor()
    cur.execute("SELECT filename FROM man_pages")
    existing_files = {row[0] for row in cur.fetchall()}

    all_md_files = []
    for main_cat_dir in [d for d in MD_DIR.iterdir() if d.is_dir() and not d.name.startswith(".")]:
        for sub_cat_dir in [d for d in main_cat_dir.iterdir() if d.is_dir() and not d.name.startswith(".")]:
            all_md_files.extend(list(sub_cat_dir.glob("*.md")))

    missing_files = [f for f in all_md_files if f.name not in existing_files]
    logger.info(f"Found {len(missing_files)} files not in database.")

    inserted = 0
    slug_tracker = {} 

    for md_file in missing_files:
        try:
            result = process_markdown_file(md_file)
            if result:
                main_cat, sub_cat, title, base_slug, filename, content_json = result
                
                category_key = f"{main_cat}/{sub_cat}"
                if category_key not in slug_tracker: slug_tracker[category_key] = set()

                final_slug = generate_unique_slug(conn, base_slug, main_cat, sub_cat, slug_tracker)
                slug_tracker[category_key].add(final_slug)

                cur.execute("""
                    INSERT INTO man_pages (main_category, sub_category, title, slug, filename, content)
                    VALUES (?, ?, ?, ?, ?, json(?));
                """, (main_cat, sub_cat, title, final_slug, filename, content_json))
                inserted += 1
        except Exception as e:
            logger.error(f"✗ Retry failed for {md_file}: {e}")

    conn.commit()
    return inserted


def verify(conn: sqlite3.Connection) -> None:
    """Verify database contents."""
    cur = conn.cursor()
    cur.execute("SELECT COUNT(*) FROM man_pages;")
    print(f"\nTotal man pages: {cur.fetchone()[0]}")
    
    print("\nTop categories:")
    cur.execute("SELECT main_category, COUNT(*) as c FROM man_pages GROUP BY main_category ORDER BY c DESC LIMIT 5;")
    for row in cur.fetchall(): print(f"  {row[0]}: {row[1]}")

    print("\nSample Entry:")
    cur.execute("SELECT title, slug, filename FROM man_pages ORDER BY id DESC LIMIT 1;")
    row = cur.fetchone()
    if row: print(f"  {row[0]} (Slug: {row[1]}) File: {row[2]}")


def main() -> None:
    DB_PATH.parent.mkdir(parents=True, exist_ok=True)
    print(f"Building SQLite database at {DB_PATH}")
    
    with sqlite3.connect(DB_PATH) as conn:
        ensure_schema(conn)
        inserted, files = load_markdown_files(conn)
        
        if inserted < files * 0.98:
            print("Running cleanup pass for missed files...")
            process_failed_files(conn)
            
        populate_category_and_overview(conn)
        verify(conn)

    print(f"\n✓ Database build complete.")
    print(f"📝 Log: {LOG_FILE}")


if __name__ == "__main__":
    main()