// Package blog contains business logic for rendering blog list/detail pages.
// Routing lives in cmd/server/blog_routes.go; this file only builds view data
// and delegates rendering to components/pages/blog.
package blog

import (
	"fmt"
	"net/http"
	"strings"

	"fdt-templ/components"
	"fdt-templ/components/layouts"
	blog_pages "fdt-templ/components/pages/blog"
	blog_content "fdt-templ/internal/blog"
	"fdt-templ/internal/config"

	"github.com/a-h/templ"
)

const itemsPerPage = 12

// absoluteFeatureImage turns a root-relative feature image path into an
// absolute URL so it works in OG/Twitter/JSON-LD meta tags.
func absoluteFeatureImage(path string) string {
	if path == "" || strings.HasPrefix(path, "http://") || strings.HasPrefix(path, "https://") {
		return path
	}
	siteURL := config.GetSiteURL()
	basePath := config.GetBasePath()
	domain := strings.TrimSuffix(siteURL, basePath)
	return domain + path
}

func HandleIndex(w http.ResponseWriter, r *http.Request, store *blog_content.Store, page int) {
	posts, totalPages, total := store.Paginated(page, itemsPerPage)

	if page < 1 || page > totalPages {
		http.NotFound(w, r)
		return
	}

	basePath := config.GetBasePath()

	breadcrumbItems := []components.BreadcrumbItem{
		{Label: "Free DevTools", Href: basePath + "/"},
		{Label: "Blogs", Href: basePath + "/blog/"},
	}
	if page > 1 {
		breadcrumbItems = append(breadcrumbItems, components.BreadcrumbItem{
			Label: fmt.Sprintf("Page %d", page),
		})
	}

	title := "Blogs | Online Free DevTools by Hexmos"
	description := "Explore practical guides, tutorials, and insights on AI, developer tools, programming, and automation from FreeDevTools."
	if page > 1 {
		title = fmt.Sprintf("Blogs - Page %d | Online Free DevTools by Hexmos", page)
		description = fmt.Sprintf("Browse page %d of the FreeDevTools blog.", page)
	}

	data := blog_pages.BlogIndexData{
		Posts:           posts,
		CurrentPage:     page,
		TotalPages:      totalPages,
		TotalPosts:      total,
		BreadcrumbItems: breadcrumbItems,
		LayoutProps: layouts.BaseLayoutProps{
			Title:       title,
			Description: description,
			Canonical:   config.GetSiteURL() + "/blog/",
			Keywords:    []string{"blog", "developer tools", "AI", "automation", "programming", "tutorials"},
			PageType:    "CollectionPage",
			ShowHeader:  true,
		},
	}

	handler := templ.Handler(blog_pages.Index(data))
	handler.ServeHTTP(w, r)
}

func HandlePost(w http.ResponseWriter, r *http.Request, store *blog_content.Store, slug string) {
	post, ok := store.GetBySlug(slug)
	if !ok {
		http.NotFound(w, r)
		return
	}

	basePath := config.GetBasePath()
	breadcrumbItems := []components.BreadcrumbItem{
		{Label: "Free DevTools", Href: basePath + "/"},
		{Label: "Blogs", Href: basePath + "/blog/"},
		{Label: post.Title},
	}

	title := post.Title + " | FreeDevTools Blogs"
	description := post.Description
	if description == "" {
		description = fmt.Sprintf("Read %s on the FreeDevTools blog.", post.Title)
	}

	data := blog_pages.BlogPostData{
		Post:            post,
		BreadcrumbItems: breadcrumbItems,
		LayoutProps: layouts.BaseLayoutProps{
			Title:         title,
			Description:   description,
			Canonical:     fmt.Sprintf("%s/blog/%s/", config.GetSiteURL(), post.Slug),
			Name:          post.Title,
			Keywords:      post.Tags,
			Author:        post.Author,
			DatePublished: post.Date,
			ThumbnailUrl:  absoluteFeatureImage(post.FeatureImage),
			PageType:      "BlogPosting",
			ShowHeader:    true,
		},
	}

	handler := templ.Handler(blog_pages.Post(data))
	handler.ServeHTTP(w, r)
}
