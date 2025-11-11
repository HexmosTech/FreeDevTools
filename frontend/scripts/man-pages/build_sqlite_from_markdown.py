#!/usr/bin/env python3
"""
Build a SQLite database from man page markdown files and verify contents.

- Scans scripts/man-pages/*/* for markdown files
- Creates SQLite DB at db/man_pages/man-pages-db.db
- Table: category(name TEXT PRIMARY KEY, count INTEGER, description TEXT, keywords TEXT, path TEXT)
- Table: sub_category(name TEXT PRIMARY KEY, count INTEGER, description TEXT, keywords TEXT, path TEXT)
- Table: man_pages(id INTEGER PRIMARY KEY AUTOINCREMENT, main_category TEXT, sub_category TEXT, title TEXT, slug TEXT, filename TEXT, content TEXT)
- Table: overview(id INTEGER PRIMARY KEY CHECK(id = 1), total_count INTEGER)
- Indexes for performance
- Verifies by printing counts and sample rows
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

BASE_DIR = Path(__file__).parent
MD_DIR = Path('/home/lince/ubuntu-sitemaps/content')
DB_PATH = Path(__file__).parent.parent.parent / "db" / "man_pages" / "man-pages-db.db"
LOG_FILE = BASE_DIR / "build_log.log"

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


def generate_unique_slug(conn: sqlite3.Connection, base_slug: str, main_category: str, sub_category: str) -> str:
    """Generate a unique slug by appending -2, -3, etc. if needed."""
    cur = conn.cursor()
    unique_slug = base_slug
    counter = 2
    
    while True:
        # Check if this slug already exists in the same category/subcategory
        cur.execute(
            "SELECT COUNT(*) FROM man_pages WHERE main_category = ? AND sub_category = ? AND slug = ?",
            (main_category, sub_category, unique_slug)
        )
        
        if cur.fetchone()[0] == 0:
            # Slug is unique
            if unique_slug != base_slug:
                logger.info(f"Generated unique slug: {base_slug} → {unique_slug}")
            return unique_slug
        
        # Slug exists, try next number
        unique_slug = f"{base_slug}-{counter}"
        counter += 1
        
        # Safety check to prevent infinite loop
        if counter > 100:
            logger.error(f"Too many duplicates for slug {base_slug}, using timestamp")
            return f"{base_slug}-{int(datetime.now().timestamp())}"


def process_failed_files(conn: sqlite3.Connection) -> int:
    """Process files that failed due to duplicate slug issues."""
    if not MD_DIR.exists():
        return 0

    logger.info("🔧 Processing files that may have failed due to duplicate slugs...")
    
    # Get all existing filenames from database
    cur = conn.cursor()
    cur.execute("SELECT filename FROM man_pages")
    existing_files = {row[0] for row in cur.fetchall()}
    logger.info(f"Found {len(existing_files)} files already in database")
    
    # Collect all markdown files again
    all_md_files = []
    main_categories = [d for d in MD_DIR.iterdir() if d.is_dir() and not d.name.startswith('.')]
    
    for main_cat_dir in main_categories:
        sub_categories = [d for d in main_cat_dir.iterdir() if d.is_dir() and not d.name.startswith('.')]
        for sub_cat_dir in sub_categories:
            md_files = list(sub_cat_dir.glob("*.md"))
            all_md_files.extend(md_files)
    
    # Find files not in database
    missing_files = []
    for md_file in all_md_files:
        if md_file.name not in existing_files:
            missing_files.append(md_file)
    
    logger.info(f"Found {len(missing_files)} files not in database, processing...")
    
    inserted = 0
    for i, md_file in enumerate(missing_files, 1):
        try:
            result = process_markdown_file(md_file)
            if result:
                main_cat, sub_cat, title, base_slug, filename, content_json = result
                
                # Generate unique slug
                unique_slug = generate_unique_slug(conn, base_slug, main_cat, sub_cat)
                
                # Insert into database
                cur.execute(
                    """
                    INSERT INTO man_pages (main_category, sub_category, title, slug, filename, content)
                    VALUES (?, ?, ?, ?, ?, json(?));
                    """,
                    (main_cat, sub_cat, title, unique_slug, filename, content_json)
                )
                
                inserted += 1
                if base_slug != unique_slug:
                    logger.info(f"✅ Inserted {filename} with unique slug: {unique_slug}")
                else:
                    logger.info(f"✅ Inserted {filename}")
                
                # Show progress
                if i % 100 == 0:
                    logger.info(f"  📄 Processed {i}/{len(missing_files)} missing files, inserted {inserted}")
                
        except Exception as e:
            logger.error(f"✗ Failed to process {md_file}: {e}")
            continue
    
    conn.commit()
    logger.info(f"🎉 Successfully inserted {inserted} previously failed files")
    return inserted


def ensure_schema(conn: sqlite3.Connection) -> None:
    """Create database schema with tables and indexes."""
    cur = conn.cursor()
    
    # Create category table
    cur.execute(
        """
        CREATE TABLE IF NOT EXISTS category (
            name TEXT PRIMARY KEY,
            count INTEGER NOT NULL DEFAULT 0,
            description TEXT DEFAULT '',
            keywords TEXT DEFAULT '[]',
            path TEXT DEFAULT ''
        );
        """
    )
    
    # Create sub_category table
    cur.execute(
        """
        CREATE TABLE IF NOT EXISTS sub_category (
            name TEXT PRIMARY KEY,
            count INTEGER NOT NULL DEFAULT 0,
            description TEXT DEFAULT '',
            keywords TEXT DEFAULT '[]',
            path TEXT DEFAULT ''
        );
        """
    )
    
    # Create man_pages table
    cur.execute(
        """
        CREATE TABLE IF NOT EXISTS man_pages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            main_category TEXT NOT NULL,
            sub_category TEXT NOT NULL,
            title TEXT NOT NULL,
            slug TEXT NOT NULL,
            filename TEXT NOT NULL,
            content TEXT DEFAULT '{}'
        );
        """
    )
    
    # Create overview table
    cur.execute(
        """
        CREATE TABLE IF NOT EXISTS overview (
            id INTEGER PRIMARY KEY CHECK(id = 1),
            total_count INTEGER NOT NULL DEFAULT 0
        );
        """
    )
    
    # Create indexes for performance
    cur.execute("CREATE INDEX IF NOT EXISTS idx_man_pages_main_category ON man_pages(main_category);")
    cur.execute("CREATE INDEX IF NOT EXISTS idx_man_pages_sub_category ON man_pages(sub_category);")
    cur.execute("CREATE INDEX IF NOT EXISTS idx_man_pages_category_sub ON man_pages(main_category, sub_category);")
    cur.execute("CREATE UNIQUE INDEX IF NOT EXISTS idx_man_pages_filename ON man_pages(filename);")
    cur.execute("CREATE UNIQUE INDEX IF NOT EXISTS idx_man_pages_slug ON man_pages(main_category, sub_category, slug);")
    
    conn.commit()
    print("✓ Database schema created")


def load_markdown_files(conn: sqlite3.Connection) -> Tuple[int, int]:
    """Load all markdown files from the man-pages directory structure using parallel processing."""
    if not MD_DIR.exists():
        raise SystemExit(f"Markdown directory not found: {MD_DIR}")
    """Create database schema with tables and indexes."""
    cur = conn.cursor()
    
    # Create category table
    cur.execute(
        """
        CREATE TABLE IF NOT EXISTS category (
            name TEXT PRIMARY KEY,
            count INTEGER NOT NULL DEFAULT 0,
            description TEXT DEFAULT '',
            keywords TEXT DEFAULT '[]',
            path TEXT DEFAULT ''
        );
        """
    )
    
    # Create sub_category table
    cur.execute(
        """
        CREATE TABLE IF NOT EXISTS sub_category (
            name TEXT PRIMARY KEY,
            count INTEGER NOT NULL DEFAULT 0,
            description TEXT DEFAULT '',
            keywords TEXT DEFAULT '[]',
            path TEXT DEFAULT ''
        );
        """
    )
    
    # Create man_pages table
    cur.execute(
        """
        CREATE TABLE IF NOT EXISTS man_pages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            main_category TEXT NOT NULL,
            sub_category TEXT NOT NULL,
            title TEXT NOT NULL,
            slug TEXT NOT NULL,
            filename TEXT NOT NULL,
            content TEXT DEFAULT '{}'
        );
        """
    )
    
    # Create overview table
    cur.execute(
        """
        CREATE TABLE IF NOT EXISTS overview (
            id INTEGER PRIMARY KEY CHECK(id = 1),
            total_count INTEGER NOT NULL DEFAULT 0
        );
        """
    )
    
    # Create indexes for performance
    cur.execute("CREATE INDEX IF NOT EXISTS idx_man_pages_main_category ON man_pages(main_category);")
    cur.execute("CREATE INDEX IF NOT EXISTS idx_man_pages_sub_category ON man_pages(sub_category);")
    cur.execute("CREATE INDEX IF NOT EXISTS idx_man_pages_category_sub ON man_pages(main_category, sub_category);")
    cur.execute("CREATE UNIQUE INDEX IF NOT EXISTS idx_man_pages_filename ON man_pages(filename);")
    cur.execute("CREATE UNIQUE INDEX IF NOT EXISTS idx_man_pages_slug ON man_pages(main_category, sub_category, slug);")
    
    conn.commit()
    print("✓ Database schema created")


def generate_slug(title: str) -> str:
    """Generate a URL-friendly slug from the man page title."""
    # Extract the part before the em dash (—) or hyphen (-)
    if ' — ' in title:
        command_part = title.split(' — ')[0]
    elif ' - ' in title:
        command_part = title.split(' - ')[0] 
    else:
        command_part = title
    
    # Clean and normalize the command part
    # Replace special characters directly with hyphens (more predictable)
    slug = re.sub(r'[^\w\s-]', '-', command_part.strip())  # Replace special chars with hyphens
    slug = re.sub(r'[-\s]+', '-', slug)  # Replace multiple spaces/hyphens with single hyphen
    slug = slug.strip('-').lower()  # Remove leading/trailing hyphens and lowercase
    
    # Handle extremely long slugs by truncating at word boundaries
    max_length = 25  # Reasonable URL length limit
    if len(slug) > max_length:
        # Find the last hyphen before the limit
        truncated = slug[:max_length]
        last_hyphen = truncated.rfind('-')
        if last_hyphen > 12:  # Don't truncate too aggressively
            slug = truncated[:last_hyphen]
        else:
            slug = truncated
        slug = slug.rstrip('-')
    
    # Ensure we have a valid slug
    if not slug or len(slug) < 3:
        # Fallback to a simple hash-based slug
        import hashlib
        hash_slug = hashlib.md5(title.encode()).hexdigest()[:8]
        slug = f"man-page-{hash_slug}"
    
    return slug


def parse_markdown_frontmatter(md_file: Path) -> Tuple[Dict[str, Any], str]:
    """Parse YAML frontmatter from markdown file with robust error handling."""
    try:
        content = md_file.read_text(encoding="utf-8")
    except UnicodeDecodeError:
        # Try with different encodings if UTF-8 fails
        try:
            content = md_file.read_text(encoding="latin-1")
        except Exception:
            raise ValueError(f"Cannot read file {md_file} - encoding issues")
    
    # Check if file starts with ---
    if not content.startswith("---"):
        raise ValueError(f"No frontmatter found in {md_file}")
    
    # Find the closing --- more carefully
    lines = content.split('\n')
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
            body_lines = lines[i+1:]
            break
        elif in_frontmatter:
            frontmatter_lines.append(line)
    
    if not frontmatter_ended:
        raise ValueError(f"Invalid frontmatter in {md_file} - no closing ---")
    
    frontmatter_str = '\n'.join(frontmatter_lines)
    body = '\n'.join(body_lines).strip()
    
    # Parse YAML frontmatter with better error handling
    try:
        # First try normal parsing
        frontmatter = yaml.safe_load(frontmatter_str)
        if frontmatter is None:
            frontmatter = {}
        return frontmatter, body
    except yaml.YAMLError as e:
        # If normal parsing fails, try to sanitize the YAML
        try:
            sanitized_yaml = sanitize_yaml_content(frontmatter_str)
            frontmatter = yaml.safe_load(sanitized_yaml)
            if frontmatter is None:
                frontmatter = {}
            return frontmatter, body
        except Exception:
            # Last resort: create minimal frontmatter from filename
            print(f"⚠️  YAML parsing failed for {md_file}, using minimal frontmatter")
            fallback_frontmatter = {
                "title": md_file.stem,
                "content": {}
            }
            return fallback_frontmatter, body


def sanitize_yaml_content(yaml_str: str) -> str:
    """Sanitize YAML content to fix common parsing issues with multi-line strings and HTML."""
    lines = yaml_str.split('\n')
    sanitized_lines = []
    in_multiline_value = False
    current_key = None
    multiline_content = []
    indent_level = 0
    
    for i, line in enumerate(lines):
        stripped = line.strip()
        
        # Skip empty lines when not in multiline
        if not stripped and not in_multiline_value:
            sanitized_lines.append(line)
            continue
        
        # Check if we're starting or continuing a multi-line value
        if ':' in line and not in_multiline_value:
            key_part, value_part = line.split(':', 1)
            key = key_part.strip()
            value = value_part.strip()
            
            # Check if this starts a problematic multi-line value
            if value.startswith('"') and (not value.endswith('"') or value.count('"') == 1):
                # Starting a multi-line quoted string
                in_multiline_value = True
                current_key = key
                multiline_content = [value]
                indent_level = len(line) - len(line.lstrip())
                continue
            elif value.startswith('<') or 'catmandu' in value.lower() or 'pre>' in value:
                # Likely contains HTML or complex content - make it literal
                escaped_value = value.replace('"', '\\"').replace('\n', '\\n')
                sanitized_lines.append(f"{key}: \"{escaped_value}\"")
                continue
            else:
                # Normal key-value pair
                if value and not value.startswith('"') and not value.startswith("'"):
                    # Check if value needs quoting
                    if any(char in value for char in ['"', "'", '\n', '\r', '\t', '\\', '<', '>', '&']):
                        value = value.replace('"', '\\"')
                        value = f'"{value}"'
                sanitized_lines.append(f"{key}: {value}")
                continue
        
        elif in_multiline_value:
            # We're in a multi-line value, collect until we find the closing quote
            multiline_content.append(line)
            
            # Check if this line ends the multi-line value
            if stripped.endswith('"') and stripped.count('"') % 2 == 1:
                # Found closing quote, combine and sanitize the entire multi-line content
                full_content = '\n'.join(multiline_content)
                # Remove the opening and closing quotes
                if full_content.startswith('"'):
                    full_content = full_content[1:]
                if full_content.endswith('"'):
                    full_content = full_content[:-1]
                
                # Escape problematic characters and create a literal block scalar
                # Use | for literal block scalar to preserve formatting
                sanitized_lines.append(f"{current_key}: |")
                for content_line in full_content.split('\n'):
                    sanitized_lines.append(f"  {content_line}")
                
                # Reset state
                in_multiline_value = False
                current_key = None
                multiline_content = []
                continue
            
            # Continue collecting multi-line content
            continue
        
        else:
            # Regular line, pass through
            sanitized_lines.append(line)
    
    # If we ended while still in a multi-line value, close it
    if in_multiline_value and multiline_content:
        full_content = '\n'.join(multiline_content)
        if full_content.startswith('"'):
            full_content = full_content[1:]
        # Remove any trailing quotes and clean up
        full_content = full_content.rstrip('"').strip()
        
        sanitized_lines.append(f"{current_key}: |")
        for content_line in full_content.split('\n'):
            sanitized_lines.append(f"  {content_line}")
    
    return '\n'.join(sanitized_lines)


def process_markdown_file(md_file: Path) -> Tuple[str, str, str, str, str, str] | None:
    """Process a single markdown file and return data tuple or None if failed."""
    try:
        frontmatter, body = parse_markdown_frontmatter(md_file)
        
        # Extract parent directories for categories
        parts = md_file.parts
        main_category = parts[-3]  # third from end (main category dir)
        sub_category = parts[-2]   # second from end (sub category dir)
        
        # Extract fields from frontmatter
        title = frontmatter.get("title", md_file.stem)
        main_cat = frontmatter.get("main_category", main_category)
        sub_cat = frontmatter.get("sub_category", sub_category)
        content_dict = frontmatter.get("content", {})
        filename = md_file.name
        
        # Generate slug from title
        slug = generate_slug(title)
        
        # Convert content dict to JSON string
        content_json = json.dumps(content_dict)
        
        return (main_cat, sub_cat, title, slug, filename, content_json)
        
    except Exception as e:
        print(f"✗ Failed to process {md_file}: {e}")
        return None


def process_markdown_batch(file_batch: List[Path]) -> List[Tuple[str, str, str, str, str, str]]:
    """Process a batch of markdown files in parallel worker."""
    results = []
    for md_file in file_batch:
        result = process_markdown_file(md_file)
        if result:
            results.append(result)
    return results


def load_markdown_files(conn: sqlite3.Connection) -> Tuple[int, int]:
    """Load all markdown files from the man-pages directory structure using parallel processing."""
    if not MD_DIR.exists():
        raise SystemExit(f"Markdown directory not found: {MD_DIR}")

    # Collect all markdown files first
    print("🔍 Scanning for markdown files...")
    all_md_files = []
    
    # Find all main category directories (first level)
    main_categories = [d for d in MD_DIR.iterdir() if d.is_dir() and not d.name.startswith('.')]
    
    for main_cat_dir in main_categories:
        # Find all sub category directories (second level)
        sub_categories = [d for d in main_cat_dir.iterdir() if d.is_dir() and not d.name.startswith('.')]
        
        for sub_cat_dir in sub_categories:
            # Find all markdown files in this sub category
            md_files = list(sub_cat_dir.glob("*.md"))
            all_md_files.extend(md_files)
    
    total_files = len(all_md_files)
    print(f"📁 Found {total_files} markdown files")
    
    if total_files == 0:
        return 0, 0
    
    # Determine number of processes (max 8, but adjust based on file count)
    num_processes = min(8, mp.cpu_count(), max(1, total_files // 1000))
    print(f"🚀 Using {num_processes} parallel processes")
    
    # Split files into batches for parallel processing
    batch_size = max(1, total_files // num_processes)
    file_batches = []
    for i in range(0, total_files, batch_size):
        batch = all_md_files[i:i + batch_size]
        if batch:
            file_batches.append(batch)
    
    # Process batches in parallel
    print("⚡ Processing files in parallel...")
    all_results = []
    
    with mp.Pool(processes=num_processes) as pool:
        batch_results = pool.map(process_markdown_batch, file_batches)
        for results in batch_results:
            all_results.extend(results)
    
    # Insert all results into database with smart duplicate handling
    print("💾 Inserting into database...")
    logger.info("💾 Starting database insertion...")
    cur = conn.cursor()
    inserted = 0
    slug_tracker = {}  # Track slugs per category/subcategory to handle duplicates in current batch
    
    for result in all_results:
        main_cat, sub_cat, title, base_slug, filename, content_json = result
        try:
            # Create key for tracking slugs in this category/subcategory
            category_key = f"{main_cat}/{sub_cat}"
            
            # Check if we've seen this slug in current batch
            if category_key not in slug_tracker:
                slug_tracker[category_key] = set()
            
            # Generate unique slug only if there's a conflict in current batch
            final_slug = base_slug
            if base_slug in slug_tracker[category_key]:
                # This is a genuine duplicate in current batch, generate unique slug
                final_slug = generate_unique_slug(conn, base_slug, main_cat, sub_cat)
                logger.warning(f"Duplicate slug detected: {base_slug} → {final_slug} for {filename}")
            
            # Track this slug
            slug_tracker[category_key].add(final_slug)
            
            cur.execute(
                """
                INSERT INTO man_pages (main_category, sub_category, title, slug, filename, content)
                VALUES (?, ?, ?, ?, ?, json(?));
                """,
                (main_cat, sub_cat, title, final_slug, filename, content_json)
            )
            inserted += 1
            
            # Show progress for large datasets
            if inserted % 10000 == 0:
                print(f"  💾 Inserted {inserted:,} / {len(all_results):,} records...")
                logger.info(f"Progress: {inserted:,} / {len(all_results):,} records inserted")
                
        except Exception as e:
            logger.error(f"✗ Failed to insert {filename}: {e}")
            continue
    
    conn.commit()
    logger.info(f"✅ Successfully inserted {inserted:,} out of {len(all_results):,} processed files")
    
    return inserted, total_files


def populate_category_and_overview(conn: sqlite3.Connection) -> None:
    """Populate category, sub_category and overview tables from man_pages table."""
    cur = conn.cursor()
    
    # Clear existing data
    cur.execute("DELETE FROM category;")
    cur.execute("DELETE FROM sub_category;")
    cur.execute("DELETE FROM overview;")
    
    # Populate category table with main categories
    cur.execute(
        """
        INSERT INTO category (name, count, description, keywords, path)
        SELECT 
            main_category as name,
            COUNT(*) as count,
            'Category for ' || main_category as description,
            json_array(main_category) as keywords,
            '/' || main_category as path
        FROM man_pages
        GROUP BY main_category;
        """
    )
    
    # Populate sub_category table with subcategories
    cur.execute(
        """
        INSERT INTO sub_category (name, count, description, keywords, path)
        SELECT 
            sub_category as name,
            COUNT(*) as count,
            'Subcategory for ' || sub_category as description,
            json_array(sub_category) as keywords,
            '/' || sub_category as path
        FROM man_pages
        GROUP BY sub_category;
        """
    )
    
    # Populate overview table
    cur.execute("SELECT COUNT(*) FROM man_pages;")
    total_count = cur.fetchone()[0]
    cur.execute("INSERT INTO overview (id, total_count) VALUES (1, ?);", (total_count,))
    
    conn.commit()
    print("✓ Populated category, sub_category and overview tables")


def verify(conn: sqlite3.Connection) -> None:
    """Verify database contents by printing sample data."""
    cur = conn.cursor()
    
    # Total count
    cur.execute("SELECT COUNT(*) FROM man_pages;")
    total = cur.fetchone()[0]
    print(f"\nTotal man pages: {total}")
    
    # Count by main category
    cur.execute(
        """
        SELECT main_category, COUNT(*) as count
        FROM man_pages
        GROUP BY main_category
        ORDER BY count DESC
        LIMIT 10;
        """
    )
    print("\nTop categories:")
    for main_cat, count in cur.fetchall():
        print(f"  {main_cat}: {count}")
    
    # Sample rows with filename
    cur.execute(
        """
        SELECT main_category, sub_category, title, slug, filename
        FROM man_pages
        ORDER BY main_category, sub_category, title
        LIMIT 5;
        """
    )
    print("\nSample man pages:")
    for row in cur.fetchall():
        print(f"  {row[0]}/{row[1]}: {row[2]} (slug: {row[3]}, file: {row[4]})")
    
    # Verify category table
    cur.execute("SELECT name, count FROM category ORDER BY count DESC LIMIT 10;")
    print("\nCategory table:")
    for name, count in cur.fetchall():
        print(f"  {name}: {count} man pages")
    
    # Verify overview table
    cur.execute("SELECT total_count FROM overview WHERE id = 1;")
    overview_row = cur.fetchone()
    if overview_row:
        print(f"\nOverview table: total_count = {overview_row[0]}")


def main() -> None:
    """Main entry point."""
    # Ensure db directory exists
    DB_PATH.parent.mkdir(parents=True, exist_ok=True)
    
    # Remove existing database
    DB_PATH.unlink(missing_ok=True)
    
    logger.info(f"Building SQLite database at {DB_PATH}")
    logger.info(f"Reading markdown files from {MD_DIR}")
    print(f"Building SQLite database at {DB_PATH}")
    print(f"Reading markdown files from {MD_DIR}")
    
    with sqlite3.connect(DB_PATH) as conn:
        ensure_schema(conn)
        inserted, files = load_markdown_files(conn)
        logger.info(f"\nInserted {inserted} man pages from {files} files into {DB_PATH}")
        
        # Only process failed files if this was a continuation of existing database
        # For fresh database, all duplicates should already be handled
        if inserted < files * 0.95:  # If less than 95% success rate, check for failures
            logger.info("Low success rate detected, checking for failed files...")
            failed_inserted = process_failed_files(conn)
            if failed_inserted > 0:
                logger.info(f"Additionally inserted {failed_inserted} previously failed files")
        else:
            logger.info("High success rate, skipping failed files processing")
        
        populate_category_and_overview(conn)
        verify(conn)
    
    logger.info(f"\n✓ Database build complete: {DB_PATH}")
    logger.info(f"📝 Full log written to: {LOG_FILE}")
    print(f"\n✓ Database build complete: {DB_PATH}")
    print(f"📝 Full log written to: {LOG_FILE}")


if __name__ == "__main__":
    main()
