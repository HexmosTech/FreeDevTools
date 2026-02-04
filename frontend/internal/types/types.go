package types

type RouteType int

const (
	TypeIndex RouteType = iota
	TypeCategory
	TypeSubCategory
	TypeDetail
)

// RouteInfo contains parsed route information
type RouteInfo struct {
	Type            RouteType
	CategorySlug    string // Used for Category and Detail
	SubCategorySlug string
	ParamSlug       string // Used for Detail (Cheatsheet/Emoji Slug)
	Page            int    // Used for Index and Category
	HashID          int64  // Computed HashID (optimization)
}
