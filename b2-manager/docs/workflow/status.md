# Status Check Workflow

This document outlines the structural logic used by the CLI to determine the status of each database. The process is divided into two main phases: **Data Collection** and **Status Calculation**.

## 1. Sequential Data Collection

The `FetchDBStatusData` function (in `core/status.go`) orchestrates the gathering of all necessary information. It executes the following operations **sequentially** to ensure stability and reduce resource usage.

### A. List Local Databases

- **Source**: `core/local.go` (`getLocalDBs`)
- **Action**: Scans `config.LocalDBDir` for `*.db` files.

### B. Fetch Remote State (DBs + Locks)

- **Source**: `core/rclone.go` (`LsfRclone`)
- **Action**: Executes `rclone lsf -R` on the B2 bucket to list `*.db` files and lock files recursively in a single call.

### C. Download Metadata

- **Source**: `core/metadata.go`
- **Action**: Runs `DownloadAndLoadMetadata` (using `rclone sync`) to update the local metadata cache from B2/`version/`.

### D. Load Local-Version Anchors

- **Source**: `core/status.go` / `core/metadata.go`
- **Action**: Scans `local-version/` directory for metadata files representing the state of the database _at the time of last sync_. This is crucial for 3-way comparison.

### Aggregation

Once all parallel steps complete:

1. Errors from any step are collected; critical errors fail the process.
2. `AggregateDBs` combines Local and Remote DB lists.
3. The process proceeds to Status Calculation.

## 2. Status Calculation Logic

The status calculation is a deterministic 4-phase process executed in order. The first phase that returns a definitive status determines the final result.

**Definitions:**

- **Remote Meta (B2v)**: State of the database on the Cloud (Hash + Time).
- **Local Anchor (Lv)**: State of the database at the last successful sync (Hash + Time). stored in `local-versions/`.
- **Local File (DBv)**: Current state of the actual `.db` file on disk.

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

- **Local Only** (No Remote, Has Local): Returns **"Ready To Upload ⬆️"** (New File).
- **Remote Only** (Has Remote, No Local): Returns **"Download DB ⬇️"**.

### Phase 3: History (Anchor) Check

Checks the valid sync history (`LocalVersion` vs `Remote`).

- **Anchor Exists**:
  - **Anchor Hash != Remote Hash**: The remote has been updated since we last synced.
  - Returns **"DB Outdated Download Now 🔽"** (Remote Newer).
- **No Anchor**:
  - Falls through to Phase 4.

### Phase 4: Consistency Check (Content)

Compares the actual Local File against Remote Metadata.

- **Local Hash == Remote Hash**: Returns **"Up to Date ✅"**.
  - **Integrity Check**: During this phase, if the file is large and not cached, the status will show **"Integrity Check: [filename]"** while calculating the hash.
  - **Auto-Heal**: If the local file matches the remote but has no `local-version` anchor, the system **automatically creates** the anchor. This restores the sync state without user intervention.
- **Local Hash != Remote Hash**:
  - **Has Anchor**: Means we started from the current remote state but changed the file locally.
    - Returns **"Ready To Upload ⬆️"** (Local Newer).
  - **No Anchor**: Safety fallback. We have a file but don't know where it came from.
    - Returns **"DB Outdated Download Now 🔽"** (Remote Newer / Conflict).
