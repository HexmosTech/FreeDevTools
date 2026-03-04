package static_cache

type PageMetadata struct {
	Title       string   `json:"title"`
	Description string   `json:"description"`
	Keywords    []string `json:"keywords"`
	Canonical   string   `json:"canonical"`
}
