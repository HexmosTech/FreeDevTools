package core

import (
	"context"
	"encoding/json"
	"fmt"
	"os"
	"os/exec"
	"path/filepath"
	"runtime"
	"strings"
	"time"

	"b2m/model"
)

// GenerateLocalMetadata generates metadata for a local database file
func GenerateLocalMetadata(dbName string, uploadDuration float64, status string) (*model.Metadata, error) {
	localPath := filepath.Join(model.AppConfig.LocalDBDir, dbName)

	// Calculate hash
	hash, err := CalculateHash(localPath, nil)
	if err != nil {
		LogError("GenerateLocalMetadata: CalculateHash failed for %s: %v", dbName, err)
		return nil, fmt.Errorf("failed to calculate hash: %w", err)
	}

	// Get file info
	info, err := os.Stat(localPath)
	if err != nil {
		LogError("GenerateLocalMetadata: os.Stat failed for %s: %v", localPath, err)
		return nil, fmt.Errorf("failed to stat file: %w", err)
	}

	timestamp := info.ModTime().Unix()
	datetime := info.ModTime().UTC().Format("2006-01-02 15:04:05 UTC")

	// Get file ID (db name without .db extension)
	fileID := strings.TrimSuffix(dbName, ".db")

	meta := &model.Metadata{
		FileID:            fileID,
		Hash:              hash,
		Timestamp:         timestamp,
		SizeBytes:         info.Size(),
		Uploader:          model.AppConfig.CurrentUser,
		Hostname:          model.AppConfig.Hostname,
		Platform:          runtime.GOOS,
		ToolVersion:       model.AppConfig.ToolVersion,
		UploadDurationSec: uploadDuration,
		Datetime:          datetime,
		Status:            status,
		Events:            []model.MetaEvent{},
	}

	LogInfo("Generated metadata for %s (Hash: %s)", dbName, hash)
	return meta, nil
}

// DownloadAndLoadMetadata syncs metadata from remote to local cache and loads it
func DownloadAndLoadMetadata(ctx context.Context) (map[string]*model.Metadata, error) {
	LogInfo("Downloading and loading metadata...")
	// 1. Ensure local version dir exists
	if err := os.MkdirAll(model.AppConfig.LocalVersionDir, 0755); err != nil {
		LogError("DownloadAndLoadMetadata: Failed to create local version dir: %v", err)
		return nil, fmt.Errorf("failed to create local version dir: %w", err)
	}

	// 2. Sync remote metadata to local
	LogInfo("Syncing metadata from %s to %s", model.AppConfig.VersionDir, model.AppConfig.LocalVersionDir)

	// Use RcloneSync helper with timeout
	// 5 minute timeout for sync operations should be sufficient for metadata
	syncCtx, cancel := context.WithTimeout(ctx, 5*time.Minute)
	defer cancel()

	if err := RcloneSync(syncCtx, model.AppConfig.VersionDir, model.AppConfig.LocalVersionDir); err != nil {
		// Log and fail as sync is critical for accurate status
		LogError("DownloadAndLoadMetadata: RcloneSync failed: %v", err)
		return nil, fmt.Errorf("failed to sync metadata: %w", err)
	}

	// 3. Read and parse metadata files sequentially
	result := make(map[string]*model.Metadata)

	err := filepath.Walk(model.AppConfig.LocalVersionDir, func(path string, info os.FileInfo, err error) error {
		if err != nil {
			return err
		}
		if info.IsDir() {
			return nil
		}
		if !strings.HasSuffix(info.Name(), ".metadata.json") {
			return nil
		}

		// Extract DB name
		dbName := strings.TrimSuffix(info.Name(), ".metadata.json") + ".db"

		// Read file
		content, err := os.ReadFile(path)
		if err != nil {
			LogError("DownloadAndLoadMetadata: Failed to read file %s: %v", path, err)
			return nil // Skip unreadable files
		}

		var meta model.Metadata
		if err := json.Unmarshal(content, &meta); err != nil {
			LogError("DownloadAndLoadMetadata: Failed to unmarshal JSON from %s: %v", path, err)
			return nil // Skip invalid JSON
		}

		result[dbName] = &meta
		return nil
	})

	if err != nil {
		LogError("DownloadAndLoadMetadata: filepath.Walk failed: %v", err)
		return nil, fmt.Errorf("failed to walk metadata dir: %w", err)
	}

	LogInfo("Loaded metadata for %d databases", len(result))
	return result, nil
}

