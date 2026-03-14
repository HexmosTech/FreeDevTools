# B2 Manager CLI Commands Workflow

This document provides a comprehensive breakdown of all the CLI commands defined in `b2-manager/cli/cli.go`, detailing the inputs (arguments they expect) and their outputs (what they print to `stdout`/`stderr`). This is especially important for scripts (such as Python changeset scripts) that consume these outputs.

## 1. User Commands (Interactive)

- **`generate-hash`**
  - **Input**: None. (Prompts interactively for `y/N` input).
  - **Output**: Prints a warning about regenerating metadata, asks for confirmation, and prints errors if cleanup/bootstrapping fails.
- **`reset`**
  - **Input**: None.
  - **Output**: Prints `"Resetting system state..."` and then `"Reset complete. Please restart the application."` on success.
- **`unlock`**
  - **Input**: `<db_name>` (Required).
  - **Output**: Prints a warning about force unlocking, prompts for `y/N` confirmation, and prints `"Database unlocked successfully."` on success.
- **`create-changeset`**
  - **Input**: `<phrase>` (Required).
  - **Output**: Output from `CreateChangeset` (likely empty on success) or an error.
- **`exe-changeset`**
  - **Input**: `<script_name>` (Required).
  - **Output**: Output from `ExecuteChangeset` (likely prints execution progress) or an error.

## 2. Changeset Commands (Often Used for Scripting)

- **`status`**
  - **Input**: `<db_name>` (Required).
  - **Output**: Prints one of the following exact strings for script consumption:
    - `ready_to_upload`
    - `bump_and_upload`
    - `outdated_version`
    - `up_to_date`
    - `unidentified`
- **`copy`**
  - **Input**: `<src_name>`, `<dst>`, `<file_type>`, `<script_name>` (All 4 are Required).
  - **Output**: Nothing printed to standard output on success. Exits with an error message on failure.
- **`upload`**
  - **Input**: `<db_name>` (Required), `[script_name]` (Optional).
  - **Output**: Nothing on success. Exits with error on failure.
- **`download`**
  - **Input**: `<db_name>` (Required), `[script_name]` (Optional).
  - **Output**: Nothing on success.
- **`download-latest-db`**
  - **Input**: `<db_name>` (Required), `[script_name]` (Optional).
  - **Output**: Nothing on success.
- **`fetch-db-toml`**
  - **Input**: None.
  - **Output**: Nothing on success.
- **`bump-db-version`**
  - **Input**: `<db_name>` (Required), `[script_name]` (Optional).
  - **Output**: Prints the **new bumped database name** (e.g., `"mydb-v3.sqlite"`).
- **`handle-query`**
  - **Input**: `<sql_name>` (Required - relative/absolute sql script name), `<db_name>` (Required), `[script_name]` (Optional).
  - **Output**: Nothing on success.
- **`get-version`**
  - **Input**: `<short_name>` (Required - mapping from `db.toml`), `[script_name]` (Optional).
  - **Output**: Prints the **full filename** that corresponds to the short name out of the `db.toml` map.
- **`get-latest`**
  - **Input**: `<db_name>` (Required), `[script_name]` (Optional).
  - **Output**: Prints the **filename of the latest version** of the provided db. (If it can't find a newer one, it prints the fallback `db_name` passed to it).
- **`notify`**
  - **Input**: `<message>` (Required - takes all remaining arguments and joins them with spaces).
  - **Output**: Nothing on success. Sends the custom notification to Discord securely.

