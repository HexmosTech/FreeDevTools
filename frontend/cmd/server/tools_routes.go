// Package main - Tools Routes
//
// This file handles routing for Tools pages. It defines URL patterns and delegates
// all business logic to handlers in internal/controllers/t/.
//
// IMPORTANT: This file should ONLY handle routing logic. All business logic
// and data processing MUST be done in the handler files located in
// internal/controllers/t/handlers.go. This separation ensures maintainability
// and follows the single responsibility principle.
//
// Note: Tools pages use static configuration rather than database operations.
package main

import (
	"net/http"
	"strings"

	t "fdt-templ/components/pages/t"
	tools "fdt-templ/internal/controllers/tools"
	toolsDB "fdt-templ/internal/db/tools"
	"fdt-templ/internal/http_cache"
	"fdt-templ/internal/types"
	"fdt-templ/internal/utils"
)

func setupToolsRoutes(mux *http.ServeMux, toolsConfig *toolsDB.Config) {
	pathPrefix := basePath + "/t"

	// Tools Sitemap route
	mux.HandleFunc(pathPrefix+"/sitemap.xml", func(w http.ResponseWriter, r *http.Request) {
		if strings.HasSuffix(r.URL.Path, "/sitemap.xml/") {
			newPath := strings.TrimSuffix(r.URL.Path, "/")
			http.Redirect(w, r, newPath, http.StatusMovedPermanently)
			return
		}
		t.HandleSitemap(w, r)
	})

	// Dynamic Tools route
	mux.HandleFunc(pathPrefix+"/", func(w http.ResponseWriter, r *http.Request) {
		// 0. Enforce Trailing Slash
		if !strings.HasSuffix(r.URL.Path, "/") {
			http.Redirect(w, r, r.URL.Path+"/", http.StatusMovedPermanently)
			return
		}

		relativePath := strings.TrimSuffix(strings.TrimPrefix(r.URL.Path, pathPrefix+"/"), "/")

		// 1. Detect Route
		routeInfo, ok := utils.DetectRoute(relativePath, "tools")
		if !ok {
			http.NotFound(w, r)
			return
		}

		// 2. Check for Redirects
		// Check redirects before cache to ensure we don't serve cached 404s or other content for redirected URLs.
		// For tools, slugs are in ParamSlug (TypeDetail) or CategorySlug (TypeCategory - though we migrated to Detail).
		slugToCheck := routeInfo.ParamSlug
		if slugToCheck == "" {
			slugToCheck = routeInfo.CategorySlug
		}
		if checkToolRedirects(w, r, slugToCheck) {
			return
		}

		// 3. Check Cache
		// Pass toolsConfig for caching
		cached, _ := http_cache.CheckCache(w, r, toolsConfig, "tools", routeInfo)
		if cached {
			return
		}

		// 4. Dispatch
		switch routeInfo.Type {
		case types.TypeIndex:
			tools.HandleIndex(w, r)
		case types.TypeDetail:
			// Fallback: If DetectRoute identifies it as a Detail (e.g. multi-segment path), use ParamSlug
			tools.HandleTool(w, r, routeInfo.ParamSlug, toolsConfig)
		default:
			http.NotFound(w, r)
		}
	})
}

func checkToolRedirects(w http.ResponseWriter, r *http.Request, slug string) bool {
	// Map of legacy slugs to new slugs
	redirects := map[string]string{
		tools.RedirectMacLookup:    tools.RedirectMacLookupTarget,
		tools.RedirectBase64Decode: tools.RedirectBase64DecodeTarget,
		tools.RedirectBase64Encode: tools.RedirectBase64EncodeTarget,
	}

	if targetSlug, ok := redirects[slug]; ok {
		redirect := http.StatusMovedPermanently
		http.Redirect(w, r, basePath+"/t/"+targetSlug+"/", redirect)
		return true
	}
	return false
}
