#!/usr/bin/env python3
"""
drop_emoji_db.py

Drops (deletes) all tables from emoji.db.

Use this when you've modified your schema in script1
and need to fully rebuild tables from scratch.
"""

import sqlite3
import sys
from pathlib import Path

DB_PATH = "emoji.db"


def drop_all_tables():
    if not Path(DB_PATH).exists():
        print(f"⚠️  Database file '{DB_PATH}' not found.")
        sys.exit(1)

    conn = sqlite3.connect(DB_PATH)
    cur = conn.cursor()

    # Disable foreign keys temporarily
    cur.execute("PRAGMA foreign_keys = OFF;")

    # Fetch all table names
    cur.execute("SELECT name FROM sqlite_master WHERE type='table';")
    tables = [row[0] for row in cur.fetchall()]

    if not tables:
        print("⚠️  No tables found in the database.")
        conn.close()
        sys.exit(0)

    print(f"💣 Found {len(tables)} tables. Dropping them all...")

    for table in tables:
        try:
            cur.execute(f"DROP TABLE IF EXISTS {table};")
            print(f"🗑️  Dropped table: {table}")
        except Exception as e:
            print(f"✗ Failed to drop {table}: {e}")

    conn.commit()
    conn.close()

    print("✅ All tables dropped successfully. Schema fully cleared.")


if __name__ == "__main__":
    drop_all_tables()
