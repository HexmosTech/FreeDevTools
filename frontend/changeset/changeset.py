#!/usr/bin/env python3
# Common Functions
import subprocess

def db_status(db_name):
    print(f"Executing: {db_name}")
    try:
        result = subprocess.run(["../b2m", "--status", db_name], capture_output=True, text=True, check=True)
        # Assuming b2m outputs the status to stdout. We might want to return it.
        # But based on the template, we'll return the stdout stripped.
        # Wait, the spec doesn't explicitly return it in the provided code snippet, but the template code expects return:
        # status = db_status(DB_NAME)
        # So I will return the output
        output_lines = result.stdout.strip().split('\n')
        # If the b2m command outputs extra info, the status might be the last line.
        # For safety I will just return the whole stripped output, 
        # or maybe the script just expects exactly 'outdated_db', 'ready_to_upload', 'up_to_date'
        return result.stdout.strip()
    except subprocess.CalledProcessError as e:
        print(f"Error checking status for {db_name}: {e}")
        return None

def db_upload(db_name):
    print(f"Executing: {db_name}")
    try:
        subprocess.run(["../b2m", "--upload", db_name], check=True)
    except subprocess.CalledProcessError as e:
        print(f"Error uploading {db_name}: {e}")

def db_download(db_name):
    """
    Function description.
    """
    print(f"Executing: {db_name}")
    try:
        subprocess.run(["../b2m", "--download", db_name], check=True)
    except subprocess.CalledProcessError as e:
        print(f"Error downloading {db_name}: {e}")
