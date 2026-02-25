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
	cheatsheets_components "fdt-templ/components/pages/cheatsheets"
	"fdt-templ/internal/config"
	"fdt-templ/internal/db/cheatsheets"
)

func main() {
	log.Println("Starting static generation for cheatsheets...")

	// Set config base path for URLs
	// This usually comes from toml but we can mock it here or load from toml
	_, err := config.LoadConfig()
	if err != nil {
		log.Printf("Config load error (using defaults): %v", err)
	}

	db, err := cheatsheets.GetDB()
	if err != nil {
		log.Fatalf("Failed to open cheatsheets database: %v", err)
	}
	defer db.Close()

	// Get overview
	overview, err := db.GetOverview()
	if err != nil {
		log.Fatalf("Failed to fetch overview: %v", err)
	}
	log.Printf("Found %d categories and %d total cheatsheets", overview.CategoryCount, overview.TotalCount)

	categories, err := db.GetCategoriesWithPreviews(1, 1000)
	if err != nil {
		log.Fatalf("Failed to fetch categories: %v", err)
	}

	outDir := filepath.Join("public", "static_pages", "c")
	if err := os.MkdirAll(outDir, 0755); err != nil {
		log.Fatalf("Failed to create out dir: %v", err)
	}

	basePath := config.GetBasePath()
	ctx := context.Background()

	// Limit to a small number of categories for the test run
	count := 0
	for _, cwp := range categories {
		// if count >= 1 { // Just generate 1 category for demonstration
		// 	break
		// }
		count++

		category := cwp.Category
		log.Printf("Processing category: %s", category.Name)

		catDir := filepath.Join(outDir, category.Slug)
		if err := os.MkdirAll(catDir, 0755); err != nil {
			log.Printf("Failed to create category dir %s: %v", category.Slug, err)
			continue
		}

		// Fetch all cheatsheets for this category
		page := 1
		for {
			csList, total, err := db.GetCheatsheetsByCategory(category.Slug, page, 100)
			if err != nil {
				log.Printf("Error fetching cheatsheets for category %s: %v", category.Slug, err)
				break
			}
			if len(csList) == 0 {
				break
			}

			// Generate each cheatsheet
			for _, csMeta := range csList {
				// if csCount >= 5 { // Just generate 5 cheatsheets for demonstration
				// 	break
				// }
				cs, err := db.GetCheatsheet(csMeta.HashID)
				if err != nil || cs == nil {
					continue
				}

				generateCheatsheetPage(ctx, db, &category, cs, outDir, basePath)
			}

			if page*100 >= total {
				break
			}
			page++
		}
	}

	log.Println("Static HTML generation complete! Check the public/static_pages/c directory.")
}

func generateCheatsheetPage(ctx context.Context, db *cheatsheets.DB, category *cheatsheets.Category, cheatsheet *cheatsheets.Cheatsheet, rootDir, basePath string) {
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

	var seeAlsoItems []common.SeeAlsoItem
	if cheatsheet.SeeAlso != "" {
		var seeAlsoData []common.SeeAlsoJSONItem
		if err := json.Unmarshal([]byte(cheatsheet.SeeAlso), &seeAlsoData); err == nil {
			for _, item := range seeAlsoData {
				seeAlsoItems = append(seeAlsoItems, item.ToSeeAlsoItem())
			}
		}
	}

	canonicalURL := fmt.Sprintf("%s/c/%s/%s/", config.GetSiteURL(), category.Slug, cheatsheet.Slug)
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
			Path:         fmt.Sprintf("/c/%s/%s/", category.Slug, cheatsheet.Slug),
		},
		Keywords:     keywords,
		SeeAlsoItems: seeAlsoItems,
	}

	// Create directory for this path: /c/{category}/{cheatsheet}/
	pageDir := filepath.Join(rootDir, category.Slug, cheatsheet.Slug)
	if err := os.MkdirAll(pageDir, 0755); err != nil {
		log.Printf("Failed to create directory %s: %v", pageDir, err)
		return
	}

	// Create index.html inside
	filename := filepath.Join(pageDir, "index.html")
	f, err := os.Create(filename)
	if err != nil {
		log.Printf("Failed to create output file %s: %v", filename, err)
		return
	}
	defer f.Close()

	// Render directly to file writer
	component := cheatsheets_components.Cheatsheet(data)
	if err := component.Render(ctx, f); err != nil {
		log.Printf("Failed to render to %s: %v", filename, err)
	} else {
		log.Printf("Generated: %s", filename)
	}
}
