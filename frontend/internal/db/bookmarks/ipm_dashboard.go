package bookmarks

import (
	"database/sql"
	"fmt"
)

// AddIPMDashboardUser adds a user by UID and assigns them the provided slugs
func (db *DB) AddIPMDashboardUser(dashboardUID string, slugs []string) error {
	tx, err := db.conn.Begin()
	if err != nil {
		return fmt.Errorf("failed to begin transaction: %v", err)
	}
	defer tx.Rollback()

	// 1. Insert into ipm_dashboard (Ignore if already exists)
	_, err = tx.Exec(
		"INSERT INTO ipm_dashboard (uid) VALUES ($1) ON CONFLICT (uid) DO NOTHING",
		dashboardUID,
	)
	if err != nil {
		return fmt.Errorf("failed to insert into ipm_dashboard: %v", err)
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
