package installerpedia

import "fmt"

// formatCount formats a count number, showing "k" for thousands
func formatCount(count int) string {
	if count >= 1000 {
		return fmt.Sprintf("%dk", count/1000)
	}
	return fmt.Sprintf("%d", count)
}
