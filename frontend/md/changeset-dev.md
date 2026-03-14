# How to Use Changset Script 

I am taking example of `test-db.db` updating `last_mod` in db in `my_table` table.

Current data

| id | content                          | last_mod            |
|----|----------------------------------|---------------------|
| 1  | Project deadline is next Friday. | 2026-03-11 15:15:29 |
| 2  | Buy groceries: milk, eggs, bread | 2026-03-11 15:16:23 |
| 3  | Meeting notes from Tuesday       | 2026-03-11 15:16:24 |


Final Data (After Update)

| id | content                          | last_mod            |
|----|----------------------------------|---------------------|
| 1  | Project deadline is next Friday. | 2026-03-11 20:00:00 |
| 2  | Buy groceries: milk, eggs, bread | 2026-03-11 20:00:00 |
| 3  | Meeting notes from Tuesday       | 2026-03-11 20:00:00 |


## Create Changeset Script

In `frontend` directory run

```shell
make create-changeset test-db-last-mod-update
```

It will create changeset script in `changeset/scripts` directory.

## Tempalte Structure of changeset script

All the predefined functions are in `changeset.py` file.

```py
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


DB_SHORT_NAME = "Add your db short name here"
import sys

# Add the parent directory (frontend/changeset) to sys.path
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

## Import Common Functions
try:
    from changeset import db_status, db_download, db_upload, start_server, stop_server, bump_db_version, copy, handle_query, get_latest_db, get_local_db
except ImportError as e:
    print(f"Error importing changeset: {e}")
    sys.exit(1)

def main():
    global DB_NAME
    DB_NAME = get_local_db(DB_SHORT_NAME)
    if not DB_NAME:
        print(f"Could not find local database for {DB_SHORT_NAME}")
        return

    # Check status of db.
    status = db_status(DB_NAME)
    print(status)
    
    

if __name__ == "__main__":
    main()

```

## How To Update DB

1. Download Latest DB
2. Update DB
3. Upload DB
4. Handling Edge Case.


1. Use `get_latest_db` function to get latest db.

DB_SHORT_NAME = "test" # This should be same as the db.toml file.
```py
    download_latest_db(DB_SHORT_NAME,"fdt-db") 
```

Inputs: 
    1. Select directory. (changset or fdt-db) 
    2. Select db. (ipmdb, emojidb, etc)


Changeset: For cron based jobs to avoid data loss.
All_Dbs: For downloading to fdt-db directory. 

Output:
    1. Success Followed With Db Path.
    2. Failed
    
    
If db is upto date it will return success and db path.

2. Update DB:
    1. This stage is for updating the db.
    2. Wheather you are updating single row or converting an HTML to a string, all the sql queries and pre processing should be defined under this function.
    3. This fucntions you should only define.

This should be done using sqlite3 cli.
```py
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

```


3. Upload DB:
    1. Use `db_upload` function to upload the db.
    2. If Failed to upload. Continue to Stage 4 Handling Edge Case.

```py 
   db_upload(DB_NAME, "fdt-db")
```
Input: 
    1. Db name 
    2. Directory.
Output: 
    1. Success 
    2. Failed Followed with Error Message.


4. Handling Edge Case.
    1. If db Status `outdate_db` return error saying db outdated please run script again.
    2. If db Status `locked` Show error saying someone is uploading.


## Final Example 

```py

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
    err = db_upload(db_path,"fdt-db")
    if err:
        print(err)
        return
    
    

if __name__ == "__main__":
    main()


```

