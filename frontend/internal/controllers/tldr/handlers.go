// Package tldr - TLDR (Too Long; Didn't Read) Handlers
//
// This file contains all business logic and database operations for TLDR pages.
// All handlers in this file are called from cmd/server/tldr_routes.go after
// routing logic determines which handler to invoke.
//
// IMPORTANT: All database operations for TLDR MUST be performed in this file.
// The route files (cmd/server/tldr_routes.go) should only handle URL routing
// and delegate to these handlers. This separation ensures:
// - Single responsibility: routes handle routing, handlers handle business logic
// - Maintainability: all DB logic is centralized in one place
// - Testability: handlers can be tested independently of routing
//
// Each handler function performs the following:
// 1. Database queries to fetch required data
// 2. Business logic processing (data transformation, validation, etc.)
// 3. Response rendering (HTML templates, JSON, etc.)
package tldr

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"net/url"

	"fdt-templ/components"
	"fdt-templ/components/common"
	"fdt-templ/components/layouts"
	"fdt-templ/components/pages/tldr"
	"fdt-templ/internal/config"
	"fdt-templ/internal/db/banner"
	tldr_db "fdt-templ/internal/db/tldr"

	"github.com/a-h/templ"
)

func HandleIndex(w http.ResponseWriter, r *http.Request, db *tldr_db.DB, page int) {
	overview, err := db.GetOverview()
	if err != nil {
		log.Printf("Error fetching overview: %v", err)
		http.Error(w, "Error fetching overview", http.StatusInternalServerError)
		return
	}

	clusters, err := db.GetAllClusters()
	if err != nil {
		http.Error(w, "Error fetching clusters", http.StatusInternalServerError)
		return
	}

	itemsPerPage := 30
	totalPlatforms := len(clusters)
	totalPages := (totalPlatforms + itemsPerPage - 1) / itemsPerPage

	if page < 1 || page > totalPages {
		http.NotFound(w, r)
		return
	}

	start := (page - 1) * itemsPerPage
	end := start + itemsPerPage
	if end > totalPlatforms {
		end = totalPlatforms
	}

	currentPlatforms := clusters[start:end]

	totalCommands := 0
	if overview != nil {
		totalCommands = overview.TotalCount
	}

	basePath := config.GetBasePath()

	breadcrumbItems := []components.BreadcrumbItem{
		{Label: "Free DevTools", Href: basePath + "/"},
		{Label: "TLDR", Href: basePath + "/tldr/"},
	}

	if page > 1 {
		breadcrumbItems = append(breadcrumbItems, components.BreadcrumbItem{
			Label: fmt.Sprintf("Page %d", page),
		})
	}

	title := "TLDR - Command Line Documentation | Online Free DevTools by Hexmos"
	description := fmt.Sprintf("Comprehensive documentation for %d+ command-line tools across different platforms. Learn commands quickly with practical examples.", totalCommands)

	if page > 1 {
		title = fmt.Sprintf("TLDR - Page %d | Online Free DevTools by Hexmos", page)
		description = fmt.Sprintf("Browse page %d of our TLDR command documentation. Learn command-line tools across different platforms.", page)
	}

	data := tldr.TLDRIndexData{
		Platforms:       currentPlatforms,
		CurrentPage:     page,
		TotalPages:      totalPages,
		TotalPlatforms:  totalPlatforms,
		TotalCommands:   totalCommands,
		BreadcrumbItems: breadcrumbItems,
		LayoutProps: layouts.BaseLayoutProps{
			Title:       title,
			Description: description,
			Canonical:   config.GetSiteURL() + "/tldr/",
			ShowHeader:  true,
		},
	}

	handler := templ.Handler(tldr.Index(data))
	handler.ServeHTTP(w, r)
}

func HandlePlatform(w http.ResponseWriter, r *http.Request, db *tldr_db.DB, platform string, page int, hashID int64) {

	cluster, err := db.GetCluster(hashID)
	if err != nil {
		http.Error(w, "Error fetching cluster", http.StatusInternalServerError)
		return
	}

	if cluster == nil {
		http.NotFound(w, r)
		return
	}

	itemsPerPage := 30
	totalCommands := cluster.Count
	totalPages := (totalCommands + itemsPerPage - 1) / itemsPerPage

	if page < 1 || (totalPages > 0 && page > totalPages) {
		http.NotFound(w, r)
		return
	}

	offset := (page - 1) * itemsPerPage
	commands, err := db.GetCommandsByClusterPaginated(platform, itemsPerPage, offset)
	if err != nil {
		http.Error(w, "Error fetching commands", http.StatusInternalServerError)
		return
	}

	basePath := config.GetBasePath()
	breadcrumbItems := []components.BreadcrumbItem{
		{Label: "Free DevTools", Href: basePath + "/"},
		{Label: "TLDR", Href: basePath + "/tldr/"},
		{Label: platform, Href: fmt.Sprintf("%s/tldr/%s/", basePath, platform)},
	}

	if page > 1 {
		breadcrumbItems = append(breadcrumbItems, components.BreadcrumbItem{
			Label: fmt.Sprintf("Page %d", page),
		})
	}

	title := fmt.Sprintf("%s Commands - TLDR Documentation | Online Free DevTools by Hexmos", platform)
	description := fmt.Sprintf("Comprehensive documentation for %s command-line tools. Learn %s commands quickly with practical examples.", platform, platform)

	if page > 1 {
		title = fmt.Sprintf("%s Commands - Page %d | Online Free DevTools by Hexmos", platform, page)
		description = fmt.Sprintf("Browse page %d of %d pages in our %s command documentation.", page, totalPages, platform)
	}

	data := tldr.TLDRPlatformData{
		Platform:        platform,
		Commands:        commands,
		CurrentPage:     page,
		TotalPages:      totalPages,
		TotalCommands:   totalCommands,
		BreadcrumbItems: breadcrumbItems,
		LayoutProps: layouts.BaseLayoutProps{
			Title:       title,
			Description: description,
			Canonical:   fmt.Sprintf("%s/tldr/%s/", config.GetSiteURL(), platform),
			ShowHeader:  true,
		},
	}

	handler := templ.Handler(tldr.Platform(data))
	handler.ServeHTTP(w, r)
}

