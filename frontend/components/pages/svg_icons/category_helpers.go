package svg_icons

import (
	"fmt"
	"strings"
)

// GetIconURL returns the URL for an icon
func GetIconURL(iconURL *string, category, iconName string) string {
	if iconURL != nil && *iconURL != "" {
		return *iconURL
	}
	// Strip trailing dashes from icon name only
	iconName = strings.TrimSuffix(iconName, "-")
	return fmt.Sprintf("/freedevtools/svg_icons/%s/%s/", category, iconName)
}

