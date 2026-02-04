// Package main - PNG Icons Routes
//
// This file handles routing for PNG icons pages. It defines URL patterns and delegates
// all business logic and database operations to handlers in internal/controllers/png_icons/.
//
// IMPORTANT: This file should ONLY handle routing logic. All database operations,
// business logic, and data processing MUST be done in the handler files located in
// internal/controllers/png_icons/handlers.go. This separation ensures maintainability
// and follows the single responsibility principle.
package main

import (
	"fmt"
	"log"
	"net/http"
	"net/url"
	"strconv"
	"strings"

	png_icons_pages "fdt-templ/components/pages/png_icons"
	png_icons_controllers "fdt-templ/internal/controllers/png_icons"
	"fdt-templ/internal/db/png_icons"
	"fdt-templ/internal/http_cache"
	"fdt-templ/internal/types"
	"fdt-templ/internal/utils"
)

// matchPngSitemap checks if the path is the main sitemap index
func matchPngSitemap(path string) bool {
	return path == basePath+"/png_icons/sitemap.xml"
}

// matchPngSitemapChunk checks if the path is a chunked sitemap (sitemap-{index}.xml)
func matchPngSitemapChunk(path string) (int, bool) {
	if !strings.HasPrefix(path, basePath+"/png_icons/sitemap-") {
		return 0, false
	}
	return png_icons_pages.ParseSitemapIndex(path)
}

// matchPngPaginationSitemap checks if the path is the pagination sitemap
func matchPngPaginationSitemap(path string) bool {
	return path == basePath+"/png_icons_pages/sitemap.xml"
}

