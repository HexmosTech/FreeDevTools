// Package manpages - Man Pages (Unix Manual Pages) Handlers
//
// This file contains all business logic and database operations for Man Pages.
// All handlers in this file are called from cmd/server/man_pages_routes.go after
// routing logic determines which handler to invoke.
//
// IMPORTANT: All database operations for Man Pages MUST be performed in this file.
// The route files (cmd/server/man_pages_routes.go) should only handle URL routing
// and delegate to these handlers. This separation ensures:
// - Single responsibility: routes handle routing, handlers handle business logic
// - Maintainability: all DB logic is centralized in one place
// - Testability: handlers can be tested independently of routing
//
// Each handler function performs the following:
// 1. Database queries to fetch required data
// 2. Business logic processing (data transformation, validation, etc.)
// 3. Response rendering (HTML templates, JSON, etc.)
package manpages

import (
	"bufio"
	"encoding/json"
	"fdt-templ/components"
	"fdt-templ/components/common"
	"fdt-templ/components/layouts"
	man_pages_components "fdt-templ/components/pages/man_pages"
	"fdt-templ/internal/config"
	"fdt-templ/internal/db/banner"
	"fdt-templ/internal/db/man_pages"
	"fmt"
	"log"
	"net/http"
	"net/url"
	"os"
	"path/filepath"
	"regexp"
	"strings"
	"time"

	"github.com/a-h/templ"
)

func HandleManPagesIndex(w http.ResponseWriter, r *http.Request, db *man_pages.DB) {
	// Run queries in parallel
	categoriesChan := make(chan []man_pages.Category)
	overviewChan := make(chan *man_pages.Overview)
	errChan := make(chan error, 2)

	go func() {
		categories, err := db.GetManPageCategories()
		if err != nil {
			errChan <- err
			return
		}
		categoriesChan <- categories
	}()

	go func() {
		overview, err := db.GetOverview()
		if err != nil {
			errChan <- err
			return
		}
		overviewChan <- overview
	}()

	categories := <-categoriesChan
	overview := <-overviewChan

	if len(errChan) > 0 {
		log.Printf("Error fetching data: %v", <-errChan)
		http.Error(w, "Internal server error", http.StatusInternalServerError)
		return
	}

	totalManPages := 0
	if overview != nil {
		totalManPages = overview.TotalCount
	}

	breadcrumbItems := []components.BreadcrumbItem{
		{Label: "Free DevTools", Href: config.GetBasePath() + "/"},
		{Label: "Man Pages"},
	}

	title := "Man Pages - Manual Pages Documentation | Free DevTools by Hexmos"
	description := "Browse and search manual pages (man pages) with detailed documentation for system calls, commands, and configuration files. Interactive man page viewer."
	keywords := []string{
		"man pages",
		"manual",
		"documentation",
		"system calls",
		"commands",
	}

	var textBanner *banner.Banner
	if config.GetAdsEnabled() && config.GetEnabledAdTypes("man-pages")["bannerdb"] {
		textBanner, _ = banner.GetRandomBannerByType("text")
	}

	data := man_pages_components.IndexData{
		Categories:      categories,
		TotalCategories: len(categories),
		TotalManPages:   totalManPages,
		BreadcrumbItems: breadcrumbItems,
		TextBanner:      textBanner,
		LayoutProps: layouts.BaseLayoutProps{
			Title:        title,
			Description:  description,
			Canonical:    config.GetSiteURL() + "/man-pages/",
			Keywords:     keywords,
			OgImage:      "https://hexmos.com/freedevtools/public/tool-banners/man-pages-banner.png",
			TwitterImage: "https://hexmos.com/freedevtools/public/tool-banners/man-pages-banner.png",
			ShowHeader:   true,
			PageType:     "CollectionPage",
		},
	}

	handler := templ.Handler(man_pages_components.Index(data))
	handler.ServeHTTP(w, r)
}

