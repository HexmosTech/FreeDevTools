# Hashing Workflow & Cache Structure

The application uses xxHash (specifically xxh3) to calculate checksums of local database files. To improve performance, especially for large files that haven't changed, a persistent hash cache is used.

## Cache Logic

1. **Startup**: The application loads the existing cache from `hash.json` located in the local anchor directory (`db/all_dbs/.b2m/local-version/`).
2. **Hashing Request**: When a hash is requested for a file:
   - The system checks if the file path exists in the in-memory cache.
   - It compares the file's current modification time (`ModTime`) and size (`Size`) against the cached values.
   - **Hit**: If both match, the cached hash is returned immediately (no I/O is performed to read the file content).
   - **Miss**: If there is no entry or the metadata doesn't match, the file is re-hashed, and the cache is updated.
3. **Shutdown**: The in-memory cache is saved back to `hash.json` when the application acts.

## hash.json Structure

The `hash.json` file is a JSON object where keys are absolute file paths and values are objects containing the hash and file metadata.

### Schema

```json
{
  "/absolute/path/to/file.db": {
    "Hash": "string (hex encoded xxh3 checksum)",
    "ModTime": int64 (nanoseconds),
    "Size": int64 (bytes)
  }
}
```

### Fields

- **Hash**: The computed XXH3 hash of the file content, represented as a hex string.
- **ModTime**: The modification time of the file in nanoseconds (Unix timestamp). This is used to detect if the file has been modified since the last hash calculation.
- **Size**: The size of the file in bytes. This serves as a secondary check for file changes.

## Usage in Code

### Loading

The cache is loaded at the start of the application in `main.go`:

```go
if err := core.LoadHashCache(); err != nil {
    core.LogInfo("Warning: Failed to load hash cache: %v", err)
}
```

### Saving

The cache is saved deferred until the application exits:

```go
defer func() {
    if err := core.SaveHashCache(); err != nil {
        core.LogError("Failed to save hash cache: %v", err)
    }
}()
```
