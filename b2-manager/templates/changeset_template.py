# Template Version: v1
# script_name : {{.Timestamp}}_{{.Phrase}}
# phrase : {{.Phrase}}

## Predifned Imports and Functions 
import os

DB_SHORT_NAME = "ipmdb"
import sys

# Add the parent directory (frontend/changeset) to sys.path
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

## Import Common Functions
try:
    from changeset import db_status, db_download, db_upload, start_server, stop_server, bump_db_version, copy, handle_query, get_latest_db, get_local_db
except ImportError as e:
    print(f"Error importing changeset: {e}")
    sys.exit(1)

def inserted_queries(sql_name, target_db_name):
    """
    This function should insert the new data in the db.
    """
    handle_query(sql_name, target_db_name)
    return None

def main():
    global DB_NAME
    DB_NAME = get_local_db(DB_SHORT_NAME)
    if not DB_NAME:
        print(f"Could not find local database for {DB_SHORT_NAME}")
        return

    # Check status of db.
    status = db_status(DB_NAME)
    print(status)
    
    if status == "ready_to_upload":
        print("Ready to upload")
    elif status == "bump_and_upload":
        print("Needs bumping before upload")
    
if __name__ == "__main__":
    main()
