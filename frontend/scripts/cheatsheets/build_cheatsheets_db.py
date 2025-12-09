#!/usr/bin/env python3
"""
Build a SQLite database from HTML cheatsheets.

- Scans data/cheatsheets/**/*.html
- Creates SQLite DB at db/all_dbs/cheatsheets-db.db
- Table: cheatsheet(id, category, name, slug, content, title, description, keywords)
- Table: category(id, name, slug, description, keywords, features)
- Table: overview(id, total_count)
"""

import sqlite3
import re
import json
import hashlib
from pathlib import Path

BASE_DIR = Path(__file__).parent.parent.parent
DATA_DIR = BASE_DIR / "data" / "cheatsheets"
DB_PATH = BASE_DIR / "db" / "all_dbs" / "cheatsheets-db.db"

def generate_hash_id(category: str, slug: str) -> int:
    """
    Generate a 64-bit signed integer hash from category and slug.
    Matches the behavior of crypto.createHash('sha256').update(url).digest().readBigInt64BE(0)
    """
    combined = f"{category}{slug}"
    hash_bytes = hashlib.sha256(combined.encode('utf-8')).digest()
    # Take first 8 bytes, interpret as big-endian signed integer
    return int.from_bytes(hash_bytes[:8], byteorder='big', signed=True)

def ensure_schema(conn: sqlite3.Connection) -> None:
    cur = conn.cursor()
    
    # Performance optimizations
    cur.execute("PRAGMA journal_mode = WAL;")
    cur.execute("PRAGMA synchronous = OFF;")
    cur.execute("PRAGMA cache_size = -128000;")
    cur.execute("PRAGMA temp_store = MEMORY;")
    cur.execute("PRAGMA mmap_size = 536870912;")
    
    # Drop table to recreate with new schema
    cur.execute("DROP TABLE IF EXISTS cheatsheet;")
    
    # Create cheatsheet table with hash_id and WITHOUT ROWID
    cur.execute(
        """
        CREATE TABLE cheatsheet (
            hash_id INTEGER PRIMARY KEY,
            category TEXT NOT NULL,
            slug TEXT NOT NULL,
            content TEXT NOT NULL,
            title TEXT,
            description TEXT,
            keywords TEXT DEFAULT '[]'
        ) WITHOUT ROWID;
        """
    )
    cur.execute("CREATE INDEX IF NOT EXISTS idx_cheatsheet_category ON cheatsheet(category);")
    cur.execute("CREATE UNIQUE INDEX IF NOT EXISTS idx_cheatsheet_category_slug ON cheatsheet(category, slug);")

    # Create category table
    cur.execute(
        """
        CREATE TABLE IF NOT EXISTS category (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            slug TEXT NOT NULL UNIQUE,
            description TEXT,
            keywords TEXT DEFAULT '[]',
            features TEXT DEFAULT '[]'
        );
        """
    )

    # Create overview table
    cur.execute(
        """
        CREATE TABLE IF NOT EXISTS overview (
            id INTEGER PRIMARY KEY CHECK(id = 1),
            total_count INTEGER NOT NULL
        );
        """
    )
    
    conn.commit()

def extract_metadata(html_content: str):
    metatags = {}
    
    # Extract title
    title_match = re.search(r'<title[^>]*>([^<]*)</title>', html_content, re.IGNORECASE)
    if title_match:
        metatags['title'] = title_match.group(1).strip()
    
    # Extract meta description
    desc_match = re.search(r'<meta[^>]*name=["\']description["\'][^>]*content=["\']([^"\']*)["\']', html_content, re.IGNORECASE)
    if desc_match:
        metatags['description'] = desc_match.group(1)
        
    # Extract keywords
    keywords_match = re.search(r'<meta[^>]*name=["\']keywords["\'][^>]*content=["\']([^"\']*)["\']', html_content, re.IGNORECASE)
    if keywords_match:
        metatags['keywords'] = [k.strip() for k in keywords_match.group(1).split(',')]
    else:
        metatags['keywords'] = []
        
    # Extract body content
    body_match = re.search(r'<body[^>]*>([\s\S]*?)</body>', html_content, re.IGNORECASE)
    if body_match:
        metatags['content'] = body_match.group(1).strip()
    else:
        metatags['content'] = html_content
        
    return metatags

