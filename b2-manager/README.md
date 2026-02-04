# fdtdb-cli

`fdtdb-cli` is a command-line tool for managing Hexmos FreeDevTools databases securely using Backblaze B2 as a backend. It implements a locking mechanism to prevent concurrent writes and ensures data consistency across the team.

## Features

- **Distributed Locking**: Prevents race conditions by locking databases before editing using B2 file-based locks.
- **Backblaze B2 Sync**: Automatically syncs databases to/from B2 bucket using `rclone`.
- **Version-Aware Sorting**: Displays databases with latest versions first (e.g., `v4` before `v3`).
- **Discord Notifications**: Notifies the team channel when a database is updated.
- **Conflict Detection**: Checks for version mismatches and warns if local changes are out of sync with remote.

## Installation

1.  Ensure you have `go` installed.
2.  Clone the repository.
3.  Build the tool:
    ```bash
    cd fdtdb-cli
    go build -o fdtdb .
    ```
4.  (Optional) Add to your PATH.

## Configuration

The tool requires a `.env` file in the project root with the following credentials:

```env
B2_ACCOUNT_ID="<your-b2-account-id>"
B2_APPLICATION_KEY="<your-b2-app-key>"
DISCORD_WEBHOOK_URL="<your-discord-webhook-url>"
```

It also relies on `rclone`. The `init` checks will attempt to install and configure `rclone` automatically if missing.

## Usage

Start the interactive shell:

```bash
./fdtdb
```

### Core Workflow

The typical workflow for editing a database is:

1.  **Check Status**: verify you have the latest data.
2.  **Sync**: `Sync to Local` if you are behind.
3.  **Lock & Upload** (from `Upload` menu):
    - Select the database you want to edit.
    - The tool acquires a **LOCK** on B2.
    - The tool **PAUSES** and waits for you.
4.  **Edit**: Open the SQLite database in `db/all_dbs/` using your preferred SQLite editor (e.g., DB Browser for SQLite) and make changes.
5.  **Commit**: Return to the `fdtdb` terminal and select **Proceed**.
    - The tool uploads the changed database to B2.
    - It releases the lock.
    - It notifies Discord.

### Commands Breakdown

#### `Status`

Displays the current state of all managed databases.

- **Sync Status**: Shows if local DB is `Synced`, `Outdated` (remote is newer), `New DB` (local only), or `Missing`.
- **Lock Status**: Shows if a DB is locked by you or a teammate.

#### `Upload`

Access the upload and locking sub-menu:

- **Lock and Upload Selected DB's**: The main flow for editing. Locks -> Waits -> Uploads -> Unlocks.
- **Upload Locked DB's**: Use this if you already have a lock (e.g., from a previous session or manual lock) and want to upload changes.
- **Lock/Unlock DB**: Manually acquire or release locks without uploading. Useful for reserving a DB or clearing a stale lock.

#### `Sync to Local`

Downloads the latest state of all databases from B2 to your local `db/all_dbs/` directory.

## Internal Structure

The tool is built in Go and acts as a high-level wrapper around `rclone` and local file operations.

### Project Layout

- **`main.go`**: Entry point. Handles the main event loop, keyboard input initialization, and top-level menu routing.
- **`status.go`**: Responsible for gathering the state of the world. It:
  - Queries B2 for existing databases and lock files (`rclone lsf`).
  - Checks local `db/all_dbs/` state.
  - Compares local vs remote checksums (`rclone check`) to determine sync status.
  - Renders the status table.
- **`handleupload.go`**: Manages the critical "Edit Loop". It handles the UI flows for selecting databases, locking them, waiting for user input, and then executing the upload/unlock sequence.
- **`rclone.go`**: The storage backend layer. It provides Go functions that shell out to `rclone` commands (`sync`, `copyto`, `lsf`, `deletefile`). It abstracts the B2 interaction.
- **`ui.go`**: Contains UI helpers for the interactive terminal interface (spinners, clear screen, common input handling).

### Locking Mechanism

Distributed locking is implemented via **Lock Files** stored in a dedicated B2 prefix (`b2-config:hexmos/freedevtools/content/db/lock/`).

- **Lock Acquisition**: When you lock `dbname.db`, the tool writes a file named `<dbname>.<user>.<hostname>.lock` to the lock directory on B2.
- **Lock Check**: Before allowing operations, the tool lists files in the lock directory. If a lock file exists for a DB, it blocks others from locking or syncing it.
- **Lock Release**: Upon successful upload (or manual cancel), the tool deletes the specific lock file.

This ensures that only one person can edit a database at a time, preventing overwrite conflicts.
