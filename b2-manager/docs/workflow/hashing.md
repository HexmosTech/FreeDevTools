# Hashing Workflow & Cache Structure

The application uses **b3sum** (BLAKE3) to calculate checksums of database files. This algorithm is chosen for its extreme speed and parallelism, making it significantly faster than MD5, SHA256, or even imohash for large files while providing cryptographic strength.

## Dependencies

- **b3sum**: The `b3sum` executable must be present in the system's `PATH`. The application verifies this at startup.

## Cache Logic

1. **Startup**: The application loads the existing cache from `hash.json` located in the local anchor directory (`.b2m/local-version/`).
2. **Hashing Request**: When a hash is requested for a file:
   - The system checks if the file path exists in the in-memory cache.
   - It compares the file's current modification time (`ModTime`) and size (`Size`) against the cached values.
   - **Hit**: If both match, the cached hash is returned immediately (no I/O is performed).
   - **Miss**: If there is no entry or the metadata doesn't match, the file is re-hashed.
     - **Start**: A log entry is created with the start timestamp.
     - **Execution**: The `b3sum` command is executed **directly on the file path** (e.g., `b3sum /path/to/file`).
       - This allows `b3sum` to utilize **multithreading** and the **OS buffer cache** for maximum performance.
       - Speed can range from ~500MB/s (disk) to >20GB/s (cached RAM).
     - **Parse**: The output is parsed to extract the hash.
     - **Log**: The operation completes with a log message containing the total duration, speed (MB/s), and start/end timestamps.
     - **Update**: The cache is updated with the new hash, size, and modtime.
3. **Shutdown/Cleanup**: The in-memory cache is saved back to `hash.json` when:
   - The application shuts down (via `Cleanup()`, which also closes the logger).
   - A `Reset` or `Reboot` command is issued (cache is explicitly cleared to ensure freshness).

## hash.json Structure

The `hash.json` file is a JSON object where keys are absolute file paths and values are objects containing the hash and file metadata.

### Schema

```json
{
  "/absolute/path/to/file.db": {
    "Hash": "string (hex encoded BLAKE3 checksum)",
    "ModTime": int64 (nanoseconds),
    "Size": int64 (bytes)
  }
}
```

### Fields

- **Hash**: The computed BLAKE3 hash of the file content, represented as a hex string.
- **ModTime**: The modification time of the file in nanoseconds (Unix timestamp). This is used to detect if the file has been modified since the last hash calculation.
- **Size**: The size of the file in bytes. This serves as a secondary check for file changes.

## Usage in Code

### Loading

The cache is loaded at the start of the application in `config/init.go`:

```go
if err := core.LoadHashCache(); err != nil {
    core.LogInfo("Warning: Failed to load hash cache: %v", err)
}
```

### Saving & Clearing

The cache is managed via `core/hash.go`:

1.  **SaveHashCache**: Saves current in-memory map to disk.
2.  **ClearHashCache**: Wipes in-memory map. Used during `--reset` or `--generate-hash` to force fresh calculations.

```go
// Example in config/init.go for reset
core.ClearHashCache()
Cleanup() // Saves the empty/pruned cache
```
