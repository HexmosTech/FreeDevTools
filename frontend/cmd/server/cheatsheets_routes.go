// Package main - Cheatsheets Routes
//
// This file handles routing for Cheatsheets pages. It defines URL patterns and delegates
// all business logic and database operations to handlers in internal/controllers/cheatsheets/.
//
// IMPORTANT: This file should ONLY handle routing logic. All database operations,
// business logic, and data processing MUST be done in the handler files located in
// internal/controllers/cheatsheets/handlers.go. This separation ensures maintainability
// and follows the single responsibility principle.
package main

import (
	"fmt"
	"log"
	"net/http"
	"net/url"
	"strings"

	cheatsheets_components "fdt-templ/components/pages/cheatsheets"
	cheatsheets_controllers "fdt-templ/internal/controllers/cheatsheets"
	"fdt-templ/internal/db/cheatsheets"
	"fdt-templ/internal/http_cache"
	"fdt-templ/internal/types"
	"fdt-templ/internal/utils"
)

func setupCheatsheetsRoutes(mux *http.ServeMux, db *cheatsheets.DB) {
	path := basePath + "/c"

	mux.HandleFunc(path+"/", func(w http.ResponseWriter, r *http.Request) {
		if debugLog {
			log.Printf("Cheatsheets: %s %s", r.Method, r.URL.Path)
		}

		// Handle sitemap routes
		if strings.HasSuffix(r.URL.Path, "/sitemap.xml/") {
			http.Redirect(w, r, strings.TrimSuffix(r.URL.Path, "/"), http.StatusMovedPermanently)
			return
		}

		if strings.HasSuffix(r.URL.Path, "/c/sitemap.xml") {
			cheatsheets_components.HandleSitemap(w, r, db)
			return
		}

		// Parse path
		relativePath := strings.TrimSuffix(strings.TrimPrefix(r.URL.Path, path+"/"), "/")

		// Specific redirect: /c/gitlab-ci/.gitlab-ci-mysql/ -> /c/gitlab-ci/gitlab-ci-mysql/
		if relativePath == "gitlab-ci/.gitlab-ci-mysql" {
			redirectURL := fmt.Sprintf("%s/c/gitlab-ci/gitlab-ci-mysql/", basePath)
			http.Redirect(w, r, redirectURL, http.StatusMovedPermanently)
			return
		}

		// Handle static credits page
		// DetectRoute handles dynamic routes. Credits is static.
		if relativePath == "credits" {
			cheatsheets_controllers.HandleCredits(w, r)
			return
		}

		// Exception: Handle Notepad++_Cheatsheet URL with ++ characters
		// The unescape function in route detection uses QueryUnescape which converts + to spaces
		// So we need to normalize this BEFORE route detection to preserve ++
		if strings.HasPrefix(relativePath, "ide_editors/") {
			parts := strings.Split(relativePath, "/")
			if len(parts) == 2 && parts[0] == "ide_editors" {
				slug := parts[1]
				// Handle variations: Notepad++_Cheatsheet, Notepad%2B%2B_Cheatsheet, Notepad  _Cheatsheet (spaces from + conversion), Notepad_Cheatsheet
				if strings.Contains(slug, "Notepad") && strings.Contains(slug, "Cheatsheet") {
					// First decode URL-encoded ++ (%2B%2B)
					slug = strings.ReplaceAll(slug, "%2B%2B", "++")
					slug = strings.ReplaceAll(slug, "%2b%2b", "++")
					// Handle case where ++ was converted to spaces (two spaces between Notepad and _Cheatsheet)
					slug = strings.ReplaceAll(slug, "Notepad  _Cheatsheet", "Notepad++_Cheatsheet")
					// Handle case where ++ was converted to a single space
					slug = strings.ReplaceAll(slug, "Notepad _Cheatsheet", "Notepad++_Cheatsheet")
					// Handle case where ++ is missing entirely
					if !strings.Contains(slug, "++") {
						slug = strings.ReplaceAll(slug, "Notepad_Cheatsheet", "Notepad++_Cheatsheet")
					}
					relativePath = "ide_editors/" + slug
				}
			}
		}

		// Detect Route Type (try as-is first)
		routeInfo, ok := utils.DetectRoute(relativePath, "cheatsheets")
		
		// Fallback: Try URL decoding if initial route detection failed
		if !ok {
			decodedPath, err := url.PathUnescape(relativePath)
			if err == nil && decodedPath != relativePath {
				// Try redirects again with decoded path
				if decodedPath == "gitlab-ci/.gitlab-ci-mysql" {
					redirectURL := fmt.Sprintf("%s/c/gitlab-ci/gitlab-ci-mysql/", basePath)
					http.Redirect(w, r, redirectURL, http.StatusMovedPermanently)
					return
				}
				// Handle Notepad++ exception for decoded path
				if strings.HasPrefix(decodedPath, "ide_editors/") {
					parts := strings.Split(decodedPath, "/")
					if len(parts) == 2 && parts[0] == "ide_editors" {
						slug := parts[1]
						if strings.Contains(slug, "Notepad") && strings.Contains(slug, "Cheatsheet") {
							// Decode URL-encoded ++ if present
							slug = strings.ReplaceAll(slug, "%2B%2B", "++")
							slug = strings.ReplaceAll(slug, "%2b%2b", "++")
							// Handle spaces that were converted from ++
							slug = strings.ReplaceAll(slug, "Notepad  _Cheatsheet", "Notepad++_Cheatsheet")
							slug = strings.ReplaceAll(slug, "Notepad _Cheatsheet", "Notepad++_Cheatsheet")
							// If ++ is missing, try to restore it
							if !strings.Contains(slug, "++") {
								slug = strings.ReplaceAll(slug, "Notepad_Cheatsheet", "Notepad++_Cheatsheet")
							}
							decodedPath = "ide_editors/" + slug
						}
					}
				}
				// Try route detection again with decoded path
				routeInfo, ok = utils.DetectRoute(decodedPath, "cheatsheets")
				if ok {
					relativePath = decodedPath
				}
			}
		}
		
		// Fix ParamSlug if it was corrupted by unescape (QueryUnescape converts + to spaces)
		// This must happen AFTER route detection since unescape is called during detection
		if ok && routeInfo.CategorySlug == "ide_editors" && strings.Contains(routeInfo.ParamSlug, "Notepad") && strings.Contains(routeInfo.ParamSlug, "Cheatsheet") {
			// Restore ++ if it was converted to spaces
			if !strings.Contains(routeInfo.ParamSlug, "++") {
				routeInfo.ParamSlug = strings.ReplaceAll(routeInfo.ParamSlug, "Notepad  _Cheatsheet", "Notepad++_Cheatsheet")
				routeInfo.ParamSlug = strings.ReplaceAll(routeInfo.ParamSlug, "Notepad _Cheatsheet", "Notepad++_Cheatsheet")
				routeInfo.ParamSlug = strings.ReplaceAll(routeInfo.ParamSlug, "Notepad_Cheatsheet", "Notepad++_Cheatsheet")
			}
		}
		
		if !ok {
			http.NotFound(w, r)
			return
		}

		// Check Cache
		cached, enrichedInfo := http_cache.CheckCache(w, r, db, "cheatsheets", routeInfo)
		if cached {
			return
		}

		// Dispatch Handler
		switch routeInfo.Type {
		case types.TypeIndex:
			if routeInfo.Page == 1 && relativePath != "" {
				http.Redirect(w, r, path+"/", http.StatusMovedPermanently)
				return
			}
			cheatsheets_controllers.HandleIndex(w, r, db, routeInfo.Page)

		case types.TypeCategory:
			if routeInfo.Page == 1 && relativePath != routeInfo.CategorySlug {
				http.Redirect(w, r, path+"/"+routeInfo.CategorySlug+"/", http.StatusMovedPermanently)
				return
			}
			cheatsheets_controllers.HandleCategory(w, r, db, routeInfo.CategorySlug, routeInfo.Page)

		case types.TypeDetail, types.TypeSubCategory:
			cheatsheets_controllers.HandleCheatsheet(w, r, db, routeInfo.CategorySlug, routeInfo.ParamSlug, enrichedInfo.HashID)
		}
	})
}
