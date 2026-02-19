#!/usr/bin/env python3
"""
Simple script to import icons_data.json into PNG icons database.
Also copies SVG files to public directory.
"""

import json
import shutil
import sqlite3
from pathlib import Path

BASE_DIR = Path(__file__).parent
JSON_FILE = BASE_DIR / "icons_data.json"
SVG_DIR = BASE_DIR / "svgs"
DB_PATH = Path(__file__).parent.parent.parent / "db" / "all_dbs" / "png-icons-db-v5.db"
PUBLIC_DIR = Path(__file__).parent.parent.parent / "public" / "svg_icons"


def ensure_schema(conn: sqlite3.Connection) -> None:
    """Ensure the database schema includes url_hash column."""
    cur = conn.cursor()
    
    # Check if url_hash column exists
    cur.execute("PRAGMA table_info(icon);")
    columns = [row[1] for row in cur.fetchall()]
    
    if "url_hash" not in columns:
        print("Adding url_hash column to icon table...")
        cur.execute("ALTER TABLE icon ADD COLUMN url_hash TEXT;")
        conn.commit()
        print("✓ Added url_hash column")
    
    # Create index on url_hash if it doesn't exist
    cur.execute("SELECT name FROM sqlite_master WHERE type='index' AND name='idx_icon_url_hash';")
    if not cur.fetchone():
        cur.execute("CREATE INDEX idx_icon_url_hash ON icon(url_hash);")
        conn.commit()
        print("✓ Created index on url_hash")


def copy_svg_to_public(icon: dict) -> None:
    """Copy SVG file to public directory under the relevant category."""
    cluster = icon["cluster"]
    name = icon["name"]
    
    # Find the SVG file in svgs directory
    # Try to match by name (remove underscores, try different variations)
    svg_name_variations = [
        f"{name}.svg",
        f"{name.replace('_', '-')}.svg",
        f"{name.replace('_', '-')}-svgrepo-com.svg",
        f"{name}-svgrepo-com.svg",
    ]
    
    # Also extract key words from name for matching
    # e.g., "6180_the_moon" -> ["moon"], "3839_tool_service" -> ["tool", "service"]
    name_parts = name.replace("_", "-").split("-")
    # Remove numeric prefixes
    name_keywords = [part for part in name_parts if not part.isdigit()]
    
    svg_file = None
    for variation in svg_name_variations:
        potential_file = SVG_DIR / variation
        if potential_file.exists():
            svg_file = potential_file
            break
    
    # If not found by name, try to find by checking all SVGs using keywords
    if not svg_file and SVG_DIR.exists():
        for svg_path in SVG_DIR.glob("*.svg"):
            svg_stem = svg_path.stem.lower()
            # Check if any keyword from the name appears in the SVG filename
            for keyword in name_keywords:
                if keyword.lower() in svg_stem:
                    svg_file = svg_path
                    break
            if svg_file:
                break
    
    if not svg_file:
        print(f"⚠ Warning: SVG file not found for {cluster}/{name}")
        print(f"   Available SVGs: {list(SVG_DIR.glob('*.svg'))}")
        return
    
    # Create destination directory
    dest_dir = PUBLIC_DIR / cluster
    dest_dir.mkdir(parents=True, exist_ok=True)
    
    # Copy SVG file
    dest_file = dest_dir / f"{name}.svg"
    shutil.copy2(svg_file, dest_file)
    print(f"✓ Copied {svg_file.name} -> public/svg_icons/{cluster}/{name}.svg")


def import_json() -> None:
    """Import icons from JSON file to database."""
    if not JSON_FILE.exists():
        print(f"✗ JSON file not found: {JSON_FILE}")
        return

    if not DB_PATH.exists():
        print(f"✗ Database not found: {DB_PATH}")
        return

    with open(JSON_FILE, "r", encoding="utf-8") as f:
        data = json.load(f)

    icons = data.get("icons", [])
    if not icons:
        print("✗ No icons found in JSON file")
        return
    
    # Copy SVG files to public directory
    print("Copying SVG files to public directory...")
    for icon in icons:
        copy_svg_to_public(icon)

    with sqlite3.connect(DB_PATH) as conn:
        ensure_schema(conn)
        cur = conn.cursor()

        insert_sql = """
        INSERT OR IGNORE INTO icon(
            id, url_hash, cluster, name, base64, description, usecases, synonyms, tags,
            industry, emotional_cues, enhanced, img_alt, url, updated_at
        ) VALUES(?, ?, ?, ?, ?, ?, ?, json(?), json(?), ?, ?, ?, ?, ?, ?)
        """

        inserted = 0
        for icon in icons:
            try:
                # Convert url_hash from string to int
                url_hash = int(icon["url_hash"])
                # Build URL from cluster and name
                url = f"/freedevtools/png_icons/{icon['cluster']}/{icon['name']}"
                
                cur.execute(
                    insert_sql,
                    (
                        url_hash,  # id - set to same as url_hash
                        url_hash,  # url_hash - PRIMARY KEY
                        icon["cluster"],
                        icon["name"],
                        icon["base64"],
                        icon["description"],
                        icon["usecases"],
                        json.dumps(icon["synonyms"]),
                        json.dumps(icon["tags"]),
                        icon["industry"],
                        icon["emotional_cues"],
                        icon["enhanced"],
                        icon["img_alt"],
                        url,
                        icon["updated_at"],
                    ),
                )
                inserted += 1
            except Exception as e:
                print(f"✗ Failed to insert {icon['name']}: {e}")
                import traceback
                traceback.print_exc()

        conn.commit()
        print(f"✓ Inserted {inserted} icons into database")
        print(f"\n✓ SVG files copied to public/svg_icons/")
        print(f"  Run 'make update-public-file-to-b2 file=public/svg_icons/<cluster>/<name>.svg' to upload to B2")


if __name__ == "__main__":
    import_json()

