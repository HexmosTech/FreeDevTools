package main

import (
	"fmt"
	"os"

	"b2m/config"
	"b2m/core"
	"b2m/model"
	"b2m/ui"
)

func main() {
	model.AppConfig.ToolVersion = "2.1"
	// Initialize system configuration and signal handling
	sigHandler := config.InitSystem()
	// Ensure proper cleanup of resources on exit
	defer config.Cleanup()

	// Handle CLI commands first. If a command is executed, this function will exit.
	ui.HandleCLI()

	// Startup checks for TUI
	if err := config.CheckDependencies(); err != nil {
		core.LogError("Startup Error: %v", err)
		fmt.Printf("Startup Error: %v\n", err)
		os.Exit(1)
	}

	// Start the Terminal User Interface
	ui.RunUI(sigHandler)
}
