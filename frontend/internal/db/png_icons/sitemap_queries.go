package png_icons

import (
	"fmt"
)

// GetSitemapCategories returns only the category/cluster URLs for the first sitemap chunk
func (db *DB) GetSitemapCategories() ([]SitemapIcon, error) {
	var icons []SitemapIcon

	// 1. Root URL
	icons = append(icons, SitemapIcon{Name: "root", Cluster: "root", CategoryName: "root"})

	// 2. All Clusters
	query := `SELECT name, updated_at FROM cluster ORDER BY name`
	rows, err := db.conn.Query(query)
	if err != nil {
		return nil, fmt.Errorf("failed to query clusters: %w", err)
	}
	defer rows.Close()

	for rows.Next() {
		var name, updatedAt string
		if err := rows.Scan(&name, &updatedAt); err != nil {
			return nil, err
		}
		icons = append(icons, SitemapIcon{Cluster: name, CategoryName: "cluster_page", UpdatedAt: updatedAt})
	}

	return icons, nil
}

// GetSitemapIconsOnly returns only the icon URLs with pagination
func (db *DB) GetSitemapIconsOnly(limit, offset int) ([]SitemapIcon, error) {
	var icons []SitemapIcon

	// Fetch cluster and name to construct URL
	query := `SELECT cluster, name, updated_at
		FROM icon
		ORDER BY url_hash
		LIMIT ? OFFSET ?`

	rows, err := db.conn.Query(query, limit, offset)
	if err != nil {
		return nil, fmt.Errorf("failed to query icons: %w", err)
	}
	defer rows.Close()

	for rows.Next() {
		var icon SitemapIcon
		err := rows.Scan(&icon.Cluster, &icon.Name, &icon.UpdatedAt)
		if err != nil {
			continue
		}
		// CategoryName is same as Cluster
		icon.CategoryName = icon.Cluster
		icons = append(icons, icon)
	}

	return icons, nil
}
