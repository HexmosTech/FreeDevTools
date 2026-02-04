#!/usr/bin/env python3
"""
Script to create freedevtools_user in PostgreSQL
Uses master credentials to create a new user with limited permissions
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

# Master credentials (used only to create the new user)
MASTER_HOST = os.getenv("FDT_PG_DB_HOST")
MASTER_PORT = os.getenv("FDT_PG_DB_PORT", "5432")
MASTER_USER = os.getenv("FDT_PG_DB_USER")
MASTER_PASSWORD = os.getenv("FDT_PG_DB_PASSWORD")
DB_NAME = os.getenv("FDT_PG_DB_NAME", "freedevtools")

# New user credentials
NEW_USER = "freedevtools_user"
NEW_PASSWORD = os.getenv("FREEDEVTOOLS_USER_PASSWORD")

if not MASTER_HOST or not MASTER_USER or not MASTER_PASSWORD:
    print("Error: FDT_PG_DB_HOST, FDT_PG_DB_USER, and FDT_PG_DB_PASSWORD must be set in .env file")
    sys.exit(1)

if not NEW_PASSWORD:
    print("Error: FREEDEVTOOLS_USER_PASSWORD must be set in .env file")
    print("Example: FREEDEVTOOLS_USER_PASSWORD=your_secure_password_here")
    sys.exit(1)

def create_database():
    """Create the database if it doesn't exist"""
    try:
        conn = psycopg2.connect(
            host=MASTER_HOST,
            port=MASTER_PORT,
            user=MASTER_USER,
            password=MASTER_PASSWORD,
            database="postgres"
        )
        conn.set_isolation_level(ISOLATION_LEVEL_AUTOCOMMIT)
        cursor = conn.cursor()
        
        cursor.execute("SELECT 1 FROM pg_database WHERE datname = %s", (DB_NAME,))
        exists = cursor.fetchone()
        
        if not exists:
            cursor.execute(f'CREATE DATABASE "{DB_NAME}"')
            print(f"✅ Created database '{DB_NAME}'")
        else:
            print(f"ℹ️  Database '{DB_NAME}' already exists")
        
        cursor.close()
        conn.close()
    except Exception as e:
        print(f"Error creating database: {e}")
        sys.exit(1)

def create_user():
    """Create the new user"""
    try:
        conn = psycopg2.connect(
            host=MASTER_HOST,
            port=MASTER_PORT,
            user=MASTER_USER,
            password=MASTER_PASSWORD,
            database="postgres"
        )
        conn.set_isolation_level(ISOLATION_LEVEL_AUTOCOMMIT)
        cursor = conn.cursor()
        
        # Check if user exists
        cursor.execute("SELECT 1 FROM pg_user WHERE usename = %s", (NEW_USER,))
        exists = cursor.fetchone()
        
        if exists:
            cursor.execute(f"ALTER USER {NEW_USER} WITH PASSWORD %s", (NEW_PASSWORD,))
            print(f"ℹ️  User '{NEW_USER}' already exists, updated password")
        else:
            cursor.execute(f"CREATE USER {NEW_USER} WITH PASSWORD %s", (NEW_PASSWORD,))
            print(f"✅ Created user '{NEW_USER}'")
        
        cursor.close()
        conn.close()
    except Exception as e:
        print(f"Error creating user: {e}")
        sys.exit(1)

def grant_permissions():
    """Grant permissions to the new user"""
    try:
        # Grant database permissions
        conn = psycopg2.connect(
            host=MASTER_HOST,
            port=MASTER_PORT,
            user=MASTER_USER,
            password=MASTER_PASSWORD,
            database="postgres"
        )
        conn.set_isolation_level(ISOLATION_LEVEL_AUTOCOMMIT)
        cursor = conn.cursor()
        
        cursor.execute(f"GRANT CONNECT ON DATABASE {DB_NAME} TO {NEW_USER}")
        
        cursor.close()
        conn.close()
        
        # Grant schema and table permissions on the target database
        conn = psycopg2.connect(
            host=MASTER_HOST,
            port=MASTER_PORT,
            user=MASTER_USER,
            password=MASTER_PASSWORD,
            database=DB_NAME
        )
        conn.set_isolation_level(ISOLATION_LEVEL_AUTOCOMMIT)
        cursor = conn.cursor()
        
        # Grant schema permissions (must be done on the target database)
        cursor.execute(f"GRANT USAGE ON SCHEMA public TO {NEW_USER}")
        cursor.execute(f"GRANT CREATE ON SCHEMA public TO {NEW_USER}")
        
        # Grant permissions on existing tables
        cursor.execute(f"GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO {NEW_USER}")
        cursor.execute(f"GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO {NEW_USER}")
        
        # Grant permissions on future tables
        cursor.execute(f"ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO {NEW_USER}")
        cursor.execute(f"ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON SEQUENCES TO {NEW_USER}")
        
        cursor.close()
        conn.close()
        
        print(f"✅ Granted permissions to '{NEW_USER}' on database '{DB_NAME}'")
    except Exception as e:
        print(f"Error granting permissions: {e}")
        sys.exit(1)

if __name__ == "__main__":
    print("Creating freedevtools_user in PostgreSQL...")
    create_database()
    create_user()
    grant_permissions()
    print("")
    print("✅ Done!")
    print("")
    print("Update your configuration files to use:")
    print(f"  User: {NEW_USER}")
    print("  Password: (set in FREEDEVTOOLS_USER_PASSWORD)")

