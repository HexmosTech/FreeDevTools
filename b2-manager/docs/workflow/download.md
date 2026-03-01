# Download Workflow

This document explains the process of downloading a database from the remote B2 bucket to the local machine. 


## Process Flow

The download process is executed by `DownloadDatabase` in `core/download.go`.

> **UI Action**: This workflow is triggered when the user presses **'p'** in the main dashboard.

### Phase 0: Pre-Flight Validation

Before starting, `core.ValidateAction` enforces safeguards.

- **Local Changes Warning**: If status is "Ready To Upload" (Local Db is updated / New Local), 
    - **"Overwrite local changes?"**. The user must confirm to proceed.
- **Concurrent Update Warning**: If the database is locked by another user and marked as **"Uploading"**, 
    - **"This database is currently being updated... Are you sure?"**.

### Phase 1: Lock Check & Safety

1.  **Check Locks**: Queries B2 locks to ensure no one is currently uploading this database.
2.  **Abort**: If locked (uploading), the download terminates to prevent fetching a partially uploaded (corrupted) file.

### Phase 2: Execute Download

The CLI `download` command accepts an optional destination path argument (`customPath` or `dst`). The system determines the exact `rclone` action using a simple `if` condition:

```go
remotePath := path.Join(model.AppConfig.RootBucket, dbName)
destPath := model.AppConfig.LocalDBDir // Default: b2m download <db_name>
cmdName := "copy"

// If a custom destination path is provided (e.g., b2m download <db_name> <dst>):
if customPath != "" {
    destPath = customPath  // Target the exact file path
    cmdName = "copyto"     // Use 'copyto' to copy & rename the file in one step
}

RcloneCopy(ctx, cmdName, remotePath, destPath, ...)
```

1.  **Command Execution**: Executes the appropriate `rclone` command determined above.
2.  **Safety**: Overwrites the local file with the version from B2.

### Phase 3: Construct Verified Anchor

Once the download is successful, we anchor the local state to the remote state.

1.  **Calculate Local Hash**: The system calculates the hash of the newly downloaded file.
2.  **Fetch Remote Context**: Reads the latest metadata from the local mirror (`db/all_dbs/.b2m/version/`).
3.  **Construct Anchor**: Creates a new metadata object combining the **Local Hash** + **Remote Timestamp**.
4.  **Save**: Writes to `local-versions/`.
5.  **Update Cache**: The persistent `hash.json` cache is updated with the new file's hash and statistics.
6.  **Result**: Status becomes **"Up to Date ✅"**.
