package core

import (
	"encoding/json"
	"fmt"
	"os"
	"os/exec"
	"path/filepath"
	"strings"
	"sync"
	"time"

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

// CheckB3SumAvailability verifies that b3sum is installed and runnable
func CheckB3SumAvailability() error {
	path, err := exec.LookPath("b3sum")
	if err != nil {
		return fmt.Errorf("b3sum not found. Please install it using: `cargo install b3sum`")
	}
	LogInfo("b3sum found at: %s", path)
	return nil
}

// CalculateHash calculates the hash of a file using b3sum directly
// This is optimized to allow b3sum to use its own parallelism and OS buffer cache
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

	// Log start time for debugging
	LogInfo("Starting hash calculation for %s using b3sum directly...", filepath.Base(filePath))

	// Run b3sum command directly on the file
	// This allows b3sum to use mmap and multithreading, which is significantly faster
	// than piping data through Go.
	// We use "b3sum" directly. Note: The user asked for "time command", but wrapping with /usr/bin/time
	// complicates output parsing. Go's time.Since is precise for wall-clock time.
	cmd := exec.Command("b3sum", filePath)
	output, err := cmd.Output()
	if err != nil {
		LogError("CalculateHash: Failed to calculate hash for %s: %v", filePath, err)
		return "", err
	}

	// Parse Output
	// b3sum output format: <hash>  <filename>\n
	fields := strings.Fields(string(output))
	if len(fields) < 1 {
		LogError("CalculateHash: Invalid output from b3sum for %s: %q", filePath, output)
		return "", fmt.Errorf("invalid output from b3sum")
	}
	hash := fields[0]

	// Stats & Logging
	duration := time.Since(startTime)
	fileSizeMB := float64(info.Size()) / 1024 / 1024

	var speed float64
	if duration.Seconds() > 0.000001 { // Check for > 1us to avoid div by zero
		speed = fileSizeMB / duration.Seconds()
	} else {
		// Extremely fast, assume infinite or just use max reasonable
		speed = 0
	}

	msg := fmt.Sprintf("Hash calculated for %s in %v (%.2f MB/s). Start: %v, End: %v",
		filepath.Base(filePath), duration, speed, startTime.Format(time.RFC3339Nano), time.Now().Format(time.RFC3339Nano))
	LogInfo(msg)

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

// ClearHashCache wipes the in-memory hash cache.
// Call this when you want to force re-calculation of all hashes.
func ClearHashCache() {
	hashCacheMu.Lock()
	hashCache = make(map[string]cachedHash)
	hashCacheMu.Unlock()
	LogInfo("Cleared in-memory hash cache")
}
