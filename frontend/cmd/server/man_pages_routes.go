// Package main - Man Pages Routes
//
// This file handles routing for Man Pages (Unix manual pages) pages. It defines URL patterns
// and delegates all business logic and database operations to handlers in internal/controllers/man_pages/.
//
// IMPORTANT: This file should ONLY handle routing logic. All database operations,
// business logic, and data processing MUST be done in the handler files located in
// internal/controllers/man_pages/handler.go. This separation ensures maintainability
// and follows the single responsibility principle.
package main

import (
	"log"
	"net/http"
	"net/url"
	"strings"

	man_pages_components "fdt-templ/components/pages/man_pages"
	manpages "fdt-templ/internal/controllers/man_pages"
	"fdt-templ/internal/db/man_pages"
	"fdt-templ/internal/http_cache"
	"fdt-templ/internal/types"
	"fdt-templ/internal/utils"
)

// Man Pages route matching functions

// matchManPagesSitemap checks if the path is the main sitemap index
func matchManPagesSitemap(path string) bool {
	return path == basePath+"/man-pages/sitemap.xml"
}

// matchManPagesSitemapChunk checks if the path is a chunked sitemap (sitemap-{index}.xml)
func matchManPagesSitemapChunk(path string) (int, bool) {
	if !strings.HasPrefix(path, basePath+"/man-pages/sitemap-") {
		return 0, false
	}
	return man_pages_components.ParseSitemapIndex(path)
}

func setupManPagesRoutes(mux *http.ServeMux, db *man_pages.DB) {
	// Redirect from old man_pages (underscore) to man-pages (hyphen)
	mux.HandleFunc(basePath+"/man_pages/", func(w http.ResponseWriter, r *http.Request) {
		// Redirect to the hyphenated version
		newPath := strings.Replace(r.URL.Path, "/man_pages/", "/man-pages/", 1)
		http.Redirect(w, r, newPath, http.StatusMovedPermanently)
	})

	// Man Pages routes - single handler for all man pages paths
	mux.HandleFunc(basePath+"/man-pages/", func(w http.ResponseWriter, r *http.Request) {
		if debugLog {
			log.Printf("Man Pages handler called - Method: %s, Path: %s", r.Method, r.URL.Path)
		}

		path := r.URL.Path

		// Redirect URLs with &rut= or &sa= parameters in path - strip everything from the parameter onwards
		var cleanPath string
		hasRut := strings.Contains(path, "&rut=")
		hasSa := strings.Contains(path, "&sa=")
		
		if hasRut && hasSa {
			// Strip from whichever appears first
			rutIndex := strings.Index(path, "&rut=")
			saIndex := strings.Index(path, "&sa=")
			if rutIndex < saIndex {
				cleanPath = path[:rutIndex]
			} else {
				cleanPath = path[:saIndex]
			}
		} else if hasRut {
			cleanPath = path[:strings.Index(path, "&rut=")]
		} else if hasSa {
			cleanPath = path[:strings.Index(path, "&sa=")]
		}
		
		if cleanPath != "" {
			// Ensure trailing slash if original had one
			if strings.HasSuffix(path, "/") && !strings.HasSuffix(cleanPath, "/") {
				cleanPath += "/"
			}
			http.Redirect(w, r, cleanPath, http.StatusMovedPermanently)
			return
		}

		// Specific redirect: /freedevtools/man-pages/library-functions/crypt/man3pm/ECC.3pm.html
		// -> /freedevtools/man-pages/user-commands/security-and-encryption/eccparameters/
		if path == basePath+"/man-pages/library-functions/crypt/man3pm/ECC.3pm.html" {
			http.Redirect(w, r, basePath+"/man-pages/user-commands/security-and-encryption/eccparameters/", http.StatusMovedPermanently)
			return
		}

		// Check if this is the main sitemap index
		if matchManPagesSitemap(path) {
			man_pages_components.HandleSitemapIndex(w, r, db)
			return
		}

		// Check if this is a chunked sitemap (sitemap-{index}.xml)
		if index, ok := matchManPagesSitemapChunk(path); ok {
			man_pages_components.HandleSitemapChunk(w, r, db, index)
			return
		}

		// Analyze path relative to /man-pages/ - split once and reuse
		relPath := strings.TrimPrefix(path, basePath+"/man-pages/")
		relPath = strings.TrimSuffix(relPath, "/")

		// Handle static credits page
		if relPath == "credits" {
			manpages.HandleManPagesCredits(w, r)
			return
		}

		// Detect Route Type
		routeInfo, ok := utils.DetectRoute(relPath, "man_pages")
		if !ok {
			// Special handling for legacy/exception paths if needed
			// But DetectRoute should handle most cases now
			log.Printf("[DEBUG] Route: No pattern matched for path: %s", relPath)
			http.NotFound(w, r)
			return
		}

		// Check Cache
		cached, enrichedInfo := http_cache.CheckCache(w, r, db, "man_pages", routeInfo)
		if cached {
			return
		}

		// Dispatch Handler
		switch enrichedInfo.Type {
		case types.TypeIndex:
			if enrichedInfo.Page == 1 && relPath != "" {
				http.Redirect(w, r, basePath+"/man-pages/", http.StatusMovedPermanently)
				return
			}
			manpages.HandleManPagesIndex(w, r, db)

		case types.TypeCategory:
			if enrichedInfo.Page == 1 && relPath != enrichedInfo.CategorySlug {
				http.Redirect(w, r, basePath+"/man-pages/"+url.PathEscape(enrichedInfo.CategorySlug)+"/", http.StatusMovedPermanently)
				return
			}
			manpages.HandleManPagesCategory(w, r, db, enrichedInfo.CategorySlug, enrichedInfo.Page)

		case types.TypeSubCategory:
			if enrichedInfo.Page == 1 && relPath != enrichedInfo.CategorySlug+"/"+enrichedInfo.SubCategorySlug {
				http.Redirect(w, r, basePath+"/man-pages/"+url.PathEscape(enrichedInfo.CategorySlug)+"/"+url.PathEscape(enrichedInfo.SubCategorySlug)+"/", http.StatusMovedPermanently)
				return
			}
			manpages.HandleManPagesSubcategory(w, r, db, enrichedInfo.CategorySlug, enrichedInfo.SubCategorySlug, enrichedInfo.Page)

		case types.TypeDetail:
			manpages.HandleManPagesPage(w, r, db, enrichedInfo.CategorySlug, enrichedInfo.SubCategorySlug, enrichedInfo.ParamSlug)
		}
	})
}

func setupManPagesPagesRoutes(mux *http.ServeMux, db *man_pages.DB) {
	mux.HandleFunc(basePath+"/man-pages_pages/", func(w http.ResponseWriter, r *http.Request) {
		// Pagination sitemap
		if strings.HasSuffix(r.URL.Path, "/sitemap.xml") {
			man_pages_components.HandlePaginationSitemap(w, r, db)
			return
		}
		http.NotFound(w, r)
	})
}
