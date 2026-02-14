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

		case "--version":
			fmt.Printf("b2m version %s\n", model.AppConfig.ToolVersion)
			os.Exit(0)

		case "--generate-hash":
			// Common Dependencies check
			if err := checkDependencies(); err != nil {
				fmt.Printf("Error: %v\n", err)
				os.Exit(1)
			}

			// Warning and Confirmation
			fmt.Println("\nWARNING: This operation regenerates all metadata from local files.")
			fmt.Println("Ensure your local databases are synced with remote to avoid data loss.")
			fmt.Println("This should ONLY be done when changing hashing algorithms or recovering from corruption.")
			fmt.Print("\nAre you sure you want to proceed? (y/N): ")

			var confirmation string
			fmt.Scanln(&confirmation)
			if confirmation != "y" && confirmation != "Y" {
				fmt.Println("Operation cancelled.")
				os.Exit(0)
			}

			// Clean up .b2m before generating metadata
			if err := core.CleanupLocalMetadata(); err != nil {
				fmt.Printf("Error: failed to cleanup metadata: %v\n", err)
				core.LogError("Generate-Hash: Failed to cleanup metadata: %v", err)
				os.Exit(1)
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
				fmt.Printf("Error: failed to cleanup metadata: %v\n", err)
				core.LogError("Reset: Failed to cleanup metadata: %v", err)
				os.Exit(1)
			}

			// Explicitly clear hash cache
			core.ClearHashCache()

			Cleanup()
			fmt.Println("Reset complete. Please restart the application.")
			os.Exit(0)

		case "migrations":
			if len(os.Args) > 3 && os.Args[2] == "create" {
				phrase := os.Args[3]
				// Config is already initialized by InitSystem
				if err := core.CreateMigration(phrase); err != nil {
					fmt.Fprintf(os.Stderr, "Error creating migration: %v\n", err)
					os.Exit(1)
				}
				os.Exit(0)
			}
			// If arguments are missing or incorrect
			fmt.Println("Usage: b2m migrations create <phrase>")
			os.Exit(1)

		default:
			fmt.Printf("Unknown command: %s\n", command)
			printUsage()
			os.Exit(1)
		}
	}

	// Setup cancellation handling
	sigHandler := core.NewSignalHandler()

	// Startup checks for TUI
	if err := checkDependencies(); err != nil {
		core.LogError("Startup Error: %v", err)
		fmt.Printf("Startup Error: %v\n", err)
		os.Exit(1)
	}

	if err := core.BootstrapSystem(sigHandler.Context()); err != nil {
		core.LogError("Startup Warning: %v", err)
	}

	return sigHandler
}
func printUsage() {
	fmt.Println("b2-manager - Backblaze B2 Database Manager")
	fmt.Println("\nUsage:")
	fmt.Println("  b2-manager [command]")
	fmt.Println("\nCommands:")
	fmt.Println("  --help            Show this help message")
	fmt.Println("  --version         Show version information")
	fmt.Println("  --generate-hash   Generate new hash and create metadata in remote")
	fmt.Println("  --reset           Remove local metadata caches and start fresh UI session")
	fmt.Println("\nIf no command is provided, the TUI application starts normally.")
}
