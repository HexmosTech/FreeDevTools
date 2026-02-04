package installerpedia

import (
	"crypto/sha256"
	"database/sql"
	"encoding/binary"
	"encoding/json"
	"strings"
)

func parseJSON[T any](raw string, target *[]T) {
	if raw == "" {
		*target = []T{}
		return
	}
	_ = json.Unmarshal([]byte(raw), target)
}

func ParseInstallationGuideRow(row RawInstallationGuideRow) InstallationGuide {
	var prereqs []Prerequisite
	var methods []InstallMethod
	var post []string
	var resources []Resource
	var keywords []Keywords

	parseJSON(row.Prerequisites, &prereqs)
	parseJSON(row.InstallationMethods, &methods)
	parseJSON(row.PostInstallation, &post)
	parseJSON(row.ResourcesOfInterest, &resources)
	parseJSON(row.Keywords, &keywords)

	desc := ""
	if row.Description.Valid {
		desc = row.Description.String
	}

	return InstallationGuide{
		ID:                  row.ID,
		Repo:                row.Repo,
		RepoType:            row.RepoType,
		HasInstallation:     row.HasInstallation,
		Prerequisites:       prereqs,
		InstallationMethods: methods,
		PostInstallation:    post,
		ResourcesOfInterest: resources,
		Description:         desc, // ✅ string
		Stars:               row.Stars,
		Note:                row.Note,
		Keywords:            keywords,
	}

}

func SerializeInstallationGuideForDB(guide InstallationGuide) RawInstallationGuideRow {
	toJSON := func(v any) string {
		b, _ := json.Marshal(v)
		return string(b)
	}

	return RawInstallationGuideRow{
		Repo:                guide.Repo,
		RepoType:            guide.RepoType,
		HasInstallation:     guide.HasInstallation,
		Prerequisites:       toJSON(guide.Prerequisites),
		InstallationMethods: toJSON(guide.InstallationMethods),
		PostInstallation:    toJSON(guide.PostInstallation),
		ResourcesOfInterest: toJSON(guide.ResourcesOfInterest),
		Description: sql.NullString{ // ✅ FIX
			String: guide.Description,
			Valid:  guide.Description != "",
		},
		Stars:    guide.Stars,
		Note:     guide.Note,
		Keywords: toJSON(guide.Keywords),
	}
}

func SearchGuide(guide InstallationGuide, query string) bool {
	q := strings.ToLower(query)

	if strings.Contains(strings.ToLower(guide.Description), q) {
		return true
	}
	if guide.Note != nil && strings.Contains(strings.ToLower(*guide.Note), q) {
		return true
	}
	for _, r := range guide.ResourcesOfInterest {
		if strings.Contains(strings.ToLower(r.Title), q) ||
			strings.Contains(strings.ToLower(r.Reason), q) ||
			strings.Contains(strings.ToLower(r.URLOrPath), q) {
			return true
		}
	}
	return false
}

// HashURLToKeyInt generates a hash ID from category and slug.
func HashURLToKeyInt(category, slug string) int64 {
	combined := category + slug
	hash := sha256.Sum256([]byte(combined))
	return int64(binary.BigEndian.Uint64(hash[:8]))
}

func HashStringToInt64(s string) int64 {
	if s == "" {
		s = ""
	}
	sum := sha256.Sum256([]byte(s))
	return int64(binary.BigEndian.Uint64(sum[:8]))
}
