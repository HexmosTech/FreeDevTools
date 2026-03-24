package config

import (
	"fmt"
	"os"
	"path/filepath"

	"b2m/model"

	"github.com/knadh/koanf/parsers/toml/v2"
	"github.com/knadh/koanf/providers/file"
	"github.com/knadh/koanf/v2"
)

var k = koanf.New(".")

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
			model.AppConfig.Frontend.LocalDB = localDBDir
		} else {
			model.AppConfig.Frontend.LocalDB = filepath.Join(model.AppConfig.ProjectRoot, localDBDir)
		}
	}

	return nil
}

// GetDBNameFromToml reads db.toml and returns the filename mapped to shortName
func GetDBNameFromToml(shortName string) (string, error) {
	tomlPath := model.AppConfig.FrontendTomlPath
	if _, err := os.Stat(tomlPath); os.IsNotExist(err) {
		return "", fmt.Errorf("db.toml doesn't exist at %s", tomlPath)
	}

	dbK := koanf.New(".")
	if err := dbK.Load(file.Provider(tomlPath), toml.Parser()); err != nil {
		return "", fmt.Errorf("failed to load db.toml: %w", err)
	}

	// Assuming db.toml has a [db] section
	dbName := dbK.String("db." + shortName)
	if dbName == "" {
		return "", fmt.Errorf("short name '%s' not found or invalid in db.toml", shortName)
	}

	return dbName, nil
}
