package png_icons

import (
	"crypto/sha256"
	"encoding/binary"
	"fdt-templ/internal/config"
	"fmt"
	"net/url"
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
func GetDBPath() (string, error) {
	if config.DBConfig == nil {
		if err := config.LoadDBToml(); err != nil {
			return "", err
		}
	}
	if config.DBConfig.PngIconsDB == "" {
		return "", fmt.Errorf("PNG Icons DB path is empty in db.toml")
	}
	return config.DBConfig.PngIconsDB, nil
}
