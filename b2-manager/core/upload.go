package core

import (
	"context"
	"fmt"
	"path/filepath"
	"time"

	"b2m/config"
	"b2m/model"
)

// PerformUpload handles the complete upload flow for a single database.
// This function is triggered when the user presses 'u' or selects "Upload" in the UI.
//
// Workflow Overview:
// 1. Lock:Acquire a distributed lock on B2 to prevent concurrent edits.
// 2. Set Status: Update remote metadata to "uploading" so others see "User is Uploading".
// 3. Upload: Transmit the actual .db file to B2.
// 4. Anchor: Upon success, update the local execution anchor (LocalVersion) to match the new state.
// 5. Finalize: Remove the lock file.
func PerformUpload(ctx context.Context, dbName string, force bool, onProgress func(model.RcloneProgress), onStatusUpdate func(string)) error {
	if onStatusUpdate != nil {
		onStatusUpdate("Safety Check...")
	}

	// -------------------------------------------------------------------------
	// PHASE 0: PRE-UPLOAD SAFETY CHECK
	// Check if the remote file is newer than our local version to prevent data loss.
	// -------------------------------------------------------------------------
	if !force {
		if err := CheckUploadSafety(ctx, dbName); err != nil {
			LogError("PerformUpload: Safety check failed for %s: %v", dbName, err)
			return fmt.Errorf("safety check failed: %w", err)
		}
	}

	if onStatusUpdate != nil {
		onStatusUpdate("Locking...")
	}

	// -------------------------------------------------------------------------
	// PHASE 1: LOCKING
	// We acquire a lock file on B2 (e.g., dbname.lock) to signal exclusive access.
	// -------------------------------------------------------------------------
	err := LockDatabase(ctx, dbName, config.AppConfig.CurrentUser, config.AppConfig.Hostname, "upload-flow", force)
	if err != nil {
		LogError("PerformUpload: Failed to lock database %s: %v", dbName, err)
		return fmt.Errorf("failed to lock: %w", err)
	}

	// -------------------------------------------------------------------------
	// PHASE 2: UPDATE METADATA STATUS
	// We proactively set the metadata status to "uploading". This allows other
	// users to see "User X is Uploading ⬆️" instead of just "Locked".
	// -------------------------------------------------------------------------
	if onStatusUpdate != nil {
		onStatusUpdate("Setting Metadata...")
	}

	metaMap, err := DownloadAndLoadMetadata()
	if err == nil {
		var metaToUpload *model.Metadata
		if existing, ok := metaMap[dbName]; ok {
			existing.Status = "uploading"
			metaToUpload = existing
		} else {
			// New DB: Create initial metadata
			var errGen error
			metaToUpload, errGen = GenerateLocalMetadata(dbName, 0, "uploading")
			if errGen != nil {
				LogError("PerformUpload: Failed to generate metadata for new DB %s: %v", dbName, errGen)
			}
		}
		if metaToUpload != nil {
			if err := UploadMetadata(ctx, dbName, metaToUpload); err != nil {
				LogError("PerformUpload: Failed to set uploading status metadata for %s: %v", dbName, err)
				// Non-fatal, proceeding with upload but logging warning
			}
		}
	}

	// -------------------------------------------------------------------------
	// PHASE 3: UPLOADING FILE
	// Perform the actual heavy lifting of copying the file to B2.
	// -------------------------------------------------------------------------
	if onStatusUpdate != nil {
		onStatusUpdate("Uploading...")
	}

	LogInfo("Starting upload for %s", dbName)
	startTime := time.Now()

	// UploadDatabase calls `rclone copy`
	meta, err := UploadDatabase(ctx, dbName, true, func(p model.RcloneProgress) {
		if onProgress != nil {
			onProgress(p)
		}
	})

	if err != nil {
		LogError("Upload failed for %s: %v", dbName, err)
		// Clean up properly (record cancellation metadata and unlock)
		CleanupOnCancel(dbName, startTime)
		return fmt.Errorf("upload failed: %w", err)
	}

	// -------------------------------------------------------------------------
	// PHASE 4: UPDATE ANCHOR (LocalVersion)
	// Success! We must update our local "Verified Anchor" to match what we just uploaded.
	// This ensures that subsequent status checks report "Synced" or "Up to Date".
	// -------------------------------------------------------------------------
	if meta != nil {
		if err := UpdateLocalVersion(dbName, *meta); err != nil {
			LogError("Failed to update local version anchor for %s: %v", dbName, err)
			// Non-fatal, but meaningful warning
		} else {
			LogInfo("Successfully updated local-version anchor for %s", dbName)

			// Update hash cache on disk as we just calculated it and it is fresh
			// We recalculate the hash of the LOCAL file. CalculateXXHash updates the in-memory cache
			// with the new ModTime and Size. Then SaveHashCache persists it.
			localPath := filepath.Join(config.AppConfig.LocalDBDir, dbName)
			if _, err := CalculateXXHash(localPath); err != nil {
				LogError("PerformUpload: Failed to recalculate hash for cache update: %v", err)
			} else {
				if err := SaveHashCache(); err != nil {
					LogInfo("PerformUpload: Warning: Failed to save hash cache: %v", err)
				}
			}
		}
	}

	// -------------------------------------------------------------------------
	// PHASE 5: FINALIZE & UNLOCK
	// Release the lock so others can access the file.
	// -------------------------------------------------------------------------
	if onStatusUpdate != nil {
		onStatusUpdate("Finalizing...")
	}

	err = UnlockDatabase(ctx, dbName, config.AppConfig.CurrentUser, true)
	if err != nil {
		LogInfo("Unlock failed for %s: %v", dbName, err)
		// Non-fatal
	}

	if onStatusUpdate != nil {
		onStatusUpdate("Done")
	}
	LogInfo("Upload complete for %s", dbName)

	return nil
}

