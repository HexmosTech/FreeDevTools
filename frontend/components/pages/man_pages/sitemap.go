package man_pages

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
	"fdt-templ/internal/db/man_pages"
)

const (
	maxURLsPerSitemap = 5000
)

func getSiteURL() string {
	return config.GetSiteURL()
}

// escapeXML escapes special XML characters
func escapeXML(s string) string {
	return html.EscapeString(s)
}

// GenerateSitemapIndexXML generates the sitemap index XML string
func GenerateSitemapIndexXML(db *man_pages.DB) (string, int, error) {
	overview, err := db.GetOverview()
	if err != nil {
		return "", 0, err
	}

	totalCount := 0
	if overview != nil {
		totalCount = overview.TotalCount
	}

	lastmod := overview.LastUpdatedAt
	if lastmod == "" {
		lastmod = time.Now().UTC().Format(time.RFC3339)
	}

	siteURL := getSiteURL()

	// Calculate number of chunks needed
	numChunks := (totalCount + maxURLsPerSitemap - 1) / maxURLsPerSitemap
	if numChunks == 0 {
		numChunks = 1
	}

	xml := fmt.Sprintf(`<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/freedevtools/sitemap.xsl"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>%s/man-pages_pages/sitemap.xml</loc>
    <lastmod>%s</lastmod>
  </sitemap>
`, siteURL, lastmod)

	// Add chunked sitemaps
	for i := 1; i <= numChunks; i++ {
		xml += fmt.Sprintf(`  <sitemap>
    <loc>%s/man-pages/sitemap-%d.xml</loc>
    <lastmod>%s</lastmod>
  </sitemap>
`, siteURL, i, lastmod)
	}

	xml += "</sitemapindex>"
	return xml, numChunks, nil
}

