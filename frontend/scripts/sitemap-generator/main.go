package main

import (
	"flag"
	"fmt"
	"log"
	"os"
	"path/filepath"

	cheatsheets_pages "fdt-templ/components/pages/cheatsheets"
	installerpedia_pages "fdt-templ/components/pages/installerpedia"
	man_pages_pages "fdt-templ/components/pages/man_pages"
	mcp_pages "fdt-templ/components/pages/mcp"
	png_icons_pages "fdt-templ/components/pages/png_icons"
	svg_icons_pages "fdt-templ/components/pages/svg_icons"
	"fdt-templ/components/pages/t"
	tldr_pages "fdt-templ/components/pages/tldr"
	cheatsheets_db "fdt-templ/internal/db/cheatsheets"
	installerpedia_db "fdt-templ/internal/db/installerpedia"
	man_pages_db "fdt-templ/internal/db/man_pages"
	mcp_db "fdt-templ/internal/db/mcp"
	png_icons_db "fdt-templ/internal/db/png_icons"
	svg_icons_db "fdt-templ/internal/db/svg_icons"
	tldr_db "fdt-templ/internal/db/tldr"
)

func main() {
	section := flag.String("section", "", "Sitemap section to generate (e.g., tools)")
	outputDir := flag.String("output", "sitemaps", "Output directory for sitemaps")
	flag.Parse()

	if *section == "" {
		log.Fatal("Please specify a section with -section")
	}

	switch *section {
	case "tools":
		generateToolsSitemap(*outputDir)
	case "tldr":
		generateTldrSitemap(*outputDir)
	case "cheatsheets":
		generateCheatsheetsSitemap(*outputDir)
	case "svg-icons":
		generateSvgIconsSitemap(*outputDir)
	case "png-icons":
		generatePngIconsSitemap(*outputDir)
	case "mcp":
		generateMcpSitemap(*outputDir)
	case "man-pages":
		generateManPagesSitemap(*outputDir)
	case "installerpedia":
		generateInstallerpediaSitemap(*outputDir)
	case "all":
		generateToolsSitemap(*outputDir)
		generateTldrSitemap(*outputDir)
		generateCheatsheetsSitemap(*outputDir)
		generateSvgIconsSitemap(*outputDir)
		generatePngIconsSitemap(*outputDir)
		generateMcpSitemap(*outputDir)
		generateManPagesSitemap(*outputDir)
		generateInstallerpediaSitemap(*outputDir)
	default:
		log.Fatalf("Unknown section: %s", *section)
	}
}

func generateToolsSitemap(baseDir string) {
	xml := t.GenerateSitemapXML()

	dir := filepath.Join(baseDir, "t")
	if err := os.MkdirAll(dir, 0755); err != nil {
		log.Fatalf("Failed to create directory %s: %v", dir, err)
	}

	filePath := filepath.Join(dir, "sitemap.xml")
	if err := os.WriteFile(filePath, []byte(xml), 0644); err != nil {
		log.Fatalf("Failed to write sitemap to %s: %v", filePath, err)
	}

	fmt.Printf("✅ Generated Tools sitemap at %s\n", filePath)
}

