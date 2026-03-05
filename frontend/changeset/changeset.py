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

def copydb_to_changeset_dir(db_name):
    import shutil
    try:
        script_name = get_script_name()
        script_dir = os.path.dirname(os.path.abspath(__file__))
        
        # Determine paths
        # Assuming db.toml is at `frontend/db/all_dbs/db.toml`
        frontend_dir = os.path.abspath(os.path.join(script_dir, ".."))
        server_db_dir = os.path.join(frontend_dir, "db", "all_dbs")
        db_toml_path = os.path.join(frontend_dir, "db.toml")

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
        dest_dir = os.path.join(script_dir, "dbs", script_name, "backup")
        os.makedirs(dest_dir, exist_ok=True)
        dest_path = os.path.join(dest_dir, actual_db_filename)

        print(f"Copying {src_path} to {dest_path}")
        shutil.copy2(src_path, dest_path)
    except Exception as e:
        print(f"Error copying DB to changeset dir: {e}")

def copysql_to_changeset_dir(db_name):
    import shutil
    try:
        script_name = get_script_name()
        script_dir = os.path.dirname(os.path.abspath(__file__))
        
        frontend_dir = os.path.abspath(os.path.join(script_dir, ".."))
        # Check standard locations: db/all_dbs first, then testing/
        possible_src_dirs = [
            os.path.join(frontend_dir, "db", "all_dbs"),
            os.path.abspath(os.path.join(frontend_dir, "..", "b2-manager", "testing"))
        ]
        
        actual_sql_filename = db_name + ".sql"
        src_path = None
        
        for d in possible_src_dirs:
            p = os.path.join(d, actual_sql_filename)
            if os.path.exists(p):
                src_path = p
                break
                
        if not src_path:
            # Maybe it starts with db_name (e.g. test-db-v1.sql)
            for d in possible_src_dirs:
                if not os.path.exists(d): continue
                for f in os.listdir(d):
                    if f.startswith(db_name) and f.endswith(".sql"):
                        src_path = os.path.join(d, f)
                        actual_sql_filename = f
                        break
                if src_path: break

        if not src_path:
            print(f"Error copying SQL: Could not find SQL file for '{db_name}' in standard directories")
            return

        dest_dir = os.path.join(script_dir, "dbs", script_name, "backup")
        os.makedirs(dest_dir, exist_ok=True)
        dest_path = os.path.join(dest_dir, actual_sql_filename)

        print(f"Copying {src_path} to {dest_path}")
        shutil.copy2(src_path, dest_path)
    except Exception as e:
        print(f"Error copying SQL to changeset dir: {e}")

def handle_query(sql_name, db_name):
    try:
        if not db_name.endswith('.db'):
            db_name += '.db'
        if not sql_name.endswith('.sql'):
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
