package middleware

import (
	"net/http"
	"strconv"
	"strings"
	"time"
)

const oneDaySeconds = 86400
const oneYearSeconds = 31536000

// noCachePath returns true if path is /pro/* or /api/*.
func noCachePath(path string) bool {
	return strings.Contains(path, "/pro/") || strings.Contains(path, "/api/")
}

// oneDayCachePath returns true for index.js and output.css (versioned in URL; 1-day cache).
func oneDayCachePath(path string) bool {
	return strings.Contains(path, "/freedevtools/static/js/index.js") ||
		strings.Contains(path, "/freedevtools/static/css/output.css")
}

// CacheHeaders sets Cache-Control and X-Content-Type-Options.
// noCachePath gets no-cache; index.js/output.css get 1-day cache; everything else gets long-lived cache.
func CacheHeaders(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		path := r.URL.Path
		if noCachePath(path) {
			now := time.Now().UTC().Format(http.TimeFormat)
			w.Header().Set("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0")
			w.Header().Set("ETag", "W/\""+now+"\"")
			w.Header().Set("Last-Modified", now)
			w.Header().Set("Pragma", "no-cache")
			w.Header().Set("Expires", "0")
		} else if oneDayCachePath(path) {
			w.Header().Set("Cache-Control", "public, max-age="+strconv.Itoa(oneDaySeconds)+", no-transform")
		} else {
			w.Header().Set("Cache-Control", "public, max-age="+strconv.Itoa(oneYearSeconds)+", no-transform")
		}
		w.Header().Set("X-Content-Type-Options", "nosniff")
		next.ServeHTTP(w, r)
	})
}
