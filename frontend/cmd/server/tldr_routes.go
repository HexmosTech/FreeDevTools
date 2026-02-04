// Package main - TLDR Routes
//
// This file handles routing for TLDR (Too Long; Didn't Read) pages. It defines URL patterns
// and delegates all business logic and database operations to handlers in internal/controllers/tldr/.
//
// IMPORTANT: This file should ONLY handle routing logic. All database operations,
// business logic, and data processing MUST be done in the handler files located in
// internal/controllers/tldr/handlers.go. This separation ensures maintainability
// and follows the single responsibility principle.
package main

import (
	"log"
	"net/http"
	"strings"

	"fdt-templ/components/pages/tldr"
	tldr_controllers "fdt-templ/internal/controllers/tldr"
	tldr_db "fdt-templ/internal/db/tldr"
	"fdt-templ/internal/http_cache"
	"fdt-templ/internal/types"
	"fdt-templ/internal/utils"
)

// matchTldrSitemap checks if the path is the main sitemap index
func matchTldrSitemap(path string) bool {
	return path == basePath+"/tldr/sitemap.xml"
}

// matchTldrSitemapChunk checks if the path is a chunked sitemap
func matchTldrSitemapChunk(path string) (int, bool) {
	if !strings.HasPrefix(path, basePath+"/tldr/sitemap-") {
		return 0, false
	}
	return tldr.ParseSitemapIndex(path)
}

func setupTldrRoutes(mux *http.ServeMux, db *tldr_db.DB) {
	pathPrefix := basePath + "/tldr"

	mux.HandleFunc(pathPrefix+"/", func(w http.ResponseWriter, r *http.Request) {
		if debugLog {
			log.Printf("TLDR handler called: %s", r.URL.Path)
		}

		path := r.URL.Path

		// Sitemap routes
		// Enforce no trailing slash for sitemaps
		if strings.HasSuffix(path, "/sitemap.xml/") || (strings.Contains(path, "/sitemap-") && strings.HasSuffix(path, ".xml/")) {
			newPath := strings.TrimSuffix(path, "/")
			http.Redirect(w, r, newPath, http.StatusMovedPermanently)
			return
		}

		if matchTldrSitemap(path) {
			tldr.HandleSitemapIndex(w, r, db)
			return
		}
		if index, ok := matchTldrSitemapChunk(path); ok {
			tldr.HandleSitemapChunk(w, r, db, index)
			return
		}

		// Parse path
		relativePath := strings.TrimSuffix(strings.TrimPrefix(path, pathPrefix+"/"), "/")

		if relativePath == "credits" {
			tldr_controllers.HandleCredits(w, r)
			return
		}

		routeInfo, ok := utils.DetectRoute(relativePath, "tldr")
		if !ok {
			http.NotFound(w, r)
			return
		}

		cached, enrichedInfo := http_cache.CheckCache(w, r, db, "tldr", routeInfo)
		if cached {
			return
		}

		switch routeInfo.Type {
		case types.TypeIndex:
			if routeInfo.Page == 1 && relativePath != "" {
				http.Redirect(w, r, pathPrefix+"/", http.StatusMovedPermanently)
				return
			}
			tldr_controllers.HandleIndex(w, r, db, routeInfo.Page)

		case types.TypeCategory:
			if routeInfo.Page == 1 && relativePath != routeInfo.CategorySlug {
				http.Redirect(w, r, pathPrefix+"/"+routeInfo.CategorySlug+"/", http.StatusMovedPermanently)
				return
			}
			tldr_controllers.HandlePlatform(w, r, db, routeInfo.CategorySlug, routeInfo.Page, enrichedInfo.HashID)

		case types.TypeDetail, types.TypeSubCategory:
			tldr_controllers.HandleCommand(w, r, db, routeInfo.CategorySlug, routeInfo.ParamSlug, enrichedInfo.HashID)
		}
	})

	// Separate handler for /tldr_pages/ sitemap
	mux.HandleFunc(basePath+"/tldr_pages/sitemap.xml", func(w http.ResponseWriter, r *http.Request) {
		if strings.HasSuffix(r.URL.Path, "/sitemap.xml/") {
			newPath := strings.TrimSuffix(r.URL.Path, "/")
			http.Redirect(w, r, newPath, http.StatusMovedPermanently)
			return
		}
		tldr.HandlePaginationSitemap(w, r, db)
	})
}
