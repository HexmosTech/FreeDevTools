#!/usr/bin/env python3
"""
populate_from_json.py

Scans emoji_data/*.json and inserts (or replaces) rows into emoji.db.
Safely handles null values: if a JSON field is null, the DB column is set to NULL.
Stores arrays and objects as raw JSON (not comma-separated).
"""

import json
import sqlite3
from pathlib import Path

DB_PATH = "emoji.db"
DATA_DIR = Path("/home/rtp/Projects/FreeDevTools/frontend/public/emoji_data")


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


def insert_emoji_data():
    conn = sqlite3.connect(DB_PATH)
    cur = conn.cursor()
    cur.execute("PRAGMA foreign_keys = ON;")

    for json_file in DATA_DIR.rglob("*.json"):
        print(f"→ Found JSON: {json_file}")
        try:
            with open(json_file, "r", encoding="utf-8") as f:
                data = json.load(f)
        except Exception as e:
            print(f"✗ Skipping {json_file.name}: failed to load JSON: {e}")
            continue

        # Basic fields
        code = data.get("code")
        slug = data.get("slug")
        title = data.get("title")
        category = data.get("category")
        description = data.get("description")
        apple_vendor_description = data.get("apple_vendor_description")

        # Keep JSON arrays/objects intact
        unicode_json = json_or_none(data.get("Unicode"))
        keywords_json = json_or_none(data.get("keywords"))
        aka_json = json_or_none(data.get("alsoKnownAs"))
        senses_json = json_or_none(data.get("senses"))
        shortcodes_json = json_or_none(data.get("shortcodes"))

        # Version (store as JSON object too)
        version_json = json_or_none(data.get("version"))

        # Insert or replace
        try:
            cur.execute("""
                INSERT OR REPLACE INTO emojis (
                    code, unicode, slug, title, category, description, apple_vendor_description,
                    keywords, also_known_as, version,
                    senses, shortcodes
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            """, (
                code,
                unicode_json,
                slug,
                title,
                category,
                description,
                apple_vendor_description,
                keywords_json,
                aka_json,
                version_json,
                senses_json,
                shortcodes_json
            ))
        except Exception as e:
            print(f"✗ Failed to insert {json_file.name} (slug={slug}): {e}")
            continue

    conn.commit()
    conn.close()
    print("✅ JSON data imported successfully.")


if __name__ == "__main__":
    insert_emoji_data()
