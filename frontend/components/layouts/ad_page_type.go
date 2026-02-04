package layouts

import (
	"strings"
)

// GetAdPageTypeFromPath extracts the ad page type from a URL path or full URL
// Examples:
//   - "/freedevtools/" -> "index"
//   - "https://hexmos.com/freedevtools/c/" -> "c"
//   - "/freedevtools/svg_icons/" -> "svg_icons"
//   - "https://hexmos.com/freedevtools/c/bash/" -> "c"
//   - "/freedevtools/tldr/linux/" -> "tldr"
func GetAdPageTypeFromPath(path string) string {
	if path == "" {
		return "index"
	}

	// Handle full URLs - extract just the path part
	if strings.HasPrefix(path, "http://") || strings.HasPrefix(path, "https://") {
		// Parse URL to get path
		// Simple extraction: find /freedevtools/ in the URL
		idx := strings.Index(path, "/freedevtools/")
		if idx == -1 {
			// Try without leading slash
			idx = strings.Index(path, "freedevtools/")
			if idx == -1 {
				return "index"
			}
			path = path[idx:]
		} else {
			path = path[idx+1:] // Remove leading slash
		}
	}

	// Remove leading/trailing slashes and split
	path = strings.Trim(path, "/")
	parts := strings.Split(path, "/")

	if len(parts) == 0 || parts[0] == "" {
		return "index"
	}

	// Remove basepath if present
	if parts[0] == "freedevtools" {
		if len(parts) == 1 {
			return "index"
		}
		parts = parts[1:]
	}

	// Get the first segment after basepath
	firstSegment := parts[0]

	// Map URL segments to config keys
	switch firstSegment {
	case "c":
		return "c"
	case "t":
		return "t"
	case "mcp":
		return "mcp"
	case "tldr":
		return "tldr"
	case "emojis":
		return "emojis"
	case "svg_icons":
		return "svg_icons"
	case "png_icons":
		return "png_icons"
	case "man-pages":
		return "man-pages"
	case "installerpedia":
		return "installerpedia"
	case "pro":
		return "pro"
	default:
		// Default to index for unknown paths
		return "index"
	}
}

