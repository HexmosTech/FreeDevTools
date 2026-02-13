# Parallelism and Concurrency Implementation

This document details the usage of parallelism and concurrency within the `b2m-cli` application. The application leverages Go's concurrency primitives (`goroutines`, `channels`, `sync` package) to ensure responsiveness and performance.

## Overview of Concurrency usage

| Component             | File               | Mechanism          | Purpose                                                                                                 |
| :-------------------- | :----------------- | :----------------- | :------------------------------------------------------------------------------------------------------ |
| **Status Collection** | `core/status.go`   | Sequential         | Fetching local files, remote files, locks, and metadata sequentially to reduce system load.             |
| **UI Main Loop**      | `ui/ui.go`         | `gocui` (Internal) | Handles terminal drawing and user input events.                                                         |
| **UI Updates**        | `ui/ui.go`         | `sync.Mutex`       | Protects shared state (`dbs`, `activeOps`, `dbStatus`) from concurrent access by background operations. |
| **Operations**        | `ui/ui.go`         | `go func`          | Offloads long-running tasks (Upload/Download) to background threads to keep the UI responsive.          |
| **Force Upload**      | `ui/operations.go` | `chan bool`        | Synchronizes the background upload thread with the UI-based user confirmation dialog.                   |
| **Cancellation**      | `ui/ui.go`         | `context.Context`  | Propagates cancellation signals (Ctrl+C) to all active background operations.                           |

## Detailed Implementation Analysis

### 1. Status Data Collection (`core/status.go`)

- **Function**: `FetchDBStatusData`
- **Implementation**:
  - Executes operations **sequentially** to reduce "thundering herd" effect on CPU and network:
    1.  `getLocalDBs()`
    2.  `LsfRclone()` (Fetches DBs and Locks in one go)
    3.  `DownloadAndLoadMetadata()`
  - **Reason**: Parallel execution previously caused high system load and rclone instability. Sequential execution relies on optimized single-call fetching (`LsfRclone`) to maintain performance.
  - **Verdict**: **Safe**. No concurrency issues.

### 2. UI State Management (`ui/ui.go`)

- **Struct**: `AppUI`
- **Mechanism**: `sync.Mutex` (`mu`)
- **Protected Fields**:
  - `dbs`: The list of database statuses.
  - `activeOps`: Map of currently running operations (cancellable).
  - `dbStatus`: Real-time status updates (progress bars, messages).
- **Process**:
  - Any function reading or writing these fields (e.g., `refreshStatus`, `updateDBStatus`, `startOperation`) acquires the lock first.
  - **Verdict**: **Safe**. Shared state is correctly guarded.

### 3. Background Operations (`ui/operations.go`)

- **Function**: `startOperation`
- **Implementation**:
  - Spawns a new goroutine `go func() { ... }` for the operation.
  - Uses `defer` to ensure cleanup (removing from `activeOps`, unlocking).
  - **Verdict**: **Safe**. Ensures UI does not freeze during uploads.

### 4. Force Upload Synchronization (`ui/operations.go`)

- **Scenario**: User must confirm overriding a lock.
- **Implementation**:
  - The background operation thread creates a buffered channel `confirmCh := make(chan bool, 1)`.
  - It triggers a UI popup via `app.g.Update`.
  - The UI popup callbacks (Yes/No) run on the main thread and send the result to the channel `confirmCh <- true`.
  - The background thread blocks on `select { case <-confirmCh: ... }`.
  - **Verdict**: **Safe**. Correctly bridges the background thread and the main UI thread without blocking the UI loop.

### 5. Graceful Shutdown (`ui/ui.go`)

- **Mechanism**: `context.Context`
- **Implementation**:
  - `RunUI` creates a context derived from `core.GetContext()` (which listens for SIGINT).
  - A dedicated goroutine watches `<-ctx.Done()`.
  - Upon cancellation, it signals `gocui` to quit via `g.Update`.
  - **Verdict**: **Safe**. Ensures clean exit on Ctrl+C.
