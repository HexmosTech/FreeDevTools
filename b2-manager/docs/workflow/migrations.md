# Database Migration Standard

> This document defines the standard operating procedure for managing distributed SQLite databases within the `b2-manager` ecosystem.

## Problem

Sharing a single raw `.db` file over cloud storage (B2) for multiple developers to actively write to causes data loss and "split-brain" scenarios whenever concurrent edits occur. The last uploader overwrites the work of others.

## Goal

Enable safe, concurrent data evolution for multiple developers without a central database server, ensuring zero data loss and easy conflict resolution.

## Current Reality

- Developers make changes to their local SQLite file.
- To share changes, they must upload the entire binary file.
- If two developers upload around the same time, one version is lost.
- There is no history of _what_ changed, only the final state.

## Expected Result

- A workflow where developers can verify their local changes are safe to merge.
- A system that captures "what changed" rather than just the final binary.
- ability to "replay" changes on top of the latest remote version.

## Solution

We separate **Schema Migrations** (structure/data changes) from the **Database Artifact** (the binary file).

### The Migration Artifact

Instead of sharing the `.db` file directly, we share **Python Migration Scripts**.

- **Format**: `YYYYMMDDHHMMSS<nanoseconds>_<phrase>.py`
- **Creation**: Generated via `./b2m migrations create <phrase>`
- **Content**: A Python script that connects to the SQLite DB and executes SQL commands (or python logic) to apply changes.

### The Safe Workflow (Lock-Last)

#### Phase 1: Local Development (Unlocked)

1.  **Download**: `./b2m download <db>` (Get latest snapshot)
2.  **Work**: Modify data or schema locally.
3.  **Generate SQL (Optional)**: Use `sqldiff` to capture your changes.
    - `sqldiff --primary-key remote_snapshot.db local.db > changes.sql`
4.  **Create Migration Script**: `./b2m migrations create add_users_table`
    - Creates: `scripts/20260215103000123456789_add_users_table.py`
5.  **Implement**: detailed logic or paste the `sqldiff` output into the python script to apply your changes.
6.  **Test**: Run the script locally against your DB.
7.  **Commit**: `git add scripts/ && git commit`

#### Phase 2: Synchronization (Locked)

1.  **Download Latest**: Ensure you have the absolute latest DB from B2.
2.  **Apply New Migrations**: Run the new script(s) against this fresh DB.
3.  **Verify**: Check data integrity.
4.  **Lock**: Acquire global lock.
5.  **Upload**: Upload the new DB binary.
6.  **Unlock**: Release lock.

## 6. Scenarios

To accurately handle conflicts, we define the following states based on the "Base Version" the developer started with vs. the "Remote Version" currently on B2.

### Version Scenarios

| Case  | Local Base | Remote State | Monitor / Check                                                   | Action                                                                                                        |
| :---- | :--------- | :----------- | :---------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------ |
| **1** | **v1**     | **v1**       | **Automatic**                                                     | **Safe Upload**.<br>Run local migration -> Upload v2.                                                         |
| **2** | **v1**     | **v2**       | **Potential Conflict**<br>Check if v2 changes overlap with yours. | **Rebase Required**.<br>1. Download v2.<br>2. Re-apply your migration on top of v2.<br>3. Verify & Upload v3. |
| **3** | **v1**     | **Locked**   | **Blocked**                                                       | **Wait**. Another upload is in progress. Retry later.                                                         |

### Data Source Types

The risk of data loss depends on the _source_ of the update.

1.  **External Data Injection (Critical)**
    - _Source_: LLM output, API streams, User input.
    - _Risk_: **High**. If this data is inserted directly into the local DB and then wiped by a "Download" to resolve a conflict, the data is lost forever.
    - _Mitigation_: Must be captured in a CSV/JSON or Migration Script _before_ insertion.

2.  **Internal Data Update (Recoverable)**
    - _Source_: Deterministic logic, re-computable values.
    - _Risk_: Low. Can be re-run if needed. But still, conflicts are possible.

## 7. Actual Result

<!--
The system now enforces a structured evolution of the database.

- **Timestamped Scripts**: Ensure strict ordering of changes.
- **Python-based**: Allows complex logic (e.g., data transformation) beyond simple SQL.
- **Git Versioning**: Migration scripts are code, allowing review and history tracking. -->

## 7. Difference

<!--
| Feature           | Old Way (Raw Upload)   | New Way (Migrations)          |
| :---------------- | :--------------------- | :---------------------------- |
| **Conflict Risk** | High (Last write wins) | Low (Mergeable scripts)       |
| **History**       | None (Binary blob)     | Full (Git history of scripts) |
| **Granularity**   | Entire DB              | Per-feature change            |
| **Format**        | SQLite Binary          | Python Script                 | -->