func HandleManPagesCategory(w http.ResponseWriter, r *http.Request, db *man_pages.DB, category string, page int) {
	itemsPerPage := 12
	offset := (page - 1) * itemsPerPage

	// Get counts and subcategories in parallel
	countsChan := make(chan *man_pages.TotalSubCategoriesManPagesCount)
	subcategoriesChan := make(chan []man_pages.SubCategory)
	errChan := make(chan error, 2)

	go func() {
		counts, err := db.GetTotalSubCategoriesManPagesCount(category)
		if err != nil {
			errChan <- err
			return
		}
		countsChan <- counts
	}()

	go func() {
		subcategories, err := db.GetSubCategoriesByMainCategoryPaginated(category, itemsPerPage, offset)
		if err != nil {
			errChan <- err
			return
		}
		subcategoriesChan <- subcategories
	}()

	counts := <-countsChan
	subcategories := <-subcategoriesChan

	if len(errChan) > 0 {
		log.Printf("Error fetching data: %v", <-errChan)
		http.Error(w, "Internal server error", http.StatusInternalServerError)
		return
	}

	totalPages := (counts.SubCategoryCount + itemsPerPage - 1) / itemsPerPage
	if page > totalPages || page < 1 {
		// Redirect to category home page (page 1) if pagination page doesn't exist
		log.Printf("[DEBUG] Pagination fallback: Page %d doesn't exist (total: %d), redirecting to category home", page, totalPages)
		http.Redirect(w, r, config.GetBasePath()+"/man-pages/"+url.PathEscape(category)+"/", http.StatusMovedPermanently)
		return
	}

	categoryTitle := man_pages_components.FormatCategoryName(category)

	breadcrumbItems := []components.BreadcrumbItem{
		{Label: "Free DevTools", Href: config.GetBasePath() + "/"},
		{Label: "Man Pages", Href: config.GetBasePath() + "/man-pages/"},
		{Label: categoryTitle, Href: config.GetBasePath() + "/man-pages/" + url.PathEscape(category) + "/"},
	}

	if page > 1 {
		breadcrumbItems = append(breadcrumbItems, components.BreadcrumbItem{
			Label: fmt.Sprintf("Page %d", page),
		})
	}

	title := fmt.Sprintf("%s Manual Pages | Free DevTools by Hexmos", categoryTitle)
	if page > 1 {
		title = fmt.Sprintf("%s Manual Pages - Page %d | Free DevTools by Hexmos", categoryTitle, page)
	}

	description := fmt.Sprintf("Browse %s manual page subcategories. Find detailed documentation and system references.", categoryTitle)
	if page > 1 {
		description = fmt.Sprintf("Browse %s manual page subcategories - Page %d of %d. Find detailed documentation and system references.", categoryTitle, page, totalPages)
	}

	keywords := []string{category, "man pages", "manual", "documentation"}
	if page > 1 {
		keywords = append(keywords, fmt.Sprintf("page %d", page))
	}

	canonical := fmt.Sprintf("%s/man-pages/%s/", config.GetSiteURL(), url.PathEscape(category))
	if page > 1 {
		canonical = fmt.Sprintf("%s/man-pages/%s/%d/", config.GetSiteURL(), url.PathEscape(category), page)
	}


	data := man_pages_components.CategoryData{
		Category:         category,
		SubCategories:    subcategories,
		SubCategoryCount: counts.SubCategoryCount,
		ManPagesCount:    counts.ManPagesCount,
		CurrentPage:      page,
		TotalPages:       totalPages,
		BreadcrumbItems:  breadcrumbItems,
		LayoutProps: layouts.BaseLayoutProps{
			Title:        title,
			Description:  description,
			Canonical:    canonical,
			Keywords:     keywords,
			OgImage:      "https://hexmos.com/freedevtools/public/tool-banners/man-pages-banner.png",
			TwitterImage: "https://hexmos.com/freedevtools/public/tool-banners/man-pages-banner.png",
			ShowHeader:   true,
			PageType:     "CollectionPage",
		},
	}

	handler := templ.Handler(man_pages_components.Category(data))
	handler.ServeHTTP(w, r)
}

