package png_icons

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"strconv"
	"strings"
	"time"

	"fdt-templ/internal/config"
	"fdt-templ/internal/db/png_icons"
)

const (
	maxURLsPerSitemap = 5000
)

func getSiteURL() string {
	return config.GetSiteURL()
}

// GenerateSitemapIndexXML generates the sitemap index XML string and returns number of chunks
func GenerateSitemapIndexXML(db *png_icons.DB) (string, int, error) {
	// Calculate total icons to determine number of icon sitemaps
	totalIcons, err := db.GetTotalIcons()
	if err != nil {
		return "", 0, err
	}

	// Calculate number of icon chunks needed
	limit := maxURLsPerSitemap
	numIconChunks := (totalIcons + limit - 1) / limit

	overview, err := db.GetOverview()
	if err != nil {
		return "", 0, err
	}
	lastModIndex := overview.LastUpdatedAt
	if lastModIndex == "" {
		lastModIndex = time.Now().UTC().Format(time.RFC3339)
	}
	siteURL := getSiteURL()

	xml := fmt.Sprintf(`<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/freedevtools/sitemap.xsl"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>%s/png_icons_pages/sitemap.xml</loc>
    <lastmod>%s</lastmod>
  </sitemap>
  <sitemap>
    <loc>%s/png_icons/sitemap-1.xml</loc>
    <lastmod>%s</lastmod>
  </sitemap>
`, siteURL, lastModIndex, siteURL, lastModIndex)

	// Add icon sitemaps starting from sitemap-2
	for i := 0; i < numIconChunks; i++ {
		sitemapIndex := i + 2
		xml += fmt.Sprintf(`  <sitemap>
    <loc>%s/png_icons/sitemap-%d.xml</loc>
    <lastmod>%s</lastmod>
  </sitemap>
`, siteURL, sitemapIndex, lastModIndex)
	}

	xml += "</sitemapindex>"
	return xml, numIconChunks + 1, nil // +1 for the categories sitemap (sitemap-1.xml)
}

// HandleSitemapIndex generates and serves the sitemap index XML
// This is the main sitemap.xml that lists all other sitemaps
func HandleSitemapIndex(w http.ResponseWriter, r *http.Request, db *png_icons.DB) {
	// Try serving static file
	staticFile := "sitemaps/png_icons/sitemap.xml"
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

// GenerateSitemapChunkXML generates a chunked sitemap XML string
func GenerateSitemapChunkXML(db *png_icons.DB, index int) (string, error) {
	var icons []png_icons.SitemapIcon
	var err error

	if index == 1 {
		// Sitemap 1: Categories / Clusters + Root
		icons, err = db.GetSitemapCategories()
	} else if index > 1 {
		// Sitemap 2+: Icons
		limit := maxURLsPerSitemap
		// index 2 -> offset 0
		offset := (index - 2) * limit
		icons, err = db.GetSitemapIconsOnly(limit, offset)
	} else {
		return "", fmt.Errorf("invalid sitemap index: %d", index)
	}

	if err != nil {
		return "", err
	}

	if len(icons) == 0 {
		return "", nil // Empty chunk
	}

	overview, err := db.GetOverview()
	if err != nil {
		return "", err
	}
	lastModRoot := overview.LastUpdatedAt
	if lastModRoot == "" {
		lastModRoot = time.Now().UTC().Format(time.RFC3339)
	}
	siteURL := getSiteURL()

	xml := `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/freedevtools/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
`

	for _, icon := range icons {
		// 1. Root
		if icon.Name == "root" && icon.Cluster == "root" {
			xml += fmt.Sprintf(`  <url>
    <loc>%s/png_icons/</loc>
    <lastmod>%s</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
`, siteURL, lastModRoot)
			continue
		}

		// 2. Clusters (Category Pages)
		if icon.CategoryName == "cluster_page" {
			xml += fmt.Sprintf(`  <url>
    <loc>%s/png_icons/%s/</loc>
    <lastmod>%s</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
`, siteURL, icon.Cluster, icon.UpdatedAt)
			continue
		}

		// 3. Icons
		category := icon.CategoryName
		if category == "" {
			category = icon.Cluster
		}

		// Construct URL from category and name
		finalURL := fmt.Sprintf("%s/png_icons/%s/%s/", siteURL, category, icon.Name)

		xml += fmt.Sprintf(`  <url>
    <loc>%s</loc>
    <lastmod>%s</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
    <image:image xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
      <image:loc>%s/png_icons/%s/%s.png</image:loc>
      <image:title>Free %s PNG Icon Download</image:title>
    </image:image>
  </url>
`, finalURL, icon.UpdatedAt, siteURL, category, icon.Name, icon.Name)
	}

	xml += "</urlset>"
	return xml, nil
}

// HandleSitemapChunk generates and serves a chunked sitemap XML for icons
// Handles /png_icons/sitemap-{index}.xml
func HandleSitemapChunk(w http.ResponseWriter, r *http.Request, db *png_icons.DB, index int) {
	// Try serving static file
	staticFile := fmt.Sprintf("sitemaps/png_icons/sitemap-%d.xml", index)
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

// GeneratePaginationSitemapXML generates the sitemap XML for pagination pages
func GeneratePaginationSitemapXML(db *png_icons.DB) (string, error) {
	totalCategories, err := db.GetTotalClusters()
	if err != nil {
		return "", err
	}

	itemsPerPage := 30
	totalPages := (totalCategories + itemsPerPage - 1) / itemsPerPage

	overview, err := db.GetOverview()
	if err != nil {
		return "", err
	}
	lastMod := overview.LastUpdatedAt
	if lastMod == "" {
		lastMod = time.Now().UTC().Format(time.RFC3339)
	}

	siteURL := getSiteURL()

	xml := `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/freedevtools/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`

	// Add pagination pages (skip page 1 as it's the same as root)
	for i := 2; i <= totalPages; i++ {
		xml += fmt.Sprintf(`  <url>
    <loc>%s/png_icons/%d/</loc>
    <lastmod>%s</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
`, siteURL, i, lastMod)
	}

	xml += "</urlset>"
	return xml, nil
}

// HandlePaginationSitemap generates and serves the sitemap XML for pagination pages
// Handles /png_icons_pages/sitemap.xml
func HandlePaginationSitemap(w http.ResponseWriter, r *http.Request, db *png_icons.DB) {
	// Try serving static file
	staticFile := "sitemaps/png_icons_pages/sitemap.xml"
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
	index, err := strconv.Atoi(numberPart)
	if err != nil {
		return 0, false
	}

	return index, true
}
