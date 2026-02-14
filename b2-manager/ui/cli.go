package ui

import (
	"context"
	"fmt"
	"os"

	"b2m/config"
	"b2m/core"
	"b2m/model"
)

// HandleCLI processes command line arguments.
// If a command is handled, it may exit the program.
func HandleCLI() {
	if len(os.Args) > 1 {
		command := os.Args[1]

		switch command {
		case "--help":
			printUsage()
			os.Exit(0)

		case "--version":
			fmt.Printf("b2m version %s\n", model.AppConfig.ToolVersion)
			os.Exit(0)

		case "--generate-hash":
			// Common Dependencies check
			if err := config.CheckDependencies(); err != nil {
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
			config.Cleanup()
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

			config.Cleanup()
			fmt.Println("Reset complete. Please restart the application.")
			os.Exit(0)

		case "migrations":
			if len(os.Args) < 3 {
				fmt.Println("Usage: b2m migrations <command> [args]")
				fmt.Println("Available commands: create")
				os.Exit(1)
			}

			subCmd := os.Args[2]
			switch subCmd {
			case "create":
				if len(os.Args) < 4 {
					fmt.Println("Usage: b2m migrations create <phrase>")
					fmt.Println("Error: missing required argument <phrase>")
					os.Exit(1)
				}
				phrase := os.Args[3]
				if phrase == "" {
					fmt.Println("Error: phrase cannot be empty")
					os.Exit(1)
				}
				// Config is already initialized by InitSystem
				if err := core.CreateMigration(phrase); err != nil {
					fmt.Fprintf(os.Stderr, "Error creating migration: %v\n", err)
					os.Exit(1)
				}
				os.Exit(0)
			default:
				fmt.Printf("Unknown migration command: %s\n", subCmd)
				fmt.Println("Usage: b2m migrations create <phrase>")
				os.Exit(1)
			}

		case "unlock":
			if len(os.Args) < 3 {
				fmt.Println("Usage: b2m unlock <db_name>")
				os.Exit(1)
			}
			dbName := os.Args[2]
			if err := core.SanitizeDBName(dbName); err != nil {
				fmt.Printf("Error: Invalid database name: %v\n", err)
				os.Exit(1)
			}

			// Force unlock warning
			fmt.Printf("WARNING: You are about to FORCE UNLOCK database '%s'.\n", dbName)
			fmt.Println("This should ONLY be done if the lock is stale due to a crash or network issue.")
			fmt.Println("If another user is actively writing to this database, forcing an unlock may cause DATA CORRUPTION.")
			fmt.Print("Are you sure you want to proceed? (y/N): ")

			var confirmation string
			fmt.Scanln(&confirmation)
			if confirmation != "y" && confirmation != "Y" {
				fmt.Println("Operation cancelled.")
				os.Exit(0)
			}

			// Perform unlock (using force=true as CLI unlock implies admin override)
			// Context needed
			ctx := context.Background()
			if err := core.UnlockDatabase(ctx, dbName, "CLI-User", true); err != nil {
				fmt.Printf("Error unlocking database: %v\n", err)
				os.Exit(1)
			}
			fmt.Println("Database unlocked successfully.")
			os.Exit(0)

		default:
			fmt.Printf("Unknown command: %s\n", command)
			printUsage()
			os.Exit(1)
		}
	}
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
	fmt.Println("  migrations create <phrase>  Create a new migration script")
	fmt.Println("  unlock <db_name>            Force unlock a database")
	fmt.Println("\nIf no command is provided, the TUI application starts normally.")
}
