#!/usr/bin/env python3
# Common Functions
import subprocess
import os
import sys
import shutil
import json

def get_b2m_bin():
    """
    Returns the absolute path to the b2m binary.
    
    Inputs:
        None
    Returns: 
        str: Absolute path to the b2m binary file.
    """
    script_dir = os.path.dirname(os.path.abspath(__file__))
    return os.path.abspath(os.path.join(script_dir, "..", "b2m"))

def get_script_name():
    """
    Gets the name of the script currently being executed.
    
    Inputs: Just Call this function at the beginning of your script.
    Returns:
        str: The name of the executing script without the extension.
    """
    # If the script is executed directly or imported, sys.argv[0] holds the script path
    return os.path.splitext(os.path.basename(sys.argv[0]))[0]



def _parse_or_bool(result_stdout):
    if not result_stdout:
        return True
    try:
        return json.loads(result_stdout)
    except json.JSONDecodeError:
        return True

def run_command(cmd):
    print(f"Executing: {' '.join(cmd)}")
    try:
        result = subprocess.run(cmd, capture_output=True, text=True, check=True)
        if result.stdout and result.stdout.strip():
            print(f"Output: {result.stdout.strip()}")
        return result
    except subprocess.CalledProcessError as e:
        print(f"Error executing command: {e}")
        if e.stdout:
            print(f"STDOUT: {e.stdout.strip()}")
        if e.stderr:
            print(f"STDERR: {e.stderr.strip()}")
        raise

def db_status(db_path, changeset_dir=None):
    """
    This command will check the current status of the database.

    Inputs:
        db_path (str): Simple name or full path of the database. The '.db' extension is appended if missing.
        changeset_dir (str, optional): Overrides the config specifically for this changeset.
    Returns:
        str or None: The status string (e.g., 'up_to_date', 'outdated_db') if successful, or None on error.
    """
    db_name = os.path.basename(db_path)
    if not db_name.endswith('.db'):
        db_name += '.db'
    try:
        b2m_bin = get_b2m_bin()
        cmd = [b2m_bin, "--json", "status", db_name]
        
        if changeset_dir == "cron":
            cmd.append(f"changset_dir={get_script_name()}")
            
        result = run_command(cmd)
        data = json.loads(result.stdout)
        return data.get("status", "unidentified")
    except subprocess.CalledProcessError as e:
        print(f"Caught error: {e}")
        return None

def db_upload(db_path, changeset_dir=None):
    """
    Upload the local database file directly to B2 storage.
    
    Inputs:
        db_path (str): The name or full path of the database to upload. The '.db' extension is appended if missing.
        changeset_dir (str, optional): Overrides the config specifically for this changeset.
    Returns:
        bool/dict: Parsed json response or a boolean status.
    """
    db_name = os.path.basename(db_path)
    if not db_name.endswith('.db'):
        db_name += '.db'
    try:
        b2m_bin = get_b2m_bin()
        
        cmd = [b2m_bin, "--json", "upload", db_name]
        if changeset_dir == "cron":
            cmd.append(f"changset_dir={get_script_name()}")
            
        result = run_command(cmd)
        return _parse_or_bool(result.stdout)
    except subprocess.CalledProcessError as e:
        print(f"Caught error: {e}")
        return False

def db_download(db_name, changeset_dir=None):
    """
    Download the database file directly from B2 storage.
    
    Inputs:
        db_name (str): The name of the database to download. The '.db' extension is appended if missing.
        changeset_dir (str, optional): Overrides the config specifically for this changeset.
    Returns:
        bool/dict: Parsed json response or a boolean status.
    """
    if not db_name.endswith('.db'):
        db_name += '.db'
    try:
        b2m_bin = get_b2m_bin()
        
        cmd = [b2m_bin, "--json", "download", db_name]
        if changeset_dir == "cron":
            cmd.append(f"changset_dir={get_script_name()}")
            
        result = run_command(cmd)
        return _parse_or_bool(result.stdout)
    except subprocess.CalledProcessError as e:
        print(f"Caught error: {e}")
        return False

