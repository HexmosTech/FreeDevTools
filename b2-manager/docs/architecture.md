# Internal Structure & Architecture

The tool is built in Go and acts as a high-level wrapper around `rclone` and local file operations.

## Project Layout

- **`main.go`**: Entry point. Handles the main event loop, keyboard input initialization, and top-level menu routing.
- **`status.go`**: Responsible for gathering the state of the world. It:
  - Queries B2 for existing databases and lock files (`rclone lsf`).
  - Checks local `db/all_dbs/` state.
  - Compares local vs remote checksums (`rclone check`) to determine sync status.
  - Renders the status table.
- **`handleupload.go`**: Manages the critical "Edit Loop". It handles the UI flows for selecting databases, locking them, waiting for user input, and then executing the upload/unlock sequence.
- **`rclone.go`**: The storage backend layer. It provides Go functions that shell out to `rclone` commands (`sync`, `copyto`, `lsf`, `deletefile`). It abstracts the B2 interaction.
- **`ui.go`**: Contains UI helpers for the interactive terminal interface (spinners, clear screen, common input handling).

For more details on `rclone` interactions, see [Core Rclone Documentation](core.md).
