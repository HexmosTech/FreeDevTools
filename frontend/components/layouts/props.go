package layouts

// BaseLayoutProps contains all properties needed for the base layout
// This struct is used by both templ templates and Go code
type BaseLayoutProps struct {
	Name            string
	Title           string
	Description     string
	Canonical       string
	Keywords        []string
	OgImage         string
	TwitterImage    string
	ShowHeader      bool
	DatePublished   string
	DateModified    string
	SoftwareVersion string
	Features        []string
	ThumbnailUrl    string
	ImgWidth        int
	ImgHeight       int
	EncodingFormat  string
	Path            string
	PageType        string
	Author          string
	License         string
	Category        string
	PartOf          string
	PartOfUrl       string
	TotalItems      int
	ItemsPerPage    int
	CurrentPage     int
	CommandName     string
	Platform        string
	CommandCategory string
	GithubUrl       string
	HideBanner      bool
}

