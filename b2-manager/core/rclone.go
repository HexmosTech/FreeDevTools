package core

import (
	"context"
	"fmt"
	"os"
	"os/exec"
	"path/filepath"
	"strings"
	"time"

	"b2m/config"
	"b2m/model"
)

func CheckRclone() error {
	_, err := exec.LookPath("rclone")
	if err != nil {
		LogError("checkRclone failed: %v", err)
	}
	return err
}

func BootstrapSystem() error {
	if err := checkDBDiscoveryAndSync(); err != nil {
		LogError("bootstrapSystem failed: %v", err)
		return fmt.Errorf("db discovery: %w", err)
	}
	return nil
}

func checkDBDiscoveryAndSync() error {
	localDBs, err := getLocalDBs()
	if err != nil {
		LogError("getLocalDBs failed: %v", err)
		return err
	}

	if len(localDBs) > 0 {
		return nil
	}

	// fmt.Println("No local databases found.")
	LogInfo("No local databases found.")
	LogInfo("No local databases found.")

	remoteDBs, err := getRemoteDBs()
	if err != nil {
		LogError("getRemoteDBs failed: %v", err)
		return nil
	}

	if len(remoteDBs) == 0 {
		// fmt.Println("No remote databases found either. Starting fresh.")
		LogInfo("No remote databases found either. Starting fresh.")
		LogInfo("No remote databases found either. Starting fresh.")
		return nil
	}

	// fmt.Printf("Remote databases detected (%d):\n", len(remoteDBs))
	LogInfo("Remote databases detected (%d):", len(remoteDBs))
	LogInfo("Remote databases detected (%d): %v", len(remoteDBs), remoteDBs)
	for _, db := range remoteDBs {
		// fmt.Printf("- %s\n", db)
		LogInfo("- %s", db)
	}
	return nil
}

func getRemoteDBs() ([]string, error) {
	cmd := exec.CommandContext(GetContext(), "rclone", "lsf", config.AppConfig.RootBucket, "--files-only", "--include", "*.db")
	LogInfo("getRemoteDBs: Running command: %v", cmd.Args)
	out, err := cmd.Output()
	if err != nil {
		LogError("rclone lsf failed in getRemoteDBs: %v", err)
		return nil, err
	}
	LogInfo("getRemoteDBs: Output (len %d): %s", len(out), strings.TrimSpace(string(out)))

	lines := strings.Split(string(out), "\n")
	var names []string
	for _, line := range lines {
		trimmed := strings.TrimSpace(line)
		if trimmed != "" {
			names = append(names, trimmed)
		}
	}
	return names, nil
}
func checkFileChanged(dbName string) (bool, error) {
	localPath := filepath.Join(config.AppConfig.LocalDBDir, dbName)
	remotePath := config.AppConfig.RootBucket + dbName

	cmd := exec.CommandContext(GetContext(), "rclone", "check", localPath, remotePath, "--one-way")
	LogInfo("checkFileChanged [%s]: Running command: %v", dbName, cmd.Args)
	if err := cmd.Run(); err != nil {
		if exitError, ok := err.(*exec.ExitError); ok {
			if exitError.ExitCode() == 1 {
				return true, nil // Changed
			}
		}
		return false, err
	}
	return false, nil // No change
}

