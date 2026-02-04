package mcp_pages

import (
	"fmt"
	"html"
	"log"
	"net/http"
	"os"
	"strconv"
	"strings"
	"time"

	"fdt-templ/internal/config"
	mcp_db "fdt-templ/internal/db/mcp"
)

const (
	maxURLsPerSitemap = 5000
)

// getSiteURL returns the site URL from SITE environment variable
// or defaults to "https://hexmos.com/freedevtools"
func getSiteURL() string {
	return config.GetSiteURL()
}

// GenerateSitemapIndexXML generates the sitemap index XML string
func GenerateSitemapIndexXML(db *mcp_db.DB) (string, error) {
	// Fetch all categories
	// We use generous limits to get all of them
	categories, err := db.GetAllMcpCategories(1, 80)
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

	xml := fmt.Sprintf(`<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/freedevtools/sitemap.xsl"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>%s/mcp_pages/sitemap.xml</loc>
    <lastmod>%s</lastmod>
  </sitemap>
`, siteURL, lastModIndex)

	for _, cat := range categories {
		lastMod := cat.UpdatedAt
		if lastMod == "" {
			lastMod = lastModIndex
		}

		xml += fmt.Sprintf(`  <sitemap>
    <loc>%s/mcp/%s/sitemap.xml</loc>
    <lastmod>%s</lastmod>
  </sitemap>
`, siteURL, cat.Slug, lastMod)
	}

	xml += "</sitemapindex>"
	return xml, nil
}

