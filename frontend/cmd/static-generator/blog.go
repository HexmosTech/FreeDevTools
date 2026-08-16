package main

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"os"
	"path/filepath"
	"strings"

	"fdt-templ/components"
	"fdt-templ/components/layouts"
	blog_pages "fdt-templ/components/pages/blog"
	blog_content "fdt-templ/internal/blog"
	"fdt-templ/internal/config"
	"fdt-templ/internal/static_cache"

	"github.com/a-h/templ"
)

const blogItemsPerPage = 12

// absoluteFeatureImage turns a root-relative feature image path into an
// absolute URL so it works in OG/Twitter/JSON-LD meta tags.
func absoluteFeatureImage(path, siteURL, basePath string) string {
	if path == "" || strings.HasPrefix(path, "http://") || strings.HasPrefix(path, "https://") {
		return path
	}
	domain := strings.TrimSuffix(siteURL, basePath)
	return domain + path
}

func GenerateBlog() {
	log.Println("Starting static generation for Blog...")

	_, err := config.LoadConfig()
	if err != nil {
		log.Printf("Config load error: %v", err)
	}

	contentPath, err := filepath.Abs("content/blog")
	if err != nil {
		log.Fatalf("Failed to resolve blog content path: %v", err)
	}
	store := blog_content.NewStore(contentPath)
	posts := store.All()

	outDir := filepath.Join("static", "freedevtools", "blog")
	if err := os.MkdirAll(outDir, 0755); err != nil {
		log.Fatalf("Failed to create out dir: %v", err)
	}

	totalPosts := len(posts)
	totalIndexPages := (totalPosts + blogItemsPerPage - 1) / blogItemsPerPage
	if totalIndexPages == 0 {
		totalIndexPages = 1
	}

	tracker := NewProgressTracker("Blog", totalIndexPages+totalPosts)
	ctx := context.Background()

	renderToFile := func(relPath string, component templ.Component, metadata *static_cache.PageMetadata) {
		defer tracker.Increment()

		pageDir := filepath.Join(outDir, relPath)
		if err := os.MkdirAll(pageDir, 0755); err != nil {
			log.Printf("Failed to create dir %s: %v", pageDir, err)
			return
		}

		filename := filepath.Join(pageDir, "index.html")
		f, err := os.Create(filename)
		if err != nil {
			log.Printf("Failed to create file %s: %v", filename, err)
			return
		}
		defer f.Close()

		if metadata != nil {
			metaBytes, err := json.Marshal(metadata)
			if err != nil {
				log.Printf("Failed to marshal metadata for %s: %v", filename, err)
			} else {
				fmt.Fprintf(f, "<!-- FDT_META: %s -->\n", string(metaBytes))
			}
		}

		if err := component.Render(ctx, f); err != nil {
			log.Printf("Failed to render %s: %v", filename, err)
		}
	}

	basePath := config.GetBasePath()
	siteURL := config.GetSiteURL()

	// Index pages
	log.Println("Generating Blog Index Pages...")
	for p := 1; p <= totalIndexPages; p++ {
		var relPath string
		if p == 1 {
			relPath = ""
		} else {
			relPath = fmt.Sprintf("page/%d/", p)
		}

		start := (p - 1) * blogItemsPerPage
		end := start + blogItemsPerPage
		if end > totalPosts {
			end = totalPosts
		}
		currentPosts := posts[start:end]

		title := "Blogs | Online Free DevTools by Hexmos"
		description := "Explore practical guides, tutorials, and insights on AI, developer tools, programming, and automation from FreeDevTools."
		if p > 1 {
			title = fmt.Sprintf("Blogs - Page %d | Online Free DevTools by Hexmos", p)
			description = fmt.Sprintf("Browse page %d of the FreeDevTools blog.", p)
		}

		breadcrumbItems := []components.BreadcrumbItem{
			{Label: "Free DevTools", Href: basePath + "/"},
			{Label: "Blogs", Href: basePath + "/blog/"},
		}
		if p > 1 {
			breadcrumbItems = append(breadcrumbItems, components.BreadcrumbItem{
				Label: fmt.Sprintf("Page %d", p),
			})
		}

		layoutProps := layouts.BaseLayoutProps{
			Title:       title,
			Description: description,
			Canonical:   siteURL + "/blog/",
			Keywords:    []string{"blog", "developer tools", "AI", "automation", "programming", "tutorials"},
			PageType:    "CollectionPage",
			ShowHeader:  true,
		}

		indexData := blog_pages.BlogIndexData{
			Posts:           currentPosts,
			CurrentPage:     p,
			TotalPages:      totalIndexPages,
			TotalPosts:      totalPosts,
			BreadcrumbItems: breadcrumbItems,
			LayoutProps:     layoutProps,
		}

		meta := &static_cache.PageMetadata{
			Title:       layoutProps.Title,
			Description: layoutProps.Description,
			Canonical:   layoutProps.Canonical,
		}

		renderToFile(relPath, blog_pages.IndexContent(indexData), meta)
	}

	// Post pages
	log.Println("Generating Blog Post Pages...")
	for _, post := range posts {
		breadcrumbItems := []components.BreadcrumbItem{
			{Label: "Free DevTools", Href: basePath + "/"},
			{Label: "Blogs", Href: basePath + "/blog/"},
			{Label: post.Title},
		}

		description := post.Description
		if description == "" {
			description = fmt.Sprintf("Read %s on the FreeDevTools blog.", post.Title)
		}

		layoutProps := layouts.BaseLayoutProps{
			Title:         post.Title + " | FreeDevTools Blogs",
			Description:   description,
			Canonical:     fmt.Sprintf("%s/blog/%s/", siteURL, post.Slug),
			Name:          post.Title,
			Keywords:      post.Tags,
			Author:        post.Author,
			DatePublished: post.Date,
			ThumbnailUrl:  absoluteFeatureImage(post.FeatureImage, siteURL, basePath),
			PageType:      "BlogPosting",
			ShowHeader:    true,
		}

		postData := blog_pages.BlogPostData{
			Post:            post,
			BreadcrumbItems: breadcrumbItems,
			LayoutProps:     layoutProps,
		}

		meta := &static_cache.PageMetadata{
			Title:       layoutProps.Title,
			Description: layoutProps.Description,
			Canonical:   layoutProps.Canonical,
		}

		renderToFile(post.Slug+"/", blog_pages.PostContent(postData), meta)
	}

	tracker.Finish()
	log.Println("Blog static generation complete.")
}
