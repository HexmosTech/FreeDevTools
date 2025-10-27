package main

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"os"
	"path/filepath"
	"strings"
	"sync"
	"time"

	jargon_stemmer "search-index/jargon-stemmer"
)

func main() {
	start := time.Now()

	// Create output directory if it doesn't exist
	if err := ensureOutputDir(); err != nil {
		log.Fatalf("Failed to create output directory: %v", err)
	}

	// Parse command line arguments for category and stem
	category := parseCategory()
	stemArgs := parseStem()

	if stemArgs != "" {
		fmt.Printf("🚀 Starting stem processing...\n")
		runStemProcessing(stemArgs)
		return
	}

	if category != "" {
		fmt.Printf("🚀 Starting %s data generation...\n", category)
		runSingleCategory(category)
		return
	}

	fmt.Println("🚀 Starting search index generation...")

	// Create context for cancellation
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Minute)
	defer cancel()

	// Use WaitGroup to wait for all goroutines
	var wg sync.WaitGroup

	// Channels to collect results
	toolsChan := make(chan []ToolData, 1)
	tldrChan := make(chan []TLDRData, 1)
	emojisChan := make(chan []EmojiData, 1)
	svgIconsChan := make(chan []SVGIconData, 1)
	pngIconsChan := make(chan []SVGIconData, 1)
	cheatsheetsChan := make(chan []CheatsheetData, 1)
	mcpChan := make(chan []MCPData, 1)
	errorsChan := make(chan error, 6)

	// Start all collection goroutines
	wg.Add(7)

	go func() {
		defer wg.Done()
		tools, err := generateToolsData(ctx)
		if err != nil {
			errorsChan <- fmt.Errorf("tools data generation failed: %w", err)
			return
		}
		toolsChan <- tools
	}()

	go func() {
		defer wg.Done()
		tldr, err := generateTLDRData(ctx)
		if err != nil {
			errorsChan <- fmt.Errorf("TLDR data generation failed: %w", err)
			return
		}
		tldrChan <- tldr
	}()

	go func() {
		defer wg.Done()
		emojis, err := generateEmojisData(ctx)
		if err != nil {
			errorsChan <- fmt.Errorf("emojis data generation failed: %w", err)
			return
		}
		emojisChan <- emojis
	}()

	go func() {
		defer wg.Done()
		svgIcons, err := generateSVGIconsData(ctx)
		if err != nil {
			errorsChan <- fmt.Errorf("SVG icons data generation failed: %w", err)
			return
		}
		svgIconsChan <- svgIcons
	}()

	go func() {
		defer wg.Done()
		pngIcons, err := generatePNGIconsData(ctx)
		if err != nil {
			errorsChan <- fmt.Errorf("PNG icons data generation failed: %w", err)
			return
		}
		pngIconsChan <- pngIcons
	}()
	

	go func() {
		defer wg.Done()
		cheatsheets, err := generateCheatsheetsData(ctx)
		if err != nil {
			errorsChan <- fmt.Errorf("cheatsheets data generation failed: %w", err)
			return
		}
		cheatsheetsChan <- cheatsheets
	}()

	go func() {
		defer wg.Done()
		mcp, err := generateMCPData(ctx)
		if err != nil {
			errorsChan <- fmt.Errorf("MCP data generation failed: %w", err)
			return
		}
		mcpChan <- mcp
	}()

	// Wait for all goroutines to complete
	go func() {
		wg.Wait()
		close(toolsChan)
		close(tldrChan)
		close(emojisChan)
		close(svgIconsChan)
		close(pngIconsChan)
		close(cheatsheetsChan)
		close(mcpChan)
		close(errorsChan)
	}()

	// Collect results and check for errors
	var tools []ToolData
	var tldr []TLDRData
	var emojis []EmojiData
	var svgIcons []SVGIconData
	var pngIcons []SVGIconData
	var cheatsheets []CheatsheetData
	var mcp []MCPData
	var errors []error

	// Track which channels we've received data from
	receivedChannels := 0
	totalChannels := 7

	for receivedChannels < totalChannels {
		select {
		case t, ok := <-toolsChan:
			if ok {
				tools = t
				fmt.Printf("✅ Tools data collected: %d items\n", len(t))
			}
			receivedChannels++
		case tl, ok := <-tldrChan:
			if ok {
				tldr = tl
				fmt.Printf("✅ TLDR data collected: %d items\n", len(tl))
			}
			receivedChannels++
		case e, ok := <-emojisChan:
			if ok {
				emojis = e
				fmt.Printf("✅ Emojis data collected: %d items\n", len(e))
			}
			receivedChannels++
		case s, ok := <-svgIconsChan:
			if ok {
				svgIcons = s
				fmt.Printf("✅ SVG icons data collected: %d items\n", len(s))
			}
			receivedChannels++
		case p, ok := <-pngIconsChan:
			if ok {
				pngIcons = p
				fmt.Printf("✅ PNG icons data collected: %d items\n", len(p))
			}
			receivedChannels++		
		case c, ok := <-cheatsheetsChan:
			if ok {
				cheatsheets = c
				fmt.Printf("✅ Cheatsheets data collected: %d items\n", len(c))
			}
			receivedChannels++
		case m, ok := <-mcpChan:
			if ok {
				mcp = m
				fmt.Printf("✅ MCP data collected: %d items\n", len(m))
			}
			receivedChannels++
		case err, ok := <-errorsChan:
			if ok {
				errors = append(errors, err)
				fmt.Printf("❌ Error: %v\n", err)
			}
			// Don't increment receivedChannels for errors
		case <-ctx.Done():
			fmt.Println("❌ Operation timed out")
			os.Exit(1)
		}
	}

	// Drain any remaining errors
	for {
		select {
		case err, ok := <-errorsChan:
			if ok {
				errors = append(errors, err)
				fmt.Printf("❌ Error: %v\n", err)
			} else {
				goto doneWithErrors
			}
		default:
			goto doneWithErrors
		}
	}

