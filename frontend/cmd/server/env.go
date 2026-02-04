package main

import (
	"fdt-templ/internal/config"
)

// Re-export config functions for convenience
var (
	GetBasePath   = config.GetBasePath
	GetSiteURL    = config.GetSiteURL
	GetPort       = config.GetPort
	GetAdsEnabled = config.GetAdsEnabled
)

