// Package main - Installerpedia Routes
//
// This file handles routing for Installerpedia pages. It defines URL patterns and delegates
// all business logic and database operations to handlers in internal/controllers/installerpedia/.
//
// IMPORTANT: This file should ONLY handle routing logic. All database operations,
// business logic, and data processing MUST be done in the handler files located in
// internal/controllers/installerpedia/handlers.go. This separation ensures maintainability
// and follows the single responsibility principle.
package main

import (
	"log"
	"net/http"
	"strings"

	installerpedia_pages "fdt-templ/components/pages/installerpedia"
	installerpedia_controllers "fdt-templ/internal/controllers/installerpedia"
	"fdt-templ/internal/db/installerpedia"
	"fdt-templ/internal/http_cache"
	"fdt-templ/internal/types"
	"fdt-templ/internal/utils"
)

func setupInstallerpediaRoutes(mux *http.ServeMux, db *installerpedia.DB) {
	mux.HandleFunc(basePath+"/installerpedia/", func(w http.ResponseWriter, r *http.Request) {
		if debugLog {
			log.Printf("Installerpedia handler called: %s", r.URL.Path)
		}

		// Handle Sitemap
		if strings.HasSuffix(r.URL.Path, "/sitemap.xml") || strings.HasSuffix(r.URL.Path, "/sitemap.xml/") {
			installerpedia_pages.HandleSitemap(w, r, db)
			return
		}

		pathPrefix := basePath + "/installerpedia"
		relativePath := strings.TrimSuffix(strings.TrimPrefix(r.URL.Path, pathPrefix+"/"), "/")

		// Detect Route
		routeInfo, ok := utils.DetectRoute(relativePath, "installerpedia")
		if !ok {
			http.NotFound(w, r)
			return
		}

		// Check Cache
		cached, enrichedInfo := http_cache.CheckCache(w, r, db, "installerpedia", routeInfo)
		if cached {
			return
		}

		if enrichedInfo == nil {
			enrichedInfo = &routeInfo
		}

		// Dispatch
		switch enrichedInfo.Type {
		case types.TypeIndex:
			installerpedia_controllers.HandleIndex(w, r, db)
		case types.TypeCategory:
			installerpedia_controllers.HandleCategory(w, r, db, enrichedInfo.CategorySlug, enrichedInfo.Page)
		case types.TypeDetail:
			installerpedia_controllers.HandleSlug(w, r, db, enrichedInfo.CategorySlug, enrichedInfo.ParamSlug, enrichedInfo.HashID)
		}
	})
}