// UploadDatabase uploads a single database to remote
// Returns the uploaded metadata on success, or nil/error
func UploadDatabase(ctx context.Context, dbName string, quiet bool, onProgress func(model.RcloneProgress)) (*model.Metadata, error) {
	// Check for changes before uploading
	changed, err := checkFileChanged(dbName)
	if err != nil {
		if !quiet {
			// fmt.Printf("⚠️  Could not verify changes: %v. Proceeding with upload.\n", err)
			LogError("⚠️  Could not verify changes: %v. Proceeding with upload.", err)
		}
		LogError("Could not verify changes for %s: %v", dbName, err)
		changed = true // Fallback to upload
	}

	if !changed {
		if !quiet {
			// fmt.Println("No change found in this db skipping Upload")
			LogInfo("No change found in this db skipping Upload")
		}
		LogInfo("Skipping upload for %s (no changes)", dbName)
		return nil, nil
	}

	if !quiet && onProgress == nil {
		// fmt.Printf("⬆ Uploading %s to Backblaze B2...\n", dbName)
		LogInfo("⬆ Uploading %s to Backblaze B2...", dbName)
	}
	LogInfo("Uploading %s to Backblaze B2...", dbName)
	localPath := filepath.Join(config.AppConfig.LocalDBDir, dbName)

	startTime := time.Now()

	rcloneArgs := []string{"copy",
		localPath,
		config.AppConfig.RootBucket,
		"--checksum",
		"--retries", "20",
		"--low-level-retries", "30",
		"--retries-sleep", "10s",
	}

	if !quiet || onProgress != nil {
		rcloneArgs = append(rcloneArgs, "-v", "--use-json-log", "--stats", "0.5s")
	}

	cmd := exec.CommandContext(ctx, "rclone", rcloneArgs...)

	if !quiet || onProgress != nil {
		stderr, err := cmd.StderrPipe()
		if err != nil {
			LogError("Failed to get stderr pipe in UploadDatabase: %v", err)
			return nil, fmt.Errorf("failed to get stderr pipe: %w", err)
		}

		if err := cmd.Start(); err != nil {
			LogError("Upload start failed in UploadDatabase: %v", err)
			return nil, fmt.Errorf("upload start failed: %w", err)
		}

		info, err := os.Stat(localPath)
		var totalSize int64
		if err == nil {
			totalSize = info.Size()
		}

		if onProgress != nil {
			go ParseRcloneOutput(stderr, onProgress)
		} else {
			TrackProgress(stderr, totalSize, "Uploading "+dbName)
		}

		if err := cmd.Wait(); err != nil {
			if ctx.Err() != nil {
				return nil, fmt.Errorf("upload cancelled")
			}
			LogError("Upload failed in UploadDatabase (wait): %v", err)
			return nil, fmt.Errorf("upload failed: %w", err)
		}
	} else {
		if err := cmd.Run(); err != nil {
			if ctx.Err() != nil {
				return nil, fmt.Errorf("upload cancelled")
			}
			LogError("Upload failed in UploadDatabase (run): %v", err)
			return nil, fmt.Errorf("upload failed: %w", err)
		}
	}

	uploadDuration := time.Since(startTime).Seconds()

	if !quiet {
		// fmt.Println("📝 Generating metadata...")
		LogInfo("📝 Generating metadata...")
	}
	LogInfo("Generating metadata for %s", dbName)
	meta, err := GenerateLocalMetadata(dbName, uploadDuration, "success")
	if err != nil {
		if !quiet {
			// fmt.Printf("⚠️  Failed to generate metadata: %v\n", err)
			LogError("⚠️  Failed to generate metadata: %v", err)
		}
		LogError("Failed to generate metadata for %s: %v", dbName, err)
		return nil, err
	}

	meta, err = AppendEventToMetadata(dbName, meta)
	if err != nil {
		if !quiet {
			// fmt.Printf("⚠️  Failed to append event: %v\n", err)
			LogError("⚠️  Failed to append event: %v", err)
		}
		LogError("Failed to append event to metadata for %s: %v", dbName, err)
		return nil, err
	}

	if err := UploadMetadata(ctx, dbName, meta); err != nil {
		if !quiet {
			// fmt.Printf("⚠️  Failed to upload metadata: %v\n", err)
			LogError("⚠️  Failed to upload metadata: %v", err)
		}
		LogError("Failed to upload metadata for %s: %v", dbName, err)
		return nil, err
	} else if !quiet {
		// fmt.Println("✅ Metadata uploaded")
		LogInfo("✅ Metadata uploaded")
	}

	// USER REQUIREMENT: Use common logic for both upload and download to ensure verified anchor.
	// We just uploaded, so we are the source of truth.
	// UploadMetadata (above) already updated the VERSION directory (Mirror) via rclone copyto.
	// Now we construct the anchor from that Mirror + Local Hash to be consistent.
	if err := ConstructVerifiedAnchor(dbName); err != nil {
		LogError("UploadDatabase: Failed to construct verified anchor: %v", err)
		// Non-fatal for upload itself, but bad for subsequent status checks.
	} else {
		LogInfo("UploadDatabase: Verified anchor created locally.")
	}

	if !quiet {
		// fmt.Println("📢 Notifying Discord...")
		LogInfo("📢 Notifying Discord...")
		sendDiscord(fmt.Sprintf("✅ Database updated to B2: **%s**", dbName))
	} else {
		sendDiscord(fmt.Sprintf("✅ Database updated to B2: **%s**", dbName))
	}
	LogInfo("Notified Discord for %s", dbName)

	return meta, nil
}