func setupPngIconsRoutes(mux *http.ServeMux, db *png_icons.DB) {
	pathPrefix := basePath + "/png_icons"

	mux.HandleFunc(pathPrefix+"/", func(w http.ResponseWriter, r *http.Request) {
		if debugLog {
			log.Printf("PNG Icons handler called - Method: %s, Path: %s", r.Method, r.URL.Path)
		}

		// Redirect URLs ending with .svg/ to the same URL without trailing slash (keep .svg)
		// Do this FIRST before any other processing
		if strings.HasSuffix(r.URL.Path, ".svg/") {
			redirectURL := strings.TrimSuffix(r.URL.Path, "/")
			http.Redirect(w, r, redirectURL, http.StatusMovedPermanently)
			return
		}

		// Check if this is the main sitemap index
		if matchPngSitemap(r.URL.Path) {
			png_icons_pages.HandleSitemapIndex(w, r, db)
			return
		}

		// Check if this is a chunked sitemap (sitemap-{index}.xml)
		if index, ok := matchPngSitemapChunk(r.URL.Path); ok {
			png_icons_pages.HandleSitemapChunk(w, r, db, index)
			return
		}

		// Get the path after /png_icons/
		path := strings.TrimPrefix(r.URL.Path, pathPrefix+"/")
		path = strings.TrimSuffix(path, "/")
		
		if debugLog {
			log.Printf("PNG Icons route - path: '%s', full URL: %s", path, r.URL.Path)
		}

		// Specific redirect: /png_icons/brightness/+-keyboard-brightness-low/chatbot -> /png_icons/brightness/regular-keyboard-brightness-low/
		if path == "brightness/+-keyboard-brightness-low/chatbot" {
			redirectURL := fmt.Sprintf("%s/png_icons/brightness/regular-keyboard-brightness-low/", basePath)
			http.Redirect(w, r, redirectURL, http.StatusMovedPermanently)
			return
		}

		// Specific redirect: /png_icons/joko/1by1 -> /png_icons/joko/_1by1/
		// Try as-is first, then fallback to URL-decoded version
		if path == "joko/1by1" {
			redirectURL := fmt.Sprintf("%s/png_icons/joko/_1by1/", basePath)
			http.Redirect(w, r, redirectURL, http.StatusMovedPermanently)
			return
		}
		
		// Specific redirect: /png_icons/export/export-pdf/ -> /png_icons/export/page-export-pdf/
		if path == "export/export-pdf" {
			redirectURL := fmt.Sprintf("%s/png_icons/export/page-export-pdf/", basePath)
			http.Redirect(w, r, redirectURL, http.StatusMovedPermanently)
			return
		}
		
		// Fallback: Try URL decoding if initial match failed
		decodedPath, err := url.PathUnescape(path)
		if err == nil && decodedPath != path {
			// Try redirects again with decoded path
			if decodedPath == "joko/1by1" {
				redirectURL := fmt.Sprintf("%s/png_icons/joko/_1by1/", basePath)
				http.Redirect(w, r, redirectURL, http.StatusMovedPermanently)
				return
			}
			if decodedPath == "brightness/+-keyboard-brightness-low/chatbot" {
				redirectURL := fmt.Sprintf("%s/png_icons/brightness/regular-keyboard-brightness-low/", basePath)
				http.Redirect(w, r, redirectURL, http.StatusMovedPermanently)
				return
			}
			if decodedPath == "export/export-pdf" {
				redirectURL := fmt.Sprintf("%s/png_icons/export/page-export-pdf/", basePath)
				http.Redirect(w, r, redirectURL, http.StatusMovedPermanently)
				return
			}
		}

		// Match route patterns using helper functions
		if matchIndex(path) {
			png_icons_controllers.HandleIndex(w, r, db, 1)
			return
		}
		
		relativePath := strings.TrimSuffix(strings.TrimPrefix(r.URL.Path, pathPrefix+"/"), "/")

		if relativePath == "credits" {
			png_icons_controllers.HandleCredits(w, r)
			return
		}

		routeInfo, ok := utils.DetectRoute(relativePath, "png_icons")
		if !ok {
			log.Printf("[PNG Icons] DetectRoute failed for path: %s", relativePath)
			http.NotFound(w, r)
			return
		}

		log.Printf("[PNG Icons] Route detected - Type: %v, CategorySlug: %s, ParamSlug: %s, SubCategorySlug: %s, Page: %d, Path: %s",
			routeInfo.Type, routeInfo.CategorySlug, routeInfo.ParamSlug, routeInfo.SubCategorySlug, routeInfo.Page, relativePath)

		/*
			TODO LATER
			exceptionPath are pages where the page slug is a number and conflicting with pagination url
			For now we have this condition for those pages so the router consider them as man pages end slug
		*/
		if relativePath == "2050" {
			routeInfo.Type = types.TypeCategory
			routeInfo.CategorySlug = "2050"
			routeInfo.Page = 1
		}

		cached, _ := http_cache.CheckCache(w, r, db, "png_icons", routeInfo)
		if cached {
			return
		}

		// Handle URLs with more than 2 parts (e.g., /png_icons/s/http-get/http-get)
		// Extract category and icon from first 2 parts and redirect if icon exists
		if png_icons_controllers.HandleRedirectMultiPart(w, r, db, path) {
			log.Printf("[PNG Icons] HandleRedirectMultiPart handled path: %s", path)
			return
		}

		log.Printf("[PNG Icons] Processing route type: %v for path: %s", routeInfo.Type, relativePath)

		switch routeInfo.Type {
		case types.TypeIndex:
			png_icons_controllers.HandleIndex(w, r, db, routeInfo.Page)
			return

		case types.TypeCategory:
			// Canonical check: /category/1/ -> /category/
			if routeInfo.Page == 1 && relativePath != routeInfo.CategorySlug {
				http.Redirect(w, r, pathPrefix+"/"+routeInfo.CategorySlug+"/", http.StatusMovedPermanently)
				return
			}
			png_icons_controllers.HandleCategory(w, r, db, routeInfo.CategorySlug, routeInfo.Page)
			return

		case types.TypeDetail, types.TypeSubCategory:
			// Check for "page-" prefix legacy redirect (misidentified as detail)
			if strings.HasPrefix(routeInfo.ParamSlug, "page-") {
				pageStr := strings.TrimPrefix(routeInfo.ParamSlug, "page-")
				if page, err := strconv.Atoi(pageStr); err == nil {
					redirectURL := fmt.Sprintf("%s/%s/%d/", pathPrefix, routeInfo.CategorySlug, page)
					if debugLog {
						log.Printf("[PNG Icons] Redirecting page- prefix: %s -> %s", r.URL.Path, redirectURL)
					}
					http.Redirect(w, r, redirectURL, http.StatusMovedPermanently)
					return
				}
			}
			log.Printf("[PNG Icons] Calling HandleIcon with category: %s, iconName: %s", routeInfo.CategorySlug, routeInfo.ParamSlug)
			png_icons_controllers.HandleIcon(w, r, db, routeInfo.CategorySlug, routeInfo.ParamSlug)
			return
		}

		if category, iconName, ok := matchIcon(path); ok {
			png_icons_controllers.HandleIcon(w, r, db, category, iconName)
			return
		}

		// No pattern matched
		if debugLog {
			log.Printf("Path doesn't match any pattern, returning 404")
		}
		http.NotFound(w, r)
	})
}

func setupPngIconsPagesRoutes(mux *http.ServeMux, db *png_icons.DB) {
	mux.HandleFunc(basePath+"/png_icons_pages/", func(w http.ResponseWriter, r *http.Request) {
		if debugLog {
			log.Printf("PNG Icons Pages handler called - Method: %s, Path: %s", r.Method, r.URL.Path)
		}

		// Check if this is the pagination sitemap
		if matchPngPaginationSitemap(r.URL.Path) {
			png_icons_pages.HandlePaginationSitemap(w, r, db)
			return
		}

		// No other routes for png_icons_pages
		http.NotFound(w, r)
	})
}

