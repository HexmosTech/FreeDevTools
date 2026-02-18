// Package mcp - MCP (Model Context Protocol) Handlers
//
// This file contains all business logic and database operations for MCP pages.
// All handlers in this file are called from cmd/server/mcp_routes.go after
// routing logic determines which handler to invoke.
//
// IMPORTANT: All database operations for MCP MUST be performed in this file.
// The route files (cmd/server/mcp_routes.go) should only handle URL routing
// and delegate to these handlers. This separation ensures:
// - Single responsibility: routes handle routing, handlers handle business logic
// - Maintainability: all DB logic is centralized in one place
// - Testability: handlers can be tested independently of routing
//
// Each handler function performs the following:
// 1. Database queries to fetch required data
// 2. Business logic processing (data transformation, validation, etc.)
// 3. Response rendering (HTML templates, JSON, etc.)
package mcp

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
	mcp_pages "fdt-templ/components/pages/mcp"
	"fdt-templ/internal/config"
	mcp_db "fdt-templ/internal/db/mcp"

	"github.com/a-h/templ"
)

func HandleIndex(w http.ResponseWriter, r *http.Request, db *mcp_db.DB, page int) {
	itemsPerPage := 30
	basePath := config.GetBasePath()

	// Channels for parallel fetching
	categoriesChan := make(chan []mcp_db.McpCategory)
	overviewChan := make(chan *mcp_db.Overview)
	errChan := make(chan error, 2)

	go func() {
		categories, err := db.GetAllMcpCategories(page, itemsPerPage)
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

	// Wait for results
	var categories []mcp_db.McpCategory
	select {
	case categories = <-categoriesChan:
	case err := <-errChan:
		log.Printf("Error fetching MCP categories: %v", err)
		http.Error(w, "Internal Server Error", http.StatusInternalServerError)
		return
	}

	overview := <-overviewChan

	totalRepos := 0
	totalCategories := 0
	if overview != nil {
		totalRepos = overview.TotalCount
		totalCategories = overview.TotalCategoryCount
	}

	totalPages := (totalCategories + itemsPerPage - 1) / itemsPerPage
	if page > totalPages && totalPages > 0 {
		http.NotFound(w, r)
		return
	}

	breadcrumbItems := []components.BreadcrumbItem{
		{Label: "Free DevTools", Href: basePath + "/"},
		{Label: "MCP Directory", Href: basePath + "/mcp/1/"},
	}
	if page > 1 {
		breadcrumbItems = append(breadcrumbItems, components.BreadcrumbItem{Label: fmt.Sprintf("Page %d", page)})
	}

	title := fmt.Sprintf("Awesome MCP Servers Directory – Discover %d Model Context Protocol Tools & Categories (Page %d) | Free DevTools by Hexmos", totalCategories, page)
	description := fmt.Sprintf("Browse %s+ MCP repositories instantly with our comprehensive directory. Find Model Context Protocol servers, tools, and clients by category. Free, no registration required.", mcp_pages.FormatNumber(totalRepos))

	layoutProps := layouts.BaseLayoutProps{
		Title:       title,
		Description: description,
		ShowHeader:  true,
		Canonical:   fmt.Sprintf("%s/mcp/%d/", config.GetSiteURL(), page),
	}

	data := mcp_pages.IndexData{
		Categories:      categories,
		CurrentPage:     page,
		TotalPages:      totalPages,
		TotalCategories: totalCategories,
		TotalRepos:      totalRepos,
		BreadcrumbItems: breadcrumbItems,
		LayoutProps:     layoutProps,
		PageURL:         basePath + "/mcp/",
	}

	templ.Handler(mcp_pages.Index(data)).ServeHTTP(w, r)
}

func HandleCategory(w http.ResponseWriter, r *http.Request, db *mcp_db.DB, categorySlug string, page int) {
	itemsPerPage := 30
	basePath := config.GetBasePath()

	// Channels for parallel fetching
	catChan := make(chan *mcp_db.McpCategory)
	reposChan := make(chan []mcp_db.McpPage)
	errChan := make(chan error, 2)

	go func() {
		cat, err := db.GetMcpCategory(categorySlug)
		if err != nil {
			errChan <- err
			return
		}
		catChan <- cat
	}()

	go func() {
		repos, err := db.GetMcpPagesByCategory(categorySlug, page, itemsPerPage)
		if err != nil {
			errChan <- err
			return
		}
		reposChan <- repos
	}()

	// Wait for category (needed for validation)
	var cat *mcp_db.McpCategory
	select {
	case cat = <-catChan:
		if cat == nil {
			http.NotFound(w, r)
			return
		}
	case err := <-errChan:
		log.Printf("Error fetching category: %v", err)
		http.Error(w, "Internal Server Error", http.StatusInternalServerError)
		return
	}

	// Wait for repos
	var repos []mcp_db.McpPage
	select {
	case repos = <-reposChan:
	case err := <-errChan:
		log.Printf("Error fetching repos: %v", err)
		http.Error(w, "Error fetching repositories", http.StatusInternalServerError)
		return
	}

	totalPages := (cat.Count + itemsPerPage - 1) / itemsPerPage
	if page > totalPages && totalPages > 0 {
		http.NotFound(w, r)
		return
	}

	breadcrumbItems := []components.BreadcrumbItem{
		{Label: "Free DevTools", Href: basePath + "/"},
		{Label: "MCP Directory", Href: basePath + "/mcp/1/"},
		{Label: cat.Name, Href: fmt.Sprintf("%s/mcp/%s/1/", basePath, categorySlug)},
	}

	title := fmt.Sprintf("%s MCP Servers & Repositories – %d Model Context Protocol Tools (Page %d of %d) | Free DevTools by Hexmos", cat.Name, cat.Count, page, totalPages)
	description := fmt.Sprintf("Discover %d %s MCP servers and repositories for Model Context Protocol integrations. Browse tools compatible with Claude, Cursor, and Windsurf — free, open source, and easy to explore.", cat.Count, cat.Name)

	layoutProps := layouts.BaseLayoutProps{
		Title:       title,
		Description: description,
		ShowHeader:  true,
		Canonical:   fmt.Sprintf("%s/mcp/%s/%d/", config.GetSiteURL(), url.PathEscape(categorySlug), page),
	}

	data := mcp_pages.CategoryData{
		Category:        cat,
		Repos:           repos,
		CurrentPage:     page,
		TotalPages:      totalPages,
		TotalRepos:      cat.Count, // or totalRepos
		BreadcrumbItems: breadcrumbItems,
		LayoutProps:     layoutProps,
		PageURL:         fmt.Sprintf("%s/mcp/%s/", basePath, categorySlug),
	}

	templ.Handler(mcp_pages.Category(data)).ServeHTTP(w, r)
}

func HandleRepo(w http.ResponseWriter, r *http.Request, db *mcp_db.DB, categorySlug string, repoKey string, hashID int64) {
	basePath := config.GetBasePath()

	repo, err := db.GetMcpPage(hashID)
	if err != nil || repo == nil {
		// Fallback 1: Repo not found, check if category exists and redirect to it
		cat, err := db.GetMcpCategory(categorySlug)
		if err == nil && cat != nil {
			// Category exists, redirect to category page
			redirectURL := fmt.Sprintf("%s/mcp/%s/1/", basePath, url.PathEscape(categorySlug))
			http.Redirect(w, r, redirectURL, http.StatusMovedPermanently)
			return
		}
		// Neither repo nor category exists
		http.NotFound(w, r)
		return
	}
	categoryName := strings.Title(strings.ReplaceAll(categorySlug, "-", " "))

	breadcrumbItems := []components.BreadcrumbItem{
		{Label: "Free DevTools", Href: basePath + "/"},
		{Label: "MCP Directory", Href: basePath + "/mcp/1/"},
		{Label: categoryName, Href: fmt.Sprintf("%s/mcp/%s/1/", basePath, categorySlug)},
		{Label: repo.Name},
	}

	ownerName := repo.Owner
	if ownerName == "" {
		ownerName = "Unknown"
	} else {
		if len(ownerName) > 0 {
			ownerName = strings.ToUpper(ownerName[:1]) + ownerName[1:]
		}
	}

	title := fmt.Sprintf("%s – %s MCP Server by %s Model Context Protocol Tool | Free DevTools by Hexmos", repo.Name, categoryName, ownerName)
	description := repo.Description
	if description == "" {
		description = fmt.Sprintf("%s's %s MCP server helps your AI generate more accurate and context-aware responses.", ownerName, repo.Name)
	}

	layoutProps := layouts.BaseLayoutProps{
		Title:       title,
		Description: description,
		ShowHeader:  true,
		Canonical:   fmt.Sprintf("%s/mcp/%s/%s/", config.GetSiteURL(), url.PathEscape(categorySlug), url.PathEscape(repoKey)),
		OgImage:     repo.ImageURL,
	}

	// Fetch category for full details (name, slug, etc.)
	partialCat, err := db.GetMcpCategory(categorySlug)
	if err != nil || partialCat == nil {
		if err != nil {
			log.Printf("Error fetching category for repo view (slug: %s): %v", categorySlug, err)
		}
		// Fallback if category fetch fails (unlikely if repo exists, but safe)
		partialCat = &mcp_db.McpCategory{
			Slug: categorySlug,
			Name: categoryName,
		}
	}

	// Keywords for Ethical Ads
	keywords := []string{
		"mcp",
		"model context protocol",
		categoryName,
		repo.Name,
	}
	if repo.Keywords != "" {
		// Parse keywords from comma-separated string
		keywordParts := strings.Split(repo.Keywords, ",")
		for _, kw := range keywordParts {
			kw = strings.TrimSpace(kw)
			if kw != "" {
				keywords = append(keywords, kw)
			}
		}
	}

	// Parse SeeAlso JSON
	var seeAlsoItems []common.SeeAlsoItem
	if repo.SeeAlso != "" {
		var seeAlsoData []common.SeeAlsoJSONItem
		if err := json.Unmarshal([]byte(repo.SeeAlso), &seeAlsoData); err != nil {
			// Log error but don't fail the page
			log.Printf("Error parsing see_also JSON for %s: %v", repo.Key, err)
		} else {
			for _, item := range seeAlsoData {
				seeAlsoItems = append(seeAlsoItems, item.ToSeeAlsoItem())
			}
		}
	}

	data := mcp_pages.RepoData{
		Repo:            repo,
		Category:        partialCat,
		BreadcrumbItems: breadcrumbItems,
		LayoutProps:     layoutProps,
		Keywords:        keywords,
		SeeAlsoItems:    seeAlsoItems,
	}

	templ.Handler(mcp_pages.Repo(data)).ServeHTTP(w, r)
}

func HandleCredits(w http.ResponseWriter, r *http.Request) {
	layoutProps := layouts.BaseLayoutProps{
		Title:       "MCP Directory Credits & Acknowledgments | Online Free DevTools by Hexmos",
		Description: "Credits and acknowledgments for the MCP (Model Context Protocol) repositories available on Free DevTools. Learn about the sources, contributors, and data sources.",
		ShowHeader:  true,
		Canonical:   config.GetSiteURL() + "/mcp/credits/",
	}
	templ.Handler(mcp_pages.Credits(layoutProps)).ServeHTTP(w, r)
}
