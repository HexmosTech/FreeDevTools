package core

import (
	"os"
	"os/exec"
	"path/filepath"
	"strings"

	"b2m/config"
)

// CheckRcloneConfig checks if rclone is configured.
// It tries to find the config file using `rclone config file`.
func CheckRcloneConfig() bool {
	// 1. Try running `rclone config file` to get the path
	cmd := exec.Command("rclone", "config", "file")
	output, err := cmd.Output()
	if err == nil {
		lines := strings.Split(string(output), "\n")
		// Output format is usually: "Configuration file is stored at:\n/path/to/rclone.conf"
		if len(lines) >= 2 {
			path := strings.TrimSpace(lines[1])
			if _, err := os.Stat(path); err == nil {
				return true
			}
		}
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
	matches, err := filepath.Glob(filepath.Join(config.AppConfig.LocalDBDir, "*.db"))
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
