package main

import (
	"b2m/config"
	"b2m/ui"
)

func main() {
	sigHandler := config.InitSystem()
	defer config.Cleanup()

	// Start UI
	ui.RunUI(sigHandler)
}
