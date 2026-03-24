package main

import (
	"os"

	"b2m/cli"
	"b2m/config"
	"b2m/core"
	"b2m/model"
	"b2m/ui"
)

func main() {
	model.AppConfig.ToolVersion = "2.0"
	// Initialize system configuration and signal handling
	sigHandler, err := config.InitSystem()
	if err != nil {
		// InitSystem already logs the error, we just exit here
		os.Exit(1)
	}
	// Ensure proper cleanup of resources on exit
	defer config.Cleanup()

	// Handle CLI commands first. If a command is executed, this function will exit.
	cli.HandleCLI()

	// Startup checks for TUI
	if err := config.CheckDependencies(); err != nil {
		core.LogError("Startup Error: %v", err)
		os.Exit(1)
	}

	if err := core.BootstrapSystem(sigHandler.Context()); err != nil {
		core.LogError("Startup Warning: %v", err)
	}

	// Start the Terminal User Interface
	ui.RunUI(sigHandler)
}
