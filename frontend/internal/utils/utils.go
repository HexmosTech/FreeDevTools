package utils

import (
	"encoding/base64"
	"encoding/json"
	"fmt"
	"net/http"
	"net/url"
	"strconv"
	"strings"
)

// MatchPagination checks if the path is a valid page number
func MatchPagination(path string) (int, bool) {
	if i, err := strconv.Atoi(path); err == nil {
		return i, true
	}
	return 0, false
}

func MatchIndex(path string) bool {
	return path == ""
}

// unescape attempts to unescape a string. If it fails, it returns the original string.
func unescape(s string) string {
	if res, err := url.QueryUnescape(s); err == nil {
		return res
	}
	return s
}

func MatchCategory(path string) (string, bool) {
	parts := strings.Split(path, "/")
	if len(parts) == 1 && parts[0] != "" {
		return unescape(parts[0]), true
	}
	return "", false
}

func MatchCategoryPagination(path string) (category string, page int, ok bool) {
	parts := strings.Split(path, "/")
	if len(parts) == 2 {
		page, err := strconv.Atoi(parts[1])
		if err == nil {
			return unescape(parts[0]), page, true
		}
	}
	return "", 0, false
}

func MatchSubcategory(path string) (category, subcategory string, ok bool) {
	parts := strings.Split(path, "/")
	if len(parts) == 2 {
		return unescape(parts[0]), unescape(parts[1]), true
	}
	return "", "", false
}

func MatchDetailPage(path string) (category, slug string, ok bool) {
	parts := strings.Split(path, "/")
	if len(parts) == 2 {
		if _, err := strconv.Atoi(parts[1]); err != nil {
			category = unescape(parts[0])
			slug = unescape(parts[1])
			return category, slug, true
		}
	}
	return "", "", false
}

func MatchSubcategoryPagination(path string) (category, subcategory string, page int, ok bool) {
	parts := strings.Split(path, "/")
	if len(parts) == 3 {
		if page, err := strconv.Atoi(parts[2]); err == nil {
			return unescape(parts[0]), unescape(parts[1]), page, true
		}
	}
	return "", "", 0, false
}

func MatchSubcategoryDetail(path string) (category, subcategory, slug string, ok bool) {
	parts := strings.Split(path, "/")
	if len(parts) == 3 {
		if _, err := strconv.Atoi(parts[2]); err != nil {
			return unescape(parts[0]), unescape(parts[1]), unescape(parts[2]), true
		}
	}
	return "", "", "", false
}

func MatchDeepDetail(path string) (category, subcategory, slug string, ok bool) {
	parts := strings.Split(path, "/")
	if len(parts) >= 4 {
		return unescape(parts[0]), unescape(parts[1]), unescape(parts[len(parts)-1]), true
	}
	return "", "", "", false
}

// IsExceptionPath checks if a path is a known man page slug that conflicts with pagination
func IsExceptionPath(path string) bool {
	exceptionPaths := map[string]bool{
		"games/puzzle-and-logic-games/2048": true,
	}
	return exceptionPaths[path]
}

// GetUserIDFromCookie extracts the user ID from the "hexmos-one-id" cookie
// or falls back to decoding the "hexmos-one" JWT cookie.
func GetUserIDFromCookie(r *http.Request) (string, error) {
	// First, try to get user ID from hexmos-one-id cookie (fast path)
	cookie, err := r.Cookie("hexmos-one-id")
	if err == nil && cookie.Value != "" {
		return cookie.Value, nil
	}

	// Fallback: get JWT from hexmos-one cookie and decode to get user ID
	jwtCookie, err := r.Cookie("hexmos-one")
	if err == nil && jwtCookie.Value != "" {
		uId, err := extractUserIdFromJWT(jwtCookie.Value)
		if err == nil && uId != "" {
			return uId, nil
		}
	}

	return "", fmt.Errorf("user ID not found in cookies")
}

// extractUserIdFromJWT extracts the uId from JWT payload without verification.
// Logic based on hexmos-one JWT structure.
func extractUserIdFromJWT(jwt string) (string, error) {
	parts := strings.Split(jwt, ".")
	if len(parts) != 3 {
		return "", fmt.Errorf("invalid JWT format")
	}

	payload, err := base64.RawURLEncoding.DecodeString(parts[1])
	if err != nil {
		return "", fmt.Errorf("failed to decode JWT payload")
	}

	var claims map[string]interface{}
	if err := json.Unmarshal(payload, &claims); err != nil {
		return "", fmt.Errorf("failed to parse JWT payload")
	}

	// Check multiple possible field names for user identity
	for _, key := range []string{"uId", "parseUserId", "userId", "sub"} {
		if val, ok := claims[key].(string); ok && val != "" {
			return val, nil
		}
	}

	return "", fmt.Errorf("user ID not found in JWT payload")
}