func HandleSitemapIndex(w http.ResponseWriter, r *http.Request, db *man_pages.DB) {
	// Try serving static file
	staticFile := "sitemaps/man_pages/sitemap.xml"
	if _, err := os.Stat(staticFile); err == nil {
		http.ServeFile(w, r, staticFile)
		return
	}

	xml, _, err := GenerateSitemapIndexXML(db)
	if err != nil {
		log.Printf("Error generating sitemap index: %v", err)
		http.Error(w, "Internal server error", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/xml")
	w.Header().Set("Cache-Control", "public, max-age=3600")
	fmt.Fprint(w, xml)
}

// GenerateSitemapChunkXML generates a chunk of urls
func GenerateSitemapChunkXML(db *man_pages.DB, index int) (string, error) {
	// Calculate offset and limit
	offset := (index - 1) * maxURLsPerSitemap
	limit := maxURLsPerSitemap

	// Fetch man pages for this chunk
	manPages, err := db.GetAllManPagesPaginated(limit, offset)
	if err != nil {
		return "", err
	}

	// Check if check is empty and not the first chunk
	if len(manPages) == 0 && index > 1 {
		return "", nil
	}

	overview, _ := db.GetOverview()
	lastmodOverview := ""
	if overview != nil {
		lastmodOverview = overview.LastUpdatedAt
	}
	if lastmodOverview == "" {
		lastmodOverview = time.Now().UTC().Format(time.RFC3339)
	}
	siteURL := getSiteURL()

	xml := fmt.Sprintf(`<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/freedevtools/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`)

	// If this is the first sitemap, add index pages
	if index == 1 {
		// 1. Root Man Pages Index
		xml += fmt.Sprintf(`  <url>
    <loc>%s/man-pages/</loc>
    <lastmod>%s</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
`, siteURL, lastmodOverview)

		// 2. Categories
		categories, err := db.GetAllCategoriesForSitemap()
		if err == nil {
			for _, cat := range categories {
				escapedCategory := escapeXML(cat.Name)
				lastmod := cat.UpdatedAt
				if lastmod == "" {
					lastmod = lastmodOverview
				}
				xml += fmt.Sprintf(`  <url>
    <loc>%s/man-pages/%s/</loc>
    <lastmod>%s</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
`, siteURL, escapedCategory, lastmod)
			}
		}

		// 3. Subcategories
		subcategories, err := db.GetAllSubCategoriesForSitemap()
		if err == nil {
			for _, sc := range subcategories {
				escapedCategory := escapeXML(sc.MainCategory)
				escapedSubCategory := escapeXML(sc.SubCategory)
				lastmod := sc.UpdatedAt
				if lastmod == "" {
					lastmod = lastmodOverview
				}
				xml += fmt.Sprintf(`  <url>
    <loc>%s/man-pages/%s/%s/</loc>
    <lastmod>%s</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.6</priority>
  </url>
`, siteURL, escapedCategory, escapedSubCategory, lastmod)
			}
		}
	}

	for _, manPage := range manPages {
		escapedCategory := escapeXML(manPage.MainCategory)
		escapedSubCategory := escapeXML(manPage.SubCategory)
		escapedSlug := escapeXML(manPage.Slug)

		lastmod := manPage.UpdatedAt
		if lastmod == "" {
			lastmod = lastmodOverview
		}
		xml += fmt.Sprintf(`  <url>
    <loc>%s/man-pages/%s/%s/%s/</loc>
    <lastmod>%s</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
`, siteURL, escapedCategory, escapedSubCategory, escapedSlug, lastmod)
	}

	xml += "</urlset>"
	return xml, nil
}

func HandleSitemapChunk(w http.ResponseWriter, r *http.Request, db *man_pages.DB, index int) {
	// Try serving static file
	staticFile := fmt.Sprintf("sitemaps/man_pages/sitemap-%d.xml", index)
	if _, err := os.Stat(staticFile); err == nil {
		http.ServeFile(w, r, staticFile)
		return
	}

	xml, err := GenerateSitemapChunkXML(db, index)
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

// GeneratePaginationSitemapXML generates the sitemap for pagination pages
func GeneratePaginationSitemapXML(db *man_pages.DB) (string, error) {
	siteURL := getSiteURL()
	overview, _ := db.GetOverview()
	lastmodOverview := ""
	if overview != nil {
		lastmodOverview = overview.LastUpdatedAt
	}
	if lastmodOverview == "" {
		lastmodOverview = time.Now().UTC().Format(time.RFC3339)
	}

	xml := `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/freedevtools/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`

	categories, err := db.GetAllCategoriesForSitemap()
	if err != nil {
		// Just log, don't fail essentially used logic in original code
		return "", err
	}

	itemsPerPage := 12
	for _, cat := range categories {
		if cat.SubCategoryCount > itemsPerPage {
			totalPages := (cat.SubCategoryCount + itemsPerPage - 1) / itemsPerPage
			for i := 2; i <= totalPages; i++ {
				escapedCategory := escapeXML(cat.Name)
				lastmod := cat.UpdatedAt
				if lastmod == "" {
					lastmod = lastmodOverview
				}
				xml += fmt.Sprintf(`  <url>
    <loc>%s/man-pages/%s/%d/</loc>
    <lastmod>%s</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
`, siteURL, escapedCategory, i, lastmod)
			}
		}
	}

	subcategories, err := db.GetAllSubCategoriesForSitemap()
	if err != nil {
		// Just log
		return "", err
	}

	itemsPerPage = 20
	for _, sc := range subcategories {
		if sc.Count > itemsPerPage {
			totalPages := (sc.Count + itemsPerPage - 1) / itemsPerPage
			for i := 2; i <= totalPages; i++ {
				escapedCategory := escapeXML(sc.MainCategory)
				escapedSubCategory := escapeXML(sc.SubCategory)
				lastmod := sc.UpdatedAt
				if lastmod == "" {
					lastmod = lastmodOverview
				}
				xml += fmt.Sprintf(`  <url>
    <loc>%s/man-pages/%s/%s/%d/</loc>
    <lastmod>%s</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
`, siteURL, escapedCategory, escapedSubCategory, i, lastmod)
			}
		}
	}

	xml += "</urlset>"
	return xml, nil
}

// HandlePaginationSitemap generates the sitemap for pagination pages
// Handles /man-pages_pages/sitemap.xml
func HandlePaginationSitemap(w http.ResponseWriter, r *http.Request, db *man_pages.DB) {
	// Try serving static file
	staticFile := "sitemaps/man_pages_pages/sitemap.xml"
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

func ParseSitemapIndex(path string) (int, bool) {
	if !strings.Contains(path, "sitemap-") {
		return 0, false
	}

	parts := strings.Split(path, "sitemap-")
	if len(parts) != 2 {
		return 0, false
	}

	// Extract number before .xml
	numberPart := strings.TrimSuffix(parts[1], ".xml")
	index, err := strconv.Atoi(numberPart)
	if err != nil {
		return 0, false
	}

	return index, true
}
