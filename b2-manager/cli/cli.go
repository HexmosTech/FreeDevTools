package cli

import (
	"context"
	"encoding/json"
	"fmt"
	"os"
	"strings"

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
		Flags: []cli.Flag{
			&cli.BoolFlag{
				Name:  "json",
				Usage: "Output command results in JSON format",
			},
		},
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
					if err := CreateChangeset(phrase); err != nil {
						return cli.Exit(fmt.Sprintf("Error creating changeset: %v", err), 1)
					}
					return nil
				},
			},
			{
				Name:     "exe-changeset",
				Category: "User Commands",
				Usage:    "Execute a given changeset script",
				Action: func(cCtx *cli.Context) error {
					if cCtx.NArg() == 0 {
						return cli.Exit("Usage: b2m exe-changeset <script_name>", 1)
					}
					scriptName := cCtx.Args().First()
					if err := ExecuteChangeset(scriptName); err != nil {
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
					useJSON := cCtx.Bool("json")
					statusStr, err := RunCLIStatus(dbName, useJSON)
					if err != nil {
						return cli.Exit("", 1) // don't log generic error to Python script output
					}
					fmt.Println(statusStr)
					return nil
				},
			},
			{
				Name:     "copy",
				Category: "Changeset Commands",
				Usage:    "Copy database files between directories",
				Action: func(cCtx *cli.Context) error {
					if cCtx.NArg() < 4 {
						return cli.Exit("Usage: b2m copy <src_name> <dst> <file_type> <script_name>", 1)
					}
					srcName := cCtx.Args().Get(0)
					dst := cCtx.Args().Get(1)
					fileType := cCtx.Args().Get(2)
					scriptName := cCtx.Args().Get(3)
					config.UpdateForScript(scriptName)

					if err := RunCLICopy(srcName, dst, fileType, scriptName); err != nil {
						return cli.Exit(fmt.Sprintf("Error in copy: %v", err), 1)
					}
					useJSON := cCtx.Bool("json")
					if useJSON {
						fmt.Println(`{"status":"success","action":"copy"}`)
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
						return cli.Exit("Usage: b2m upload <db_name> [script_name]", 1)
					}
					dbName := cCtx.Args().First()
					if cCtx.NArg() > 1 {
						scriptName := cCtx.Args().Get(1)
						config.UpdateForScript(scriptName)
					}
					if err := RunCLIUpload(dbName); err != nil {
						return cli.Exit(fmt.Sprintf("Error uploading database: %v", err), 1)
					}
					useJSON := cCtx.Bool("json")
					if useJSON {
						fmt.Println(`{"status":"success","action":"upload"}`)
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
						return cli.Exit("Usage: b2m download <db_name> [script_name]", 1)
					}
					dbName := cCtx.Args().First()
					if cCtx.NArg() > 1 {
						scriptName := cCtx.Args().Get(1)
						config.UpdateForScript(scriptName)
					}
					if err := RunCLIDownload(dbName); err != nil {
						return cli.Exit(fmt.Sprintf("Error downloading database: %v", err), 1)
					}
					useJSON := cCtx.Bool("json")
					if useJSON {
						fmt.Println(`{"status":"success","action":"download"}`)
					}
					return nil
				},
			},
			{
				Name:     "download-latest-db",
				Category: "Changeset Commands",
				Usage:    "Check status and loop to download latest version of database (for scripting)",
				Action: func(cCtx *cli.Context) error {
					if cCtx.NArg() == 0 {
						return cli.Exit("Usage: b2m download-latest-db <db_name> [script_name]", 1)
					}
					dbName := cCtx.Args().First()
					if cCtx.NArg() > 1 {
						scriptName := cCtx.Args().Get(1)
						config.UpdateForScript(scriptName)
					}
					if err := RunCLIDownloadLatestDB(dbName); err != nil {
						return cli.Exit(fmt.Sprintf("Error looping to download latest database: %v", err), 1)
					}
					useJSON := cCtx.Bool("json")
					if useJSON {
						fmt.Println(`{"status":"success","action":"download-latest-db"}`)
					}
					return nil
				},
			},
			{
				Name:     "fetch-db-toml",
				Category: "Changeset Commands",
				Usage:    "Fetch db.toml from B2 (for scripting)",
				Action: func(cCtx *cli.Context) error {
					if err := RunCLIFetchDBToml(); err != nil {
						return cli.Exit(fmt.Sprintf("Error fetching db.toml: %v", err), 1)
					}
					useJSON := cCtx.Bool("json")
					if useJSON {
						fmt.Println(`{"status":"success","action":"fetch-db-toml"}`)
					}
					return nil
				},
			},
			{
				Name:     "bump-db-version",
				Category: "Changeset Commands",
				Usage:    "Increment DB version and update db.toml (for scripting)",
				Action: func(cCtx *cli.Context) error {
					if cCtx.NArg() == 0 {
						return cli.Exit("Usage: b2m bump-db-version <db_name> [script_name]", 1)
					}
					dbName := cCtx.Args().First()
					if cCtx.NArg() > 1 {
						scriptName := cCtx.Args().Get(1)
						config.UpdateForScript(scriptName)
					}

					newDBName, err := RunCLIBumpDBVersion(dbName)
					if err != nil {
						return cli.Exit(fmt.Sprintf("Error bumping db version: %v", err), 1)
					}

					useJSON := cCtx.Bool("json")
					if useJSON {
						resp := struct {
							BumpedDBName string `json:"bumped_db_name"`
							BaseDBName   string `json:"base_db_name"`
						}{newDBName, dbName}
						b, _ := json.MarshalIndent(resp, "", "  ")
						fmt.Println(string(b))
					} else {
						fmt.Println(newDBName)
					}
					return nil
				},
			},
			{
				Name:     "handle-query",
				Category: "Changeset Commands",
				Usage:    "Execute a specific SQL file against a target database (for scripting)",
				Action: func(cCtx *cli.Context) error {
					if cCtx.NArg() < 2 {
						return cli.Exit("Usage: b2m handle-query <sql_name> <db_name> [script_name]", 1)
					}
					sqlName := cCtx.Args().Get(0)
					dbName := cCtx.Args().Get(1)
					if cCtx.NArg() > 2 {
						scriptName := cCtx.Args().Get(2)
						config.UpdateForScript(scriptName)
					}

					if err := RunCLIHandleQuery(sqlName, dbName); err != nil {
						return cli.Exit(fmt.Sprintf("Error executing queries: %v", err), 1)
					}
					useJSON := cCtx.Bool("json")
					if useJSON {
						fmt.Println(`{"status":"success","action":"handle-query"}`)
					}
					return nil
				},
			},
			{
				Name:     "get-version",
				Category: "Changeset Commands",
				Usage:    "Get the local DB filename from db.toml using its short name (for scripting)",
				Action: func(cCtx *cli.Context) error {
					if cCtx.NArg() == 0 {
						return cli.Exit("Usage: b2m get-version <short_name> [script_name]", 1)
					}
					shortName := cCtx.Args().First()
					if cCtx.NArg() > 1 {
						scriptName := cCtx.Args().Get(1)
						config.UpdateForScript(scriptName)
					}
					useJSON := cCtx.Bool("json")
					if err := RunCLIGetVersion(shortName, useJSON); err != nil {
						return cli.Exit(fmt.Sprintf("Error getting version: %v", err), 1)
					}
					return nil
				},
			},
			{
				Name:     "get-latest",
				Category: "Changeset Commands",
				Usage:    "Get the latest version of a database (for scripting)",
				Action: func(cCtx *cli.Context) error {
					if cCtx.NArg() == 0 {
						return cli.Exit("Usage: b2m get-latest <db_name> [script_name]", 1)
					}
					dbName := cCtx.Args().First()
					if cCtx.NArg() > 1 {
						scriptName := cCtx.Args().Get(1)
						config.UpdateForScript(scriptName)
					}
					useJSON := cCtx.Bool("json")
					if err := RunCLIGetLatest(dbName, useJSON); err != nil {
						return cli.Exit(fmt.Sprintf("Error getting latest DB version: %v", err), 1)
					}
					return nil
				},
			},
			{
				Name:     "notify",
				Category: "Changeset Commands",
				Usage:    "Send a custom notification to Discord (for scripting)",
				Action: func(cCtx *cli.Context) error {
					if cCtx.NArg() == 0 {
						return cli.Exit("Usage: b2m notify <message>", 1)
					}
					// Join all arguments as the message
					msg := strings.Join(cCtx.Args().Slice(), " ")
					if err := RunCLINotify(msg); err != nil {
						return cli.Exit(fmt.Sprintf("Error sending notification: %v", err), 1)
					}
					useJSON := cCtx.Bool("json")
					if useJSON {
						fmt.Println(`{"status":"success","action":"notify"}`)
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
