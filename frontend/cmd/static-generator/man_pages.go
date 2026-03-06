package main

import (
	"context"
	"fmt"
	"log"
	"os"
	"path/filepath"

	"encoding/json"
	man_pages_components "fdt-templ/components/pages/man_pages"
	"fdt-templ/internal/config"
	manpages "fdt-templ/internal/controllers/man_pages"
	"fdt-templ/internal/db/man_pages"
	"fdt-templ/internal/static_cache"

	"github.com/a-h/templ"
)

func GenerateManPages() {
	log.Println("Starting static generation for Man Pages...")

	_, err := config.LoadConfig()
	if err != nil {
		log.Printf("Config load error: %v", err)
	}

	db, err := man_pages.GetDB()
	if err != nil {
		log.Fatalf("Failed to open Man Pages database: %v", err)
	}
	defer db.Close()

	outDir := filepath.Join("static", "freedevtools", "man-pages")
	if err := os.MkdirAll(outDir, 0755); err != nil {
		log.Fatalf("Failed to create out dir: %v", err)
	}

	overview, err := db.GetOverview()
	if err != nil {
		log.Fatalf("Failed to fetch overview: %v", err)
	}

	totalManPages := 0
	if overview != nil {
		totalManPages = overview.TotalCount
	}

	categories, err := db.GetManPageCategories()
	if err != nil {
		log.Fatalf("Failed to fetch categories: %v", err)
	}

	// Calculate total pages for progress tracker
	// 1 (Index) + 1 (Credits)
	estimatedTotal := 2
	for _, cat := range categories {
		counts, err := db.GetTotalSubCategoriesManPagesCount(cat.Name)
		if err != nil {
			continue
		}
		// Category pagination pages (12 per page)
		catPages := (counts.SubCategoryCount + 12 - 1) / 12
		if catPages == 0 {
			catPages = 1
		}
		estimatedTotal += catPages

		// We'll need to fetch subcategories to be more precise, but this is a start.
		// For now, let's just add the total man pages to the estimate.
		// estimatedTotal += counts.ManPagesCount 
	}
	// Add total man pages and roughly estimate subcategory pagination
	estimatedTotal += totalManPages + (totalManPages / 20) 

	tracker := NewProgressTracker("Man Pages", estimatedTotal)
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

		// Write metadata as a JSON comment if provided
		if metadata != nil {
			metaBytes, err := json.Marshal(metadata)
			if err != nil {
				log.Printf("Failed to marshal metadata for %s: %v", filename, err)
			} else {
				fmt.Fprintf(f, "<!-- FDT_META: %s -->\n", string(metaBytes))
			}
		}

		if err := component.Render(ctx, f); err != nil {
			log.Printf("Failed to render %s: %v", filename, err)
		}
	}

	log.Println("Generating Credits page...")
	creditsData, err := manpages.FetchManPagesCreditsData()
	if err != nil {
		log.Printf("Failed to fetch man pages credits data: %v", err)
	} else {
		creditsMeta := &static_cache.PageMetadata{
			Title:       creditsData.LayoutProps.Title,
			Description: creditsData.LayoutProps.Description,
			Canonical:   creditsData.LayoutProps.Canonical,
			UpdatedAt:   overview.LastUpdatedAt,
		}
		renderToFile("credits/", man_pages_components.CreditsContent(*creditsData), creditsMeta)
	}

	log.Println("Generating Man Pages Index...")
	indexData, err := manpages.FetchManPagesIndexData(db)
	if err == nil {
		indexMeta := &static_cache.PageMetadata{
			Title:       indexData.LayoutProps.Title,
			Description: indexData.LayoutProps.Description,
			Canonical:   indexData.LayoutProps.Canonical,
			UpdatedAt:   overview.LastUpdatedAt,
		}
		renderToFile("", man_pages_components.IndexContent(*indexData), indexMeta)
	}

	log.Println("Generating Category, Subcategory, and Detail pages...")
	for _, cat := range categories {
		log.Printf("Processing category: %s", cat.Name)
		
		counts, err := db.GetTotalSubCategoriesManPagesCount(cat.Name)
		if err != nil {
			log.Printf("Failed to get counts for category %s: %v", cat.Name, err)
			continue
		}

		catPages := (counts.SubCategoryCount + 12 - 1) / 12
		if catPages == 0 {
			catPages = 1
		}

		// Category Pagination Pages
		for p := 1; p <= catPages; p++ {
			var relPath string
			if p == 1 {
				relPath = fmt.Sprintf("%s/", cat.Name)
			} else {
				relPath = fmt.Sprintf("%s/%d/", cat.Name, p)
			}
			data, err := manpages.FetchManPagesCategoryData(db, cat.Name, p)
			if err != nil {
				log.Printf("Failed to fetch category data for %s (page %d): %v", cat.Name, p, err)
				continue
			}
			catMeta := &static_cache.PageMetadata{
				Title:          data.LayoutProps.Title,
				Description:    data.LayoutProps.Description,
				Keywords:       data.LayoutProps.Keywords,
				Canonical:      data.LayoutProps.Canonical,
				OgImage:        data.LayoutProps.OgImage,
				TwitterImage:   data.LayoutProps.TwitterImage,
				ThumbnailUrl:   data.LayoutProps.ThumbnailUrl,
				EncodingFormat: data.LayoutProps.EncodingFormat,
				UpdatedAt:      cat.UpdatedAt,
			}
			renderToFile(relPath, man_pages_components.CategoryContent(*data), catMeta)
		}

		// Fetch all subcategories for this category
		// We'll loop through all pages of subcategories
		for sp := 1; ; sp++ {
			subcats, err := db.GetSubCategoriesByMainCategoryPaginated(cat.Name, 100, (sp-1)*100)
			if err != nil || len(subcats) == 0 {
				break
			}

			for _, subcat := range subcats {
				scCount, err := db.GetManPagesCountBySubcategory(cat.Name, subcat.Name)
				if err != nil {
					continue
				}

				scPages := (scCount + 20 - 1) / 20
				if scPages == 0 {
					scPages = 1
				}

				// Subcategory Pagination Pages
				for p := 1; p <= scPages; p++ {
					var relPath string
					if p == 1 {
						relPath = fmt.Sprintf("%s/%s/", cat.Name, subcat.Name)
					} else {
						relPath = fmt.Sprintf("%s/%s/%d/", cat.Name, subcat.Name, p)
					}
					data, err := manpages.FetchManPagesSubcategoryData(db, cat.Name, subcat.Name, p)
					if err != nil {
						log.Printf("Failed to fetch subcategory data for %s/%s (page %d): %v", cat.Name, subcat.Name, p, err)
						continue
					}
					scMeta := &static_cache.PageMetadata{
						Title:          data.LayoutProps.Title,
						Description:    data.LayoutProps.Description,
						Keywords:       data.LayoutProps.Keywords,
						Canonical:      data.LayoutProps.Canonical,
						OgImage:        data.LayoutProps.OgImage,
						TwitterImage:   data.LayoutProps.TwitterImage,
						ThumbnailUrl:   data.LayoutProps.ThumbnailUrl,
						EncodingFormat: data.LayoutProps.EncodingFormat,
						UpdatedAt:      subcat.UpdatedAt,
					}
					renderToFile(relPath, man_pages_components.SubCategoryContent(*data), scMeta)
				}

				// Fetch and generate individual man pages
				for mp := 1; ; mp++ {
					pages, err := db.GetManPagesBySubcategoryPaginatedFull(cat.Name, subcat.Name, 100, (mp-1)*100)
					if err != nil || len(pages) == 0 {
						break
					}

					for _, page := range pages {
						relPath := fmt.Sprintf("%s/%s/%s/", cat.Name, subcat.Name, page.Slug)
						data, err := manpages.FetchManPagesPageDataFromFull(&page, cat.Name, subcat.Name)
						if err != nil {
							log.Printf("Failed to prepare page data for %s: %v", relPath, err)
							continue
						}
						meta := &static_cache.PageMetadata{
							Title:          data.LayoutProps.Title,
							Description:    data.LayoutProps.Description,
							Keywords:       data.LayoutProps.Keywords,
							Canonical:      data.LayoutProps.Canonical,
							OgImage:        data.LayoutProps.OgImage,
							TwitterImage:   data.LayoutProps.TwitterImage,
							ThumbnailUrl:   data.LayoutProps.ThumbnailUrl,
							EncodingFormat: data.LayoutProps.EncodingFormat,
							UpdatedAt:      page.UpdatedAt,
						}
						// Save ONLY the content, not the whole layout
						renderToFile(relPath, man_pages_components.PageContent(*data), meta)
					}
					if mp*100 >= scCount {
						break
					}
				}
			}
			if sp*100 >= counts.SubCategoryCount {
				break
			}
		}
	}

	log.Println("Static HTML generation for Man Pages complete! Check the static/freedevtools/man-pages directory.")
	tracker.Finish()
}
