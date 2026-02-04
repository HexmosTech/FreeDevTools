package pro

import (
	"encoding/base64"
	"encoding/json"
	"fmt"
	"net/http"
	"path/filepath"
	"strings"
)

// ProMiddleware is deprecated - pro checks are handled on frontend only
// This middleware is kept for compatibility but is now a no-op
func ProMiddleware(next http.Handler) http.Handler {
	return next
}

// shouldSkipProCheck returns true if the request path should skip pro status checking
// This includes static files, public files, and files with extensions
func shouldSkipProCheck(path string) bool {
	// Skip static and public directories
	if strings.Contains(path, "/static/") || strings.Contains(path, "/public/") {
		return true
	}

	// Skip files with extensions (common static file extensions)
	ext := strings.ToLower(filepath.Ext(path))
	staticExtensions := []string{
		".svg", ".png", ".jpg", ".jpeg", ".gif", ".webp", ".ico",
		".css", ".js", ".json", ".xml", ".txt", ".pdf",
		".woff", ".woff2", ".ttf", ".eot", ".otf",
		".mp4", ".webm", ".mp3", ".wav",
		".zip", ".tar", ".gz",
	}

	for _, staticExt := range staticExtensions {
		if ext == staticExt {
			return true
		}
	}

	return false
}

// extractUserInfoFromRequest extracts user ID and JWT from request
// Checks hexmos-one-id cookie first (fast path), then hexmos-one cookie (needs decoding)
// Returns: (userId, jwt, cookieSource)
func extractUserInfoFromRequest(r *http.Request) (string, string, string) {
	// First, try to get user ID from hexmos-one-id cookie (fast path, no JWT decoding needed)
	pIdCookie, err := r.Cookie("hexmos-one-id")
	if err == nil && pIdCookie != nil && pIdCookie.Value != "" {
		// Get JWT from hexmos-one cookie for API call
		jwtCookie, err := r.Cookie("hexmos-one")
		if err == nil && jwtCookie != nil && jwtCookie.Value != "" {
			return pIdCookie.Value, jwtCookie.Value, "hexmos-one-id cookie"
		}
		// If hexmos-one-id exists but hexmos-one doesn't, return user ID but no JWT
		return pIdCookie.Value, "", "hexmos-one-id cookie (JWT missing)"
	}

	// Fallback: get JWT from hexmos-one cookie and decode to get user ID
	jwtCookie, err := r.Cookie("hexmos-one")
	if err == nil && jwtCookie != nil && jwtCookie.Value != "" {
		jwt := jwtCookie.Value
		uId, err := extractUserIdFromJWT(jwt)
		if err == nil && uId != "" {
			return uId, jwt, "hexmos-one cookie"
		}
		// JWT exists but couldn't decode user ID
		return "", jwt, "hexmos-one cookie (decode failed)"
	}

	return "", "", "no cookies found"
}

// extractUserIdFromJWT extracts the uId from JWT payload without verification
func extractUserIdFromJWT(jwt string) (string, error) {
	// Split JWT into parts
	parts := strings.Split(jwt, ".")
	if len(parts) != 3 {
		return "", fmt.Errorf("invalid JWT format: expected 3 parts, got %d", len(parts))
	}

	// Decode payload (second part)
	payload, err := base64.RawURLEncoding.DecodeString(parts[1])
	if err != nil {
		return "", fmt.Errorf("failed to decode JWT payload: %w", err)
	}

	// Parse JSON payload
	var claims map[string]interface{}
	if err := json.Unmarshal(payload, &claims); err != nil {
		return "", fmt.Errorf("failed to parse JWT payload: %w", err)
	}

	// Extract uId (check multiple possible field names)
	uId, ok := claims["uId"].(string)
	if ok && uId != "" {
		return uId, nil
	}

	// Try alternative field names
	if parseUserId, ok := claims["parseUserId"].(string); ok && parseUserId != "" {
		return parseUserId, nil
	}
	if userId, ok := claims["userId"].(string); ok && userId != "" {
		return userId, nil
	}
	if sub, ok := claims["sub"].(string); ok && sub != "" {
		return sub, nil
	}

	return "", fmt.Errorf("uId not found in JWT payload")
}

