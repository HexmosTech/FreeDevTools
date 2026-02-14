# b2m-cli

`b2m-cli` is a command-line tool for managing Hexmos FreeDevTools databases securely using Backblaze B2 as a backend. It implements a locking mechanism to prevent concurrent writes and ensures data consistency across the team.

## Features

- **Distributed Locking**: Prevents race conditions by locking databases before editing using B2 file-based locks.
- **Backblaze B2 Sync**: Automatically syncs databases to/from B2 bucket using `rclone`.
- **Version-Aware Sorting**: Displays databases with latest versions first (e.g., `v4` before `v3`).
- **Discord Notifications**: Notifies the team channel when a database is updated.
- **Conflict Detection**: Checks for version mismatches and warns if local changes are out of sync with remote.

## Setup

### Prerequisites

1.  **Go**: Ensure you have `go` installed (for building).
2.  **Rclone**: The tool uses `rclone` for syncing.
3.  **b3sum**: Install `b3sum` for fast hashing.
    - Rust: `cargo install b3sum`.
    - See also: [BLAKE3](https://github.com/BLAKE3-team/BLAKE3?tab=readme-ov-file).

### Installation

1.  Move the binary to your `frontend` directory (recommended) or add to `/frontend/`.
2.  `Make build` in `frontend/` to build the frontend.
3.  `./b2m` to run the tool.

### Logging

The application logs its operations and errors to `b2m.log` in the current working directory.

- **INFO** logs include application startup/shutdown, status updates, and upload/download milestones.
- **ERROR** logs capture critical failures, rclone errors, and network issues.

## Configuration

The tool uses `fdt-dev.toml` for configuration. This file should be present in the `frontend` directory where you run the tool.

Example `fdt-dev.toml`:

```toml
[b2m]
# Hexmos
b2m_discord_webhook = "<your-discord-webhook-url>"
b2m_remote_root_bucket = "<your-b2-root-bucket>"
b2m_db_dir = "db/all_dbs"
```

It also relies on `rclone`. The `init` checks will attempt to install and configure `rclone` automatically if missing.

## Usage

The tool is designed to be run from the `frontend` directory of the FreeDevTools project. This ensures it can correctly locate the local database directory (`db/all_dbs/`).

Start the interactive shell:

```bash
./b2m
```

### CLI Arguments

In addition to the interactive shell, `b2m` supports the following command-line arguments:

- `--help`: Show help message.
- `--version`: Show version information.
- `--generate-hash`: Generate new hash and create metadata in remote (use with caution).
- `--reset`: Remove local metadata caches and start a fresh session.

## Documentation

For detailed information on how the tool works, please refer to the following documentation:

- **[Architecture & Internal Structure](docs/architecture.md)**: Project layout and code organization.
- **[Locking Mechanism](docs/locking.md)**: How distributed locking works on B2.
- **[Core Rclone Functions](docs/core.md)**: Low-level rclone interactions.

### Workflows

- **[Status Workflow](docs/workflow/status.md)**: How the tool determines file status (sync/lock check).
- **[Upload Workflow](docs/workflow/upload.md)**: The upload process, safety checks, and locking.
- **[Download Workflow](docs/workflow/download.md)**: Downloading databases and anchor verification.
- **[Hashing & Cache](docs/workflow/hashing.md)**: How `b3sum` hashing and caching works.
- **[Cancellation](docs/workflow/cancel.md)**: Handling interruptions and cleanup.
