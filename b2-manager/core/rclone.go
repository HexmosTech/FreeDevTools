package core

import (
	"context"
	"fmt"
	"os"
	"os/exec"
	"path/filepath"
	"strings"
	"time"

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

	remoteDBs, _, err := LsfRclone(context.Background())
	if err != nil {
		LogError("LsfRclone failed: %v", err)
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
func checkFileChanged(dbName string) (bool, error) {
	localPath := filepath.Join(model.AppConfig.LocalDBDir, dbName)
	remotePath := model.AppConfig.RootBucket + dbName

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

// RcloneCopy copies source to destination using rclone copy/copyto with options
func RcloneCopy(ctx context.Context, cmdName, src, dst, description string, quiet bool, onProgress func(model.RcloneProgress)) error {
	rcloneArgs := []string{cmdName,
		src,
		dst,
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
			LogError("RcloneCopy: Failed to get stderr pipe: %v", err)
			return fmt.Errorf("failed to get stderr pipe: %w", err)
		}

		if err := cmd.Start(); err != nil {
			LogError("RcloneCopy: Start failed: %v", err)
			return fmt.Errorf("rclone start failed: %w", err)
		}

		// Calculate total size if possible for default tracker
		var totalSize int64
		if info, err := os.Stat(src); err == nil && !info.IsDir() {
			totalSize = info.Size()
		}

		if onProgress != nil {
			go ParseRcloneOutput(stderr, onProgress)
		} else {
			// Default tracker
			desc := description
			if desc == "" {
				desc = "Copying..."
			}
			TrackProgress(stderr, totalSize, desc)
		}

		if err := cmd.Wait(); err != nil {
			if ctx.Err() != nil {
				return fmt.Errorf("cancelled")
			}
			LogError("RcloneCopy: Wait failed: %v", err)
			return fmt.Errorf("rclone copy failed: %w", err)
		}
	} else {
		if err := cmd.Run(); err != nil {
			if ctx.Err() != nil {
				return fmt.Errorf("cancelled")
			}
			LogError("RcloneCopy: Run failed: %v", err)
			return fmt.Errorf("rclone copy failed: %w", err)
		}
	}
	return nil
}

// UploadDatabase uploads a single database to remote
// Returns the uploaded metadata on success, or nil/error
func UploadDatabase(ctx context.Context, dbName string, quiet bool, onProgress func(model.RcloneProgress)) (*model.Metadata, error) {
	// Check for changes before uploading
	changed, err := checkFileChanged(dbName)
	if err != nil {
		if !quiet {
			LogError("⚠️  Could not verify changes: %v. Proceeding with upload.", err)
		}
		LogError("Could not verify changes for %s: %v", dbName, err)
		changed = true // Fallback to upload
	}

	if !changed {
		if !quiet {
			LogInfo("No change found in this db skipping Upload")
		}
		LogInfo("Skipping upload for %s (no changes)", dbName)
		return nil, nil
	}

	if !quiet && onProgress == nil {
		LogInfo("⬆ Uploading %s to Backblaze B2...", dbName)
	}
	LogInfo("Uploading %s to Backblaze B2...", dbName)
	localPath := filepath.Join(model.AppConfig.LocalDBDir, dbName)

	startTime := time.Now()

	// Use RcloneCopy with flat arguments
	description := "Uploading " + dbName
	if err := RcloneCopy(ctx, "copy", localPath, model.AppConfig.RootBucket, description, quiet, onProgress); err != nil {
		LogError("UploadDatabase: RcloneCopy failed: %v", err)
		return nil, err
	}

	uploadDuration := time.Since(startTime).Seconds()

	if !quiet {
		LogInfo("📝 Generating metadata...")
	}
	LogInfo("Generating metadata for %s", dbName)
	meta, err := GenerateLocalMetadata(dbName, uploadDuration, "success")
	if err != nil {
		if !quiet {
			LogError("⚠️  Failed to generate metadata: %v", err)
		}
		LogError("Failed to generate metadata for %s: %v", dbName, err)
		return nil, err
	}

	meta, err = AppendEventToMetadata(dbName, meta)
	if err != nil {
		if !quiet {
			LogError("⚠️  Failed to append event: %v", err)
		}
		LogError("Failed to append event to metadata for %s: %v", dbName, err)
		return nil, err
	}

	// Update hash cache on disk as GenerateLocalMetadata updated memory cache
	if err := SaveHashCache(); err != nil {
		LogInfo("UploadDatabase: Warning: Failed to save hash cache: %v", err)
	}

	if err := UploadMetadata(ctx, dbName, meta); err != nil {
		if !quiet {
			LogError("⚠️  Failed to upload metadata: %v", err)
		}
		LogError("Failed to upload metadata for %s: %v", dbName, err)
		return nil, err
	} else if !quiet {
		LogInfo("✅ Metadata uploaded")
	}

	if !quiet {
		LogInfo("📢 Notifying Discord...")
		sendDiscord(fmt.Sprintf("✅ Database updated to B2: **%s**", dbName))
	} else {
		sendDiscord(fmt.Sprintf("✅ Database updated to B2: **%s**", dbName))
	}
	LogInfo("Notified Discord for %s", dbName)

	return meta, nil
}

// RcloneDeleteFile deletes a single file using rclone deletefile
func RcloneDeleteFile(ctx context.Context, filePath string) error {
	cmd := exec.CommandContext(ctx, "rclone", "deletefile", filePath)
	if err := cmd.Run(); err != nil {
		LogError("RcloneDeleteFile: Failed to delete %s: %v", filePath, err)
		return err
	}
	return nil
}

// LsfRclone lists all files recursively from RootBucket to get DBs and Locks in one go
func LsfRclone(ctx context.Context) ([]string, map[string]model.LockEntry, error) {
	// recursive list of root bucket
	cmd := exec.CommandContext(ctx, "rclone", "lsf", "-R", model.AppConfig.RootBucket)
	out, err := cmd.Output()
	if err != nil {
		LogError("LsfRclone input failed: %v", err)
		return nil, nil, fmt.Errorf("failed to list remote files: %w", err)
	}

	remoteDBs := []string{}
	locks := make(map[string]model.LockEntry)

	lines := strings.Split(string(out), "\n")
	for _, line := range lines {
		line = strings.TrimSpace(line)
		if line == "" {
			continue
		}

		// 1. Check for DBs in root (no slashes)
		if strings.HasSuffix(line, ".db") && !strings.Contains(line, "/") {
			remoteDBs = append(remoteDBs, line)
			continue
		}

		// 2. Check for Locks in lock/ dir
		if strings.HasPrefix(line, "lock/") && strings.HasSuffix(line, ".lock") {
			// Extract filename from path "lock/filename"
			filename := strings.TrimPrefix(line, "lock/")

			// Parse lock filename: dbname.owner.hostname.type.lock
			// We can reuse logic from FetchLocks but adapted
			parts := strings.Split(filename, ".")
			if len(parts) < 4 {
				continue
			}

			lockType := parts[len(parts)-1] //lock

			// We only care about .lock files now
			if lockType != "lock" {
				continue
			}

			hostname := parts[len(parts)-2]
			owner := parts[len(parts)-3]
			dbName := strings.Join(parts[:len(parts)-3], ".")

			locks[dbName] = model.LockEntry{
				DBName:   dbName,
				Owner:    owner,
				Hostname: hostname,
				Type:     lockType,
			}
		}
	}

	return remoteDBs, locks, nil
}

// FetchLocks lists all files in LockDir and parses them
func FetchLocks(ctx context.Context) (map[string]model.LockEntry, error) {
	cmd := exec.CommandContext(ctx, "rclone", "lsf", model.AppConfig.LockDir)
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
			DBName:   dbName,
			Owner:    owner,
			Hostname: hostname,
			Type:     lockType,
		}
	}
	return locks, nil
}

// RcloneSync syncs source to destination using rclone sync
func RcloneSync(src, dst string) error {
	cmd := exec.CommandContext(GetContext(), "rclone", "sync", src, dst)
	if err := cmd.Run(); err != nil {
		LogError("RcloneSync failed (src=%s, dst=%s): %v", src, dst, err)
		return fmt.Errorf("rclone sync failed: %w", err)
	}
	return nil
}
