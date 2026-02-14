package main

import (
	"b2m/config"
	"b2m/ui"
)

func main() {
	// Initialize system configuration and signal handling
	sigHandler := config.InitSystem()
	// Ensure proper cleanup of resources on exit
	defer config.Cleanup()

	// Start the Terminal User Interface
	ui.RunUI(sigHandler)
}
