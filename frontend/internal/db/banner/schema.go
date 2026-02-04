package banner

// Banner represents a banner from the database
type Banner struct {
	ID          int    `json:"id"`
	Language    string `json:"language"`
	Name        string `json:"name"`
	Size        string `json:"size"`
	CampaignName string `json:"campaign_name"`
	ProductName string `json:"product_name"`
	HTMLLink    string `json:"html_link"`
	JSLinks     string `json:"js_links"`
	ClickURL    string `json:"click_url"`
	LinkType    string `json:"link_type"`
}

