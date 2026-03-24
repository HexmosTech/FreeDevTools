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

// exitError helper formats error output depending on --json flag
func exitError(cCtx *cli.Context, msg string, code int) error {
	if cCtx.Bool("json") {
		msgEscaped, _ := json.Marshal(msg)
		fmt.Fprintf(cCtx.App.Writer, `{"status":"failed","msg":%s}`+"\n", string(msgEscaped))
		return cli.Exit("", code)
	}
	return cli.Exit(msg, code)
}

// NewApp creates the urfave/cli application instance
func NewApp() *cli.App {
	return &cli.App{
		Name:    "b2m",
		Usage:   "Backblaze B2 Database Manager",
		Version: model.AppConfig.ToolVersion,
		Flags: []cli.Flag{
			&cli.BoolFlag{
				Name:  "json",
				Usage: "Output command results in JSON format",
			},
		},
		ExitErrHandler: func(cCtx *cli.Context, err error) {
			// Disable default os.Exit behavior to allow tests to capture errors
		},
		Commands: []*cli.Command{
			{
				Name:     "generate-hash",
				Category: "User Commands",
				Usage:    "Generate new hash and create metadata in remote",
				Action: func(cCtx *cli.Context) error {
					if err := config.CheckDependencies(); err != nil {
						return exitError(cCtx, fmt.Sprintf("Error: %v", err), 1)
					}

					fmt.Println("\nWARNING: This operation regenerates all metadata from local files.")
					fmt.Println("Ensure your local databases are synced with remote to avoid data loss.")
					fmt.Println("This should ONLY be done when changing hashing algorithms or recovering from corruption.")
					fmt.Print("\nAre you sure you want to proceed? (y/N): ")

					// Interaction like Scanln is still needed if not in JSON mode,
					// but let's at least log the prompt.
					var confirmation string
					fmt.Scanln(&confirmation)
					if confirmation != "y" && confirmation != "Y" {
						fmt.Println("Operation cancelled.")
						return nil
					}

					if err := core.CleanupLocalMetadata(); err != nil {
						core.LogError("Generate-Hash: Failed to cleanup metadata: %v", err)
						return exitError(cCtx, fmt.Sprintf("Error: failed to cleanup metadata: %v", err), 1)
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
					core.LogInfo("Resetting system state...")
					if err := core.CleanupLocalMetadata(); err != nil {
						core.LogError("Reset: Failed to cleanup metadata: %v", err)
						return exitError(cCtx, fmt.Sprintf("Error: failed to cleanup metadata: %v", err), 1)
					}
					core.ClearHashCache()
					config.Cleanup()
					core.LogInfo("Reset complete. Please restart the application.")
					return nil
				},
			},
			{
				Name:     "unlock",
				Category: "User Commands",
				Usage:    "Force unlock a database",
				Action: func(cCtx *cli.Context) error {
					if cCtx.NArg() == 0 {
						return exitError(cCtx, "Usage: b2m unlock <db_name>", 1)
					}
					dbName := cCtx.Args().First()
					if err := core.SanitizeDBName(dbName); err != nil {
						return exitError(cCtx, fmt.Sprintf("Error: Invalid database name: %v", err), 1)
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
						return exitError(cCtx, fmt.Sprintf("Error unlocking database: %v", err), 1)
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
						return exitError(cCtx, "Usage: b2m create-changeset <phrase>", 1)
					}
					phrase := cCtx.Args().First()
					if err := CreateChangeset(phrase); err != nil {
						return exitError(cCtx, fmt.Sprintf("Error creating changeset: %v", err), 1)
					}
					return nil
				},
			},
			{
				Name:      "exe-changeset",
				Category:  "User Commands",
				Usage:     "Execute a given changeset script",
				ArgsUsage: "<changeset_dir> [cron]",
				Action: func(cCtx *cli.Context) error {
					if cCtx.NArg() == 0 {
						return exitError(cCtx, "Usage: b2m exe-changeset <changeset_dir> [cron]", 1)
					}
					changesetDir := cCtx.Args().First()
					// cronMode: pass "cron" as a second positional arg to enable cron behaviour.
					// In cron mode, Discord alerts are sent only on failure (no start/success noise).
					cronMode := cCtx.NArg() > 1 && cCtx.Args().Get(1) == "cron"
					if err := ExecuteChangeset(changesetDir, cronMode); err != nil {
						return exitError(cCtx, fmt.Sprintf("Error executing changeset: %v", err), 1)
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
						return exitError(cCtx, "Usage: b2m status <db_name> [changeset_dir]", 1)
					}
					dbName := cCtx.Args().First()
					if cCtx.NArg() > 1 {
						changesetDir := cCtx.Args().Get(1)
						if strings.HasPrefix(changesetDir, "changeset_dir=") {
							changesetDir = strings.TrimPrefix(changesetDir, "changeset_dir=")
						}
						config.UpdateForScript(changesetDir)
					}
					useJSON := cCtx.Bool("json")
					statusStr, err := RunCLIStatus(dbName, useJSON)
					if err != nil {
						return exitError(cCtx, err.Error(), 1)
					}
					fmt.Fprintln(cCtx.App.Writer, statusStr)
					return nil
				},
			},
			{
				Name:     "copy",
				Category: "Changeset Commands",
				Usage:    "Copy database files between directories",
				Action: func(cCtx *cli.Context) error {
					if cCtx.NArg() < 4 {
						return exitError(cCtx, "Usage: b2m copy <src_name> <dst> <file_type> [changeset_dir]", 1)
					}
					srcName := cCtx.Args().Get(0)
					dst := cCtx.Args().Get(1)
					fileType := cCtx.Args().Get(2)

					changesetDir := ""
					if cCtx.NArg() > 3 {
						changesetDir = cCtx.Args().Get(3)
						if strings.HasPrefix(changesetDir, "changeset_dir=") {
							changesetDir = strings.TrimPrefix(changesetDir, "changeset_dir=")
						}
					}

					if err := RunCLICopy(srcName, dst, fileType, changesetDir, cCtx.Bool("json")); err != nil {
						return exitError(cCtx, fmt.Sprintf("Error in copy: %v", err), 1)
					}
					useJSON := cCtx.Bool("json")
					if useJSON {
						fmt.Fprintln(cCtx.App.Writer, `{"status":"success","action":"copy"}`)
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
						return exitError(cCtx, "Usage: b2m notify <message>", 1)
					}
					// Join all arguments as the message
					msg := strings.Join(cCtx.Args().Slice(), " ")
					if err := RunCLINotify(msg); err != nil {
						return exitError(cCtx, fmt.Sprintf("Error sending notification: %v", err), 1)
					}
					useJSON := cCtx.Bool("json")
					if useJSON {
						fmt.Fprintln(cCtx.App.Writer, `{"status":"success","action":"notify"}`)
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
						return exitError(cCtx, "Usage: b2m upload <db_name> [changeset_dir]", 1)
					}
					dbName := cCtx.Args().First()
					if cCtx.NArg() > 1 {
						changesetDir := cCtx.Args().Get(1)
						if strings.HasPrefix(changesetDir, "changeset_dir=") {
							changesetDir = strings.TrimPrefix(changesetDir, "changeset_dir=")
						}
						config.UpdateForScript(changesetDir)
					}

					if err := RunCLIUpload(dbName, cCtx.Bool("json")); err != nil {
						return exitError(cCtx, fmt.Sprintf("Error uploading database: %v", err), 1)
					}
					useJSON := cCtx.Bool("json")
					if useJSON {
						fmt.Fprintln(cCtx.App.Writer, `{"status":"success","action":"upload"}`)
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
						return exitError(cCtx, "Usage: b2m download <db_name> [changeset_dir]", 1)
					}
					dbName := cCtx.Args().First()
					if cCtx.NArg() > 1 {
						changesetDir := cCtx.Args().Get(1)
						if strings.HasPrefix(changesetDir, "changeset_dir=") {
							changesetDir = strings.TrimPrefix(changesetDir, "changeset_dir=")
						}
						config.UpdateForScript(changesetDir)
					}
					if err := RunCLIDownload(dbName, cCtx.Bool("json")); err != nil {
						return exitError(cCtx, fmt.Sprintf("Error downloading database: %v", err), 1)
					}
					useJSON := cCtx.Bool("json")
					if useJSON {
						fmt.Fprintln(cCtx.App.Writer, `{"status":"success","action":"download"}`)
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
						return exitError(cCtx, "Usage: b2m download-latest-db <short_name> [changeset_dir]", 1)
					}
					shortName := cCtx.Args().First()
					changesetScript := ""
					if cCtx.NArg() > 1 {
						changesetScript = cCtx.Args().Get(1)
						if strings.HasPrefix(changesetScript, "changeset_dir=") {
							changesetScript = strings.TrimPrefix(changesetScript, "changeset_dir=")
						}
					}
					useJSON := cCtx.Bool("json")

					dbName, dbPath, err := RunCLIDownloadLatestDB(shortName, changesetScript, useJSON)
					if err != nil {
						return exitError(cCtx, fmt.Sprintf("Error finding and downloading latest database: %v", err), 1)
					}

					if useJSON {
						resp := struct {
							Status string `json:"status"`
							Action string `json:"action"`
							DBName string `json:"db_name"`
							DBPath string `json:"db_path"`
						}{"success", "download-latest-db", dbName, dbPath}
						b, _ := json.MarshalIndent(resp, "", "  ")
						fmt.Fprintln(cCtx.App.Writer, string(b))
					} else {
						fmt.Fprintln(cCtx.App.Writer, dbName)
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
						return exitError(cCtx, "Usage: b2m bump-db-version <db_name> [changeset_dir]", 1)
					}
					dbName := cCtx.Args().First()
					if cCtx.NArg() > 1 {
						changesetDir := cCtx.Args().Get(1)
						if strings.HasPrefix(changesetDir, "changeset_dir=") {
							changesetDir = strings.TrimPrefix(changesetDir, "changeset_dir=")
						}
						config.UpdateForScript(changesetDir)
					}

					newDBName, err := RunCLIBumpDBVersion(dbName)
					if err != nil {
						return exitError(cCtx, fmt.Sprintf("Error bumping db version: %v", err), 1)
					}

					useJSON := cCtx.Bool("json")
					if useJSON {
						resp := struct {
							Status       string `json:"status"`
							BumpedDBName string `json:"bumped_db_name"`
							BaseDBName   string `json:"base_db_name"`
							Msg          string `json:"msg"`
						}{"success", newDBName, dbName, "Push this db.toml to remote branch"}
						b, _ := json.MarshalIndent(resp, "", "  ")
						fmt.Fprintln(cCtx.App.Writer, string(b))
					} else {
						fmt.Fprintln(cCtx.App.Writer, newDBName)
					}
					return nil
				},
			},
			{
				Name:     "bump-and-upload",
				Category: "Changeset Commands",
				Usage:    "Increment DB version, update db.toml, and upload to B2 (for scripting)",
				Action: func(cCtx *cli.Context) error {
					if cCtx.NArg() == 0 {
						return exitError(cCtx, "Usage: b2m bump-and-upload <db_name> [changeset_dir]", 1)
					}
					dbName := cCtx.Args().First()
					if cCtx.NArg() > 1 {
						changesetDir := cCtx.Args().Get(1)
						if strings.HasPrefix(changesetDir, "changeset_dir=") {
							changesetDir = strings.TrimPrefix(changesetDir, "changeset_dir=")
						}
						config.UpdateForScript(changesetDir)
					}

					newDBName, err := RunCLIBumpAndUpload(dbName, cCtx.Bool("json"))
					if err != nil {
						return exitError(cCtx, fmt.Sprintf("Error in bump-and-upload: %v", err), 1)
					}

					useJSON := cCtx.Bool("json")
					if useJSON {
						resp := struct {
							BumpedDBName string `json:"bumped_db_name"`
							BaseDBName   string `json:"base_db_name"`
							Status       string `json:"status"`
						}{newDBName, dbName, "success"}
						b, _ := json.MarshalIndent(resp, "", "  ")
						fmt.Fprintln(cCtx.App.Writer, string(b))
					} else {
						fmt.Fprintln(cCtx.App.Writer, newDBName)
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
						return exitError(cCtx, "Usage: b2m handle-query <sql_name> <db_name> [changeset_dir]", 1)
					}
					sqlName := cCtx.Args().Get(0)
					dbName := cCtx.Args().Get(1)
					if cCtx.NArg() > 2 {
						changesetDir := cCtx.Args().Get(2)
						if strings.HasPrefix(changesetDir, "changeset_dir=") {
							changesetDir = strings.TrimPrefix(changesetDir, "changeset_dir=")
						}
						config.UpdateForScript(changesetDir)
					}

					if err := RunCLIHandleQuery(sqlName, dbName, cCtx.Bool("json")); err != nil {
						return exitError(cCtx, fmt.Sprintf("Error executing queries: %v", err), 1)
					}
					useJSON := cCtx.Bool("json")
					if useJSON {
						fmt.Fprintln(cCtx.App.Writer, `{"status":"success","action":"handle-query"}`)
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
						return exitError(cCtx, "Usage: b2m get-version <short_name> [changeset_dir]", 1)
					}
					shortName := cCtx.Args().First()
					if cCtx.NArg() > 1 {
						changesetDir := cCtx.Args().Get(1)
						if strings.HasPrefix(changesetDir, "changeset_dir=") {
							changesetDir = strings.TrimPrefix(changesetDir, "changeset_dir=")
						}
						config.UpdateForScript(changesetDir)
					}
					useJSON := cCtx.Bool("json")
					res, err := RunCLIGetVersion(shortName, useJSON)
					if err != nil {
						return exitError(cCtx, fmt.Sprintf("Error getting version: %v", err), 1)
					}
					fmt.Fprintln(cCtx.App.Writer, res)
					return nil
				},
			},
			{
				Name:     "get-latest",
				Category: "Changeset Commands",
				Usage:    "Get the latest version of a database (for scripting)",
				Action: func(cCtx *cli.Context) error {
					if cCtx.NArg() == 0 {
						return exitError(cCtx, "Usage: b2m get-latest <db_name> [changeset_dir]", 1)
					}
					dbName := cCtx.Args().First()
					if cCtx.NArg() > 1 {
						changesetDir := cCtx.Args().Get(1)
						if strings.HasPrefix(changesetDir, "changeset_dir=") {
							changesetDir = strings.TrimPrefix(changesetDir, "changeset_dir=")
						}
						config.UpdateForScript(changesetDir)
					}
					useJSON := cCtx.Bool("json")
					res, err := RunCLIGetLatest(dbName, useJSON)
					if err != nil {
						return exitError(cCtx, fmt.Sprintf("Error getting latest DB version: %v", err), 1)
					}
					fmt.Fprintln(cCtx.App.Writer, res)
					return nil
				},
			},
		},
	}
}

// HandleCLI processes command line arguments using urfave/cli.
// If a command is handled, it will exit the program.
func HandleCLI() {
	if len(os.Args) <= 1 {
		return // Let the main func proceed to TUI
	}

	app := NewApp()

	if err := app.Run(os.Args); err != nil {
		// Use a temporary context to check for --json flag
		// This is a bit tricky with urfave/cli v2 as the flag might not be parsed if Run failed early
		// But for most command errors, we want JSON if --json was provided.
		useJSON := false
		for _, arg := range os.Args {
			if arg == "--json" {
				useJSON = true
				break
			}
		}

		if useJSON {
			msgEscaped, _ := json.Marshal(err.Error())
			fmt.Fprintf(os.Stdout, `{"status":"failed","msg":%s}`+"\n", string(msgEscaped))
		} else {
			fmt.Fprintf(os.Stderr, "Error: %v\n", err)
		}
		os.Exit(1)
	}

	// Because app.Run succeeded (or printed help/version), and it's a CLI command,
	// we exit so we don't drop down into the TUI.
	os.Exit(0)
}