func HandleManPagesSubcategory(w http.ResponseWriter, r *http.Request, db *man_pages.DB, category, subcategory string, page int) {
	itemsPerPage := 20
	offset := (page - 1) * itemsPerPage

	// Get counts and man pages in parallel
	countChan := make(chan int)
	manPagesChan := make(chan []man_pages.ManPage)
	errChan := make(chan error, 2)

	go func() {
		count, err := db.GetManPagesCountBySubcategory(category, subcategory)
		if err != nil {
			errChan <- err
			return
		}
		countChan <- count
	}()

	go func() {
		manPages, err := db.GetManPagesBySubcategoryPaginated(category, subcategory, itemsPerPage, offset)
		if err != nil {
			errChan <- err
			return
		}
		manPagesChan <- manPages
	}()

	totalCount := <-countChan
	manPages := <-manPagesChan

	if len(errChan) > 0 {
		log.Printf("Error fetching data: %v", <-errChan)
		http.Error(w, "Internal server error", http.StatusInternalServerError)
		return
	}

	totalPages := (totalCount + itemsPerPage - 1) / itemsPerPage
	if totalCount == 0 {
		// Check if subcategory exists in database first
		// If it exists but has 0 pages, render the empty subcategory page
		exists, err := db.SubCategoryExists(category, subcategory)
		if err != nil {
			log.Printf("Error checking if subcategory exists: %v", err)
		} else if exists {
			// Subcategory exists but has 0 pages - render empty page
			log.Printf("[DEBUG] Subcategory exists but has 0 pages: %s/%s", category, subcategory)
			// Continue to render the page below (skip fallbacks)
		} else {
			// Subcategory doesn't exist, check if the second part could be a slug
			// This handles cases like /kernel-routines/gpio/ where gpio might be a slug, not a subcategory
			log.Printf("[DEBUG] Subcategory lookup failed (count=%d, page=%d), trying fallbacks with slug='%s'", totalCount, page, subcategory)

		// Fetch matches once and reuse
		startTime := time.Now()
		matches, err := db.GetManPageBySlugOnly(subcategory)
		duration := time.Since(startTime)
		if err != nil {
			log.Printf("[DEBUG] SubcategoryFallback: Error fetching man page by slug only: %v (took %v)", err, duration)
		} else {
			log.Printf("[DEBUG] SubcategoryFallback: GetManPageBySlugOnly query took %v", duration)
		}

		if tryFallback1And2WithMatches(w, r, db, category, subcategory, "SubcategoryFallback", matches, err) {
			return
		}
		// Try Fallback 4 (first match even if multiple) - reuse matches if available
		if tryFallback4WithMatches(w, r, db, subcategory, matches, err) {
			return
		}
		// Try Fallback 5 (LIKE query with first 5 characters)
		if tryFallback5(w, r, db, subcategory) {
			return
		}

		// Try Fallback 6 FIRST (check old_urls.csv for subcategory -> slug mapping)
		// This should run before slug-based fallbacks to handle old subcategory names
		if tryFallback6OldUrlsCSV(w, r, db, category, subcategory) {
			return
		}

		http.NotFound(w, r)
		return
		}
	}

	// Check if pagination page exceeds total pages - redirect to subcategory home (page 1)
	// Allow page 1 even if totalPages is 0 (empty subcategory)
	if (page > totalPages && totalPages > 0) || page < 1 {
		// Redirect to subcategory home page (page 1) if pagination page doesn't exist
		log.Printf("[DEBUG] Pagination fallback: Page %d doesn't exist (total: %d), redirecting to subcategory home", page, totalPages)
		http.Redirect(w, r, config.GetBasePath()+"/man-pages/"+url.PathEscape(category)+"/"+url.PathEscape(subcategory)+"/", http.StatusMovedPermanently)
		return
	}

	categoryTitle := man_pages_components.FormatCategoryName(category)
	subcategoryTitle := man_pages_components.FormatCategoryName(subcategory)

	breadcrumbItems := []components.BreadcrumbItem{
		{Label: "Free DevTools", Href: config.GetBasePath() + "/"},
		{Label: "Man Pages", Href: config.GetBasePath() + "/man-pages/"},
		{Label: categoryTitle, Href: config.GetBasePath() + "/man-pages/" + url.PathEscape(category) + "/"},
		{Label: subcategoryTitle},
	}

	if page > 1 {
		breadcrumbItems = append(breadcrumbItems, components.BreadcrumbItem{
			Label: fmt.Sprintf("Page %d", page),
		})
	}

	title := fmt.Sprintf("%s Manual Pages | Free DevTools by Hexmos", subcategoryTitle)
	if page > 1 {
		title = fmt.Sprintf("%s Manual Pages - Page %d of %d | Free DevTools by Hexmos", subcategoryTitle, page, totalPages)
	}

	description := fmt.Sprintf("Browse %s manual pages with detailed documentation.", subcategoryTitle)
	if page > 1 {
		description = fmt.Sprintf("Browse %s manual pages - Page %d of %d. Find detailed documentation and system references.", subcategoryTitle, page, totalPages)
	}
	keywords := []string{subcategory, category, "man pages", "manual", "documentation"}
	if page > 1 {
		keywords = append(keywords, fmt.Sprintf("page %d", page))
	}
	canonical := fmt.Sprintf("%s/man-pages/%s/%s/", config.GetSiteURL(), url.PathEscape(category), url.PathEscape(subcategory))
	if page > 1 {
		canonical = fmt.Sprintf("%s/man-pages/%s/%s/%d/", config.GetSiteURL(), url.PathEscape(category), url.PathEscape(subcategory), page)
	}


	data := man_pages_components.SubCategoryData{
		Category:        category,
		SubCategory:     subcategory,
		ManPages:        manPages,
		TotalManPages:   totalCount,
		CurrentPage:     page,
		TotalPages:      totalPages,
		BreadcrumbItems: breadcrumbItems,
		LayoutProps: layouts.BaseLayoutProps{
			Title:        title,
			Description:  description,
			Canonical:    canonical,
			Keywords:     keywords,
			OgImage:      "https://hexmos.com/freedevtools/public/tool-banners/man-pages-banner.png",
			TwitterImage: "https://hexmos.com/freedevtools/public/tool-banners/man-pages-banner.png",
			ShowHeader:   true,
			PageType:     "CollectionPage",
		},
	}

	handler := templ.Handler(man_pages_components.SubCategory(data))
	handler.ServeHTTP(w, r)
}