// LockDatabase creates a .lock file
func LockDatabase(ctx context.Context, dbName, owner, host, intent string, force bool) error {
	locks, err := FetchLocks(ctx)
	if err != nil {
		LogError("fetchLocks failed in LockDatabase: %v", err)
		return err
	}
	if l, ok := locks[dbName]; ok {
		// If force is true, we ignore existing locks (we will overwrite)
		// If force is false, we check ownership
		if !force {
			if l.Owner != owner {
				LogError("Database %s already locked by %s", dbName, l.Owner)
				return fmt.Errorf("%w: already locked by %s", ErrDatabaseLocked, l.Owner)
			}
		}
	}

	filename := fmt.Sprintf("%s.%s.%s.lock", dbName, owner, host)

	// If forcing, we first clean up ALL existing locks for this DB to ensure we start fresh.
	if force {
		LogInfo("Force locking: Cleaning up old locks for %s", dbName)
		if err := UnlockDatabase(ctx, dbName, "", true); err != nil {
			LogInfo("Warning: Failed to cleanup old locks during force lock: %v", err)
		}
	}

	tmpFile := filepath.Join(os.TempDir(), filename)
	if err := os.WriteFile(tmpFile, []byte(intent), 0644); err != nil {
		LogError("Failed to write temp lock file: %v", err)
		return err
	}
	defer os.Remove(tmpFile)

	cmd := exec.CommandContext(ctx, "rclone", "copyto", tmpFile, config.AppConfig.LockDir+filename)
	if err := cmd.Run(); err != nil {
		if ctx.Err() != nil {
			return fmt.Errorf("lock cancelled")
		}
		LogError("Failed to upload lock file to B2: %v", err)
		return fmt.Errorf("failed to acquire lock: %w", err)
	}
	return nil
}

// UnlockDatabase removes the .lock file
func UnlockDatabase(ctx context.Context, dbName, owner string, force bool) error {
	// If force is true, we delete ALL lock files for this DB to ensure a clean slate.
	if force {
		// Use rclone delete with include pattern
		// Pattern: dbName.*.lock
		pattern := fmt.Sprintf("%s.*.lock", dbName)
		LogInfo("Force unlocking %s: deleting all files matching %s", dbName, pattern)

		cmd := exec.CommandContext(ctx, "rclone", "delete", config.AppConfig.LockDir, "--include", pattern)
		if err := cmd.Run(); err != nil {
			LogError("Failed to force delete lock files on B2: %v", err)
			return fmt.Errorf("failed to force delete lock files: %w", err)
		}
		return nil
	}

	// Normal graceful unlock
	locks, err := FetchLocks(ctx)
	if err != nil {
		LogError("fetchLocks failed in UnlockDatabase: %v", err)
		return err
	}

	entry, ok := locks[dbName]
	if !ok {
		return nil // Already unlocked
	}

	if entry.Owner != owner {
		LogError("Cannot unlock %s: owned by %s", dbName, entry.Owner)
		return fmt.Errorf("cannot unlock: owned by %s", entry.Owner)
	}

	filename := fmt.Sprintf("%s.%s.%s.%s", dbName, entry.Owner, entry.Hostname, entry.Type)

	// Safety check: ensure we are only deleting a .lock file
	if !strings.HasSuffix(filename, ".lock") {
		LogError("Safety check failed: attempted to delete non-lock file %s", filename)
		return fmt.Errorf("safety check failed: attempted to delete non-lock file %s", filename)
	}

	cmd := exec.CommandContext(ctx, "rclone", "deletefile", config.AppConfig.LockDir+filename)
	if err := cmd.Run(); err != nil {
		LogError("Failed to delete lock file on B2: %v", err)
		return fmt.Errorf("failed to delete lock file: %w", err)
	}
	return nil
}

// FetchLocks lists all files in LockDir and parses them
func FetchLocks(ctx context.Context) (map[string]model.LockEntry, error) {
	cmd := exec.CommandContext(ctx, "rclone", "lsf", config.AppConfig.LockDir)
	out, err := cmd.Output()
	if err != nil {
		return make(map[string]model.LockEntry), nil
	}

	locks := make(map[string]model.LockEntry)
	lines := strings.Split(string(out), "\n")
	for _, line := range lines {
		line = strings.TrimSpace(line)
		if line == "" {
			continue
		}

		parts := strings.Split(line, ".")
		if len(parts) < 4 {
			continue
		}

		lockType := parts[len(parts)-1] // reserve or lock
		hostname := parts[len(parts)-2]
		owner := parts[len(parts)-3]
		dbName := strings.Join(parts[:len(parts)-3], ".")

		// We only care about .lock files now
		if lockType != "lock" {
			continue
		}

		locks[dbName] = model.LockEntry{
			DBName:    dbName,
			Owner:     owner,
			Hostname:  hostname,
			Type:      lockType,
			ExpiresAt: time.Now().Add(24 * time.Hour),
		}
	}
	return locks, nil
}
