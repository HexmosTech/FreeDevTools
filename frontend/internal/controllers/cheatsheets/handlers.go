// Package cheatsheets - Cheatsheets Handlers
//
// This file contains all business logic and database operations for Cheatsheets pages.
// All handlers in this file are called from cmd/server/cheatsheets_routes.go after
// routing logic determines which handler to invoke.
//
// IMPORTANT: All database operations for Cheatsheets MUST be performed in this file.
// The route files (cmd/server/cheatsheets_routes.go) should only handle URL routing
// and delegate to these handlers. This separation ensures:
// - Single responsibility: routes handle routing, handlers handle business logic
// - Maintainability: all DB logic is centralized in one place
// - Testability: handlers can be tested independently of routing
//
// Each handler function performs the following:
// 1. Database queries to fetch required data
// 2. Business logic processing (data transformation, validation, etc.)
// 3. Response rendering (HTML templates, JSON, etc.)
package cheatsheets

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"fdt-templ/components"
	"fdt-templ/components/common"
	"fdt-templ/components/layouts"
	cheatsheets_components "fdt-templ/components/pages/cheatsheets"
	"fdt-templ/internal/config"
	"fdt-templ/internal/db/cheatsheets"
	"github.com/a-h/templ"
)

const itemsPerPage = 30

func HandleIndex(w http.ResponseWriter, r *http.Request, db *cheatsheets.DB, page int) {
	// Run queries in parallel
	categoriesChan := make(chan []cheatsheets.CategoryWithPreview)
	errChan := make(chan error, 1)
	overview, err := db.GetOverview()
	if err != nil {
		log.Printf("Error fetching overview: %v", err)
		return
	}

	go func() {
		categories, err := db.GetCategoriesWithPreviews(page, itemsPerPage)
		if err != nil {
			errChan <- err
			close(categoriesChan)
			return
		}
		categoriesChan <- categories
	}()

	categories := <-categoriesChan

	if len(errChan) > 0 {
		log.Printf("Error fetching cheatsheets data: %v", <-errChan)
		http.Error(w, "Internal server error", http.StatusInternalServerError)
		return
	}

	totalPages := (overview.CategoryCount + itemsPerPage - 1) / itemsPerPage
	if page > totalPages && totalPages > 0 {
		http.NotFound(w, r)
		return
	}

	basePath := config.GetBasePath()
	breadcrumbItems := []components.BreadcrumbItem{
		{Label: "Free DevTools", Href: basePath + "/"},
	}
	// On page 1, "Cheatsheets" is the current page, so it should be a span (no href)
	// On other pages, it should be a link
	if page > 1 {
		breadcrumbItems = append(breadcrumbItems, components.BreadcrumbItem{Label: "Cheatsheets", Href: basePath + "/c/"})
	} else {
		breadcrumbItems = append(breadcrumbItems, components.BreadcrumbItem{Label: "Cheatsheets"})
	}

	title := "Cheatsheets - Quick Reference Commands & Syntax | Online Free DevTools by Hexmos"
	description := "Concise, easy-to-scan reference pages that summarize commands, syntax, and key concepts for faster learning and recall."

	if page > 1 {
		title = fmt.Sprintf("Cheatsheets - Page %d | Online Free DevTools by Hexmos", page)
		description = fmt.Sprintf("Browse page %d of our cheatsheets collection. Quick reference for commands, syntax, and programming concepts.", page)
	}

	// Keywords for Ethical Ads
	keywords := []string{
		"cheatsheets",
		"reference",
		"commands",
		"syntax",
		"programming",
		"documentation",
		"quick reference",
		"command line",
		"cli",
		"terminal",
	}

	// Build canonical URL
	canonicalURL := fmt.Sprintf("%s/c/", config.GetSiteURL())
	if page > 1 {
		canonicalURL = fmt.Sprintf("%s/c/%d/", config.GetSiteURL(), page)
	}

	defaultOgImage := "https://hexmos.com/freedevtools/public/site-banner.png"

	data := cheatsheets_components.IndexData{
		Categories:       categories,
		CurrentPage:      page,
		TotalPages:       totalPages,
		TotalCategories:  overview.CategoryCount,
		TotalCheatsheets: overview.TotalCount,
		BreadcrumbItems:  breadcrumbItems,
		LayoutProps: layouts.BaseLayoutProps{
			Title:        title,
			Description:  description,
			ShowHeader:   true,
			Canonical:    canonicalURL,
			Keywords:     keywords,
			OgImage:      defaultOgImage,
			TwitterImage: defaultOgImage,
		},
		Keywords: keywords,
	}

	handler := templ.Handler(cheatsheets_components.Index(data))
	handler.ServeHTTP(w, r)
}

