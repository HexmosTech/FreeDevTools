package man_pages

import (
	"fmt"
	"strings"
)

// formatCount formats a count number, showing "k" for thousands
func formatCount(count int) string {
	if count >= 1000 {
		return fmt.Sprintf("%dk", count/1000)
	}
	return fmt.Sprintf("%d", count)
}

// FormatCategoryName formats a category/subcategory name by replacing hyphens with spaces and capitalizing the first letter
func FormatCategoryName(name string) string {
	result := strings.ReplaceAll(name, "-", " ")
	if len(result) > 0 {
		bytes := []byte(result)
		if bytes[0] >= 'a' && bytes[0] <= 'z' {
			bytes[0] -= 32
		}
		result = string(bytes)
	}
	return result
}

