package bookmarks

import (
	"database/sql"
	"fmt"
)

// IPMDashboardUser represents a user and their allowed dashboard slugs
type IPMDashboardUser struct {
	UID   string   `json:"uid"`
	Email string   `json:"email"`
	Slugs []string `json:"slugs"`
}

// AddIPMDashboardUser adds a user by UID and assigns them the provided slugs
func (db *DB) AddIPMDashboardUser(dashboardUID, email string, slugs []string) error {
	tx, err := db.conn.Begin()
	if err != nil {
		return fmt.Errorf("failed to begin transaction: %v", err)
	}
	defer tx.Rollback()

	// 1. Insert into ipm_dashboard (Ignore if already exists, but update email)
	_, err = tx.Exec(
		`INSERT INTO ipm_dashboard (uid, email) 
		 VALUES ($1, $2) 
		 ON CONFLICT (uid) 
		 DO UPDATE SET email = EXCLUDED.email`,
		dashboardUID, email,
	)
	if err != nil {
		return fmt.Errorf("failed to insert/update ipm_dashboard: %v", err)
	}

	// 2. Insert into ipm_dashboard_slugs
	for _, slug := range slugs {
		_, err = tx.Exec(
			"INSERT INTO ipm_dashboard_slugs (dashboard_uid, slug) VALUES ($1, $2) ON CONFLICT (dashboard_uid, slug) DO NOTHING",
			dashboardUID, slug,
		)
		if err != nil {
			return fmt.Errorf("failed to insert into ipm_dashboard_slugs for slug %s: %v", slug, err)
		}
	}

	return tx.Commit()
}

// HasIPMDashboardAccess checks if a user is explicitly allowed to view the metrics for a given slug
func (db *DB) HasIPMDashboardAccess(dashboardUID, slug string) (bool, error) {
	var count int
	err := db.conn.QueryRow(
		"SELECT count(*) FROM ipm_dashboard_slugs WHERE dashboard_uid = $1 AND slug = $2",
		dashboardUID, slug,
	).Scan(&count)

	if err != nil {
		if err == sql.ErrNoRows {
			return false, nil
		}
		return false, err
	}

	return count > 0, nil
}

// GetIPMDashboardUsers retrieves all users and their allowed slugs
func (db *DB) GetIPMDashboardUsers() ([]IPMDashboardUser, error) {
	rows, err := db.conn.Query(`
		SELECT d.uid, d.email, s.slug 
		FROM ipm_dashboard d
		LEFT JOIN ipm_dashboard_slugs s ON d.uid = s.dashboard_uid
		ORDER BY d.email ASC, s.slug ASC
	`)
	if err != nil {
		return nil, fmt.Errorf("failed to query ipm dashboard users: %v", err)
	}
	defer rows.Close()

	userMap := make(map[string]*IPMDashboardUser)
	var orderedUIDs []string // to keep consistent ordering based on first appearance

	for rows.Next() {
		var uid, email string
		var slug sql.NullString
		
		if err := rows.Scan(&uid, &email, &slug); err != nil {
			return nil, fmt.Errorf("failed to scan row: %v", err)
		}

		if _, exists := userMap[uid]; !exists {
			userMap[uid] = &IPMDashboardUser{
				UID:   uid,
				Email: email,
				Slugs: make([]string, 0),
			}
			orderedUIDs = append(orderedUIDs, uid)
		}

		if slug.Valid && slug.String != "" {
			userMap[uid].Slugs = append(userMap[uid].Slugs, slug.String)
		}
	}

	if err = rows.Err(); err != nil {
		return nil, fmt.Errorf("rows iteration error: %v", err)
	}

	var users []IPMDashboardUser
	for _, uid := range orderedUIDs {
		users = append(users, *userMap[uid])
	}

	return users, nil
}
