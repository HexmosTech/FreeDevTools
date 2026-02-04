package bookmarks

import (
	"database/sql"
	"time"
)

// CheckBookmark checks if a bookmark exists for the given user and URL
func (db *DB) CheckBookmark(userID, url string) (bool, error) {
	uidHashID := HashToID(userID)
	
	var count int
	err := db.conn.QueryRow(
		"SELECT COUNT(*) FROM bookmarks WHERE uId_hash_id = $1 AND url = $2",
		uidHashID, url,
	).Scan(&count)
	
	if err != nil {
		if err == sql.ErrNoRows {
			return false, nil
		}
		return false, err
	}
	
	return count > 0, nil
}

// ToggleBookmark creates or deletes a bookmark
// Returns (isBookmarked, error)
func (db *DB) ToggleBookmark(userID, url, category string) (bool, error) {
	uidHashID := HashToID(userID)
	categoryHashID := HashToID(category)
	
	// Check if bookmark exists
	exists, err := db.CheckBookmark(userID, url)
	if err != nil {
		return false, err
	}
	
	if exists {
		// Delete bookmark
		_, err := db.conn.Exec(
			"DELETE FROM bookmarks WHERE uId_hash_id = $1 AND url = $2",
			uidHashID, url,
		)
		if err != nil {
			return false, err
		}
		return false, nil
	}
	
	// Create bookmark
	createdAt := time.Now().Format(time.RFC3339)
	_, err = db.conn.Exec(
		"INSERT INTO bookmarks (uId, url, category, category_hash_id, uId_hash_id, created_at) VALUES ($1, $2, $3, $4, $5, $6)",
		userID, url, category, categoryHashID, uidHashID, createdAt,
	)
	if err != nil {
		return false, err
	}
	
	return true, nil
}

// GetBookmarksByUser returns all bookmarks for a user (optional, for future use)
func (db *DB) GetBookmarksByUser(userID string) ([]Bookmark, error) {
	uidHashID := HashToID(userID)
	
	rows, err := db.conn.Query(
		"SELECT uId, url, category, category_hash_id, uId_hash_id, created_at FROM bookmarks WHERE uId_hash_id = $1 ORDER BY created_at DESC",
		uidHashID,
	)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	
	var bookmarks []Bookmark
	for rows.Next() {
		var b Bookmark
		if err := rows.Scan(&b.UID, &b.URL, &b.Category, &b.CategoryHashID, &b.UIDHashID, &b.CreatedAt); err != nil {
			continue
		}
		bookmarks = append(bookmarks, b)
	}
	
	return bookmarks, nil
}