// cleanSlug removes .html extension, removes .8/.9 suffixes, removes version suffixes (-3, -6, -15), converts dots to hyphens, and converts to lowercase
func cleanSlug(slug string) string {
	cleaned := slug

	// Remove .html extension
	cleaned = strings.TrimSuffix(cleaned, ".html")

	// Remove .8, .9, or any single digit suffix (e.g., .8, .9, .1, .2)
	re := regexp.MustCompile(`\.\d+$`)
	cleaned = re.ReplaceAllString(cleaned, "")

	// Remove version suffixes like -3, -6, -15 (dash followed by digits at the end)
	reVersion := regexp.MustCompile(`-\d+$`)
	cleaned = reVersion.ReplaceAllString(cleaned, "")

	// Convert dots to hyphens
	cleaned = strings.ReplaceAll(cleaned, ".", "-")

	// Convert to lowercase
	cleaned = strings.ToLower(cleaned)

	return cleaned
}

// tryFallback1And2 attempts fallback 1 and 2 with the given slug
func tryFallback1And2(w http.ResponseWriter, r *http.Request, db *man_pages.DB, category, slug string, fallbackNum string) bool {
	log.Printf("[DEBUG] %s: Trying with slug='%s', category='%s'", fallbackNum, slug, category)

	// Fallback 1: search by slug only
	startTime := time.Now()
	matches, err := db.GetManPageBySlugOnly(slug)
	duration := time.Since(startTime)
	if err != nil {
		log.Printf("[DEBUG] %s: Error fetching man page by slug only: %v (took %v)", fallbackNum, err, duration)
		return false
	}
	log.Printf("[DEBUG] %s: GetManPageBySlugOnly query took %v", fallbackNum, duration)

	return tryFallback1And2WithMatches(w, r, db, category, slug, fallbackNum, matches, err)
}

// tryFallback1And2WithMatches attempts fallback 1 and 2 with pre-fetched matches
func tryFallback1And2WithMatches(w http.ResponseWriter, r *http.Request, db *man_pages.DB, category, slug string, fallbackNum string, matches []struct{ MainCategory, SubCategory, Slug string }, err error) bool {
	if err != nil {
		return false
	}

	log.Printf("[DEBUG] %s: Found %d matches by slug only", fallbackNum, len(matches))
	if len(matches) > 0 {
		for i, match := range matches {
			log.Printf("[DEBUG] %s: Match %d: category='%s', subcategory='%s', slug='%s'", fallbackNum, i+1, match.MainCategory, match.SubCategory, match.Slug)
		}
	}

	// Only redirect if exactly one match is found
	if len(matches) == 1 {
		match := matches[0]
		// Redirect to the correct URL
		correctURL := config.GetBasePath() + "/man-pages/" + url.PathEscape(match.MainCategory) + "/" + url.PathEscape(match.SubCategory) + "/" + url.PathEscape(match.Slug) + "/"
		log.Printf("[DEBUG] %s: SUCCESS - Redirecting to: %s", fallbackNum, correctURL)
		http.Redirect(w, r, correctURL, http.StatusMovedPermanently)
		return true
	}

	// Fallback 2: if multiple matches found, try slug + mainCategory
	if len(matches) > 1 && category != "" {
		log.Printf("[DEBUG] %s: Multiple matches found, trying with slug + category='%s'", fallbackNum, category)
		startTime := time.Now()
		categoryMatches, err := db.GetManPageBySlugAndMainCategory(slug, category)
		duration := time.Since(startTime)
		if err != nil {
			log.Printf("[DEBUG] %s: Error fetching man page by slug and main category: %v (took %v)", fallbackNum, err, duration)
			return false
		}
		log.Printf("[DEBUG] %s: GetManPageBySlugAndMainCategory query took %v", fallbackNum, duration)

		log.Printf("[DEBUG] %s: Found %d matches with slug + category", fallbackNum, len(categoryMatches))
		if len(categoryMatches) > 0 {
			for i, match := range categoryMatches {
				log.Printf("[DEBUG] %s: Category match %d: category='%s', subcategory='%s', slug='%s'", fallbackNum, i+1, match.MainCategory, match.SubCategory, match.Slug)
			}
		}

		// Only redirect if exactly one match is found with slug + mainCategory
		if len(categoryMatches) == 1 {
			match := categoryMatches[0]
			// Redirect to the correct URL
			correctURL := config.GetBasePath() + "/man-pages/" + url.PathEscape(match.MainCategory) + "/" + url.PathEscape(match.SubCategory) + "/" + url.PathEscape(match.Slug) + "/"
			log.Printf("[DEBUG] %s: SUCCESS - Redirecting to: %s", fallbackNum, correctURL)
			http.Redirect(w, r, correctURL, http.StatusMovedPermanently)
			return true
		}
	}

	log.Printf("[DEBUG] %s: FAILED - No unique match found", fallbackNum)
	return false
}