def fetch_db_toml(changeset_dir=None):
    """
    Fetch the db.toml configuration file from B2 storage.
    
    Inputs:
        changeset_dir (str, optional): Overrides the config specifically for this changeset.
    Returns:
        bool/dict: Parsed json response or a boolean status.
    """
    try:
        b2m_bin = get_b2m_bin()
        cmd = [b2m_bin, "--json", "fetch-db-toml"]
        if changeset_dir == "cron":
            cmd.append(f"changset_dir={get_script_name()}")
            
        result = run_command(cmd)
        return _parse_or_bool(result.stdout)
    except subprocess.CalledProcessError as e:
        print(f"Caught error: {e}")
        return False

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
    """
    Initializes logging for the current script's execution.
    Creates a log file in the local "logs" directory.
    
    Inputs:
        None
    Returns:
        None
    """
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
    """
    Stops the production server using the 'make stop-prod' command.
    
    Inputs:
        None
    Returns:
        bool: True on success, False on failure.
    """
    try:
        frontend_dir = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), ".."))
        run_command(["make", "-C", frontend_dir, "stop-prod"])
        return True
    except subprocess.CalledProcessError as e:
        print(f"Caught error: {e}")
        return False

def start_server():
    """
    Starts the production server using the 'make start-prod' command.
    
    Inputs:
        None
    Returns:
        bool: True on success, False on failure.
    """
    try:
        frontend_dir = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), ".."))
        run_command(["make", "-C", frontend_dir, "start-prod"])
        return True
    except subprocess.CalledProcessError as e:
        print(f"Caught error: {e}")
        return False

def copy(src_name, dst, file_type):
    """
    Copies a file to a destination directory based on the file type.
    
    Inputs:
        src_name (str): The source file name/path.
        dst (str): The destination directory name.
        file_type (str): The type of file being copied (e.g., 'db', 'toml').
        changeset_dir (str, optional): Overrides the config specifically for this changeset.
    Returns:
        bool/dict: Parsed json response or a boolean status.
    """
    try:
        b2m_bin = get_b2m_bin()
        cmd = [b2m_bin, "--json", "copy", src_name, dst, file_type, f"changset_dir={get_script_name()}"]
            
        result = run_command(cmd)
        return _parse_or_bool(result.stdout)
    except subprocess.CalledProcessError as e:
        print(f"Caught error: {e}")
        return False

def handle_query(sql_path, db_path, changeset_dir=None):
    """
    Executes an SQL query file against a specified database.
    
    Inputs:
        sql_path (str): The name or path of the SQL file containing the query.
        db_path (str): The name or path of the target database.
        changeset_dir (str, optional): Overrides the config specifically for this changeset.
    Returns:
        bool/dict: Parsed json response or a boolean status.
    """
    try:
        db_name = os.path.basename(db_path)
        if not db_name.endswith('.db'):
            db_name += '.db'
            
        sql_name = os.path.basename(sql_path)
        if '.db' in sql_name:
            sql_name = sql_name.replace('.db', '.sql')
        elif not sql_name.endswith('.sql'):
            sql_name += '.sql'
            
        b2m_bin = get_b2m_bin()
        cmd = [b2m_bin, "--json", "handle-query", sql_name, db_name]
        
        if changeset_dir == "cron":
            cmd.append(f"changset_dir={get_script_name()}")
        
        result = run_command(cmd)
        return _parse_or_bool(result.stdout)
    except subprocess.CalledProcessError as e:
        print(f"Caught error: {e}")
        return False

def notify(msg):
    """
    Sends a custom notification message (e.g., via Discord) using b2m.
    
    Inputs:
        msg (str): The notification message to send.
    Returns:
        bool/dict: Parsed json response or a boolean status.
    """
    try:
        b2m_bin = get_b2m_bin()
        result = run_command([b2m_bin, "--json", "notify", msg])
        return _parse_or_bool(result.stdout)
    except subprocess.CalledProcessError as e:
        print(f"Caught error: {e}")
        return False