func generateTldrSitemap(baseDir string) {
	// Initialize DB
	db, err := tldr_db.GetDB()
	if err != nil {
		log.Fatalf("Failed to open TLDR database: %v", err)
	}
	defer db.Close()

	// 1. Index
	xml, numChunks, err := tldr_pages.GenerateSitemapIndexXML(db)
	if err != nil {
		log.Fatalf("Failed to generate sitemap index: %v", err)
	}

	tldrDir := filepath.Join(baseDir, "tldr")
	if err := os.MkdirAll(tldrDir, 0755); err != nil {
		log.Fatalf("Failed to create directory %s: %v", tldrDir, err)
	}

	indexPath := filepath.Join(tldrDir, "sitemap.xml")
	if err := os.WriteFile(indexPath, []byte(xml), 0644); err != nil {
		log.Fatalf("Failed to write sitemap index: %v", err)
	}
	fmt.Printf("✅ Generated TLDR sitemap index at %s\n", indexPath)

	// 2. Chunks
	for i := 1; i <= numChunks; i++ {
		chunkXML, err := tldr_pages.GenerateSitemapChunkXML(db, i)
		if err != nil {
			log.Fatalf("Failed to generate sitemap chunk %d: %v", i, err)
		}
		if chunkXML == "" {
			continue
		}
		chunkPath := filepath.Join(tldrDir, fmt.Sprintf("sitemap-%d.xml", i))
		if err := os.WriteFile(chunkPath, []byte(chunkXML), 0644); err != nil {
			log.Fatalf("Failed to write sitemap chunk %d: %v", i, err)
		}
		fmt.Printf("✅ Generated TLDR sitemap chunk %d at %s\n", i, chunkPath)
	}

	// 3. Pagination Sitemap
	pagXML, err := tldr_pages.GeneratePaginationSitemapXML(db)
	if err != nil {
		log.Fatalf("Failed to generate pagination sitemap: %v", err)
	}

	pagesDir := filepath.Join(baseDir, "tldr_pages")
	if err := os.MkdirAll(pagesDir, 0755); err != nil {
		log.Fatalf("Failed to create directory %s: %v", pagesDir, err)
	}

	pagesPath := filepath.Join(pagesDir, "sitemap.xml")
	if err := os.WriteFile(pagesPath, []byte(pagXML), 0644); err != nil {
		log.Fatalf("Failed to write pagination sitemap: %v", err)
	}
	fmt.Printf("✅ Generated TLDR pagination sitemap at %s\n", pagesPath)
	fmt.Printf("✅ Generated TLDR pagination sitemap at %s\n", pagesPath)
}

func generateCheatsheetsSitemap(baseDir string) {
	// Initialize DB
	db, err := cheatsheets_db.GetDB()
	if err != nil {
		log.Fatalf("Failed to open Cheatsheets database: %v", err)
	}
	defer db.Close()

	// 1. Cheatsheets Sitemap
	xml, err := cheatsheets_pages.GenerateSitemapXML(db)
	if err != nil {
		log.Fatalf("Failed to generate cheatsheets sitemap: %v", err)
	}

	csDir := filepath.Join(baseDir, "cheatsheets")
	if err := os.MkdirAll(csDir, 0755); err != nil {
		log.Fatalf("Failed to create directory %s: %v", csDir, err)
	}

	csPath := filepath.Join(csDir, "sitemap.xml")
	if err := os.WriteFile(csPath, []byte(xml), 0644); err != nil {
		log.Fatalf("Failed to write cheatsheets sitemap: %v", err)
	}
	fmt.Printf("✅ Generated Cheatsheets sitemap at %s\n", csPath)

	// 2. Pagination Sitemap
	pagXML, err := cheatsheets_pages.GeneratePaginationSitemapXML(db)
	if err != nil {
		log.Fatalf("Failed to generate cheatsheets pagination sitemap: %v", err)
	}

	pagesDir := filepath.Join(baseDir, "cheatsheets_pages")
	if err := os.MkdirAll(pagesDir, 0755); err != nil {
		log.Fatalf("Failed to create directory %s: %v", pagesDir, err)
	}

	pagesPath := filepath.Join(pagesDir, "sitemap.xml")
	if err := os.WriteFile(pagesPath, []byte(pagXML), 0644); err != nil {
		log.Fatalf("Failed to write cheatsheets pagination sitemap: %v", err)
	}
	fmt.Printf("✅ Generated Cheatsheets pagination sitemap at %s\n", pagesPath)
}

