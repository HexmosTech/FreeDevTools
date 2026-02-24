#!/usr/bin/env python3
"""
Bump DB version and etag: copy each selected DB to next version (e.g. v4 -> v5),
then set updated_at / last_updated_at to now for all rows. Excludes banner-db.
Usage: bump_etag.py etag --db=all   or   bump_etag.py etag --db=mcp
"""
import argparse
import os
import re
import shutil
import sqlite3
import sys
from datetime import datetime, timezone

BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
DB_DIR = os.path.join(BASE_DIR, "db", "all_dbs")

# --db= value -> (filename base, list of (table, column) to set to now)
DB_CONFIG = {
    "emoji": (
        "emoji",
        [
            ("emojis", "updated_at"),
            ("category", "updated_at"),
            ("overview", "last_updated_at"),
        ],
    ),
    "cheatsheets": (
        "cheatsheets",
        [
            ("cheatsheet", "updated_at"),
            ("category", "updated_at"),
            ("overview", "last_updated_at"),
        ],
    ),
    "png-icons": (
        "png-icons",
        [
            ("icon", "updated_at"),
            ("cluster", "updated_at"),
            ("overview", "last_updated_at"),
        ],
    ),
    "svg-icons": (
        "svg-icons",
        [
            ("icon", "updated_at"),
            ("cluster", "updated_at"),
            ("overview", "last_updated_at"),
        ],
    ),
    "tldr": (
        "tldr",
        [
            ("pages", "updated_at"),
            ("cluster", "updated_at"),
            ("overview", "last_updated_at"),
        ],
    ),
    "mcp": (
        "mcp",
        [
            ("mcp_pages", "updated_at"),
            ("category", "updated_at"),
            ("overview", "last_updated_at"),
        ],
    ),
    "man-pages": (
        "man-pages",
        [
            ("man_pages", "updated_at"),
            ("category", "updated_at"),
            ("sub_category", "updated_at"),
            ("overview", "last_updated_at"),
        ],
    ),
    "ipm": (
        "ipm",
        [
            ("ipm_data", "updated_at"),
            ("ipm_category", "updated_at"),
            ("overview", "last_updated_at"),
        ],
    ),
}

# Allow --db= cheatsheet, png, svg, man, etc. -> map to key in DB_CONFIG
DB_ALIASES = {
    "cheatsheet": "cheatsheets",
    "png": "png-icons",
    "svg": "svg-icons",
    "man": "man-pages",
    "man_pages": "man-pages",
}


def get_current_time_str():
    now = datetime.now(timezone.utc)
    return now.strftime("%Y-%m-%dT%H:%M:%S.%f")[:-3] + "Z"


def find_latest_db_path(base_name):
    """Return (full_path, version_int) for the latest *-db-vN.db for this base, or (None, 0)."""
    pattern = re.compile(rf"^{re.escape(base_name)}-db-v(\d+)\.db$")
    best_path = None
    best_ver = 0
    for name in os.listdir(DB_DIR):
        if name.endswith("-wal") or name.endswith("-shm"):
            continue
        m = pattern.match(name)
        if m:
            ver = int(m.group(1))
            if ver > best_ver:
                best_ver = ver
                best_path = os.path.join(DB_DIR, name)
    return (best_path, best_ver)


def copy_db_to_next_version(src_path, base_name, current_ver):
    next_ver = current_ver + 1
    dest_name = f"{base_name}-db-v{next_ver}.db"
    dest_path = os.path.join(DB_DIR, dest_name)
    shutil.copy2(src_path, dest_path)
    return dest_path, next_ver


def get_table_columns(conn, table):
    """Return set of column names for table. Table name is from our config (safe)."""
    cur = conn.execute(f'PRAGMA table_info("{table}")')
    return {row[1] for row in cur.fetchall()}


def verify_schema(conn, table_cols):
    """Check each (table, column) exists. Return list of (table, col) that are valid."""
    valid = []
    for table, col in table_cols:
        cols = get_table_columns(conn, table)
        if not cols:
            print(f"    WARN: table '{table}' not found, skip")
            continue
        if col not in cols:
            print(f"    WARN: column '{table}.{col}' not found (table has: {', '.join(sorted(cols))}), skip")
            continue
        valid.append((table, col))
    return valid


