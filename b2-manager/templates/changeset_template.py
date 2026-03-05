# Template Version: v1
# script_name : {{.Timestamp}}_{{.Phrase}}
# phrase : {{.Phrase}}

## Predifned Imports and Functions 
import sqlite3
import urllib.parse
import os
import time

SHORT_NAME = "ipmdb"

import sys

# Add the parent directory (frontend/changeset) to sys.path
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

## Import Common Functions
try:
    from changeset import db_status, db_download, db_upload, fetch_db_toml, start_server, stop_server, bump_db_version, copydb_to_changeset_dir, copysql_to_changeset_dir, handle_query, get_local_db, get_latest_db
except ImportError as e:
    print(f"Error importing changeset: {e}")
    sys.exit(1)

def inserted_queries(sql_name, target_db_name):
    """
    This function should insert the new data in the db.
    These will be in ipm-db-v1.sql file. 
    """
    handle_query(sql_name, target_db_name)
    return None

def main():
    global DB_NAME
    DB_NAME = get_local_db(SHORT_NAME)
    if not DB_NAME:
        print(f"Could not find local database for {SHORT_NAME}")
        return

    # Check status of db.
    status = db_status(DB_NAME)
    print(status)
    
    # If status is up_to_date, then do nothing.
    if status == "up_to_date":
        return

    # If status is outdated_db, then download db from b2.
    elif status == "outdated_db":
        stop_server()
        db_download(DB_NAME)
        inserted_queries(DB_NAME)
        new_db_name = bump_db_version(DB_NAME)
        db_upload(new_db_name)
        start_server()
        
    # If status is ready_to_upload, then upload db to b2.
    elif status == "ready_to_upload":
        stop_server()
        copydb_to_changeset_dir(DB_NAME)
        start_server()
        db_upload(DB_NAME)

    # If status is outdated_version, then warn the user.
    elif status == "outdated_version":
        print(f"Warning: {DB_NAME} is an old version, skipping changeset.")

if __name__ == "__main__":
    main()
