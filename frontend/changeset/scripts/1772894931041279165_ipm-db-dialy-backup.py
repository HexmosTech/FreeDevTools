# Template Version: v1
# script_name : 1772894931041279165_ipm-db-dialy-backup
# phrase : ipm-db-dialy-backup

## Predifned Imports and Functions 
import os
import datetime

DB_SHORT_NAME = "ipmdb"
import sys

# Add the parent directory (frontend/changeset) to sys.path
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

## Import Common Functions
try:
    from changeset import db_status, db_upload, start_server, stop_server, bump_db_version, copy, handle_query, get_latest_db, get_local_db, download_latest_db, notify
except ImportError as e:
    print(f"Error importing changeset: {e}")
    sys.exit(1)

def inserted_queries(sql_name, target_db_name, *args):
    """
    This function should insert the new data in the db.
    """
    handle_query(sql_name, target_db_name, "cron")
    return None

def _fmt_time(dt):
    return dt.strftime("%Y-%m-%d %H:%M:%S")

def _send_summary(operation, db_name, started_at, completed_at, err=None):
    """Send a single summary Discord notification to the ipmdb channel."""
    status = "failed" if err else "success"
    status_icon = "✅" if not err else "❌"
    lines = [
        f"🗄️ **{operation}**",
        f"DB: `{db_name}`",
        f"Started:   {_fmt_time(started_at)}",
        f"Completed: {_fmt_time(completed_at)}",
        f"Status: {status_icon} {status}",
    ]
    if err:
        lines.append(f"Error: {err}")
    notify("\n".join(lines), db_shortname=DB_SHORT_NAME)

# ── Branch handlers ────────────────────────────────────────────────────────────
# Each returns (final_db_name, error_msg).
# On success: (db_name, None). On failure: (db_name_at_failure, "error description").

def handle_outdated_version(db_name):
    latest_db_path, err = download_latest_db(DB_SHORT_NAME, "cron")
    if err:
        return db_name, f"download_latest_db: {err}"
    if not copy(db_name, "changeset", "sql"):
        return db_name, "Failed to copy SQL to changeset dir"
    inserted_queries(db_name, latest_db_path, "cron")
    new_db_name, msg = bump_db_version(latest_db_path, "cron")
    if not new_db_name:
        return db_name, "Failed to bump database version"
    stop_server()
    if not copy(new_db_name, "all_dbs", "db"):
        start_server()
        return new_db_name, "Failed to copy bumped database to all_dbs"
    start_server()
    if not db_upload(new_db_name, "cron"):
        return new_db_name, "Failed to upload database to B2"
    print(msg)
    return new_db_name, None

def handle_bump_and_upload(db_name):
    stop_server()
    if not copy(db_name, "changeset", "db"):
        start_server()
        return db_name, "Failed to copy database to changeset dir"
    new_db_name, msg = bump_db_version(db_name, "cron")
    if not new_db_name:
        start_server()
        return db_name, "Failed to bump database version"
    if not copy(new_db_name, "all_dbs", "db"):
        start_server()
        return new_db_name, "Failed to copy bumped database to all_dbs"
    print(new_db_name)
    start_server()
    if not db_upload(new_db_name, "cron"):
        return new_db_name, "Failed to upload database to B2"
    print(msg)
    return new_db_name, None

def handle_ready_to_upload(db_name):
    stop_server()
    if not copy(db_name, "changeset", "db"):
        start_server()
        return db_name, "Failed to copy database to changeset dir"
    print(db_name)
    start_server()
    if not db_upload(db_name, "cron"):
        return db_name, "Failed to upload database to B2"
    return db_name, None

# ── Main ───────────────────────────────────────────────────────────────────────

def main():
    global DB_NAME
    started_at = datetime.datetime.now()
    operation = "ipm-db-daily-backup"

    try:
        DB_NAME = get_local_db(DB_SHORT_NAME)
        if not DB_NAME:
            err = f"Could not find local database for {DB_SHORT_NAME}"
            print(err)
            _send_summary(operation, DB_SHORT_NAME, started_at, datetime.datetime.now(), err)
            return

        print(DB_NAME)
        status = db_status(DB_NAME)
        if status is False:
            err = f"Failed to get status for {DB_NAME}"
            print(f"Error: {err}")
            _send_summary(operation, DB_NAME, started_at, datetime.datetime.now(), err)
            return
        print(status)

        if status == "up_to_date":
            print(f"Info: {DB_NAME} is up to date, skipping changeset.")
            return  # silent — no action taken, no notification needed

        elif status == "outdated_version":
            operation += " / outdated_version"
            final_db, err = handle_outdated_version(DB_NAME)

        elif status == "bump_and_upload":
            operation += " / bump_and_upload"
            final_db, err = handle_bump_and_upload(DB_NAME)

        elif status == "ready_to_upload":
            operation += " / ready_to_upload"
            final_db, err = handle_ready_to_upload(DB_NAME)

        elif status == "unidentified":
            print(f"Warning: {DB_NAME} has an unidentified status, skipping changeset.")
            return  # silent

        else:
            return

        if err:
            print(f"Error: {err}")

        _send_summary(operation, final_db, started_at, datetime.datetime.now(), err)

    except Exception as e:
        import traceback
        err = f"Unexpected exception: {e}\n{traceback.format_exc()}"
        print(err)
        db_label = DB_NAME if 'DB_NAME' in globals() and DB_NAME else DB_SHORT_NAME
        _send_summary(operation, db_label, started_at, datetime.datetime.now(), str(e))
        # Re-raise to ensure cron receives a non-zero exit code
        raise  # re-raise so cron gets a non-zero exit code


if __name__ == "__main__":
    main()
