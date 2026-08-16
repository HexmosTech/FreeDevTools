// Package main - Blog Routes
//
// This file handles routing for Blog pages. It defines URL patterns and
// delegates all business logic to handlers in internal/controllers/blog/.
//
// IMPORTANT: This file should ONLY handle routing logic. All content loading
// and business logic MUST be done in internal/controllers/blog/handlers.go.
package main

import (
	"net/http"
	"strconv"
	"strings"

	blog_pages "fdt-templ/components/pages/blog"
	blog_content "fdt-templ/internal/blog"
	blog_controllers "fdt-templ/internal/controllers/blog"
)

func setupBlogRoutes(mux *http.ServeMux, store *blog_content.Store) {
	pathPrefix := basePath + "/blog"

	mux.HandleFunc(pathPrefix+"/", func(w http.ResponseWriter, r *http.Request) {
		path := r.URL.Path

		if strings.HasSuffix(path, "/sitemap.xml/") {
			http.Redirect(w, r, strings.TrimSuffix(path, "/"), http.StatusMovedPermanently)
			return
		}
		if path == pathPrefix+"/sitemap.xml" {
			blog_pages.HandleSitemap(w, r, store)
			return
		}

		relativePath := strings.TrimSuffix(strings.TrimPrefix(path, pathPrefix+"/"), "/")

		// Index: /blog/ or /blog/page/N/
		if relativePath == "" {
			blog_controllers.HandleIndex(w, r, store, 1)
			return
		}

		if strings.HasPrefix(relativePath, "page/") {
			pageStr := strings.TrimPrefix(relativePath, "page/")
			page, err := strconv.Atoi(pageStr)
			if err != nil || page < 1 {
				http.NotFound(w, r)
				return
			}
			if page == 1 {
				http.Redirect(w, r, pathPrefix+"/", http.StatusMovedPermanently)
				return
			}
			blog_controllers.HandleIndex(w, r, store, page)
			return
		}

		// Detail: /blog/{slug}/ — no nested slashes allowed
		if strings.Contains(relativePath, "/") {
			http.NotFound(w, r)
			return
		}
		blog_controllers.HandlePost(w, r, store, relativePath)
	})
}
