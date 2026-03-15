# Template Version: v1
# script_name : 1772894931041279165_ipm-db-dialy-backup
# phrase : ipm-db-dialy-backup

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
    handle_query(sql_name, target_db_name, "cron")
    return None

def main():
    global DB_NAME
    DB_NAME = get_local_db(DB_SHORT_NAME, "cron")
    if not DB_NAME:
        print(f"Could not find local database for {DB_SHORT_NAME}")
        return

    # Check status of db.
    status = db_status(DB_NAME, "cron")
    print(status)
    
    # If status is up_to_date, then do nothing.
    if status == "up_to_date":
        print(f"Info: {DB_NAME} is up to date, skipping changeset.")
        return

    # If status is outdated_version, then download db from b2.
    elif status == "outdated_version":
        latest_db_name = get_latest_db(DB_NAME, "cron")
        db_download(latest_db_name, "cron")
        copy(DB_NAME, "changeset", "sql")
        inserted_queries(DB_NAME, latest_db_name)
        stop_server()
        new_db_name = bump_db_version(latest_db_name, "cron")
        copy(new_db_name, "all_dbs", "db")
        start_server()
        db_upload(new_db_name, "cron")
        
    # If status is bump_and_upload, then bump and upload db to b2.
    elif status == "bump_and_upload":
        stop_server()
        copy(DB_NAME, "changeset", "db")
        new_db_name = bump_db_version(DB_NAME, "cron")
        copy(new_db_name, "all_dbs", "db")
        print(new_db_name)
        start_server()
        db_upload(new_db_name, "cron")

    # If status is unidentified, then warn the user.
    elif status == "unidentified":
        print(f"Warning: {DB_NAME} has an unidentified status, skipping changeset.")

    # If status is ready_to_upload, then upload db to b2.
    elif status == "ready_to_upload":
        stop_server()
        copy(DB_NAME, "changeset", "db")
        print(DB_NAME)
        start_server()
        db_upload(DB_NAME, "cron")

if __name__ == "__main__":
    main()
