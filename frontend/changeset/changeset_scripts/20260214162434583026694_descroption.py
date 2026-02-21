# Template Version: v1
# <script_name> : <nanosecond-TimeStamp>_<phrase>
# 

## Predifned Imports and Functions 
import sqlite3
import urllib.parse
import os
import time

DB_NAME = "ipm-db-v5.db"
## Import Common Functions
from changeset import db_status, db_download, db_upload # Still many more should be added.

def db_migration(db_name):
    ## Donwload b2 db to changeset db location which will be predefined.
    status = db_download(db_name)
    if status == "downloaded":
        ## Now we have the db in our changeset db location.
        ## Now we need to migrate new data from the server db to the new db.
        return True
    else:
        return False


def copy_db(db_name):
    try:
        subprocess.run(["cp", db_name, "changeset/dbs/"], check=True)
        return True
    except subprocess.CalledProcessError as e:
        print(f"Error copying {db_name}: {e}")
        return False

def handle_db_status(db_name):
    status = db_status(db_name)
    if status == "outdated_db":
        if copy_db(db_name):
            if db_migration(db_name):
                if db_upload(db_name):
                    copy_db(db_name)
                    print("DB Migration successful")
                else:
                    print("Error: db_upload failed")
            else:
                print("Error: db_migration failed")
        else:
            print("Error: copy_db failed")
    elif status == "ready_to_upload":
        db_upload(db_name)
    elif status == "up_to_date":
        pass
    else:
        print(f"Error: Unknown status {status}")
    

def main(db_name):
    handle_db_status(db_name)


if __name__ == "__main__":

    main(DB_NAME)