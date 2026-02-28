package mcp

import (
	"encoding/json"
	"errors"
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

var ErrNotFound = errors.New("not found")

type RepoRedirectError struct {
	RedirectURL string
}

func (e *RepoRedirectError) Error() string { return "redirect: " + e.RedirectURL }

func FetchIndexData(db *mcp_db.DB, page int) (*mcp_pages.IndexData, error) {
	itemsPerPage := 30
	basePath := config.GetBasePath()

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

	var categories []mcp_db.McpCategory
	select {
	case categories = <-categoriesChan:
	case err := <-errChan:
		log.Printf("Error fetching MCP categories: %v", err)
		return nil, fmt.Errorf("Internal Server Error")
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
		return nil, ErrNotFound
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

	return &data, nil
}

func HandleIndex(w http.ResponseWriter, r *http.Request, db *mcp_db.DB, page int) {
	data, err := FetchIndexData(db, page)
	if err != nil {
		if errors.Is(err, ErrNotFound) {
			http.NotFound(w, r)
		} else {
			http.Error(w, err.Error(), http.StatusInternalServerError)
		}
		return
	}
	templ.Handler(mcp_pages.Index(*data)).ServeHTTP(w, r)
}

func FetchCategoryData(db *mcp_db.DB, categorySlug string, page int) (*mcp_pages.CategoryData, error) {
	itemsPerPage := 30
	basePath := config.GetBasePath()

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

	var cat *mcp_db.McpCategory
	select {
	case cat = <-catChan:
		if cat == nil {
			return nil, ErrNotFound
		}
	case err := <-errChan:
		log.Printf("Error fetching category: %v", err)
		return nil, fmt.Errorf("Internal Server Error")
	}

	var repos []mcp_db.McpPage
	select {
	case repos = <-reposChan:
	case err := <-errChan:
		log.Printf("Error fetching repos: %v", err)
		return nil, fmt.Errorf("Error fetching repositories")
	}

	totalPages := (cat.Count + itemsPerPage - 1) / itemsPerPage
	if page > totalPages && totalPages > 0 {
		return nil, ErrNotFound
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
		TotalRepos:      cat.Count,
		BreadcrumbItems: breadcrumbItems,
		LayoutProps:     layoutProps,
		PageURL:         fmt.Sprintf("%s/mcp/%s/", basePath, categorySlug),
	}

	return &data, nil
}

func HandleCategory(w http.ResponseWriter, r *http.Request, db *mcp_db.DB, categorySlug string, page int) {
	data, err := FetchCategoryData(db, categorySlug, page)
	if err != nil {
		if errors.Is(err, ErrNotFound) {
			http.NotFound(w, r)
		} else {
			http.Error(w, err.Error(), http.StatusInternalServerError)
		}
		return
	}
	templ.Handler(mcp_pages.Category(*data)).ServeHTTP(w, r)
}

func FetchRepoData(db *mcp_db.DB, categorySlug string, repoKey string, hashID int64) (*mcp_pages.RepoData, error) {
	basePath := config.GetBasePath()

	repo, err := db.GetMcpPage(hashID)
	if err != nil || repo == nil {
		cat, err := db.GetMcpCategory(categorySlug)
		if err == nil && cat != nil {
			redirectURL := fmt.Sprintf("%s/mcp/%s/1/", basePath, url.PathEscape(categorySlug))
			return nil, &RepoRedirectError{RedirectURL: redirectURL}
		}
		return nil, ErrNotFound
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
	} else if len(ownerName) > 0 {
		ownerName = strings.ToUpper(ownerName[:1]) + ownerName[1:]
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

	partialCat, err := db.GetMcpCategory(categorySlug)
	if err != nil || partialCat == nil {
		if err != nil {
			log.Printf("Error fetching category for repo view (slug: %s): %v", categorySlug, err)
		}
		partialCat = &mcp_db.McpCategory{
			Slug: categorySlug,
			Name: categoryName,
		}
	}

	keywords := []string{"mcp", "model context protocol", categoryName, repo.Name}
	if repo.Keywords != "" {
		keywordParts := strings.Split(repo.Keywords, ",")
		for _, kw := range keywordParts {
			kw = strings.TrimSpace(kw)
			if kw != "" {
				keywords = append(keywords, kw)
			}
		}
	}

	var seeAlsoItems []common.SeeAlsoItem
	if repo.SeeAlso != "" {
		var seeAlsoData []common.SeeAlsoJSONItem
		if err := json.Unmarshal([]byte(repo.SeeAlso), &seeAlsoData); err != nil {
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

	return &data, nil
}

func HandleRepo(w http.ResponseWriter, r *http.Request, db *mcp_db.DB, categorySlug string, repoKey string, hashID int64) {
	data, err := FetchRepoData(db, categorySlug, repoKey, hashID)
	if err != nil {
		if redirectErr, ok := err.(*RepoRedirectError); ok {
			http.Redirect(w, r, redirectErr.RedirectURL, http.StatusMovedPermanently)
			return
		}
		if errors.Is(err, ErrNotFound) {
			http.NotFound(w, r)
		} else {
			http.Error(w, err.Error(), http.StatusInternalServerError)
		}
		return
	}
	templ.Handler(mcp_pages.Repo(*data)).ServeHTTP(w, r)
}

func FetchCreditsData() layouts.BaseLayoutProps {
	return layouts.BaseLayoutProps{
		Title:       "MCP Directory Credits & Acknowledgments | Online Free DevTools by Hexmos",
		Description: "Credits and acknowledgments for the MCP (Model Context Protocol) repositories available on Free DevTools. Learn about the sources, contributors, and data sources.",
		ShowHeader:  true,
		Canonical:   config.GetSiteURL() + "/mcp/credits/",
	}
}

func HandleCredits(w http.ResponseWriter, r *http.Request) {
	layoutProps := FetchCreditsData()
	templ.Handler(mcp_pages.Credits(layoutProps)).ServeHTTP(w, r)
}