// tryFallback4 attempts to get the first match by slug (even if multiple exist), cleaning the slug if needed
func tryFallback4(w http.ResponseWriter, r *http.Request, db *man_pages.DB, slug string) bool {
	log.Printf("[DEBUG] Fallback4: Trying with slug='%s'", slug)

	// Try with original slug first
	startTime := time.Now()
	matches, err := db.GetManPageBySlugOnly(slug)
	duration := time.Since(startTime)
	if err != nil {
		log.Printf("[DEBUG] Fallback4: Error fetching man page by slug only: %v (took %v)", err, duration)
		return false
	}
	log.Printf("[DEBUG] Fallback4: GetManPageBySlugOnly query (original) took %v", duration)

	return tryFallback4WithMatches(w, r, db, slug, matches, err)
}

// tryFallback4WithMatches attempts to get the first match with pre-fetched matches
func tryFallback4WithMatches(w http.ResponseWriter, r *http.Request, db *man_pages.DB, slug string, matches []struct{ MainCategory, SubCategory, Slug string }, err error) bool {
	if err != nil {
		return false
	}

	log.Printf("[DEBUG] Fallback4: Found %d matches by slug only", len(matches))
	if len(matches) > 0 {
		// Return the first match even if there are multiple
		match := matches[0]
		correctURL := config.GetBasePath() + "/man-pages/" + url.PathEscape(match.MainCategory) + "/" + url.PathEscape(match.SubCategory) + "/" + url.PathEscape(match.Slug) + "/"
		log.Printf("[DEBUG] Fallback4: SUCCESS - Redirecting to first match: %s", correctURL)
		http.Redirect(w, r, correctURL, http.StatusMovedPermanently)
		return true
	}

	// If not found, try with cleaned slug
	cleanedSlug := cleanSlug(slug)
	log.Printf("[DEBUG] Fallback4: No matches with original slug, trying cleaned slug='%s'", cleanedSlug)
	if cleanedSlug != slug {
		startTime := time.Now()
		cleanedMatches, err := db.GetManPageBySlugOnly(cleanedSlug)
		duration := time.Since(startTime)
		if err != nil {
			log.Printf("[DEBUG] Fallback4: Error fetching man page by cleaned slug: %v (took %v)", err, duration)
			return false
		}
		log.Printf("[DEBUG] Fallback4: GetManPageBySlugOnly query (cleaned) took %v", duration)

		log.Printf("[DEBUG] Fallback4: Found %d matches with cleaned slug", len(cleanedMatches))
		if len(cleanedMatches) > 0 {
			// Return the first match even if there are multiple
			match := cleanedMatches[0]
			correctURL := config.GetBasePath() + "/man-pages/" + url.PathEscape(match.MainCategory) + "/" + url.PathEscape(match.SubCategory) + "/" + url.PathEscape(match.Slug) + "/"
			log.Printf("[DEBUG] Fallback4: SUCCESS - Redirecting to first match with cleaned slug: %s", correctURL)
			http.Redirect(w, r, correctURL, http.StatusMovedPermanently)
			return true
		}
	}

	log.Printf("[DEBUG] Fallback4: FAILED - No matches found")
	return false
}

