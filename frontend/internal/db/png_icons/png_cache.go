package png_icons

import (
	"fmt"
	"sync"
	"time"
)

// CacheEntry represents a cached value with expiration
type cacheEntry struct {
	data      interface{}
	expiresAt time.Time
}

// Cache provides in-memory caching with TTL
type Cache struct {
	mu    sync.RWMutex
	items map[string]*cacheEntry
}

// Cache TTLs (in milliseconds, converted to duration)
var (
	CacheTTLTotalIcons          = 5 * time.Minute
	CacheTTLTotalClusters       = 5 * time.Minute
	CacheTTLClustersWithPreview = 2 * time.Minute
	CacheTTLIconsByCluster      = 3 * time.Minute
	CacheTTLClusterByName       = 10 * time.Minute
	CacheTTLClusters            = 5 * time.Minute
	CacheTTLClusterUpdatedAt    = 10 * time.Minute
	CacheTTLIconUpdatedAt       = 10 * time.Minute
)

// NewCache creates a new cache instance
func NewCache() *Cache {
	return &Cache{
		items: make(map[string]*cacheEntry),
	}
}

// Get retrieves a value from cache if it exists and hasn't expired
func (c *Cache) Get(key string) (interface{}, bool) {
	c.mu.RLock()
	defer c.mu.RUnlock()

	entry, exists := c.items[key]
	if !exists {
		return nil, false
	}

	if time.Now().After(entry.expiresAt) {
		// Expired, delete it
		c.mu.RUnlock()
		c.mu.Lock()
		delete(c.items, key)
		c.mu.Unlock()
		c.mu.RLock()
		return nil, false
	}

	return entry.data, true
}

// Set stores a value in cache with a TTL
func (c *Cache) Set(key string, value interface{}, ttl time.Duration) {
	c.mu.Lock()
	defer c.mu.Unlock()

	c.items[key] = &cacheEntry{
		data:      value,
		expiresAt: time.Now().Add(ttl),
	}
}

// Clear removes all entries from the cache
func (c *Cache) Clear() {
	c.mu.Lock()
	defer c.mu.Unlock()

	c.items = make(map[string]*cacheEntry)
}

// getCacheKey generates a cache key from type and params
func getCacheKey(cacheType string, params interface{}) string {
	if params == nil {
		return cacheType
	}
	// Simple key generation - in production, use a proper serialization
	return fmt.Sprintf("%s:%v", cacheType, params)
}

// Global cache instance
var globalCache = NewCache()
