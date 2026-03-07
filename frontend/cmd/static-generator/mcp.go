package main

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"os"
	"path/filepath"

	mcp_pages "fdt-templ/components/pages/mcp"
	"fdt-templ/internal/config"
	mcp_controllers "fdt-templ/internal/controllers/mcp"
	mcp_db "fdt-templ/internal/db/mcp"
	"fdt-templ/internal/static_cache"

	"github.com/a-h/templ"
)

func GenerateMCP() {
	log.Println("Starting static generation for MCP...")

	_, err := config.LoadConfig()
	if err != nil {
		log.Printf("Config load error: %v", err)
	}

	db, err := mcp_db.GetDB()
	if err != nil {
		log.Fatalf("Failed to open MCP database: %v", err)
	}
	defer db.Close()

	outDir := filepath.Join("static", "freedevtools", "mcp")
	if err := os.MkdirAll(outDir, 0755); err != nil {
		log.Fatalf("Failed to create out dir: %v", err)
	}

	overview, err := db.GetOverview()
	if err != nil {
		log.Fatalf("Failed to fetch overview: %v", err)
	}

	itemsPerPage := 30
	totalIndexPages := 1
	if overview != nil && overview.TotalCategoryCount > 0 {
		totalIndexPages = (overview.TotalCategoryCount + itemsPerPage - 1) / itemsPerPage
	}

	// Calculate total pages for progress loader
	totalPages := 1 + totalIndexPages + overview.TotalCount
	cPage := 1
	for {
		cats, err := db.GetAllMcpCategories(cPage, 100)
		if err != nil || len(cats) == 0 {
			break
		}
		for _, cat := range cats {
			cPages := 1
			if cat.Count > 0 {
				cPages = (cat.Count + itemsPerPage - 1) / itemsPerPage
			}
			totalPages += cPages
		}
		if cPage*100 >= overview.TotalCategoryCount {
			break
		}
		cPage++
	}

	tracker := NewProgressTracker("MCP", totalPages)

	ctx := context.Background()

	// Helper to generate a page using component rendering
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
	creditsData := mcp_controllers.FetchCreditsData()
	creditsMeta := &static_cache.PageMetadata{
		Title:       creditsData.Title,
		Description: creditsData.Description,
		Canonical:   creditsData.Canonical,
		UpdatedAt:   overview.LastUpdatedAt,
	}
	renderToFile("credits/", mcp_pages.CreditsContent(creditsData), creditsMeta)

	log.Println("Generating MCP Index Pages...")
	for p := 1; p <= totalIndexPages; p++ {
		path := fmt.Sprintf("%d/", p)
		data, err := mcp_controllers.FetchIndexData(db, p)
		if err != nil {
			log.Printf("Failed to fetch index data for page %d: %v", p, err)
			continue
		}
		idxMeta := &static_cache.PageMetadata{
			Title:          data.LayoutProps.Title,
			Description:    data.LayoutProps.Description,
			Keywords:       data.LayoutProps.Keywords,
			Canonical:      data.LayoutProps.Canonical,
			OgImage:        data.LayoutProps.OgImage,
			TwitterImage:   data.LayoutProps.TwitterImage,
			ThumbnailUrl:   data.LayoutProps.ThumbnailUrl,
			EncodingFormat: data.LayoutProps.EncodingFormat,
			UpdatedAt:      overview.LastUpdatedAt,
		}
		renderToFile(path, mcp_pages.IndexContent(*data), idxMeta)
	}

	log.Println("Generating MCP Category and Repo Pages...")
	page := 1
	for {
		categories, err := db.GetAllMcpCategories(page, 100)
		if err != nil || len(categories) == 0 {
			break
		}

		for _, cat := range categories {
			log.Printf("Processing category: %s", cat.Name)
			catPages := 1
			if cat.Count > 0 {
				catPages = (cat.Count + itemsPerPage - 1) / itemsPerPage
			}

			// Generate Category Pagination Pages
			for cp := 1; cp <= catPages; cp++ {
				path := fmt.Sprintf("%s/%d/", cat.Slug, cp)
				data, err := mcp_controllers.FetchCategoryData(db, cat.Slug, cp)
				if err != nil {
					log.Printf("Failed to fetch category data %s: %v", path, err)
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
				renderToFile(path, mcp_pages.CategoryContent(*data), catMeta)
			}

			// Generate Repo Pages for this category
			rPage := 1
			for {
				repos, err := db.GetMcpPagesByCategoryPaginatedFull(cat.Slug, rPage, 100)
				if err != nil || len(repos) == 0 {
					break
				}

				for _, repo := range repos {
					path := fmt.Sprintf("%s/%s/", cat.Slug, repo.Key)
					data, err := mcp_controllers.FetchRepoDataFromFull(&repo, cat.Slug)
					if err != nil {
						log.Printf("Failed to prepare repo data %s/%s: %v", cat.Slug, repo.Key, err)
						continue
					}
					repoMeta := &static_cache.PageMetadata{
						Title:          data.LayoutProps.Title,
						Description:    data.LayoutProps.Description,
						Keywords:       data.LayoutProps.Keywords,
						Canonical:      data.LayoutProps.Canonical,
						OgImage:        data.LayoutProps.OgImage,
						TwitterImage:   data.LayoutProps.TwitterImage,
						ThumbnailUrl:   data.LayoutProps.ThumbnailUrl,
						EncodingFormat: data.LayoutProps.EncodingFormat,
						UpdatedAt:      repo.UpdatedAt,
					}
					renderToFile(path, mcp_pages.RepoContent(*data), repoMeta)
				}

				if rPage*100 >= cat.Count {
					break
				}
				rPage++
			}
		}

		if overview == nil || page*100 >= overview.TotalCategoryCount {
			break
		}
		page++
	}

	log.Println("Static HTML generation for MCP complete! Check the static/freedevtools/mcp directory.")
	tracker.Finish()
}
