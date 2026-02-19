package cheatsheets

import (
	"crypto/sha256"
	"encoding/binary"
	"path/filepath"
)

// GetDBPath returns the path to the cheatsheets database
func GetDBPath() string {
	return filepath.Join("db", "all_dbs", "cheatsheets-db-v5.db")
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
