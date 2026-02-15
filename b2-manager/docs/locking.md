# Locking Mechanism

Distributed locking is executed via **Lock Files** stored in a dedicated B2 prefix (`b2-config:hexmos/freedevtools/content/db/lock/`).

## How it Works

- **Lock Acquisition**: When you lock `dbname.db`, the tool writes a file named `<dbname>.<user>.<hostname>.lock` to the lock directory on B2.
- **Lock Check**: Before allowing operations, the tool lists files in the lock directory. If a lock file exists for a DB, it blocks others from locking or syncing it.
- **Lock Release**: Upon successful upload (or manual cancel), the tool deletes the specific lock file.

This ensures that only one person can edit a database at a time, preventing overwrite conflicts.

For more details on the upload/locking workflow, see [Upload Workflow](workflow/upload.md).
