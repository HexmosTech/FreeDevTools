#!/usr/bin/env python3
import sqlite3
import sys
import os
from urllib.parse import urlparse
from datetime import datetime, timezone
import argparse

# Database paths
BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
DB_DIR = os.path.join(BASE_DIR, 'db', 'all_dbs')

EMOJI_DB_PATH = os.path.join(DB_DIR, 'emoji-db-v4.db')
CHEATSHEET_DB_PATH = os.path.join(DB_DIR, 'cheatsheets-db-v4.db')
PNG_ICONS_DB_PATH = os.path.join(DB_DIR, 'png-icons-db-v4.db')
SVG_ICONS_DB_PATH = os.path.join(DB_DIR, 'svg-icons-db-v4.db')
TLDR_DB_PATH = os.path.join(DB_DIR, 'tldr-db-v4.db')
MCP_DB_PATH = os.path.join(DB_DIR, 'mcp-db-v5.db')
MAN_PAGES_DB_PATH = os.path.join(DB_DIR, 'man-pages-db-v4.db')
IPM_DB_PATH = os.path.join(DB_DIR, 'ipm-db-v5.db')

def get_current_time_str():
    """Returns current UTC time in ISO format with Z suffix."""
    now = datetime.now(timezone.utc)
    return now.strftime('%Y-%m-%dT%H:%M:%S.%f')[:-3] + 'Z'

def update_db(conn, query, params, desc):
    """Helper to execute update and return description."""
    try:
        cursor = conn.cursor()
        cursor.execute(query, params)
        if cursor.rowcount > 0:
            conn.commit()
            return f"UPDATED {desc}"
        else:
            return f"NOT FOUND {desc}"
    except sqlite3.Error as e:
        print(f"Error updating {desc}: {e}")
        return f"ERROR {desc}"

