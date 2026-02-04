#!/usr/bin/env python3
"""
Insert emojis from JSON file into the database.
Reads from emojis.json and inserts into emoji-db-v4.db.
"""

import json
import sqlite3
import os
import hashlib
from pathlib import Path

# Database path (relative to project root)
DB_PATH = "db/all_dbs/emoji-db-v4.db"
JSON_FILE = Path(__file__).parent / "emojis.json"


def json_or_none(value):
    """
    Converts a Python object (list/dict) to JSON string.
    Returns None if value is None.
    """
    if value is None:
        return None
    try:
        return json.dumps(value, ensure_ascii=False)
    except Exception:
        return None


def hash_string_to_int64(s: str) -> int:
    """
    Hash a string using SHA-256 and return the first 8 bytes as a signed big-endian int64.
    This matches the Go implementation: hashStringToInt64 in queries.go
    """
    if not s:
        s = ''
    hash_obj = hashlib.sha256(s.encode('utf-8'))
    hash_bytes = hash_obj.digest()
    # Take first 8 bytes and convert to signed int64 (big-endian)
    return int.from_bytes(hash_bytes[:8], byteorder='big', signed=True)


def insert_emojis():
    """Read JSON file and insert emojis into database."""
    
    # Check if database exists
    if not os.path.exists(DB_PATH):
        print(f"❌ Database not found: {DB_PATH}")
        return
    
    # Check if JSON file exists
    if not JSON_FILE.exists():
        print(f"❌ JSON file not found: {JSON_FILE}")
        return
    
    # Load JSON data
    try:
        with open(JSON_FILE, "r", encoding="utf-8") as f:
            emojis = json.load(f)
    except Exception as e:
        print(f"❌ Failed to load JSON: {e}")
        return
    
    # Connect to database
    conn = sqlite3.connect(DB_PATH)
    cur = conn.cursor()
    cur.execute("PRAGMA foreign_keys = ON;")
    
    # Get the last ID and increment for new emojis
    cur.execute("SELECT COALESCE(MAX(id), 0) FROM emojis")
    last_id = cur.fetchone()[0]
    next_id = last_id + 1
    
    inserted = 0
    errors = 0
    
    for emoji_data in emojis:
        try:
            # Extract fields
            code = emoji_data.get("code")
            slug = emoji_data.get("slug")
            title = emoji_data.get("title")
            category = emoji_data.get("category")
            description = emoji_data.get("description")
            
            # Calculate hashes
            slug_hash = hash_string_to_int64(slug)
            category_hash = hash_string_to_int64(category) if category else None
            
            # Convert JSON fields
            unicode_json = json_or_none(emoji_data.get("Unicode"))
            keywords_json = json_or_none(emoji_data.get("keywords"))
            aka_json = json_or_none(emoji_data.get("alsoKnownAs"))
            version_json = json_or_none(emoji_data.get("version"))
            senses_json = json_or_none(emoji_data.get("senses"))
            shortcodes_json = json_or_none(emoji_data.get("shortcodes"))
            
            # Check if emoji already exists by slug_hash
            cur.execute("SELECT id FROM emojis WHERE slug_hash = ?", (slug_hash,))
            existing = cur.fetchone()
            
            if existing:
                # Fail if emoji already exists
                raise Exception(f"Emoji with slug '{slug}' already exists (id: {existing[0]})")
            
            # Insert new emoji with incremented ID
            cur.execute("""
                INSERT INTO emojis (
                    id, slug_hash, category_hash, code, unicode, slug, title, category, description,
                    keywords, also_known_as, version,
                    senses, shortcodes
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            """, (
                next_id,
                slug_hash,
                category_hash,
                code,
                unicode_json,
                slug,
                title,
                category,
                description,
                keywords_json,
                aka_json,
                version_json,
                senses_json,
                shortcodes_json
            ))
            next_id += 1
            inserted += 1
            print(f"✅ Inserted: {slug} ({title})")
            
        except Exception as e:
            errors += 1
            slug = emoji_data.get("slug", "unknown")
            print(f"❌ Failed to insert {slug}: {e}")
    
    # Commit changes
    conn.commit()
    conn.close()
    
    print(f"\n✅ Complete!")
    print(f"   Inserted: {inserted}")
    if errors > 0:
        print(f"   Errors: {errors}")


if __name__ == "__main__":
    insert_emojis()

