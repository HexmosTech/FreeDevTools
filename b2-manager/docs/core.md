# Core Rclone Documentation

This document provides an overview of the `core/rclone.go` file, specifically focusing on the functions available and the underlying `rclone` commands executed.

## Overview

`core/rclone.go` handles various interactions with the Backblaze B2 storage. Note that Download functions have been refactored into `core/download.go`.

## Functions

There are **15** functions defined in this file:

1.  **CheckRclone**: Checks if `rclone` is installed.
2.  **CheckRcloneConfig**: Verifies if the `rclone.conf` file exists.
3.  **RunInit**: Initializes `rclone` by installing it (if missing) and creating the configuration file.
4.  **BootstrapSystem**: Performs initial checks for database discovery and synchronization.
5.  **checkDBDiscoveryAndSync**: (Internal) Orchestrates local and remote database discovery.
6.  **getLocalDBs**: Lists local database files.
7.  **LsfRclone**: Lists all files recursively using `rclone lsf -R` to retrieve both databases and locks efficiently.
8.  **checkSyncStatus**: (Internal) Checks synchronization status for all files using `rclone check`.
9.  **checkFileChanged**: Checks if a specific file has changed between local and remote.
10. **SyncDatabase** / **DownloadDatabase**: (Moved to `core/download.go`) Downloads a single database.
11. **DownloadAllDatabases**: (Moved to `core/download.go`) Downloads all databases.
12. **UploadDatabase**: Uploads a single database from local to remote. **Returns** the uploaded `model.Metadata` object for anchor persistence.
13. **LockDatabase**: Creates a lock file (`.lock`) on the remote.
14. **UnlockDatabase**: Removes a lock file from the remote.
15. **FetchLocks**: Retrieves and parses all active lock files from the remote.

## Rclone Commands Used

The code executes the following **6** distinct `rclone` commands:

| Command      | Usage Context                                            | Description                                                                              |
| :----------- | :------------------------------------------------------- | :--------------------------------------------------------------------------------------- |
| `version`    | `RunInit`                                                | Checks the installed version of rclone.                                                  |
| `lsf`        | `LsfRclone`, `FetchLocks`                                | Lists files in the remote bucket (databases or locks).                                   |
| `check`      | `checkSyncStatus`, `checkFileChanged`                    | Compares local files with remote files to detect changes.                                |
| `copyto`     | `LockDatabase`                                           | Copies a specific file to a specific destination (used for naming lock files).           |
| `copy`       | `SyncDatabase`, `DownloadAllDatabases`, `UploadDatabase` | Copies files from source to destination (used for sync, bulk downloads, and DB uploads). |
| `deletefile` | `UnlockDatabase`                                         | Deletes a specific file (lock) from the remote.                                          |

### Command Details

- **`lsf`**: Used with `--files-only` to list DBs, or on the directory to list locks.
- **`check`**: Used with `--one-way` to see if source files differ from destination.
- **`copy` / `copyto`**: The primary data transfer commands. `copyto` is used when the destination filename needs to be explicit (like naming a lock file), while `copy` is used for standard transfers.
- **`deletefile`**: Specifically used to remove lock files to release locks.
