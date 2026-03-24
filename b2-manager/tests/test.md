# B2M CLI Changeset Directory Test

This document explains the testing logic for `test_b2m_cli_changeset_dir_test.go`. The test verifies the complete database management lifecycle when using the `changeset_dir=` parameter.

## Test Scenarios

### Test 1: Local Setup

- Prepares a specific changeset directory (e.g., `1772031633645610550_sample-phrase`).
- Copies a backup of the test database into this directory as `test-db-v1.db`.

### Test 2: Initial Upload

- Executing `b2m upload test-db-v1.db changeset_dir=...` in JSON mode.
- Verifies that the initial version is successfully uploaded to Backblaze B2.

### Test 3: Status Verification

- Executing `b2m status test-db-v1.db changeset_dir=...`.
- Verifies that the database status is reported as `up_to_date`.

### Test 4: Edge Case - Bump and Upload

- **Objective**: Test the workflow when local changes are detected.
- **Steps**:
  1. Modifies the local `test-db-v1.db` with SQL queries.
  2. Verifies status becomes `bump_and_upload`.
  3. Verifies that direct `upload` is blocked.
  4. Executing `b2m bump-and-upload` which increments version to `v2` and uploads.
  5. Verifies that the local `db.toml` is updated to point to `v2`.

### Test 5: Edge Case - Outdated Version

- **Objective**: Test the workflow when a newer version exists on remote.
- **Steps**:
  1. Simulates another user's action by manually uploading a `v2` to remote.
  2. Verifies that the local `v1` status becomes `outdated_version`.
  3. Verifies that `upload` of `v1` is blocked.
  4. Executing `b2m download-latest-db` which fetches `v2`.
  5. Modifies `v2` and performs `bump-and-upload` resulting in `v3`.
  6. Verifies that `db.toml` is updated to `v3`.

## Troubleshooting Failures

- **Exit Status 2 (rclone)**: This usually means a fatal error in the rclone command. Check `b2m.log` for the captured stderr. Common causes include:
  - Remote bucket inaccessible or invalid rclone configuration.
  - Source file missing or destination path errors.
- **Unexpected Status**: If the returned `status` doesn't match the expected state (e.g., expecting `up_to_date` but getting `outdated_version`), verify the modification times and hashes of the local vs remote files.
