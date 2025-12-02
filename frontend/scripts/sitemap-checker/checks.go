package main

import (
	"crypto/md5"
	"fmt"
	"io"
	"regexp"
	"strings"
	"sync"
)

var (
	reRobots   = regexp.MustCompile(`(?i)<meta[^>]+name=["']robots["'][^>]*content=["']([^"']+)["']`)
	reCanonical = regexp.MustCompile(`(?i)<link[^>]+rel=["']canonical["'][^>]*href=["']([^"']+)["']`)
	reTitle    = regexp.MustCompile(`(?i)<title[^>]*>(.*?)</title>`)
	reSoft404  = regexp.MustCompile(`(?i)(not found|error 404)`)
)
var seenHashes sync.Map // instead of map + mutex


func checkUrl(url string, headOnly bool) UrlResult {
	result := UrlResult{URL: url, Status: 0, Indexable: true, Issues: []string{}}

	resp, err := fetchText(url, headOnly)
	if err != nil || resp == nil {
		result.Status = 0
		result.Indexable = false
		result.Issues = append(result.Issues, "Fetch failed")
		return result
	}
	defer func() {
		// Always drain the body to ensure connection is properly closed
		io.Copy(io.Discard, resp.Body)
		resp.Body.Close()
	}()

	result.Status = resp.StatusCode

	// HTTP status checks
	if resp.StatusCode >= 300 && resp.StatusCode <= 308 {
		result.Indexable = false
		result.Issues = append(result.Issues, "Redirect")
	}
	if resp.StatusCode == 404 {
		result.Indexable = false
		result.Issues = append(result.Issues, "Not found (404)")
	}
	if resp.StatusCode >= 500 {
		result.Indexable = false
		result.Issues = append(result.Issues, "Server error (5xx)")
	}

	// If HEAD request, skip reading body
	if headOnly {
		return result
	}

	// Existing GET handling logic (reading HTML, parsing meta, canonical, soft 404, duplicates)
	ct := resp.Header.Get("Content-Type")
	if resp.StatusCode == 200 && strings.Contains(ct, "text/html") {
		bodyBytes, _ := io.ReadAll(io.LimitReader(resp.Body, 100*1024)) // 100KB only
		body := string(bodyBytes)

		// --- Meta robots ---
		if match := reRobots.FindStringSubmatch(body); len(match) > 1 {
			if strings.Contains(strings.ToLower(match[1]), "noindex") {
				result.Indexable = false
				result.Issues = append(result.Issues, "Noindex tag")
			}
		}

		// --- Canonical ---
		if match := reCanonical.FindStringSubmatch(body); len(match) > 1 {
			canonical := match[1]
			if mode == "local" && strings.HasPrefix(canonical, "https://hexmos.com") {
				canonical = ToOfflineUrl(canonical)
			}
			if canonical != url {
				if !validateCanonical(canonical) {
					result.Indexable = false
					result.Issues = append(result.Issues, fmt.Sprintf("Canonical -> %s (INVALID)", canonical))
				} else {
					result.Issues = append(result.Issues, fmt.Sprintf("Canonical -> %s", canonical))
				}
			}
		}

		// --- Soft 404 ---
		bodyText := strings.TrimSpace(stripHTML(body))
		if len(bodyText) < 200 || reSoft404.MatchString(bodyText) {
			result.Indexable = false
			result.Issues = append(result.Issues, "Soft 404 suspected")
		}

		// --- Duplicate detection ---
		title := reTitle.FindStringSubmatch(body)
		var pageTitle string
		if len(title) > 1 {
			pageTitle = title[1]
		}
		sample := pageTitle + bodyText[:min(500, len(bodyText))]
		hash := fmt.Sprintf("%x", md5.Sum([]byte(sample)))
		if existing, loaded := seenHashes.LoadOrStore(hash, url); loaded {
			result.Indexable = false
			result.Issues = append(result.Issues, "Duplicate of "+existing.(string))
		}
	}

	return result
}


// stripHTML removes all tags quickly
func stripHTML(input string) string {
	return regexp.MustCompile(`<[^>]*>`).ReplaceAllString(input, "")
}
