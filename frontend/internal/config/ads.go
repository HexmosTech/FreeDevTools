package config

// ShouldShowAds checks if ads should be shown for a given page type
// Pro checks are handled on frontend, so this just checks config
func ShouldShowAds(pageType string) bool {
	return GetAdsEnabled()
}

// GetEffectiveAdTypes returns ad types
// Pro checks are handled on frontend, so this just uses GetEnabledAdTypes
func GetEffectiveAdTypes(pageType string) map[string]bool {
	return GetEnabledAdTypes(pageType)
}