// tryFallback5 attempts to get matches using LIKE query with first 5 characters of slug
func tryFallback5(w http.ResponseWriter, r *http.Request, db *man_pages.DB, slug string) bool {
	log.Printf("[DEBUG] Fallback5: Trying LIKE query with slug='%s'", slug)

	// Get first 5 characters for LIKE query
	prefix := slug
	if len(prefix) > 5 {
		prefix = prefix[:5]
	}
	if len(prefix) < 3 {
		log.Printf("[DEBUG] Fallback5: Slug too short (< 3 chars), skipping")
		return false
	}

	// Try "starts with" pattern first (prefix%)
	var startTime time.Time
	var duration time.Duration
	startTime = time.Now()
	matches, err := db.GetManPageBySlugLike(slug, "starts")
	duration = time.Since(startTime)
	if err != nil {
		log.Printf("[DEBUG] Fallback5: Error fetching man page by LIKE (starts): %v (took %v)", err, duration)
		return false
	}
	log.Printf("[DEBUG] Fallback5: GetManPageBySlugLike query (starts) took %v", duration)

	log.Printf("[DEBUG] Fallback5: Found %d matches with LIKE 'starts with' pattern '%s%%'", len(matches), prefix)
	if len(matches) > 0 {
		for i, match := range matches {
			log.Printf("[DEBUG] Fallback5: Match %d: category='%s', subcategory='%s', slug='%s'", i+1, match.MainCategory, match.SubCategory, match.Slug)
		}
		// Return the first match
		match := matches[0]
		correctURL := config.GetBasePath() + "/man-pages/" + url.PathEscape(match.MainCategory) + "/" + url.PathEscape(match.SubCategory) + "/" + url.PathEscape(match.Slug) + "/"
		log.Printf("[DEBUG] Fallback5: SUCCESS - Redirecting to first LIKE match (starts with): %s", correctURL)
		http.Redirect(w, r, correctURL, http.StatusMovedPermanently)
		return true
	}

	// If no matches with "starts with", try "contains" pattern (%prefix%)
	log.Printf("[DEBUG] Fallback5: No matches with 'starts with', trying 'contains' pattern")
	startTime = time.Now()
	matches, err = db.GetManPageBySlugLike(slug, "contains")
	duration = time.Since(startTime)
	if err != nil {
		log.Printf("[DEBUG] Fallback5: Error fetching man page by LIKE (contains): %v (took %v)", err, duration)
		return false
	}
	log.Printf("[DEBUG] Fallback5: GetManPageBySlugLike query (contains) took %v", duration)

	log.Printf("[DEBUG] Fallback5: Found %d matches with LIKE 'contains' pattern '%%%s%%'", len(matches), prefix)
	if len(matches) > 0 {
		for i, match := range matches {
			log.Printf("[DEBUG] Fallback5: Match %d: category='%s', subcategory='%s', slug='%s'", i+1, match.MainCategory, match.SubCategory, match.Slug)
		}
		// Return the first match
		match := matches[0]
		correctURL := config.GetBasePath() + "/man-pages/" + url.PathEscape(match.MainCategory) + "/" + url.PathEscape(match.SubCategory) + "/" + url.PathEscape(match.Slug) + "/"
		log.Printf("[DEBUG] Fallback5: SUCCESS - Redirecting to first LIKE match (contains): %s", correctURL)
		http.Redirect(w, r, correctURL, http.StatusMovedPermanently)
		return true
	}

	log.Printf("[DEBUG] Fallback5: FAILED - No LIKE matches found")
	return false
}

