#!/usr/bin/env python3
"""
Build MCP Database from JSON input files.

Source: frontend/public/mcp/input/*.json
Destination: db/all_dbs/mcp-db.db

Tables:
- overview: id, total_count
- category: slug, name, description, count
- mcp_pages: hash_id, category_slug, mcp_key, name, description, owner, stars, forks, language, license, updated_at, readme_content, url, image_url, npm_url, npm_downloads, keywords
"""

import sqlite3
import json
import hashlib
import glob
import re
from pathlib import Path
import markdown
from bs4 import BeautifulSoup

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

def process_readme_content(markdown_text: str) -> str:
    """
    Convert Markdown to HTML and apply transformations:
    - Add IDs to headings
    - Add scroll margin to headings
    - Open external links in new tab
    - Disable relative links
    """
    if not markdown_text:
        return ''

    try:
        # Convert Markdown to HTML
        html = markdown.markdown(markdown_text, extensions=['fenced_code', 'tables'])
        soup = BeautifulSoup(html, 'html.parser')

        # Process Headings
        for tag in soup.find_all(re.compile('^h[1-6]$')):
            # Generate ID
            text = tag.get_text()
            anchor_id = re.sub(r'[^a-z0-9\s-]', '', text.lower())
            anchor_id = re.sub(r'\s+', '-', anchor_id)
            anchor_id = re.sub(r'-+', '-', anchor_id).strip('-')
            
            tag['id'] = anchor_id
            
            # Add scroll margin class and style
            existing_class = tag.get('class', [])
            if 'scroll-mt-32' not in existing_class:
                existing_class.append('scroll-mt-32')
            tag['class'] = existing_class
            
            # Add inline style
            existing_style = tag.get('style', '')
            tag['style'] = f"{existing_style}; scroll-margin-top: 8rem;".strip('; ')

        # Process Links
        for tag in soup.find_all('a'):
            href = tag.get('href', '')
            
            if href.startswith(('http://', 'https://')):
                tag['target'] = '_blank'
                tag['rel'] = 'noopener noreferrer'
            elif href.startswith('#'):
                # Keep anchor links
                pass
            else:
                # Disable relative links by changing tag to span
                tag.name = 'span'
                # Remove href attribute
                del tag['href']
                # Add disabled styling if needed (optional, logic in frontend was just span)

        return str(soup)
    except Exception as e:
        print(f"Error processing README: {e}")
        return markdown_text

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
            url TEXT DEFAULT '',
            image_url TEXT DEFAULT '',
            npm_url TEXT DEFAULT '',
            npm_downloads INTEGER DEFAULT 0,
            keywords TEXT DEFAULT ''
        ) WITHOUT ROWID;
    """)
    
    # Create Indexes
    cur.execute("CREATE INDEX idx_mcp_pages_category ON mcp_pages(category);")
    cur.execute("CREATE INDEX idx_mcp_category_stars_name ON mcp_pages(category, stars DESC, name ASC);")
    
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
            
            raw_readme = repo_data.get('readme_content', '')
            readme_content = process_readme_content(raw_readme)
            
            url = repo_data.get('url', '')
            image_url = repo_data.get('imageUrl', '')
            npm_url = repo_data.get('npm_url', '')
            npm_downloads = repo_data.get('npm_downloads', 0)
            keywords = json.dumps(repo_data.get('keywords', []))
            
            # Store full JSON data
            full_data = json.dumps(repo_data)
            
            try:
                cur.execute(
                    """
                    INSERT INTO mcp_pages (
                        hash_id, category, key, name, description, 
                        owner, stars, forks, language, license, updated_at, 
                        readme_content, url, image_url, npm_url, npm_downloads, keywords
                    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                    """,
                    (
                        hash_id, category_slug, mcp_key, name, description,
                        owner, stars, forks, language, license_name, updated_at,
                        readme_content, url, image_url, npm_url, npm_downloads, keywords
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
