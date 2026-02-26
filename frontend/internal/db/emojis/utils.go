package emojis

import (
	"fdt-templ/internal/config"
	"fmt"
)

// GetDBPath returns the path to the emoji database
func GetDBPath() (string, error) {
	if config.DBConfig == nil {
		if err := config.LoadDBToml(); err != nil {
			return "", err
		}
	}
	if config.DBConfig.EmojiDB == "" {
		return "", fmt.Errorf("Emoji DB path is empty in db.toml")
	}
	return config.DBConfig.EmojiDB, nil
}
