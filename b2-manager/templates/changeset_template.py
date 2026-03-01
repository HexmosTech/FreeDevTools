# Template Version: v1
# script_name : {{.Timestamp}}_{{.Phrase}}
# phrase : {{.Phrase}}

## Predifned Imports and Functions 
import sqlite3
import urllib.parse
import os
import time

DB_NAME = "ipm-db"

import sys

# Add the parent directory (frontend/changeset) to sys.path
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

## Import Common Functions
try:
    from changeset import db_status, db_download, db_upload, fetch_db_toml, start_server, stop_server, bump_db_version, copydb_to_changeset_dir
except ImportError as e:
    print(f"Error importing changeset: {e}")
    sys.exit(1)

def inserted_queries(db_name):
    """
    This function should insert the new data in the db.
    These will be in ipm-db-v1.sql file. 
    """
    # execute queries from `changeset/dbs/{{.Timestamp}}_{{.Phrase}}/ipm-db-v1.sql` file to `changeset/dbs/{{.Timestamp}}_{{.Phrase}}/ipm-db-v2.db` file.
    
    return None

def main():
    # Check status of db.
    status = db_status(DB_NAME)
    
    # If status is up_to_date, then do nothing.
    if status == "up_to_date":
        return

    # If status is outdated_db, then download db from b2.
    if status == "outdated_db":
        stop_server()
        db_download(DB_NAME)
        inserted_queries(DB_NAME)
        bump_db_version(DB_NAME)
        db_upload(DB_NAME)
        start_server()
        
    # If status is ready_to_upload, then upload db to b2.
    elif status == "ready_to_upload":
        stop_server()
        copydb_to_changeset_dir(DB_NAME)
        start_server()
        db_upload(DB_NAME)

if __name__ == "__main__":
    main()
