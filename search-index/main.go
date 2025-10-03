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
)

func main() {
	start := time.Now()

	// Create output directory if it doesn't exist
	if err := ensureOutputDir(); err != nil {
		log.Fatalf("Failed to create output directory: %v", err)
	}

	// Parse command line arguments for category
	category := parseCategory()

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
	cheatsheetsChan := make(chan []CheatsheetData, 1)
	errorsChan := make(chan error, 5)

	// Start all collection goroutines
	wg.Add(5)

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
		cheatsheets, err := generateCheatsheetsData(ctx)
		if err != nil {
			errorsChan <- fmt.Errorf("cheatsheets data generation failed: %w", err)
			return
		}
		cheatsheetsChan <- cheatsheets
	}()

	// Wait for all goroutines to complete
	go func() {
		wg.Wait()
		close(toolsChan)
		close(tldrChan)
		close(emojisChan)
		close(svgIconsChan)
		close(cheatsheetsChan)
		close(errorsChan)
	}()

	// Collect results and check for errors
	var tools []ToolData
	var tldr []TLDRData
	var emojis []EmojiData
	var svgIcons []SVGIconData
	var cheatsheets []CheatsheetData
	var errors []error

	// Track which channels we've received data from
	receivedChannels := 0
	totalChannels := 5

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
		case c, ok := <-cheatsheetsChan:
			if ok {
				cheatsheets = c
				fmt.Printf("✅ Cheatsheets data collected: %d items\n", len(c))
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

	if err := saveToJSON("cheatsheets.json", cheatsheets); err != nil {
		log.Fatalf("Failed to save cheatsheets data: %v", err)
	}

	elapsed := time.Since(start)
	fmt.Printf("\n🎉 Search index generation completed successfully in %v\n", elapsed)
	fmt.Printf("📊 Generated data:\n")
	fmt.Printf("  - Tools: %d items\n", len(tools))
	fmt.Printf("  - TLDR Pages: %d items\n", len(tldr))
	fmt.Printf("  - Emojis: %d items\n", len(emojis))
	fmt.Printf("  - SVG Icons: %d items\n", len(svgIcons))
	fmt.Printf("  - Cheatsheets: %d items\n", len(cheatsheets))
	fmt.Printf("\n💾 All files saved to ./output/ directory\n")
}

func parseCategory() string {
	for _, arg := range os.Args[1:] {
		if strings.HasPrefix(arg, "category=") {
			return strings.TrimPrefix(arg, "category=")
		}
	}
	return ""
}

func runSingleCategory(category string) {
	ctx, cancel := context.WithTimeout(context.Background(), 2*time.Minute)
	defer cancel()

	start := time.Now()

	switch strings.ToLower(category) {
	case "tools":
		runToolsOnly(ctx, start)
	case "tldr":
		runTLDROnly(ctx, start)
	case "emojis":
		runEmojisOnly(ctx, start)
	case "svg_icons", "svg-icons":
		runSVGIconsOnly(ctx, start)
	case "cheatsheets":
		runCheatsheetsOnly(ctx, start)
	default:
		fmt.Printf("❌ Unknown category: %s\n", category)
		fmt.Println("Available categories: tools, tldr, emojis, svg_icons, cheatsheets")
		fmt.Println("Usage: go run main.go category=tools")
		os.Exit(1)
	}
}

func runToolsOnly(ctx context.Context, start time.Time) {
	fmt.Println("📱 Generating tools data only...")

	tools, err := generateToolsData(ctx)
	if err != nil {
		log.Fatalf("❌ Tools data generation failed: %v", err)
	}

	// Save to JSON
	if err := saveToJSON("tools.json", tools); err != nil {
		log.Fatalf("Failed to save tools data: %v", err)
	}

	elapsed := time.Since(start)
	fmt.Printf("\n🎉 Tools data generation completed in %v\n", elapsed)
	fmt.Printf("📊 Generated %d tools\n", len(tools))

	fmt.Printf("💾 Data saved to output/tools.json\n")
}

func runTLDROnly(ctx context.Context, start time.Time) {
	fmt.Println("📚 Generating TLDR data only...")

	tldr, err := generateTLDRData(ctx)
	if err != nil {
		log.Fatalf("❌ TLDR data generation failed: %v", err)
	}

	// Save to JSON
	if err := saveToJSON("tldr_pages.json", tldr); err != nil {
		log.Fatalf("Failed to save TLDR data: %v", err)
	}

	elapsed := time.Since(start)
	fmt.Printf("\n🎉 TLDR data generation completed in %v\n", elapsed)
	fmt.Printf("📊 Generated %d TLDR pages\n", len(tldr))

	// Show sample data
	fmt.Println("\n📝 Sample TLDR pages:")
	for i, page := range tldr {
		if i >= 10 { // Show first 10
			fmt.Printf("  ... and %d more pages\n", len(tldr)-10)
			break
		}
		fmt.Printf("  %d. %s (ID: %s, Category: %s)\n", i+1, page.Name, page.ID, page.Category)
		if page.Description != "" {
			fmt.Printf("     Description: %s\n", truncateString(page.Description, 80))
		}
		fmt.Printf("     Path: %s\n", page.Path)
		fmt.Println()
	}

	fmt.Printf("💾 Data saved to output/tldr_pages.json\n")
}