doneWithErrors:
	// Check if any errors occurred
	if len(errors) > 0 {
		fmt.Printf("❌ %d errors occurred during generation:\n", len(errors))
		for _, err := range errors {
			fmt.Printf("  - %v\n", err)
		}
		os.Exit(1)
	}

	// Save all data to JSON files in output directory
	if err := saveToJSON("tools.json", tools); err != nil {
		log.Fatalf("Failed to save tools data: %v", err)
	}

	if err := saveToJSON("tldr_pages.json", tldr); err != nil {
		log.Fatalf("Failed to save TLDR data: %v", err)
	}

	if err := saveToJSON("emojis.json", emojis); err != nil {
		log.Fatalf("Failed to save emojis data: %v", err)
	}

	if err := saveToJSON("svg_icons.json", svgIcons); err != nil {
		log.Fatalf("Failed to save SVG icons data: %v", err)
	}

	if err := saveToJSON("png_icons.json", pngIcons); err != nil {
		log.Fatalf("Failed to save PNG icons data: %v", err)
	}
	

	if err := saveToJSON("cheatsheets.json", cheatsheets); err != nil {
		log.Fatalf("Failed to save cheatsheets data: %v", err)
	}

	if err := saveToJSON("mcp.json", mcp); err != nil {
		log.Fatalf("Failed to save MCP data: %v", err)
	}

	elapsed := time.Since(start)
	fmt.Printf("\n🎉 Search index generation completed successfully in %v\n", elapsed)
	fmt.Printf("📊 Generated data:\n")
	fmt.Printf("  - Tools: %d items\n", len(tools))
	fmt.Printf("  - TLDR Pages: %d items\n", len(tldr))
	fmt.Printf("  - Emojis: %d items\n", len(emojis))
	fmt.Printf("  - SVG Icons: %d items\n", len(svgIcons))
	fmt.Printf("  - PNG Icons: %d items\n", len(pngIcons))
	fmt.Printf("  - Cheatsheets: %d items\n", len(cheatsheets))
	fmt.Printf("  - MCP: %d items\n", len(mcp))
	fmt.Printf("\n💾 All files saved to ./output/ directory\n")
	
	// Automatically run stem processing on all generated files
	fmt.Println("\n🔍 Running stem processing on all files...")
	
	// Get all JSON files from output directory
	outputDir := "output"
	files, err := os.ReadDir(outputDir)
	if err != nil {
		log.Printf("❌ Failed to read output directory: %v", err)
		return
	}
	
	for _, file := range files {
		if strings.HasSuffix(file.Name(), ".json") {
			filePath := filepath.Join(outputDir, file.Name())
			fmt.Printf("Processing %s...\n", filePath)
			if err := jargon_stemmer.ProcessJSONFile(filePath); err != nil {
				log.Printf("❌ Stem processing failed for %s: %v", filePath, err)
			} else {
				fmt.Printf("✅ Completed %s\n", filePath)
			}
		}
	}
	
	fmt.Println("🎉 All stem processing completed!")
}