func generateSvgIconsSitemap(baseDir string) {
	// Initialize DB
	db, err := svg_icons_db.GetDB()
	if err != nil {
		log.Fatalf("Failed to open SVG Icons database: %v", err)
	}
	defer db.Close()

	// 1. Index
	xml, numChunks, err := svg_icons_pages.GenerateSitemapIndexXML(db)
	if err != nil {
		log.Fatalf("Failed to generate svg-icons sitemap index: %v", err)
	}

	svgDir := filepath.Join(baseDir, "svg_icons")
	if err := os.MkdirAll(svgDir, 0755); err != nil {
		log.Fatalf("Failed to create directory %s: %v", svgDir, err)
	}

	indexPath := filepath.Join(svgDir, "sitemap.xml")
	if err := os.WriteFile(indexPath, []byte(xml), 0644); err != nil {
		log.Fatalf("Failed to write svg-icons sitemap index: %v", err)
	}
	fmt.Printf("✅ Generated SVG Icons sitemap index at %s\n", indexPath)

	// 2. Chunks
	for i := 1; i <= numChunks; i++ {
		chunkXML, err := svg_icons_pages.GenerateSitemapChunkXML(db, i)
		if err != nil {
			log.Fatalf("Failed to generate svg-icons sitemap chunk %d: %v", i, err)
		}
		if chunkXML == "" {
			continue
		}
		chunkPath := filepath.Join(svgDir, fmt.Sprintf("sitemap-%d.xml", i))
		if err := os.WriteFile(chunkPath, []byte(chunkXML), 0644); err != nil {
			log.Fatalf("Failed to write svg-icons sitemap chunk %d: %v", i, err)
		}
		fmt.Printf("✅ Generated SVG Icons sitemap chunk %d at %s\n", i, chunkPath)
	}

	// 3. Pagination Sitemap
	pagXML, err := svg_icons_pages.GeneratePaginationSitemapXML(db)
	if err != nil {
		log.Fatalf("Failed to generate svg-icons pagination sitemap: %v", err)
	}

	pagesDir := filepath.Join(baseDir, "svg_icons_pages")
	if err := os.MkdirAll(pagesDir, 0755); err != nil {
		log.Fatalf("Failed to create directory %s: %v", pagesDir, err)
	}

	pagesPath := filepath.Join(pagesDir, "sitemap.xml")
	if err := os.WriteFile(pagesPath, []byte(pagXML), 0644); err != nil {
		log.Fatalf("Failed to write svg-icons pagination sitemap: %v", err)
	}
	fmt.Printf("✅ Generated SVG Icons pagination sitemap at %s\n", pagesPath)
}

func generatePngIconsSitemap(baseDir string) {
	// Initialize DB
	db, err := png_icons_db.GetDB()
	if err != nil {
		log.Fatalf("Failed to open PNG Icons database: %v", err)
	}
	defer db.Close()

	// 1. Index
	xml, numChunks, err := png_icons_pages.GenerateSitemapIndexXML(db)
	if err != nil {
		log.Fatalf("Failed to generate png-icons sitemap index: %v", err)
	}

	pngDir := filepath.Join(baseDir, "png_icons")
	if err := os.MkdirAll(pngDir, 0755); err != nil {
		log.Fatalf("Failed to create directory %s: %v", pngDir, err)
	}

	indexPath := filepath.Join(pngDir, "sitemap.xml")
	if err := os.WriteFile(indexPath, []byte(xml), 0644); err != nil {
		log.Fatalf("Failed to write png-icons sitemap index: %v", err)
	}
	fmt.Printf("✅ Generated PNG Icons sitemap index at %s\n", indexPath)

	// 2. Chunks
	for i := 1; i <= numChunks; i++ {
		chunkXML, err := png_icons_pages.GenerateSitemapChunkXML(db, i)
		if err != nil {
			log.Fatalf("Failed to generate png-icons sitemap chunk %d: %v", i, err)
		}
		if chunkXML == "" {
			continue
		}
		chunkPath := filepath.Join(pngDir, fmt.Sprintf("sitemap-%d.xml", i))
		if err := os.WriteFile(chunkPath, []byte(chunkXML), 0644); err != nil {
			log.Fatalf("Failed to write png-icons sitemap chunk %d: %v", i, err)
		}
		fmt.Printf("✅ Generated PNG Icons sitemap chunk %d at %s\n", i, chunkPath)
	}

	// 3. Pagination Sitemap
	pagXML, err := png_icons_pages.GeneratePaginationSitemapXML(db)
	if err != nil {
		log.Fatalf("Failed to generate png-icons pagination sitemap: %v", err)
	}

	pagesDir := filepath.Join(baseDir, "png_icons_pages")
	if err := os.MkdirAll(pagesDir, 0755); err != nil {
		log.Fatalf("Failed to create directory %s: %v", pagesDir, err)
	}

	pagesPath := filepath.Join(pagesDir, "sitemap.xml")
	if err := os.WriteFile(pagesPath, []byte(pagXML), 0644); err != nil {
		log.Fatalf("Failed to write png-icons pagination sitemap: %v", err)
	}
	fmt.Printf("✅ Generated PNG Icons pagination sitemap at %s\n", pagesPath)
}

