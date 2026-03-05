package static_cache

type PageMetadata struct {
	Title          string   `json:"title"`
	Description    string   `json:"description"`
	Keywords       []string `json:"keywords"`
	Canonical      string   `json:"canonical"`
	OgImage        string   `json:"og_image,omitempty"`
	TwitterImage   string   `json:"twitter_image,omitempty"`
	ThumbnailUrl   string   `json:"thumbnail_url,omitempty"`
	EncodingFormat string   `json:"encoding_format,omitempty"`
}
