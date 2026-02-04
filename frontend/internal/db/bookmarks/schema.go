package bookmarks

// Bookmark represents a bookmarked page
type Bookmark struct {
	UID            string `json:"uId"`
	URL            string `json:"url"`
	Category       string `json:"category"`
	CategoryHashID int64  `json:"category_hash_id"`
	UIDHashID      int64  `json:"uId_hash_id"`
	CreatedAt      string `json:"created_at"`
}

// Raw database row type
type rawBookmarkRow struct {
	UID            string
	URL            string
	Category       string
	CategoryHashID int64
	UIDHashID      int64
	CreatedAt      string
}

