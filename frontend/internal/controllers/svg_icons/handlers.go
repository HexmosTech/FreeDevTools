// Package svg_icons - SVG Icons Handlers
//
// This file contains all business logic and database operations for SVG icons pages.
// All handlers in this file are called from cmd/server/svg_icons_routes.go after
// routing logic determines which handler to invoke.
//
// IMPORTANT: All database operations for SVG icons MUST be performed in this file.
// The route files (cmd/server/svg_icons_routes.go) should only handle URL routing
// and delegate to these handlers. This separation ensures:
// - Single responsibility: routes handle routing, handlers handle business logic
// - Maintainability: all DB logic is centralized in one place
// - Testability: handlers can be tested independently of routing
//
// Each handler function performs the following:
// 1. Database queries to fetch required data
// 2. Business logic processing (data transformation, validation, etc.)
// 3. Response rendering (HTML templates, JSON, etc.)
package svg_icons

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"net/url"
	"strings"

	"fdt-templ/components"
	"fdt-templ/components/common"
	"fdt-templ/components/layouts"
	svg_icons_pages "fdt-templ/components/pages/svg_icons"
	"fdt-templ/internal/config"
	"fdt-templ/internal/db/banner"
	svg_icons_db "fdt-templ/internal/db/svg_icons"

	"github.com/a-h/templ"
)

func HandleIndex(w http.ResponseWriter, r *http.Request, db *svg_icons_db.DB, page int) {
	// Run queries in parallel
	totalCategoriesChan := make(chan int)
	totalIconsChan := make(chan int)
	categoriesChan := make(chan interface{})
	errChan := make(chan error, 3)

	const itemsPerPage = 30

	go func() {
		total, err := db.GetTotalClusters()
		if err != nil {
			errChan <- err
			// Close channel to prevent deadlock if receiver waiting?
			// The receiver loop waits for specific channels.
			// The original code didn't close channels on error.
			// But current pattern is safer to close.
			// However, the original code had:
			// totalCategories := <-totalCategoriesChan
			// If err occurs, it sends to errChan but DOES NOT send to totalCategoriesChan.
			// So `<-totalCategoriesChan` BLOCKS FOREVER.
			// This IS A DEADLOCK BUG in original code.
			// I should fix it here similar to Cheatsheets fix.
			close(totalCategoriesChan)
			return
		}
		totalCategoriesChan <- total
	}()

	go func() {
		total, err := db.GetTotalIcons()
		if err != nil {
			errChan <- err
			close(totalIconsChan)
			return
		}
		totalIconsChan <- total
	}()

	go func() {
		categories, err := db.GetClustersWithPreviewIcons(page, itemsPerPage, 6, true)
		if err != nil {
			errChan <- err
			close(categoriesChan)
			return
		}
		categoriesChan <- categories
	}()

	totalCategories := <-totalCategoriesChan
	totalIcons := <-totalIconsChan
	categoriesResult := <-categoriesChan

	if len(errChan) > 0 {
		log.Printf("Error fetching data: %v", <-errChan)
		http.Error(w, "Internal server error", http.StatusInternalServerError)
		return
	}

	totalPages := (totalCategories + itemsPerPage - 1) / itemsPerPage
	if page > totalPages && totalPages > 0 { // Added totalPages > 0 check for safety
		if page > 1 { // Allow page 1 even if empty?
			http.NotFound(w, r)
			return
		}
	}
	if page < 1 {
		http.NotFound(w, r)
		return
	}

	categories, ok := categoriesResult.([]svg_icons_db.ClusterTransformed)
	if !ok {
		// Fallback or error?
		// Should be OK if success.
	}

	basePath := config.GetBasePath()
	breadcrumbItems := []components.BreadcrumbItem{
		{Label: "Free DevTools", Href: basePath + "/"},
		{Label: "SVG Icons"},
	}

	title := "Free SVG Icons - Download & Edit Vector Graphics | Online Free DevTools by Hexmos"
	if page > 1 {
		title = fmt.Sprintf("Free SVG Icons - Page %d | Online Free DevTools by Hexmos", page)
	}
	description := "Download 50k+ free SVG icons instantly. No registration required."

	// Keywords for SEO
	keywords := []string{
		"svg icons",
		"vector graphics",
		"free icons",
		"download icons",
		"edit icons",
		"icon library",
		"vector graphics library",
		"svg download",
		"free vector icons",
		"customizable icons",
	}

	// Use site banner for index page
	siteBannerUrl := "https://hexmos.com/freedevtools/public/site-banner.png"

	layoutProps := layouts.BaseLayoutProps{
		Title:        title,
		Description:  description,
		Keywords:     keywords,
		ShowHeader:   true,
		Canonical:    config.GetSiteURL() + "/svg_icons/",
		ThumbnailUrl: siteBannerUrl,
		OgImage:      siteBannerUrl,
		TwitterImage: siteBannerUrl,
	}

	data := svg_icons_pages.SVGIndexData{
		Categories:      categories,
		CurrentPage:     page,
		TotalPages:      totalPages,
		TotalCategories: totalCategories,
		TotalSvgIcons:   totalIcons,
		BreadcrumbItems: breadcrumbItems,
		LayoutProps:     layoutProps,
	}

	handler := templ.Handler(svg_icons_pages.Index(data))
	handler.ServeHTTP(w, r)
}

