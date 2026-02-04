package emojis

import (
	"database/sql"
	"encoding/json"
)

// Overview represents section stats
type Overview struct {
	TotalCount    int    `json:"total_count"`
	LastUpdatedAt string `json:"last_updated_at"`
}

// EmojiData represents an emoji from the database
type EmojiData struct {
	ID                       int64             `json:"id"`
	Code                     string            `json:"code"`
	Unicode                  []string          `json:"unicode"`
	Slug                     string            `json:"slug"`
	Title                    string            `json:"title"`
	Category                 *string           `json:"category"`
	Description              *string           `json:"description"`
	AppleVendorDescription   *string           `json:"apple_vendor_description"`
	Keywords                 []string          `json:"keywords"`
	AlsoKnownAs              []string          `json:"also_known_as"`
	Version                  *VersionInfo      `json:"version"`
	Senses                   *Senses           `json:"senses"`
	Shortcodes               map[string]string `json:"shortcodes"`
	DiscordVendorDescription *string           `json:"discord_vendor_description"`
	CategoryHash             *int64            `json:"category_hash"`
	SlugHash                 int64             `json:"slug_hash"`
	ImageFilename            *string           `json:"image_filename"`
	SeeAlso                  string            `json:"see_also"` // JSON string containing array of objects
	UpdatedAt                string            `json:"updated_at"`
}

// VersionInfo represents emoji version information
type VersionInfo struct {
	UnicodeVersion string `json:"unicode-version"`
	EmojiVersion   string `json:"emoji-version"`
}

// Senses represents how emoji is used in language
type Senses struct {
	Adjectives []string `json:"adjectives"`
	Verbs      []string `json:"verbs"`
	Nouns      []string `json:"nouns"`
}

// EmojiImageVariants represents image variants for an emoji
type EmojiImageVariants struct {
	ThreeD       *string `json:"3d"`
	Color        *string `json:"color"`
	Flat         *string `json:"flat"`
	HighContrast *string `json:"high_contrast"`
}

// PreviewEmoji represents a preview emoji in a category
type PreviewEmoji struct {
	ID    int64  `json:"id"`
	Code  string `json:"code"`
	Slug  string `json:"slug"`
	Title string `json:"title"`
}

// CategoryWithPreview represents a category with preview emojis
type CategoryWithPreview struct {
	Category      string         `json:"category"`
	Count         int            `json:"count"`
	PreviewEmojis []PreviewEmoji `json:"preview_emojis"`
	UpdatedAt     string         `json:"updated_at"`
}

// SitemapEmoji represents an emoji for sitemap generation (lightweight)
type SitemapEmoji struct {
	Slug      string  `json:"slug"`
	Category  *string `json:"category"`
	UpdatedAt string  `json:"updated_at"`
}

// Raw database row types (before JSON parsing)
type rawEmojiRow struct {
	SlugHash                 int64
	ID                       int64
	Code                     string
	Unicode                  sql.NullString // JSON string, may be NULL
	Slug                     string
	Title                    string
	Category                 sql.NullString
	Description              sql.NullString
	AppleVendorDescription   sql.NullString
	Keywords                 sql.NullString // JSON string
	AlsoKnownAs              sql.NullString // JSON string
	Version                  sql.NullString // JSON string
	Senses                   sql.NullString // JSON string (may be NULL)
	Shortcodes               sql.NullString // JSON string (may be NULL)
	DiscordVendorDescription sql.NullString
	CategoryHash             sql.NullInt64
	ImageFilename            sql.NullString
	SeeAlso                  string // JSON string
	UpdatedAt                string
}

type rawCategoryRow struct {
	CategoryHash      int64
	Category          string
	Count             int
	PreviewEmojisJSON string // JSON string
	UpdatedAt         string
}

// parseJSONArray parses a JSON array string into a []string
func parseJSONArray(s string) []string {
	if s == "" {
		return []string{}
	}
	var arr []string
	if err := json.Unmarshal([]byte(s), &arr); err != nil {
		return []string{}
	}
	return arr
}

