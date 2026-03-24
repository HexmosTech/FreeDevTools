# Changeset System — Developer & AI Guide

A **changeset** is a versioned Python script that applies a one-time mutation to a SQLite database stored in Backblaze B2.  
Scripts are created, executed, and tracked through the `b2m` CLI tool.

---

## Directory Layout

```
frontend/changeset/
├── changeset.py          # Shared helper library — import this in every script
├── README.md             # This file
├── scripts/              # All changeset scripts live here
│   └── <timestamp>_<phrase>.py
├── dbs/                  # Working copies of downloaded databases
└── logs/                 # Per-script log files (auto-created)
```

---

## How to Create a Changeset

```bash
make create-changeset <phrase>
# example
make create-changeset ipmdb-add-source-column
```

This generates `scripts/<timestamp>_<phrase>.py` from a template.

---

## Script Structure Rules

Every changeset script **must** follow this three-stage pattern inside `main()`.

```python
def main():
    # Stage 1 — Download the latest DB
    db_path, err = download_latest_db(DB_SHORT_NAME)
    if err:
        print(err)
        return          # ← Always guard; never proceed on download failure

    # Stage 2 — Apply the change
    success = update_db(db_path)
    if not success:
        print("Update failed.")
        return          # ← Never upload a partially-mutated DB

    # Stage 3 — Upload back to B2
    db_upload(db_path)

    print("Changeset execution completed successfully.")
```

### `DB_SHORT_NAME`

Set this at the top of each script. Must match the short name in `db.toml`:

| Short Name      | Database      |
| --------------- | ------------- |
| `bannerdb`      | bannerdb      |
| `cheatsheetsdb` | cheatsheetsdb |
| `emojidb`       | emojidb       |
| `ipmdb`         | ipmdb         |
| `manpagesdb`    | manpagesdb    |
| `mcpdb`         | mcpdb         |
| `pngiconsdb`    | pngiconsdb    |
| `svgiconsdb`    | svgiconsdb    |
| `tldrdb`        | tldrdb        |

---

## Available Helper Functions (`changeset.py`)

Import what you need:

```python
from changeset import download_latest_db, db_upload, db_status, bump_db_version, \
                      copy, handle_query, get_local_db, get_latest_db, notify
```

| Function                                          | Purpose                                       | Returns                                                                                           |
| ------------------------------------------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `download_latest_db(short_name, changeset_dir?)`  | Check status + download latest DB if outdated | `(db_path, None)` or `(None, err_msg)`                                                            |
| `db_upload(db_path, changeset_dir?)`              | Upload local DB back to B2                    | `bool`                                                                                            |
| `db_status(db_name, changeset_dir?)`              | Get DB sync status string                     | `str` (`"up_to_date"`, `"outdated_version"`, `"bump_and_upload"`, `"ready_to_upload"`) or `False` |
| `bump_db_version(db_name, changeset_dir?)`        | Increment version counter in db.toml          | `(new_db_name, msg)` or `(False, None)`                                                           |
| `copy(src_name, dst, file_type)`                  | Copy a DB or SQL file between tracked dirs    | `bool`                                                                                            |
| `handle_query(sql_path, db_path, changeset_dir?)` | Run a `.sql` file against a DB                | `bool`                                                                                            |
| `get_local_db(short_name, changeset_dir?)`        | Resolve short name → local DB filename        | `str` or `False`                                                                                  |
| `get_latest_db(db_name, changeset_dir?)`          | Get latest remote version filename            | `str` or `False`                                                                                  |
| `notify(msg)`                                     | Send a Discord message                        | `bool`                                                                                            |

### `changeset_dir` parameter

Pass `"cron"` when the script is run as a scheduled job (cron). This tells `b2m` to use the script's own name as the changeset directory for isolation:

```python
download_latest_db(DB_SHORT_NAME, "cron")   # cron job
download_latest_db(DB_SHORT_NAME)           # one-time manual run
```

---

## Pattern 1 — Simple Local DB Update (manual/one-time)

Use this when you need to patch data directly without server downtime.

```python
# scripts/<timestamp>_<phrase>.py
DB_SHORT_NAME = "test"

import os, sys, subprocess
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
from changeset import db_upload, download_latest_db

def update_db(db_path):
    query = "UPDATE my_table SET column = 'value' WHERE condition = 1"
    try:
        subprocess.run(["sqlite3", db_path, query], check=True)
        return True
    except subprocess.CalledProcessError as e:
        print(f"Query failed: {e}")
        return False

def main():
    db_path, err = download_latest_db(DB_SHORT_NAME)
    if err:
        print(err)
        return

    if not update_db(db_path):
        print("Update failed — aborting upload.")
        return

    db_upload(db_path)
    print("Done.")

if __name__ == "__main__":
    main()
```

---

## Pattern 2 — Cron-Based Update (ipmdb / data-safe)

Use this for scheduled jobs. Key safety rules:

- **Always check status first** — skip if already `up_to_date`
- **Guard every step** — return immediately on any failure
- **Never upload if insert/query failed**
- **Pass `"cron"` to all helpers** so b2m scopes the working directory correctly

See `scripts/1772894931041279165_ipm-db-dialy-backup.py` for a full working example.

---

## Execute a Changeset

```bash
# One-time manual run (via make)
make exe-changeset <script_name>

# Direct (without make)
b2m exe-changeset <script_name>

# Cron mode — enables Discord alerts only on failure
b2m exe-changeset <script_name> cron
```

> **Cron mode**: When the `cron` argument is passed, Discord notifications are sent **only on failure**. Silent on success to avoid alert fatigue.

---

## Logging

Every script execution automatically appends to `logs/<script_name>.log`.  
This is handled by `setup_logging()` which is called automatically when `changeset.py` is imported — no action needed.

---

## Naming Convention

```
<unix_nanosecond_timestamp>_<kebab-case-phrase>.py
```

Example: `1773568863474529573_ipmdb-add-source-column.py`

The timestamp guarantees scripts are ordered by creation time and never collide.
