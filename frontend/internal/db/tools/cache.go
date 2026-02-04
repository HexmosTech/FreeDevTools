package tools

import (
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
// Since tools data is static in code (reboot required to change),
// we could conceptually cache forever, but matching other DBs with a reasonable TTL is safe.
var (
	CacheTTLTool  = 24 * time.Hour
	CacheTTLIndex = 24 * time.Hour
)

// NewCache creates a new cache instance
func NewCache() *Cache {
	return &Cache{
		items: make(map[string]*cacheEntry),
	}
}

// Get retrieves a value from cache if it exists and hasn't expired
func (cache *Cache) Get(key string) (interface{}, bool) {
	cache.mu.RLock()
	defer cache.mu.RUnlock()

	entry, exists := cache.items[key]
	if !exists {
		return nil, false
	}

	if time.Now().After(entry.expiresAt) {
		return nil, false
	}

	return entry.data, true
}

// Set stores a value in cache with a TTL
func (cache *Cache) Set(key string, value interface{}, ttl time.Duration) {
	cache.mu.Lock()
	defer cache.mu.Unlock()

	cache.items[key] = &cacheEntry{
		data:      value,
		expiresAt: time.Now().Add(ttl),
	}
}

// Clear removes all entries from the cache
func (cache *Cache) Clear() {
	cache.mu.Lock()
	defer cache.mu.Unlock()

	cache.items = make(map[string]*cacheEntry)
}
