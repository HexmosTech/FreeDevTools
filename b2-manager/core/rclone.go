package core

import (
	"context"
	"fmt"
	"os"
	"os/exec"
	"path/filepath"
	"strings"

	"b2m/model"
)

func CheckRclone() error {
	_, err := exec.LookPath("rclone")
	if err != nil {
		LogError("checkRclone failed: %v", err)
	}
	return err
}

func BootstrapSystem(ctx context.Context) error {
	if err := checkDBDiscoveryAndSync(ctx); err != nil {
		LogError("bootstrapSystem failed: %v", err)
		return fmt.Errorf("db discovery: %w", err)
	}
	return nil
}

func checkDBDiscoveryAndSync(ctx context.Context) error {
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

	remoteDBs, _, err := LsfRclone(ctx)
	if err != nil {
		LogError("LsfRclone failed: %v", err)
		return nil
	}

	if len(remoteDBs) == 0 {
		// fmt.Println("No remote databases found either. Starting fresh.")
		LogInfo("No remote databases found either. Starting fresh.")
		return nil
	}

	LogInfo("Remote databases detected (%d): %v", len(remoteDBs), remoteDBs)
	for _, db := range remoteDBs {
		// fmt.Printf("- %s\n", db)
		LogInfo("- %s", db)
	}
	return nil
}
func checkFileChanged(ctx context.Context, dbName string) (bool, error) {
	localPath := filepath.Join(model.AppConfig.Frontend.LocalDB, dbName)
	remotePath := model.AppConfig.RootBucket + dbName

	cmd := exec.CommandContext(ctx, "rclone", "check", localPath, remotePath, "--one-way")
	LogInfo("checkFileChanged [%s]: Running command: %v", dbName, cmd.Args)
	if err := cmd.Run(); err != nil {
		if exitError, ok := err.(*exec.ExitError); ok {
			if exitError.ExitCode() == model.ExitCodeFileChanged {
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
		"--retries", "10",
		"--low-level-retries", "10",
		"--retries-sleep", "5s",
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
		out, err := cmd.CombinedOutput()
		if err != nil {
			if ctx.Err() != nil {
				return fmt.Errorf("cancelled")
			}
			LogError("RcloneCopy (quiet) failed: %v\nOutput: %s", err, string(out))
			return fmt.Errorf("rclone %s failed: %w", cmdName, err)
		}
	}
	return nil
}

// RcloneDeleteFile deletes a single file using rclone deletefile
func RcloneDeleteFile(ctx context.Context, filePath string) error {
	delCtx, cancel := context.WithTimeout(ctx, model.TimeoutRcloneDelete)
	defer cancel()

	cmd := exec.CommandContext(delCtx, "rclone", "deletefile", filePath)
	if err := cmd.Run(); err != nil {
		if delCtx.Err() == context.DeadlineExceeded {
			return fmt.Errorf("deletefile timed out for %s", filePath)
		}
		LogError("RcloneDeleteFile: Failed to delete %s: %v", filePath, err)
		return err
	}
	return nil
}

// LsfRclone lists all files recursively from RootBucket to get DBs and Locks in one go
func LsfRclone(ctx context.Context) ([]string, map[string]model.LockEntry, error) {
	// recursive list of root bucket with timeout
	lsfCtx, cancel := context.WithTimeout(ctx, model.TimeoutLsfRclone)
	defer cancel()

	cmd := exec.CommandContext(lsfCtx, "rclone", "lsf", "-R", model.AppConfig.RootBucket)
	out, err := cmd.Output()
	if err != nil {
		if lsfCtx.Err() == context.DeadlineExceeded {
			return nil, nil, fmt.Errorf("listing remote files timed out")
		}
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
	fetchCtx, cancel := context.WithTimeout(ctx, model.TimeoutFetchLocks)
	defer cancel()

	cmd := exec.CommandContext(fetchCtx, "rclone", "lsf", model.AppConfig.LockDir)
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
func RcloneSync(ctx context.Context, src, dst string) error {
	cmd := exec.CommandContext(ctx, "rclone", "sync", src, dst)
	if err := cmd.Run(); err != nil {
		LogError("RcloneSync failed (src=%s, dst=%s): %v", src, dst, err)
		return fmt.Errorf("rclone sync failed: %w", err)
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
