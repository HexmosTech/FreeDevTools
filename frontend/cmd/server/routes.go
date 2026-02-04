package main

import (
	"log"
	"net/http"
	"net/http/pprof"
	"net/url"
	"os"
	"path/filepath"
	"strconv"
	"strings"

	"fdt-templ/components/pages"
	cheatsheets_pages "fdt-templ/components/pages/cheatsheets"
	emojis_pages "fdt-templ/components/pages/emojis"
	installerpedia_pages "fdt-templ/components/pages/installerpedia"
	static_pages "fdt-templ/components/pages/static"
	pro_pages "fdt-templ/components/pages/static/pro"
	"fdt-templ/internal/config"
	"fdt-templ/internal/db/banner"
	"fdt-templ/internal/db/bookmarks"
	"fdt-templ/internal/db/cheatsheets"
	"fdt-templ/internal/db/emojis"
	"fdt-templ/internal/db/installerpedia"
	"fdt-templ/internal/db/man_pages"
	"fdt-templ/internal/db/mcp"
	"fdt-templ/internal/db/png_icons"
	"fdt-templ/internal/db/svg_icons"
	"fdt-templ/internal/db/tldr"
	"fdt-templ/internal/db/tools"

	"github.com/a-h/templ"
)

var (
	itemsPerPage = 30
	basePath     = GetBasePath()
)

var debugLog = os.Getenv("DEBUG") == "1"

func init() {
	// Initialize debug logging flag
}

// matchIndex checks if the path is the index page (empty after base path)
func matchIndex(path string) bool {
	return path == ""
}

// matchPagination checks if the path is a pagination number and returns the page number
func matchPagination(path string) (int, bool) {
	page, err := strconv.Atoi(path)
	if err != nil {
		return 0, false
	}
	return page, true
}

// matchCategory checks if the path is a category (single segment) and returns the category name
func matchCategory(path string) (string, bool) {
	parts := strings.Split(path, "/")
	if len(parts) == 1 && parts[0] != "" {
		category, err := url.QueryUnescape(parts[0])
		if err != nil {
			category = parts[0] // Fallback to original if decode fails
		}
		return category, true
	}
	return "", false
}

// matchIcon checks if the path is an icon (two segments) and returns category and icon name
func matchIcon(path string) (category, iconName string, ok bool) {
	parts := strings.Split(path, "/")
	if len(parts) == 2 {
		category, err := url.QueryUnescape(parts[0])
		if err != nil {
			category = parts[0]
		}
		iconName, err := url.QueryUnescape(parts[1])
		if err != nil {
			iconName = parts[1]
		}
		// Strip trailing dashes from icon name only
		iconName = strings.TrimSuffix(iconName, "-")
		return category, iconName, true
	}
	return "", "", false
}

// matchCategoryPagination checks if the path is a category with pagination (two segments, second is number)
func matchCategoryPagination(path string) (category string, page int, ok bool) {
	parts := strings.Split(path, "/")
	if len(parts) == 2 {
		page, err := strconv.Atoi(parts[1])
		if err == nil {
			category, err := url.QueryUnescape(parts[0])
			if err != nil {
				category = parts[0]
			}
			return category, page, true
		}
	}
	return "", 0, false
}

// Cheatsheets route matching functions are now in cheatsheets_routes.go