func HandleCommand(w http.ResponseWriter, r *http.Request, db *tldr_db.DB, platform, command string, hashID int64) {
	// hashID is passed from caller (calculated in http_cache or passed explicitly)
	// But previous logic calculated hash here. If we rely on passed hashID (from CheckCache/RouteInfo), good.
	// CheckTldrUpdatedAt calculates hash. RouteInfo has HashID.

	page, err := db.GetPage(hashID)
	if err != nil {
		http.Error(w, "Error fetching page", http.StatusInternalServerError)
		return
	}
	if page == nil {
		http.NotFound(w, r)
		return
	}

	basePath := config.GetBasePath()
	breadcrumbItems := []components.BreadcrumbItem{
		{Label: "Free DevTools", Href: basePath + "/"},
		{Label: "TLDR", Href: basePath + "/tldr/"},
		{Label: platform, Href: fmt.Sprintf("%s/tldr/%s/", basePath, platform)},
		{Label: command},
	}

	title := page.Title
	if title == "" {
		title = fmt.Sprintf("%s - %s Commands - TLDR", command, platform)
	}

	description := page.Description
	if description == "" {
		description = fmt.Sprintf("Documentation for %s command", command)
	}

	// Get enabled ad types from config
	adsEnabled := config.GetAdsEnabled()
	enabledAdTypes := config.GetEnabledAdTypes("tldr")

	// Get banner if bannerdb is enabled
	var textBanner *banner.Banner
	if adsEnabled && enabledAdTypes["bannerdb"] {
		textBanner, _ = banner.GetRandomBannerByType("text")
	}

	// Keywords for Ethical Ads
	var keywords []string
	if len(page.Metadata.Keywords) > 0 {
		keywords = page.Metadata.Keywords
	} else {
		keywords = []string{
			"tldr",
			"command",
			"cli",
			platform,
			command,
		}
	}

	// Parse SeeAlso JSON
	var seeAlsoItems []common.SeeAlsoItem
	if page.SeeAlso != "" {
		var seeAlsoData []common.SeeAlsoJSONItem
		if err := json.Unmarshal([]byte(page.SeeAlso), &seeAlsoData); err != nil {
			// Log error but don't fail the page
			log.Printf("Error parsing see_also JSON for %s/%s: %v", platform, command, err)
		} else {
			for _, item := range seeAlsoData {
				seeAlsoItems = append(seeAlsoItems, item.ToSeeAlsoItem())
			}
		}
	}

	data := tldr.TLDRCommandData{
		Command:         command,
		Platform:        platform,
		Page:            page,
		BreadcrumbItems: breadcrumbItems,
		LayoutProps: layouts.BaseLayoutProps{
			Title:       title,
			Description: description,
			Canonical:   fmt.Sprintf("%s/tldr/%s/%s/", config.GetSiteURL(), url.PathEscape(platform), url.PathEscape(command)),
			Keywords:    keywords,
			ShowHeader:  true,
		},
		TextBanner:   textBanner,
		Keywords:     keywords,
		SeeAlsoItems: seeAlsoItems,
	}

	handler := templ.Handler(tldr.Command(data))
	handler.ServeHTTP(w, r)
}

func HandleCredits(w http.ResponseWriter, r *http.Request) {
	data := tldr.CreditsData{
		LayoutProps: layouts.BaseLayoutProps{
			Name:        "TLDR Credits",
			Title:       "TLDR Credits | Online Free DevTools by Hexmos",
			Description: "Credits and acknowledgments for the TLDR command documentation content used in Free DevTools.",
			Canonical:   fmt.Sprintf("%s/tldr/credits/", config.GetSiteURL()),
			ShowHeader:  true,
		},
	}

	handler := templ.Handler(tldr.Credits(data))
	handler.ServeHTTP(w, r)
}