func HandleCategory(w http.ResponseWriter, r *http.Request, db *svg_icons_db.DB, category string, page int) {
	// Try to find cluster by source folder first (exact match)
	cluster, err := db.GetClusterBySourceFolder(category)

	// If not found, try by hashed name as fallback
	if err != nil || cluster == nil {
		hashName := svg_icons_db.HashNameToKey(category)
		cluster, err = db.GetClusterByName(hashName)
	}

	if err != nil || cluster == nil {
		http.NotFound(w, r)
		return
	}

	// Get icons for this cluster
	categoryName := category

	// Pagination
	if page < 1 {
		page = 1
	}
	limit := 10 // Show 10 icons per page
	offset := (page - 1) * limit

	icons, err := db.GetIconsByCluster(cluster.SourceFolder, &categoryName, limit, offset)
	if err != nil {
		http.Error(w, "Internal server error", http.StatusInternalServerError)
		return
	}

	basePath := config.GetBasePath()
	breadcrumbItems := []components.BreadcrumbItem{
		{Label: "Free DevTools", Href: basePath + "/"},
		{Label: "SVG Icons", Href: basePath + "/svg_icons/"},
		{Label: category},
	}

	totalPages := (cluster.Count + limit - 1) / limit

	// Fix title/description logic
	title := cluster.Title
	if title == "" {
		title = fmt.Sprintf("%s SVG Icons - Free Download & Edit | Online Free DevTools by Hexmos", category)
	}
	description := cluster.Description
	if description == "" {
		description = fmt.Sprintf("Download free %s SVG icons. High quality vector graphics for your projects.", category)
	}

	// Use site banner for category pages
	siteBannerUrl := "https://hexmos.com/freedevtools/public/site-banner.png"

	// Get enabled ad types from config
	adsEnabled := config.GetAdsEnabled()
	enabledAdTypes := config.GetEnabledAdTypes("svg_icons")

	// Get banner if bannerdb is enabled
	var textBanner *banner.Banner
	if adsEnabled && enabledAdTypes["bannerdb"] {
		textBanner, _ = banner.GetRandomBannerByType("text")
	}

	layoutProps := layouts.BaseLayoutProps{
		Title:        title,
		Description:  description,
		ShowHeader:   true,
		Canonical:    fmt.Sprintf("%s/svg_icons/%s/", config.GetSiteURL(), category),
		ThumbnailUrl: siteBannerUrl,
		OgImage:      siteBannerUrl,
		TwitterImage: siteBannerUrl,
	}

	headingTitle := strings.TrimSpace(strings.Split(title, "|")[0])

	data := svg_icons_pages.CategoryData{
		Category:        category,
		HeadingTitle:    headingTitle,
		ClusterData:     cluster,
		CategoryIcons:   icons,
		TotalIcons:      cluster.Count,
		CurrentPage:     page,
		TotalPages:      totalPages,
		BreadcrumbItems: breadcrumbItems,
		LayoutProps:     layoutProps,
		TextBanner:      textBanner,
	}

	handler := templ.Handler(svg_icons_pages.Category(data))
	handler.ServeHTTP(w, r)
}

