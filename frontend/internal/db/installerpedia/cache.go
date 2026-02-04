package installerpedia

import (
	"sync"
	"time"
)

type CacheItem[T any] struct {
	Value     T
	ExpiresAt time.Time
}

type Cache[T any] struct {
	mu    sync.RWMutex
	items map[string]CacheItem[T]
	ttl   time.Duration
}

const (
	CacheTTLUpdatedAt = 5 * time.Minute
)

func NewCache[T any](ttl time.Duration) *Cache[T] {
	return &Cache[T]{
		items: make(map[string]CacheItem[T]),
		ttl:   ttl,
	}
}

func (c *Cache[T]) Get(key string) (T, bool) {
	c.mu.RLock()
	item, ok := c.items[key]
	c.mu.RUnlock()

	var zero T
	if !ok || time.Now().After(item.ExpiresAt) {
		return zero, false
	}
	return item.Value, true
}

func (c *Cache[T]) Set(key string, value T) {
	c.mu.Lock()
	c.items[key] = CacheItem[T]{
		Value:     value,
		ExpiresAt: time.Now().Add(c.ttl),
	}
	c.mu.Unlock()
}
