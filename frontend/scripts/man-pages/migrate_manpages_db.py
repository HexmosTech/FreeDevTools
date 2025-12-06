#!/usr/bin/env python3
"""
Migrate Man-Pages DB to use Hash-based Primary Key.

Source: db/all_dbs/man-pages-db.db
Destination: db/all_dbs/man-pages-new-db.db

Changes:
- man_pages table:
  - Remove 'id' (AUTOINCREMENT)
  - Add 'hash_id' (INTEGER PRIMARY KEY) generated from main_category + sub_category + slug
  - Enable WITHOUT ROWID
"""

import sqlite3
import hashlib
import shutil
from pathlib import Path

BASE_DIR = Path(__file__).parent.parent.parent
OLD_DB_PATH = BASE_DIR / "db" / "all_dbs" / "man-pages-db.db"
NEW_DB_PATH = BASE_DIR / "db" / "all_dbs" / "man-pages-new-db-1.db"

def generate_hash_id(main_category: str, sub_category: str, slug: str) -> int:
    """
    Generate a 64-bit signed integer hash from category, sub_category, and slug.
    """
    combined = f"{main_category}{sub_category}{slug}"
    hash_bytes = hashlib.sha256(combined.encode('utf-8')).digest()
    # Take first 8 bytes, interpret as big-endian signed integer
    return int.from_bytes(hash_bytes[:8], byteorder='big', signed=True)

def generate_subcategory_hash_id(main_category: str, sub_category: str) -> int:
    """
    Generate a 64-bit signed integer hash from main_category and sub_category.
    """
    combined = f"{main_category}{sub_category}"
    hash_bytes = hashlib.sha256(combined.encode('utf-8')).digest()
    return int.from_bytes(hash_bytes[:8], byteorder='big', signed=True)