def filter_table_cols(table_cols, column_arg):
    if not column_arg:
        return table_cols
    # Ensure column_arg is a list if it's passed as a single string (for safety) or append
    if isinstance(column_arg, str):
        column_arg = [column_arg]

    filtered = []
    # Deduplicate in case they pass the same arg multiple times
    for table, col in table_cols:
        matched = False
        for arg in column_arg:
            if arg == "overview" and table == "overview":
                matched = True
            elif arg == "category" and table in ("category", "cluster", "ipm_category"):
                matched = True
            elif arg == "subcategory" and table == "sub_category":
                matched = True
            elif arg == "end_page" and table not in ("overview", "category", "sub_category", "cluster", "ipm_category"):
                matched = True
        
        if matched:
            filtered.append((table, col))
            
    # Deduplicate the output list
    return list(dict.fromkeys(filtered))


def update_timestamps_in_db(db_path, table_cols, time_str):
    conn = sqlite3.connect(db_path)
    conn.execute("PRAGMA busy_timeout = 30000")
    try:
        to_update = verify_schema(conn, table_cols)
        for table, col in to_update:
            try:
                cur = conn.execute(f'UPDATE "{table}" SET "{col}" = ?', (time_str,))
                conn.commit()
                print(f"    {table}.{col}: {cur.rowcount} rows")
            except sqlite3.OperationalError as e:
                print(f"    {table}.{col}: skip ({e})")
    finally:
        conn.close()


def main():
    parser = argparse.ArgumentParser(description="Bump DB version and set all updated_at to now.")
    parser.add_argument("etag", nargs="?", default="etag", help="Subcommand (etag)")
    parser.add_argument("--db", required=True, help="DB to bump: all, mcp, emoji, cheatsheets, png-icons, svg-icons, man-pages, tldr, ipm (or aliases: cheatsheet, png, svg, man)")
    parser.add_argument("--column", action="append", choices=["overview", "category", "subcategory", "end_page"], help="Specific table type to update (optional, can be passed multiple times)")
    parser.add_argument("--check", action="store_true", help="Only verify schema (tables/columns) in latest DBs, do not copy or update")
    args = parser.parse_args()

    db_arg = args.db.strip().lower()
    if db_arg == "all":
        selected = list(DB_CONFIG.keys())
    else:
        key = DB_ALIASES.get(db_arg, db_arg)
        if key not in DB_CONFIG:
            print(f"Unknown --db={args.db}. Use: all, mcp, emoji, cheatsheets, png-icons, svg-icons, man-pages, tldr, ipm", file=sys.stderr)
            sys.exit(1)
        selected = [key]

    if not os.path.isdir(DB_DIR):
        print(f"DB dir not found: {DB_DIR}", file=sys.stderr)
        sys.exit(1)

    if args.check:
        errors = []
        for key in selected:
            base_name, table_cols = DB_CONFIG[key]
            table_cols = filter_table_cols(table_cols, args.column)
            if not table_cols:
                print(f"[{key}] No tables matched --column={args.column}")
                continue
            src_path, ver = find_latest_db_path(base_name)
            if not src_path:
                print(f"[{key}] No DB found for {base_name}-db-v*.db")
                errors.append(key)
                continue
            conn = sqlite3.connect(src_path)
            valid = verify_schema(conn, table_cols)
            conn.close()
            expected = len(table_cols)
            if len(valid) == expected:
                print(f"[{key}] {os.path.basename(src_path)}: OK ({expected} table.col)")
            else:
                print(f"[{key}] {os.path.basename(src_path)}: only {len(valid)}/{expected} valid")
                errors.append(key)
        sys.exit(1 if errors else 0)

    time_str = get_current_time_str()
    print(f"Timestamp: {time_str}\n")

    for key in selected:
        base_name, table_cols = DB_CONFIG[key]
        table_cols = filter_table_cols(table_cols, args.column)
        if not table_cols:
            print(f"[{key}] No tables matched --column={args.column}, skip")
            continue
        src_path, ver = find_latest_db_path(base_name)
        if not src_path:
            print(f"[{key}] No DB found for {base_name}-db-v*.db, skip")
            continue
        print(f"[{key}] Copy {base_name}-db-v{ver}.db -> v{ver + 1} ...")
        dest_path, new_ver = copy_db_to_next_version(src_path, base_name, ver)
        print(f"    -> {os.path.basename(dest_path)}")
        print(f"    Updating timestamps in new DB:")
        update_timestamps_in_db(dest_path, table_cols, time_str)
        print()

    print("Done.")


if __name__ == "__main__":
    main()
