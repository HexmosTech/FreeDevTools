#!/usr/bin/env python3
"""
Script to create bookmark database in PostgreSQL
Reads configuration from .env file
"""

import os
import sys
from pathlib import Path

try:
    import psycopg2
    from psycopg2.extensions import ISOLATION_LEVEL_AUTOCOMMIT
except ImportError:
    print("Error: psycopg2 is required. Install it with: pip install psycopg2-binary")
    sys.exit(1)

def load_env_file():
    """Load environment variables from .env file"""
    env_file = Path(".env")
    if env_file.exists():
        with open(env_file) as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith("#"):
                    if "=" in line:
                        key, value = line.split("=", 1)
                        os.environ[key.strip()] = value.strip().strip('"').strip("'")

# Load .env file
load_env_file()

DB_HOST = os.getenv("FDT_PG_DB_HOST")
DB_PORT = os.getenv("FDT_PG_DB_PORT", "5432")
# Always use freedevtools_user (not the master user)
DB_USER = "freedevtools_user"
DB_PASSWORD = os.getenv("FREEDEVTOOLS_USER_PASSWORD")
DB_NAME = os.getenv("FDT_PG_DB_NAME", "freedevtools")

if not DB_HOST or not DB_PASSWORD:
    print("Error: FDT_PG_DB_HOST and FREEDEVTOOLS_USER_PASSWORD must be set in .env file")
    sys.exit(1)

def create_database():
    """Skip database creation - database should be created by create_freedevtools_user script"""
    # freedevtools_user doesn't have permission to create databases
    # Database should already exist from create_freedevtools_user script
    print(f"ℹ️  Skipping database creation (database '{DB_NAME}' should already exist)")
    print(f"ℹ️  If database doesn't exist, run create_freedevtools_user script first")

def create_table():
    """Create the bookmarks table"""
    try:
        conn = psycopg2.connect(
            host=DB_HOST,
            port=DB_PORT,
            user=DB_USER,
            password=DB_PASSWORD,
            database=DB_NAME
        )
        cursor = conn.cursor()
        
        # Create table
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS bookmarks (
                uId TEXT NOT NULL,
                url TEXT NOT NULL,
                category TEXT NOT NULL,
                category_hash_id BIGINT NOT NULL,
                uId_hash_id BIGINT NOT NULL,
                created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
                PRIMARY KEY (uId_hash_id, url)
            );
        """)
        
        # Create indexes
        cursor.execute("CREATE INDEX IF NOT EXISTS idx_bookmarks_uid ON bookmarks(uId_hash_id);")
        cursor.execute("CREATE INDEX IF NOT EXISTS idx_bookmarks_category ON bookmarks(category_hash_id);")
        cursor.execute("CREATE INDEX IF NOT EXISTS idx_bookmarks_url ON bookmarks(url);")
        
        conn.commit()
        cursor.close()
        conn.close()
        
        print(f"✅ Created bookmarks table and indexes in database '{DB_NAME}'")
    except Exception as e:
        print(f"Error creating table: {e}")
        sys.exit(1)

if __name__ == "__main__":
    print("Creating bookmark database in PostgreSQL...")
    create_database()
    create_table()
    print("✅ Done!")