def get_local_db(short_name, changeset_dir=None):
    """
    Retrieves the local DB filename from db.toml using its short name.
    
    Inputs:
        short_name (str): The short name of the database.
        changeset_dir (str, optional): Overrides the config specifically for this changeset.
    Returns:
        str or None: The local DB filename if found, None otherwise.
    """
    try:
        b2m_bin = get_b2m_bin()
        cmd = [b2m_bin, "--json", "get-version", short_name]
        if changeset_dir == "cron":
            cmd.append(f"changset_dir={get_script_name()}")
            
        result = run_command(cmd)
        
        data = json.loads(result.stdout.strip())
        return data.get("version_db_name")
    except (subprocess.CalledProcessError, ValueError) as e:
        print(f"Caught error: {e}")
        return None

def get_latest_db(db_name, changeset_dir=None):
    """
    Gets the latest version string/filename of a database from B2 storage.
    
    Inputs:
        db_name (str): The name of the database.
        changeset_dir (str, optional): Overrides the config specifically for this changeset.
    Returns:
        str: The latest version database name if successfully retrieved, otherwise returns the input db_name.
    """
    try:
        if not db_name.endswith('.db'):
            db_name += '.db'
        b2m_bin = get_b2m_bin()
        cmd = [b2m_bin, "--json", "get-latest", db_name]
        if changeset_dir == "cron":
            cmd.append(f"changset_dir={get_script_name()}")
            
        result = run_command(cmd)
        
        data = json.loads(result.stdout.strip())
        return data.get("latest_db_name", db_name)
    except (subprocess.CalledProcessError, ValueError) as e:
        print(f"Caught error: {e}")
        return db_name

def bump_db_version(db_name, changeset_dir=None):
    """
    Increments the DB version and updates db.toml.
    
    Inputs:
        db_name (str): The name of the database to bump.
        changeset_dir (str, optional): Overrides the config specifically for this changeset.
    Returns:
        str: The newly bumped database name if successful, otherwise returns the input db_name.
    """
    try:
        if not db_name.endswith('.db'):
            db_name += '.db'
        b2m_bin = get_b2m_bin()
        cmd = [b2m_bin, "--json", "bump-db-version", db_name]
        if changeset_dir == "cron":
            cmd.append(f"changset_dir={get_script_name()}")
            
        result = run_command(cmd)
        
        data = json.loads(result.stdout.strip())
        return data.get("bumped_db_name", db_name)
    except (subprocess.CalledProcessError, ValueError) as e:
        print(f"Caught error: {e}")
        return db_name

def download_latest_db(short_name, changeset_dir=None):
    """
    Check the status of the database and download the latest version if outdated.
    Loops until the database is up_to_date.
    
    Inputs:
        short_name (str): The short name of the database (e.g. 'test').
        changeset_dir (str, optional): Overrides the config specifically for this changeset.
    Returns:
        tuple: A tuple containing (db_path, None) on success, or (None, err_msg) on failure.
    """
    try:
        b2m_bin = get_b2m_bin()
        cmd = [b2m_bin, "--json", "download-latest-db", short_name]
        if changeset_dir == "cron":
            cmd.append(f"changset_dir={get_script_name()}")
            
        result = run_command(cmd)
        
        data = json.loads(result.stdout.strip())
        
        if data.get("status") == "error":
            err_msg = data.get("message", "Unknown backend error")
            return None, err_msg
            
        db_path = data.get("db_path")
        if db_path and not os.path.isabs(db_path):
            b2m_dir = os.path.dirname(b2m_bin)
            db_path = os.path.abspath(os.path.join(b2m_dir, ".." + db_path))
            
        return db_path, None
    except (subprocess.CalledProcessError, json.JSONDecodeError, ValueError, IndexError) as e:
        print(f"Caught error: {e}")
        return None, str(e)

# Initialize logging automatically when imported
setup_logging()
