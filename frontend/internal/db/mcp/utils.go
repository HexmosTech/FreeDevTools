package mcp

import (
	"crypto/sha256"
	"encoding/binary"
	"fdt-templ/internal/config"
	"fmt"
)

// GetDBPath returns the path to the mcp database
func GetDBPath() (string, error) {
	if config.DBConfig == nil {
		if err := config.LoadDBToml(); err != nil {
			return "", err
		}
	}
	if config.DBConfig.McpDB == "" {
		return "", fmt.Errorf("MCP DB path is empty in db.toml")
	}
	return config.DBConfig.McpDB, nil
}

// HashToID generates a hash ID from a string key
func HashToID(key string) int64 {
	hash := sha256.Sum256([]byte(key))
	// Take first 8 bytes and convert to int64 (big-endian)
	return int64(binary.BigEndian.Uint64(hash[:8]))
}

// HashURLToKey generates a hash ID from category slug and mcp key
// Matches Astro's hashUrlToKey: categorySlug + mcpKey
func HashURLToKey(categorySlug, mcpKey string) int64 {
	combined := categorySlug + mcpKey
	hash := sha256.Sum256([]byte(combined))
	// Take first 8 bytes and convert to int64 (big-endian)
	return int64(binary.BigEndian.Uint64(hash[:8]))
}
