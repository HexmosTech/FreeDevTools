package config

import (
	"fmt"
	"os"
	"os/user"
	"path/filepath"
	"strings"

	"github.com/BurntSushi/toml"

	"b2m/model"
)

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

	var tomlConf struct {
		B2M struct {
			Discord    string `toml:"b2m_discord_webhook"`
			RootBucket string `toml:"b2m_remote_root_bucket"`
			LocalDBDir string `toml:"b2m_db_dir"`
		} `toml:"b2m"`
	}
	if _, err := toml.DecodeFile(tomlPath, &tomlConf); err != nil {
		return fmt.Errorf("failed to decode fdt-dev.toml: %w", err)
	}

	model.AppConfig.RootBucket = tomlConf.B2M.RootBucket
	model.AppConfig.DiscordWebhookURL = tomlConf.B2M.Discord
	if tomlConf.B2M.LocalDBDir != "" {
		if filepath.IsAbs(tomlConf.B2M.LocalDBDir) {
			model.AppConfig.LocalDBDir = tomlConf.B2M.LocalDBDir
		} else {
			model.AppConfig.LocalDBDir = filepath.Join(model.AppConfig.ProjectRoot, tomlConf.B2M.LocalDBDir)
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
