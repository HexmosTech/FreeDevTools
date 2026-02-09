package config

import (
	"fmt"
	"os"
	"os/user"
	"path/filepath"
	"strings"

	"github.com/BurntSushi/toml"
)

// Config holds all application configuration
type Config struct {
	// Paths
	RootBucket      string
	LockDir         string
	VersionDir      string
	LocalVersionDir string
	LocalAnchorDir  string
	LocalDBDir      string

	// Environment
	DiscordWebhookURL string

	// User Info
	CurrentUser string
	Hostname    string
	ProjectRoot string

	// Tool Info
	ToolVersion string
}

var AppConfig = Config{
	ToolVersion: "v1.0",
}

// Sync Status Constants
const (
	SyncStatusLocalOnly  = "+"
	SyncStatusRemoteOnly = "-"
	SyncStatusDifferent  = "*"
)

// InitializeConfig sets up global configuration variables
func InitializeConfig() error {
	var err error

	AppConfig.ProjectRoot, err = findProjectRoot()
	if err != nil {
		fmt.Fprintf(os.Stderr, "⚠️  Could not determine project root: %v. Using CWD.\n", err)
		AppConfig.ProjectRoot, _ = os.Getwd()
	}

	// Load config from b2m.toml
	tomlPath := filepath.Join(AppConfig.ProjectRoot, "b2m.toml")
	if _, err := os.Stat(tomlPath); os.IsNotExist(err) {
		return fmt.Errorf("couldn't find b2m.toml file at %s: %w", tomlPath, err)
	}

	var tomlConf struct {
		Discord    string `toml:"discord"`
		RootBucket string `toml:"rootbucket"`
	}
	if _, err := toml.DecodeFile(tomlPath, &tomlConf); err != nil {
		return fmt.Errorf("failed to decode b2m.toml: %w", err)
	}

	AppConfig.RootBucket = tomlConf.RootBucket
	AppConfig.DiscordWebhookURL = tomlConf.Discord

	if AppConfig.RootBucket == "" {
		return fmt.Errorf("rootbucket not defined in b2m.toml file")
	}
	if AppConfig.DiscordWebhookURL == "" {
		return fmt.Errorf("discord not defined in b2m.toml file")
	}

	// Derived paths
	// Ensure RootBucket ends with /
	if !strings.HasSuffix(AppConfig.RootBucket, "/") {
		AppConfig.RootBucket += "/"
	}

	AppConfig.LockDir = AppConfig.RootBucket + "lock/"
	AppConfig.VersionDir = AppConfig.RootBucket + "version/"

	var u *user.User
	u, err = user.Current()
	if err != nil {
		AppConfig.CurrentUser = "unknown"
	} else {
		AppConfig.CurrentUser = u.Username
	}

	var h string
	h, err = os.Hostname()
	if err != nil {
		AppConfig.Hostname = "unknown"
	} else {
		AppConfig.Hostname = h
	}

	AppConfig.LocalDBDir = filepath.Join(AppConfig.ProjectRoot, "db", "all_dbs")
	AppConfig.LocalVersionDir = filepath.Join(AppConfig.LocalDBDir, ".b2m", "version")
	AppConfig.LocalAnchorDir = filepath.Join(AppConfig.LocalDBDir, ".b2m", "local-version")

	// Initialize logging if needed, or other startup tasks
	return nil
}

func findProjectRoot() (string, error) {
	dir, err := os.Getwd()
	if err != nil {
		return "", err
	}
	for {
		if info, err := os.Stat(filepath.Join(dir, "db")); err == nil && info.IsDir() {
			return dir, nil
		}
		if _, err := os.Stat(filepath.Join(dir, "go.mod")); err == nil {
			return dir, nil
		}
		parent := filepath.Dir(dir)
		if parent == dir {
			return "", fmt.Errorf("root not found (searched for 'db' dir or 'go.mod')")
		}
		dir = parent
	}
}