func HandleCategory(w http.ResponseWriter, r *http.Request, db *cheatsheets.DB, categorySlug string, page int) {
	// Parallel fetch: Category info + Cheatsheets list

	categoryChan := make(chan *cheatsheets.Category)
	cheatsheetsChan := make(chan []cheatsheets.Cheatsheet)
	totalChan := make(chan int)
	errChan := make(chan error, 2)

	go func() {
		cat, err := db.GetCategoryBySlug(categorySlug)
		if err != nil {
			errChan <- err
			close(categoryChan)
			return
		}
		categoryChan <- cat
	}()

	go func() {
		cs, total, err := db.GetCheatsheetsByCategory(categorySlug, page, itemsPerPage)
		if err != nil {
			errChan <- err
			close(cheatsheetsChan)
			close(totalChan)
			return
		}
		cheatsheetsChan <- cs
		totalChan <- total
	}()

	category := <-categoryChan
	cheatsheetsList := <-cheatsheetsChan
	totalCheatsheets := <-totalChan

	if len(errChan) > 0 {
		log.Printf("Error fetching category data: %v", <-errChan)
		http.Error(w, "Internal server error", http.StatusInternalServerError)
		return
	}

	if category == nil {
		http.NotFound(w, r)
		return
	}

	totalPages := (totalCheatsheets + itemsPerPage - 1) / itemsPerPage
	if page > totalPages && totalPages > 0 {
		http.NotFound(w, r)
		return
	}

	basePath := config.GetBasePath()
	breadcrumbItems := []components.BreadcrumbItem{
		{Label: "Free DevTools", Href: basePath + "/"},
		{Label: "Cheatsheets", Href: basePath + "/c/"},
		{Label: category.Name},
	}

	title := fmt.Sprintf("%s Cheatsheets - Page %d | Online Free DevTools by Hexmos", category.Name, page)
	description := fmt.Sprintf("Browse page %d of %s cheatsheets. Comprehensive reference covering commands, syntax, and key concepts.", page, category.Name)

	if page == 1 {
		title = fmt.Sprintf("%s Cheatsheets | Online Free DevTools by Hexmos", category.Name)
		description = category.Description // Use category description if available
		if description == "" {
			description = fmt.Sprintf("Comprehensive %s cheatsheets covering commands, syntax, and key concepts.", category.Name)
		}
	}

	// Keywords for Ethical Ads
	keywords := []string{
		"cheatsheets",
		"reference",
		category.Name,
		"commands",
		"syntax",
	}

	// Build canonical URL
	canonicalURL := fmt.Sprintf("%s/c/%s/", config.GetSiteURL(), categorySlug)
	if page > 1 {
		canonicalURL = fmt.Sprintf("%s/c/%s/%d/", config.GetSiteURL(), categorySlug, page)
	}

	// Default OG and Twitter images
	defaultOgImage := "https://hexmos.com/freedevtools/public/site-banner.png"

	data := cheatsheets_components.CategoryData{
		Category:         *category,
		Cheatsheets:      cheatsheetsList,
		TotalCheatsheets: totalCheatsheets,
		CurrentPage:      page,
		TotalPages:       totalPages,
		BreadcrumbItems:  breadcrumbItems,
		LayoutProps: layouts.BaseLayoutProps{
			Title:        title,
			Description:  description,
			ShowHeader:   true,
			Canonical:    canonicalURL,
			Keywords:     keywords,
			OgImage:      defaultOgImage,
			TwitterImage: defaultOgImage,
		},
		Keywords: keywords,
	}

	handler := templ.Handler(cheatsheets_components.Category(data))
	handler.ServeHTTP(w, r)
}