// FetchSingleRemoteMetadata downloads and parses the metadata for a specific DB from the remote version dir
func FetchSingleRemoteMetadata(ctx context.Context, dbName string) (*model.Metadata, error) {
	// Get file ID (db name without .db extension). Use simple string trimming;
	// if dbName doesn't end in .db, fileID will equal dbName.
	fileID := strings.TrimSuffix(dbName, ".db")
	metadataFilename := fileID + ".metadata.json"

	// Paths
	remotePath := filepath.Join(model.AppConfig.VersionDir, metadataFilename)
	localDir := model.AppConfig.LocalVersionDir // Destination is the directory
	localFile := filepath.Join(localDir, metadataFilename)

	// Ensure local dir exists
	if err := os.MkdirAll(localDir, 0755); err != nil {
		return nil, fmt.Errorf("failed to create local version dir: %w", err)
	}

	// Use RcloneCopy (it takes a file source and a directory destination usually, but let's check RcloneCopy impl)
	// RcloneCopy signature: func RcloneCopy(ctx context.Context, src, dst, description string, quiet bool, onProgress func(model.RcloneProgress)) error
	// If src is a file, dst can be a directory or a file? rclone copy usually expects dest to be a directory if source is a file?
	// Actually rclone copy src dest. If dest is existing dir, it puts it there.
	// Our RcloneCopy wraps `rclone copy`.

	// To be safe and specific, we can use `copyto` via direct exec or trust `RcloneCopy` if we pass the full remote path.
	// RcloneCopy uses `rclone copy`.
	// "Copy the source to the destination. Doesn't transfer unchanged files."

	// Let's use RcloneCopy with quiet=true.
	if err := RcloneCopy(ctx, "copy", remotePath, localDir, "Fetching metadata", true, nil); err != nil {
		return nil, fmt.Errorf("failed to fetch remote metadata: %w", err)
	}

	// Read the file
	data, err := os.ReadFile(localFile)
	if err != nil {
		if os.IsNotExist(err) {
			return nil, nil // Metadata doesn't exist remotely yet (New DB)
		}
		return nil, fmt.Errorf("failed to read fetched metadata: %w", err)
	}

	var meta model.Metadata
	if err := json.Unmarshal(data, &meta); err != nil {
		return nil, fmt.Errorf("failed to unmarshal metadata: %w", err)
	}

	return &meta, nil
}

// UploadMetadata uploads the metadata file for a database
func UploadMetadata(ctx context.Context, dbName string, meta *model.Metadata) error {
	LogInfo("Uploading metadata for %s", dbName)
	// Marshal metadata to JSON
	data, err := json.MarshalIndent(meta, "", "  ")
	if err != nil {
		LogError("UploadMetadata: Failed to marshal metadata for %s: %v", dbName, err)
		return fmt.Errorf("failed to marshal metadata: %w", err)
	}

	// Ensure local version dir exists
	if err := os.MkdirAll(model.AppConfig.LocalVersionDir, 0755); err != nil {
		LogError("UploadMetadata: Failed to create local version dir: %v", err)
		return fmt.Errorf("failed to create local version dir: %w", err)
	}

	// Create local file path
	fileID := strings.TrimSuffix(dbName, ".db")
	metadataFilename := fileID + ".metadata.json"
	localFile := filepath.Join(model.AppConfig.LocalVersionDir, metadataFilename)

	if err := os.WriteFile(localFile, data, 0644); err != nil {
		LogError("UploadMetadata: Failed to write local file %s: %v", localFile, err)
		return fmt.Errorf("failed to write local metadata file: %w", err)
	}

	// Upload to B2
	cmd := exec.CommandContext(ctx, "rclone", "copyto", localFile, model.AppConfig.VersionDir+metadataFilename)
	if err := cmd.Run(); err != nil {
		LogError("UploadMetadata: rclone copyto failed for %s: %v", dbName, err)
		return fmt.Errorf("failed to upload metadata: %w", err)
	}

	LogInfo("Metadata uploaded successfully for %s", dbName)
	return nil
}