func generateMcpSitemap(baseDir string) {
	// Initialize DB
	db, err := mcp_db.GetDB()
	if err != nil {
		log.Fatalf("Failed to open MCP database: %v", err)
	}
	defer db.Close()

	// 1. Index
	xml, err := mcp_pages.GenerateSitemapIndexXML(db)
	if err != nil {
		log.Fatalf("Failed to generate mcp sitemap index: %v", err)
	}

	mcpDir := filepath.Join(baseDir, "mcp")
	if err := os.MkdirAll(mcpDir, 0755); err != nil {
		log.Fatalf("Failed to create directory %s: %v", mcpDir, err)
	}

	indexPath := filepath.Join(mcpDir, "sitemap.xml")
	if err := os.WriteFile(indexPath, []byte(xml), 0644); err != nil {
		log.Fatalf("Failed to write mcp sitemap index: %v", err)
	}
	fmt.Printf("✅ Generated MCP sitemap index at %s\n", indexPath)

	// 2. Categories & Chunks
	categories, err := db.GetAllMcpCategories(1, 80)
	if err != nil {
		log.Fatalf("Failed to fetch mcp categories: %v", err)
	}

	for _, cat := range categories {
		catDir := filepath.Join(mcpDir, cat.Slug)
		if err := os.MkdirAll(catDir, 0755); err != nil {
			log.Fatalf("Failed to create directory %s: %v", catDir, err)
		}

		catXML, numChunks, err := mcp_pages.GenerateCategorySitemapXML(db, cat.Slug)
		if err != nil {
			log.Printf("Failed to generate sitemap for category %s: %v", cat.Slug, err)
			continue
		}

		// Write the main XML (either urlset or sitemapindex)
		catPath := filepath.Join(catDir, "sitemap.xml")
		if err := os.WriteFile(catPath, []byte(catXML), 0644); err != nil {
			log.Printf("Failed to write sitemap for category %s: %v", cat.Slug, err)
			continue
		}
		fmt.Printf("✅ Generated MCP category sitemap for %s at %s\n", cat.Slug, catPath)

		if numChunks > 0 {
			// Generate individual chunks
			for i := 1; i <= numChunks; i++ {
				chunkXML, err := mcp_pages.GenerateCategorySitemapChunkXML(db, cat.Slug, i)
				if err != nil {
					log.Printf("Failed to generate sitemap chunk %d for category %s: %v", i, cat.Slug, err)
					continue
				}
				if chunkXML == "" {
					continue
				}
				chunkPath := filepath.Join(catDir, fmt.Sprintf("sitemap-%d.xml", i))
				if err := os.WriteFile(chunkPath, []byte(chunkXML), 0644); err != nil {
					log.Printf("Failed to write sitemap chunk %d for category %s: %v", i, cat.Slug, err)
					continue
				}
				fmt.Printf("✅ Generated MCP sitemap chunk %d for category %s at %s\n", i, cat.Slug, chunkPath)
			}
		}
	}

	// 3. Pagination Sitemap
	pagXML, err := mcp_pages.GeneratePaginationSitemapXML(db)
	if err != nil {
		log.Fatalf("Failed to generate mcp pagination sitemap: %v", err)
	}

	pagesDir := filepath.Join(baseDir, "mcp_pages")
	if err := os.MkdirAll(pagesDir, 0755); err != nil {
		log.Fatalf("Failed to create directory %s: %v", pagesDir, err)
	}

	pagesPath := filepath.Join(pagesDir, "sitemap.xml")
	if err := os.WriteFile(pagesPath, []byte(pagXML), 0644); err != nil {
		log.Fatalf("Failed to write mcp pagination sitemap: %v", err)
	}
	fmt.Printf("✅ Generated MCP pagination sitemap at %s\n", pagesPath)
}

