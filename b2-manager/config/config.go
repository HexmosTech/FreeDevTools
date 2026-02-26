package config

import (
	"fmt"
	"os"
	"os/exec"
	"os/user"
	"path/filepath"
	"strings"

	"github.com/knadh/koanf/parsers/toml/v2"
	"github.com/knadh/koanf/providers/file"
	"github.com/knadh/koanf/v2"

	"b2m/core"
	"b2m/model"
)

var k = koanf.New(".")

// InitializeConfig sets up global configuration variables
func InitializeConfig() error {
	var err error

	model.AppConfig.ProjectRoot, err = findProjectRoot()
	if err != nil {
		fmt.Fprintf(os.Stderr, "⚠️  Could not determine project root: %v. Using CWD.\n", err)
		model.AppConfig.ProjectRoot, _ = os.Getwd()
	}

	// Load config from fdt-dev.toml
	if err := loadTOMLConfig(); err != nil {
		return err
	}

	// Validate and set derived paths
	if err := validateAndSetPaths(); err != nil {
		return err
	}

	// Fetch user details
	fetchUserDetails()

	if model.AppConfig.LocalDBDir == "" {
		return fmt.Errorf("LocalDBDir not configured. Please set b2m_db_dir in your config file")
	}
	model.AppConfig.LocalB2MDir = filepath.Join(model.AppConfig.ProjectRoot, ".b2m")
	model.AppConfig.LocalVersionDir = filepath.Join(model.AppConfig.LocalB2MDir, "version")
	model.AppConfig.LocalAnchorDir = filepath.Join(model.AppConfig.LocalB2MDir, "local-version")
	model.AppConfig.MigrationsDir = filepath.Join(model.AppConfig.ProjectRoot, "b2m-migration")

	// Changeset Paths
	model.AppConfig.ChangesetDir = filepath.Join(model.AppConfig.ProjectRoot, "changeset")
	model.AppConfig.ChangesetScriptsDir = filepath.Join(model.AppConfig.ChangesetDir, "scripts")
	model.AppConfig.ChangesetLogsDir = filepath.Join(model.AppConfig.ChangesetDir, "logs")
	model.AppConfig.ChangesetDBsDir = filepath.Join(model.AppConfig.ChangesetDir, "dbs")

	model.AppConfig.FrontendTomlPath = filepath.Join(model.AppConfig.ProjectRoot, "db", "all_dbs", "db.toml")

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
		parent := filepath.Dir(dir)
		if parent == dir {
			return "", fmt.Errorf("root not found 'db' dir")
		}
		dir = parent
	}
}

func loadTOMLConfig() error {
	tomlPath := filepath.Join(model.AppConfig.ProjectRoot, "fdt-dev.toml")
	if _, err := os.Stat(tomlPath); os.IsNotExist(err) {
		return fmt.Errorf("couldn't find fdt-dev.toml file at %s: %w", tomlPath, err)
	}

	// Load TOML file
	if err := k.Load(file.Provider(tomlPath), toml.Parser()); err != nil {
		return fmt.Errorf("failed to load fdt-dev.toml: %w", err)
	}

	model.AppConfig.RootBucket = k.String("b2m.b2m_remote_root_bucket")
	model.AppConfig.DiscordWebhookURL = k.String("b2m.b2m_discord_webhook")

	localDBDir := k.String("b2m.b2m_db_dir")
	if localDBDir != "" {
		if filepath.IsAbs(localDBDir) {
			model.AppConfig.LocalDBDir = localDBDir
		} else {
			model.AppConfig.LocalDBDir = filepath.Join(model.AppConfig.ProjectRoot, localDBDir)
		}
	}

	return nil
}

func validateAndSetPaths() error {
	if model.AppConfig.RootBucket == "" {
		return fmt.Errorf("b2m_remote_root_bucket not defined in fdt-dev.toml file")
	}
	if model.AppConfig.DiscordWebhookURL == "" {
		return fmt.Errorf("b2m_discord_webhook not defined in fdt-dev.toml file")
	}

	if !strings.HasSuffix(model.AppConfig.RootBucket, "/") {
		model.AppConfig.RootBucket += "/"
	}

	model.AppConfig.LockDir = model.AppConfig.RootBucket + "lock/"
	model.AppConfig.VersionDir = model.AppConfig.RootBucket + "version/"
	return nil
}

func fetchUserDetails() {
	u, err := user.Current()
	if err != nil {
		model.AppConfig.CurrentUser = "unknown"
	} else {
		model.AppConfig.CurrentUser = u.Username
	}

	h, err := os.Hostname()
	if err != nil {
		model.AppConfig.Hostname = "unknown"
	} else {
		model.AppConfig.Hostname = h
	}
}

// CheckB3SumAvailability verifies that b3sum is installed and runnable
// CheckB3SumAvailability verifies that b3sum is installed and runnable.
// If not found, it attempts to install it automatically.
func checkB3SumAvailability() error {
	path, err := exec.LookPath("b3sum")
	if err == nil {
		core.LogInfo("b3sum found at: %s", path)
		return nil
	}
	core.LogInfo("b3sum not found.")
	return fmt.Errorf(`b3sum is missing. Please install it manually:

1. Download binary (Linux x64):
   curl -L -o b3sum https://github.com/BLAKE3-team/BLAKE3/releases/download/1.8.3/b3sum_linux_x64_bin

2. Make executable & move to path:
   chmod +x b3sum && sudo mv b3sum /usr/local/bin/

Or use cargo:
   cargo install b3sum`)
}

// Cleanup saves the hash cache and closes the logger.
// This should be called (usually deferred) by the main function.
func Cleanup() {
	if err := core.SaveHashCache(); err != nil {
		core.LogError("Failed to save hash cache: %v", err)
	}
	core.CloseLogger()
}

func CheckDependencies() error {
	if err := checkB3SumAvailability(); err != nil {
		return err
	}
	if err := core.CheckRclone(); err != nil {
		return fmt.Errorf("rclone not found or error: %w", err)
	}
	if !core.CheckRcloneConfig() {
		return fmt.Errorf("rclone config not found. Run 'init' or check setup")
	}
	return nil
}