func parseCategory() string {
	for _, arg := range os.Args[1:] {
		if strings.HasPrefix(arg, "category=") {
			return strings.TrimPrefix(arg, "category=")
		}
	}
	return ""
}

func parseStem() string {
	for _, arg := range os.Args[1:] {
		if strings.HasPrefix(arg, "stem=") {
			return strings.TrimPrefix(arg, "stem=")
		}
	}
	return ""
}

func runStemProcessing(stemArgs string) {
	start := time.Now()
	
	// Use the file path directly
	filePath := strings.TrimSpace(stemArgs)
	
	// Check if the file exists
	if _, err := os.Stat(filePath); os.IsNotExist(err) {
		fmt.Printf("❌ File not found: %s\n", filePath)
		fmt.Println("Make sure the file exists.")
		os.Exit(1)
	}
	
	fmt.Printf("🔍 Processing file: %s\n", filePath)
	
	// Use the reusable function from jargon-stemmer package
	if err := jargon_stemmer.ProcessJSONFile(filePath); err != nil {
		log.Fatalf("❌ Stem processing failed: %v", err)
	}
	
	elapsed := time.Since(start)
	fmt.Printf("\n🎉 Stem processing completed in %v\n", elapsed)
	fmt.Printf("💾 Processed file: %s\n", filePath)
}

func runSingleCategory(category string) {
	ctx, cancel := context.WithTimeout(context.Background(), 2*time.Minute)
	defer cancel()

	start := time.Now()

	switch strings.ToLower(category) {
	case "tools":
		RunToolsOnly(ctx, start)
	case "tldr":
		RunTLDROnly(ctx, start)
	case "emojis":
		RunEmojisOnly(ctx, start)
	case "svg_icons", "svg-icons":
		RunSVGIconsOnly(ctx, start)
	case "png_icons", "png-icons":
		RunPNGIconsOnly(ctx, start)	
	case "cheatsheets":
		RunCheatsheetsOnly(ctx, start)
	case "mcp":
		RunMCPOnly(ctx, start)
	default:
		fmt.Printf("❌ Unknown category: %s\n", category)
		fmt.Println("Available categories: tools, tldr, emojis, svg_icons, png_icons, cheatsheets, mcp")
		fmt.Println("Usage: go run main.go category=tools")
		fmt.Println("Or for stem processing: go run main.go stem=output/emojis.json")
		os.Exit(1)
	}
}

// Helper functions
func truncateString(s string, maxLen int) string {
	if len(s) <= maxLen {
		return s
	}
	return s[:maxLen-3] + "..."
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

// ensureOutputDir creates the output directory if it doesn't exist
func ensureOutputDir() error {
	outputDir := "output"
	if _, err := os.Stat(outputDir); os.IsNotExist(err) {
		return os.MkdirAll(outputDir, 0755)
	}
	return nil
}

// saveToJSON saves data to a JSON file in the output directory
func saveToJSON(filename string, data interface{}) error {
	// Ensure output directory exists
	if err := ensureOutputDir(); err != nil {
		return fmt.Errorf("failed to create output directory: %w", err)
	}

	// Create full path to output directory
	fullPath := filepath.Join("output", filename)

	file, err := os.Create(fullPath)
	if err != nil {
		return err
	}
	defer file.Close()

	encoder := json.NewEncoder(file)
	encoder.SetIndent("", "  ")
	return encoder.Encode(data)
}
