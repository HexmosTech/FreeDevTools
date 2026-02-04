package main

import (
	"fmt"
	"net/http"
	"strings"
	"time"
)

var timeLayouts = []string{
	"2006-01-02T15:04:05.999Z",
	"2006-01-02T15:04:05Z",
	"2006-01-02 15:04:05",
}

func parseDBTime(timeStr string) (time.Time, error) {
	for _, layout := range timeLayouts {
		t, err := time.Parse(layout, timeStr)
		if err == nil {
			return t, nil
		}
	}
	return time.Time{}, fmt.Errorf("could not parse time: %s", timeStr)
}

// cacheMiddleware handles ETag and Last-Modified caching headers.
// It sets the headers and returns true if the content is not modified (304 sent).
// Returns false if the request should proceed (200).
func cacheMiddleware(w http.ResponseWriter, r *http.Request, lastModifiedStr string) bool {
	// fmt.Println("[DEBUG] cacheMiddleware called - Last-Modified: %s", lastModifiedStr)
	if lastModifiedStr == "" {
		return false
	}

	lastMod, err := parseDBTime(lastModifiedStr)
	if err != nil {
		return false
	}

	lastMod = lastMod.Truncate(time.Second)

	w.Header().Set("Last-Modified", lastMod.Format(http.TimeFormat))

	// ETag must be quoted string
	etag := fmt.Sprintf(`"%s"`, lastModifiedStr)
	w.Header().Set("ETag", etag)

	if match := r.Header.Get("If-None-Match"); match != "" {
		for _, potentialMatch := range strings.Split(match, ",") {
			potentialMatch = strings.TrimSpace(potentialMatch)
			// Handle Weak ETags (W/ prefix) added by Nginx/Cloudflare/Browsers
			potentialMatch = strings.TrimPrefix(potentialMatch, "W/")
			if potentialMatch == etag {
				w.WriteHeader(http.StatusNotModified)
				return true
			}
		}
	}

	if since := r.Header.Get("If-Modified-Since"); since != "" {
		if t, err := time.Parse(http.TimeFormat, since); err == nil {
			if t.Unix() >= lastMod.Unix() {
				w.WriteHeader(http.StatusNotModified)
				return true
			}
		}
	}

	return false
}

// SetNoCacheHeaders sets headers to prevent caching of API responses
func SetNoCacheHeaders(w http.ResponseWriter) {
	w.Header().Set("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0")
	w.Header().Set("Pragma", "no-cache")
	w.Header().Set("Expires", "0")
}
