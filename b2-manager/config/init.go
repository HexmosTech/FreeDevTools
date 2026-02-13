package config

import (
	"context"
	"fmt"
	"os"

	"b2m/core"
	"b2m/model"
)

// InitSystem initializes the system, handles CLI commands, and returns the signal handler.
// The caller is responsible for calling Cleanup() when done.
func InitSystem() *core.SignalHandler {
	// Initialize Logger explicit early to capture startup issues
	if err := core.InitLogger(); err != nil {
		fmt.Printf("Warning: Failed to initialize logger: %v\n", err)
	}

	// Initialize Config
	if err := InitializeConfig(); err != nil {
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

	core.LogInfo("Configuration loaded successfully")
	core.LogInfo("RootBucket: %s", model.AppConfig.RootBucket)
	core.LogInfo("DiscordWebhookURL: %s", model.AppConfig.DiscordWebhookURL)

	// CLI Command Handling
	if len(os.Args) > 1 {
		command := os.Args[1]

		switch command {
		case "--help":
			printUsage()
			// We exit here because help is a standalone command
			os.Exit(0)

		case "--generate-hash":
			// Dependencies check
			if err := core.CheckB3SumAvailability(); err != nil {
				fmt.Printf("Error: %v\n", err)
				os.Exit(1)
			}
			if err := core.CheckRclone(); err != nil {
				fmt.Printf("Error: %v\n", err)
				os.Exit(1)
			}

			// Clean up .b2m before generating metadata
			if err := core.CleanupLocalMetadata(); err != nil {
				fmt.Printf("Warning: %v\n", err)
			}

			// Explicitly clear hash cache
			core.ClearHashCache()

			// Bootstrap system minimal
			// Use background context for CLI tool mode
			cliCtx := context.Background()
			if err := core.BootstrapSystem(cliCtx); err != nil {
				core.LogError("Startup Warning: %v", err)
			}
			core.HandleBatchMetadataGeneration()
			Cleanup()
			os.Exit(0)

		case "--reset":
			fmt.Println("Resetting system state...")
			// Clean up .b2m before starting normal execution
			if err := core.CleanupLocalMetadata(); err != nil {
				fmt.Printf("Warning: failed to cleanup metadata: %v\n", err)
				core.LogError("Reset: Failed to cleanup metadata: %v", err)
			}

			// Explicitly clear hash cache
			core.ClearHashCache()

			Cleanup()
			fmt.Println("Reset complete. Please restart the application.")
			os.Exit(0)

		default:
			fmt.Printf("Unknown command: %s\n", command)
			printUsage()
			os.Exit(1)
		}
	}

	// Setup cancellation handling
	sigHandler := core.NewSignalHandler()

	// Startup checks
	if err := core.CheckB3SumAvailability(); err != nil {
		fmt.Printf("Error: %v\n", err)
		core.LogError("Error: %v", err)
		os.Exit(1)
	}
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

	return sigHandler
}

// Cleanup saves the hash cache and closes the logger.
// This should be called (usually deferred) by the main function.
func Cleanup() {
	if err := core.SaveHashCache(); err != nil {
		core.LogError("Failed to save hash cache: %v", err)
	}
	core.CloseLogger()
}

func printUsage() {
	fmt.Println("b2-manager - Backblaze B2 Database Manager")
	fmt.Println("\nUsage:")
	fmt.Println("  b2-manager [command]")
	fmt.Println("\nCommands:")
	fmt.Println("  --help            Show this help message")
	fmt.Println("  --generate-hash   Generate new hash and create metadata in remote")
	fmt.Println("  --reset           Remove local metadata caches and start fresh UI session")
	fmt.Println("\nIf no command is provided, the TUI application starts normally.")
}
