// Package main - MCP (Model Context Protocol) Routes
//
// This file handles routing for MCP pages. It defines URL patterns and delegates
// all business logic and database operations to handlers in internal/controllers/mcp/.
//
// IMPORTANT: This file should ONLY handle routing logic. All database operations,
// business logic, and data processing MUST be done in the handler files located in
// internal/controllers/mcp/handlers.go. This separation ensures maintainability
// and follows the single responsibility principle.
package main

import (
	"net/http"
	"strings"

	mcp_pages "fdt-templ/components/pages/mcp"
	mcp_controllers "fdt-templ/internal/controllers/mcp"
	mcp_db "fdt-templ/internal/db/mcp"
	"fdt-templ/internal/http_cache"
	"fdt-templ/internal/types"
	"fdt-templ/internal/utils"
)

func setupMcpRoutes(mux *http.ServeMux, db *mcp_db.DB) {
	pathPrefix := basePath + "/mcp"

	mux.HandleFunc(pathPrefix+"/", func(w http.ResponseWriter, r *http.Request) {
		// Handle sitemap routes
		// Enforce no trailing slash for sitemap.xml
		if strings.HasSuffix(r.URL.Path, "/sitemap.xml/") {
			newPath := strings.TrimSuffix(r.URL.Path, "/")
			http.Redirect(w, r, newPath, http.StatusMovedPermanently)
			return
		}

		if strings.HasSuffix(r.URL.Path, "/mcp/sitemap.xml") {
			mcp_pages.HandleSitemapIndex(w, r, db)
			return
		}

		// Pagination sitemap
		if strings.HasSuffix(r.URL.Path, "/mcp/pages/sitemap.xml") {
			mcp_pages.HandlePaginationSitemap(w, r, db)
			return
		}

		// Check for category sitemaps
		if strings.Contains(r.URL.Path, "/sitemap") {
			// Extract likely category slug
			// Path is like /freedevtools/mcp/{category}/sitemap.xml OR /freedevtools/mcp/{category}/sitemap-{index}.xml
			parts := strings.Split(r.URL.Path, "/")
			// parts: ["", "freedevtools", "mcp", "{category}", "sitemap..."]

			if len(parts) >= 2 {
				lastPart := parts[len(parts)-1]
				possibleCategory := parts[len(parts)-2]

				if possibleCategory != "pages" && possibleCategory != "mcp" {
					// Check for index sitemap
					if lastPart == "sitemap.xml" {
						mcp_pages.HandleCategorySitemap(w, r, db, possibleCategory)
						return
					}

					// Check for chunk sitemap
					if strings.HasPrefix(lastPart, "sitemap-") && strings.HasSuffix(lastPart, ".xml") {
						if index, ok := mcp_pages.ParseSitemapIndex(lastPart); ok {
							mcp_pages.HandleCategorySitemapChunk(w, r, db, possibleCategory, index)
							return
						}
					}
				}
			}
		}

		relativePath := strings.TrimSuffix(strings.TrimPrefix(r.URL.Path, pathPrefix+"/"), "/")

		// Handle Exceptions

		var routeInfo types.RouteInfo
		var ok bool

		// Handle Exceptions (Credits is now treated as a specific static route type for caching)
		if relativePath == "credits" {
			routeInfo = types.RouteInfo{Type: types.TypeDetail, Page: 1}
			ok = true
		} else {
			// Detect Route
			routeInfo, ok = utils.DetectRoute(relativePath, "mcp")
		}

		if !ok {
			http.NotFound(w, r)
			return
		}

		// Check Cache
		cached, enrichedInfo := http_cache.CheckCache(w, r, db, "mcp", routeInfo)
		if cached {
			return
		}

		// Dispatch
		switch routeInfo.Type {
		case types.TypeIndex:
			mcp_controllers.HandleIndex(w, r, db, routeInfo.Page)
		case types.TypeCategory:
			mcp_controllers.HandleCategory(w, r, db, routeInfo.CategorySlug, routeInfo.Page)
		case types.TypeDetail:
			if relativePath == "credits" {
				mcp_controllers.HandleCredits(w, r)
			} else {
				mcp_controllers.HandleRepo(w, r, db, routeInfo.CategorySlug, routeInfo.ParamSlug, enrichedInfo.HashID)
			}
		}
	})
}

func setupMcpPagesRoutes(mux *http.ServeMux, db *mcp_db.DB) {
	mux.HandleFunc(basePath+"/mcp_pages/", func(w http.ResponseWriter, r *http.Request) {
		// Pagination sitemap
		if strings.HasSuffix(r.URL.Path, "/sitemap.xml") {
			mcp_pages.HandlePaginationSitemap(w, r, db)
			return
		}
		http.NotFound(w, r)
	})
}