def process_url(url, conns, dry_run=False):
    parsed = urlparse(url)
    path = parsed.path.strip('/') # e.g. freedevtools/emojis/slug
    segments = path.split('/')
    time_str = get_current_time_str()
    
    # Helper for dry run
    def dry(desc):
        return f"WOULD UPDATE {desc}"

    # 1. Emojis
    # URL: .../emojis/<slug>/ or .../emojis/<category>/<slug>/
    if 'emojis' in segments:
        slug = segments[-1]
        if not slug: return f"SKIPPED (Empty slug): {url}"
        
        if dry_run: return dry(f"Emoji: {slug}")
        return update_db(conns['emoji'], 
                         "UPDATE emojis SET updated_at = ? WHERE slug = ?", 
                         (time_str, slug), 
                         f"Emoji: {slug}")

    # 2. Cheatsheets
    # URL: .../c/<category>/<slug>/
    elif 'c' in segments:
        # segments: [freedevtools, c, category, slug]
        try:
            c_index = segments.index('c')
            if len(segments) > c_index + 2:
                category = segments[c_index + 1]
                slug = segments[c_index + 2]
                if dry_run: return dry(f"Cheatsheet: {category}/{slug}")
                return update_db(conns['cheatsheet'],
                                 "UPDATE cheatsheet SET updated_at = ? WHERE category = ? AND slug = ?",
                                 (time_str, category, slug),
                                 f"Cheatsheet: {category}/{slug}")
        except ValueError:
            pass

    # 3. PNG Icons
    # URL: .../png_icons/<cluster>/<name>/  (Icon)
    # URL: .../png_icons/<cluster>/         (Cluster)
    elif 'png_icons' in segments:
        try:
            idx = segments.index('png_icons')
            # Check for cluster vs icon
            if len(segments) > idx + 2:
                # Icon level
                cluster = segments[idx + 1]
                name = segments[idx + 2]
                if dry_run: return dry(f"PNG Icon: {cluster}/{name}")
                return update_db(conns['png'],
                                 "UPDATE icon SET updated_at = ? WHERE cluster = ? AND name = ?",
                                 (time_str, cluster, name),
                                 f"PNG Icon: {cluster}/{name}")
            elif len(segments) > idx + 1:
                # Cluster level
                cluster = segments[idx + 1]
                if dry_run: return dry(f"PNG Cluster: {cluster}")
                return update_db(conns['png'],
                                 "UPDATE cluster SET updated_at = ? WHERE name = ?",
                                 (time_str, cluster),
                                 f"PNG Cluster: {cluster}")
        except ValueError:
            pass

    # 4. SVG Icons
    # URL: .../svg_icons/<cluster>/<name>/  (Icon)
    # URL: .../svg_icons/<cluster>/         (Cluster)
    elif 'svg_icons' in segments:
        try:
            idx = segments.index('svg_icons')
            if len(segments) > idx + 2:
                # Icon level
                cluster = segments[idx + 1]
                name = segments[idx + 2]
                if dry_run: return dry(f"SVG Icon: {cluster}/{name}")
                return update_db(conns['svg'],
                                 "UPDATE icon SET updated_at = ? WHERE cluster = ? AND name = ?",
                                 (time_str, cluster, name),
                                 f"SVG Icon: {cluster}/{name}")
            elif len(segments) > idx + 1:
                # Cluster level
                cluster = segments[idx + 1]
                if dry_run: return dry(f"SVG Cluster: {cluster}")
                return update_db(conns['svg'],
                                 "UPDATE cluster SET updated_at = ? WHERE name = ?",
                                 (time_str, cluster),
                                 f"SVG Cluster: {cluster}")
        except ValueError:
            pass

    # 5. TLDR
    # URL: .../tldr/...  matches exact DB url column (starting with /freedevtools/...)
    # The DB url has the format /freedevtools/tldr/linux/git/ (with leading slash)
    elif 'tldr' in segments:
        # parsed.path usually starts with /
        db_url_path = parsed.path
        if not db_url_path.endswith('/'):
            db_url_path += '/'
            
        if dry_run: return dry(f"TLDR: {db_url_path}")
        return update_db(conns['tldr'],
                         "UPDATE pages SET updated_at = ? WHERE url = ?",
                         (time_str, db_url_path),
                         f"TLDR: {db_url_path}")

    # 6. MCP
    # URL: .../mcp/<category>/<key>/
    elif 'mcp' in segments:
        key = segments[-1]
        if not key: return f"SKIPPED (Empty key): {url}"
        
        if dry_run: return dry(f"MCP Page: {key}")
        return update_db(conns['mcp'],
                         "UPDATE mcp_pages SET updated_at = ? WHERE key = ?",
                         (time_str, key),
                         f"MCP Page: {key}")

    # 7. Man Pages
    # URL: .../man-pages/.../<slug>/
    elif 'man-pages' in segments:
        slug = segments[-1]
        if not slug: return f"SKIPPED (Empty slug): {url}"
        
        if dry_run: return dry(f"Man Page: {slug}")
        return update_db(conns['man'],
                         "UPDATE man_pages SET updated_at = ? WHERE slug = ?",
                         (time_str, slug),
                         f"Man Page: {slug}")

    # 8. Installerpedia
    # URL: .../installerpedia/<category>/<slug>/
    elif 'installerpedia' in segments:
        # Expected format: .../installerpedia/cli/sqlitebrowser-sqlitebrowser/
        try:
             idx = segments.index('installerpedia')
             if len(segments) > idx + 2:
                 # repo_slug is likely the last segment
                 repo_slug = segments[-1]
                 if not repo_slug: repo_slug = segments[-2] # Safety check for trailing slash issues
                 
                 if dry_run: return dry(f"Installerpedia: {repo_slug}")
                 return update_db(conns['ipm'],
                                  "UPDATE ipm_data SET updated_at = ? WHERE repo_slug = ?",
                                  (time_str, repo_slug),
                                  f"Installerpedia: {repo_slug}")
        except ValueError:
            pass

    return f"SKIPPED (Unknown type): {url}"

