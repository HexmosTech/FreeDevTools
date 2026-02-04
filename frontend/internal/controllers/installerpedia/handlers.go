// Package installerpedia - Installerpedia Handlers
//
// This file contains all business logic and database operations for Installerpedia pages.
// All handlers in this file are called from cmd/server/installerpedia_routes.go after
// routing logic determines which handler to invoke.
//
// IMPORTANT: All database operations for Installerpedia MUST be performed in this file.
// The route files (cmd/server/installerpedia_routes.go) should only handle URL routing
// and delegate to these handlers. This separation ensures:
// - Single responsibility: routes handle routing, handlers handle business logic
// - Maintainability: all DB logic is centralized in one place
// - Testability: handlers can be tested independently of routing
//
// Each handler function performs the following:
// 1. Database queries to fetch required data
// 2. Business logic processing (data transformation, validation, etc.)
// 3. Response rendering (HTML templates, JSON, etc.)
package installerpedia

import (
	"encoding/json"
	"log"
	"net/http"
	"strconv"
	"sync"

	"fdt-templ/components"
	"fdt-templ/components/common"
	"fdt-templ/components/layouts"
	installerpedia_pages "fdt-templ/components/pages/installerpedia"
	"fdt-templ/internal/config"
	"fdt-templ/internal/db/banner"
	"fdt-templ/internal/db/installerpedia"

	"github.com/a-h/templ"
)

const defaultOgImage = "https://hexmos.com/freedevtools/public/site-banner.png"

func installerpediaCanonical(path string) string {
	return config.GetSiteURL() + path
}

func HandleIndex(w http.ResponseWriter, r *http.Request, db *installerpedia.DB) {
	var (
		categories []installerpedia.RepoCategory
		overview   installerpedia.Overview
		err1, err2 error
	)

	var wg sync.WaitGroup
	wg.Add(2)

	go func() {
		defer wg.Done()
		categories, err1 = db.GetRepoCategories()
	}()

	go func() {
		defer wg.Done()
		overview, err2 = db.GetOverview()
	}()

	wg.Wait()

	if err1 != nil || err2 != nil {
		log.Printf("Error fetching Installerpedia index data: %v, %v", err1, err2)
		http.Error(w, "Failed to load index data", http.StatusInternalServerError)
		return
	}

	title := "Installerpedia – Open Source Install Guides | Free DevTools by Hexmos"

	keywords := []string{
		"installerpedia",
		"installation guides",
		"developer tools",
		"open source",
		"install software",
		"install github repositories",
		"github repository installation guide",
	}

	breadcrumbs := []components.BreadcrumbItem{
		{Label: "Free DevTools", Href: config.GetBasePath() + "/"},
		{Label: "InstallerPedia"},
	}
	indexData := installerpedia_pages.IndexData{
		Categories:      categories,
		Overview:        &overview,
		BreadcrumbItems: breadcrumbs,
		LayoutProps: layouts.BaseLayoutProps{
			Title:        title,
			Description:  "Installerpedia provides installation guides for developer tools, languages, libraries, frameworks, servers, and CLI tools. Includes copy-paste commands, OS-specific steps, and automated installs using ipm.",
			Canonical:    installerpediaCanonical("/installerpedia/"),
			OgImage:      defaultOgImage,
			TwitterImage: defaultOgImage,
			ShowHeader:   true,
			Keywords:     keywords,
		},
		Keywords:    keywords,
	}

	templ.Handler(installerpedia_pages.Index(indexData)).ServeHTTP(w, r)
}

