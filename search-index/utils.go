package main

import "regexp"

// sanitizeID replaces invalid characters with underscores
// Only allows alphanumeric characters, hyphens, and underscores
func sanitizeID(id string) string {
	reg := regexp.MustCompile(`[^a-zA-Z0-9\-_]`)
	return reg.ReplaceAllString(id, "_")
}
