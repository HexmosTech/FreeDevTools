#!/usr/bin/env python3
# Common Functions
import subprocess
import os
import sys
import shutil

def get_b2m_bin():
    script_dir = os.path.dirname(os.path.abspath(__file__))
    return os.path.abspath(os.path.join(script_dir, "..", "b2m"))

def get_script_name():
    # If the script is executed directly or imported, sys.argv[0] holds the script path
    return os.path.splitext(os.path.basename(sys.argv[0]))[0]

def db_status(db_name):
    """
    This command will check the current status of the database.

    Args:
        db_name (str): Simple
    """
    if not db_name.endswith('.db'):
        db_name += '.db'
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
    if not db_name.endswith('.db'):
        db_name += '.db'
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
    if not db_name.endswith('.db'):
        db_name += '.db'
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
        subprocess.run(["make", "stop-prod"], check=True)
    except subprocess.CalledProcessError as e:
        print(f"Error stopping server: {e}")

def start_server():
    try:
        subprocess.run(["make", "start-prod"], check=True)
    except subprocess.CalledProcessError as e:
        print(f"Error starting server: {e}")

def copy(src_name, dst, file_type):
    try:
        b2m_bin = get_b2m_bin()
        script_name = get_script_name()
        subprocess.run([b2m_bin, "copy", src_name, dst, file_type, script_name], check=True)
    except subprocess.CalledProcessError as e:
        print(f"Error copying {file_type} to {dst}: {e}")

def handle_query(sql_name, db_name):
    try:
        if not db_name.endswith('.db'):
            db_name += '.db'
        if '.db' in sql_name:
            sql_name = sql_name.replace('.db', '.sql')
        elif not sql_name.endswith('.sql'):
            sql_name += '.sql'
            
        b2m_bin = get_b2m_bin()
        script_name = get_script_name()
        
        print(f"Executing handle-query {sql_name} on {db_name}")
        subprocess.run([b2m_bin, "handle-query", sql_name, db_name, script_name], check=True)
    except subprocess.CalledProcessError as e:
        print(f"Error handling query: {e}")

def notify(msg):
    try:
        b2m_bin = get_b2m_bin()
        subprocess.run([b2m_bin, "notify", msg], check=True)
    except subprocess.CalledProcessError as e:
        print(f"Error sending notification: {e}")

def get_local_db(short_name):
    try:
        b2m_bin = get_b2m_bin()
        script_name = get_script_name()
        result = subprocess.run([b2m_bin, "get-version", short_name, script_name], capture_output=True, text=True, check=True)
        
        lines = result.stdout.strip().split('\n')
        local_db_name = lines[-1].strip()
        print(f"Local DB name for {short_name} is {local_db_name}")
        return local_db_name
    except subprocess.CalledProcessError as e:
        print(f"Error getting local db version for {short_name}: {e}")
        print(f"B2M Error Output: {e.stderr}")
        return None

def get_latest_db(db_name):
    try:
        if not db_name.endswith('.db'):
            db_name += '.db'
        b2m_bin = get_b2m_bin()
        script_name = get_script_name()
        result = subprocess.run([b2m_bin, "get-latest", db_name, script_name], capture_output=True, text=True, check=True)
        
        lines = result.stdout.strip().split('\n')
        latest_db_name = lines[-1].strip()
        print(f"Latest version for {db_name} is {latest_db_name}")
        return latest_db_name
    except subprocess.CalledProcessError as e:
        print(f"Error getting latest db version: {e}")
        return db_name

def bump_db_version(db_name):
    try:
        if not db_name.endswith('.db'):
            db_name += '.db'
        b2m_bin = get_b2m_bin()
        script_name = get_script_name()
        result = subprocess.run([b2m_bin, "bump-db-version", db_name, script_name], capture_output=True, text=True, check=True)
        
        # B2M logs to stdout with [INFO] and the actual new db name is printed on a raw line at the end
        lines = result.stdout.strip().split('\n')
        # The last line should be the new db name
        new_db_name = lines[-1].strip()
        print(f"Bumped {db_name} to {new_db_name}")
        return new_db_name
    except subprocess.CalledProcessError as e:
        print(f"Error bumping db version: {e}")
        return db_name

# Initialize logging automatically when imported
setup_logging()
