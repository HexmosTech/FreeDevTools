#!/usr/bin/env python3
"""
Man Pages Subcategory Extender

This script adds subcategories to the man-pages database from URLs in 404.txt.
It creates subcategories even if they don't have any pages (count = 0).
"""

import sqlite3
import hashlib
import struct
from pathlib import Path
from datetime import datetime
from typing import List, Tuple

# Database path
DB_PATH = Path(__file__).parent.parent.parent / "db" / "all_dbs" / "man-pages-db-v4.db"

# Input file path
INPUT_FILE = Path(__file__).parent.parent / "404.txt"


def hash_url_to_key(main_category: str, sub_category: str, slug: str = "") -> int:
    """
    Generate a hash ID from mainCategory, subCategory, and slug.
    Matches Go's HashURLToKey function.
    """
    combined = main_category + sub_category + slug
    hash_bytes = hashlib.sha256(combined.encode()).digest()
    # Take first 8 bytes and convert to int64 (big-endian)
    return struct.unpack(">q", hash_bytes[:8])[0]


def parse_url(url: str) -> Tuple[str, str]:
    """
    Parse a URL like /freedevtools/man-pages/library-functions/c-language-specification/
    Returns (main_category, sub_category)
    """
    # Remove leading/trailing slashes and split
    parts = url.strip("/").split("/")
    
    # Find "man-pages" or "man_pages" in the path
    try:
        man_pages_idx = next(i for i, p in enumerate(parts) if p in ("man-pages", "man_pages"))
        if man_pages_idx + 2 < len(parts):
            main_category = parts[man_pages_idx + 1]
            sub_category = parts[man_pages_idx + 2]
            return main_category, sub_category
    except (StopIteration, IndexError):
        pass
    
    raise ValueError(f"Could not parse URL: {url}")


def get_main_category_hash(conn: sqlite3.Connection, main_category: str) -> int:
    """Get the hash_id for a main category."""
    cursor = conn.cursor()
    cursor.execute("SELECT hash_id FROM category WHERE name = ?", (main_category,))
    row = cursor.fetchone()
    if not row:
        raise ValueError(f"Main category '{main_category}' not found in database")
    return row[0]


def read_urls_from_file(file_path: Path) -> List[str]:
    """Read URLs from the input file."""
    urls = []
    with open(file_path, "r") as f:
        for line in f:
            line = line.strip()
            if line and ("man-pages" in line or "man_pages" in line):
                urls.append(line)
    return urls


def insert_subcategory(
    conn: sqlite3.Connection,
    main_category: str,
    sub_category: str,
    main_category_hash: int,
) -> None:
    """Insert or update a subcategory in the database."""
    # Generate hash_id for subcategory (mainCategory + subCategory + "")
    hash_id = hash_url_to_key(main_category, sub_category, "")
    
    # Generate description
    description = f"Free {sub_category.replace('-', ' ').title()} documentation and reference guides."
    
    # Generate path
    path = f"/{sub_category}"
    
    # Current timestamp
    updated_at = datetime.utcnow().strftime("%Y-%m-%d %H:%M:%S")
    
    cursor = conn.cursor()
    
    # Check if subcategory already exists
    cursor.execute("SELECT hash_id, count FROM sub_category WHERE hash_id = ?", (hash_id,))
    existing = cursor.fetchone()
    if existing:
        existing_count = existing[1] if existing[1] is not None else 0
        print(f"  ⚠️  Subcategory already exists: {sub_category} (current count: {existing_count})")
        # Update it but preserve the existing count
        cursor.execute(
            """
            UPDATE sub_category 
            SET name = ?, description = ?, path = ?, main_category_hash = ?, updated_at = ?
            WHERE hash_id = ?
            """,
            (sub_category, description, path, main_category_hash, updated_at, hash_id),
        )
        print(f"  ✓ Updated subcategory: {sub_category} (preserved count: {existing_count})")
    else:
        # Insert new subcategory
        cursor.execute(
            """
            INSERT INTO sub_category (hash_id, name, count, description, keywords, path, main_category_hash, updated_at)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            """,
            (hash_id, sub_category, 0, description, "[]", path, main_category_hash, updated_at),
        )
        print(f"  ✓ Inserted subcategory: {sub_category}")


def main():
    """Main function."""
    if not DB_PATH.exists():
        print(f"❌ Database not found: {DB_PATH}")
        return
    
    if not INPUT_FILE.exists():
        print(f"❌ Input file not found: {INPUT_FILE}")
        return
    
    # Read URLs from file
    print(f"📖 Reading URLs from {INPUT_FILE}...")
    urls = read_urls_from_file(INPUT_FILE)
    print(f"  Found {len(urls)} URLs")
    
    if not urls:
        print("❌ No URLs found in input file")
        return
    
    # Connect to database
    conn = sqlite3.connect(DB_PATH)
    conn.execute("PRAGMA foreign_keys = ON")
    
    try:
        # Process each URL
        print("\n🔄 Processing URLs...")
        processed = 0
        errors = 0
        
        for url in urls:
            try:
                main_category, sub_category = parse_url(url)
                print(f"\n📝 Processing: {main_category} / {sub_category}")
                
                # Get main category hash
                main_category_hash = get_main_category_hash(conn, main_category)
                
                # Insert subcategory
                insert_subcategory(conn, main_category, sub_category, main_category_hash)
                processed += 1
                
            except Exception as e:
                print(f"  ❌ Error processing {url}: {e}")
                errors += 1
        
        # Commit changes
        conn.commit()
        
        print(f"\n✅ Done! Processed: {processed}, Errors: {errors}")
        
    except Exception as e:
        conn.rollback()
        print(f"❌ Error: {e}")
        raise
    finally:
        conn.close()


if __name__ == "__main__":
    main()

