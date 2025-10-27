package main

import (
	"context"
	"fmt"
	"io/ioutil"
	"log"
	"regexp"
	jargon_stemmer "search-index/jargon-stemmer"
	"strings"
	"time"
)

func generateToolsData(ctx context.Context) ([]ToolData, error) {
	fmt.Println("📱 Generating tools data...")

	// Read the TypeScript tools config file
	content, err := ioutil.ReadFile("../frontend/src/config/tools.ts")
	if err != nil {
		return nil, fmt.Errorf("failed to read tools.ts: %w", err)
	}

	tools, err := parseToolsConfig(string(content))
	if err != nil {
		return nil, fmt.Errorf("failed to parse tools config: %w", err)
	}

	fmt.Printf("📱 Parsed %d tools from config\n", len(tools))
	return tools, nil
}

func parseToolsConfig(tsContent string) ([]ToolData, error) {
	var tools []ToolData

	// Find the TOOLS_CONFIG object - simplified approach
	objectRegex := regexp.MustCompile(`export const TOOLS_CONFIG:[\s\S]*?=\s*\{([\s\S]*?)\}\s*;`)
	objectMatch := objectRegex.FindStringSubmatch(tsContent)
	if len(objectMatch) < 2 {
		fmt.Printf("❌ TOOLS_CONFIG object not found in TypeScript file\n")
		fmt.Printf("File length: %d characters\n", len(tsContent))
		previewLen := 200
		if len(tsContent) < previewLen {
			previewLen = len(tsContent)
		}
		fmt.Printf("First 200 chars: %s\n", tsContent[:previewLen])
		return tools, fmt.Errorf("TOOLS_CONFIG object not found")
	}

	body := objectMatch[1]

	// Split by tool entries using a simpler approach
	tools = parseToolEntries(body)

	return tools, nil
}

func parseToolEntries(body string) []ToolData {
	var tools []ToolData

	// Find tool keys first (handle both single and double quotes)
	keyRegex := regexp.MustCompile(`['"]([^'"]+)['"]\s*:\s*\{`)
	keyMatches := keyRegex.FindAllStringSubmatch(body, -1)
	keyIndices := keyRegex.FindAllStringIndex(body, -1)


	for i, keyMatch := range keyMatches {
		if len(keyMatch) < 2 {
			continue
		}

		key := keyMatch[1]
		startIdx := keyIndices[i][1] // End of the key match

		// Find the end of this tool object
		var endIdx int
		if i+1 < len(keyIndices) {
			endIdx = keyIndices[i+1][0] // Start of next tool
		} else {
			endIdx = len(body) // End of string
		}

		// Extract the tool block
		toolBlock := body[startIdx:endIdx]

		// Find the closing brace for this tool
		braceCount := 0
		actualEndIdx := 0
		for j, char := range toolBlock {
			if char == '{' {
				braceCount++
			} else if char == '}' {
				if braceCount == 0 {
					actualEndIdx = j
					break
				}
				braceCount--
			}
		}

		if actualEndIdx > 0 {
			toolBlock = toolBlock[:actualEndIdx]
		}

		// Extract required fields
		name := extractStringField(toolBlock, "name")
		if name == "" {
			name = extractStringField(toolBlock, "title")
		}
		if name == "" {
			name = key
		}

		description := extractStringField(toolBlock, "description")
		path := extractStringField(toolBlock, "path")
		

		// Generate ID from path
		id := generateToolIDFromPath(path)

		// Create simplified tool data with only required fields
		tool := ToolData{
			ID:          id,
			Name:        name,
			Description: description,
			Path:        path,
			Category:    "tools",
		}

		tools = append(tools, tool)
	}

	return tools
}

func generateToolIDFromPath(path string) string {
	if path == "" {
		return ""
	}

	// Extract the tool suffix from path like "/freedevtools/t/har-file-viewer/" -> "har-file-viewer"
	// Remove leading and trailing slashes
	cleanPath := strings.Trim(path, "/")

	// Split by slash and get the last part
	parts := strings.Split(cleanPath, "/")
	if len(parts) >= 3 && parts[0] == "freedevtools" && parts[1] == "t" {
		toolSuffix := parts[2]
		return fmt.Sprintf("tools-%s", toolSuffix)
	}

	// Fallback: if path doesn't match expected format, try to extract from end
	if len(parts) > 0 {
		toolSuffix := parts[len(parts)-1]
		if toolSuffix != "" {
			return fmt.Sprintf("tools-%s", toolSuffix)
		}
	}

	// Final fallback
	return "tools-unknown"
}

func extractStringField(block, field string) string {
	// Handle both single and double quotes, and multiline values
	patterns := []string{
		// Single quotes
		fmt.Sprintf(`%s\s*:\s*'([^']*)'`, field),
		// Double quotes  
		fmt.Sprintf(`%s\s*:\s*"([^"]*)"`, field),
		// Multiline single quotes
		fmt.Sprintf(`%s\s*:\s*'([^']*(?:'[^']*)*)'`, field),
		// Multiline double quotes
		fmt.Sprintf(`%s\s*:\s*"([^"]*(?:"[^"]*)*)"`, field),
	}

	for _, pattern := range patterns {
		regex := regexp.MustCompile(pattern)
		match := regex.FindStringSubmatch(block)
		if len(match) > 1 {
			value := strings.TrimSpace(match[1])
			if value != "" {
				return value
			}
		}
	}
	return ""
}


func RunToolsOnly(ctx context.Context, start time.Time) {
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
	
	// Automatically run stem processing
	fmt.Println("\n🔍 Running stem processing...")
	if err := jargon_stemmer.ProcessJSONFile("output/tools.json"); err != nil {
		log.Fatalf("❌ Stem processing failed: %v", err)
	}
	fmt.Println("✅ Stem processing completed!")
}