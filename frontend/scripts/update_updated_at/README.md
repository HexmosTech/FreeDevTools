# Bump ETag Script

This script is used to bump the version of SQLite databases and update their `updated_at` or `last_updated_at` timestamps to the current UTC time. This effectively invalidates any cached `ETag` allowing clients to fetch the modified data.

## Usage

```bash
# Basic usage bumping all databases
python3 bump_etag.py etag --db=all

# Bump a specific database
python3 bump_etag.py etag --db=emoji

# Only bump specific structural levels in a database
python3 bump_etag.py etag --db=emoji --column=category
python3 bump_etag.py etag --db=emoji --column=overview
python3 bump_etag.py etag --db=emoji --column=end_page
python3 bump_etag.py etag --db=man-pages --column=subcategory

# Verify databases without mutating data
python3 bump_etag.py etag --db=all --check
```

## Flags

- `etag`: The starting subcommand (technically optional due to `nargs="?"`, but included for consistency).
- `--db` (required): Database target. 
  - Valid options: `all`, `mcp`, `emoji`, `cheatsheets`, `png-icons`, `svg-icons`, `man-pages`, `tldr`, `ipm`.
  - Aliases allowed: `cheatsheet`, `png`, `svg`, `man`.
- `--column` (optional): Limits the bump operation to specific parts of the database.
  - `overview`: Filters for `overview` tables.
  - `category`: Filters for `category` / `cluster` / `ipm_category` tables.
  - `subcategory`: Filters for `sub_category` tables (used in `man-pages`).
  - `end_page`: Filters for the main data object table (e.g., `pages`, `cheatsheet`, `icon`, `emojis`).
- `--check`: Validates that the targeted tables and columns exist in the latest `.db` file, performing a "dry-run" where files are neither copied nor modified.

## How it Workflow
1. Locates the latest `.db` file in `../../db/all_dbs/` matching the requested `--db`.
2. Creates a clean copy of the database file with the `.db` version number cleanly incremented (e.g. `emoji-db-v1.db` -> `emoji-db-v2.db`).
3. Executes `UPDATE` queries on tables within the new file to touch timestamps based on your given `--column` filters.
