#!/usr/bin/env python3
"""
reset_emoji_db.py

Deletes all rows from all tables in emoji.db,
so you can reimport everything from scratch cleanly.

It keeps the table structure intact.
"""

import sqlite3
import sys
from pathlib import Path

DB_PATH = "emoji.db"


def reset_database():
    if not Path(DB_PATH).exists():
        print(f"⚠️  Database {DB_PATH} not found.")
        sys.exit(1)

    conn = sqlite3.connect(DB_PATH)
    cur = conn.cursor()

    # Disable foreign key checks temporarily
    cur.execute("PRAGMA foreign_keys = OFF;")

    # Get all table names
    cur.execute("SELECT name FROM sqlite_master WHERE type='table';")
    tables = [row[0] for row in cur.fetchall()]

    if not tables:
        print("⚠️  No tables found in the database.")
        conn.close()
        sys.exit(0)

    print(f"🧹 Found {len(tables)} tables. Clearing all data...")

    for table in tables:
        try:
            cur.execute(f"DELETE FROM {table};")
            cur.execute(f"DELETE FROM sqlite_sequence WHERE name='{table}';")  # reset AUTOINCREMENT
            print(f"✓ Cleared {table}")
        except Exception as e:
            print(f"✗ Failed to clear {table}: {e}")

    conn.commit()

    # Re-enable foreign key checks
    cur.execute("PRAGMA foreign_keys = ON;")

    conn.close()
    print("✅ Database reset complete — all tables cleared.")


if __name__ == "__main__":
    reset_database()
