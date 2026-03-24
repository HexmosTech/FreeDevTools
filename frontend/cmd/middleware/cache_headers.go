package middleware

import (
	"net/http"
	"strconv"
	"strings"
	"time"
)

const oneDaySeconds = 86400
const oneYearSeconds = 31536000

// noCachePath returns true if path is /pro/* or /api/* or /metrics.
func noCachePath(path string) bool {
	if strings.Contains(path, "/pro/") || strings.Contains(path, "/api/") {
		return true
	}

	if isInstallerpediaMetrics(path) {
		return true
	}


	return false
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

		if isInstallerpediaMetrics(path) {
			w.Header().Set("X-Robots-Tag", "noindex, nofollow")
		}
		
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

func isInstallerpediaMetrics(path string) bool {
	return strings.HasPrefix(path, "/freedevtools/installerpedia/") &&
		(strings.HasSuffix(path, "/metrics") || strings.HasSuffix(path, "/metrics/"))
}