func runEmojisOnly(ctx context.Context, start time.Time) {
	fmt.Println("😀 Generating emojis data only...")

	emojis, err := generateEmojisData(ctx)
	if err != nil {
		log.Fatalf("❌ Emojis data generation failed: %v", err)
	}

	// Save to JSON
	if err := saveToJSON("emojis.json", emojis); err != nil {
		log.Fatalf("Failed to save emojis data: %v", err)
	}

	elapsed := time.Since(start)
	fmt.Printf("\n🎉 Emojis data generation completed in %v\n", elapsed)
	fmt.Printf("📊 Generated %d emojis\n", len(emojis))

	// Show sample data
	fmt.Println("\n📝 Sample emojis:")
	for i, emoji := range emojis {
		if i >= 10 { // Show first 10
			fmt.Printf("  ... and %d more emojis\n", len(emojis)-10)
			break
		}
		fmt.Printf("  %d. %s %s (ID: %s)\n", i+1, emoji.Name, emoji.Code, emoji.ID)
		if emoji.Description != "" {
			fmt.Printf("     Description: %s\n", truncateString(emoji.Description, 80))
		}
		fmt.Printf("     Path: %s\n", emoji.Path)
		fmt.Println()
	}

	fmt.Printf("💾 Data saved to output/emojis.json\n")
}

func runSVGIconsOnly(ctx context.Context, start time.Time) {
	fmt.Println("🎨 Generating SVG icons data only...")

	icons, err := generateSVGIconsData(ctx)
	if err != nil {
		log.Fatalf("❌ SVG icons data generation failed: %v", err)
	}

	// Save to JSON
	if err := saveToJSON("svg_icons.json", icons); err != nil {
		log.Fatalf("Failed to save SVG icons data: %v", err)
	}

	elapsed := time.Since(start)
	fmt.Printf("\n🎉 SVG icons data generation completed in %v\n", elapsed)
	fmt.Printf("📊 Generated %d SVG icons\n", len(icons))

	// Show sample data
	fmt.Println("\n📝 Sample SVG icons:")
	for i, icon := range icons {
		if i >= 10 { // Show first 10
			fmt.Printf("  ... and %d more icons\n", len(icons)-10)
			break
		}
		fmt.Printf("  %d. %s (ID: %s)\n", i+1, icon.Name, icon.ID)
		if icon.Description != "" {
			fmt.Printf("     Description: %s\n", truncateString(icon.Description, 80))
		}
		fmt.Printf("     Image: %s\n", icon.Image)
		fmt.Printf("     Path: %s\n", icon.Path)
		fmt.Println()
	}

	fmt.Printf("💾 Data saved to output/svg_icons.json\n")
}

func runCheatsheetsOnly(ctx context.Context, start time.Time) {
	fmt.Println("📖 Generating cheatsheets data only...")

	cheatsheets, err := generateCheatsheetsData(ctx)
	if err != nil {
		log.Fatalf("❌ Cheatsheets data generation failed: %v", err)
	}

	// Save to JSON
	if err := saveToJSON("cheatsheets.json", cheatsheets); err != nil {
		log.Fatalf("Failed to save cheatsheets data: %v", err)
	}

	elapsed := time.Since(start)
	fmt.Printf("\n🎉 Cheatsheets data generation completed in %v\n", elapsed)
	fmt.Printf("📊 Generated %d cheatsheets\n", len(cheatsheets))

	// Show sample data
	fmt.Println("\n📝 Sample cheatsheets:")
	for i, sheet := range cheatsheets {
		if i >= 10 { // Show first 10
			fmt.Printf("  ... and %d more cheatsheets\n", len(cheatsheets)-10)
			break
		}
		fmt.Printf("  %d. %s (ID: %s)\n", i+1, sheet.Name, sheet.ID)
		if sheet.Description != "" {
			fmt.Printf("     Description: %s\n", truncateString(sheet.Description, 80))
		}
		fmt.Printf("     Path: %s\n", sheet.Path)
		fmt.Println()
	}

	fmt.Printf("💾 Data saved to output/cheatsheets.json\n")
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
