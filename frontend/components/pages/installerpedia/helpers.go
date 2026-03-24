package installerpedia

import "fmt"

// formatCount formats a count number, showing "k" for thousands
func formatCount(count int) string {
	if count >= 1000 {
		return fmt.Sprintf("%dk", count/1000)
	}
	return fmt.Sprintf("%d", count)
}

// RepoSlug converts a repo name like "owner/repo" into the slug format used by Installerpedia.
// This mirrors the slug logic in the API layer (lowercase, "/" -> "-").
func RepoSlug(repo string) string {
	// We intentionally mirror: strings.ReplaceAll(strings.ToLower(p.Repo), "/", "-")
	// but keep it here to avoid importing "strings" into templ-generated code paths.
	r := []rune(repo)
	out := make([]rune, len(r))
	for i, ch := range r {
		if ch == '/' {
			out[i] = '-'
		} else {
			// simple ASCII lowercase; non-ASCII stays unchanged
			if ch >= 'A' && ch <= 'Z' {
				out[i] = ch + ('a' - 'A')
			} else {
				out[i] = ch
			}
		}
	}
	return string(out)
}
