// Package png_icons - PNG Icons Handlers
//
// This file contains all business logic and database operations for PNG icons pages.
// All handlers in this file are called from cmd/server/png_icons_routes.go after
// routing logic determines which handler to invoke.
//
// IMPORTANT: All database operations for PNG icons MUST be performed in this file.
// The route files (cmd/server/png_icons_routes.go) should only handle URL routing
// and delegate to these handlers. This separation ensures:
// - Single responsibility: routes handle routing, handlers handle business logic
// - Maintainability: all DB logic is centralized in one place
// - Testability: handlers can be tested independently of routing
//
// Each handler function performs the following:
// 1. Database queries to fetch required data
// 2. Business logic processing (data transformation, validation, etc.)
// 3. Response rendering (HTML templates, JSON, etc.)
package png_icons

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"net/url"
	"regexp"
	"strings"

	"fdt-templ/components"
	"fdt-templ/components/common"
	"fdt-templ/components/layouts"
	png_icons_pages "fdt-templ/components/pages/png_icons"
	"fdt-templ/internal/config"
	"fdt-templ/internal/db/banner"
	png_icons_db "fdt-templ/internal/db/png_icons"

	"github.com/a-h/templ"
)

func HandleIndex(w http.ResponseWriter, r *http.Request, db *png_icons_db.DB, page int) {
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
	if page > totalPages && totalPages > 0 {
		if page > 1 {
			// Redirect invalid pagination pages to home
			basePath := config.GetBasePath()
			http.Redirect(w, r, basePath+"/png_icons/", http.StatusMovedPermanently)
			return
		}
	}
	if page < 1 {
		http.NotFound(w, r)
		return
	}

	categories, ok := categoriesResult.([]png_icons_db.ClusterTransformed)
	if !ok {
		// Fallback or error?
	}

	// If home page (page 1) has no items, redirect to store
	if page == 1 && (totalCategories == 0 || len(categories) == 0) {
		basePath := config.GetBasePath()
		http.Redirect(w, r, basePath+"/png_icons/store/", http.StatusMovedPermanently)
		return
	}

	basePath := config.GetBasePath()
	breadcrumbItems := []components.BreadcrumbItem{
		{Label: "Free DevTools", Href: basePath + "/"},
		{Label: "PNG Icons"},
	}

	title := "Free PNG Icons - Download Vector Graphics | Online Free DevTools by Hexmos | No Registration Required"
	if page > 1 {
		title = fmt.Sprintf("Free PNG Icons - Page %d | Online Free DevTools by Hexmos", page)
	}
	description := "Download 50k+ free PNG icons instantly. High quality, no registration required."

	// Keywords for SEO
	keywords := []string{
		"png icons",
		"vector graphics",
		"free icons",
		"download icons",
		"edit icons",
		"icon library",
		"vector graphics library",
		"png download",
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
		Canonical:    config.GetSiteURL() + "/png_icons/",
		ThumbnailUrl: siteBannerUrl,
		OgImage:      siteBannerUrl,
		TwitterImage: siteBannerUrl,
	}

	data := png_icons_pages.PNGIndexData{
		Categories:      categories,
		CurrentPage:     page,
		TotalPages:      totalPages,
		TotalCategories: totalCategories,
		TotalPngIcons:   totalIcons,
		BreadcrumbItems: breadcrumbItems,
		LayoutProps:     layoutProps,
	}

	handler := templ.Handler(png_icons_pages.Index(data))
	handler.ServeHTTP(w, r)
}