// CheckUploadSafety verifies that the remote database is not newer than the local one.
// It fetches the specific remote metadata and compares it with the local anchor and file.
func CheckUploadSafety(ctx context.Context, dbName string) error {
	LogInfo("CheckUploadSafety: Verifying status for %s...", dbName)

	// 1. Fetch Remote Metadata (Specific file only)
	remoteMeta, err := FetchSingleRemoteMetadata(ctx, dbName)
	if err != nil {
		// If fetch failed, it might be net issue or config.
		// If it's just "not found", FetchSingleRemoteMetadata returns nil, nil.
		return fmt.Errorf("failed to fetch remote metadata: %w", err)
	}

	if remoteMeta == nil {
		LogInfo("CheckUploadSafety: No remote metadata found. Safe to upload (New DB).")
		return nil
	}

	// 2. Get Local Anchor
	localAnchor, err := GetLocalVersion(dbName)
	if err != nil {
		// If non-critical error (like permission), we might fail.
		// If not found, localAnchor is nil.
		LogInfo("CheckUploadSafety: Error reading local anchor: %v (Assuming no anchor)", err)
	}

	// 3. Compare
	// Logic matches CalculateDBStatus Phase 3 & 4 somewhat, but strict for upload.

	// Case A: Remote Exists, but No Local Anchor.
	// This implies we pulled a repo or deleted local metadata, but remote has history.
	// We risk overwriting something we don't know about.
	if localAnchor == nil {
		// Exception: If hashes match, we are coincidentally in sync (autofixed elsewhere, but here we proceed).
		localPath := filepath.Join(config.AppConfig.LocalDBDir, dbName)
		if hash, err := CalculateXXHash(localPath); err == nil && hash == remoteMeta.Hash {
			LogInfo("CheckUploadSafety: No anchor, but hashes match. Safe to upload (Update).")
			return nil
		}

		return fmt.Errorf("remote database exists but no local history found. Please download first to sync")
	}

	// Case B: Remote Hash != Anchor Hash
	// This means Remote has changed since we last downloaded/uploaded.
	if remoteMeta.Hash != localAnchor.Hash {
		// The remote version is different from what we based our work on.
		return fmt.Errorf("remote database is newer (Remote Hash %s != Anchor Hash %s). Please download to merge/sync", remoteMeta.Hash[:8], localAnchor.Hash[:8])
	}

	// Case C: Remote Hash == Anchor Hash
	// We are based on the latest remote. Safe to overwrite.
	LogInfo("CheckUploadSafety: Local anchor matches remote. Safe to upload.")
	return nil
}