def slugify(text: str) -> str:
    # Match logic from frontend/src/lib/cheatsheets-utils.ts:
    # .toLowerCase()
    # .replace(/[^a-z0-9_]+/g, '-')
    # .replace(/_/g, '_')  <-- This seems redundant in JS if previous regex replaced _ with -, but let's follow the intent.
    # Actually, looking at the JS code: .replace(/[^a-z0-9_]+/g, '-') keeps underscores.
    # Then .replace(/_/g, '_') keeps underscores.
    # Wait, the JS code is:
    # .replace(/[^a-z0-9_]+/g, '-')  -> replaces anything NOT a-z, 0-9, or _ with -
    # .replace(/_/g, '_')            -> replaces _ with _ (no-op?)
    
    # Let's replicate the exact behavior of the first replace, which is the meaningful one.
    # It replaces any sequence of characters that are NOT lowercase letters, numbers, or underscores with a hyphen.
    
    return re.sub(r'[^a-zA-Z0-9_\-\.\+]+', '-', text)

def process_cheatsheets(conn: sqlite3.Connection, limit: int = None):
    cur = conn.cursor()
    
    if not DATA_DIR.exists():
        print(f"Data directory not found: {DATA_DIR}")
        return

    html_files = list(DATA_DIR.glob("**/*.html"))
    if limit:
        html_files = html_files[:limit]
        
    print(f"Found {len(html_files)} cheatsheets to process...")
    
    categories = {}
    inserted_count = 0
    
    for file_path in html_files:
        try:
            # Path structure: data/cheatsheets/<category>/<name>.html
            category_name = file_path.parent.name
            name = file_path.stem
            category_slug = slugify(category_name)
            cheatsheet_slug = slugify(name)
            
            content = file_path.read_text(encoding='utf-8')
            metadata = extract_metadata(content)
            
            # Generate hash_id
            hash_id = generate_hash_id(category_slug, cheatsheet_slug)
            
            # Insert into cheatsheet table
            cur.execute(
                """
                INSERT INTO cheatsheet (hash_id, category, slug, content, title, description, keywords)
                VALUES (?, ?, ?, ?, ?, ?, ?)
                """,
                (
                    hash_id,
                    category_slug,
                    cheatsheet_slug,
                    metadata.get('content', ''),
                    metadata.get('title', ''),
                    metadata.get('description', ''),
                    json.dumps(metadata.get('keywords', []))
                )
            )
            
            # Collect category info
            if category_slug not in categories:
                categories[category_slug] = {
                    'name': category_name,
                    'slug': category_slug,
                    'description': '', # Empty as requested
                    'keywords': [],    # Empty as requested
                    'features': []     # Empty as requested
                }
            
            inserted_count += 1
            print(f"Processed: {category_name}/{name}")
            
        except Exception as e:
            print(f"Error processing {file_path}: {e}")
            
    # Insert categories
    for cat_slug, cat_data in categories.items():
        cur.execute(
            """
            INSERT INTO category (name, slug, description, keywords, features)
            VALUES (?, ?, ?, ?, ?)
            """,
            (
                cat_data['name'],
                cat_data['slug'],
                cat_data['description'],
                json.dumps(cat_data['keywords']),
                json.dumps(cat_data['features'])
            )
        )
        
    # Update overview
    cur.execute("DELETE FROM overview")
    cur.execute("INSERT INTO overview (id, total_count) VALUES (1, ?)", (inserted_count,))
    
    conn.commit()
    print(f"Successfully inserted {inserted_count} cheatsheets and {len(categories)} categories.")

def main():
    # Ensure DB directory exists
    DB_PATH.parent.mkdir(parents=True, exist_ok=True)
    
    # Remove existing DB to start fresh
    if DB_PATH.exists():
        DB_PATH.unlink()
        
    with sqlite3.connect(DB_PATH) as conn:
        ensure_schema(conn)
        process_cheatsheets(conn)

if __name__ == "__main__":
    main()