// AppendEventToMetadata appends a new event to existing metadata or creates new metadata
func AppendEventToMetadata(ctx context.Context, dbName string, newMeta *model.Metadata) (*model.Metadata, error) {
	// Fetch existing metadata
	remoteMetas, err := DownloadAndLoadMetadata(ctx)
	if err != nil {
		LogError("AppendEventToMetadata: Failed to load metadata: %v", err)
		return nil, err
	}

	existingMeta, exists := remoteMetas[dbName]

	if !exists {
		// First upload - create event with sequence 1
		newMeta.Events = []model.MetaEvent{
			{
				SequenceID:        1,
				Datetime:          newMeta.Datetime,
				Timestamp:         newMeta.Timestamp,
				Hash:              newMeta.Hash,
				SizeBytes:         newMeta.SizeBytes,
				Uploader:          newMeta.Uploader,
				Hostname:          newMeta.Hostname,
				Platform:          newMeta.Platform,
				ToolVersion:       newMeta.ToolVersion,
				UploadDurationSec: newMeta.UploadDurationSec,
				Status:            newMeta.Status,
			},
		}
		return newMeta, nil
	}

	// Append new event
	nextSeq := len(existingMeta.Events) + 1
	newEvent := model.MetaEvent{
		SequenceID:        nextSeq,
		Datetime:          newMeta.Datetime,
		Timestamp:         newMeta.Timestamp,
		Hash:              newMeta.Hash,
		SizeBytes:         newMeta.SizeBytes,
		Uploader:          newMeta.Uploader,
		Hostname:          newMeta.Hostname,
		Platform:          newMeta.Platform,
		ToolVersion:       newMeta.ToolVersion,
		UploadDurationSec: newMeta.UploadDurationSec,
		Status:            newMeta.Status,
	}

	// Update metadata with latest info and append event
	newMeta.Events = append(existingMeta.Events, newEvent)

	return newMeta, nil
}

func HandleBatchMetadataGeneration() {
	LogInfo("Starting batch metadata generation")
	fmt.Println("🔍 Scanning local databases for metadata generation...")
	LogInfo("🔍 Scanning local databases for metadata generation...")

	local, err := getLocalDBs()
	if err != nil {
		fmt.Printf("❌ Failed to list local databases: %v\n", err)
		LogError("BatchMetadata: Failed to list local databases: %v", err)
		return
	}

	if len(local) == 0 {
		fmt.Println("⚠️  No local databases found.")
		LogInfo("BatchMetadata: No local databases found")
		return
	}

	fmt.Printf("Found %d local databases. Starting generation...\n", len(local))
	LogInfo("Found %d local databases. Starting generation...", len(local))

	maxLen := 0
	for _, name := range local {
		if len(name) > maxLen {
			maxLen = len(name)
		}
	}

	successCount := 0
	ctx := context.Background()

	for _, dbName := range local {
		fmt.Printf("Processing %s...", dbName)
		LogInfo("Processing %s...", dbName)

		// 1. Generate fresh metadata from local file
		newMeta, err := GenerateLocalMetadata(dbName, 0, "success")
		if err != nil {
			fmt.Printf("❌ Failed to generate: %v\n", err)
			LogError("BatchMetadata: Failed to generate metadata for %s: %v", dbName, err)
			continue
		}

		// 2. Fetch remote metadata to preserve history (Events)
		remoteMeta, err := FetchSingleRemoteMetadata(ctx, dbName)
		if err != nil {
			LogInfo("BatchMetadata: No valid remote metadata found for %s (or error: %v), treating as new/fresh.", dbName, err)
		}

		if remoteMeta != nil {
			LogInfo("BatchMetadata: Found remote metadata for %s, preserving %d events.", dbName, len(remoteMeta.Events))
			newMeta.Events = remoteMeta.Events
		}

		// 3. Save to local version dir (Staging for sync)
		if err := SaveToLocalVersionDir(dbName, newMeta); err != nil {
			fmt.Printf("❌ Failed to save local: %v\n", err)
			LogError("BatchMetadata: Failed to save to local version dir for %s: %v", dbName, err)
			continue
		}

		// 4. Update local anchor
		if err := UpdateLocalVersion(dbName, *newMeta); err != nil {
			LogError("BatchMetadata: Failed to update local anchor for %s: %v", dbName, err)
		} else {
			LogInfo("BatchMetadata: Local anchor updated for %s", dbName)
		}

		fmt.Println("✅ Done")
		LogInfo("✅ Done for %s", dbName)
		successCount++
	}

	// 5. Perform Batch Sync (Local Version Dir -> Remote Version Dir)
	fmt.Println("🔄 Syncing metadata to remote...")
	LogInfo("BatchMetadata: Syncing %s to %s", model.AppConfig.LocalVersionDir, model.AppConfig.VersionDir)

	if err := RcloneSync(ctx, model.AppConfig.LocalVersionDir, model.AppConfig.VersionDir); err != nil {
		fmt.Printf("❌ Batch sync failed: %v\n", err)
		LogError("BatchMetadata: RcloneSync failed: %v", err)
	} else {
		fmt.Println("✅ Batch sync completed successfully.")
		LogInfo("BatchMetadata: Batch sync completed successfully")
	}

	fmt.Printf("\n✨ Completed! Successfully generated and uploaded metadata for %d/%d databases.\n", successCount, len(local))
	LogInfo("Batch metadata generation completed. Success: %d", successCount)
}

