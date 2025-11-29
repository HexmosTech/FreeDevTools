#!/usr/bin/env python3
"""
Build a SQLite database from TLDR markdown files.

- Scans data/tldr/*/*.md
- Creates SQLite DB at db/all_dbs/tldr-db.db
- Table: url_lookup (WITHOUT ROWID)
- Table: cluster
- Table: overview
"""

import hashlib
import json
import re
import sqlite3
import struct
import yaml
from pathlib import Path
from typing import Any, Dict, List, Optional, Tuple

BASE_DIR = Path(__file__).parent
DATA_DIR = BASE_DIR.parent.parent / "data" / "tldr"
DB_PATH = BASE_DIR.parent.parent / "db" / "all_dbs" / "tldr-db.db"


def create_full_hash(category: str, last_path: str) -> str:
    """Create a SHA-256 hash from category and name."""
    # Normalize input: remove leading/trailing slashes, lowercase
    category = category.strip().lower()
    last_path = last_path.strip().lower()
    
    # Create unique string
    unique_str = f"{category}/{last_path}"
    
    # Compute SHA-256 hash
    return hashlib.sha256(unique_str.encode("utf-8")).hexdigest()


def get_8_bytes(full_hash: str) -> int:
    """Get the first 8 bytes of the hash as a signed 64-bit integer."""
    # Take first 16 hex chars (8 bytes)
    hex_part = full_hash[:16]
    # Convert to bytes
    bytes_val = bytes.fromhex(hex_part)
    # Unpack as signed 64-bit integer (big-endian)
    return struct.unpack(">q", bytes_val)[0]


def ensure_schema(conn: sqlite3.Connection) -> None:
    cur = conn.cursor()

    # Main table for TLDR pages using consistent hashing
    cur.execute(
        """
        CREATE TABLE IF NOT EXISTS url_lookup (
            url_hash INTEGER PRIMARY KEY,
            url TEXT NOT NULL,
            cluster TEXT NOT NULL,          -- Directory name (e.g., 'git', 'aws')
            name TEXT NOT NULL,             -- Command name (e.g., 'git-commit')
            platform TEXT DEFAULT '',       -- From frontmatter 'category' (e.g., 'common', 'linux')
            title TEXT DEFAULT '',          -- From frontmatter
            description TEXT DEFAULT '',    -- From frontmatter or markdown blockquote
            more_info_url TEXT DEFAULT '',  -- From markdown blockquote
            keywords TEXT DEFAULT '[]',     -- JSON array from frontmatter
            features TEXT DEFAULT '[]',     -- JSON array from frontmatter
            examples TEXT DEFAULT '[]',     -- JSON array of {description, cmd}
            raw_content TEXT DEFAULT '',    -- Full markdown content
            path TEXT DEFAULT ''            -- URL path from frontmatter
        ) WITHOUT ROWID;
        """
    )

    # Index for efficient cluster grouping
    cur.execute("CREATE INDEX IF NOT EXISTS idx_url_lookup_cluster ON url_lookup(cluster);")

    # Cluster table (categories)
    cur.execute(
        """
        CREATE TABLE IF NOT EXISTS cluster (
            name TEXT PRIMARY KEY,
            count INTEGER NOT NULL,
            description TEXT DEFAULT '' -- Kept empty as per previous implementation
        );
        """
    )

    # Overview table
    cur.execute(
        """
        CREATE TABLE IF NOT EXISTS overview (
            id INTEGER PRIMARY KEY CHECK(id = 1),
            total_count INTEGER NOT NULL
        );
        """
    )

    conn.commit()