func HandleIcon(w http.ResponseWriter, r *http.Request, db *svg_icons_db.DB, category, iconName string) {
	// Remove .svg extension if present
	iconName = strings.TrimSuffix(iconName, ".svg")
	
	// Strip trailing hyphens from icon name and redirect if needed
	normalizedIconName := strings.TrimSuffix(iconName, "-")
	if normalizedIconName != iconName {
		// Permanent redirect to normalized URL
		basePath := config.GetBasePath()
		redirectURL := fmt.Sprintf("%s/svg_icons/%s/%s/", basePath, category, normalizedIconName)
		http.Redirect(w, r, redirectURL, http.StatusMovedPermanently)
		return
	}

	icon, err := db.GetIconByCategoryAndName(category, iconName)
	if err != nil || icon == nil {
		http.NotFound(w, r)
		return
	}

	basePath := config.GetBasePath()

	breadcrumbItems := []components.BreadcrumbItem{
		{Label: "Free DevTools", Href: basePath + "/"},
		{Label: "SVG Icons", Href: basePath + "/svg_icons/"},
		{Label: category, Href: basePath + "/svg_icons/" + category + "/"},
		{Label: icon.Name},
	}

	// Determine title separately for layout props vs og:title if needed
	var title string
	if icon.Title != nil && *icon.Title != "" {
		title = *icon.Title
	} else {
		title = fmt.Sprintf("Free %s SVG Icon Download | Online Free DevTools by Hexmos", icon.Name)
	}

	description := icon.Description
	if description == "" {
		description = fmt.Sprintf("Download %s SVG icon for free.", icon.Name)
	}

	// Keywords for SEO and Ethical Ads
	keywords := []string{
		"svg",
		"icons",
		"vector",
		category,
	}
	if icon.Name != "" {
		keywords = append(keywords, icon.Name)
	}
	// Add icon tags to keywords if available
	if len(icon.Tags) > 0 {
		keywords = append(keywords, icon.Tags...)
	}

	// Strip trailing dashes from icon name for URL generation
	iconNameForURL := strings.TrimSuffix(icon.Name, "-")
	
	// Build SVG image URL
	svgImageUrl := fmt.Sprintf("https://hexmos.com/freedevtools/svg_icons/%s/%s.svg", category, iconNameForURL)

	// Get enabled ad types from config
	adsEnabled := config.GetAdsEnabled()
	enabledAdTypes := config.GetEnabledAdTypes("svg_icons")

	layoutProps := layouts.BaseLayoutProps{
		Name:           icon.Name,
		Title:          title,
		Description:    description,
		Keywords:       keywords,
		ShowHeader:     true,
		Canonical:      fmt.Sprintf("%s/svg_icons/%s/%s/", config.GetSiteURL(), category, iconNameForURL),
		ThumbnailUrl:   svgImageUrl,
		OgImage:        svgImageUrl,
		TwitterImage:   svgImageUrl,
		ImgWidth:       128,
		ImgHeight:      128,
		EncodingFormat: "image/svg+xml",
	}

	// Get banner if bannerdb is enabled
	var textBanner *banner.Banner
	if adsEnabled && enabledAdTypes["bannerdb"] {
		textBanner, _ = banner.GetRandomBannerByType("text")
	}

	// Parse SeeAlso JSON
	var seeAlsoItems []common.SeeAlsoItem
	if icon.SeeAlso != "" {
		var seeAlsoData []common.SeeAlsoJSONItem
		if err := json.Unmarshal([]byte(icon.SeeAlso), &seeAlsoData); err != nil {
			// Log error but don't fail the page
			log.Printf("Error parsing see_also JSON for %s/%s: %v", category, iconName, err)
		} else {
			for _, item := range seeAlsoData {
				seeAlsoItems = append(seeAlsoItems, item.ToSeeAlsoItem())
			}
		}
	}

	data := svg_icons_pages.IconData{
		Icon:            icon,
		Category:        category,
		BreadcrumbItems: breadcrumbItems,
		LayoutProps:     layoutProps,
		TextBanner:      textBanner,
		Keywords:        keywords,
		SeeAlsoItems:    seeAlsoItems,
	}

	// Use svg_icons_pages.Icon directly as it now wraps BaseLayout
	handler := templ.Handler(svg_icons_pages.Icon(data))
	handler.ServeHTTP(w, r)
}

