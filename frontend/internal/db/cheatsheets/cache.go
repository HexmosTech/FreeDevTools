package cheatsheets

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

// Cache TTLs
var (
	CacheTTLTotalCheatsheets = 24 * time.Hour
	CacheTTLTotalCategories  = 24 * time.Hour
	CacheTTLAllCategories    = 1 * time.Hour
	CacheTTLCategoryBySlug   = 1 * time.Hour
	CacheTTLCheatsheets      = 1 * time.Hour
	CacheTTLCheatsheet       = 1 * time.Hour
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
		// Expired (lazy cleanup on read is fine for this scale)
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
	return fmt.Sprintf("%s:%v", cacheType, params)
}

// Global cache instance
var globalCache = NewCache()