func HandleCategory(w http.ResponseWriter, r *http.Request, db *installerpedia.DB, category string, page int) {
	const itemsPerPage = 30
	offset := (page - 1) * itemsPerPage

	var (
		repos      []installerpedia.RepoData
		totalRepos int
		err1, err2 error
	)

	var wg sync.WaitGroup
	wg.Add(2)

	go func() {
		defer wg.Done()
		repos, err1 = db.GetReposByTypePaginated(category, itemsPerPage, offset)
	}()

	go func() {
		defer wg.Done()
		totalRepos, err2 = db.GetReposCountByType(category)
	}()

	wg.Wait()

	if err1 != nil || err2 != nil {
		log.Printf("Error fetching Installerpedia category data (category: %s): %v, %v", category, err1, err2)
		http.Error(w, "Failed to load category data", http.StatusInternalServerError)
		return
	}

	totalPages := (totalRepos + itemsPerPage - 1) / itemsPerPage
	if page < 1 || (totalPages > 0 && page > totalPages) {
		http.NotFound(w, r)
		return
	}

	basePath := config.GetBasePath()

	breadcrumbs := []components.BreadcrumbItem{
		{Label: "Free DevTools", Href: basePath + "/"},
		{Label: "Installerpedia", Href: basePath + "/installerpedia/"},
		{Label: category},
	}

	title := category + " Install Guides | Installerpedia"
	description := "Installation guides for " + category + ". Step-by-step setup instructions."

	if page > 1 {
		title = category + " Install Guides – Page " + strconv.Itoa(page) + " | Installerpedia"
		description = "Browse page " + strconv.Itoa(page) + " of " + category + " installation guides."
	}

	canonicalPath := "/installerpedia/" + category + "/"
	if page > 1 {
		canonicalPath = canonicalPath + strconv.Itoa(page) + "/"
	}
	keywords := []string{
		"install " + category + " repositories",
		category + " installation guide",
		"install " + category + " github repositories",
		"installerpedia",
	}

	catData := installerpedia_pages.CategoryData{
		Category:        category,
		Repos:           repos,
		CurrentPage:     page,
		TotalPages:      totalPages,
		RepoCount:       totalRepos,
		BreadcrumbItems: breadcrumbs,
		LayoutProps: layouts.BaseLayoutProps{
			Title:        title,
			Description:  description,
			Canonical:    installerpediaCanonical(canonicalPath),
			OgImage:      defaultOgImage,
			TwitterImage: defaultOgImage,
			ShowHeader:   true,
			Keywords:     keywords,
		},
		Keywords:    keywords,
	}

	templ.Handler(installerpedia_pages.Category(catData)).ServeHTTP(w, r)
}

func HandleSlug(w http.ResponseWriter, r *http.Request, db *installerpedia.DB, category string, slug string, hashID int64) {
	// GetRepo should match dynamically computed hashID
	repo, err := db.GetRepo(hashID)
	if err != nil || repo == nil {
		if err != nil {
			log.Printf("Error fetching Installerpedia repo (slug: %s): %v", slug, err)
		}
		http.NotFound(w, r)
		return
	}

	basePath := config.GetBasePath()

	breadcrumbs := []components.BreadcrumbItem{
		{Label: "Free DevTools", Href: basePath + "/"},
		{Label: "Installerpedia", Href: basePath + "/installerpedia/"},
		{Label: category, Href: basePath + "/installerpedia/" + category + "/"},
		{Label: repo.Repo},
	}

	title := repo.Repo + " Installation Guide | Installerpedia"

	// Get enabled ad types from config
	adsEnabled := config.GetAdsEnabled()
	enabledAdTypes := config.GetEnabledAdTypes("installerpedia")

	// Get banner if bannerdb is enabled
	var textBanner *banner.Banner
	if adsEnabled && enabledAdTypes["bannerdb"] {
		var err error
		textBanner, err = banner.GetRandomBannerByType("text")
		if err != nil {
			log.Printf("Error getting random banner: %v", err)
		}
	}

	// Keywords for Ethical Ads
	keywords := []string{
		"installerpedia",
		"installation",
		"install",
		category,
		repo.Repo,
	}

	// Parse SeeAlso JSON
	var seeAlsoItems []common.SeeAlsoItem
	if repo.SeeAlso != "" {
		var seeAlsoData []common.SeeAlsoJSONItem
		if err := json.Unmarshal([]byte(repo.SeeAlso), &seeAlsoData); err != nil {
			// Log error but don't fail the page
			log.Printf("Error parsing see_also JSON for %s/%s: %v", category, slug, err)
		} else {
			for _, item := range seeAlsoData {
				seeAlsoItems = append(seeAlsoItems, item.ToSeeAlsoItem())
			}
		}
	}

	canonicalPath := "/installerpedia/" + category + "/" + slug + "/"
	pageData := installerpedia_pages.PageData{
		Repo:            repo,
		Category:        category,
		BreadcrumbItems: breadcrumbs,
		LayoutProps: layouts.BaseLayoutProps{
			Title:        title,
			Description:  "How to install " + repo.Repo + " on your system. Step-by-step installation commands and setup instructions.",
			Canonical:    installerpediaCanonical(canonicalPath),
			Keywords:     keywords,
			OgImage:      defaultOgImage,
			TwitterImage: defaultOgImage,
			ShowHeader:   true,
		},
		TextBanner:   textBanner,
		Keywords:     keywords,
		SeeAlsoItems: seeAlsoItems,
	}

	handler := templ.Handler(installerpedia_pages.Page(pageData))
	handler.ServeHTTP(w, r)
}
