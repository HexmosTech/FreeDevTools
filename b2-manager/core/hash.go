package core

import (
	"encoding/json"
	"fmt"
	"os"
	"path/filepath"
	"sync"
	"time"

	"github.com/kalafut/imohash"

	"b2m/model"
)

// cachedHash stores the hash and file stat info to avoid re-hashing unchanged files
type cachedHash struct {
	Hash    string
	ModTime int64
	Size    int64
}

var (
	hashCache   = make(map[string]cachedHash)
	hashCacheMu sync.RWMutex
)

// CalculateHash calculates the imohash (as hex string) of a file with caching
func CalculateHash(filePath string, onProgress func(string)) (string, error) {
	info, err := os.Stat(filePath)
	if err != nil {
		LogError("CalculateHash: Failed to stat file %s: %v", filePath, err)
		return "", err
	}

	// Check cache
	hashCacheMu.RLock()
	cached, ok := hashCache[filePath]
	hashCacheMu.RUnlock()

	if ok && cached.ModTime == info.ModTime().UnixNano() && cached.Size == info.Size() {
		// LogInfo("Cache hit for %s", filepath.Base(filePath)) // Optional: Reduce noise
		return cached.Hash, nil
	} else {
		LogInfo("Cache miss for %s. Cached: %v, Current: ModTime=%d, Size=%d", filepath.Base(filePath), ok, info.ModTime().UnixNano(), info.Size())
	}

	if onProgress != nil {
		onProgress(fmt.Sprintf("Integrity Check: %s", filepath.Base(filePath)))
	}

	startTime := time.Now()

	// Calculate hash using imohash
	// imohash.SumFile returns [16]byte
	hashBytes, err := imohash.SumFile(filePath)
	if err != nil {
		LogError("CalculateHash: Failed to calculate hash for %s: %v", filePath, err)
		return "", err
	}

	// Format as hex string
	hash := fmt.Sprintf("%x", hashBytes)

	duration := time.Since(startTime)
	LogInfo("Hash calculation for %s took %v", filepath.Base(filePath), duration)

	// Update cache
	hashCacheMu.Lock()
	hashCache[filePath] = cachedHash{
		Hash:    hash,
		ModTime: info.ModTime().UnixNano(),
		Size:    info.Size(),
	}
	hashCacheMu.Unlock()

	return hash, nil
}

// pruneHashCache removes entries for files that no longer exist
func pruneHashCache() {
	hashCacheMu.Lock()
	defer hashCacheMu.Unlock()

	initialSize := len(hashCache)
	for path := range hashCache {
		if _, err := os.Stat(path); os.IsNotExist(err) {
			delete(hashCache, path)
		}
	}
	finalSize := len(hashCache)
	if initialSize != finalSize {
		LogInfo("Pruned %d entries from hash cache", initialSize-finalSize)
	}
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

	hashCacheMu.Lock()
	defer hashCacheMu.Unlock()

	if err := json.Unmarshal(data, &hashCache); err != nil {
		LogError("LoadHashCache: Failed to unmarshal cache: %v", err)
		return fmt.Errorf("failed to unmarshal cache: %w", err)
	}

	LogInfo("Loaded %d entries from hash cache", len(hashCache))
	return nil
}

// SaveHashCache saves the hash cache to disk
func SaveHashCache() error {
	// Prune before saving
	pruneHashCache()

	cachePath := filepath.Join(model.AppConfig.LocalAnchorDir, "hash.json")

	// Ensure directory exists
	if err := os.MkdirAll(model.AppConfig.LocalAnchorDir, 0755); err != nil {
		LogError("SaveHashCache: Failed to create directory: %v", err)
		return err
	}

	hashCacheMu.RLock()
	data, err := json.MarshalIndent(hashCache, "", "  ")
	hashCacheMu.RUnlock()

	if err != nil {
		LogError("SaveHashCache: Failed to marshal cache: %v", err)
		return err
	}

	if err := os.WriteFile(cachePath, data, 0644); err != nil {
		LogError("SaveHashCache: Failed to write file: %v", err)
		return err
	}

	LogInfo("Saved %d entries to hash cache", len(hashCache))

	return nil
}
