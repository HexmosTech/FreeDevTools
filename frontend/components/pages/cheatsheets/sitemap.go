package cheatsheets

import (
	"fmt"
	"html"
	"log"
	"net/http"
	"os"
	"time"

	"fdt-templ/internal/config"
	cheatsheets_db "fdt-templ/internal/db/cheatsheets"
)

// escapeXML escapes special XML characters
func escapeXML(s string) string {
	return html.EscapeString(s)
}

func getSiteURL() string {
	return config.GetSiteURL()
}

// GenerateSitemapXML generates the global sitemap for cheatsheets
func GenerateSitemapXML(db *cheatsheets_db.DB) (string, error) {
	categories, err := db.GetAllCategoriesSitemap()
	if err != nil {
		return "", err
	}

	overview, err := db.GetOverview()
	if err != nil {
		return "", err
	}

	siteURL := getSiteURL()
	lastModIndex := overview.LastUpdatedAt
	if lastModIndex == "" {
		lastModIndex = time.Now().UTC().Format(time.RFC3339)
	}

	// Start XML
	xml := fmt.Sprintf(`<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/freedevtools/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>%s/c/</loc>
    <lastmod>%s</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
`, siteURL, lastModIndex)

	for _, cat := range categories {
		escapedCatSlug := escapeXML(cat.Slug)

		// Add category URL
		xml += fmt.Sprintf(`  <url>
    <loc>%s/c/%s/</loc>
    <lastmod>%s</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.6</priority>
  </url>
`, siteURL, escapedCatSlug, cat.UpdatedAt)

		// Fetch cheatsheets for this category
		cheatsheets, err := db.GetCheatsheetsByCategorySitemap(cat.Slug)
		if err != nil {
			log.Printf("Error fetching cheatsheets for category %s: %v", cat.Slug, err)
			continue
		}

		for _, cs := range cheatsheets {
			escapedCsSlug := escapeXML(cs.Slug)
			xml += fmt.Sprintf(`  <url>
    <loc>%s/c/%s/%s/</loc>
    <lastmod>%s</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
`, siteURL, escapedCatSlug, escapedCsSlug, cs.UpdatedAt)
		}
	}

	xml += "</urlset>"
	return xml, nil
}

// HandleSitemap generates and serves the global sitemap for cheatsheets
func HandleSitemap(w http.ResponseWriter, r *http.Request, db *cheatsheets_db.DB) {
	// Try serving static file
	staticFile := "sitemaps/cheatsheets/sitemap.xml"
	if _, err := os.Stat(staticFile); err == nil {
		http.ServeFile(w, r, staticFile)
		return
	}

	xml, err := GenerateSitemapXML(db)
	if err != nil {
		log.Printf("Error generating cheatsheets sitemap: %v", err)
		http.Error(w, "Internal server error", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/xml")
	w.Header().Set("Cache-Control", "public, max-age=3600")
	fmt.Fprint(w, xml)
}

// GeneratePaginationSitemapXML generates the sitemap XML for pagination pages
func GeneratePaginationSitemapXML(db *cheatsheets_db.DB) (string, error) {
	overview, err := db.GetOverview()
	if err != nil {
		return "", err
	}

	siteURL := getSiteURL()
	lastMod := overview.LastUpdatedAt
	if lastMod == "" {
		lastMod = time.Now().UTC().Format(time.RFC3339)
	}

	// Start XML
	xml := fmt.Sprintf(`<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/freedevtools/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`)

	// Fetch all categories to calculate pagination
	categoriesCount, err := db.GetTotalCategories()
	if err != nil {
		log.Printf("Error fetching total categories: %v", err)
	} else {
		itemsPerPage := 30
		totalPages := (categoriesCount + itemsPerPage - 1) / itemsPerPage

		for i := 2; i <= totalPages; i++ {
			xml += fmt.Sprintf(`  <url>
    <loc>%s/c/%d/</loc>
    <lastmod>%s</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
`, siteURL, i, lastMod)
		}
	}

	// For per-category pagination (cheatsheets list), we need to iterate all categories
	catItems, err := db.GetAllCategoriesSitemap()
	if err == nil {
		for _, cat := range catItems {
			_, total, err := db.GetCheatsheetsByCategory(cat.Slug, 1, 1)
			if err != nil {
				continue
			}

			if total > 0 {
				itemsPerPage := 30
				totalPages := (total + itemsPerPage - 1) / itemsPerPage

				for i := 2; i <= totalPages; i++ {
					xml += fmt.Sprintf(`  <url>
    <loc>%s/c/%s/%d/</loc>
    <lastmod>%s</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
`, siteURL, cat.Slug, i, cat.UpdatedAt)
				}
			}
		}
	}

	xml += "</urlset>"
	return xml, nil
}

// HandlePaginationSitemap generates the sitemap for pagination pages
// Handles /c_pages/sitemap.xml
func HandlePaginationSitemap(w http.ResponseWriter, r *http.Request, db *cheatsheets_db.DB) {
	// Try serving static file
	staticFile := "sitemaps/cheatsheets_pages/sitemap.xml"
	if _, err := os.Stat(staticFile); err == nil {
		http.ServeFile(w, r, staticFile)
		return
	}

	xml, err := GeneratePaginationSitemapXML(db)
	if err != nil {
		log.Printf("Error generating cheatsheets pagination sitemap: %v", err)
		http.Error(w, "Internal server error", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/xml")
	w.Header().Set("Cache-Control", "public, max-age=3600")
	fmt.Fprint(w, xml)
}
