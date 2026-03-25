# Template Version: v3
# script_name : {{.Timestamp}}_{{.Phrase}}
# phrase      : {{.Phrase}}
# Execute manually : make exe-changeset {{.Timestamp}}_{{.Phrase}}
# Execute via cron : b2m exe-changeset {{.Timestamp}}_{{.Phrase}} cron

## ── Predefined Imports and Setup ─────────────────────────────────────────────
import os
import sys
import subprocess

{{range .DBShortNames}}{{.}} = "{{.}}"
{{end}}
# Add parent directory (frontend/changeset) so changeset.py can be imported.
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

## ── Import Common Functions ───────────────────────────────────────────────────
try:
    from changeset import db_upload, download_latest_db
except ImportError as e:
    print(f"Error importing changeset: {e}")
    sys.exit(1)

## ── Data Mutation ─────────────────────────────────────────────────────────────
def update_db(db_path):
    """
    Apply the intended SQL change to the local database file.

    Safety contract:
      - Return True  → mutation succeeded, safe to upload.
      - Return False → mutation failed; caller MUST NOT upload.

    Edit the `query` variable below with your actual SQL.
    For multi-statement changes, use a .sql file and call handle_query() instead.
    """
    # ── Define your SQL here ─────────────────────────────────────────────────
    query = "Define query here"
    # ─────────────────────────────────────────────────────────────────────────

    print("[update_db] Applying query to:", db_path)
    try:
        result = subprocess.run(
            ["sqlite3", db_path, query],
            check=True,
            capture_output=True,
            text=True,
        )
        if result.stdout:
            print("[sqlite3 stdout]", result.stdout.strip())
        if result.stderr:
            print("[sqlite3 stderr]", result.stderr.strip())
        print("[update_db] Query executed successfully.")
        return True
    except subprocess.CalledProcessError as e:
        print(f"[update_db] FAILED — sqlite3 exit code {e.returncode}")
        print("[update_db] stderr:", e.stderr.strip())
        return False
    except FileNotFoundError:
        print("[update_db] FAILED — 'sqlite3' binary not found in PATH.")
        return False

## ── Orchestration ─────────────────────────────────────────────────────────────
{{- if eq (len .DBShortNames) 1}}{{with index .DBShortNames 0}}
def main():
    # Stage 1 — Download the latest DB from B2
    print("[Stage 1] Downloading latest DB...")
    {{.}}_path, err = download_latest_db({{.}})
    if err:
        print("[Stage 1] FAILED:", err)
        return
    print("[Stage 1] DB ready at:", {{.}}_path)

    # Stage 2 — Apply changes locally
    print("[Stage 2] Applying updates...")
    if not update_db({{.}}_path):
        print("[Stage 2] FAILED — aborting. DB not uploaded to protect data integrity.")
        return
    print("[Stage 2] Updates applied successfully.")

    # Stage 3 — Upload mutated DB back to B2
    print("[Stage 3] Uploading DB to B2...")
    if not db_upload({{.}}_path):
        print("[Stage 3] FAILED — upload did not complete.")
        return
    print("[Stage 3] Upload complete.")

    print("\nChangeset execution completed successfully.")
{{- end}}
{{- else}}
{{range .DBShortNames}}
def handle_{{.}}() -> bool:
    """Run the full 3-stage changeset for {{.}}."""
    # Stage 1 — Download
    print("[{{.}}] Stage 1 — Downloading latest DB...")
    {{.}}_path, err = download_latest_db({{.}})
    if err:
        print("[{{.}}] Stage 1 FAILED:", err)
        return False
    print("[{{.}}] DB ready at:", {{.}}_path)

    # Stage 2 — Mutate
    print("[{{.}}] Stage 2 — Applying updates...")
    if not update_db({{.}}_path):
        print("[{{.}}] Stage 2 FAILED — mutation aborted. DB not uploaded.")
        return False
    print("[{{.}}] Stage 2 — Updates applied successfully.")

    # Stage 3 — Upload
    print("[{{.}}] Stage 3 — Uploading DB to B2...")
    if not db_upload({{.}}_path):
        print("[{{.}}] Stage 3 FAILED — upload did not complete.")
        return False
    print("[{{.}}] Stage 3 — Upload complete.")

    return True
{{end}}
def main():
{{range .DBShortNames}}    if not handle_{{.}}():
        print("[main] {{.}} failed — stopping.")
        return
{{end}}    print("\nAll changesets completed successfully.")
{{- end}}

if __name__ == "__main__":
    main()