def parse_tldr_file(file_path: Path) -> Optional[Dict[str, Any]]:
    """
    Parse a TLDR markdown file.
    Returns a dictionary with extracted data or None if parsing fails.
    """
    try:
        content = file_path.read_text(encoding="utf-8")
    except Exception as e:
        print(f"Error reading {file_path}: {e}")
        return None

    # Split frontmatter and content
    parts = re.split(r"^---\s*$", content, maxsplit=2, flags=re.MULTILINE)
    if len(parts) < 3:
        print(f"Skipping {file_path.name}: Invalid frontmatter format")
        return None

    frontmatter_raw = parts[1]
    markdown_body = parts[2]

    # Parse Frontmatter
    try:
        fm = yaml.safe_load(frontmatter_raw) or {}
    except yaml.YAMLError as e:
        print(f"Error parsing YAML in {file_path.name}: {e}")
        return None

    # Extract fields from frontmatter
    title = fm.get("title", "")
    # Clean title: remove " | Online Free DevTools by Hexmos" suffix if present
    title = title.split(" | ")[0]
    
    platform = fm.get("category", "")
    path_url = fm.get("path", "")
    keywords = json.dumps(fm.get("keywords", []))
    features = json.dumps(fm.get("features", []))
    
    # Parse Markdown Body
    description_lines = []
    more_info_url = ""
    examples = []
    
    lines = markdown_body.strip().splitlines()
    i = 0
    while i < len(lines):
        line = lines[i].strip()
        
        # Blockquotes (Description & More Info)
        if line.startswith(">"):
            clean_line = line.lstrip("> ").strip()
            if clean_line.startswith("More information:"):
                # Extract URL
                match = re.search(r"<(.*?)>", clean_line)
                if match:
                    more_info_url = match.group(1)
            else:
                description_lines.append(clean_line)
        
        # Examples
        elif line.startswith("- "):
            example_desc = line.lstrip("- ").strip()
            # Look ahead for the command
            cmd = ""
            j = i + 1
            while j < len(lines):
                next_line = lines[j].strip()
                if next_line.startswith("`") and next_line.endswith("`"):
                    cmd = next_line.strip("`")
                    # Handle {{ }} placeholders if needed, but keeping them as is is usually fine for display
                    i = j # Advance main loop
                    break
                elif next_line == "":
                    j += 1
                    continue
                else:
                    # Found something else, stop looking for command
                    break
            
            if cmd:
                examples.append({"description": example_desc, "cmd": cmd})
        
        i += 1

    description = " ".join(description_lines)
    
    # Calculate hash
    # Use platform (category) from frontmatter as cluster if available
    # Otherwise fallback to directory name
    cluster = platform if platform else file_path.parent.name
    name = file_path.stem
    
    # Use cluster and name for hashing to match URL structure
    # The URL is /tldr/[cluster]/[name]
    hash_category = cluster
    
    full_hash = create_full_hash(hash_category, name)
    url_hash = get_8_bytes(full_hash)
    
    # Update path to match the new URL structure
    # This overrides the path from frontmatter which might be inconsistent
    path_url = f"{cluster}/{name}/"
    
    return {
        "url_hash": url_hash,
        "url": f"{hash_category}/{name}",
        "cluster": cluster,
        "name": name,
        "platform": platform,
        "title": title,
        "description": description,
        "more_info_url": more_info_url,
        "keywords": keywords,
        "features": features,
        "examples": json.dumps(examples),
        "raw_content": content,
        "path": path_url
    }


def process_all_files(conn: sqlite3.Connection) -> None:
    """Walk through DATA_DIR and populate the database."""
    cur = conn.cursor()
    
    # Prepare SQL
    insert_sql = """
    INSERT OR REPLACE INTO url_lookup (
        url_hash, url, cluster, name, platform, title, description, more_info_url,
        keywords, features, examples, raw_content, path
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    """
    
    files = list(DATA_DIR.glob("**/*.md"))
    print(f"Found {len(files)} markdown files.")
    
    batch = []
    count = 0
    
    for file_path in files:
        data = parse_tldr_file(file_path)
        if data:
            batch.append((
                data["url_hash"],
                data["url"],
                data["cluster"],
                data["name"],
                data["platform"],
                data["title"],
                data["description"],
                data["more_info_url"],
                data["keywords"],
                data["features"],
                data["examples"],
                data["raw_content"],
                data["path"]
            ))
            
            if len(batch) >= 100:
                cur.executemany(insert_sql, batch)
                conn.commit()
                count += len(batch)
                batch = []
                print(f"Processed {count} files...", end="\r")
    
    if batch:
        cur.executemany(insert_sql, batch)
        conn.commit()
        count += len(batch)
    
    print(f"\nSuccessfully inserted {count} pages.")


def populate_cluster_and_overview(conn: sqlite3.Connection) -> None:
    """Populate cluster and overview tables."""
    cur = conn.cursor()
    
    print("Populating cluster table...")
    cur.execute("DELETE FROM cluster")
    cur.execute("""
        INSERT INTO cluster (name, count, description)
        SELECT cluster, COUNT(*), '' 
        FROM url_lookup 
        GROUP BY cluster
    """)
    
    print("Populating overview table...")
    cur.execute("DELETE FROM overview")
    cur.execute("""
        INSERT INTO overview (id, total_count)
        SELECT 1, COUNT(*) FROM url_lookup
    """)
    
    conn.commit()


def main() -> None:
    # Ensure output directory exists
    DB_PATH.parent.mkdir(parents=True, exist_ok=True)
    
    # Remove existing DB to start fresh (optional, but good for full rebuilds)
    if DB_PATH.exists():
        DB_PATH.unlink()

    print(f"Creating database at {DB_PATH}")
    with sqlite3.connect(DB_PATH) as conn:
        ensure_schema(conn)
        process_all_files(conn)
        populate_cluster_and_overview(conn)
        
        # Verify
        cur = conn.cursor()
        cur.execute("SELECT total_count FROM overview")
        row = cur.fetchone()
        if row:
            print(f"Total pages in DB: {row[0]}")
        else:
            print("Total pages in DB: 0")

if __name__ == "__main__":
    main()