// SaveToLocalVersionDir writes the metadata file to the local version directory (.b2m/version)
func SaveToLocalVersionDir(dbName string, meta *model.Metadata) error {
	// Ensure local version dir exists
	if err := os.MkdirAll(model.AppConfig.LocalVersionDir, 0755); err != nil {
		return fmt.Errorf("failed to create local version dir: %w", err)
	}

	data, err := json.MarshalIndent(meta, "", "  ")
	if err != nil {
		return fmt.Errorf("failed to marshal metadata: %w", err)
	}

	fileID := strings.TrimSuffix(dbName, ".db")
	metadataFilename := fileID + ".metadata.json"
	localFile := filepath.Join(model.AppConfig.LocalVersionDir, metadataFilename)

	if err := os.WriteFile(localFile, data, 0644); err != nil {
		return fmt.Errorf("failed to write local metadata file: %w", err)
	}
	return nil
}

// UpdateLocalVersion writes the metadata to db/all_dbs/local-version/<dbname>.metadata.json
// UpdateLocalVersion writes the metadata to db/all_dbs/local-version/<dbname>.metadata.json
func UpdateLocalVersion(dbName string, meta model.Metadata) error {
	// Ensure directory exists
	if err := os.MkdirAll(model.AppConfig.LocalAnchorDir, 0755); err != nil {
		return fmt.Errorf("failed to create local version directory: %w", err)
	}

	// 1. Define Path: db/all_dbs/local-version/ + fileID + .metadata.json
	fileID := meta.FileID
	if fileID == "" {
		// Fallback if FileID is missing (should stick to convention of stripping .db)
		fileID = filepath.Base(dbName)
		if len(fileID) > 3 && fileID[len(fileID)-3:] == ".db" {
			fileID = fileID[:len(fileID)-3]
		}
	}

	filename := fileID + ".metadata.json"
	path := filepath.Join(model.AppConfig.LocalAnchorDir, filename)

	// User Requirement: Local version files must NOT contain events.
	// We explicitly strip them here to enforce this globally.
	meta.Events = nil

	// 2. Marshal 'meta' struct to Indented JSON
	data, err := json.MarshalIndent(meta, "", "  ")
	if err != nil {
		return fmt.Errorf("failed to marshal metadata: %w", err)
	}

	// 3. os.WriteFile(path, data, 0644)
	if err := os.WriteFile(path, data, 0644); err != nil {
		return fmt.Errorf("failed to write local version file: %w", err)
	}

	return nil
}

// GetLocalVersion reads the metadata from the local-version directory
func GetLocalVersion(dbName string) (*model.Metadata, error) {
	// Deduce filename from dbName
	baseName := filepath.Base(dbName)
	if len(baseName) > 3 && baseName[len(baseName)-3:] == ".db" {
		baseName = baseName[:len(baseName)-3]
	}
	filename := baseName + ".metadata.json"
	path := filepath.Join(model.AppConfig.LocalAnchorDir, filename)

	// 1. Read file
	data, err := os.ReadFile(path)
	if err != nil {
		if os.IsNotExist(err) {
			return nil, nil // Not found is strictly not an error here, just absence
		}
		return nil, err
	}

	// 2. Unmarshal
	var meta model.Metadata
	if err := json.Unmarshal(data, &meta); err != nil {
		return nil, fmt.Errorf("failed to unmarshal metadata: %w", err)
	}

	return &meta, nil
}

// CleanupLocalMetadata removes the local .b2m directory to ensure a fresh state
func CleanupLocalMetadata() error {
	b2mDir := model.AppConfig.LocalB2MDir
	LogInfo("Removing .b2m directory: %s", b2mDir)
	if err := os.RemoveAll(b2mDir); err != nil {
		LogError("CleanupLocalMetadata: Failed to remove .b2m directory: %v", err)
		return fmt.Errorf("failed to remove .b2m directory: %w", err)
	}

	// Also clear the hash cache to force re-calculation
	hashCachePath := filepath.Join(model.AppConfig.LocalAnchorDir, "hash.json")
	if err := os.Remove(hashCachePath); err != nil && !os.IsNotExist(err) {
		LogInfo("CleanupLocalMetadata: Failed to remove hash cache (non-critical): %v", err)
	} else {
		LogInfo("CleanupLocalMetadata: Removed hash cache %s", hashCachePath)
	}

	// Important: Clear in-memory cache too!
	ClearHashCache()

	return nil
}
