#!/usr/bin/env python3
"""
Build MCP Database from JSON input files.

Source: frontend/public/mcp/input/*.json
Destination: db/all_dbs/mcp-db.db

Tables:
- overview: id, total_count
- category: slug, name, description, count
- mcp_pages: hash_id, category_slug, mcp_key, name, description, owner, stars, forks, language, license, updated_at, readme_content, data
"""

import sqlite3
import json
import hashlib
import glob
from pathlib import Path

BASE_DIR = Path(__file__).parent.parent.parent
INPUT_DIR = BASE_DIR / "public" / "mcp" / "input"
DB_PATH = BASE_DIR / "db" / "all_dbs" / "mcp-db.db"

def generate_hash_id(category_slug: str, mcp_key: str) -> int:
    """
    Generate a 64-bit signed integer hash from category_slug and mcp_key.
    """
    combined = f"{category_slug}{mcp_key}"
    hash_bytes = hashlib.sha256(combined.encode('utf-8')).digest()
    # Take first 8 bytes, interpret as big-endian signed integer
    return int.from_bytes(hash_bytes[:8], byteorder='big', signed=True)

def build_db():
    # Ensure DB directory exists
    DB_PATH.parent.mkdir(parents=True, exist_ok=True)
    
    # Remove existing DB if it exists
    if DB_PATH.exists():
        DB_PATH.unlink()
        
    print(f"Building MCP DB at {DB_PATH}...")
    
    conn = sqlite3.connect(DB_PATH)
    cur = conn.cursor()
    
    # 1. Create Tables
    
    # Overview Table
    cur.execute("""
        CREATE TABLE overview (
            id INTEGER PRIMARY KEY CHECK(id = 1),
            total_count INTEGER NOT NULL DEFAULT 0
        );
    """)
    
    # Category Table
    cur.execute("""
        CREATE TABLE category (
            slug TEXT PRIMARY KEY,
            name TEXT NOT NULL,
            description TEXT DEFAULT '',
            count INTEGER NOT NULL DEFAULT 0
        );
    """)
    
    # MCP Pages Table
    cur.execute("""
        CREATE TABLE mcp_pages (
            hash_id INTEGER PRIMARY KEY,
            category TEXT NOT NULL,
            key TEXT NOT NULL,
            name TEXT NOT NULL,
            description TEXT DEFAULT '',
            owner TEXT DEFAULT '',
            stars INTEGER DEFAULT 0,
            forks INTEGER DEFAULT 0,
            language TEXT DEFAULT '',
            license TEXT DEFAULT '',
            updated_at TEXT DEFAULT '',
            readme_content TEXT DEFAULT '',
            data TEXT DEFAULT '{}'
        ) WITHOUT ROWID;
    """)
    
    # Create Indexes
    cur.execute("CREATE INDEX idx_mcp_pages_category ON mcp_pages(category);")
    
    # 2. Process JSON Files
    
    json_files = glob.glob(str(INPUT_DIR / "*.json"))
    total_mcp_count = 0
    
    # Limit for testing (set to None for full build)
    LIMIT = None
    processed_count = 0
    
    for json_file in json_files:
        if LIMIT and processed_count >= LIMIT:
            break
            
        print(f"Processing {Path(json_file).name}...")
        with open(json_file, 'r', encoding='utf-8') as f:
            try:
                data = json.load(f)
            except json.JSONDecodeError as e:
                print(f"Error decoding {json_file}: {e}")
                continue
                
        category_slug = data.get('category', '')
        category_name = data.get('categoryDisplay', '')
        category_desc = data.get('description', '')
        repositories = data.get('repositories', {})
        
        if not category_slug:
            print(f"Skipping {json_file}: No category slug found.")
            continue
            
        repo_count = len(repositories)
        
        # Insert Category
        try:
            cur.execute(
                "INSERT INTO category (slug, name, description, count) VALUES (?, ?, ?, ?)",
                (category_slug, category_name, category_desc, repo_count)
            )
        except sqlite3.IntegrityError:
            print(f"Category {category_slug} already exists, updating count...")
            cur.execute(
                "UPDATE category SET count = count + ? WHERE slug = ?",
                (repo_count, category_slug)
            )
            
        # Insert MCP Pages
        for mcp_key, repo_data in repositories.items():
            if LIMIT and processed_count >= LIMIT:
                break
                
            hash_id = generate_hash_id(category_slug, mcp_key)
            
            name = repo_data.get('name', '')
            description = repo_data.get('description', '')
            owner = repo_data.get('owner', '')
            stars = repo_data.get('stars', 0)
            forks = repo_data.get('forks', 0)
            language = repo_data.get('language', '')
            license_name = repo_data.get('license', '')
            updated_at = repo_data.get('updated_at', '')
            readme_content = repo_data.get('readme_content', '')
            
            # Store full JSON data
            full_data = json.dumps(repo_data)
            
            try:
                cur.execute(
                    """
                    INSERT INTO mcp_pages (
                        hash_id, category, key, name, description, 
                        owner, stars, forks, language, license, updated_at, 
                        readme_content, data
                    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                    """,
                    (
                        hash_id, category_slug, mcp_key, name, description,
                        owner, stars, forks, language, license_name, updated_at,
                        readme_content, full_data
                    )
                )
                processed_count += 1
                total_mcp_count += 1
            except sqlite3.IntegrityError as e:
                print(f"Error inserting {mcp_key}: {e}")
                
    # 3. Update Overview
    cur.execute("INSERT INTO overview (id, total_count) VALUES (1, ?)", (total_mcp_count,))
    
    conn.commit()
    conn.close()
    print(f"Successfully built MCP DB with {total_mcp_count} pages.")

if __name__ == "__main__":
    build_db()
