package svg_icons

import (
	"crypto/sha256"
	"encoding/binary"
	"fmt"
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

// HashURLToKeyInt hashes a URL to a bigint int64 key
func HashURLToKey(url string) int64 {
	hash := sha256.Sum256([]byte(url))
	return int64(binary.BigEndian.Uint64(hash[:8]))
}

// HashNameToKey hashes a name to a bigint string key
func HashNameToKey(name string) string {
	return fmt.Sprintf("%d", HashNameToKeyInt(name))
}

// HashNameToKeyInt hashes a name to a bigint int64 key
func HashNameToKeyInt(name string) int64 {
	hash := sha256.Sum256([]byte(name))
	return int64(binary.BigEndian.Uint64(hash[:8]))
}

// HashClusterToKey hashes a cluster name to a bigint string key
func HashClusterToKey(cluster string) string {
	return fmt.Sprintf("%d", HashClusterToKeyInt(cluster))
}

// HashClusterToKeyInt hashes a cluster name to a bigint int64 key
func HashClusterToKeyInt(cluster string) int64 {
	hash := sha256.Sum256([]byte(cluster))
	return int64(binary.BigEndian.Uint64(hash[:8]))
}

// GetDBPath returns the path to the SVG icons database
func GetDBPath() string {
	// Assuming we're running from project root
	return filepath.Join("db", "all_dbs", "svg-icons-db-v5.db")
}
