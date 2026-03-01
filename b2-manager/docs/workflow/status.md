# Status Check Workflow

This document outlines the structural logic used by the CLI to determine the status of each database. The process is divided into two main phases: **Data Collection** and **Status Calculation**.

## Phase 1: Data Collection

The `FetchDBStatusData` function (in `core/status.go`) will collect all necessary information .
Ex: 
- List Local Databases
- Fetch Remote State (DBs + Locks)
- Download Metadata
- Load Last-download Anchor
- Cached hash of local files
- fetch local `db.toml` file

It executes the following operations **sequentially** to ensure stability and reduce resource usage.

### Step 1. List Local Databases

- **Source**: `core/helpers.go` (`getLocalDBs`)
- **Action**: Scans `config.LocalDBDir` for `*.db` files. 
This include 
- file name
- nano seconds last modified time.

### Step 2. Fetch Remote State (DBs + Locks)

- **Source**: `core/rclone.go` (`LsfRclone`)
- **Action**: Executes `rclone lsf -R` on the B2 bucket to list `*.db` files and lock files recursively in a single call.

### Step 3. Download Metadata

- **Source**: `core/metadata.go`
- **Action**: Runs `DownloadAndLoadMetadata` (using `rclone sync`) to update the local metadata cache from B2/`version/`.

### Step 4. Load Last-Download Anchor

- **Source**: `core/status.go` / `core/metadata.go`
- **Action**: Scans `last-download-version/` directory for metadata files representing the state of the database _at the time of last sync_.

### Step 5. Cached hash of local files

- **Source**: `core/status.go`
- **Action**: Should fetch the last cache 

### Step 6. fetch local `db.toml` file

- **Source**: `core/status.go`
- **Action**: should fetch the current local `db.toml` file to get the database name.
Which will be in this format: 
```toml
[db]
path = "db/all_dbs/"
bannerdb = "banner-db.db"
cheatsheetsdb = "cheatsheets-db-v5.db"
emojidb = "emoji-db-v5.db"
ipmdb = "ipm-db-v6.db"
manpagesdb = "man-pages-db-v5.db"
mcpdb = "mcp-db-v6.db"
pngiconsdb = "png-icons-db-v5.db"
svgiconsdb = "svg-icons-db-v5.db"
tldrdb = "tldr-db-v5.db"
```


## Phase 2. Status Calculation Logic

The status calculation is a deterministic 5-phase process executed in order. The first phase that returns a definitive status determines the final result.

**Definitions:**

- **Remote Meta (B2v)**: State of the database on the Cloud (Hash + Time).
- **Last-download Anchor (Lv)**: State of the database at the last successful download (Hash + Time). stored in `last-download-version/`.
- **Local File (DBv)**: Current state of the actual `.db` file on disk.
- **DB connected version (v)**: The version of the database file that is currently connected to the application. This will be defined in the `db.toml` file.

### Phase 1: Lock Status Check (Priority 1)

If the database is locked in the cloud, this state overrides all others.

- **Locked by Other User**:
  - Returns **"[Owner] is Uploading ⬆️"** if metadata status is "uploading".
  - Otherwise, returns **"Locked by [Owner]"** (Yellow).
- **Locked by You (Local)**:
  - Returns **"You are Uploading ⬆️"** if metadata status is "uploading".
  - Otherwise, returns **"Ready to Upload ⬆️"** (Idle lock).

### Phase 2: Existence Check (If Unlocked)

Checks for the physical presence of files.

- **Local Only** (No Remote, Has Local): Returns **"Ready To Bump New Version ⬆️"**.
- **Remote Only** (Has Remote, No Local): Returns **"Download DB ⬇️"**.

### Phase 3: History (Anchor) Check

Checks the valid sync history (`LocalVersion` vs `Remote`).

- **Anchor Exists**:
  - **Anchor Hash != Remote Hash**: The remote has been updated since the last download.
  - Returns **"DB Outdated Download Now 🔽"** (Remote Newer).
- **No Anchor**:
  - Falls through to Phase 4.