func generateManPagesSitemap(baseDir string) {
	// Initialize DB
	db, err := man_pages_db.GetDB()
	if err != nil {
		log.Fatalf("Failed to open Man Pages database: %v", err)
	}
	defer db.Close()

	// 1. Index
	xml, numChunks, err := man_pages_pages.GenerateSitemapIndexXML(db)
	if err != nil {
		log.Fatalf("Failed to generate man-pages sitemap index: %v", err)
	}

	manDir := filepath.Join(baseDir, "man_pages")
	if err := os.MkdirAll(manDir, 0755); err != nil {
		log.Fatalf("Failed to create directory %s: %v", manDir, err)
	}

	indexPath := filepath.Join(manDir, "sitemap.xml")
	if err := os.WriteFile(indexPath, []byte(xml), 0644); err != nil {
		log.Fatalf("Failed to write man-pages sitemap index: %v", err)
	}
	fmt.Printf("✅ Generated Man Pages sitemap index at %s\n", indexPath)

	// 2. Chunks
	for i := 1; i <= numChunks; i++ {
		chunkXML, err := man_pages_pages.GenerateSitemapChunkXML(db, i)
		if err != nil {
			log.Fatalf("Failed to generate man-pages sitemap chunk %d: %v", i, err)
		}
		if chunkXML == "" {
			continue
		}
		chunkPath := filepath.Join(manDir, fmt.Sprintf("sitemap-%d.xml", i))
		if err := os.WriteFile(chunkPath, []byte(chunkXML), 0644); err != nil {
			log.Fatalf("Failed to write man-pages sitemap chunk %d: %v", i, err)
		}
		fmt.Printf("✅ Generated Man Pages sitemap chunk %d at %s\n", i, chunkPath)
	}

	// 3. Pagination Sitemap
	pagXML, err := man_pages_pages.GeneratePaginationSitemapXML(db)
	if err != nil {
		log.Fatalf("Failed to generate man-pages pagination sitemap: %v", err)
	}

	pagesDir := filepath.Join(baseDir, "man_pages_pages")
	if err := os.MkdirAll(pagesDir, 0755); err != nil {
		log.Fatalf("Failed to create directory %s: %v", pagesDir, err)
	}

	pagesPath := filepath.Join(pagesDir, "sitemap.xml")
	if err := os.WriteFile(pagesPath, []byte(pagXML), 0644); err != nil {
		log.Fatalf("Failed to write man-pages pagination sitemap: %v", err)
	}
	fmt.Printf("✅ Generated Man Pages pagination sitemap at %s\n", pagesPath)
}

func generateInstallerpediaSitemap(baseDir string) {
	// Initialize DB
	db, err := installerpedia_db.GetDB()
	if err != nil {
		log.Fatalf("Failed to open Installerpedia database: %v", err)
	}
	defer db.Close()

	// 1. Installerpedia Sitemap
	xml, err := installerpedia_pages.GenerateSitemapXML(db)
	if err != nil {
		log.Fatalf("Failed to generate installerpedia sitemap: %v", err)
	}

	installerpediaDir := filepath.Join(baseDir, "installerpedia")
	if err := os.MkdirAll(installerpediaDir, 0755); err != nil {
		log.Fatalf("Failed to create directory %s: %v", installerpediaDir, err)
	}

	sitemapPath := filepath.Join(installerpediaDir, "sitemap.xml")
	if err := os.WriteFile(sitemapPath, []byte(xml), 0644); err != nil {
		log.Fatalf("Failed to write installerpedia sitemap: %v", err)
	}
	fmt.Printf("✅ Generated Installerpedia sitemap at %s\n", sitemapPath)

	// 2. Pagination Sitemap
	pagXML, err := installerpedia_pages.GeneratePaginationSitemapXML(db)
	if err != nil {
		log.Fatalf("Failed to generate installerpedia pagination sitemap: %v", err)
	}

	pagesDir := filepath.Join(baseDir, "installerpedia_pages")
	if err := os.MkdirAll(pagesDir, 0755); err != nil {
		log.Fatalf("Failed to create directory %s: %v", pagesDir, err)
	}

	pagesPath := filepath.Join(pagesDir, "sitemap.xml")
	if err := os.WriteFile(pagesPath, []byte(pagXML), 0644); err != nil {
		log.Fatalf("Failed to write installerpedia pagination sitemap: %v", err)
	}
	fmt.Printf("✅ Generated Installerpedia pagination sitemap at %s\n", pagesPath)
}
