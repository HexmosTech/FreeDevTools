package tldr

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"strconv"
	"strings"
	"time"

	"fdt-templ/internal/config"

	tldr_db "fdt-templ/internal/db/tldr"
)

const (
	maxURLsPerSitemap = 5000
)

// getSiteURL returns the site URL from config
func getSiteURL() string {
	return config.GetSiteURL()
}

// GenerateSitemapIndexXML generates the sitemap index XML string and returns number of chunks
func GenerateSitemapIndexXML(db *tldr_db.DB) (string, int, error) {
	count, err := db.GetSitemapTotalCount()
	if err != nil {
		return "", 0, err
	}
	overview, err := db.GetOverview()
	if err != nil {
		return "", 0, err
	}
	lastMod := overview.LastUpdatedAt
	if lastMod == "" {
		lastMod = time.Now().UTC().Format(time.RFC3339)
	}

	// Calculate number of chunks needed
	numChunks := (count + maxURLsPerSitemap - 1) / maxURLsPerSitemap
	if numChunks == 0 {
		numChunks = 1
	}

	siteURL := getSiteURL()
	xml := fmt.Sprintf(`<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/freedevtools/sitemap.xsl"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>%s/tldr_pages/sitemap.xml</loc>
    <lastmod>%s</lastmod>
  </sitemap>
`, siteURL, lastMod)

	// Add chunked sitemaps
	for i := 1; i <= numChunks; i++ {
		xml += fmt.Sprintf(`  <sitemap>
    <loc>%s/tldr/sitemap-%d.xml</loc>
    <lastmod>%s</lastmod>
  </sitemap>
`, siteURL, i, lastMod)
	}

	xml += "</sitemapindex>"
	return xml, numChunks, nil
}

// HandleSitemapIndex generates and serves the sitemap index XML
func HandleSitemapIndex(w http.ResponseWriter, r *http.Request, db *tldr_db.DB) {
	// Try serving static file
	staticFile := "sitemaps/tldr/sitemap.xml"
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
func GenerateSitemapChunkXML(db *tldr_db.DB, index int) (string, error) {
	// Calculate chunk range
	limit := maxURLsPerSitemap
	offset := (index - 1) * limit

	urls, err := db.GetSitemapURLs(limit, offset)
	if err != nil {
		return "", err
	}

	if len(urls) == 0 {
		return "", nil // Empty chunk
	}

	overview, err := db.GetOverview()
	if err != nil {
		return "", err
	}
	lastMod := overview.LastUpdatedAt
	if lastMod == "" {
		lastMod = time.Now().UTC().Format(time.RFC3339)
	}
	siteURL := getSiteURL()

	xml := fmt.Sprintf(`<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/freedevtools/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`)

	for _, urlPath := range urls {
		relativePath := urlPath
		if strings.HasPrefix(urlPath, "/freedevtools") {
			relativePath = strings.TrimPrefix(urlPath, "/freedevtools")
		}

		finalURL := siteURL + relativePath

		priority := "0.8"
		if relativePath == "/tldr/" || relativePath == "/tldr" {
			priority = "0.9"
		}

		xml += fmt.Sprintf(`  <url>
    <loc>%s</loc>
    <lastmod>%s</lastmod>
    <changefreq>daily</changefreq>
    <priority>%s</priority>
  </url>
`, finalURL, lastMod, priority)
	}

	xml += "</urlset>"
	return xml, nil
}

// HandleSitemapChunk generates and serves a chunked sitemap XML for commands
func HandleSitemapChunk(w http.ResponseWriter, r *http.Request, db *tldr_db.DB, index int) {
	// Try serving static file
	staticFile := fmt.Sprintf("sitemaps/tldr/sitemap-%d.xml", index)
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

// GeneratePaginationSitemapXML generates the pagination sitemap XML string
func GeneratePaginationSitemapXML(db *tldr_db.DB) (string, error) {
	clusters, err := db.GetAllClusters()
	if err != nil {
		return "", err
	}

	overview, err := db.GetOverview()
	if err != nil {
		return "", err
	}
	lastMod := overview.LastUpdatedAt
	if lastMod == "" {
		lastMod = time.Now().UTC().Format(time.RFC3339)
	}
	siteURL := getSiteURL()

	xml := fmt.Sprintf(`<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/freedevtools/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`)

	itemsPerPage := 30

	// Main index pagination
	totalPlatforms := len(clusters)
	totalPages := (totalPlatforms + itemsPerPage - 1) / itemsPerPage

	for i := 2; i <= totalPages; i++ {
		xml += fmt.Sprintf(`  <url>
    <loc>%s/tldr/%d/</loc>
    <lastmod>%s</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
`, siteURL, i, lastMod)
	}

	// Platform pagination
	for _, cluster := range clusters {
		totalCommands := cluster.Count
		clusterPages := (totalCommands + itemsPerPage - 1) / itemsPerPage

		for i := 2; i <= clusterPages; i++ {
			xml += fmt.Sprintf(`  <url>
    <loc>%s/tldr/%s/%d/</loc>
    <lastmod>%s</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
`, siteURL, cluster.Name, i, cluster.UpdatedAt)
		}
	}

	xml += "</urlset>"
	return xml, nil
}

// HandlePaginationSitemap generates and serves the sitemap XML for pagination pages
func HandlePaginationSitemap(w http.ResponseWriter, r *http.Request, db *tldr_db.DB) {
	// Try serving static file
	staticFile := "sitemaps/tldr_pages/sitemap.xml"
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
	if !strings.Contains(path, "sitemap-") {
		return 0, false
	}
	parts := strings.Split(path, "sitemap-")
	if len(parts) != 2 {
		return 0, false
	}
	numberPart := strings.TrimSuffix(parts[1], ".xml")
	index, err := strconv.Atoi(numberPart)
	if err != nil {
		return 0, false
	}
	return index, true
}
