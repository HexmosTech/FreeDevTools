package cheatsheets

import (
	"crypto/sha256"
	"encoding/binary"
	"fdt-templ/internal/config"
	"fmt"
)

// GetDBPath returns the path to the cheatsheets database
func GetDBPath() (string, error) {
	if config.DBConfig == nil {
		if err := config.LoadDBToml(); err != nil {
			return "", err
		}
	}
	if config.DBConfig.CheatsheetsDB == "" {
		return "", fmt.Errorf("Cheatsheets DB path is empty in db.toml")
	}
	return config.DBConfig.CheatsheetsDB, nil
}

// HashURLToKeyInt generates a hash ID from category and slug.
// Matches the logic in build_cheatsheets_db.py:
// combined = category + slug
// hash = sha256(combined)
// result = int64(big_endian(hash[:8]))
func HashURLToKeyInt(category, slug string) int64 {
	combined := category + slug
	hash := sha256.Sum256([]byte(combined))
	return int64(binary.BigEndian.Uint64(hash[:8]))
}
