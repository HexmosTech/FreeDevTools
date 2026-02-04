package png_icons

import (
	"crypto/sha256"
	"encoding/binary"
	"net/url"
	"path/filepath"
	"strings"
)

// BuildIconURL constructs an icon URL from cluster and name
func BuildIconURL(cluster, name string) string {
	var segments []string
	if cluster != "" {
		segments = append(segments, url.PathEscape(cluster))
	}
	if name != "" {
		segments = append(segments, url.PathEscape(name))
	}
	return "/" + strings.Join(segments, "/")
}

// HashURLToKey hashes a URL to a bigint int64 key
func HashURLToKey(url string) int64 {
	hash := sha256.Sum256([]byte(url))
	// Take first 8 bytes and convert to bigint
	return int64(binary.BigEndian.Uint64(hash[:8]))
}

// HashNameToKey hashes a name to a bigint int64 key
func HashNameToKey(name string) int64 {
	hash := sha256.Sum256([]byte(name))
	return int64(binary.BigEndian.Uint64(hash[:8]))
}

// HashClusterToKey hashes a cluster name to a bigint string key
func HashClusterToKey(cluster string) int64 {
	hash := sha256.Sum256([]byte(cluster))
	return int64(binary.BigEndian.Uint64(hash[:8]))
}

// GetDBPath returns the path to the PNG icons database
func GetDBPath() string {
	// Assuming we're running from project root
	return filepath.Join("db", "all_dbs", "png-icons-db-v4.db")
}
