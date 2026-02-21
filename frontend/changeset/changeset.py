# Common Functions
#!/usr/bin/env python3
import subprocess

def db_status(db_name):
    print(f"Executing: {db_name}")
    try:
        subprocess.run(["../b2m", "--status", db_name], check=True)
    except subprocess.CalledProcessError as e:
        print(f"Error checking status for {db_name}: {e}")

def db_upload(db_name):
    print(f"Executing: {db_name}")
    try:
        subprocess.run(["../b2m", "--upload", db_name], check=True)
    except subprocess.CalledProcessError as e:
        print(f"Error uploading {db_name}: {e}")

def db_download(db_name):
    """
    This function will download the db from b2.
    This db will be present in `/changeset/dbs/` directory.
    This is mainly done to avoid any data loss.


    
    """

    print(f"Executing: {db_name}")
    try:
        subprocess.run(["../b2m", "--download", db_name], check=True)
    except subprocess.CalledProcessError as e:
        print(f"Error downloading {db_name}: {e}")