func HandleCredits(w http.ResponseWriter, r *http.Request) {
	data := svg_icons_pages.CreditsData{
		LayoutProps: layouts.BaseLayoutProps{
			Name:        "SVG Icons Credits",
			Title:       "SVG Icons Credits & Acknowledgments | Online Free DevTools by Hexmos",
			Description: "Credits and acknowledgments for the free SVG icons available on Free DevTools. Learn about the sources, licenses, and contributors.",
			Canonical:   "https://hexmos.com/freedevtools/svg_icons/credits/",
			ShowHeader:  true,
		},
	}

	handler := templ.Handler(svg_icons_pages.Credits(data))
	handler.ServeHTTP(w, r)
}

// HandleRedirectWithTrailingHyphen handles redirects for URLs with trailing hyphens in icon names
// This should be called before route matching to redirect URLs like /svg_icons/category/icon-name-/
func HandleRedirectWithTrailingHyphen(w http.ResponseWriter, r *http.Request, path string) bool {
	parts := strings.Split(path, "/")
	if len(parts) == 2 {
		// Check if icon name has trailing hyphen
		iconName := parts[1]
		if strings.HasSuffix(iconName, "-") {
			normalizedIconName := strings.TrimSuffix(iconName, "-")
			basePath := config.GetBasePath()
			redirectURL := fmt.Sprintf("%s/svg_icons/%s/%s/", basePath, parts[0], normalizedIconName)
			http.Redirect(w, r, redirectURL, http.StatusMovedPermanently)
			return true
		}
	}
	return false
}

// HandleRedirectMultiPart handles redirects for URLs with more than 2 parts
// Extracts category and icon from first 2 parts and redirects if icon exists
// If icon doesn't exist, checks if category exists and redirects to category page
func HandleRedirectMultiPart(w http.ResponseWriter, r *http.Request, db *svg_icons_db.DB, path string) bool {
	parts := strings.Split(path, "/")
	if len(parts) > 2 {
		category := parts[0]
		iconName := strings.TrimSuffix(parts[1], "-")
		
		// First, verify the icon exists before redirecting
		icon, err := db.GetIconByCategoryAndName(category, iconName)
		if err == nil && icon != nil {
			// Icon exists, redirect to correct 2-part URL
			basePath := config.GetBasePath()
			redirectURL := fmt.Sprintf("%s/svg_icons/%s/%s/", basePath, url.PathEscape(category), url.PathEscape(iconName))
			http.Redirect(w, r, redirectURL, http.StatusMovedPermanently)
			return true
		}
		
		// Icon doesn't exist, check if category exists
		cluster, err := db.GetClusterBySourceFolder(category)
		if err != nil || cluster == nil {
			// Try by hashed name as fallback
			hashName := svg_icons_db.HashNameToKey(category)
			cluster, err = db.GetClusterByName(hashName)
		}
		
		if err == nil && cluster != nil {
			// Category exists, redirect to category page
			basePath := config.GetBasePath()
			redirectURL := fmt.Sprintf("%s/svg_icons/%s/", basePath, url.PathEscape(category))
			http.Redirect(w, r, redirectURL, http.StatusMovedPermanently)
			return true
		}
	}
	return false
}
