package png_icons

import "fmt"

// GetIconURL returns the URL for an icon
func GetIconURL(iconURL *string, category, iconName string) string {
	if iconURL != nil && *iconURL != "" {
		return *iconURL
	}
	return fmt.Sprintf("/freedevtools/png_icons/%s/%s/", category, iconName)
}