func HandleCheatsheet(w http.ResponseWriter, r *http.Request, db *cheatsheets.DB, categorySlug, cheatsheetSlug string, hashID int64) {
	// Need category info + cheatsheet content
	categoryChan := make(chan *cheatsheets.Category)
	cheatsheetChan := make(chan *cheatsheets.Cheatsheet)
	errChan := make(chan error, 2)

	go func() {
		cat, err := db.GetCategoryBySlug(categorySlug)
		if err != nil {
			errChan <- err
			close(categoryChan)
			return
		}
		categoryChan <- cat
	}()

	go func() {
		cs, err := db.GetCheatsheet(hashID)
		if err != nil {
			errChan <- err
			close(cheatsheetChan)
			return
		}
		cheatsheetChan <- cs
	}()

	category := <-categoryChan
	cheatsheet := <-cheatsheetChan

	if len(errChan) > 0 {
		log.Printf("Error fetching cheatsheet data: %v", <-errChan)
		http.Error(w, "Internal server error", http.StatusInternalServerError)
		return
	}

	if category == nil || cheatsheet == nil {
		http.NotFound(w, r)
		return
	}

	basePath := config.GetBasePath()
	breadcrumbItems := []components.BreadcrumbItem{
		{Label: "Free DevTools", Href: basePath + "/"},
		{Label: "Cheatsheets", Href: basePath + "/c/"},
		{Label: category.Name, Href: basePath + "/c/" + category.Slug + "/"},
		{Label: cheatsheet.Slug},
	}

	title := fmt.Sprintf("%s - %s Cheatsheets | Online Free DevTools by Hexmos", cheatsheet.Title, category.Name)
	if cheatsheet.Title == "" {
		title = fmt.Sprintf("%s Cheatsheet | Online Free DevTools by Hexmos", cheatsheet.Slug)
	}

	description := cheatsheet.Description
	if description == "" {
		description = fmt.Sprintf("Cheatsheet for %s %s", category.Name, cheatsheet.Slug)
	}

	// Keywords for Ethical Ads
	keywords := []string{
		"cheatsheets",
		"reference",
		category.Name,
	}
	if len(cheatsheet.Keywords) > 0 {
		keywords = append(keywords, cheatsheet.Keywords...)
	} else {
		if cheatsheet.Title != "" {
			keywords = append(keywords, cheatsheet.Title)
		}
		keywords = append(keywords, cheatsheet.Slug)
	}

	// Parse SeeAlso JSON
	var seeAlsoItems []common.SeeAlsoItem
	if cheatsheet.SeeAlso != "" {
		var seeAlsoData []common.SeeAlsoJSONItem
		if err := json.Unmarshal([]byte(cheatsheet.SeeAlso), &seeAlsoData); err != nil {
			// Log error but don't fail the page
			log.Printf("Error parsing see_also JSON for %s/%s: %v", categorySlug, cheatsheetSlug, err)
		} else {
			for _, item := range seeAlsoData {
				seeAlsoItems = append(seeAlsoItems, item.ToSeeAlsoItem())
			}
		}
	}

	// Build canonical URL
	canonicalURL := fmt.Sprintf("%s/c/%s/%s/", config.GetSiteURL(), categorySlug, cheatsheetSlug)

	// Default OG and Twitter images
	defaultOgImage := "https://hexmos.com/freedevtools/public/site-banner.png"

	data := cheatsheets_components.CheatsheetData{
		Cheatsheet:      *cheatsheet,
		Category:        *category,
		BreadcrumbItems: breadcrumbItems,
		LayoutProps: layouts.BaseLayoutProps{
			Title:        title,
			Description:  description,
			Canonical:    canonicalURL,
			Keywords:     keywords,
			OgImage:      defaultOgImage,
			TwitterImage: defaultOgImage,
			ShowHeader:   true,
			Path:         r.URL.Path,
		},
		Keywords:     keywords,
		SeeAlsoItems: seeAlsoItems,
	}

	handler := templ.Handler(cheatsheets_components.Cheatsheet(data))
	handler.ServeHTTP(w, r)
}

func HandleCredits(w http.ResponseWriter, r *http.Request) {
	data := cheatsheets_components.CreditsData{
		LayoutProps: layouts.BaseLayoutProps{
			Name:        "Cheatsheets Credits",
			Title:       "Cheatsheets Credits | Online Free DevTools by Hexmos",
			Description: "Credits and acknowledgments for the cheatsheet content used in Free DevTools.",
			Canonical:   config.GetSiteURL() + "/c/credits/",
			ShowHeader:  true,
			Path:        r.URL.Path,
		},
	}

	handler := templ.Handler(cheatsheets_components.Credits(data))
	handler.ServeHTTP(w, r)
}
