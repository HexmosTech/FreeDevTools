package core

import (
	"encoding/json"
	"fmt"
	"io"
	"os"
	"path/filepath"

	"github.com/zeebo/xxh3"

	"b2m/model"
)

// CalculateXXHash calculates the xxHash (as hex string) of a file with caching
func CalculateXXHash(filePath string) (string, error) {
	info, err := os.Stat(filePath)
	if err != nil {
		LogError("CalculateXXHash: Failed to stat file %s: %v", filePath, err)
		return "", err
	}

	// Check cache
	// Check cache
	model.FileHashCacheMu.RLock()
	cached, ok := model.FileHashCache[filePath]
	model.FileHashCacheMu.RUnlock()

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
	model.FileHashCacheMu.Lock()
	model.FileHashCache[filePath] = model.CachedHash{
		Hash:    hash,
		ModTime: info.ModTime().UnixNano(),
		Size:    info.Size(),
	}
	model.FileHashCacheMu.Unlock()

	return hash, nil
}

// LoadHashCache loads the hash cache from disk
func LoadHashCache() error {
	cachePath := filepath.Join(model.AppConfig.LocalAnchorDir, "hash.json")
	if _, err := os.Stat(cachePath); os.IsNotExist(err) {
		return nil // No cache exists yet
	}

	data, err := os.ReadFile(cachePath)
	if err != nil {
		LogError("LoadHashCache: Failed to read cache file: %v", err)
		return err
	}

	model.FileHashCacheMu.Lock()
	defer model.FileHashCacheMu.Unlock()

	if err := json.Unmarshal(data, &model.FileHashCache); err != nil {
		LogError("LoadHashCache: Failed to unmarshal cache: %v", err)
		return fmt.Errorf("failed to unmarshal cache: %w", err)
	}

	LogInfo("Loaded %d entries from hash cache", len(model.FileHashCache))
	return nil
}

// SaveHashCache saves the hash cache to disk
func SaveHashCache() error {
	cachePath := filepath.Join(model.AppConfig.LocalAnchorDir, "hash.json")

	// Ensure directory exists
	if err := os.MkdirAll(model.AppConfig.LocalAnchorDir, 0755); err != nil {
		LogError("SaveHashCache: Failed to create directory: %v", err)
		return err
	}

	model.FileHashCacheMu.RLock()
	data, err := json.MarshalIndent(model.FileHashCache, "", "  ")
	model.FileHashCacheMu.RUnlock()

	if err != nil {
		LogError("SaveHashCache: Failed to marshal cache: %v", err)
		return err
	}

	if err := os.WriteFile(cachePath, data, 0644); err != nil {
		LogError("SaveHashCache: Failed to write file: %v", err)
		return err
	}

	LogInfo("Saved %d entries to hash cache", len(model.FileHashCache))

	return nil
}
