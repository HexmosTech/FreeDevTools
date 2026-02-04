package main

import (
	"encoding/json"
	"log"
	"net/http"
	"net/url"
	"strings"

	"fdt-templ/components/layouts"
	"fdt-templ/internal/db/bookmarks"
)

// bookmarkRedirectResponse represents the response structure for bookmark redirect (non-pro users)
type bookmarkRedirectResponse struct {
	Success     bool                   `json:"success"`
	Redirect    string                 `json:"redirect"`
	RequiresPro bool                   `json:"requiresPro"`
	Bookmarks   []bookmarks.Bookmark  `json:"bookmarks,omitempty"`
}

// checkProStatusAndRedirect is deprecated - pro checks are handled on frontend
// This function is kept for compatibility but always returns true
func checkProStatusAndRedirect(w http.ResponseWriter, r *http.Request, basePath string, additionalFields map[string]interface{}) bool {
	return true
}

// bookmarkListResponse represents the response structure for bookmark list endpoint
type bookmarkListResponse struct {
	Success    bool                `json:"success"`
	Bookmarks  []bookmarks.Bookmark `json:"bookmarks,omitempty"`
	Redirect   string              `json:"redirect,omitempty"`
	RequiresPro bool               `json:"requiresPro,omitempty"`
}

func setupBookmarkRoutes(mux *http.ServeMux, fdtPgDB *bookmarks.DB) {
	basePath := GetBasePath()

	// GET endpoint to check bookmark status
	mux.HandleFunc(basePath+"/api/pro/bookmark/check", func(w http.ResponseWriter, r *http.Request) {
		SetNoCacheHeaders(w)
		if r.Method != http.MethodGet {
			http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
			return
		}

		// Get user ID from cookie
		userIDCookie, err := r.Cookie("hexmos-one-id")
		if err != nil || userIDCookie == nil || userIDCookie.Value == "" {
			// No user ID, return not bookmarked
			w.Header().Set("Content-Type", "application/json")
			json.NewEncoder(w).Encode(map[string]bool{"bookmarked": false})
			return
		}
		userID := userIDCookie.Value

		// Get URL from query parameter
		urlParam := r.URL.Query().Get("url")
		if urlParam == "" {
			http.Error(w, "url parameter is required", http.StatusBadRequest)
			return
		}

		// Decode URL if needed
		decodedURL, err := url.QueryUnescape(urlParam)
		if err != nil {
			decodedURL = urlParam
		}

		// Check bookmark status
		isBookmarked, err := fdtPgDB.CheckBookmark(userID, decodedURL)
		if err != nil {
			log.Printf("[Bookmark] Error checking bookmark: %v", err)
			http.Error(w, "Internal server error", http.StatusInternalServerError)
			return
		}

		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(map[string]bool{"bookmarked": isBookmarked})
	})

	// POST endpoint to toggle bookmark
	mux.HandleFunc(basePath+"/api/pro/bookmark/toggle", func(w http.ResponseWriter, r *http.Request) {
		SetNoCacheHeaders(w)
		if r.Method != http.MethodPost {
			http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
			return
		}

		// Parse request body first to get URL for potential redirect
		var req struct {
			URL string `json:"url"`
		}
		if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
			http.Error(w, "Invalid request body", http.StatusBadRequest)
			return
		}

		// Check if user is pro and handle redirect if not pro
		if !checkProStatusAndRedirect(w, r, basePath, nil) {
			return
		}

		// Get user ID from cookie
		userIDCookie, err := r.Cookie("hexmos-one-id")
		if err != nil || userIDCookie == nil || userIDCookie.Value == "" {
			http.Error(w, "User ID not found in cookie", http.StatusUnauthorized)
			return
		}
		userID := userIDCookie.Value

		if req.URL == "" {
			http.Error(w, "url is required", http.StatusBadRequest)
			return
		}

		if req.URL == "" {
			http.Error(w, "url is required", http.StatusBadRequest)
			return
		}

		// Extract category from URL
		category := extractCategoryFromURL(req.URL)
		
		// Normalize category
		category = normalizeCategory(category)

		// Toggle bookmark
		isBookmarked, err := fdtPgDB.ToggleBookmark(userID, req.URL, category)
		if err != nil {
			log.Printf("[Bookmark] Error toggling bookmark: %v", err)
			http.Error(w, "Internal server error", http.StatusInternalServerError)
			return
		}

		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(map[string]interface{}{
			"success":    true,
			"bookmarked": isBookmarked,
		})
	})

	// GET endpoint to get all bookmarks for a user
	mux.HandleFunc(basePath+"/api/pro/bookmark/list", func(w http.ResponseWriter, r *http.Request) {
		SetNoCacheHeaders(w)
		if r.Method != http.MethodGet {
			http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
			return
		}

		// Check if user is pro and handle redirect if not pro
		if !checkProStatusAndRedirect(w, r, basePath, map[string]interface{}{
			"bookmarks": []bookmarks.Bookmark{},
		}) {
			return
		}

		// Get user ID from cookie
		userIDCookie, err := r.Cookie("hexmos-one-id")
		if err != nil || userIDCookie == nil || userIDCookie.Value == "" {
			// No user ID, return empty list
			w.Header().Set("Content-Type", "application/json")
			json.NewEncoder(w).Encode(bookmarkListResponse{
				Success:   true,
				Bookmarks: []bookmarks.Bookmark{},
			})
			return
		}
		userID := userIDCookie.Value

		// Get all bookmarks
		bookmarksList, err := fdtPgDB.GetBookmarksByUser(userID)
		if err != nil {
			log.Printf("[Bookmark] Error getting bookmarks: %v", err)
			http.Error(w, "Internal server error", http.StatusInternalServerError)
			return
		}

		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(bookmarkListResponse{
			Success:   true,
			Bookmarks: bookmarksList,
		})
	})
}

// extractCategoryFromURL extracts category from URL path
func extractCategoryFromURL(urlStr string) string {
	// Use GetAdPageTypeFromPath pattern
	// First, extract path from full URL if needed
	path := urlStr
	if strings.HasPrefix(urlStr, "http://") || strings.HasPrefix(urlStr, "https://") {
		parsedURL, err := url.Parse(urlStr)
		if err == nil {
			path = parsedURL.Path
		}
	}

	// Use the same logic as GetAdPageTypeFromPath
	return layouts.GetAdPageTypeFromPath(path)
}

// normalizeCategory normalizes category names
func normalizeCategory(category string) string {
	// Normalize variations
	switch category {
	case "emojis":
		return "emoji"
	case "svg_icons":
		return "svg_icons"
	case "png_icons":
		return "png_icons"
	case "mcp":
		return "mcp"
	case "c":
		return "c"
	case "tldr":
		return "tldr"
	case "man-pages":
		return "man-pages"
	case "installerpedia":
		return "installerpedia"
	default:
		return category
	}
}

