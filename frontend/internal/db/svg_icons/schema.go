package svg_icons

import (
	"database/sql"
	"encoding/json"
)

// Overview represents section stats
type Overview struct {
	TotalCount    int    `json:"total_count"`
	LastUpdatedAt string `json:"last_updated_at"`
}

// Icon represents an SVG icon from the database
type Icon struct {
	ID            int      `json:"id"`
	Cluster       string   `json:"cluster"`
	Name          string   `json:"name"`
	Base64        string   `json:"base64"`
	Title         *string  `json:"title"`
	Description   string   `json:"description"`
	Usecases      string   `json:"usecases"`
	Synonyms      []string `json:"synonyms"`
	Tags          []string `json:"tags"`
	Industry      string   `json:"industry"`
	EmotionalCues string   `json:"emotional_cues"`
	Enhanced      int      `json:"enhanced"`
	ImgAlt        string   `json:"img_alt"`
	URLHash       string   `json:"url_hash"`
	SeeAlso       string   `json:"see_also"` // JSON string containing array of objects
	UpdatedAt     string   `json:"updated_at"`
}

// Cluster represents a category/cluster of icons
type Cluster struct {
	ID               int      `json:"id"`
	HashName         string   `json:"hash_name"`
	Name             string   `json:"name"`
	Count            int      `json:"count"`
	SourceFolder     string   `json:"source_folder"`
	Path             string   `json:"path"`
	Keywords         []string `json:"keywords"`
	Tags             []string `json:"tags"`
	Title            string   `json:"title"`
	Description      string   `json:"description"`
	PracticalApp     string   `json:"practical_application"`
	AlternativeTerms []string `json:"alternative_terms"`
	About            string   `json:"about"`
	WhyChooseUs      []string `json:"why_choose_us"`
	UpdatedAt        string   `json:"updated_at"`
}

// PreviewIcon represents a preview icon in a cluster
type PreviewIcon struct {
	ID     int    `json:"id"`
	Name   string `json:"name"`
	Base64 string `json:"base64"`
	ImgAlt string `json:"img_alt"`
}

// ClusterWithPreviewIcons represents a cluster with its preview icons
type ClusterWithPreviewIcons struct {
	ID               int           `json:"id"`
	Name             string        `json:"name"`
	Count            int           `json:"count"`
	SourceFolder     string        `json:"source_folder"`
	Path             string        `json:"path"`
	Keywords         []string      `json:"keywords"`
	Tags             []string      `json:"tags"`
	Title            string        `json:"title"`
	Description      string        `json:"description"`
	PracticalApp     string        `json:"practical_application"`
	AlternativeTerms []string      `json:"alternative_terms"`
	About            string        `json:"about"`
	WhyChooseUs      []string      `json:"why_choose_us"`
	PreviewIcons     []PreviewIcon `json:"preview_icons"`
}

// ClusterTransformed is a transformed version of ClusterWithPreviewIcons for display
type ClusterTransformed struct {
	ID           string        `json:"id"`
	Name         string        `json:"name"`
	Description  string        `json:"description"`
	Icon         string        `json:"icon"`
	IconCount    int           `json:"iconCount"`
	URL          string        `json:"url"`
	Keywords     []string      `json:"keywords"`
	Features     []string      `json:"features"`
	PreviewIcons []PreviewIcon `json:"previewIcons"`
}

// IconWithMetadata extends Icon with additional metadata
type IconWithMetadata struct {
	Icon
	Category *string `json:"category,omitempty"`
	Author   *string `json:"author,omitempty"`
	License  *string `json:"license,omitempty"`
	URL      *string `json:"url,omitempty"`
}

// SitemapIcon represents an icon for sitemap generation
type SitemapIcon struct {
	Cluster      string `json:"cluster"`
	Name         string `json:"name"`
	CategoryName string `json:"category_name"`
	URL          string `json:"url"`
	UpdatedAt    string `json:"updated_at"`
}

// Raw database row types (before JSON parsing)
type rawIconRow struct {
	ID            int
	Cluster       string
	Name          string
	Base64        string
	Description   sql.NullString
	Usecases      sql.NullString
	Synonyms      string // JSON string
	Tags          string // JSON string
	Industry      sql.NullString
	EmotionalCues sql.NullString
	Enhanced      int
	ImgAlt        sql.NullString
	URLHash       sql.NullString
	SeeAlso       string // JSON string
	UpdatedAt     string
}

type rawClusterRow struct {
	ID                   int
	HashName             string
	Name                 string
	Count                int
	SourceFolder         string
	Path                 string
	KeywordsJSON         string // JSON string
	TagsJSON             string // JSON string
	Title                sql.NullString
	Description          sql.NullString
	PracticalApp         sql.NullString
	AlternativeTermsJSON string // JSON string
	About                sql.NullString
	WhyChooseUsJSON      string // JSON string
	UpdatedAt            string
}

type rawClusterPreviewRow struct {
	Name             string
	Count            int
	SourceFolder     string
	PreviewIconsJSON string // JSON string
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

// parseJSONArrayToPreviewIcons parses a JSON array string into []PreviewIcon
func parseJSONArrayToPreviewIcons(s string) []PreviewIcon {
	if s == "" {
		return []PreviewIcon{}
	}
	var arr []PreviewIcon
	if err := json.Unmarshal([]byte(s), &arr); err != nil {
		return []PreviewIcon{}
	}
	return arr
}

// toIcon converts a rawIconRow to Icon
func (r *rawIconRow) toIcon() Icon {
	return Icon{
		ID:            r.ID,
		Cluster:       r.Cluster,
		Name:          r.Name,
		Base64:        r.Base64,
		Description:   r.Description.String,
		Usecases:      r.Usecases.String,
		Synonyms:      parseJSONArray(r.Synonyms),
		Tags:          parseJSONArray(r.Tags),
		Industry:      r.Industry.String,
		EmotionalCues: r.EmotionalCues.String,
		Enhanced:      r.Enhanced,
		ImgAlt:        r.ImgAlt.String,
		URLHash:       r.URLHash.String,
		SeeAlso:       r.SeeAlso,
		UpdatedAt:     r.UpdatedAt,
	}
}

// toCluster converts a rawClusterRow to Cluster
func (r *rawClusterRow) toCluster() Cluster {
	return Cluster{
		ID:               r.ID,
		HashName:         r.HashName,
		Name:             r.Name,
		Count:            r.Count,
		SourceFolder:     r.SourceFolder,
		Path:             r.Path,
		Keywords:         parseJSONArray(r.KeywordsJSON),
		Tags:             parseJSONArray(r.TagsJSON),
		Title:            r.Title.String,
		Description:      r.Description.String,
		PracticalApp:     r.PracticalApp.String,
		AlternativeTerms: parseJSONArray(r.AlternativeTermsJSON),
		About:            r.About.String,
		WhyChooseUs:      parseJSONArray(r.WhyChooseUsJSON),
		UpdatedAt:        r.UpdatedAt,
	}
}
