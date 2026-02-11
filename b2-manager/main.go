package main

import (
	"context"
	"fmt"
	"os"

	"b2m/config"
	"b2m/core"
	"b2m/model"
	"b2m/ui"
)

func main() {
	// Initialize Logger explicit early to capture startup issues
	if err := core.InitLogger(); err != nil {
		fmt.Printf("Warning: Failed to initialize logger: %v\n", err)
	}
	defer core.CloseLogger()

	// Initialize Config
	if err := config.InitializeConfig(); err != nil {
		core.LogError("Failed to load configuration: %v", err)
		fmt.Printf("Error: %v\n", err)
		os.Exit(1)
	}

	// Set version
	model.AppConfig.ToolVersion = "2.0"

	// Load hash cache
	if err := core.LoadHashCache(); err != nil {
		core.LogInfo("Warning: Failed to load hash cache: %v", err)
	}
	defer func() {
		if err := core.SaveHashCache(); err != nil {
			core.LogError("Failed to save hash cache: %v", err)
		}
	}()

	core.LogInfo("Configuration loaded successfully")
	core.LogInfo("RootBucket: %s", model.AppConfig.RootBucket)
	core.LogInfo("DiscordWebhookURL: %s", model.AppConfig.DiscordWebhookURL)

	// Check for metadata generation flag
	if len(os.Args) > 1 && os.Args[1] == "--generate-metadata" {
		// Bootstrap system minimal
		// Use background context for CLI tool mode, or create a handler
		cliCtx := context.Background()
		if err := core.BootstrapSystem(cliCtx); err != nil {
			// fmt.Println("Startup Warning:", err)
			core.LogError("Startup Warning: %v", err)
		}
		core.HandleBatchMetadataGeneration()
		return
	}

	// Setup cancellation handling
	sigHandler := core.NewSignalHandler()

	// Startup checks
	if err := core.CheckRclone(); err != nil {
		// fmt.Println("Warning: rclone not found or error:", err)
		core.LogError("Warning: rclone not found or error: %v", err)
	}
	if !core.CheckRcloneConfig() {
		// fmt.Println("Warning: rclone config not found. Run 'init' or check setup.")
		core.LogError("Warning: rclone config not found. Run 'init' or check setup.")
	}
	if err := core.BootstrapSystem(sigHandler.Context()); err != nil {
		// fmt.Println("Startup Warning:", err)
		core.LogError("Startup Warning: %v", err)
	}

	// Start UI
	ui.RunUI(sigHandler)
}
