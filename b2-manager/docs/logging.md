# Centralized Logging System

The b2m CLI uses a centralized file-based logger to ensure consistent, persistent, and structured logs for debugging and auditing.

## Overview

- **Module**: `core/logger.go`
- **Log File**: `b2m.log` (Created in the current working directory)
- **Levels**: `INFO`, `ERROR`

## Usage

### Initialization

The logger is initialized at the very start of `main.go`. It sets up a MultiWriter that directs output to both `b2m.log` and the standard output (optional, mostly for errors or critical info, but currently tailored for file logging).

```go
core.InitLogger()
defer core.CloseLogger()
```

### Logging Functions

Replace `fmt.Printf` / `fmt.Println` with the following:

#### `core.LogInfo(format string, v ...interface{})`

- **Use Case**: General flow tracking, status updates, successful operations.
- **Example**:
  ```go
  core.LogInfo("Downloading metadata for %s...", dbName)
  core.LogInfo("✅ Cancellation recorded.")
  ```

#### `core.LogError(format string, v ...interface{})`

- **Use Case**: Failures, warnings, critical errors.
- **Example**:
  ```go
  core.LogError("Failed to calculate hash for %s: %v", dbName, err)
  ```

## Status Debugging

The logger is heavily used in `core/status.go` to explain _why_ a database status is determined (e.g., specific hash mismatches):

```text
2026/02/02 22:23:09 [INFO] Status Check: mcp-db-v3.db -> Remote Newer (LocalVersion Hash abc... != Remote Hash xyz...)
```

## Maintenance

- The log file is **appended** to on each run.
- It is **not** automatically rotated (future improvement).