def migrate_db():
    if not OLD_DB_PATH.exists():
        print(f"Source DB not found: {OLD_DB_PATH}")
        return

    # Remove existing new DB if it exists
    if NEW_DB_PATH.exists():
        NEW_DB_PATH.unlink()
        
    print(f"Migrating from {OLD_DB_PATH.name} to {NEW_DB_PATH.name}...")

    with sqlite3.connect(OLD_DB_PATH) as old_conn, sqlite3.connect(NEW_DB_PATH) as new_conn:
        old_cur = old_conn.cursor()
        new_cur = new_conn.cursor()
        
        # 1. Setup New Schema
        # Performance PRAGMAs
        new_cur.execute("PRAGMA journal_mode = WAL;")
        new_cur.execute("PRAGMA synchronous = OFF;")
        new_cur.execute("PRAGMA cache_size = -128000;")
        new_cur.execute("PRAGMA temp_store = MEMORY;")
        new_cur.execute("PRAGMA mmap_size = 536870912;")
        
        # Create 'man_pages' table with hash_id
        new_cur.execute(
            """
            CREATE TABLE man_pages (
                hash_id INTEGER PRIMARY KEY,
                main_category TEXT NOT NULL,
                sub_category TEXT NOT NULL,
                title TEXT NOT NULL,
                slug TEXT NOT NULL,
                filename TEXT NOT NULL,
                content TEXT DEFAULT '{}'
            ) WITHOUT ROWID;
            """
        )
        
        # Create 'category' table (Copy schema)
        new_cur.execute(
            """
            CREATE TABLE category (
                name TEXT PRIMARY KEY,
                count INTEGER NOT NULL DEFAULT 0,
                description TEXT DEFAULT '',
                keywords TEXT DEFAULT '[]',
                path TEXT DEFAULT ''
            );
            """
        )
        
        # Create 'sub_category' table with hash_id
        new_cur.execute(
            """
            CREATE TABLE sub_category (
                hash_id INTEGER PRIMARY KEY,
                main_category TEXT NOT NULL,
                name TEXT NOT NULL,
                count INTEGER NOT NULL DEFAULT 0,
                description TEXT DEFAULT '',
                keywords TEXT DEFAULT '[]',
                path TEXT DEFAULT ''
            ) WITHOUT ROWID;
            """
        )
        
        # Create 'overview' table (Copy schema)
        new_cur.execute(
            """
            CREATE TABLE overview (
                id INTEGER PRIMARY KEY CHECK(id = 1),
                total_count INTEGER NOT NULL DEFAULT 0
            );
            """
        )

        # Create Indexes for Performance
        print("Creating indexes...")
        # Index for fetching man pages by subcategory (e.g. /man-pages/linux/commands/)
        new_cur.execute("CREATE INDEX idx_man_pages_main_sub_cat ON man_pages(main_category, sub_category);")
        # Index for fetching subcategories by main category (e.g. /man-pages/linux/)
        new_cur.execute("CREATE INDEX idx_sub_category_main_cat ON sub_category(main_category);")
        
        # 2. Migrate Data
        
        # Migrate 'man_pages'
        # Migrate 'man_pages'
        print("Migrating man_pages (LIMIT 100)...")
        old_cur.execute("SELECT main_category, sub_category, title, slug, filename, content FROM man_pages")
        rows = old_cur.fetchall()
        
        inserted_count = 0
        for row in rows:
            main_cat, sub_cat, title, slug, filename, content = row
            hash_id = generate_hash_id(main_cat, sub_cat, slug)
            
            try:
                new_cur.execute(
                    """
                    INSERT INTO man_pages (hash_id, main_category, sub_category, title, slug, filename, content)
                    VALUES (?, ?, ?, ?, ?, ?, ?)
                    """,
                    (hash_id, main_cat, sub_cat, title, slug, filename, content)
                )
                inserted_count += 1
            except sqlite3.IntegrityError as e:
                print(f"Skipping duplicate or error for {main_cat}/{sub_cat}/{slug}: {e}")

        print(f"Migrated {inserted_count} man_pages.")
        
        # Migrate 'category'
        print("Migrating category...")
        old_cur.execute("SELECT * FROM category")
        categories = old_cur.fetchall()
        new_cur.executemany("INSERT INTO category VALUES (?, ?, ?, ?, ?)", categories)
        print(f"Migrated {len(categories)} categories.")
        
        # Migrate 'sub_category'
        print("Migrating sub_category...")
        # Calculate count dynamically from man_pages and join with old sub_category table for metadata
        old_cur.execute("""
            SELECT 
                m.main_category, 
                m.sub_category, 
                COUNT(m.slug) as calculated_count,
                s.description, 
                s.keywords, 
                s.path
            FROM man_pages m
            LEFT JOIN sub_category s ON m.sub_category = s.name
            GROUP BY m.main_category, m.sub_category
        """)
        sub_categories = old_cur.fetchall()
        
        sub_cat_inserted = 0
        for row in sub_categories:
            main_cat, sub_cat_name, count, description, keywords, path = row
            # Handle nulls from left join if any
            count = count or 0
            description = description or ''
            keywords = keywords or '[]'
            path = path or ''
            
            hash_id = generate_subcategory_hash_id(main_cat, sub_cat_name)
            
            try:
                new_cur.execute(
                    """
                    INSERT INTO sub_category (hash_id, main_category, name, count, description, keywords, path)
                    VALUES (?, ?, ?, ?, ?, ?, ?)
                    """,
                    (hash_id, main_cat, sub_cat_name, count, description, keywords, path)
                )
                sub_cat_inserted += 1
            except sqlite3.IntegrityError as e:
                print(f"Skipping duplicate sub_category {main_cat}/{sub_cat_name}: {e}")
                
        print(f"Migrated {sub_cat_inserted} sub_categories.")
        
        # Migrate 'overview'
        print("Migrating overview...")
        old_cur.execute("SELECT * FROM overview")
        overview = old_cur.fetchall()
        new_cur.executemany("INSERT INTO overview VALUES (?, ?)", overview)
        
        new_conn.commit()
        print("Migration complete.")

if __name__ == "__main__":
    migrate_db()
