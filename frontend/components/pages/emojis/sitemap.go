package emojis

import (
	"fmt"
	"log"
	"net/http"
	"strings"
	"time"

	"fdt-templ/internal/config"
	emojis_db "fdt-templ/internal/db/emojis"
)

// getSiteURL returns the site URL from SITE environment variable
func getSiteURL() string {
	return config.GetSiteURL()
}

// HandleSitemap generates and serves the sitemap for emojis
func HandleSitemap(w http.ResponseWriter, r *http.Request, db *emojis_db.DB) {
	// Fetch emojis
	emojisList, err := db.GetSitemapEmojis()
	if err != nil {
		log.Printf("Error fetching emojis for sitemap: %v", err)
		http.Error(w, "Internal server error", http.StatusInternalServerError)
		return
	}

	siteURL := getSiteURL()
	overview, err := db.GetOverview()
	if err != nil {
		log.Printf("Error fetching overview for sitemap: %v", err)
	}
	lastModRoot := ""
	if overview != nil {
		lastModRoot = overview.LastUpdatedAt
	}
	if lastModRoot == "" {
		lastModRoot = time.Now().UTC().Format(time.RFC3339)
	}

	// Convert allowed categories to set of slugs for fast lookup
	allowedSlugs := make(map[string]bool)
	for _, cat := range AllowedCategories {
		slug := CategoryToSlug(cat)
		allowedSlugs[slug] = true
	}

	var urls []string

	// Category landing page
	urls = append(urls, fmt.Sprintf(`  <url>
    <loc>%s/emojis/</loc>
    <lastmod>%s</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>`, siteURL, lastModRoot))

	// Per-category pages (only allowed ones)
	presentCategories := make(map[string]bool)
	for _, e := range emojisList {
		if e.Category != nil {
			slug := CategoryToSlug(*e.Category)
			if allowedSlugs[slug] {
				presentCategories[slug] = true
			}
		}
	}

	for slug := range presentCategories {
		urls = append(urls, fmt.Sprintf(`  <url>
    <loc>%s/emojis/%s/</loc>
    <lastmod>%s</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>`, siteURL, slug, lastModRoot))
	}

	// Individual emoji pages
	for _, e := range emojisList {
		if e.Slug == "" {
			continue
		}
		urls = append(urls, fmt.Sprintf(`  <url>
    <loc>%s/emojis/%s/</loc>
    <lastmod>%s</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>`, siteURL, e.Slug, e.UpdatedAt))
	}

	w.Header().Set("Content-Type", "application/xml")
	w.Header().Set("Cache-Control", "public, max-age=3600")

	xml := fmt.Sprintf(`<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/freedevtools/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
%s
</urlset>`, strings.Join(urls, "\n"))

	fmt.Fprint(w, xml)
}

// HandlePaginationSitemap generates and serves the sitemap XML for emoji pagination pages
// Handles /emojis_pages/sitemap.xml
func HandlePaginationSitemap(w http.ResponseWriter, r *http.Request, db *emojis_db.DB) {
	// Fetch categories with counts
	categories, err := db.GetCategoriesWithPreviewEmojis(0)
	if err != nil {
		log.Printf("Error fetching categories for pagination sitemap: %v", err)
		http.Error(w, "Internal server error", http.StatusInternalServerError)
		return
	}

	siteURL := getSiteURL()
	overview, err := db.GetOverview()
	if err != nil {
		log.Printf("Error fetching overview for pagination sitemap: %v", err)
	}
	lastMod := ""
	if overview != nil {
		lastMod = overview.LastUpdatedAt
	}
	if lastMod == "" {
		lastMod = time.Now().UTC().Format(time.RFC3339)
	}
	itemsPerPage := 36

	var urls []string

	// Convert allowed categories to set of slugs for fast lookup
	allowedSlugs := make(map[string]bool)
	for _, cat := range AllowedCategories {
		slug := CategoryToSlug(cat)
		allowedSlugs[slug] = true
	}

	for _, cat := range categories {
		slug := CategoryToSlug(cat.Category)
		if !allowedSlugs[slug] {
			continue
		}

		// Calculate total pages
		totalPages := (cat.Count + itemsPerPage - 1) / itemsPerPage

		// Add pagination pages (start from page 2)
		for i := 2; i <= totalPages; i++ {
			urls = append(urls, fmt.Sprintf(`  <url>
    <loc>%s/emojis/%s/%d/</loc>
    <lastmod>%s</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>`, siteURL, slug, i, lastMod))
		}
	}

	w.Header().Set("Content-Type", "application/xml")
	w.Header().Set("Cache-Control", "public, max-age=3600")

	xml := fmt.Sprintf(`<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/freedevtools/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
%s
</urlset>`, strings.Join(urls, "\n"))

	fmt.Fprint(w, xml)
}
