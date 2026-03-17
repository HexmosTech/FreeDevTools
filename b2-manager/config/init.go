package config

import (
	"b2m/core"
	"b2m/model"
)

// InitSystem initializes the system, handles CLI commands, and returns the signal handler.
// The caller is responsible for calling Cleanup() when done.
func InitSystem() (*core.SignalHandler, error) {
	// Initialize Config
	if err := InitializeConfig(); err != nil {
		core.LogError("Error: %v", err)
		return nil, err
	}

	// Initialize Logger explicit early to capture startup issues
	if err := core.InitLogger(); err != nil {
		core.LogError("Warning: Failed to initialize logger: %v", err)
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

	return sigHandler, nil
}
