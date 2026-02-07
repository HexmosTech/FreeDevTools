package ui

import (
	"strings"
)

// UIStatus represents the dynamic status of a database operation
type UIStatus struct {
	Message   string
	Percent   int
	Speed     float64
	OpType    string // "upload", "download" or empty
	ETA       string // Estimated time remaining (e.g. "3s", "1m")
	BarString string // Deprecated/Legacy, kept for compatibility if needed (unused in new logic)
}

func renderProgressBarWithWidth(percent int, width int) string {
	filled := int(float64(width) * float64(percent) / 100.0)
	bar := "[" + strings.Repeat("#", filled) + strings.Repeat("-", width-filled) + "]"
	return bar
}
