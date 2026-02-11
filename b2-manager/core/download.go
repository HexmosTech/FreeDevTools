package core

import (
	"context"
	"encoding/json"
	"fmt"
	"os"
	"os/exec"
	"path"
	"path/filepath"
	"strings"

	"b2m/model"
)

// DownloadDatabase downloads a single database from remote to local (overwriting).
// This function is triggered when the user presses 'd' or selects "Download" in the UI.
//
// Workflow Overview:
// 1. Lock Check: Verify that no one else is currently uploading this database.
// 2. Download: Execute `rclone copy` to pull the file from B2.
// 3. Anchor: Construct a local "Verified Anchor" (LocalVersion) to mark this state as synced.
func DownloadDatabase(ctx context.Context, dbName string, quiet bool, onProgress func(model.RcloneProgress)) error {
	LogInfo("Downloading database %s", dbName)

	// -------------------------------------------------------------------------
	// PHASE 1: LOCK CHECK & SAFETY
	// Ensure the database isn't currently being uploaded by someone else.
	// -------------------------------------------------------------------------
	locks, err := FetchLocks(ctx)
	if err != nil {
		LogError("fetchLocks failed in DownloadDatabase for %s: %v", dbName, err)
		return fmt.Errorf("failed to fetch locks: %w", err)
	}

	if l, ok := locks[dbName]; ok {
		if l.Type == "lock" { // Uploading
			LogError("Database %s is locked by %s, cannot sync", dbName, l.Owner)
			return fmt.Errorf("database %s is currently being uploaded by %s", dbName, l.Owner)
		}
	}

	if err := os.MkdirAll(model.AppConfig.LocalDBDir, 0755); err != nil {
		LogError("Failed to create local directory: %v", err)
		return fmt.Errorf("failed to create local directory: %w", err)
	}

	remotePath := path.Join(model.AppConfig.RootBucket, dbName)
	// Use directory as destination for 'copy'
	localDir := model.AppConfig.LocalDBDir

	// -------------------------------------------------------------------------
	// PHASE 2: EXECUTE DOWNLOAD
	// Perform the actual network transfer using `rclone copy`.
	// -------------------------------------------------------------------------
	description := "Downloading " + dbName
	// Use the passed quiet parameter
	// The new RcloneCopy uses !quiet for verbose. If onProgress is set, it adds json flags.
	if err := RcloneCopy(ctx, "copy", remotePath, localDir, description, quiet, onProgress); err != nil {
		LogError("DownloadDatabase RcloneCopy failed for %s: %v", dbName, err)
		return fmt.Errorf("download of %s failed: %w", dbName, err)
	}

	// -------------------------------------------------------------------------
	// PHASE 3: CONSTRUCT ANCHOR (LocalVersion)
	// Success! We must now create a local-version anchor so the status logic knows
	// we are currently in sync with the remote state.
	// -------------------------------------------------------------------------

	// USER REQUIREMENT: "Process locally. Fetch local db hash and copy remote metadata timestamp."
	// We do NOT copy the entire metadata file (no events). We construct a minimal anchor.

	fileID := strings.TrimSuffix(dbName, ".db")
	metadataFilename := fileID + ".metadata.json"
	mirrorMetadataPath := filepath.Join(model.AppConfig.LocalVersionDir, metadataFilename)

	// 3.1. Calculate Local Hash of the newly downloaded file
	localDBPath := filepath.Join(model.AppConfig.LocalDBDir, dbName)
	localHash, err := CalculateXXHash(localDBPath, nil)
	if err != nil {
		LogError("DownloadDatabase: Failed to calculate hash of downloaded file %s: %v", dbName, err)
		return fmt.Errorf("failed to calculate hash of downloaded database: %w", err)
	}

	// 3.2. Read Remote Mirror to get Timestamp (and other info)
	var remoteTimestamp int64 = 0
	var remoteUploader = "unknown"
	var remoteHost = "unknown"

	input, err := os.ReadFile(mirrorMetadataPath)
	if err == nil {
		var mirrorMeta model.Metadata
		if err := json.Unmarshal(input, &mirrorMeta); err == nil {
			remoteTimestamp = mirrorMeta.Timestamp
			remoteUploader = mirrorMeta.Uploader
			remoteHost = mirrorMeta.Hostname
		}
	} else {
		LogInfo("DownloadDatabase: Warning: Remote mirror missing for %s. Attempting to fetch...", dbName)
		// Try to fetch specific metadata file
		remoteMetaPath := model.AppConfig.VersionDir + metadataFilename
		// Copy single file
		if err := exec.CommandContext(ctx, "rclone", "copyto", remoteMetaPath, mirrorMetadataPath).Run(); err == nil {
			// Read again
			if input, err = os.ReadFile(mirrorMetadataPath); err == nil {
				var mirrorMeta model.Metadata
				if err := json.Unmarshal(input, &mirrorMeta); err == nil {
					remoteTimestamp = mirrorMeta.Timestamp
					remoteUploader = mirrorMeta.Uploader
					remoteHost = mirrorMeta.Hostname
				}
			}
		} else {
			LogError("DownloadDatabase: Failed to fetch remote metadata for %s: %v. Cannot anchor securely.", dbName, err)
			return fmt.Errorf("failed to fetch remote metadata for %s: %w", dbName, err)
		}
	}

	// 3.3. Construct Anchor Metadata
	anchorMeta := model.Metadata{
		FileID:    fileID,
		Hash:      localHash,
		Timestamp: remoteTimestamp,
		Uploader:  remoteUploader, // Preserving context
		Hostname:  remoteHost,     // Preserving context
		Status:    "success",
		// Events:    nil/empty as per instruction "no download of this file" implying simple structure
	}

	// 3.4. Save to LocalAnchorDir
	if err := UpdateLocalVersion(dbName, anchorMeta); err != nil {
		LogError("DownloadDatabase: Failed to update local anchor for %s: %v", dbName, err)
		return fmt.Errorf("failed to update local anchor for %s: %w", dbName, err)
	} else {
		LogInfo("DownloadDatabase: Successfully anchored %s (Hash: %s, Ts: %d)", dbName, localHash, remoteTimestamp)
		// Update hash cache on disk as we just calculated it and it is fresh
		if err := SaveHashCache(); err != nil {
			LogInfo("DownloadDatabase: Warning: Failed to save hash cache: %v", err)
		}
	}

	return nil
}
