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
	cheatsheets_page "fdt-templ/components/pages/cheatsheets"
	"fdt-templ/internal/config"
	cheatsheets_db "fdt-templ/internal/db/cheatsheets"
	"fdt-templ/internal/static_cache"

	"github.com/a-h/templ"
)

func GenerateCheatsheets() {
	log.Println("Starting static generation for Cheatsheets...")

	// Load config to get SiteURL and BasePath
	_, err := config.LoadConfig()
	if err != nil {
		log.Printf("Config load error: %v", err)
	}

	db, err := cheatsheets_db.GetDB()
	if err != nil {
		log.Fatalf("Failed to open Cheatsheets database: %v", err)
	}
	defer db.Close()

	outDir := filepath.Join("static", "freedevtools", "c")
	if err := os.MkdirAll(outDir, 0755); err != nil {
		log.Fatalf("Failed to create out dir: %v", err)
	}

	overview, err := db.GetOverview()
	if err != nil {
		log.Fatalf("Failed to get overview: %v", err)
	}

	const itemsPerPage = 30
	totalCategories := overview.CategoryCount
	totalIndexPages := (totalCategories + itemsPerPage - 1) / itemsPerPage
	if totalIndexPages == 0 {
		totalIndexPages = 1
	}

	// Calculate total pages for progress tracker
	totalPagesCount := 1 + totalIndexPages // credits + index pages
	categories, err := db.GetAllCategoriesSitemap()
	if err == nil {
		totalPagesCount += len(categories)
		for _, cat := range categories {
			csItems, _ := db.GetCheatsheetsByCategorySitemap(cat.Slug)
			totalPagesCount += len(csItems)
		}
	}

	tracker := NewProgressTracker("Cheatsheets", totalPagesCount)
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

	// Credits Page
	log.Println("Generating Cheatsheets Credits page...")
	creditsLayoutProps := layouts.BaseLayoutProps{
		Name:        "Cheatsheets Credits",
		Title:       "Cheatsheets Credits & Acknowledgments | Online Free DevTools by Hexmos",
		Description: "Credits and acknowledgments for cheatsheet data sources and contributors.",
		Canonical:   siteURL + "/c/credits/",
		ShowHeader:  true,
	}
	creditsMeta := &static_cache.PageMetadata{
		Title:       creditsLayoutProps.Title,
		Description: creditsLayoutProps.Description,
		Canonical:   creditsLayoutProps.Canonical,
	}
	renderToFile("credits/", cheatsheets_page.CreditsContent(cheatsheets_page.CreditsData{LayoutProps: creditsLayoutProps}), creditsMeta)

	// Main Index Pages
	log.Println("Generating Cheatsheets Index Pages...")
	for p := 1; p <= totalIndexPages; p++ {
		var relPath string
		if p == 1 {
			relPath = ""
		} else {
			relPath = fmt.Sprintf("%d/", p)
		}

		cats, err := db.GetCategoriesWithPreviews(p, itemsPerPage)
		if err != nil {
			log.Printf("Failed to fetch categories for page %d: %v", p, err)
			continue
		}

		title := "Cheatsheets - Concise Reference Guides | Online Free DevTools by Hexmos"
		description := "Browse our collection of concise, skimmable reference guides for languages, frameworks, and tools."
		if p > 1 {
			title = fmt.Sprintf("Cheatsheets - Page %d | Online Free DevTools by Hexmos", p)
		}

		breadcrumbItems := []components.BreadcrumbItem{
			{Label: "Free DevTools", Href: basePath + "/"},
			{Label: "Cheatsheets", Href: basePath + "/c/"},
		}
		if p > 1 {
			breadcrumbItems = append(breadcrumbItems, components.BreadcrumbItem{
				Label: fmt.Sprintf("Page %d", p),
			})
		}

		layoutProps := layouts.BaseLayoutProps{
			Title:       title,
			Description: description,
			Canonical:   siteURL + "/c/",
			ShowHeader:  true,
		}

		indexData := cheatsheets_page.IndexData{
			Categories:       cats,
			CurrentPage:      p,
			TotalPages:       totalIndexPages,
			TotalCategories:  totalCategories,
			TotalCheatsheets: overview.TotalCount,
			BreadcrumbItems:  breadcrumbItems,
			LayoutProps:      layoutProps,
			Keywords:         []string{"cheatsheets", "programming", "reference"},
		}

		meta := &static_cache.PageMetadata{
			Title:       layoutProps.Title,
			Description: layoutProps.Description,
			Canonical:   layoutProps.Canonical,
		}
		renderToFile(relPath, cheatsheets_page.IndexContent(indexData), meta)
	}

	// Category & Cheatsheet Pages
	log.Println("Generating Cheatsheets Category & Detail Pages...")
	for _, catItem := range categories {
		cat, err := db.GetCategoryBySlug(catItem.Slug)
		if err != nil || cat == nil {
			continue
		}

		catItemsPerPage := 36
		_, total, err := db.GetCheatsheetsByCategory(cat.Slug, 1, catItemsPerPage)
		if err != nil {
			continue
		}

		catPages := (total + catItemsPerPage - 1) / catItemsPerPage
		if catPages == 0 {
			catPages = 1
		}

		for p := 1; p <= catPages; p++ {
			var relPath string
			if p == 1 {
				relPath = fmt.Sprintf("%s/", cat.Slug)
			} else {
				relPath = fmt.Sprintf("%s/%d/", cat.Slug, p)
			}

			pageCsList, _, _ := db.GetCheatsheetsByCategory(cat.Slug, p, catItemsPerPage)

			title := fmt.Sprintf("%s Cheatsheets | Online Free DevTools by Hexmos", cat.Name)
			description := fmt.Sprintf("Explore %s cheatsheets and reference guides.", cat.Name)
			if p > 1 {
				title = fmt.Sprintf("%s Cheatsheets - Page %d | Online Free DevTools by Hexmos", cat.Name, p)
			}

			breadcrumbItems := []components.BreadcrumbItem{
				{Label: "Free DevTools", Href: basePath + "/"},
				{Label: "Cheatsheets", Href: basePath + "/c/"},
				{Label: cat.Name},
			}
			if p > 1 {
				breadcrumbItems = append(breadcrumbItems, components.BreadcrumbItem{
					Label: fmt.Sprintf("Page %d", p),
				})
			}

			layoutProps := layouts.BaseLayoutProps{
				Title:       title,
				Description: description,
				Canonical:   fmt.Sprintf("%s/c/%s/", siteURL, cat.Slug),
				ShowHeader:  true,
			}

			catData := cheatsheets_page.CategoryData{
				Category:         *cat,
				Cheatsheets:      pageCsList,
				TotalCheatsheets: total,
				CurrentPage:      p,
				TotalPages:       catPages,
				BreadcrumbItems:  breadcrumbItems,
				LayoutProps:      layoutProps,
				Keywords:         cat.Keywords,
			}

			meta := &static_cache.PageMetadata{
				Title:       layoutProps.Title,
				Description: layoutProps.Description,
				Canonical:   layoutProps.Canonical,
			}
			renderToFile(relPath, cheatsheets_page.CategoryContent(catData), meta)
		}

		// Individual Cheatsheets
		// For simplicity in static-generator, fetch all metadata for the category
		fullCsList, _, _ := db.GetCheatsheetsByCategory(cat.Slug, 1, 10000)
		for _, cs := range fullCsList {
			// Re-fetch individual cheatsheet for content
			fullCs, _ := db.GetCheatsheet(cs.HashID)
			if fullCs == nil {
				continue
			}

			breadcrumbItems := []components.BreadcrumbItem{
				{Label: "Free DevTools", Href: basePath + "/"},
				{Label: "Cheatsheets", Href: basePath + "/c/"},
				{Label: cat.Name, Href: basePath + "/c/" + cat.Slug + "/"},
				{Label: fullCs.Slug},
			}

			title := fmt.Sprintf("%s Cheatsheet | %s Reference | Online Free DevTools", fullCs.Title, cat.Name)
			layoutProps := layouts.BaseLayoutProps{
				Title:       title,
				Description: fullCs.Description,
				Canonical:   fmt.Sprintf("%s/c/%s/%s/", siteURL, cat.Slug, fullCs.Slug),
				ShowHeader:  true,
			}

			var seeAlsoItems []common.SeeAlsoItem
			if fullCs.SeeAlso != "" {
				var seeAlsoData []common.SeeAlsoJSONItem
				if err := json.Unmarshal([]byte(fullCs.SeeAlso), &seeAlsoData); err == nil {
					for _, item := range seeAlsoData {
						seeAlsoItems = append(seeAlsoItems, item.ToSeeAlsoItem())
					}
				}
			}

			csData := cheatsheets_page.CheatsheetData{
				Cheatsheet:      *fullCs,
				Category:        *cat,
				BreadcrumbItems: breadcrumbItems,
				LayoutProps:     layoutProps,
				Keywords:        fullCs.Keywords,
				SeeAlsoItems:    seeAlsoItems,
			}

			meta := &static_cache.PageMetadata{
				Title:       layoutProps.Title,
				Description: layoutProps.Description,
				Canonical:   layoutProps.Canonical,
			}
			renderToFile(cat.Slug+"/"+fullCs.Slug+"/", cheatsheets_page.CheatsheetContent(csData), meta)
		}
	}

	log.Println("Static HTML generation for Cheatsheets complete!")
	tracker.Finish()
}
