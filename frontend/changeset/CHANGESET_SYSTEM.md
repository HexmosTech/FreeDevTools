# Changeset System — Developer Reference

> This document describes the **intended behaviour** of the changeset system and the
> `ipm-db-daily-backup` script. Use it as the source of truth when debugging regressions.

---

## 1. Overview

The changeset system is a lightweight database versioning + sync pipeline built around
a CLI tool called **`b2m`** (located at `frontend/b2m`).

Scripts in `frontend/changeset/scripts/` are self-contained Python programs (one per
"changeset task"). They import shared helper functions from
`frontend/changeset/changeset.py` and drive a well-defined state machine to keep a
SQLite database in sync between the local machine and Backblaze B2 cloud storage.

```
frontend/
├── b2m                        ← CLI binary (wraps B2 API + db versioning logic)
├── changeset/
│   ├── changeset.py           ← Shared helper library (all public functions)
│   ├── scripts/
│   │   └── <id>_<phrase>.py   ← One script per changeset task
│   ├── dbs/                   ← Working copies of .db / .sql files for each script
│   └── logs/                  ← Per-script append-only log files
```

---

## 2. `changeset.py` — Public API

| Function                           | What it does                                                                       | Key return values                    |
| ---------------------------------- | ---------------------------------------------------------------------------------- | ------------------------------------ |
| `get_local_db(short_name)`         | Asks `b2m get-version` for the currently tracked local `.db` filename              | `str` (full db name) or `None/False` |
| `db_status(db_name)`               | Asks `b2m status` for the sync state of the db                                     | Status string or `False` on error    |
| `download_latest_db(short_name)`   | Calls `b2m download-latest-db`; downloads latest B2 version to local changeset dir | `(db_path, None)` or `(None, err)`   |
| `bump_db_version(db_name)`         | Calls `b2m bump-db-version`; increments version counter, updates `db.toml`         | New bumped db filename or `False`    |
| `db_upload(db_name)`               | Calls `b2m upload`; pushes `.db` file to B2                                        | `True/dict` or `False`               |
| `copy(src, dst, file_type)`        | Calls `b2m copy`; copies file into a named directory (e.g. `all_dbs`, `changeset`) | `True` or `False`                    |
| `handle_query(sql_path, db_path)`  | Calls `b2m handle-query`; runs a `.sql` file against a `.db` file                  | `True/dict` or `False`               |
| `stop_server()` / `start_server()` | Runs `make stop-prod` / `make start-prod` in `frontend/`                           | `True` or `False`                    |
| `setup_logging()`                  | Tees stdout+stderr into `logs/<script_name>.log`                                   | Called automatically on import       |

> **`changeset_dir="cron"` parameter**: When passed, appends
> `changeset_dir=<script_name>` to every `b2m` command so `b2m` knows which
> script's subdirectory inside `changeset/dbs/` to operate on.

---

## 3. DB Status State Machine

`db_status()` returns one of five possible states. Each state has a defined action:

```
┌─────────────────────┬──────────────────────────────────────────────────────────────────────┐
│ Status              │ Required action                                                      │
├─────────────────────┼──────────────────────────────────────────────────────────────────────┤
│ up_to_date          │ Nothing to do. Exit cleanly.                                         │
│ outdated_version    │ Download latest DB from B2, apply SQL queries, bump version, upload. │
│ bump_and_upload     │ Stop server → bump local DB version → copy to all_dbs → upload → start server. │
│ ready_to_upload     │ Stop server → copy local DB → upload → start server.                │
│ unidentified        │ Warn and exit. Do not modify anything.                               │
└─────────────────────┴──────────────────────────────────────────────────────────────────────┘
```

---

## 4. `ipm-db-daily-backup` Script — Intended Behaviour

**Script file:** `scripts/1772894931041279165_ipm-db-dialy-backup.py`  
**DB short name:** `ipmdb`  
**Purpose:** Nightly cron job that syncs the `ipmdb` SQLite database with B2 and
applies any pending SQL changesets.

### Step-by-step expected flow

