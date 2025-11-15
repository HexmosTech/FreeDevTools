# Database Caching and Syncing Logic

This directory contains all database files synced from Backblaze B2 storage. The syncing process is automated through GitHub Actions workflows.

## How It Works

### 1. **Cache Restoration**

- GitHub Actions restores the entire `frontend/db/all_dbs` folder from cache at the start of each build
- Cache key: `${{ runner.os }}-all-dbs-v1`
- If cache exists, all database files are restored instantly (no download needed)

### 2. **Rclone Sync with Checksum Verification**

- After cache restoration, `rclone sync` is executed with the `--checksum` flag
- The sync command compares file checksums (MD5/SHA1) between B2 and local files
- **Only changed files are transferred** - if checksums match, no transfer occurs (very fast)
- If files differ in B2, only those files are downloaded

### 3. **Automatic Cache Update**

- After successful sync, GitHub Actions automatically saves the updated files to cache
- Next build will use the updated cache

## Benefits

✅ **Fast builds** - Cache restoration is instant, sync only transfers changed files  
✅ **Always up-to-date** - Checksum comparison ensures latest files from B2  
✅ **No conditional logic** - All databases are synced every time, no need to specify which ones  
✅ **Automatic** - New databases added to B2 are automatically synced  
✅ **Efficient bandwidth** - Only downloads what changed, not everything

## Workflow Process

```
1. Restore cache → frontend/db/all_dbs/ (if exists)
2. Run rclone sync with --checksum
   ├─ Compare checksums for each file
   ├─ Transfer only if files differ
   └─ Skip if checksums match (fast!)
3. Verify files exist
4. Auto-save to cache (if any files were updated)
```

## Rclone Command

```bash
rclone sync \
  b2-config:hexmos/freedevtools/content/db/ \
  frontend/db/all_dbs/ \
  --checksum \
  --retries 20 \
  --low-level-retries 30 \
  --retries-sleep 10s \
  --progress
```

## Local Development

To sync databases locally, use the Makefile target:

```bash
make sync-db-to-local
```

This requires:

1. Rclone installed and configured
2. B2 credentials set as environment variables: `B2_ACCOUNT_ID` and `B2_APPLICATION_KEY`

To initialize rclone for the first time:

```bash
make init-rclone
```

## Cache Invalidation

To invalidate the cache and force a fresh download:

- Increment the cache key version in the workflow (e.g., `v1` → `v2`)
- Or wait 7+ days for automatic eviction (GitHub's cache policy)

## Database Files

All database files are stored in this directory:

- `banner-db.db`
- `man-pages-db.db`
- `png-icons-db.db`
- `svg-icons-db.db`
- `emoji-db.db`

Any new database files added to B2 will automatically be synced here.
