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

	"b2m/config"
	"b2m/model"
)

// DownloadDatabase downloads a single database from remote to local (overwriting).
// This function is triggered when the user presses 'd' or selects "Download" in the UI.
//
// Workflow Overview:
// 1. Lock Check: Verify that no one else is currently uploading this database.
// 2. Download: Execute `rclone copy` to pull the file from B2.
// 3. Anchor: Construct a local "Verified Anchor" (LocalVersion) to mark this state as synced.
func DownloadDatabase(ctx context.Context, dbName string, onProgress func(model.RcloneProgress)) error {
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

	if err := os.MkdirAll(config.AppConfig.LocalDBDir, 0755); err != nil {
		LogError("Failed to create local directory: %v", err)
		return fmt.Errorf("failed to create local directory: %w", err)
	}

	remotePath := path.Join(config.AppConfig.RootBucket, dbName)
	// Use directory as destination for 'copy'
	localDir := config.AppConfig.LocalDBDir

	// Changed from copyto to copy for safety/data loss prevention
	rcloneArgs := []string{"copy",
		remotePath,
		localDir,
		"--checksum",
		"--retries", "20",
		"--low-level-retries", "30",
		"--retries-sleep", "10s",
	}

	if onProgress != nil {
		// Removed --verbose to avoid polluting JSON output
		// User reported stats missing without verbose. restoring -v.
		rcloneArgs = append(rcloneArgs, "-v", "--use-json-log", "--stats", "0.5s")
	} else {
		rcloneArgs = append(rcloneArgs, "--progress")
	}

	cmdSync := exec.CommandContext(ctx, "rclone", rcloneArgs...)

	// -------------------------------------------------------------------------
	// PHASE 2: EXECUTE DOWNLOAD
	// Perform the actual network transfer using `rclone copy`.
	// -------------------------------------------------------------------------
	if onProgress != nil {
		stderr, err := cmdSync.StderrPipe()
		if err != nil {
			LogError("Failed to get stderr pipe: %v", err)
			return fmt.Errorf("failed to get stderr pipe: %w", err)
		}
		if err := cmdSync.Start(); err != nil {
			LogError("Download start failed: %v", err)
			return fmt.Errorf("download start failed: %w", err)
		}
		go ParseRcloneOutput(stderr, onProgress)

		if err := cmdSync.Wait(); err != nil {
			if ctx.Err() != nil {
				return fmt.Errorf("download cancelled")
			}
			LogError("Download of %s failed: %v", dbName, err)
			return fmt.Errorf("download of %s failed: %w", dbName, err)
		}
	} else {
		cmdSync.Stdout = os.Stdout
		cmdSync.Stderr = os.Stderr
		if err := cmdSync.Run(); err != nil {
			if ctx.Err() != nil {
				return fmt.Errorf("download cancelled")
			}
			LogError("DownloadDatabase rclone copy failed for %s: %v", dbName, err)
			return fmt.Errorf("download of %s failed: %w", dbName, err)
		}
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
	mirrorMetadataPath := filepath.Join(config.AppConfig.LocalVersionDir, metadataFilename)

	// 3.1. Calculate Local Hash of the newly downloaded file
	localDBPath := filepath.Join(config.AppConfig.LocalDBDir, dbName)
	localHash, err := CalculateSHA256(localDBPath)
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
		remoteMetaPath := config.AppConfig.VersionDir + metadataFilename
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
	}

	return nil
}

// DownloadAllDatabases syncs all databases from remote to local
func DownloadAllDatabases(onProgress func(model.RcloneProgress)) error {
	ctx := GetContext()

	LogInfo("Starting batch download of all databases")

	if err := os.MkdirAll(config.AppConfig.LocalDBDir, 0755); err != nil {
		LogError("Failed to create local directory in DownloadAllDatabases: %v", err)
		return fmt.Errorf("failed to create local directory: %w", err)
	}

	rcloneArgs := []string{"copy",
		config.AppConfig.RootBucket,
		config.AppConfig.LocalDBDir,
		"--checksum",
		"--retries", "20",
		"--low-level-retries", "30",
		"--retries-sleep", "10s",
	}

	if onProgress != nil {
		rcloneArgs = append(rcloneArgs, "--use-json-log", "--stats", "0.5s")
	} else {
		rcloneArgs = append(rcloneArgs, "--progress")
	}

	cmdSync := exec.CommandContext(ctx, "rclone", rcloneArgs...)

	if onProgress != nil {
		stderr, err := cmdSync.StderrPipe()
		if err != nil {
			LogError("Failed to get stderr pipe: %v", err)
			return fmt.Errorf("failed to get stderr pipe: %w", err)
		}
		if err := cmdSync.Start(); err != nil {
			LogError("Batch download start failed: %v", err)
			return fmt.Errorf("batch download start failed: %w", err)
		}
		go ParseRcloneOutput(stderr, onProgress)

		if err := cmdSync.Wait(); err != nil {
			if ctx.Err() != nil {
				LogInfo("DownloadAllDatabases cancelled")
				return fmt.Errorf("batch download cancelled")
			}
			LogError("Batch download failed: %v", err)
			return fmt.Errorf("batch download failed: %w", err)
		}
	} else {
		cmdSync.Stdout = os.Stdout
		cmdSync.Stderr = os.Stderr
		if err := cmdSync.Run(); err != nil {
			if ctx.Err() != nil {
				LogInfo("DownloadAllDatabases cancelled")
				return fmt.Errorf("batch download cancelled")
			}
			LogError("DownloadAllDatabases batch rclone copy failed: %v", err)
			return fmt.Errorf("batch download failed: %w", err)
		}
	}

	// 1. Sync Remote Metadata -> Local Mirror (version/)
	LogInfo("DownloadAllDatabases: Updating metadata mirror...")

	// 1. Remote:VersionDir -> Local:VersionDir (Mirror)
	cmdMirror := exec.CommandContext(ctx, "rclone", "sync", config.AppConfig.VersionDir, config.AppConfig.LocalVersionDir)
	if err := cmdMirror.Run(); err != nil {
		LogError("DownloadAllDatabases: Failed to update metadata mirror: %v", err)
	} else {
		// 2. Iterate over all downloaded DBs and construct Verified Anchors
		// We use the same strict logic as DownloadDatabase
		LogInfo("DownloadAllDatabases: Constructing verified anchors...")

		// Get list of local DBs we just downloaded
		entries, err := os.ReadDir(config.AppConfig.LocalDBDir)
		if err == nil {
			for _, entry := range entries {
				if !entry.IsDir() && strings.HasSuffix(entry.Name(), ".db") {
					dbName := entry.Name()

					// Use shared helper
					if err := ConstructVerifiedAnchor(dbName); err != nil {
						LogError("DownloadAllDatabases: Failed to anchor %s: %v", dbName, err)
					}
				}
			}
		} else {
			LogError("DownloadAllDatabases: Failed to read local db dir: %v", err)
		}
	}

	return nil
}