func setupRoutes(mux *http.ServeMux, svgIconsDB *svg_icons.DB, manPagesDB *man_pages.DB, emojisDB *emojis.DB, mcpDB *mcp.DB, pngIconsDB *png_icons.DB, cheatsheetsDB *cheatsheets.DB, tldrDB *tldr.DB, installerpediaDB *installerpedia.DB, toolsConfig *tools.Config, fdtPgDB *bookmarks.DB) {
	// Main index page
	mux.HandleFunc(basePath+"/", func(w http.ResponseWriter, r *http.Request) {
		if debugLog {
			log.Printf("Main handler called: %s", r.URL.Path)
		}

		if r.URL.Path != basePath+"/" {
			// Check if it's the root sitemap
			if r.URL.Path == basePath+"/sitemap.xml" {
				pages.HandleRootSitemap(w, r)
				return
			}

			// Check if it's a known static file or asset
			if strings.HasPrefix(r.URL.Path, basePath+"/static/") ||
				strings.HasPrefix(r.URL.Path, basePath+"/assets/") {
				return // Let file server handle it
			}
			http.NotFound(w, r)
			return
		}
		// Get banner if bannerdb is enabled
		adsEnabled := GetAdsEnabled()
		enabledAdTypes := config.GetEnabledAdTypes("index")
		var bannerData *banner.Banner
		if adsEnabled && enabledAdTypes["bannerdb"] {
			bannerData, _ = banner.GetRandomBannerByType("text")
		}
		handler := templ.Handler(pages.Index(bannerData))
		handler.ServeHTTP(w, r)
	})

	// Dynamic Tools route
	setupToolsRoutes(mux, toolsConfig)

	// SVG Icons routes
	setupSVGIconsRoutes(mux, svgIconsDB)

	// SVG Icons Pages routes (for pagination sitemap)
	setupSVGIconsPagesRoutes(mux, svgIconsDB)

	// PNG Icons routes
	setupPngIconsRoutes(mux, pngIconsDB)

	// PNG Icons Pages routes (for pagination sitemap)
	setupPngIconsPagesRoutes(mux, pngIconsDB)

	// MCP Routes
	setupMcpRoutes(mux, mcpDB)
	setupMcpPagesRoutes(mux, mcpDB)

	// Man Pages routes
	setupManPagesRoutes(mux, manPagesDB)
	setupManPagesPagesRoutes(mux, manPagesDB)

	// Static files (register before emoji routes to ensure /public/ is handled)
	setupStaticRoutes(mux)
	// Cheatsheets routes
	setupCheatsheetsRoutes(mux, cheatsheetsDB)
	setupCheatsheetsPagesRoutes(mux, cheatsheetsDB)

	// Emojis routes
	setupEmojisRoutes(mux, emojisDB)
	setupEmojisPagesRoutes(mux, emojisDB)

	// Installerpedia Routes
	setupInstallerpediaRoutes(mux, installerpediaDB)
	setupInstallerpediaPagesRoutes(mux, installerpediaDB)

	// TLDR routes
	setupTldrRoutes(mux, tldrDB)

	// Bookmark routes
	setupBookmarkRoutes(mux, fdtPgDB)

	// Temporary Sitemap
	setupTemporarySitemapRoutes(mux)

	// Terms of Use
	mux.HandleFunc(basePath+"/termsofuse/", func(w http.ResponseWriter, r *http.Request) {
		handler := templ.Handler(static_pages.TermsOfUse())
		handler.ServeHTTP(w, r)
	})

	// Pro page
	mux.HandleFunc(basePath+"/pro/", func(w http.ResponseWriter, r *http.Request) {
		handler := templ.Handler(pro_pages.Pro())
		handler.ServeHTTP(w, r)
	})

	// Bookmarks page
	mux.HandleFunc(basePath+"/pro/bookmarks/", func(w http.ResponseWriter, r *http.Request) {
		handler := templ.Handler(pro_pages.Bookmarks())
		handler.ServeHTTP(w, r)
	})

	// Profiling routes
	mux.HandleFunc("/debug/pprof/", pprof.Index)
	mux.HandleFunc("/debug/pprof/cmdline", pprof.Cmdline)
	mux.HandleFunc("/debug/pprof/profile", pprof.Profile)
	mux.HandleFunc("/debug/pprof/symbol", pprof.Symbol)
	mux.HandleFunc("/debug/pprof/trace", pprof.Trace)
}

func setupCheatsheetsPagesRoutes(mux *http.ServeMux, db *cheatsheets.DB) {
	mux.HandleFunc(basePath+"/c_pages/", func(w http.ResponseWriter, r *http.Request) {
		// Pagination sitemap
		if strings.HasSuffix(r.URL.Path, "/sitemap.xml") {
			cheatsheets_pages.HandlePaginationSitemap(w, r, db)
			return
		}
		http.NotFound(w, r)
	})
}

func setupEmojisPagesRoutes(mux *http.ServeMux, db *emojis.DB) {
	mux.HandleFunc(basePath+"/emojis_pages/", func(w http.ResponseWriter, r *http.Request) {
		// Pagination sitemap
		if strings.HasSuffix(r.URL.Path, "/sitemap.xml") {
			emojis_pages.HandlePaginationSitemap(w, r, db)
			return
		}
		http.NotFound(w, r)
	})
}

func setupInstallerpediaPagesRoutes(mux *http.ServeMux, db *installerpedia.DB) {
	mux.HandleFunc(basePath+"/installerpedia_pages/", func(w http.ResponseWriter, r *http.Request) {
		// Pagination sitemap
		if strings.HasSuffix(r.URL.Path, "/sitemap.xml") {
			installerpedia_pages.HandlePaginationSitemap(w, r, db)
			return
		}
		http.NotFound(w, r)
	})
}

func setupTemporarySitemapRoutes(mux *http.ServeMux) {
	mux.HandleFunc(basePath+"/temporary/sitemap.xml", func(w http.ResponseWriter, r *http.Request) {
		sitemapPath, err := filepath.Abs("sitemaps/temporary/sitemap.xml")
		if err != nil {
			log.Printf("Failed to resolve temporary sitemap path: %v", err)
			http.NotFound(w, r)
			return
		}
		http.ServeFile(w, r, sitemapPath)
	})
}

func setupStaticRoutes(mux *http.ServeMux) {
	// Static SVG files are now handled in setupSVGIconsRoutes
	// This function is kept for potential future static assets

	// Serve public directory (for emoji images)
	publicPath, err := filepath.Abs("public")
	if err != nil {
		log.Printf("[STATIC] Failed to get absolute path for public directory: %v", err)
		return
	}
	log.Printf("[STATIC] Serving public directory from: %s", publicPath)

	// Wrap FileServer to set correct Content-Type for SVGs
	publicFS := http.FileServer(http.Dir(publicPath))
	mux.HandleFunc(basePath+"/public/", func(w http.ResponseWriter, r *http.Request) {
		// Set correct Content-Type for SVGs
		if strings.HasSuffix(r.URL.Path, ".svg") {
			w.Header().Set("Content-Type", "image/svg+xml")
		} else if strings.HasSuffix(r.URL.Path, ".png") {
			w.Header().Set("Content-Type", "image/png")
		}
		http.StripPrefix(basePath+"/public/", publicFS).ServeHTTP(w, r)
	})
}
