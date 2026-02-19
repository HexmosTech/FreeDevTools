package middleware

import (
	"net/http"
	"strings"
)

// noCachePath returns true if path is /pro/* or /api/*.
func noCachePath(path string) bool {
	return strings.Contains(path, "/pro/") || strings.Contains(path, "/api/")
}

// CacheHeaders sets Cache-Control and X-Content-Type-Options.
// noCachePath gets no-cache; everything else gets long-lived cache. Handlers can override.
func CacheHeaders(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		if noCachePath(r.URL.Path) {
			w.Header().Set("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0")
			w.Header().Set("Pragma", "no-cache")
			w.Header().Set("Expires", "0")
		} else {
			w.Header().Set("Cache-Control", "public, max-age=31536000, no-transform")
		}
		w.Header().Set("X-Content-Type-Options", "nosniff")
		next.ServeHTTP(w, r)
	})
}
