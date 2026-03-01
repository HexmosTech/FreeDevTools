package middleware

import (
	"bytes"
	"log"
	"net/http"
	"os"
	"path/filepath"
	"strings"

	"fdt-templ/internal/static_cache"
)

// responseWriterWrapper captures the response status and body
type responseWriterWrapper struct {
	http.ResponseWriter
	body       *bytes.Buffer
	statusCode int
}

func (rw *responseWriterWrapper) WriteHeader(code int) {
	rw.statusCode = code
	rw.ResponseWriter.WriteHeader(code)
}

func (rw *responseWriterWrapper) Write(b []byte) (int, error) {
	if rw.statusCode == 0 {
		rw.statusCode = http.StatusOK
	}
	if rw.statusCode == http.StatusOK {
		return rw.body.Write(b)
	}
	return rw.ResponseWriter.Write(b)
}

// shouldSkipCache returns true if the incoming request path should bypass the static cache
func shouldSkipCache(path string) bool {
	if strings.Contains(path, "/pro/") || strings.Contains(path, "/api/") ||
		strings.Contains(path, "/static/") || strings.Contains(path, "/public/") {
		return true
	}

	// Skip files with common static extensions (already handled or not HTML)
	ext := filepath.Ext(path)
	if ext != "" && ext != ".html" {
		return true
	}
	return false
}

// getCachePath computes the local filesystem path for a given URL path
func getCachePath(cacheDir, path string) string {
	relPath := strings.Trim(path, "/")
	if relPath == "" {
		relPath = "index"
	}

	cachePath := filepath.Join(cacheDir, relPath)
	if !strings.HasSuffix(cachePath, ".html") {
		cachePath = filepath.Join(cachePath, "index.html")
	}
	return cachePath
}

// attempts to read the HTML from disk and serve it (with injections).
// Returns true if successfully served.
func serveFromCache(w http.ResponseWriter, path, cachePath string) bool {
	if info, err := os.Stat(cachePath); err == nil && !info.IsDir() {
		log.Printf("[STATIC_CACHE] HIT: Serving %s from disk (injected)", path)
		content, err := os.ReadFile(cachePath)
		if err != nil {
			log.Printf("[STATIC_CACHE] Error: Failed to read %s: %v", cachePath, err)
			return false
		}

		w.Header().Set("Content-Type", "text/html; charset=utf-8")
		w.Write(static_cache.InjectCSS(content))
		return true
	}
	return false
}

// handles the writing of the generated HTML to the cache directory asynchronously.
func writeToDiskAsync(fullPath string, data []byte, urlPath string) {
	// Defensive copy before sending to goroutine so concurrent slice appends
	// from net/http don't cause races
	copiedContent := make([]byte, len(data))
	copy(copiedContent, data)

	go func(fullPath string, data []byte, urlPath string) {
		dir := filepath.Dir(fullPath)
		if err := os.MkdirAll(dir, 0755); err != nil {
			log.Printf("[STATIC_CACHE] Error: Failed to create cache directory %s: %v", dir, err)
			return
		}

		// Generate a very unique temp path combining thread/process with random strings 
		// to prevent concurrent requests clobbering each other's tmp file
		tmpPath := fullPath + ".tmp." + strings.ReplaceAll(filepath.Base(urlPath), "/", "")
		if err := os.WriteFile(tmpPath, data, 0644); err != nil {
			log.Printf("[STATIC_CACHE] Error: Failed to write temp file %s: %v", tmpPath, err)
			return
		}

		if err := os.Rename(tmpPath, fullPath); err != nil {
			log.Printf("[STATIC_CACHE] Error: Failed to rename temp file %s to %s: %v", tmpPath, fullPath, err)
			// Try to clean up the tmp file if rename fails
			os.Remove(tmpPath)
		}
	}(fullPath, copiedContent, urlPath)
}

// StaticCache handles on-demand static HTML generation and serving
func StaticCache(cacheDir string, next http.Handler) http.Handler {

	if err := os.MkdirAll(cacheDir, 0755); err != nil {
		log.Printf("[STATIC_CACHE] Error: Could not create cache directory: %v", err)
	}

	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {

		if r.Method != http.MethodGet {
			next.ServeHTTP(w, r)
			return
		}

		path := r.URL.Path

		if shouldSkipCache(path) {
			next.ServeHTTP(w, r)
			return
		}

		cachePath := getCachePath(cacheDir, path)

		// 1. O(1) Check
		if serveFromCache(w, path, cachePath) {
			return
		}

		// 2. Cache Miss
		log.Printf("[STATIC_CACHE] MISS: Generating %s", path)

		wrapper := &responseWriterWrapper{
			ResponseWriter: w,
			body:           &bytes.Buffer{},
		}

		next.ServeHTTP(wrapper, r)

		if wrapper.statusCode == http.StatusOK && wrapper.body.Len() > 0 {
			rawContent := wrapper.body.Bytes()

			writeToDiskAsync(cachePath, rawContent, r.URL.Path)

			// BUT for the current user, we must inject the JS/CSS now
			w.Header().Set("Content-Type", "text/html; charset=utf-8")
			w.Write(static_cache.InjectCSS(rawContent))
		}
	})
}
