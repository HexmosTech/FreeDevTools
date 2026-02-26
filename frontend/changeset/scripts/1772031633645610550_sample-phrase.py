# Template Version: v1
# script_name : 1772031633645610550_sample-phrase
# phrase : sample-phrase

## Predifned Imports and Functions 
import sqlite3
import urllib.parse
import os
import time

DB_NAME = "ipm-db"

## Import Common Functions
from changeset import db_status, db_download, db_upload # Still many more should be added.

def inserted_queries(db_name):
    """
    This function should insert the new data in the db.
    These will be in ipm-db-v1.sql file. 
    """
    # execute queries from `changeset/dbs/1772031633645610550_sample-phrase/ipm-db-v1.sql` file to `changeset/dbs/1772031633645610550_sample-phrase/ipm-db-v2.db` file.
    
    return None

def main():
    # Check status of db.
    status = db_status(DB_NAME)
    # If status is outdated_db, then download db from b2.
    if status == "outdated_db":
        db_download(DB_NAME)
        cp_queries(DB_NAME)
        inserted_queries(DB_NAME)
        rename_db(DB_NAME)
        stop_server()
        copy_db(DB_NAME)
        update_db(DB_NAME)
        start_server()
        upload_db(DB_NAME)
    # If status is ready_to_upload, then upload db to b2.
    if status == "ready_to_upload":
        stop_server()
        copy_db(DB_NAME)
        start_server()
        db_upload(DB_NAME)
    # If status is up_to_date, then do nothing.
    elif status == "up_to_date":
        pass

if __name__ == "__main__":
    main()