```
START
  │
  ▼
[1] get_local_db("ipmdb")
    → Resolves the versioned local filename, e.g. "ipmdb_v3.db"
    → On failure: print error, EXIT

  │
  ▼
[2] db_status(DB_NAME)
    → Queries b2m for the current sync state
    → On failure (returns False): print error, EXIT
    → Prints status string

  │
  ├─ "up_to_date"       ──→ Log "skipping", EXIT cleanly
  │
  ├─ "outdated_version" ──→ [A] download_latest_db("ipmdb", "cron")
  │                              → On error: print error, EXIT
  │                         [B] copy(DB_NAME, "changeset", "sql")
  │                              → On failure: EXIT
  │                         [C] inserted_queries(DB_NAME, latest_db_path, "cron")
  │                              → Runs sql/<script_name>.sql against latest_db_path
  │                         [D] bump_db_version(latest_db_path, "cron")
  │                              → On failure: EXIT
  │                         [E] copy(new_db_name, "all_dbs", "db")
  │                              → On failure: EXIT
  │                         [F] db_upload(new_db_name, "cron")
  │                              → On failure: EXIT
  │
  ├─ "bump_and_upload"  ──→ [A] stop_server()
  │                         [B] copy(DB_NAME, "changeset", "db")
  │                              → On failure: start_server(), EXIT
  │                         [C] bump_db_version(DB_NAME, "cron")
  │                              → On failure: start_server(), EXIT
  │                         [D] copy(new_db_name, "all_dbs", "db")
  │                              → On failure: start_server(), EXIT
  │                         [E] start_server()
  │                         [F] db_upload(new_db_name, "cron")
  │                              → On failure: EXIT (server already restarted)
  │
  ├─ "ready_to_upload"  ──→ [A] stop_server()
  │                         [B] copy(DB_NAME, "changeset", "db")
  │                              → On failure: start_server(), EXIT
  │                         [C] start_server()
  │                         [D] db_upload(DB_NAME, "cron")
  │                              → On failure: EXIT
  │
  └─ "unidentified"     ──→ Warn, EXIT
```

### `inserted_queries` helper

```python
def inserted_queries(sql_name, target_db_name, *args):
    handle_query(sql_name, target_db_name, "cron")
```

- `sql_name` → resolves to `changeset/dbs/<script_name>/<sql_name>.sql`
- `target_db_name` → the freshly downloaded latest DB path
- Runs the SQL file's statements against that DB via `b2m handle-query`

---

## 5. Known Potential Failure Points

These are places where the script can silently fail or misbehave after changes to
`changeset.py` or `b2m`:

| Location                                                         | Risk                                                                                                                                                              |
| ---------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `get_local_db()`                                                 | Returns `False` (not `None`) on error — the `if not DB_NAME` guard catches both, but callers must handle `False` vs `None` carefully                              |
| `download_latest_db()` returns `(db_path, err)`                  | `db_path` is resolved via `_resolve_db_path()` which strips `/frontend/` prefix — if `b2m` output format changes this silently breaks                             |
| `copy(DB_NAME, "changeset", "sql")` in `outdated_version` branch | This copies the **old local DB name** as the SQL destination, which may not match the expected SQL filename in the changeset dir                                  |
| `handle_query(sql_name, target_db_name)`                         | `sql_name` is derived from `DB_NAME` (old version), not from `latest_db_path` — the `.sql` file must exist under the script's changeset dir with the correct name |
| `bump_db_version(latest_db_path)` vs `bump_db_version(DB_NAME)`  | In `outdated_version`, bumps the **downloaded** db; in `bump_and_upload`, bumps the **local** db — these must point to real files in the changeset dir            |
| `stop_server()` commented out in `outdated_version`              | Server is **not** stopped before DB manipulation in this branch — intentional or a bug? Verify this is safe for your deployment                                   |
| `setup_logging()` runs on import                                 | Logging starts the moment `changeset.py` is imported — log file path depends on `sys.argv[0]`, which must be the script itself (not a wrapper)                    |

---

## 6. How to Create / Run a Changeset Script

### Create

```bash
make create-changeset <phrase>
# Example:
make create-changeset ipm-db-daily-backup
```

Creates a new numbered script in `scripts/` from the template.

### Edit

Add your SQL logic inside `inserted_queries()` or extend `main()` for the required
status branches.

### Execute

```bash
make exe-changeset <phrase>
# Example:
make exe-changeset ipm-db-daily-backup
```

---

## 7. Directory Conventions

| Path                               | Purpose                                                 |
| ---------------------------------- | ------------------------------------------------------- |
| `changeset/dbs/<script-name>/`     | Per-script working directory for `.db` and `.sql` files |
| `changeset/dbs/all_dbs/`           | Shared directory of all versioned `.db` files           |
| `changeset/logs/<script-name>.log` | Append-only execution log                               |
