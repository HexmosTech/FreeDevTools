// Package main - SVG Icons Routes
//
// This file handles routing for SVG icons pages. It defines URL patterns and delegates
// all business logic and database operations to handlers in internal/controllers/svg_icons/.
//
// IMPORTANT: This file should ONLY handle routing logic. All database operations,
// business logic, and data processing MUST be done in the handler files located in
// internal/controllers/svg_icons/handlers.go. This separation ensures maintainability
// and follows the single responsibility principle.
package main

import (
	"fmt"
	"log"
	"net/http"
	"path/filepath"
	"strings"

	svg_icons_pages "fdt-templ/components/pages/svg_icons"
	svg_icons_controllers "fdt-templ/internal/controllers/svg_icons"
	"fdt-templ/internal/db/svg_icons"
	"fdt-templ/internal/http_cache"
	"fdt-templ/internal/types"
	"fdt-templ/internal/utils"
)

// matchSitemap checks if the path is the main sitemap index
func matchSitemap(path string) bool {
	return path == basePath+"/svg_icons/sitemap.xml"
}

// matchSitemapChunk checks if the path is a chunked sitemap (sitemap-{index}.xml)
func matchSitemapChunk(path string) (int, bool) {
	if !strings.HasPrefix(path, basePath+"/svg_icons/sitemap-") {
		return 0, false
	}
	return svg_icons_pages.ParseSitemapIndex(path)
}

// matchPaginationSitemap checks if the path is the pagination sitemap
func matchPaginationSitemap(path string) bool {
	return path == basePath+"/svg_icons_pages/sitemap.xml"
}

func setupSVGIconsRoutes(mux *http.ServeMux, db *svg_icons.DB) {
	pathPrefix := basePath + "/svg_icons"

	// SVG Icons routes - single handler for all SVG icon paths
	mux.HandleFunc(pathPrefix+"/", func(w http.ResponseWriter, r *http.Request) {
		if debugLog {
			log.Printf("SVG Icons handler called - Method: %s, Path: %s", r.Method, r.URL.Path)
		}

		// Check if this is a request for a static SVG file
		if strings.HasSuffix(r.URL.Path, ".svg") {
			// Serve static SVG file from public/svg_icons/
			publicPath, err := filepath.Abs("public")
			if err != nil {
				log.Printf("[SVG] Failed to get absolute path for public directory: %v", err)
				http.NotFound(w, r)
				return
			}

			// Get the path after /svg_icons/ (e.g., "openal/openal-original.svg")
			svgPath := strings.TrimPrefix(r.URL.Path, pathPrefix+"/")
			fullPath := filepath.Join(publicPath, "svg_icons", svgPath)

			// Set correct Content-Type
			w.Header().Set("Content-Type", "image/svg+xml")

			// Serve the file
			http.ServeFile(w, r, fullPath)
			return
		}

		// Check if this is the main sitemap index
		if matchSitemap(r.URL.Path) {
			svg_icons_pages.HandleSitemapIndex(w, r, db)
			return
		}

		// Check if this is a chunked sitemap (sitemap-{index}.xml)
		if index, ok := matchSitemapChunk(r.URL.Path); ok {
			svg_icons_pages.HandleSitemapChunk(w, r, db, index)
			return
		}

		// Parse path
		relativePath := strings.TrimSuffix(strings.TrimPrefix(r.URL.Path, pathPrefix+"/"), "/")
		path := relativePath 
		
		// Check for trailing hyphen in icon name and redirect
		if svg_icons_controllers.HandleRedirectWithTrailingHyphen(w, r, path) {
			return
		}
		
		// Specific redirect: /svg_icons/18/_4g/ -> /svg_icons/eighteen/_4g/
		if path == "18/_4g" {
			redirectURL := fmt.Sprintf("%s/svg_icons/eighteen/_4g/", basePath)
			http.Redirect(w, r, redirectURL, http.StatusMovedPermanently)
			return
		}

		// Specific redirect: /svg_icons/1dm/1dm/ -> /png_icons/1dm/_1dm
		if path == "1dm/1dm" {
			redirectURL := fmt.Sprintf("%s/png_icons/1dm/_1dm/", basePath)
			http.Redirect(w, r, redirectURL, http.StatusMovedPermanently)
			return
		}

		// Specific redirect: /svg_icons/waffle/solid-waffle（可無需註冊） -> /svg_icons/waffle/solid-waffle
		if path == "waffle/solid-waffle（可無需註冊）" {
			http.Redirect(w, r, fmt.Sprintf("%s/svg_icons/waffle/solid-waffle/", basePath), http.StatusMovedPermanently)
			return
		}

		// Match route patterns using helper functions
		if matchIndex(path) {
			svg_icons_controllers.HandleIndex(w, r, db, 1)
			return
		}

		if relativePath == "credits" {
			svg_icons_controllers.HandleCredits(w, r)
			return
		}

		routeInfo, ok := utils.DetectRoute(relativePath, "svg_icons")
		if !ok {
			// Check legacy matches or just NotFound
			http.NotFound(w, r)
			return
		}

		// Exception for "2050"
		if relativePath == "2050" {
			routeInfo.Type = types.TypeCategory
			routeInfo.CategorySlug = "2050"
			routeInfo.Page = 1
		}

		// Cache Check
		cached, _ := http_cache.CheckCache(w, r, db, "svg_icons", routeInfo)
		if cached {
			return
		}
 
		// Handle URLs with more than 2 parts (e.g., svg_icons/index/http-trace/http-trace)
		// Extract category and icon from first 2 parts and redirect if icon exists
		if svg_icons_controllers.HandleRedirectMultiPart(w, r, db, path) {
			return
		}

		switch routeInfo.Type {
		case types.TypeIndex:
			if routeInfo.Page == 1 && relativePath != "" {
				http.Redirect(w, r, pathPrefix+"/", http.StatusMovedPermanently)
				return
			}
			svg_icons_controllers.HandleIndex(w, r, db, routeInfo.Page)


		case types.TypeCategory:
			// Canonical check
			if routeInfo.Page == 1 && relativePath != routeInfo.CategorySlug {
				// If it was "2050", relativePath="2050", CategorySlug="2050". Matches.
				http.Redirect(w, r, pathPrefix+"/"+routeInfo.CategorySlug+"/", http.StatusMovedPermanently)
				return
			}
			svg_icons_controllers.HandleCategory(w, r, db, routeInfo.CategorySlug, routeInfo.Page)

		case types.TypeDetail, types.TypeSubCategory:
			svg_icons_controllers.HandleIcon(w, r, db, routeInfo.CategorySlug, routeInfo.ParamSlug)
		}
	})
}

// setupSVGIconsPagesRoutes sets up routes for svg_icons_pages (pagination sitemap)
func setupSVGIconsPagesRoutes(mux *http.ServeMux, db *svg_icons.DB) {
	mux.HandleFunc(basePath+"/svg_icons_pages/", func(w http.ResponseWriter, r *http.Request) {
		if debugLog {
			log.Printf("SVG Icons Pages handler called - Method: %s, Path: %s", r.Method, r.URL.Path)
		}

		// Check if this is the pagination sitemap
		if matchPaginationSitemap(r.URL.Path) {
			svg_icons_pages.HandlePaginationSitemap(w, r, db)
			return
		}

		// No other routes for svg_icons_pages
		http.NotFound(w, r)
	})
}

