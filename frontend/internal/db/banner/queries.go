package banner

import (
	"database/sql"
	"fmt"
	"math/rand"
)

// GetTotalBanners returns the total count of banners
func GetTotalBanners() (int, error) {
	db, err := GetDB()
	if err != nil {
		return 0, err
	}

	var count int
	err = db.QueryRow("SELECT COUNT(*) FROM banner").Scan(&count)
	if err != nil {
		return 0, fmt.Errorf("failed to get total banners: %w", err)
	}
	return count, nil
}

// GetRandomBanner returns a random banner
func GetRandomBanner() (*Banner, error) {
	db, err := GetDB()
	if err != nil {
		return nil, err
	}

	total, err := GetTotalBanners()
	if err != nil || total == 0 {
		return nil, fmt.Errorf("no banners available")
	}

	// Get random offset
	offset := rand.Intn(total)

	var banner Banner
	query := "SELECT id, language, name, size, campaign_name, product_name, html_link, js_links, click_url, link_type FROM banner ORDER BY id LIMIT 1 OFFSET ?"
	err = db.QueryRow(query, offset).Scan(
		&banner.ID,
		&banner.Language,
		&banner.Name,
		&banner.Size,
		&banner.CampaignName,
		&banner.ProductName,
		&banner.HTMLLink,
		&banner.JSLinks,
		&banner.ClickURL,
		&banner.LinkType,
	)

	if err == sql.ErrNoRows {
		return nil, nil
	}
	if err != nil {
		return nil, fmt.Errorf("failed to get random banner: %w", err)
	}

	return &banner, nil
}

// GetRandomBannerByType returns a random banner filtered by link_type
func GetRandomBannerByType(linkType string) (*Banner, error) {
	db, err := GetDB()
	if err != nil {
		return nil, err
	}

	// Get count of banners with this type
	var count int
	err = db.QueryRow("SELECT COUNT(*) FROM banner WHERE link_type = ?", linkType).Scan(&count)
	if err != nil {
		return nil, fmt.Errorf("failed to count banners by type: %w", err)
	}
	if count == 0 {
		return nil, nil
	}

	// Get random offset
	offset := rand.Intn(count)

	var banner Banner
	query := "SELECT id, language, name, size, campaign_name, product_name, html_link, js_links, click_url, link_type FROM banner WHERE link_type = ? ORDER BY id LIMIT 1 OFFSET ?"
	err = db.QueryRow(query, linkType, offset).Scan(
		&banner.ID,
		&banner.Language,
		&banner.Name,
		&banner.Size,
		&banner.CampaignName,
		&banner.ProductName,
		&banner.HTMLLink,
		&banner.JSLinks,
		&banner.ClickURL,
		&banner.LinkType,
	)

	if err == sql.ErrNoRows {
		return nil, nil
	}
	if err != nil {
		return nil, fmt.Errorf("failed to get random banner by type: %w", err)
	}

	return &banner, nil
}

