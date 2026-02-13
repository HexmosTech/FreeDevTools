package core

import (
	"b2m/model"
	"context"
	"fmt"
	"os"
	"os/exec"
	"path/filepath"
	"strings"
)

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
				return fmt.Errorf("%w: already locked by %s", model.ErrDatabaseLocked, l.Owner)
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

	// Use RcloneCopy to upload the lock file
	// We use "copyto" because we want to rename the temp file to the target lock filename
	// quiet=true because we don't need progress for a small lock file
	// onProgress=nil
	if err := RcloneCopy(ctx, "copyto", tmpFile, model.AppConfig.LockDir+filename, "Acquiring lock...", true, nil); err != nil {
		// If cancelled
		if ctx.Err() != nil {
			return fmt.Errorf("lock cancelled")
		}
		LogError("LockDatabase: RcloneCopy failed: %v", err)
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

		cmd := exec.CommandContext(ctx, "rclone", "delete", model.AppConfig.LockDir, "--include", pattern)
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

	// Use RcloneDeleteFile
	if err := RcloneDeleteFile(ctx, model.AppConfig.LockDir+filename); err != nil {
		LogError("UnlockDatabase: RcloneDeleteFile failed: %v", err)
		return fmt.Errorf("failed to delete lock file: %w", err)
	}
	return nil
}

// CheckRcloneConfig checks if rclone is configured.
// It tries to find the config file using `rclone config file`.
func CheckRcloneConfig() bool {
	// 1. Try running `rclone config dump` which requires a valid config
	// This is more robust than parsing the file path string
	cmd := exec.Command("rclone", "config", "dump")
	if err := cmd.Run(); err == nil {
		return true // Config exists and is valid/loadable
	}

	// 2. Fallback to standard locations if the command output parsing fails but rclone exists
	homeDir, _ := os.UserHomeDir()
	configPaths := []string{
		filepath.Join(homeDir, ".config", "rclone", "rclone.conf"),   // Linux/macOS standard
		filepath.Join(homeDir, ".rclone.conf"),                       // Linux/macOS old default
		filepath.Join(os.Getenv("APPDATA"), "rclone", "rclone.conf"), // Windows
	}

	for _, path := range configPaths {
		if _, err := os.Stat(path); err == nil {
			return true
		}
	}

	return false
}

// getLocalDBs lists all .db files in the local directory
func getLocalDBs() ([]string, error) {
	matches, err := filepath.Glob(filepath.Join(model.AppConfig.LocalDBDir, "*.db"))
	if err != nil {
		LogError("filepath.Glob failed in getLocalDBs: %v", err)
		return nil, err
	}
	var names []string
	for _, m := range matches {
		info, err := os.Stat(m)
		if err == nil && !info.IsDir() {
			names = append(names, filepath.Base(m))
		}
	}
	return names, nil
}
