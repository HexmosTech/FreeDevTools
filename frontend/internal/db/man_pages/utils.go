package man_pages

import (
	"crypto/sha256"
	"encoding/binary"
	"path/filepath"
)

// GetDBPath returns the path to the man pages database
func GetDBPath() string {
	// Assuming we're running from project root
	return filepath.Join("db", "all_dbs", "man-pages-db-v4.db")
}

// HashURLToKey generates a hash ID from mainCategory, subCategory, and slug
// This matches the TypeScript hashUrlToKey function
func HashURLToKey(mainCategory, subCategory, slug string) int64 {
	combined := mainCategory + subCategory + slug
	hash := sha256.Sum256([]byte(combined))
	// Take first 8 bytes and convert to int64 (big-endian)
	return int64(binary.BigEndian.Uint64(hash[:8]))
}
