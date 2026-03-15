package bookmarks

import (
	"database/sql"
)

// CheckUserAdmin checks if a user has the 'admin' role in the user_role table
func (db *DB) CheckUserAdmin(userID string) (bool, error) {
	var count int
	err := db.conn.QueryRow(
		"SELECT count(*) FROM user_role WHERE uid = $1 AND role = 'admin'",
		userID,
	).Scan(&count)

	if err != nil {
		if err == sql.ErrNoRows {
			return false, nil
		}
		return false, err
	}

	return count > 0, nil
}
