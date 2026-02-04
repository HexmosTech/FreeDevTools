package components

import (
	"fmt"
)

// PaginationURL builds a pagination URL
func PaginationURL(baseURL string, page int, alwaysIncludePageNumber bool) string {
	url := ""
	if page == 1 && !alwaysIncludePageNumber {
		url = baseURL
	} else {
		url = fmt.Sprintf("%s%d/", baseURL, page)
	}
	// Add anchor fragment for all pages
	return url + "#pagination-info"
}

// FormatInt converts an int to string
func FormatInt(n int) string {
	return fmt.Sprintf("%d", n)
}

// Min returns the minimum of two integers
func Min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

// Max returns the maximum of two integers
func Max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
