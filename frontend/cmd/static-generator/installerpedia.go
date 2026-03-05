package main

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"os"
	"path/filepath"

	"fdt-templ/components"
	"fdt-templ/components/common"
	"fdt-templ/components/layouts"
	ip_page "fdt-templ/components/pages/installerpedia"
	"fdt-templ/internal/config"
	ip_db "fdt-templ/internal/db/installerpedia"
	"fdt-templ/internal/static_cache"

	"github.com/a-h/templ"
)

func GenerateInstallerpedia() {
	log.Println("Starting static generation for Installerpedia...")

	// Load config
	_, err := config.LoadConfig()
	if err != nil {
		log.Printf("Config load error: %v", err)
	}

	db, err := ip_db.GetDB()
	if err != nil {
		log.Fatalf("Failed to open Installerpedia database: %v", err)
	}
	defer db.Close()

	outDir := filepath.Join("static", "freedevtools", "installerpedia")
	if err := os.MkdirAll(outDir, 0755); err != nil {
		log.Fatalf("Failed to create out dir: %v", err)
	}

	overview, err := db.GetOverview()
	if err != nil {
		log.Fatalf("Failed to get overview: %v", err)
	}

	categories, err := db.GetRepoCategories()
	if err != nil {
		log.Fatalf("Failed to fetch categories: %v", err)
	}

	const itemsPerPage = 30
	
	// Estimate total pages for tracker
	totalPagesCount := 1 // index
	for _, cat := range categories {
		pages := (cat.Count + itemsPerPage - 1) / itemsPerPage
		if pages == 0 {
			pages = 1
		}
		totalPagesCount += pages // category pages
		totalPagesCount += cat.Count // individual pages
	}

	tracker := NewProgressTracker("Installerpedia", totalPagesCount)
	ctx := context.Background()

	renderToFile := func(relPath string, component templ.Component, metadata *static_cache.PageMetadata) {
		defer tracker.Increment()

		pageDir := filepath.Join(outDir, relPath)
		if err := os.MkdirAll(pageDir, 0755); err != nil {
			log.Printf("Failed to create dir %s: %v", pageDir, err)
			return
		}

		filename := filepath.Join(pageDir, "index.html")
		f, err := os.Create(filename)
		if err != nil {
			log.Printf("Failed to create file %s: %v", filename, err)
			return
		}
		defer f.Close()

		if metadata != nil {
			metaBytes, _ := json.Marshal(metadata)
			fmt.Fprintf(f, "<!-- FDT_META: %s -->\n", string(metaBytes))
		}

		if err := component.Render(ctx, f); err != nil {
			log.Printf("Failed to render %s: %v", filename, err)
		}
	}

	basePath := config.GetBasePath()
	siteURL := config.GetSiteURL()

	// Index Page
	log.Println("Generating Installerpedia Index Page...")
	indexKeywords := []string{
		"installerpedia",
		"installation guides",
		"developer tools",
		"open source",
		"install software",
		"install github repositories",
		"github repository installation guide",
	}
	indexLayoutProps := layouts.BaseLayoutProps{
		Title:        "Installerpedia – Open Source Install Guides | Free DevTools by Hexmos",
		Description:  "Installerpedia provides installation guides for developer tools, languages, libraries, frameworks, servers, and CLI tools. Includes copy-paste commands, OS-specific steps, and automated installs using ipm.",
		Canonical:    siteURL + "/installerpedia/",
		ShowHeader:   true,
		Keywords:     indexKeywords,
	}

	indexData := ip_page.IndexData{
		Categories:      categories,
		Overview:        &overview,
		BreadcrumbItems: []components.BreadcrumbItem{
			{Label: "Free DevTools", Href: basePath + "/"},
			{Label: "InstallerPedia"},
		},
		LayoutProps: indexLayoutProps,
		Keywords:    indexKeywords,
	}

	indexMeta := &static_cache.PageMetadata{
		Title:       indexLayoutProps.Title,
		Description: indexLayoutProps.Description,
		Canonical:   indexLayoutProps.Canonical,
	}
	renderToFile("", ip_page.IndexContent(indexData), indexMeta)

	// Category and Individual Pages
	for _, cat := range categories {
		log.Printf("Generating pages for category: %s", cat.Name)
		
		catPages := (cat.Count + itemsPerPage - 1) / itemsPerPage
		if catPages == 0 {
			catPages = 1
		}

		catKeywords := []string{
			"install " + cat.Name + " repositories",
			cat.Name + " installation guide",
			"install " + cat.Name + " github repositories",
			"installerpedia",
		}

		for p := 1; p <= catPages; p++ {
			var relPath string
			if p == 1 {
				relPath = fmt.Sprintf("%s/", cat.Name)
			} else {
				relPath = fmt.Sprintf("%s/%d/", cat.Name, p)
			}

			offset := (p - 1) * itemsPerPage
			repos, err := db.GetReposByTypePaginated(cat.Name, itemsPerPage, offset)
			if err != nil {
				log.Printf("Failed to fetch repos for %s page %d: %v", cat.Name, p, err)
				continue
			}

			title := cat.Name + " Install Guides | Installerpedia"
			description := "Installation guides for " + cat.Name + ". Step-by-step setup instructions."
			if p > 1 {
				title = fmt.Sprintf("%s Install Guides – Page %d | Installerpedia", cat.Name, p)
				description = fmt.Sprintf("Browse page %d of %s installation guides.", p, cat.Name)
			}

			breadcrumbItems := []components.BreadcrumbItem{
				{Label: "Free DevTools", Href: basePath + "/"},
				{Label: "Installerpedia", Href: basePath + "/installerpedia/"},
				{Label: cat.Name},
			}
			if p > 1 {
				breadcrumbItems = append(breadcrumbItems, components.BreadcrumbItem{
					Label: fmt.Sprintf("Page %d", p),
				})
			}

			catLayoutProps := layouts.BaseLayoutProps{
				Title:       title,
				Description: description,
				Canonical:   siteURL + "/installerpedia/" + relPath,
				ShowHeader:  true,
				Keywords:    catKeywords,
			}

			catData := ip_page.CategoryData{
				Category:        cat.Name,
				Repos:           repos,
				RepoCount:       cat.Count,
				CurrentPage:     p,
				TotalPages:      catPages,
				BreadcrumbItems: breadcrumbItems,
				LayoutProps:     catLayoutProps,
				Keywords:        catKeywords,
			}

			catMeta := &static_cache.PageMetadata{
				Title:       catLayoutProps.Title,
				Description: catLayoutProps.Description,
				Canonical:   catLayoutProps.Canonical,
			}
			renderToFile(relPath, ip_page.CategoryContent(catData), catMeta)
		}

		// Individual Pages for this category
		// To avoid repeated offsets, we just fetch all slugs for this category
		sitemapItems, err := db.GetReposByCategoryForSitemap(cat.Name)
		if err != nil {
			log.Printf("Failed to fetch sitemap items for %s: %v", cat.Name, err)
			continue
		}

		for _, item := range sitemapItems {
			hashID := ip_db.HashStringToInt64(item.Slug)
			repo, err := db.GetRepo(hashID)
			if err != nil || repo == nil || repo.IsDeleted {
				continue
			}

			slug := ip_page.ToSlug(repo.Repo)
			
			repoKeywords := []string{
				"installerpedia",
				"installation",
				"install",
				cat.Name,
				repo.Repo,
			}

			var seeAlsoItems []common.SeeAlsoItem
			if repo.SeeAlso != "" {
				var seeAlsoData []common.SeeAlsoJSONItem
				if err := json.Unmarshal([]byte(repo.SeeAlso), &seeAlsoData); err == nil {
					for _, saItem := range seeAlsoData {
						seeAlsoItems = append(seeAlsoItems, saItem.ToSeeAlsoItem())
					}
				}
			}

			repoLayoutProps := layouts.BaseLayoutProps{
				Title:       repo.Repo + " Installation Guide | Installerpedia",
				Description: "How to install " + repo.Repo + " on your system. Step-by-step installation commands and setup instructions.",
				Canonical:   fmt.Sprintf("%s/installerpedia/%s/%s/", siteURL, cat.Name, slug),
				ShowHeader:  true,
				Keywords:    repoKeywords,
			}

			repoData := ip_page.PageData{
				Repo:            repo,
				Category:        cat.Name,
				BreadcrumbItems: []components.BreadcrumbItem{
					{Label: "Free DevTools", Href: basePath + "/"},
					{Label: "Installerpedia", Href: basePath + "/installerpedia/"},
					{Label: cat.Name, Href: basePath + "/installerpedia/" + cat.Name + "/"},
					{Label: repo.Repo},
				},
				LayoutProps:     repoLayoutProps,
				Keywords:        repoKeywords,
				SeeAlsoItems:    seeAlsoItems,
			}

			repoMeta := &static_cache.PageMetadata{
				Title:       repoLayoutProps.Title,
				Description: repoLayoutProps.Description,
				Canonical:   repoLayoutProps.Canonical,
			}
			renderToFile(fmt.Sprintf("%s/%s/", cat.Name, slug), ip_page.PageContent(repoData), repoMeta)
		}
	}

	log.Println("Static HTML generation for Installerpedia complete!")
	tracker.Finish()
}
