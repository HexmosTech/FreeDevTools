# Hashing Workflow & Cache Structure

The application uses **imohash** (specifically the `github.com/kalafut/imohash` library) to calculate checksums of local database files. This algorithm is chosen for its speed and suitability for large files, as it samples the file rather than reading the entire content (default behavior), making it significantly faster than MD5 or SHA256 for large blobs while maintaining high collision resistance for this use case.

## Cache Logic

1. **Startup**: The application loads the existing cache from `hash.json` located in the local anchor directory (`db/all_dbs/.b2m/local-version/`).
2. **Hashing Request**: When a hash is requested for a file:
   - The system checks if the file path exists in the in-memory cache.
   - It compares the file's current modification time (`ModTime`) and size (`Size`) against the cached values.
   - **Hit**: If both match, the cached hash is returned immediately (no I/O is performed to read the file content).
   - **Miss**: If there is no entry or the metadata doesn't match, the file is re-hashed.
     - If an `onProgress` callback is provided, an "Integrity Check" status is reported.
     - The calculation duration is logged.
     - The cache is updated with the new hash.
3. **Shutdown**: The in-memory cache is saved back to `hash.json` when the application acts.

## hash.json Structure

The `hash.json` file is a JSON object where keys are absolute file paths and values are objects containing the hash and file metadata.

### Schema

```json
{
  "/absolute/path/to/file.db": {
    "Hash": "string (hex encoded imohash checksum)",
    "ModTime": int64 (nanoseconds),
    "Size": int64 (bytes)
  }
}
```

### Fields

- **Hash**: The computed imohash of the file content, represented as a hex string.
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

The cache is saved to disk (`hash.json`) in the following scenarios to avoid recalculating hashes unnecessarily:

1.  **Application Shutdown**: Deferred save in `main.go`.
2.  **Post-Operation**: Immediately after a successful **Upload** or **Download** operation (to capture state of the new file).
3.  **Hash Calculation**: Whenever a new hash is calculated (cache miss).
