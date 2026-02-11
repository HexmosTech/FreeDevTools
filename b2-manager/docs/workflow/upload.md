# Upload Workflow

This document details the multi-step process required to safely upload a database to the remote B2 bucket. This flow ensures exclusive access, validation, and proper audit trails.

## Process Flow

The upload process is orchestrated by `PerformUpload` in `core/upload.go`.

> **UI Action**: This workflow is triggered when the user presses **'u'** (or selects "Upload") in the main dashboard.

### Phase 0: Pre-Upload Safety Check

Before any action, `core.CheckUploadSafety` performs a critical validation to prevent data loss.

1.  **Remote Comparison**: Fetches specific remote metadata for the database.
2.  **Safety Logic**:
    - **Safe**: If remote hash matches local anchor (we are up-to-date) OR if remote doesn't exist (new DB).
    - **Unsafe**: If remote hash differs from local anchor, it means **someone else updated the DB** since we last synced.
3.  **Action**: The upload is **aborted** immediately if the safety check fails, preventing accidental overwrite of newer remote data.

### Phase 1: Locking (Signal Intent)

1.  **Acquire Lock**: Creates a `.lock` file on B2 (`dbname.user.host.lock`).
2.  **Purpose**: Signals to other users that an upload is starting. Prevention of concurrent edits.

### Phase 2: Metadata Status Update

1.  **Set Status**: Proactively updates the remote metadata JSON to `status: "uploading"`.
2.  **UI Feedback**: Allows other users to see **"User is Uploading ⬆️"** instead of just "Locked".

### Phase 3: Uploading & Metadata Finalization

1.  **File Upload**: Executes `rclone copy` to transmit the `.db` file to B2.
2.  **Verification**: Checks checksums (via rclone) to ensure integrity.
3.  **Generate Final Metadata**: On success, generates a new metadata block with `status: "success"` and interaction history.
4.  **Upload Metadata**: Syncs the new metadata file to B2.

### Phase 4: Anchor Update

1.  **Sync Local State**: `PerformUpload` receives the generated metadata from `UploadDatabase` and calls `UpdateLocalVersion` to update the `local-versions/` anchor file.
2.  **Update Cache**: The system recalculates the local file hash and updates the persistent `hash.json` cache. This ensures that subsequent status checks can quickly verify the file state without expensive re-hashing.
3.  **Result**: Ensures the system knows the local file is now identical to the remote (Status becomes "Synced").

### Phase 5: Finalization

1.  **Unlock**: Removes the `.lock` file from B2.
2.  **Notify**: Sends a completion webhook (Descriptor).

## Diagram

```mermaid
graph TD
    Start[User Presses 'U'] --> SafetyCheck{0. Safety Check}
    SafetyCheck -- Fail --> Abort[Abort: Remote Newer]
    SafetyCheck -- Pass --> Lock[1. Acquire Lock]

    Lock --> SetMeta[2. Set Meta: 'uploading']
    SetMeta --> Upload[3. Upload File]

    Upload -- Success --> GenMeta[Generate 'Success' Meta]
    GenMeta --> UpMeta[Upload Meta]
    UpMeta --> Anchor[4. Update Anchor]
    Anchor --> Cache[Update Cache]
    Cache --> Unlock[5. Release Lock]
    Unlock --> Done[Done]

    Upload -- Fail --> Cleanup[Cleanup & Unlock]
```
