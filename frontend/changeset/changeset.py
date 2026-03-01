#!/usr/bin/env python3
# Common Functions
import subprocess
import os
import sys

def get_b2m_bin():
    script_dir = os.path.dirname(os.path.abspath(__file__))
    return os.path.abspath(os.path.join(script_dir, "..", "b2m"))

def get_script_name():
    # If the script is executed directly or imported, sys.argv[0] holds the script path
    return os.path.splitext(os.path.basename(sys.argv[0]))[0]

def db_status(db_name):
    """
    Check the synchronization status of a database on B2.
    """
    print(f"Executing status check for: {db_name}")
    try:
        b2m_bin = get_b2m_bin()
        result = subprocess.run([b2m_bin, "status", db_name], capture_output=True, text=True, check=True)
        return result.stdout.strip()
    except subprocess.CalledProcessError as e:
        print(f"Error checking status for {db_name}: {e}")
        return None

def db_upload(db_name):
    """
    Upload the local database file directly to B2 storage.
    """
    print(f"Executing upload for: {db_name}")
    try:
        b2m_bin = get_b2m_bin()
        script_name = get_script_name()

        cmd = [b2m_bin, "upload", db_name, script_name]
        subprocess.run(cmd, check=True)
    except subprocess.CalledProcessError as e:
        print(f"Error uploading {db_name}: {e}")

def db_download(db_name):
    """
    Download the database file directly from B2 storage.
    """
    print(f"Executing download for: {db_name}")
    try:
        b2m_bin = get_b2m_bin()
        script_name = get_script_name()

        cmd = [b2m_bin, "download", db_name, script_name]
        subprocess.run(cmd, check=True)
    except subprocess.CalledProcessError as e:
        print(f"Error downloading {db_name}: {e}")

def fetch_db_toml():
    """
    Fetch the db.toml configuration file from B2 storage.
    """
    print("Executing: fetch-db-toml")
    try:
        b2m_bin = get_b2m_bin()
        subprocess.run([b2m_bin, "fetch-db-toml"], check=True)
    except subprocess.CalledProcessError as e:
        print(f"Error fetching db.toml: {e}")

class TeeLogger:
    def __init__(self, stream, log_file):
        self.stream = stream
        self.log_file = log_file

    def write(self, data):
        self.stream.write(data)
        self.log_file.write(data)
        self.log_file.flush()

    def flush(self):
        self.stream.flush()
        self.log_file.flush()

def setup_logging():
    import datetime
    script_name = get_script_name()
    script_dir = os.path.dirname(os.path.abspath(__file__))
    log_dir = os.path.abspath(os.path.join(script_dir, "logs"))
    os.makedirs(log_dir, exist_ok=True)
    
    log_file_path = os.path.join(log_dir, f"{script_name}.log")
    f = open(log_file_path, "a")
    f.write(f"\n--- Execution Started at {datetime.datetime.now()} ---\n")
    
    sys.stdout = TeeLogger(sys.stdout, f)
    sys.stderr = TeeLogger(sys.stderr, f)


def stop_server():
    try:
        subprocess.run(["make", "stop-dev"], check=True)
    except subprocess.CalledProcessError as e:
        print(f"Error stopping server: {e}")

def start_server():
    try:
        subprocess.run(["make", "start-dev"], check=True)
    except subprocess.CalledProcessError as e:
        print(f"Error starting server: {e}")

def copydb_to_changeset_dir(db_name):
    import shutil
    try:
        script_name = get_script_name()
        script_dir = os.path.dirname(os.path.abspath(__file__))
        
        # Determine paths
        # Assuming db.toml is at `frontend/db/all_dbs/db.toml`
        frontend_dir = os.path.abspath(os.path.join(script_dir, ".."))
        server_db_dir = os.path.join(frontend_dir, "db", "all_dbs")
        db_toml_path = os.path.join(server_db_dir, "db.toml")

        # Basic parser for db.toml to find actual active db name mapped to `db_name`
        actual_db_filename = None
        if os.path.exists(db_toml_path):
            import re
            with open(db_toml_path, "r") as f:
                content = f.read()
            # Searching for things like `ipmdb = "ipm-db-v2.db"` where DB_NAME is maybe `ipm-db-v2.db` or just the base
            # If the user passes db_name exactly as "ipm-db", we search broadly for match
            # But normally we just copy the one requested directly if it exists.
            # Let's see if the exact db_name exists directly in server config as a filename:
            if db_name in content:
                # We expect the file `db_name` to be present if it's the full filename. 
                # If it's a prefix, we try finding the _exact_ one referenced.
                # Assuming the user passes a prefix `ipm-db` and we want `ipm-db-v2.db`
                # Let's just find the first file matching `db_name` in the server_db_dir
                pass

        # To be safe, look in `server_db_dir` for a file that contains `db_name` and `.db`
        for f in os.listdir(server_db_dir):
            if f.startswith(db_name) and f.endswith(".db"):
                actual_db_filename = f
                break
        
        if not actual_db_filename:
            print(f"Error copying db: Could not find active DB for '{db_name}' in '{server_db_dir}'")
            return

        src_path = os.path.join(server_db_dir, actual_db_filename)
        dest_dir = os.path.join(script_dir, "dbs", "backup", script_name)
        os.makedirs(dest_dir, exist_ok=True)
        dest_path = os.path.join(dest_dir, actual_db_filename)

        print(f"Copying {src_path} to {dest_path}")
        shutil.copy2(src_path, dest_path)
    except Exception as e:
        print(f"Error copying DB to changeset dir: {e}")

def bump_db_version(db_name):
    try:
        b2m_bin = get_b2m_bin()
        script_name = get_script_name()
        subprocess.run([b2m_bin, "bump-db-version", db_name, script_name], check=True)
    except subprocess.CalledProcessError as e:
        print(f"Error bumping db version: {e}")

# Initialize logging automatically when imported
setup_logging()
