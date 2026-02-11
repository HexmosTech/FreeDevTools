# Core Rclone Documentation

This document provides an overview of the `core/rclone.go` file, specifically focusing on the functions available and the underlying `rclone` commands executed.

## Overview

`core/rclone.go` handles various interactions with the Backblaze B2 storage. Note that Download functions have been refactored into `core/download.go`.

## Functions

There are **15** functions defined in this file (and related helpers):

1.  **CheckRclone**: Checks if `rclone` is installed.
2.  **CheckRcloneConfig**: Verifies if the `rclone.conf` file exists.
3.  **RunInit** (in `core/init.go`): Initializes `rclone` by installing it (if missing) and creating the configuration file.
4.  **BootstrapSystem**: Performs initial checks for database discovery and synchronization.
5.  **checkDBDiscoveryAndSync**: (Internal) Orchestrates local and remote database discovery.
6.  **getLocalDBs** (in `core/local.go`): Lists local database files.
7.  **LsfRclone**: Lists all files recursively using `rclone lsf -R` to retrieve both databases and locks efficiently.
8.  **checkFileChanged**: Checks if a specific file has changed between local and remote using `rclone check`.
9.  **SyncDatabase** / **DownloadDatabase**: (Moved to `core/download.go`) Downloads a single database.
10. **UploadDatabase** (in `core/upload.go`): Uploads a single database from local to remote. **Returns** the uploaded `model.Metadata` object for anchor persistence.
11. **LockDatabase** (in `core/handleFiles.go`): Creates a lock file (`.lock`) on the remote.
12. **UnlockDatabase** (in `core/handleFiles.go`): Removes a lock file from the remote.
13. **FetchLocks**: Retrieves and parses all active lock files from the remote.
14. **RcloneCopy**: Wrapper for `rclone copy` commands with logging and progress tracking.
15. **RcloneSync**: Wrapper for `rclone sync`.

## Rclone Commands Used

The code executes the following distinct `rclone` commands:

| Command      | Usage Context                                        | Description                                                                              |
| :----------- | :--------------------------------------------------- | :--------------------------------------------------------------------------------------- |
| `config`     | `CheckRcloneConfig`                                  | Checks config dump to verify configuration.                                              |
| `lsf`        | `LsfRclone`, `FetchLocks`                            | Lists files in the remote bucket (databases or locks).                                   |
| `check`      | `checkFileChanged`                                   | Compares local files with remote files to detect changes.                                |
| `copyto`     | `LockDatabase`, `DownloadForMeta`                    | Copies a specific file to a specific destination (used for naming lock files).           |
| `copy`       | `SyncDatabase`, `DownloadDatabase`, `UploadDatabase` | Copies files from source to destination (used for sync, bulk downloads, and DB uploads). |
| `deletefile` | `UnlockDatabase`                                     | Deletes a specific file (lock) from the remote.                                          |
| `sync`       | `DownloadAndLoadMetadata`                            | Syncs a directory (mirroring).                                                           |

### Command Details

- **`lsf`**: Used with `-R` (recursive) to scan the entire bucket efficiently.
- **`check`**: Used with `--one-way` to see if source files differ from destination.
- **`copy` / `copyto`**: The primary data transfer commands. `copyto` is used when the destination filename needs to be explicit, while `copy` is used for standard transfers.
- **`sync`**: Used for metadata mirroring to ensure we have an exact copy of the `version/` directory.
