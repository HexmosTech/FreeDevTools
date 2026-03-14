# Template Version: v1
# script_name : 1773242681492990101_test-db-last-mod-update
# phrase : test-db-last-mod-update

## Predifned Imports and Functions 
import os

# Shortname of the db.
# This should be same as the db.toml file.
# Here are the shortnames of the dbs.
# bannerdb 
# cheatsheetsdb 
# emojidb 
# ipmdb 
# manpagesdb 
# mcpdb 
# pngiconsdb 
# svgiconsdb 
# tldrdb

DB_SHORT_NAME = "test"
import sys

# Add the parent directory (frontend/changeset) to sys.path
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

## Import Common Functions
try:
    from changeset import  db_upload, download_latest_db, get_local_db
except ImportError as e:
    print(f"Error importing changeset: {e}")
    sys.exit(1)

def update_db(db_path):
    """
    Update Stage:
    Execute SQL query using sqlite3 cli.
    """

    # 2. Update Stage: Have sql query defined under this function.
    query = "UPDATE my_table SET mod_time = CURRENT_TIMESTAMP;"
    print(f"Executing update_db for {db_path}...")
    import subprocess
    try:
        # execute sql query using sqlite3 cli
        subprocess.run(["sqlite3", db_path, query], check=True)
        return True
    except subprocess.CalledProcessError as e:
        print(f"Failed to execute query: {e}")
        return False

def main():
    global DB_NAME
    DB_NAME = get_local_db(DB_SHORT_NAME)
    if not DB_NAME:
        print(f"Could not find local database for {DB_SHORT_NAME}")
        return

    # 1. Check Status of DB
    db_path, err = download_latest_db(DB_SHORT_NAME,"fdt-db")
    if err:
        print(err)
        return
    
    # 2. Update DB
    update_success = update_db(db_path)
    if not update_success:
        print("Update failed.")
        return
    
    # 3. Upload DB
    db_upload(db_path,"fdt-db")
    
    

if __name__ == "__main__":
    main()
