package main

import (
	"fdt-templ/internal/config"
)

// Re-export config functions for convenience
var (
	LoadConfig = config.LoadConfig
	GetConfig  = config.GetConfig
)