// tryFallback6OldUrlsCSV attempts to find a slug by checking old_urls.csv
// It searches for entries matching category/subcategory and extracts the slug
func tryFallback6OldUrlsCSV(w http.ResponseWriter, r *http.Request, db *man_pages.DB, category, subcategory string) bool {
	log.Printf("[DEBUG] Fallback6: Trying old_urls.csv lookup with category='%s', subcategory='%s'", category, subcategory)

	// Get the path to the CSV file (relative to project root)
	csvPath := filepath.Join("db", "all_dbs", "man-pages_old_urls.csv")

	// Open the CSV file
	file, err := os.Open(csvPath)
	if err != nil {
		log.Printf("[DEBUG] Fallback6: Error opening CSV file '%s': %v", csvPath, err)
		return false
	}
	defer file.Close()

	// Build search patterns:
	// 1. Exact match: /category/subcategory/
	// 2. Cross-category: /any-category/subcategory/ (in case subcategory moved to different category)
	searchPatternExact := "/" + category + "/" + subcategory + "/"
	searchPatternSubcategory := "/" + subcategory + "/" // Matches any category with this subcategory

	// Scan through the file line by line and collect up to 5 matching slugs
	scanner := bufio.NewScanner(file)
	var foundSlugs []string
	seenSlugs := make(map[string]bool) // Avoid duplicates
	maxSlugs := 5

	for scanner.Scan() {
		// Stop if we've found enough slugs
		if len(foundSlugs) >= maxSlugs {
			break
		}

		line := strings.TrimSpace(scanner.Text())
		if line == "" {
			continue
		}

		// Check if this line matches our exact pattern or cross-category pattern
		if strings.HasPrefix(line, searchPatternExact) || strings.Contains(line, searchPatternSubcategory) {
			// Extract the slug (third path component)
			// Format: /category/subcategory/slug/
			parts := strings.Split(strings.Trim(line, "/"), "/")
			if len(parts) >= 3 {
				slug := parts[2]
				// Only add if we haven't seen this slug before
				if !seenSlugs[slug] {
					foundSlugs = append(foundSlugs, slug)
					seenSlugs[slug] = true
					log.Printf("[DEBUG] Fallback6: Found matching entry in CSV: '%s', extracted slug='%s'", line, slug)
				}
			}
		}
	}

	if err := scanner.Err(); err != nil {
		log.Printf("[DEBUG] Fallback6: Error reading CSV file: %v", err)
		return false
	}

	if len(foundSlugs) == 0 {
		log.Printf("[DEBUG] Fallback6: No matching entry found in CSV for patterns '%s' or containing '/%s/'", searchPatternExact, subcategory)
		return false
	}

	log.Printf("[DEBUG] Fallback6: Found %d matching slugs in CSV, trying each one sequentially", len(foundSlugs))

	// Try each slug sequentially until one is found in the database
	for i, foundSlug := range foundSlugs {
		log.Printf("[DEBUG] Fallback6: Trying slug %d/%d: '%s'", i+1, len(foundSlugs), foundSlug)

		// Query the database with the found slug
		startTime := time.Now()
		matches, err := db.GetManPageBySlugOnly(foundSlug)
		duration := time.Since(startTime)
		if err != nil {
			log.Printf("[DEBUG] Fallback6: Error fetching man page by slug '%s': %v (took %v)", foundSlug, err, duration)
			continue // Try next slug
		}
		log.Printf("[DEBUG] Fallback6: GetManPageBySlugOnly query took %v", duration)

		log.Printf("[DEBUG] Fallback6: Found %d matches for slug '%s'", len(matches), foundSlug)
		if len(matches) > 0 {
			for j, match := range matches {
				log.Printf("[DEBUG] Fallback6: Match %d: category='%s', subcategory='%s', slug='%s'", j+1, match.MainCategory, match.SubCategory, match.Slug)
			}
			// Use the first match to get the correct subcategory
			// Redirect to the subcategory page, not the individual page
			match := matches[0]
			correctURL := config.GetBasePath() + "/man-pages/" + url.PathEscape(match.MainCategory) + "/" + url.PathEscape(match.SubCategory) + "/"
			log.Printf("[DEBUG] Fallback6: SUCCESS - Slug '%s' found in database, redirecting to subcategory page: %s", foundSlug, correctURL)
			http.Redirect(w, r, correctURL, http.StatusMovedPermanently)
			return true
		}
		log.Printf("[DEBUG] Fallback6: Slug '%s' not found in database, trying next slug", foundSlug)
	}

	// If exact slugs not found, try LIKE search with the first slug
	if len(foundSlugs) > 0 {
		firstSlug := foundSlugs[0]
		log.Printf("[DEBUG] Fallback6: All exact slugs failed, trying LIKE search with first slug '%s'", firstSlug)
		startTime := time.Now()
		likeMatches, err := db.GetManPageBySlugLike(firstSlug, "contains") // contains pattern
		duration := time.Since(startTime)
		if err == nil {
			log.Printf("[DEBUG] Fallback6: GetManPageBySlugLike query took %v", duration)
			log.Printf("[DEBUG] Fallback6: Found %d LIKE matches for slug '%s'", len(likeMatches), firstSlug)
			if len(likeMatches) > 0 {
				match := likeMatches[0]
				correctURL := config.GetBasePath() + "/man-pages/" + url.PathEscape(match.MainCategory) + "/" + url.PathEscape(match.SubCategory) + "/"
				log.Printf("[DEBUG] Fallback6: SUCCESS (LIKE) - Redirecting to subcategory page: %s", correctURL)
				http.Redirect(w, r, correctURL, http.StatusMovedPermanently)
				return true
			}
		}
	}

	// Last resort: redirect to category page
	log.Printf("[DEBUG] Fallback6: All slugs failed, redirecting to category page as fallback")
	correctURL := config.GetBasePath() + "/man-pages/" + url.PathEscape(category) + "/"
	log.Printf("[DEBUG] Fallback6: FALLBACK - Redirecting to category page: %s", correctURL)
	http.Redirect(w, r, correctURL, http.StatusMovedPermanently)
	return true
}

