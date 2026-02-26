package man_pages

import (
	"crypto/sha256"
	"encoding/binary"
	"fdt-templ/internal/config"
	"fmt"
)

// GetDBPath returns the path to the man pages database
func GetDBPath() (string, error) {
	if config.DBConfig == nil {
		if err := config.LoadDBToml(); err != nil {
			return "", err
		}
	}
	if config.DBConfig.ManPagesDB == "" {
		return "", fmt.Errorf("Man Pages DB path is empty in db.toml")
	}
	return config.DBConfig.ManPagesDB, nil
}

// HashURLToKey generates a hash ID from mainCategory, subCategory, and slug
// This matches the TypeScript hashUrlToKey function
func HashURLToKey(mainCategory, subCategory, slug string) int64 {
	combined := mainCategory + subCategory + slug
	hash := sha256.Sum256([]byte(combined))
	// Take first 8 bytes and convert to int64 (big-endian)
	return int64(binary.BigEndian.Uint64(hash[:8]))
}
