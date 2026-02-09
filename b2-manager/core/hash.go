package core

import (
	"encoding/json"
	"fmt"
	"io"
	"os"
	"path/filepath"
	"sync"

	"github.com/zeebo/xxh3"

	"b2m/config"
)

// cachedHash stores the hash and file stat info to avoid re-hashing unchanged files
type cachedHash struct {
	Hash    string
	ModTime int64
	Size    int64
}

var (
	fileHashCache   = make(map[string]cachedHash)
	fileHashCacheMu sync.RWMutex
)

// CalculateXXHash calculates the xxHash (as hex string) of a file with caching
func CalculateXXHash(filePath string) (string, error) {
	info, err := os.Stat(filePath)
	if err != nil {
		LogError("CalculateXXHash: Failed to stat file %s: %v", filePath, err)
		return "", err
	}

	// Check cache
	fileHashCacheMu.RLock()
	cached, ok := fileHashCache[filePath]
	fileHashCacheMu.RUnlock()

	if ok && cached.ModTime == info.ModTime().UnixNano() && cached.Size == info.Size() {
		return cached.Hash, nil
	} else {
		LogInfo("Cache miss for %s. Cached: %v, Current: ModTime=%d, Size=%d", filepath.Base(filePath), ok, info.ModTime().UnixNano(), info.Size())
	}

	// Calculate hash
	f, err := os.Open(filePath)
	if err != nil {
		LogError("CalculateXXHash: Failed to open file %s: %v", filePath, err)
		return "", err
	}
	defer f.Close()

	// Use streaming digest
	h := xxh3.New()
	if _, err := io.Copy(h, f); err != nil {
		LogError("CalculateXXHash: io.Copy failed for %s: %v", filePath, err)
		return "", err
	}

	// Sum64 returns uint64, format as hex string for compatibility
	hash := fmt.Sprintf("%016x", h.Sum64())

	// Update cache
	fileHashCacheMu.Lock()
	fileHashCache[filePath] = cachedHash{
		Hash:    hash,
		ModTime: info.ModTime().UnixNano(),
		Size:    info.Size(),
	}
	fileHashCacheMu.Unlock()

	return hash, nil
}

// LoadHashCache loads the hash cache from disk
func LoadHashCache() error {
	cachePath := filepath.Join(config.AppConfig.LocalAnchorDir, "hash.json")
	if _, err := os.Stat(cachePath); os.IsNotExist(err) {
		return nil // No cache exists yet
	}

	data, err := os.ReadFile(cachePath)
	if err != nil {
		LogError("LoadHashCache: Failed to read cache file: %v", err)
		return err
	}

	fileHashCacheMu.Lock()
	defer fileHashCacheMu.Unlock()

	if err := json.Unmarshal(data, &fileHashCache); err != nil {
		LogError("LoadHashCache: Failed to unmarshal cache: %v", err)
		return fmt.Errorf("failed to unmarshal cache: %w", err)
	}

	LogInfo("Loaded %d entries from hash cache", len(fileHashCache))
	// LogInfo("Loaded %d entries from hash cache at %s", len(fileHashCache), cachePath)
	// for k, v := range fileHashCache {
	// 	LogInfo(" - Loaded: %s -> %s (Mod: %d, Size: %d)", filepath.Base(k), v.Hash, v.ModTime, v.Size)
	// }
	return nil
}

// SaveHashCache saves the hash cache to disk
func SaveHashCache() error {
	cachePath := filepath.Join(config.AppConfig.LocalAnchorDir, "hash.json")

	// Ensure directory exists
	if err := os.MkdirAll(config.AppConfig.LocalAnchorDir, 0755); err != nil {
		LogError("SaveHashCache: Failed to create directory: %v", err)
		return err
	}

	fileHashCacheMu.RLock()
	data, err := json.MarshalIndent(fileHashCache, "", "  ")
	fileHashCacheMu.RUnlock()

	if err != nil {
		LogError("SaveHashCache: Failed to marshal cache: %v", err)
		return err
	}

	if err := os.WriteFile(cachePath, data, 0644); err != nil {
		LogError("SaveHashCache: Failed to write file: %v", err)
		return err
	}

	LogInfo("Saved %d entries to hash cache", len(fileHashCache))
	// LogInfo("Saving %d entries to hash cache:", len(fileHashCache))
	// for k := range fileHashCache {
	// 	LogInfo(" - Saving: %s", filepath.Base(k))
	// }
	return nil
}
