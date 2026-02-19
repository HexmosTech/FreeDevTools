package main

import (
	"context"
	"flag"
	"log"
	"net/http"
	"os"
	"os/signal"
	"path/filepath"
	"runtime/pprof"
	"syscall"

	// "runtime"
	"time"

	"fdt-templ/internal/db/bookmarks"
	"fdt-templ/internal/db/cheatsheets"
	"fdt-templ/internal/db/emojis"
	"fdt-templ/internal/db/installerpedia"
	"fdt-templ/internal/db/man_pages"
	"fdt-templ/internal/db/mcp"
	"fdt-templ/internal/db/png_icons"
	"fdt-templ/internal/db/svg_icons"

	"fdt-templ/cmd/middleware"
	"fdt-templ/internal/db/tldr"
	"fdt-templ/internal/db/tools"
	"fdt-templ/internal/pro"
)

var cpuprofile = flag.String("profile", "", "write cpu profile to file")

func main() {
	flag.Parse()

	// Load TOML configuration
	if _, err := LoadConfig(); err != nil {
		log.Printf("Warning: Failed to load config: %v, using defaults", err)
	}

	var profileFile *os.File
	var stopProfiling func()

	// Start CPU profiling if flag is set
	if *cpuprofile != "" {
		f, err := os.Create(*cpuprofile)
		if err != nil {
			log.Fatalf("Failed to create CPU profile file: %v", err)
		}
		profileFile = f
		pprof.StartCPUProfile(f)
		log.Printf("CPU profiling enabled, writing to: %s", *cpuprofile)

		// Helper function to stop profiling
		stopProfiling = func() {
			if profileFile != nil {
				log.Printf("Stopping CPU profiling...")
				pprof.StopCPUProfile()
				if err := profileFile.Sync(); err != nil {
					log.Printf("Error syncing profile file: %v", err)
				}
				if err := profileFile.Close(); err != nil {
					log.Printf("Error closing profile file: %v", err)
				}
				log.Printf("CPU profile saved to: %s", *cpuprofile)
				profileFile = nil // Prevent double-close
			}
		}

		// Ensure profile is stopped and file is closed on exit
		defer stopProfiling()
	}

	// Setup graceful shutdown
	shutdown := make(chan os.Signal, 1)
	signal.Notify(shutdown, os.Interrupt, syscall.SIGTERM, syscall.SIGQUIT)

	// Limit to 2 CPU cores for predictable performance
	// runtime.GOMAXPROCS(2)

	// Initialize databases
	svgIconsDB, err := svg_icons.GetDB()
	if err != nil {
		log.Fatalf("Failed to open SVG icons database: %v", err)
	}
	defer svgIconsDB.Close()

	// Initialize TLDR DB (handled in tldr_routes setup or here? done in setupTldrRoutes for now, but better to close it here if init there)
	// Actually implementation in setupTldrRoutes inits it. So we should defer close here?
	// But we don't return the db instance from setup.
	// Let's modify main to rely on package level CloseDB for tldr as implemented in db package.

	pngIconsDB, err := png_icons.GetDB()
	if err != nil {
		log.Fatalf("Failed to open PNG icons database: %v", err)
	}
	defer pngIconsDB.Close()

	manPagesDB, err := man_pages.GetDB()
	if err != nil {
		log.Fatalf("Failed to open man pages database: %v", err)
	}
	defer manPagesDB.Close()

	mcpDB, err := mcp.GetDB()
	if err != nil {
		log.Fatalf("Failed to open MCP database: %v", err)
	}
	defer mcpDB.Close()

	emojisDB, err := emojis.GetDB()
	if err != nil {
		log.Fatalf("Failed to open emojis database: %v", err)
	}
	defer emojisDB.Close()

	cheatsheetsDB, err := cheatsheets.GetDB()
	if err != nil {
		log.Fatalf("Failed to open cheatsheets database: %v", err)
	}
	defer cheatsheetsDB.Close()

	installerpediaDB, err := installerpedia.GetDB()
	if err != nil {
		log.Fatalf("Failed to open installerpedia database: %v", err)
	}
	defer installerpediaDB.Close()

	tldrDB, err := tldr.GetDB()
	if err != nil {
		log.Fatalf("Failed to open TLDR database: %v", err)
	}
	defer tldrDB.Close()

	// Initialize FDT PostgreSQL DB (read-write)
	fdtPgDB, err := bookmarks.GetDB()
	if err != nil {
		log.Fatalf("Failed to open fdt_pg_db: %v", err)
	}
	defer fdtPgDB.Close()

	// Initialize Tools Config (static tool definitions and caching)
	toolsConfig, err := tools.GetToolsCache()
	if err != nil {
		log.Fatalf("Failed to initialize Tools Config: %v", err)
	}
	defer toolsConfig.Close()

	mux := http.NewServeMux()

	// Serve static assets (CSS, XSL) - register FIRST before other routes
	assetsPath, err := filepath.Abs("assets")
	if err != nil {
		log.Fatal(err)
	}
	log.Printf("Serving static files from: %s", assetsPath)
	staticFS := http.FileServer(http.Dir(assetsPath))
	mux.Handle(basePath+"/static/", http.StripPrefix(basePath+"/static/", staticFS))

	// Serve sitemap.xsl from assets directory
	mux.HandleFunc(basePath+"/sitemap.xsl", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, filepath.Join(assetsPath, "sitemap.xsl"))
	})

	// Serve favicon.ico
	publicPath, err := filepath.Abs("public")
	if err != nil {
		log.Fatal(err)
	}
	mux.HandleFunc(basePath+"/favicon.ico", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, filepath.Join(publicPath, "favicon.png"))
	})

	// Setup all routes

	setupRoutes(mux, svgIconsDB, manPagesDB, emojisDB, mcpDB, pngIconsDB, cheatsheetsDB, tldrDB, installerpediaDB, toolsConfig, fdtPgDB)

	// Wrap mux with pro middleware first, then logging middleware
	// Note: nginx handles compression, so gzip middleware is not needed
	handler := middleware.Logging(pro.ProMiddleware(middleware.CacheHeaders(mux)))

	port := GetPort()
	addr := ":" + port

	// Configure HTTP server with timeouts for better performance
	server := &http.Server{
		Addr:              addr,
		Handler:           handler,
		ReadTimeout:       300 * time.Second,
		WriteTimeout:      300 * time.Second,
		IdleTimeout:       120 * time.Second,
		ReadHeaderTimeout: 5 * time.Second,
		MaxHeaderBytes:    1 << 20, // 1MB
	}

	log.Printf("Server starting on %s", addr)
	log.Printf("Server ready to accept connections")

	// Start server in a goroutine
	serverErr := make(chan error, 1)
	go func() {
		if err := server.ListenAndServe(); err != nil && err != http.ErrServerClosed {
			serverErr <- err
		}
	}()

	// Wait for shutdown signal or server error
	select {
	case err := <-serverErr:
		log.Printf("Server error: %v", err)
		if stopProfiling != nil {
			stopProfiling()
		}
		log.Fatalf("Server failed: %v", err)
	case sig := <-shutdown:
		log.Printf("Received signal: %v, shutting down gracefully...", sig)
	}

	// Graceful shutdown
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	log.Printf("Shutting down HTTP server...")
	if err := server.Shutdown(ctx); err != nil {
		log.Printf("Server shutdown error: %v", err)
	} else {
		log.Printf("HTTP server shut down successfully")
	}

	// Stop profiling explicitly (defer will also run, but this ensures it happens)
	if stopProfiling != nil {
		stopProfiling()
	}

	log.Printf("Server stopped")
}
