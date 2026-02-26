package ui

import (
	"context"
	"fmt"
	"os"

	"github.com/urfave/cli/v2"

	"b2m/config"
	"b2m/core"
	"b2m/model"
)

// HandleCLI processes command line arguments using urfave/cli.
// If a command is handled, it may exit the program.
func HandleCLI() {
	if len(os.Args) <= 1 {
		return // Let the main func proceed to TUI
	}

	app := &cli.App{
		Name:    "b2m",
		Usage:   "Backblaze B2 Database Manager",
		Version: model.AppConfig.ToolVersion,
		Commands: []*cli.Command{
			{
				Name:     "generate-hash",
				Category: "User Commands",
				Usage:    "Generate new hash and create metadata in remote",
				Action: func(cCtx *cli.Context) error {
					if err := config.CheckDependencies(); err != nil {
						return cli.Exit(fmt.Sprintf("Error: %v", err), 1)
					}

					fmt.Println("\nWARNING: This operation regenerates all metadata from local files.")
					fmt.Println("Ensure your local databases are synced with remote to avoid data loss.")
					fmt.Println("This should ONLY be done when changing hashing algorithms or recovering from corruption.")
					fmt.Print("\nAre you sure you want to proceed? (y/N): ")

					var confirmation string
					fmt.Scanln(&confirmation)
					if confirmation != "y" && confirmation != "Y" {
						fmt.Println("Operation cancelled.")
						return nil
					}

					if err := core.CleanupLocalMetadata(); err != nil {
						core.LogError("Generate-Hash: Failed to cleanup metadata: %v", err)
						return cli.Exit(fmt.Sprintf("Error: failed to cleanup metadata: %v", err), 1)
					}
					core.ClearHashCache()

					cliCtx := context.Background()
					if err := core.BootstrapSystem(cliCtx); err != nil {
						core.LogError("Startup Warning: %v", err)
					}
					core.HandleBatchMetadataGeneration()
					config.Cleanup()
					return nil
				},
			},
			{
				Name:     "reset",
				Category: "User Commands",
				Usage:    "Remove local metadata caches and start fresh UI session",
				Action: func(cCtx *cli.Context) error {
					fmt.Println("Resetting system state...")
					if err := core.CleanupLocalMetadata(); err != nil {
						core.LogError("Reset: Failed to cleanup metadata: %v", err)
						return cli.Exit(fmt.Sprintf("Error: failed to cleanup metadata: %v", err), 1)
					}
					core.ClearHashCache()
					config.Cleanup()
					fmt.Println("Reset complete. Please restart the application.")
					return nil
				},
			},
			{
				Name:     "unlock",
				Category: "User Commands",
				Usage:    "Force unlock a database",
				Action: func(cCtx *cli.Context) error {
					if cCtx.NArg() == 0 {
						return cli.Exit("Usage: b2m unlock <db_name>", 1)
					}
					dbName := cCtx.Args().First()
					if err := core.SanitizeDBName(dbName); err != nil {
						return cli.Exit(fmt.Sprintf("Error: Invalid database name: %v", err), 1)
					}

					fmt.Printf("WARNING: You are about to FORCE UNLOCK database '%s'.\n", dbName)
					fmt.Println("This should ONLY be done if the lock is stale due to a crash or network issue.")
					fmt.Println("If another user is actively writing to this database, forcing an unlock may cause DATA CORRUPTION.")
					fmt.Print("Are you sure you want to proceed? (y/N): ")

					var confirmation string
					fmt.Scanln(&confirmation)
					if confirmation != "y" && confirmation != "Y" {
						fmt.Println("Operation cancelled.")
						return nil
					}

					ctx := context.Background()
					if err := core.UnlockDatabase(ctx, dbName, "CLI-User", true); err != nil {
						return cli.Exit(fmt.Sprintf("Error unlocking database: %v", err), 1)
					}
					fmt.Println("Database unlocked successfully.")
					return nil
				},
			},
			{
				Name:     "create-changeset",
				Category: "User Commands",
				Usage:    "Create a new changeset python script",
				Action: func(cCtx *cli.Context) error {
					if cCtx.NArg() == 0 {
						return cli.Exit("Usage: b2m create-changeset <phrase>", 1)
					}
					phrase := cCtx.Args().First()
					if err := core.CreateChangeset(phrase); err != nil {
						return cli.Exit(fmt.Sprintf("Error creating changeset: %v", err), 1)
					}
					return nil
				},
			},
			{
				Name:     "execute-changeset",
				Category: "User Commands",
				Usage:    "Execute a given changeset script",
				Action: func(cCtx *cli.Context) error {
					if cCtx.NArg() == 0 {
						return cli.Exit("Usage: b2m execute-changeset <script_name>", 1)
					}
					scriptName := cCtx.Args().First()
					if err := core.ExecuteChangeset(scriptName); err != nil {
						return cli.Exit(fmt.Sprintf("Error executing changeset: %v", err), 1)
					}
					return nil
				},
			},
			{
				Name:     "status",
				Category: "Changeset Commands",
				Usage:    "Check status of a database (for scripting)",
				Action: func(cCtx *cli.Context) error {
					if cCtx.NArg() == 0 {
						return cli.Exit("Usage: b2m status <db_name>", 1)
					}
					dbName := cCtx.Args().First()
					if err := core.RunCLIStatus(dbName); err != nil {
						return cli.Exit("", 1) // don't log generic error to Python script output
					}
					return nil
				},
			},
			{
				Name:     "upload",
				Category: "Changeset Commands",
				Usage:    "Upload database directly (for scripting)",
				Action: func(cCtx *cli.Context) error {
					if cCtx.NArg() == 0 {
						return cli.Exit("Usage: b2m upload <db_name>", 1)
					}
					dbName := cCtx.Args().First()
					if err := core.RunCLIUpload(dbName); err != nil {
						return cli.Exit(fmt.Sprintf("Error uploading database: %v", err), 1)
					}
					return nil
				},
			},
			{
				Name:     "download",
				Category: "Changeset Commands",
				Usage:    "Download database directly (for scripting)",
				Action: func(cCtx *cli.Context) error {
					if cCtx.NArg() == 0 {
						return cli.Exit("Usage: b2m download <db_name>", 1)
					}
					dbName := cCtx.Args().First()
					if err := core.RunCLIDownload(dbName); err != nil {
						return cli.Exit(fmt.Sprintf("Error downloading database: %v", err), 1)
					}
					return nil
				},
			},
			{
				Name:     "fetch-db-toml",
				Category: "Changeset Commands",
				Usage:    "Fetch db.toml from B2 (for scripting)",
				Action: func(cCtx *cli.Context) error {
					if err := core.RunCLIFetchDBToml(); err != nil {
						return cli.Exit(fmt.Sprintf("Error fetching db.toml: %v", err), 1)
					}
					return nil
				},
			},
		},
	}

	if err := app.Run(os.Args); err != nil {
		fmt.Fprintf(os.Stderr, "%v\n", err)
		os.Exit(1)
	}

	// Because app.Run succeeded (or printed help/version), and it's a CLI command,
	// we want to exit so we don't drop down into the TUI.
	os.Exit(0)
}