### Phase 4: Consistency Check (Content)

Compares the actual Local File against Remote Metadata.

- **Local Hash == Remote Hash**: Returns **"Up to Date ✅"**.
  - **Integrity Check**: During this phase, if the file is large and not cached, the status will show **"Integrity Check: [filename]"** while calculating the hash.
  - **Auto-Heal**: If the local file matches the remote but has no `last-download-version` anchor, the system **automatically creates** the anchor. This restores the sync state without user intervention.
- **Local Hash != Remote Hash**:
  - **Has Anchor**: Means we started from the current remote state but changed the file locally.
    - Returns **"Ready To Bump New Version ⬆️"** (Local Newer).
  - **No Anchor**: Safety fallback. We have a file but don't know where it came from.
    - Returns **"DB Outdated Download Now 🔽"** (Remote Newer / Conflict).
### Phase 5: Connected Version Validation


- **Remote Version**: Db version will be present in the `version` directory in the remote bucket in `bump-version/<db-name>-<version>.db`.
- If there is recent db update in the remote bucket, the version will be updated in the `bump-version/<db-name>-<version>.db` file.

- **Validation**: if the local db version is not equal to the remote db version, and if the lattest db is not present in the local, then it will return **"Download New DB ⬇️"**.



## Conclusion

This is how user should see the status of the database.


There are 4 possible states of the database and actions allowed and not allowed:


State 1: Up to Date ✅ (`up_to_date`)

B2 has `ipm-db-v1.db` file
Local has `ipm-db-v1.db` file
 
Hash of b2 `ipm-db-v1.db` == Hash of local `ipm-db-v1.db`


Action: No Actions Needed

State 2: DB Outdated Download Now 🔽 (`outdated_db`)

B2 has `ipm-db-v2.db` file
Local has `ipm-db-v1.db` file

Hash of local `ipm-db-v1.db` is != Hash of b2 `ipm-db-v1.db`. (This means new data is added to b2 `ipm-db-v1.db`)

Action: 
1. Changeset script should be performed
2. Download ipm-db-v2.db from b2 to changeset directory.
3. Query should be executed in ipm-db-v2.db which was created in ipm-db-v1.sql
4. Rename ipm-db-v2.db to ipm-db-v3.db and copy to local directory.
5. Bump and Upload ipm-db-v2.db to b2 with new version ipm-db-v3.db from changeset directory.
Using inbuild python function which will trigger the bump and upload process.
```shell
 b2m bump-db-version <db-name> <path-to-db-file>
```
6. Stop Server
7. Update db.toml file
8. Start Server

State 3: Ready To Bump New Version ⬆️ 

B2 has `ipm-db-v1.db` file
Local has `ipm-db-v2.db` file

Hash of local `ipm-db-v1.db` is == Hash of b2 `ipm-db-v1.db`. (This means no new data is added to b2 `ipm-db-v1.db`)

Action:
1. Copy ipm-db-v2.db to changeset directory.
2. Bump and Upload ipm-db-v2.db to b2 with new version ipm-db-v3.db from changeset directory.
Using inbuild python function
```shell
 b2m bump-db-version <db-name> <path-to-db-file>
```
3. Stop Server
4. Update db.toml file (`ipm-db-v3.db`)
5. Start Server

State 4: Download New DB ⬇️ (`new_db_available`) 

B2 has ipm-db-v2.db file
Local has ipm-db-v1.db file

Hash of local `ipm-db-v1.db` is == Hash of b2 `ipm-db-v1.db`. (This means no new data is added to b2 `ipm-db-v1.db`)    

Action: 
1. Download ipm-db-v2.db from b2 to db directory.
2. Stop Server
3. Update db.toml file (ipm-db-v2.db)
4. Start Server



By new proposal

b2m go implement:

1. Identify the state of db.
2. Update db.toml file.
3. Start/stop server.
4. Download/upload db.
5. Perform changeset script.


python script operations:

1. Handling b2m cli
2. Handle sql query execution.
3. Specify where db download/upload should happen.