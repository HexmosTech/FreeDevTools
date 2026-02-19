#!/usr/bin/env python3
"""
remove_image_data_column.py

Removes the image_data column from the images table in emoji-db-v5.db.
SQLite doesn't support DROP COLUMN directly, so we need to:
1. Create a new table without image_data
2. Copy all data (except image_data) to the new table
3. Drop the old table
4. Rename the new table
"""

import sqlite3
import sys
from pathlib import Path

DB_PATH = "db/all_dbs/emoji-db-v5.db"


def get_current_schema(cur: sqlite3.Cursor) -> str:
    """Get the current CREATE TABLE statement for images table."""
    cur.execute("SELECT sql FROM sqlite_master WHERE type='table' AND name='images'")
    result = cur.fetchone()
    if result:
        return result[0]
    return None


def remove_image_data_column():
    if not Path(DB_PATH).exists():
        print(f"❌ Database file '{DB_PATH}' not found.")
        sys.exit(1)

    conn = sqlite3.connect(DB_PATH)
    cur = conn.cursor()

    # Check if images table exists
    cur.execute("SELECT name FROM sqlite_master WHERE type='table' AND name='images'")
    if not cur.fetchone():
        print("❌ Images table not found in database.")
        conn.close()
        sys.exit(1)

    # Get current schema
    current_schema = get_current_schema(cur)
    print(f"📋 Current schema:\n{current_schema}\n")

    # Check if image_data column exists
    cur.execute("PRAGMA table_info(images)")
    columns = [row[1] for row in cur.fetchall()]
    
    if 'image_data' not in columns:
        print("⚠️  image_data column does not exist. Nothing to remove.")
        conn.close()
        sys.exit(0)

    print(f"📊 Current columns: {', '.join(columns)}")
    print(f"\n🗑️  Removing image_data column...")

    # Start transaction
    conn.execute("BEGIN TRANSACTION")

    try:
        # Step 1: Create new table without image_data
        # Determine if it's WITHOUT ROWID based on current schema
        is_without_rowid = "WITHOUT ROWID" in current_schema.upper()
        
        # Build column list excluding image_data
        columns_to_copy = [col for col in columns if col != 'image_data']
        
        # Get column info to preserve types and constraints
        cur.execute("PRAGMA table_info(images)")
        col_info_list = cur.fetchall()
        col_info_dict = {row[1]: row for row in col_info_list}
        
        # Find PRIMARY KEY column(s)
        pk_columns = [row[1] for row in col_info_list if row[5] > 0]
        
        # Create new table preserving original structure
        columns_def = []
        for col in columns_to_copy:
            col_info = col_info_dict[col]
            col_type = col_info[2]
            not_null = "NOT NULL" if col_info[3] else ""
            
            if col in pk_columns:
                # This is a PRIMARY KEY column
                if len(pk_columns) == 1:
                    columns_def.append(f"{col} {col_type} PRIMARY KEY {not_null}".strip())
                else:
                    # Composite primary key - handle differently
                    columns_def.append(f"{col} {col_type} {not_null}".strip())
            else:
                columns_def.append(f"{col} {col_type} {not_null}".strip())
        
        # Add composite PRIMARY KEY if needed
        if len(pk_columns) > 1:
            pk_cols_str = ', '.join([col for col in pk_columns if col in columns_to_copy])
            columns_def.append(f"PRIMARY KEY ({pk_cols_str})")

        create_table_sql = f"""
        CREATE TABLE images_new (
            {', '.join(columns_def)}
        )"""
        
        if is_without_rowid:
            create_table_sql += " WITHOUT ROWID"

        print(f"📝 Creating new table without image_data...")
        cur.execute(create_table_sql)

        # Step 2: Copy data (excluding image_data)
        columns_str = ', '.join(columns_to_copy)
        copy_sql = f"INSERT INTO images_new ({columns_str}) SELECT {columns_str} FROM images"
        
        print(f"📋 Copying data (excluding image_data)...")
        cur.execute(copy_sql)
        rows_copied = cur.rowcount
        print(f"✅ Copied {rows_copied} rows")

        # Step 3: Drop old table
        print(f"🗑️  Dropping old images table...")
        cur.execute("DROP TABLE images")

        # Step 4: Rename new table
        print(f"🔄 Renaming images_new to images...")
        cur.execute("ALTER TABLE images_new RENAME TO images")

        # Step 5: Recreate indexes if they exist
        cur.execute("SELECT sql FROM sqlite_master WHERE type='index' AND tbl_name='images'")
        indexes = cur.fetchall()
        for index_sql in indexes:
            if index_sql[0] and 'sqlite_autoindex' not in index_sql[0]:
                # Recreate index on new table
                print(f"📇 Recreating index...")
                cur.execute(index_sql[0].replace('images', 'images_new').replace('images_new', 'images'))

        # Commit transaction
        conn.commit()
        print(f"\n✅ Successfully removed image_data column from images table!")
        print(f"   Rows preserved: {rows_copied}")
        print(f"   New columns: {', '.join(columns_to_copy)}")

    except Exception as e:
        conn.rollback()
        print(f"\n❌ Error during migration: {e}")
        print("   Transaction rolled back. Database unchanged.")
        conn.close()
        sys.exit(1)

    conn.close()


if __name__ == "__main__":
    remove_image_data_column()

