#!/usr/bin/env python3
import sqlite3
import os
from pathlib import Path

db_dir = Path("../db/all_dbs")
total_pages = 0

# Database configurations: (db_file, table_name, description)
databases = [
    ("man-pages-db-v4.db", "man_pages", "Man Pages"),
    ("emoji-db-v4.db", "images", "Emojis"),
    ("mcp-db-v5.db", "mcp_pages", "MCP Pages"),
    ("cheatsheets-db-v4.db", "cheatsheet", "Cheatsheets"),
    ("tldr-db-v4.db", "pages", "TLDR Pages"),
    ("svg-icons-db-v4.db", None, "SVG Icons"),  # Will auto-detect
    ("png-icons-db-v4.db", None, "PNG Icons"),  # Will auto-detect
]

print("Counting detail pages from all databases:\n")
print("-" * 60)

for db_file, table_name, description in databases:
    db_path = db_dir / db_file
    if not db_path.exists():
        print(f"{description:20} {db_file:30} - File not found")
        continue
    
    try:
        con = sqlite3.connect(str(db_path))
        cur = con.cursor()
        
        # If table_name is None, auto-detect the largest table
        if table_name is None:
            cur.execute("SELECT name FROM sqlite_master WHERE type='table' ORDER BY name")
            tables = [row[0] for row in cur.fetchall()]
            # Skip system tables
            content_tables = [t for t in tables if t not in ['sqlite_sequence', 'sqlite_stat1', 'sqlite_stat2', 'sqlite_stat3', 'sqlite_stat4', 'category', 'overview', 'cluster']]
            if content_tables:
                # Find the table with the most rows
                max_count = 0
                best_table = None
                for table in content_tables:
                    try:
                        cur.execute(f"SELECT COUNT(*) FROM {table}")
                        count = cur.fetchone()[0]
                        if count > max_count:
                            max_count = count
                            best_table = table
                    except:
                        continue
                if best_table:
                    table_name = best_table
                else:
                    table_name = content_tables[0] if content_tables else None
            else:
                print(f"{description:20} {db_file:30} - No content table found")
                con.close()
                continue
        else:
            # Check if specified table exists
            cur.execute("SELECT name FROM sqlite_master WHERE type='table' AND name=?", (table_name,))
            if not cur.fetchone():
                print(f"{description:20} {db_file:30} - Table '{table_name}' not found")
                con.close()
                continue
        
        # Count rows
        cur.execute(f"SELECT COUNT(*) FROM {table_name}")
        count = cur.fetchone()[0]
        total_pages += count
        
        print(f"{description:20} {db_file:30} {count:>10,} pages")
        con.close()
    except Exception as e:
        print(f"{description:20} {db_file:30} - Error: {e}")

print("-" * 60)
print(f"{'TOTAL':20} {'':30} {total_pages:>10,} pages")

