package main

import (
	"context"
	"fmt"
	"go/ast"
	"go/parser"
	"go/token"
	"log"
	"os"
	jargon_stemmer "search-index/jargon-stemmer"
	"strconv"
	"strings"
	"time"
)

func generateToolsData(ctx context.Context) ([]ToolData, error) {
	fmt.Println("📱 Generating tools data from Go source...")

	// Adjust path relative to search-index directory
	toolsGoPath := "../frontend/internal/db/tools/tools.go"

	// Verify file exists
	if _, err := os.Stat(toolsGoPath); os.IsNotExist(err) {
		return nil, fmt.Errorf("tools.go not found at %s", toolsGoPath)
	}

	fset := token.NewFileSet()
	node, err := parser.ParseFile(fset, toolsGoPath, nil, parser.ParseComments)
	if err != nil {
		return nil, fmt.Errorf("failed to parse tools.go: %w", err)
	}

	var tools []ToolData

	// Walk the AST to find ToolsList variable
	ast.Inspect(node, func(n ast.Node) bool {
		// Find variable declarations
		genDecl, ok := n.(*ast.GenDecl)
		if !ok || genDecl.Tok != token.VAR {
			return true
		}

		for _, spec := range genDecl.Specs {
			valueSpec, ok := spec.(*ast.ValueSpec)
			if !ok {
				continue
			}

			// Check if variable name is ToolsList
			for i, name := range valueSpec.Names {
				if name.Name == "ToolsList" {
					// Ensure we have a value at this index (ToolsList = ...)
					if i < len(valueSpec.Values) {
						// The value should be a CompositeLit (slice literal)
						compLit, ok := valueSpec.Values[i].(*ast.CompositeLit)
						if ok {
							// Parse the list of tools
							foundTools := parseToolsList(compLit)
							tools = append(tools, foundTools...)
						}
					}
				}
			}
		}
		return true
	})

	fmt.Printf("📱 Parsed %d tools from Go AST\n", len(tools))
	return tools, nil
}

func parseToolsList(list *ast.CompositeLit) []ToolData {
	var tools []ToolData

	for _, elt := range list.Elts {
		// Each element is a Tool struct entries
		compLit, ok := elt.(*ast.CompositeLit)
		if !ok {
			continue
		}

		toolPtr := parseToolStruct(compLit)
		if toolPtr != nil {
			tools = append(tools, *toolPtr)
		}
	}

	return tools
}

func parseToolStruct(lit *ast.CompositeLit) *ToolData {
	var rawName, rawTitle, rawDesc, rawPath string

	for _, elt := range lit.Elts {
		// Key: Value
		kv, ok := elt.(*ast.KeyValueExpr)
		if !ok {
			continue
		}

		// Key should be an identifier
		key, ok := kv.Key.(*ast.Ident)
		if !ok {
			continue
		}

		// Extract string value
		valStr := ""
		if litVal, ok := kv.Value.(*ast.BasicLit); ok && litVal.Kind == token.STRING {
			unquoted, err := strconv.Unquote(litVal.Value)
			if err == nil {
				valStr = unquoted
			} else {
				// Fallback
				valStr = strings.Trim(litVal.Value, "\"")
			}
		}

		switch key.Name {
		case "Name":
			rawName = valStr
		case "Title":
			rawTitle = valStr
		case "Description":
			rawDesc = valStr
		case "Path":
			rawPath = valStr
		}
	}

	// Logic to match previous implementation
	name := rawName
	if name == "" {
		name = rawTitle
	}
	name = cleanName(name)

	// Skip incomplete entries if necessary, but generally we expect valid entries
	if rawPath == "" {
		return nil
	}

	// Generate ID from path to maintain consistency with old indexer
	id := generateToolIDFromPath(rawPath)

	return &ToolData{
		ID:          id,
		Name:        name,
		Description: rawDesc,
		Path:        rawPath,
		Category:    "tools",
	}
}

func generateToolIDFromPath(path string) string {
	if path == "" {
		return ""
	}

	// Extract the tool suffix from path like "/freedevtools/t/har-file-viewer/" -> "tools-har-file-viewer"
	// Remove leading and trailing slashes
	cleanPath := strings.Trim(path, "/")

	// Split by slash and get the last part
	parts := strings.Split(cleanPath, "/")
	if len(parts) >= 3 && parts[0] == "freedevtools" && parts[1] == "t" {
		toolSuffix := parts[2]
		return fmt.Sprintf("tools-%s", toolSuffix)
	}

	// Fallback
	if len(parts) > 0 {
		toolSuffix := parts[len(parts)-1]
		if toolSuffix != "" {
			return fmt.Sprintf("tools-%s", toolSuffix)
		}
	}

	// Final fallback
	return "tools-unknown"
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
