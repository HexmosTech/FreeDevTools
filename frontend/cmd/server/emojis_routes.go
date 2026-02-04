// Package main - Emojis Routes
//
// This file handles routing for emoji pages. It defines URL patterns and delegates
// all business logic and database operations to handlers in internal/controllers/emojis/.
//
// IMPORTANT: This file should ONLY handle routing logic. All database operations,
// business logic, and data processing MUST be done in the handler files located in
// internal/controllers/emojis/handler.go. This separation ensures maintainability
// and follows the single responsibility principle.
package main

import (
	"fmt"
	"log"
	"net/http"
	"net/url"
	"strings"

	emojis_controllers "fdt-templ/internal/controllers/emojis"
	"fdt-templ/internal/db/emojis"
	"fdt-templ/internal/http_cache"
	"fdt-templ/internal/types"
	"fdt-templ/internal/utils"
)

// normalizePath decodes URL-encoded characters and normalizes Unicode hyphens to regular hyphens
func normalizePath(path string) string {
	// First, decode URL-encoded characters
	decoded, err := url.PathUnescape(path)
		if err != nil {
		// If decoding fails, use original path and continue with normalization
		// This is expected for paths that are already decoded or contain invalid encoding
		decoded = path
	}
	
	// Normalize Unicode hyphens to regular hyphens
	// U+2011 (non-breaking hyphen), U+2010 (hyphen), U+2012 (figure dash), 
	// U+2013 (en dash), U+2014 (em dash), U+2015 (horizontal bar) -> regular hyphen
	normalized := strings.Map(func(r rune) rune {
		if r == '\u2011' || r == '\u2010' || r == '\u2012' || r == '\u2013' || r == '\u2014' || r == '\u2015' {
			return '-'
		}
		return r
	}, decoded)
	
	return normalized
}

func setupEmojisRoutes(mux *http.ServeMux, db *emojis.DB) {
	// Initialize category slug map at startup
	emojis_controllers.InitCategorySlugMap(db)
	utils.EmojiCategoryChecker = emojis_controllers.IsCategorySlug

	mux.HandleFunc(basePath+"/emojis/", func(w http.ResponseWriter, r *http.Request) {
		if debugLog {
			log.Printf("Emojis handler called - Method: %s, Path: %s", r.Method, r.URL.Path)
		}

		// Redirect URLs ending with undefined/ to the same URL without that part
		if strings.HasSuffix(r.URL.Path, "/undefined/") {
			redirectURL := strings.TrimSuffix(r.URL.Path, "/undefined/")
			if !strings.HasSuffix(redirectURL, "/") {
				redirectURL += "/"
			}
			http.Redirect(w, r, redirectURL, http.StatusMovedPermanently)
			return
		}

		// Enforce trailing slash for non-empty paths (except sitemap)
		if r.URL.Path != basePath+"/emojis/" && !strings.HasSuffix(r.URL.Path, "/") && !strings.Contains(r.URL.Path, "sitemap") {
			http.Redirect(w, r, r.URL.Path+"/", http.StatusMovedPermanently)
			return
		}

		// Get the path after /emojis/
		path := strings.TrimPrefix(r.URL.Path, basePath+"/emojis/")
		path = strings.TrimSuffix(path, "/")

		// Normalize path (decode URL encoding and normalize Unicode hyphens)
		path = normalizePath(path)
		
		// Specific redirect: /emojis/flag-auritania/ -> /emojis/flag-mauritania/
		if path == "flag-auritania" {
			redirectURL := fmt.Sprintf("%s/emojis/flag-mauritania/", basePath)
			http.Redirect(w, r, redirectURL, http.StatusMovedPermanently)
			return
		}

		// Specific redirect: /emojis/keycap/ -> /emojis/keycap-asterisk/
		if path == "keycap" {
			redirectURL := fmt.Sprintf("%s/emojis/keycap-asterisk/", basePath)
			http.Redirect(w, r, redirectURL, http.StatusMovedPermanently)
			return
		}

		// Specific redirect: /emojis/man-beard/ -> /emojis/person-beard/
		if path == "man-beard" {
			redirectURL := fmt.Sprintf("%s/emojis/person-beard/", basePath)
			http.Redirect(w, r, redirectURL, http.StatusMovedPermanently)
			return
		}
		
		// Handle sitemap
		if path == "sitemap.xml" {
			emojis_controllers.HandleEmojisSitemap(w, r, db)
			return
		}

		// Handle credits
		if path == "credits" {
			emojis_controllers.HandleEmojisCredits(w, r)
			return
		}

		info, ok := utils.DetectRoute(path, "emojis")
		if !ok {
		http.NotFound(w, r)
				return
			}

		// Check Cache
		done, enrichedInfo := http_cache.CheckCache(w, r, db, "emojis", info)
		if done {
				return
			}

		if enrichedInfo != nil {
			info = *enrichedInfo
		}

		// Dispatch based on detected route info
		switch info.Type {
		case types.TypeIndex:
			emojis_controllers.HandleEmojisIndex(w, r, db, info.Page)
		case types.TypeCategory:
			// Handle ambiguity: top-level segment could be category OR emoji slug
			if info.CategorySlug == "apple-emojis" {
				emojis_controllers.HandleAppleEmojisIndex(w, r, db, info.Page)
			} else if info.CategorySlug == "discord-emojis" {
				emojis_controllers.HandleDiscordEmojisIndex(w, r, db, info.Page)
			} else if emojis_controllers.IsCategorySlug(info.CategorySlug) {
				emojis_controllers.HandleEmojisCategory(w, r, db, info.CategorySlug, info.Page)
		} else {
				// Not a category, try as emoji slug
				emojis_controllers.HandleEmojiSlug(w, r, db, info.CategorySlug)
			}
		case types.TypeSubCategory:
			// Vendor specific category pagination, actual category pagination, or vendor emoji slug
			if info.CategorySlug == "apple-emojis" {
				if emojis_controllers.IsCategorySlug(info.SubCategorySlug) {
					// apple-emojis/category/page
					emojis_controllers.HandleAppleEmojisCategory(w, r, db, info.SubCategorySlug, info.Page)
	} else {
					// apple-emojis/emoji-slug
					emojis_controllers.HandleAppleEmojiSlug(w, r, db, info.SubCategorySlug)
				}
			} else if info.CategorySlug == "discord-emojis" {
				if emojis_controllers.IsCategorySlug(info.SubCategorySlug) {
					// discord-emojis/category/page
					emojis_controllers.HandleDiscordEmojisCategory(w, r, db, info.SubCategorySlug, info.Page)
	} else {
					// discord-emojis/emoji-slug
					emojis_controllers.HandleDiscordEmojiSlug(w, r, db, info.SubCategorySlug)
				}
	} else {
				// /emojis/category/page
				emojis_controllers.HandleEmojisCategory(w, r, db, info.CategorySlug, info.Page)
			}
		case types.TypeDetail:
			// This might be reached for deep paths if any, but handled by TypeSubCategory for most emoji routes
			if info.CategorySlug == "apple-emojis" {
				emojis_controllers.HandleAppleEmojiSlug(w, r, db, info.ParamSlug)
			} else if info.CategorySlug == "discord-emojis" {
				emojis_controllers.HandleDiscordEmojiSlug(w, r, db, info.ParamSlug)
	} else {
				emojis_controllers.HandleEmojiSlug(w, r, db, info.ParamSlug)
			}
		default:
		http.NotFound(w, r)
		}
	})
}
