package bookmarks

import (
	"crypto/sha256"
	"encoding/binary"
)

// HashToID generates a hash ID from a string key
func HashToID(key string) int64 {
	hash := sha256.Sum256([]byte(key))
	// Take first 8 bytes and convert to int64 (big-endian)
	return int64(binary.BigEndian.Uint64(hash[:8]))
}