func HandleManPagesPage(w http.ResponseWriter, r *http.Request, db *man_pages.DB, category, subcategory, slug string) {
	log.Printf("[DEBUG] Initial lookup: category='%s', subcategory='%s', slug='%s'", category, subcategory, slug)

	manPage, err := db.GetManPageBySlug(category, subcategory, slug)
	if err != nil {
		log.Printf("[DEBUG] Error fetching man page: %v", err)
		http.Error(w, "Internal server error", http.StatusInternalServerError)
		return
	}

	if manPage == nil {
		log.Printf("[DEBUG] Initial lookup returned nil, starting fallback chain")

		// Fallback 1: search by slug only
		if tryFallback1And2(w, r, db, category, slug, "Fallback1") {
			return
		}

		// Fallback 3: clean the slug (remove .html, remove .8/.9, lowercase) and try fallback 1 & 2 again
		cleanedSlug := cleanSlug(slug)
		log.Printf("[DEBUG] Fallback3: Original slug='%s', cleaned slug='%s'", slug, cleanedSlug)
		if cleanedSlug != slug {
			if tryFallback1And2(w, r, db, category, cleanedSlug, "Fallback3") {
				return
			}
		} else {
			log.Printf("[DEBUG] Fallback3: Slug unchanged after cleaning, skipping")
		}

		// Fallback 4: try first match by slug (even if multiple exist), clean slug if needed
		if tryFallback4(w, r, db, slug) {
			return
		}

		// Fallback 5: try LIKE query with first 5 characters of slug
		if tryFallback5(w, r, db, slug) {
			return
		}

		// Zero matches or multiple matches (ambiguous) - return 404
		log.Printf("[DEBUG] All fallbacks exhausted - returning 404 for category='%s', subcategory='%s', slug='%s'", category, subcategory, slug)
		http.NotFound(w, r)
		return
	}

	log.Printf("[DEBUG] Initial lookup SUCCESS - found man page")

	categoryTitle := man_pages_components.FormatCategoryName(category)
	subcategoryTitle := man_pages_components.FormatCategoryName(subcategory)

	breadcrumbItems := []components.BreadcrumbItem{
		{Label: "Free DevTools", Href: config.GetBasePath() + "/"},
		{Label: "Man Pages", Href: config.GetBasePath() + "/man-pages/"},
		{Label: categoryTitle, Href: config.GetBasePath() + "/man-pages/" + url.PathEscape(category) + "/"},
		{Label: subcategoryTitle, Href: config.GetBasePath() + "/man-pages/" + url.PathEscape(category) + "/" + url.PathEscape(subcategory) + "/"},
		{Label: slug},
	}

	title := fmt.Sprintf("%s - Manual Page | Free DevTools by Hexmos", manPage.Title)
	description := fmt.Sprintf("Read the manual page for %s", manPage.Title)

	// Get enabled ad types from config
	enabledAdTypes := config.GetEnabledAdTypes("man-pages")

	// Get banner if bannerdb is enabled
	var textBanner *banner.Banner
	adsEnabled := config.GetAdsEnabled()
	if adsEnabled && enabledAdTypes["bannerdb"] {
	}

	// Keywords for Ethical Ads
	keywords := []string{
		"man pages",
		"manual",
		"documentation",
		category,
		subcategory,
		slug,
	}
	if manPage.Title != "" {
		keywords = append(keywords, manPage.Title)
	}

	canonical := fmt.Sprintf("%s/man-pages/%s/%s/%s/", config.GetSiteURL(), url.PathEscape(category), url.PathEscape(subcategory), url.PathEscape(slug))

	// Parse SeeAlso JSON
	var seeAlsoItems []common.SeeAlsoItem
	if manPage.SeeAlso != "" {
		var seeAlsoData []common.SeeAlsoJSONItem
		if err := json.Unmarshal([]byte(manPage.SeeAlso), &seeAlsoData); err != nil {
			// Log error but don't fail the page
			log.Printf("Error parsing see_also JSON for %s/%s/%s: %v", category, subcategory, slug, err)
		} else {
			for _, item := range seeAlsoData {
				seeAlsoItems = append(seeAlsoItems, item.ToSeeAlsoItem())
			}
		}
	}

	data := man_pages_components.PageData{
		ManPage:         manPage,
		Category:        category,
		SubCategory:     subcategory,
		BreadcrumbItems: breadcrumbItems,
		LayoutProps: layouts.BaseLayoutProps{
			Name:         manPage.Title,
			Title:        title,
			Description:  description,
			Canonical:    canonical,
			Keywords:     keywords,
			OgImage:      "https://hexmos.com/freedevtools/public/tool-banners/man-pages-banner.png",
			TwitterImage: "https://hexmos.com/freedevtools/public/tool-banners/man-pages-banner.png",
			Path:         canonical,
			PageType:     "TechArticle",
			ShowHeader:   true,
		},
		TextBanner:   textBanner,
		Keywords:     keywords,
		SeeAlsoItems: seeAlsoItems,
	}

	handler := templ.Handler(man_pages_components.Page(data))
	handler.ServeHTTP(w, r)
}

func HandleManPagesCredits(w http.ResponseWriter, r *http.Request) {
	breadcrumbItems := []components.BreadcrumbItem{
		{Label: "Free DevTools", Href: config.GetBasePath() + "/"},
		{Label: "Man Pages", Href: config.GetBasePath() + "/man-pages/"},
		{Label: "Credits"},
	}

	title := "Ubuntu Manpages Credits & Acknowledgments | Free DevTools by Hexmos"
	description := "Credits and acknowledgments for the Ubuntu man pages provided on Free DevTools. Learn about the sources, licenses, and contributors."
	keywords := []string{
		"ubuntu manpages credits",
		"man page attributions",
		"linux documentation",
		"open source manpages",
		"man page contributors",
	}

	data := man_pages_components.CreditsData{
		BreadcrumbItems: breadcrumbItems,
		LayoutProps: layouts.BaseLayoutProps{
			Title:        title,
			Description:  description,
			Canonical:    config.GetSiteURL() + "/man-pages/credits/",
			Keywords:     keywords,
			OgImage:      "https://hexmos.com/freedevtools/public/site-banner.png",
			TwitterImage: "https://hexmos.com/freedevtools/public/site-banner.png",
			ShowHeader:   true,
			PageType:     "CollectionPage",
		},
	}

	handler := templ.Handler(man_pages_components.Credits(data))
	handler.ServeHTTP(w, r)
}