def main():
    parser = argparse.ArgumentParser(description="Update updated_at column for URLs.")
    parser.add_argument('file', help="Path to file containing URLs")
    parser.add_argument('--dry-run', action='store_true', help="Don't actually update DB")
    args = parser.parse_args()

    if not os.path.exists(args.file):
        print(f"File not found: {args.file}")
        sys.exit(1)

    # Establish all connections
    # Using a dictionary to hold connections
    conns = {}
    try:
        conns['emoji'] = sqlite3.connect(EMOJI_DB_PATH)
        conns['cheatsheet'] = sqlite3.connect(CHEATSHEET_DB_PATH)
        conns['png'] = sqlite3.connect(PNG_ICONS_DB_PATH)
        conns['svg'] = sqlite3.connect(SVG_ICONS_DB_PATH)
        conns['tldr'] = sqlite3.connect(TLDR_DB_PATH)
        conns['mcp'] = sqlite3.connect(MCP_DB_PATH)
        conns['man'] = sqlite3.connect(MAN_PAGES_DB_PATH)
        conns['ipm'] = sqlite3.connect(IPM_DB_PATH)
    except sqlite3.Error as e:
        print(f"Error connecting to database (check paths): {e}")
        # Print paths for debugging
        print(f"  emoji: {EMOJI_DB_PATH} -> Exists: {os.path.exists(EMOJI_DB_PATH)}")
        print(f"  cheatsheet: {CHEATSHEET_DB_PATH} -> Exists: {os.path.exists(CHEATSHEET_DB_PATH)}")
        print(f"  png: {PNG_ICONS_DB_PATH} -> Exists: {os.path.exists(PNG_ICONS_DB_PATH)}")
        print(f"  svg: {SVG_ICONS_DB_PATH} -> Exists: {os.path.exists(SVG_ICONS_DB_PATH)}")
        print(f"  tldr: {TLDR_DB_PATH} -> Exists: {os.path.exists(TLDR_DB_PATH)}")
        print(f"  mcp: {MCP_DB_PATH} -> Exists: {os.path.exists(MCP_DB_PATH)}")
        print(f"  man: {MAN_PAGES_DB_PATH} -> Exists: {os.path.exists(MAN_PAGES_DB_PATH)}")
        print(f"  ipm: {IPM_DB_PATH} -> Exists: {os.path.exists(IPM_DB_PATH)}")
        sys.exit(1)

    print("Checking database connections...")
    for k in conns.keys():
        print(f"  Connected to {k} DB")

    with open(args.file, 'r') as f:
        urls = [line.strip() for line in f if line.strip()]

    print(f"\nProcessing {len(urls)} URLs...")
    
    stats = {"updated": 0, "not_found": 0, "skipped": 0, "error": 0}
    successful_urls = []
    failed_urls = []

    for url in urls:
        result = process_url(url, conns, args.dry_run)
        print(result)
        
        if result.startswith("UPDATED") or result.startswith("WOULD UPDATE"):
            stats["updated"] += 1
            successful_urls.append(url)
        elif result.startswith("NOT FOUND"):
            stats["not_found"] += 1
            failed_urls.append(f"{url} (Not Found)")
        elif result.startswith("ERROR"):
            stats["error"] += 1
            failed_urls.append(f"{url} (Error)")
        else:
            stats["skipped"] += 1
            failed_urls.append(f"{url} (Skipped)")

    # Close all connections
    for conn in conns.values():
        conn.close()
    
    print("\nSummary:")
    print(f"  Updated: {stats['updated']}")
    print(f"  Not Found: {stats['not_found']}")
    print(f"  Skipped: {stats['skipped']}")
    print(f"  Errors: {stats['error']}")

    print("\n--- Successful URLs ---")
    for u in successful_urls:
        print(u)
        
    print("\n--- Failed URLs ---")
    for u in failed_urls:
        print(u)

if __name__ == "__main__":
    main()
