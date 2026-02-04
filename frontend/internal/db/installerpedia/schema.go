package installerpedia

import "database/sql"

// Keywords is just an alias (like TS)
type Keywords = string

type InstallationGuide struct {
	ID                    int               `json:"id"`
	Repo                  string            `json:"repo"`
	RepoType              string            `json:"repo_type"`
	HasInstallation       bool              `json:"has_installation"`
	Prerequisites         []Prerequisite    `json:"prerequisites"`
	InstallationMethods   []InstallMethod   `json:"installation_methods"`
	PostInstallation      []string           `json:"post_installation"`
	ResourcesOfInterest   []Resource         `json:"resources_of_interest"`
	Description           string             `json:"description"`
	Stars                 int                `json:"stars"`
	Note                  *string            `json:"note,omitempty"`
	Keywords              []Keywords         `json:"keywords"`
	SeeAlso               string             `json:"see_also"` // JSON string containing array of objects
}

type Prerequisite struct {
	Type        string   `json:"type"`
	Name        string   `json:"name"`
	Version     *string  `json:"version,omitempty"`
	Description string   `json:"description"`
	Optional    bool     `json:"optional"`
	AppliesTo   []string `json:"applies_to"`
}

type InstallMethod struct {
	Title        string               `json:"title"`
	Instructions []InstallInstruction `json:"instructions"`
}

type InstallInstruction struct {
	Command string `json:"command"`
	Meaning string `json:"meaning"`
}

type Resource struct {
	Type      string `json:"type"`
	Title     string `json:"title"`
	URLOrPath string `json:"url_or_path"`
	Reason    string `json:"reason"`
}

/*
Raw DB row (JSON fields are strings)
*/
type RawInstallationGuideRow struct {
	ID                  int
	Repo                string
	RepoType            string
	HasInstallation     bool
	Prerequisites       string
	InstallationMethods string
	PostInstallation    string
	ResourcesOfInterest string
	Description         sql.NullString // ✅ NULL-safe
	Stars               int
	Note                *string
	Keywords             string
	SeeAlso              string // JSON string
	IsDeleted bool
}

/*
Repo list view
*/
type RepoData struct {
	ID                  int
	Repo                string
	RepoType            string
	HasInstallation     bool
	Prerequisites       []Prerequisite
	InstallationMethods []InstallMethod
	PostInstallation    []string
	ResourcesOfInterest []Resource
	Description         string
	Stars               int
	Note                *string
	Keywords            []Keywords
	SeeAlso             string
	IsDeleted			bool
}

type RawRepoRow = RawInstallationGuideRow

type RepoCategory struct {
	Name        string
	Count       int
	Description string
}

type Overview struct {
	TotalCount    int
	LastUpdatedAt string
}
