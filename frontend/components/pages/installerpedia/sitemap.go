package installerpedia

import (
	"fmt"
	"html"
	"log"
	"net/http"
	"os"
	"time"

	"fdt-templ/internal/config"
	installerpedia_db "fdt-templ/internal/db/installerpedia"
)

// escapeXML escapes special XML characters
func escapeXML(s string) string {
	return html.EscapeString(s)
}

func getSiteURL() string {
	return config.GetSiteURL()
}

// GenerateSitemapXML generates the sitemap for installerpedia
func GenerateSitemapXML(db *installerpedia_db.DB) (string, error) {
	categories, err := db.GetRepoCategoriesForSitemap()
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
    <loc>%s/installerpedia/</loc>
    <lastmod>%s</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
`, siteURL, lastModIndex)

	for _, cat := range categories {
		escapedCategory := escapeXML(cat.Slug)

		// Add category URL
		xml += fmt.Sprintf(`  <url>
    <loc>%s/installerpedia/%s/</loc>
    <lastmod>%s</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
`, siteURL, escapedCategory, cat.UpdatedAt)

		// Fetch repos for this category
		repos, err := db.GetReposByCategoryForSitemap(cat.Slug)
		if err != nil {
			log.Printf("Error fetching repos for category %s: %v", cat.Slug, err)
			continue
		}

		for _, repo := range repos {
			escapedSlug := escapeXML(repo.Slug)
			xml += fmt.Sprintf(`  <url>
    <loc>%s/installerpedia/%s/%s/</loc>
    <lastmod>%s</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
`, siteURL, escapedCategory, escapedSlug, repo.UpdatedAt)
		}
	}

	xml += "</urlset>"
	return xml, nil
}

// GeneratePaginationSitemapXML generates the sitemap XML for pagination pages
func GeneratePaginationSitemapXML(db *installerpedia_db.DB) (string, error) {
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
	xml := `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/freedevtools/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`

	// For per-category pagination (repos list), we need to iterate all categories
	catItems, err := db.GetRepoCategoriesForSitemap()
	if err == nil {
		for _, cat := range catItems {
			total, err := db.GetReposCountByType(cat.Slug)
			if err != nil {
				continue
			}

			if total > 0 {
				itemsPerPage := 30
				totalPages := (total + itemsPerPage - 1) / itemsPerPage

				for i := 2; i <= totalPages; i++ {
					xml += fmt.Sprintf(`  <url>
    <loc>%s/installerpedia/%s/%d/</loc>
    <lastmod>%s</lastmod>
    <changefreq>weekly</changefreq>
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

// HandleSitemap generates and serves the sitemap for installerpedia
func HandleSitemap(w http.ResponseWriter, r *http.Request, db *installerpedia_db.DB) {
	// Try serving static file
	staticFile := "sitemaps/installerpedia/sitemap.xml"
	if _, err := os.Stat(staticFile); err == nil {
		http.ServeFile(w, r, staticFile)
		return
	}

	xml, err := GenerateSitemapXML(db)
	if err != nil {
		log.Printf("Error generating installerpedia sitemap: %v", err)
		http.Error(w, "Internal server error", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/xml")
	w.Header().Set("Cache-Control", "public, max-age=3600")
	fmt.Fprint(w, xml)
}

// HandlePaginationSitemap generates the sitemap for pagination pages
// Handles /installerpedia_pages/sitemap.xml
func HandlePaginationSitemap(w http.ResponseWriter, r *http.Request, db *installerpedia_db.DB) {
	// Try serving static file
	staticFile := "sitemaps/installerpedia_pages/sitemap.xml"
	if _, err := os.Stat(staticFile); err == nil {
		http.ServeFile(w, r, staticFile)
		return
	}

	xml, err := GeneratePaginationSitemapXML(db)
	if err != nil {
		log.Printf("Error generating installerpedia pagination sitemap: %v", err)
		http.Error(w, "Internal server error", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/xml")
	w.Header().Set("Cache-Control", "public, max-age=3600")
	fmt.Fprint(w, xml)
}
