package main

import (
	"context"
	"fmt"
	"log"
	"os"
	"path/filepath"

	mcp_pages "fdt-templ/components/pages/mcp"
	"fdt-templ/internal/config"
	mcp_controllers "fdt-templ/internal/controllers/mcp"
	mcp_db "fdt-templ/internal/db/mcp"

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
	renderToFile := func(relPath string, component templ.Component) {
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

		if err := component.Render(ctx, f); err != nil {
			log.Printf("Failed to render %s: %v", filename, err)
		} else {
			log.Printf("Generated: %s", filename)
		}
	}

	log.Println("Generating Credits page...")
	creditsData := mcp_controllers.FetchCreditsData()
	renderToFile("credits/", mcp_pages.Credits(creditsData))

	log.Println("Generating MCP Index Pages...")
	for p := 1; p <= totalIndexPages; p++ {
		path := fmt.Sprintf("%d/", p)
		data, err := mcp_controllers.FetchIndexData(db, p)
		if err != nil {
			log.Printf("Failed to fetch index data for page %d: %v", p, err)
			continue
		}
		renderToFile(path, mcp_pages.Index(*data))
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
				renderToFile(path, mcp_pages.Category(*data))
			}

			// Generate Repo Pages for this category
			rPage := 1
			for {
				repos, err := db.GetMcpPagesByCategory(cat.Slug, rPage, 100)
				if err != nil || len(repos) == 0 {
					break
				}

				for _, repo := range repos {
					path := fmt.Sprintf("%s/%s/", cat.Slug, repo.Key)
					data, err := mcp_controllers.FetchRepoData(db, cat.Slug, repo.Key, repo.HashID)
					if err != nil {
						log.Printf("Failed to fetch repo data %s/%s (HashID: %d): %v", cat.Slug, repo.Key, repo.HashID, err)
						continue
					}
					renderToFile(path, mcp_pages.Repo(*data))
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
