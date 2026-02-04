package emojis

import (
	"path/filepath"
)

// GetDBPath returns the path to the emoji database
func GetDBPath() string {
	// Assuming we're running from project root
	return filepath.Join("db", "all_dbs", "emoji-db-v4.db")
}
