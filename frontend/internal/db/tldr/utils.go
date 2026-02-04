package tldr

import (
	"crypto/sha256"
	"encoding/binary"
	"encoding/hex"
	"encoding/json"
	"fmt"
	"strings"
)

// ParsePreviewCommands parses a JSON string into a slice of PreviewCommand
func ParsePreviewCommands(jsonStr string) ([]PreviewCommand, error) {
	var commands []PreviewCommand
	if jsonStr == "" {
		return commands, nil
	}
	err := json.Unmarshal([]byte(jsonStr), &commands)
	if err != nil {
		return nil, fmt.Errorf("failed to parse preview commands: %w", err)
	}
	return commands, nil
}

// CalculateHash computes the 64-bit ID from a string key (used for clusters)
func CalculateHash(key string) int64 {
	hash := sha256.Sum256([]byte(key))
	hexHash := hex.EncodeToString(hash[:])

	// Take first 16 characters (8 bytes)
	hexPart := hexHash[:16]
	bytesVal, _ := hex.DecodeString(hexPart)

	return int64(binary.BigEndian.Uint64(bytesVal))
}

// CalculatePageHash computes the 64-bit ID for a page based on category and name
func CalculatePageHash(category, name string) int64 {
	category = strings.ToLower(strings.TrimSpace(category))
	name = strings.ToLower(strings.TrimSpace(name))
	uniqueStr := fmt.Sprintf("%s/%s", category, name)

	return CalculateHash(uniqueStr)
}

// ParsePageMetadata parses a JSON string into a PageMetadata struct
func ParsePageMetadata(jsonStr string) (PageMetadata, error) {
	var metadata PageMetadata
	if jsonStr == "" {
		return metadata, nil
	}
	err := json.Unmarshal([]byte(jsonStr), &metadata)
	if err != nil {
		return metadata, fmt.Errorf("failed to parse page metadata: %w", err)
	}
	return metadata, nil
}

// FormatNumber formats a number with suffixes (k, M, G)
func FormatNumber(n int) string {
	if n < 1000 {
		return fmt.Sprintf("%d", n)
	}
	if n < 1000000 {
		return fmt.Sprintf("%.1fk", float64(n)/1000.0)
	}
	if n < 1000000000 {
		return fmt.Sprintf("%.1fM", float64(n)/1000000.0)
	}
	return fmt.Sprintf("%.1fG", float64(n)/1000000000.0)
}
