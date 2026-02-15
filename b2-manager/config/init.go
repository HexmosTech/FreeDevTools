package config

import (
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

	// Load hash cache
	if err := core.LoadHashCache(); err != nil {
		core.LogInfo("Warning: Failed to load hash cache: %v", err)
	}

	core.LogInfo("Configuration loaded successfully")
	core.LogInfo("RootBucket: %s", model.AppConfig.RootBucket)
	core.LogInfo("DiscordWebhookURL: %s", model.AppConfig.DiscordWebhookURL)

	// Setup cancellation handling
	sigHandler := core.NewSignalHandler()

	if err := core.BootstrapSystem(sigHandler.Context()); err != nil {
		core.LogError("Startup Warning: %v", err)
	}

	return sigHandler
}
