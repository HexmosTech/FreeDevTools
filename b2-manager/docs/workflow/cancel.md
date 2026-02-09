# Cancellation Workflow

This document explains how the system handles user cancellations or errors during critical operations (specifically uploads) to prevent inconsistent states.

## Triggering Cancellation

- **User Action**: Pressing `c` in the UI triggers the `context.CancelFunc` associated with the active operation.
- **Global Signal**: Pressing `Ctrl+C` sends `SIGINT`. This:
  1.  Cancels the global context.
  2.  Triggers shutdowns for all active operations effectively immediately.
  3.  Exits the UI.
- **System Error**: Network failure or unexpected errors during upload also trigger the cleanup flow.

## Process Flow

The cleanup logic is defined in `CleanupOnCancel` (`core/context.go`) and invoked by operations (e.g., `core/upload.go`) upon cancellation.

### 1. Calculate Stats

- Determines how long the operation ran before cancellation.

### 2. Record Cancellation

- **Metadata Update**:
  - Generates a new metadata event with status `cancelled`.
  - This informs other users (and the Status Check logic) that the last attempt failed, preventing them from trusting potentially partial data (though B2 is atomic per file, metadata sync allows tracking intent).
  - Status Check displays this as `Upload Cancelled` (Red).

### 3. Release Resources

- **Unlock**:
  - Function calls `UnlockDatabase` with `force=true`.
  - **Retry Logic**: Attempts to release the lock up to **3 times** (with 1s delay) to ensure the lock is cleared even if transient network errors occur.
  - **Safety Check**: Before deletion, the filename is strictly validated to ensure it ends with `.lock`. This prevents accidental deletion of `.db` files or other critical data if the path construction was malformed.
  - Deletes the `.lock` file from B2, freeing the database for future operations.

## Diagram

```mermaid
graph TD
    Start[Cancel Signal / Error] --> CalcTime[Calculate Duration]

    CalcTime --> RecordMeta[Generate Metadata: cancelled]
    RecordMeta --> UploadMeta[Upload Metadata Event]

    UploadMeta --> Unlock[Release Lock (Force)]
    Unlock --> Done[Cleanup Complete]
```