func HandleCategory(w http.ResponseWriter, r *http.Request, db *png_icons_db.DB, category string, page int) {
	// Try to find cluster by source folder first (exact match)
	cluster, err := db.GetClusterBySourceFolder(category)

	// If not found, try by hashed name as fallback
	if err != nil || cluster == nil {
		hashName := png_icons_db.HashNameToKey(category)
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
	limit := 30 // Show 30 icons per page
	offset := (page - 1) * limit

	icons, err := db.GetIconsByCluster(cluster.SourceFolder, &categoryName, limit, offset)
	if err != nil {
		log.Printf("[PNG Icons HandleCategory] GetIconsByCluster failed - category: %s, err: %v", category, err)
		http.Error(w, "Internal server error", http.StatusInternalServerError)
		return
	}
	log.Printf("[PNG Icons HandleCategory] GetIconsByCluster success - category: %s, icons count: %d", category, len(icons))

	basePath := config.GetBasePath()
	breadcrumbItems := []components.BreadcrumbItem{
		{Label: "Free DevTools", Href: basePath + "/"},
		{Label: "PNG Icons", Href: basePath + "/png_icons/"},
		{Label: category},
	}

	totalPages := (cluster.Count + limit - 1) / limit

	// Redirect invalid pagination pages to category page
	if page > totalPages && totalPages > 0 {
		basePath := config.GetBasePath()
		http.Redirect(w, r, fmt.Sprintf("%s/png_icons/%s/", basePath, category), http.StatusMovedPermanently)
		return
	}

	title := cluster.Title
	if title == "" {
		title = fmt.Sprintf("%s PNG Icons - Free Download & Edit | Online Free DevTools by Hexmos", category)
	}
	description := cluster.Description
	if description == "" {
		description = fmt.Sprintf("Download free %s PNG icons. High quality vector graphics for your projects.", category)
	}

	// Use site banner for category pages
	siteBannerUrl := "https://hexmos.com/freedevtools/public/site-banner.png"


	layoutProps := layouts.BaseLayoutProps{
		Title:        title,
		Description:  description,
		ShowHeader:   true,
		Canonical:    fmt.Sprintf("%s/png_icons/%s/", config.GetSiteURL(), category),
		ThumbnailUrl: siteBannerUrl,
		OgImage:      siteBannerUrl,
		TwitterImage: siteBannerUrl,
	}

	headingTitle := strings.TrimSpace(strings.Split(title, "|")[0])

	data := png_icons_pages.CategoryData{
		Category:        category,
		HeadingTitle:    headingTitle,
		ClusterData:     cluster,
		CategoryIcons:   icons,
		TotalIcons:      cluster.Count,
		CurrentPage:     page,
		TotalPages:      totalPages,
		BreadcrumbItems: breadcrumbItems,
		LayoutProps:     layoutProps,
	}

	handler := templ.Handler(png_icons_pages.Category(data))
	handler.ServeHTTP(w, r)
}

func HandleIcon(w http.ResponseWriter, r *http.Request, db *png_icons_db.DB, category, iconName string) {
	log.Printf("[PNG Icons HandleIcon] Called with category: %s, iconName: %s, URL: %s", category, iconName, r.URL.Path)
	
	// Remove .png extension if present
	iconName = strings.TrimSuffix(iconName, ".png")
	
	// Track if original iconName had .svg extension (for keeping it in URL)
	hasSvgExtension := strings.HasSuffix(iconName, ".svg")

	log.Printf("[PNG Icons HandleIcon] Looking up icon - category: %s, iconName: %s (after .png removal)", category, iconName)
	icon, err := db.GetIconByCategoryAndName(category, iconName)
	if err != nil || icon == nil {
		log.Printf("[PNG Icons HandleIcon] Icon not found - category: %s, iconName: %s, error: %v", category, iconName, err)
		// Fallback 1: If icon name has .svg extension, try without .svg
		if hasSvgExtension {
			iconNameWithoutSvg := strings.TrimSuffix(iconName, ".svg")
			icon, err = db.GetIconByCategoryAndName(category, iconNameWithoutSvg)
			if err == nil && icon != nil {
				// Found without .svg extension - use it but keep .svg in URL (no redirect needed)
				// The routes file already handled trailing slash, so URL already has .svg
				iconName = iconNameWithoutSvg
			} else {
				// If not found without .svg, try with .svg in next fallbacks
				iconName = iconNameWithoutSvg
			}
		}
		
		// Fallback 2: Try removing -<number> pattern from icon name
		// Match pattern like -10, -5, etc. at the end of the icon name
		fallbackPattern := regexp.MustCompile(`-\d+$`)
		if fallbackPattern.MatchString(iconName) {
			fallbackIconName := fallbackPattern.ReplaceAllString(iconName, "")
			fallbackIcon, fallbackErr := db.GetIconByCategoryAndName(category, fallbackIconName)
			if fallbackErr == nil && fallbackIcon != nil {
				// Found with fallback name, redirect to correct URL
				basePath := config.GetBasePath()
				redirectURL := fmt.Sprintf("%s/png_icons/%s/%s/", basePath, url.PathEscape(category), url.PathEscape(fallbackIconName))
				http.Redirect(w, r, redirectURL, http.StatusMovedPermanently)
				return
			}
		}
		
		// Fallback 3: Check if category exists and redirect to it
		cluster, err := db.GetClusterBySourceFolder(category)
		if err != nil || cluster == nil {
			hashName := png_icons_db.HashNameToKey(category)
			cluster, err = db.GetClusterByName(hashName)
		}
		if err == nil && cluster != nil {
			// Category exists, redirect to category page
			basePath := config.GetBasePath()
			redirectURL := fmt.Sprintf("%s/png_icons/%s/", basePath, url.PathEscape(category))
			log.Printf("[PNG Icons HandleIcon] Icon not found, redirecting to category: %s -> %s", r.URL.Path, redirectURL)
			http.Redirect(w, r, redirectURL, http.StatusMovedPermanently)
			return
		}
		
		log.Printf("[PNG Icons HandleIcon] Icon not found and category not found, returning 404 - category: %s, iconName: %s", category, iconName)
		http.NotFound(w, r)
		return
	}

	log.Printf("[PNG Icons HandleIcon] Icon found - ID: %d, cluster: %s, name: %s", icon.ID, icon.Cluster, icon.Name)

	basePath := config.GetBasePath()

	breadcrumbItems := []components.BreadcrumbItem{
		{Label: "Free DevTools", Href: basePath + "/"},
		{Label: "PNG Icons", Href: basePath + "/png_icons/"},
		{Label: category, Href: basePath + "/png_icons/" + category + "/"},
		{Label: icon.Name},
	}

	var title string
	if icon.Title != nil && *icon.Title != "" {
		title = *icon.Title
	} else {
		title = fmt.Sprintf("Free %s PNG Icon Download | Online Free DevTools by Hexmos", icon.Name)
	}

	description := icon.Description
	if description == "" {
		description = fmt.Sprintf("Download %s PNG icon for free.", icon.Name)
	}

	// Keywords for SEO and Ethical Ads
	keywords := []string{
		"png",
		"icons",
		"images",
		category,
	}
	if icon.Name != "" {
		keywords = append(keywords, icon.Name)
	}
	// Add icon tags to keywords if available
	if len(icon.Tags) > 0 {
		keywords = append(keywords, icon.Tags...)
	}

	// Build SVG image URL for og:image (using matching svg icon)
	svgImageUrl := fmt.Sprintf("https://hexmos.com/freedevtools/svg_icons/%s/%s.svg", category, icon.Name)

	// Get enabled ad types from config
	adsEnabled := config.GetAdsEnabled()
	enabledAdTypes := config.GetEnabledAdTypes("png_icons")

	layoutProps := layouts.BaseLayoutProps{
		Name:           icon.Name,
		Title:          title,
		Description:    description,
		Keywords:       keywords,
		ShowHeader:     true,
		Canonical:      fmt.Sprintf("%s/png_icons/%s/%s/", config.GetSiteURL(), category, icon.Name),
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

	data := png_icons_pages.IconData{
		Icon:            icon,
		Category:        category,
		BreadcrumbItems: breadcrumbItems,
		LayoutProps:     layoutProps,
		TextBanner:      textBanner,
		Keywords:        keywords,
		SeeAlsoItems:    seeAlsoItems,
	}

	handler := templ.Handler(png_icons_pages.Icon(data))
	handler.ServeHTTP(w, r)
}

func HandleCredits(w http.ResponseWriter, r *http.Request) {
	data := png_icons_pages.CreditsData{
		LayoutProps: layouts.BaseLayoutProps{
			Name:        "PNG Icons Credits",
			Title:       "PNG Icons Credits & Acknowledgments | Online Free DevTools by Hexmos",
			Description: "Credits and acknowledgments for the free PNG icons available on Free DevTools. Learn about the sources, licenses, and contributors.",
			Canonical:   "https://hexmos.com/freedevtools/png_icons/credits/",
			ShowHeader:  true,
		},
	}

	handler := templ.Handler(png_icons_pages.Credits(data))
	handler.ServeHTTP(w, r)
}

// HandleRedirectMultiPart handles redirects for URLs with more than 2 parts
// Extracts category and icon from first 2 parts and redirects if icon exists
// If icon doesn't exist, checks if category exists and redirects to category page
func HandleRedirectMultiPart(w http.ResponseWriter, r *http.Request, db *png_icons_db.DB, path string) bool {
	parts := strings.Split(path, "/")
	if len(parts) > 2 {
		category := parts[0]
		iconName := strings.TrimSuffix(parts[1], ".png")
		
		// First, verify the icon exists before redirecting
		icon, err := db.GetIconByCategoryAndName(category, iconName)
		if err == nil && icon != nil {
			// Icon exists, redirect to correct 2-part URL
			basePath := config.GetBasePath()
			redirectURL := fmt.Sprintf("%s/png_icons/%s/%s/", basePath, url.PathEscape(category), url.PathEscape(iconName))
			http.Redirect(w, r, redirectURL, http.StatusMovedPermanently)
			return true
		}
		
		// Icon doesn't exist, check if category exists
		cluster, err := db.GetClusterBySourceFolder(category)
		if err != nil || cluster == nil {
			hashName := png_icons_db.HashNameToKey(category)
			cluster, err = db.GetClusterByName(hashName)
		}
		
		if err == nil && cluster != nil {
			// Category exists, redirect to category page
			basePath := config.GetBasePath()
			redirectURL := fmt.Sprintf("%s/png_icons/%s/", basePath, url.PathEscape(category))
			http.Redirect(w, r, redirectURL, http.StatusMovedPermanently)
			return true
		}
	}
	return false
}