// parseJSONObject parses a JSON object string into a map[string]string
func parseJSONObject(s string) map[string]string {
	if s == "" {
		return map[string]string{}
	}
	var obj map[string]string
	if err := json.Unmarshal([]byte(s), &obj); err != nil {
		return map[string]string{}
	}
	return obj
}

// parseVersionInfo parses a JSON string into VersionInfo
func parseVersionInfo(s string) *VersionInfo {
	if s == "" {
		return nil
	}
	var v VersionInfo
	if err := json.Unmarshal([]byte(s), &v); err != nil {
		return nil
	}
	return &v
}

// parseSenses parses a JSON string into Senses
func parseSenses(s string) *Senses {
	if s == "" {
		return nil
	}
	var senses Senses
	if err := json.Unmarshal([]byte(s), &senses); err != nil {
		return nil
	}
	return &senses
}

// parsePreviewEmojis parses a JSON array string into []PreviewEmoji
func parsePreviewEmojis(s string) []PreviewEmoji {
	if s == "" {
		return []PreviewEmoji{}
	}
	var arr []PreviewEmoji
	if err := json.Unmarshal([]byte(s), &arr); err != nil {
		return []PreviewEmoji{}
	}
	return arr
}

// toEmojiData converts a rawEmojiRow to EmojiData
func (r *rawEmojiRow) toEmojiData() EmojiData {
	// Safely unwrap nullable JSON text fields
	unicodeJSON := ""
	if r.Unicode.Valid {
		unicodeJSON = r.Unicode.String
	}
	keywordsJSON := ""
	if r.Keywords.Valid {
		keywordsJSON = r.Keywords.String
	}
	akaJSON := ""
	if r.AlsoKnownAs.Valid {
		akaJSON = r.AlsoKnownAs.String
	}
	versionJSON := ""
	if r.Version.Valid {
		versionJSON = r.Version.String
	}
	shortcodesJSON := ""
	if r.Shortcodes.Valid {
		shortcodesJSON = r.Shortcodes.String
	}

	emoji := EmojiData{
		SlugHash:    r.SlugHash,
		ID:          r.ID,
		Code:        r.Code,
		Unicode:     parseJSONArray(unicodeJSON),
		Slug:        r.Slug,
		Title:       r.Title,
		Keywords:    parseJSONArray(keywordsJSON),
		AlsoKnownAs: parseJSONArray(akaJSON),
		Shortcodes:  parseJSONObject(shortcodesJSON),
		Version:     parseVersionInfo(versionJSON),
	}

	if r.Senses.Valid {
		emoji.Senses = parseSenses(r.Senses.String)
	}

	if r.Category.Valid {
		emoji.Category = &r.Category.String
	}
	if r.Description.Valid {
		emoji.Description = &r.Description.String
	}
	if r.AppleVendorDescription.Valid {
		emoji.AppleVendorDescription = &r.AppleVendorDescription.String
	}
	if r.DiscordVendorDescription.Valid {
		emoji.DiscordVendorDescription = &r.DiscordVendorDescription.String
	}
	if r.CategoryHash.Valid {
		emoji.CategoryHash = &r.CategoryHash.Int64
	}
	if r.ImageFilename.Valid {
		emoji.ImageFilename = &r.ImageFilename.String
	}
	emoji.SeeAlso = r.SeeAlso
	emoji.UpdatedAt = r.UpdatedAt

	return emoji
}

// toCategoryWithPreview converts a rawCategoryRow to CategoryWithPreview
func (r *rawCategoryRow) toCategoryWithPreview() CategoryWithPreview {
	return CategoryWithPreview{
		Category:      r.Category,
		Count:         r.Count,
		PreviewEmojis: parsePreviewEmojis(r.PreviewEmojisJSON),
		UpdatedAt:     r.UpdatedAt,
	}
}