// HandleSitemapIndex generates the main sitemap index listing category sitemaps
func HandleSitemapIndex(w http.ResponseWriter, r *http.Request, db *mcp_db.DB) {
	w.Header().Set("Content-Type", "application/xml")
	// Try serving static file
	staticFile := "sitemaps/mcp/sitemap.xml"
	if _, err := os.Stat(staticFile); err == nil {
		http.ServeFile(w, r, staticFile)
		return
	}

	xml, err := GenerateSitemapIndexXML(db)
	if err != nil {
		log.Printf("Error generating sitemap index: %v", err)
		http.Error(w, "Internal server error", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/xml")
	w.Header().Set("Cache-Control", "public, max-age=3600")
	fmt.Fprint(w, xml)
}

func escapeXML(s string) string {
	return html.EscapeString(s)
}

// GenerateCategorySitemapXML generates the sitemap for a specific category
func GenerateCategorySitemapXML(db *mcp_db.DB, categorySlug string) (string, int, error) {
	cat, err := db.GetMcpCategory(categorySlug)
	if err != nil || cat == nil {
		return "", 0, fmt.Errorf("category not found or error: %v", err)
	}

	siteURL := getSiteURL()
	now := time.Now().UTC().Format(time.RFC3339)

	// If count > limit, return sitemapindex
	if cat.Count > maxURLsPerSitemap {
		xml := fmt.Sprintf(`<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/freedevtools/sitemap.xsl"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`)
		numChunks := (cat.Count + maxURLsPerSitemap - 1) / maxURLsPerSitemap
		for i := 1; i <= numChunks; i++ {
			// Get max UpdatedAt for this chunk
			chunkPages, err := db.GetMcpPageKeysByCategoryPaginated(categorySlug, maxURLsPerSitemap, (i-1)*maxURLsPerSitemap)
			lastMod := now
			if err == nil && len(chunkPages) > 0 {
				// Find max updated_at in this chunk
				for _, p := range chunkPages {
					if p.UpdatedAt > lastMod {
						lastMod = p.UpdatedAt
					}
				}
			}

			xml += fmt.Sprintf(`  <sitemap>
    <loc>%s/mcp/%s/sitemap-%d.xml</loc>
    <lastmod>%s</lastmod>
  </sitemap>
`, siteURL, categorySlug, i, lastMod)
		}
		xml += "</sitemapindex>"
		return xml, numChunks, nil // Returning number of chunks if chunked sitemap
	}

	// Otherwise return regular urlset
	pages, err := db.GetMcpPageKeysByCategory(categorySlug)
	if err != nil {
		return "", 0, err
	}

	xml := fmt.Sprintf(`<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/freedevtools/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`)

	for _, page := range pages {
		lastMod := page.UpdatedAt
		if lastMod == "" {
			lastMod = now
		}

		escapedCategory := escapeXML(categorySlug)
		escapedKey := escapeXML(page.Key)

		xml += fmt.Sprintf(`  <url>
    <loc>%s/mcp/%s/%s/</loc>
    <lastmod>%s</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
`, siteURL, escapedCategory, escapedKey, lastMod)
	}

	xml += "</urlset>"
	return xml, 0, nil // 0 chunks implies simple sitemap
}

// HandleCategorySitemap generates the sitemap for a specific category
func HandleCategorySitemap(w http.ResponseWriter, r *http.Request, db *mcp_db.DB, categorySlug string) {
	w.Header().Set("Content-Type", "application/xml")
	// Try serving static file
	staticFile := fmt.Sprintf("sitemaps/mcp/%s/sitemap.xml", categorySlug)
	if _, err := os.Stat(staticFile); err == nil {
		http.ServeFile(w, r, staticFile)
		return
	}

	xml, _, err := GenerateCategorySitemapXML(db, categorySlug)
	if err != nil {
		if strings.Contains(err.Error(), "category not found") {
			http.NotFound(w, r)
		} else {
			log.Printf("Error generating category sitemap: %v", err)
			http.Error(w, "Internal server error", http.StatusInternalServerError)
		}
		return
	}

	w.Header().Set("Content-Type", "application/xml")
	w.Header().Set("Cache-Control", "public, max-age=3600")
	fmt.Fprint(w, xml)
}

// GenerateCategorySitemapChunkXML generates a chunk of urls for a category
func GenerateCategorySitemapChunkXML(db *mcp_db.DB, categorySlug string, index int) (string, error) {
	limit := maxURLsPerSitemap
	offset := (index - 1) * maxURLsPerSitemap

	pages, err := db.GetMcpPageKeysByCategoryPaginated(categorySlug, limit, offset)
	if err != nil {
		return "", err
	}

	if len(pages) == 0 {
		return "", nil
	}

	siteURL := getSiteURL()
	now := time.Now().UTC().Format(time.RFC3339)

	xml := fmt.Sprintf(`<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/freedevtools/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`)

	for _, page := range pages {
		lastMod := page.UpdatedAt
		if lastMod == "" {
			lastMod = now
		}

		escapedCategory := escapeXML(categorySlug)
		escapedKey := escapeXML(page.Key)

		xml += fmt.Sprintf(`  <url>
    <loc>%s/mcp/%s/%s/</loc>
    <lastmod>%s</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
`, siteURL, escapedCategory, escapedKey, lastMod)
	}

	xml += "</urlset>"
	return xml, nil
}

// HandleCategorySitemapChunk generates a chunk of urls for a category
func HandleCategorySitemapChunk(w http.ResponseWriter, r *http.Request, db *mcp_db.DB, categorySlug string, index int) {
	w.Header().Set("Content-Type", "application/xml")
	// Try serving static file
	staticFile := fmt.Sprintf("sitemaps/mcp/%s/sitemap-%d.xml", categorySlug, index)
	if _, err := os.Stat(staticFile); err == nil {
		http.ServeFile(w, r, staticFile)
		return
	}

	xml, err := GenerateCategorySitemapChunkXML(db, categorySlug, index)
	if err != nil {
		log.Printf("Error generating sitemap chunk: %v", err)
		http.Error(w, "Internal server error", http.StatusInternalServerError)
		return
	}

	if xml == "" {
		http.NotFound(w, r)
		return
	}

	w.Header().Set("Content-Type", "application/xml")
	w.Header().Set("Cache-Control", "public, max-age=3600")
	fmt.Fprint(w, xml)
}

// GeneratePaginationSitemapXML generates the sitemap XML for pagination pages
func GeneratePaginationSitemapXML(db *mcp_db.DB) (string, error) {
	overview, err := db.GetOverview()
	if err != nil {
		return "", err
	}

	itemsPerPage := 30
	totalPages := (overview.TotalCategoryCount + itemsPerPage - 1) / itemsPerPage
	now := time.Now().UTC().Format(time.RFC3339)
	siteURL := getSiteURL()

	lastModPagination := overview.LastUpdatedAt
	if lastModPagination == "" {
		lastModPagination = now
	}

	xml := `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/freedevtools/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`

	// Add pagination pages for main index (skip page 1)
	for i := 1; i <= totalPages; i++ {
		xml += fmt.Sprintf(`  <url>
    <loc>%s/mcp/%d/</loc>
    <lastmod>%s</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
`, siteURL, i, lastModPagination)
	}

	// Fetch all categories for category pagination URLs
	categories, err := db.GetAllMcpCategories(1, 80)
	if err != nil {
		// Log error but continue with what we have
		log.Printf("Error fetching categories for pagination sitemap: %v", err)
	} else {
		for _, cat := range categories {
			catLastMod := cat.UpdatedAt
			if catLastMod == "" {
				catLastMod = now
			}
			catTotalPages := (cat.Count + itemsPerPage - 1) / itemsPerPage
			for i := 1; i <= catTotalPages; i++ {
				priority := "0.8"
				if i == 1 {
					priority = "0.9"
				}
				xml += fmt.Sprintf(`  <url>
    <loc>%s/mcp/%s/%d/</loc>
    <lastmod>%s</lastmod>
    <changefreq>daily</changefreq>
    <priority>%s</priority>
  </url>
`, siteURL, cat.Slug, i, catLastMod, priority)
			}
		}
	}

	xml += "</urlset>"
	return xml, nil
}

// HandlePaginationSitemap generates and serves the sitemap XML for pagination pages
func HandlePaginationSitemap(w http.ResponseWriter, r *http.Request, db *mcp_db.DB) {
	w.Header().Set("Content-Type", "application/xml")
	// Try serving static file
	staticFile := "sitemaps/mcp_pages/sitemap.xml"
	if _, err := os.Stat(staticFile); err == nil {
		http.ServeFile(w, r, staticFile)
		return
	}

	xml, err := GeneratePaginationSitemapXML(db)
	if err != nil {
		log.Printf("Error generating pagination sitemap: %v", err)
		http.Error(w, "Internal server error", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/xml")
	w.Header().Set("Cache-Control", "public, max-age=3600")
	fmt.Fprint(w, xml)
}

// ParseSitemapIndex extracts the index number from sitemap-{index}.xml path
func ParseSitemapIndex(path string) (int, bool) {
	// Extract sitemap-{index}.xml from path
	if !strings.Contains(path, "sitemap-") {
		return 0, false
	}

	// Find sitemap-{number}.xml pattern
	parts := strings.Split(path, "sitemap-")
	if len(parts) != 2 {
		return 0, false
	}

	// Extract number before .xml
	numberPart := strings.TrimSuffix(parts[1], ".xml")
	// Handle trailing slash if present (though routes usually trim it?)
	numberPart = strings.TrimSuffix(numberPart, "/")

	index, err := strconv.Atoi(numberPart)
	if err != nil {
		return 0, false
	}

	return index, true
}
