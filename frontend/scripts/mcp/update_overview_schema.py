import sqlite3
from pathlib import Path

BASE_DIR = Path(__file__).parent.parent.parent
DB_PATH = BASE_DIR / "db" / "all_dbs" / "mcp-db.db"

def update_overview_schema():
    print(f"Updating DB at {DB_PATH}...")
    conn = sqlite3.connect(DB_PATH)
    cur = conn.cursor()

    try:
        # 1. Add column if it doesn't exist
        try:
            cur.execute("ALTER TABLE overview ADD COLUMN total_category_count INTEGER NOT NULL DEFAULT 0")
            print("Added total_category_count column.")
        except sqlite3.OperationalError as e:
            if "duplicate column name" in str(e):
                print("Column total_category_count already exists.")
            else:
                raise e

        # 2. Calculate total categories
        cur.execute("SELECT COUNT(*) FROM category")
        total_categories = cur.fetchone()[0]
        print(f"Total categories found: {total_categories}")

        # 3. Update overview table
        # Assuming row with id=1 exists as per build script
        cur.execute("UPDATE overview SET total_category_count = ? WHERE id = 1", (total_categories,))
        print("Updated overview table.")

        conn.commit()
        print("Success.")

    except Exception as e:
        print(f"Error: {e}")
    finally:
        conn.close()

if __name__ == "__main__":
    update_overview_schema()
