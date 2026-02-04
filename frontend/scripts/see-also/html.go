package main

import (
	"html"
	"regexp"
	"strings"

	htmlparser "golang.org/x/net/html"
)

// StripHTML removes HTML tags from content
func StripHTML(htmlContent string) string {
	if htmlContent == "" {
		return ""
	}

	// Unescape HTML entities
	text := html.UnescapeString(htmlContent)

	// Parse HTML and extract text
	doc, err := htmlparser.Parse(strings.NewReader(text))
	if err != nil {
		// Fallback: use regex if parsing fails
		return stripHTMLRegex(text)
	}

	var textBuilder strings.Builder
	extractText(doc, &textBuilder)
	cleanText := textBuilder.String()

	// Clean up extra whitespace
	cleanText = regexp.MustCompile(`\s+`).ReplaceAllString(cleanText, " ")
	return strings.TrimSpace(cleanText)
}

func extractText(n *htmlparser.Node, builder *strings.Builder) {
	if n.Type == htmlparser.TextNode {
		builder.WriteString(n.Data)
	}
	for c := n.FirstChild; c != nil; c = c.NextSibling {
		extractText(c, builder)
	}
}

func stripHTMLRegex(text string) string {
	// Remove script and style tags and their content
	re := regexp.MustCompile(`(?i)<(script|style)[^>]*>.*?</\1>`)
	text = re.ReplaceAllString(text, "")

	// Remove HTML tags
	re = regexp.MustCompile(`<[^>]+>`)
	text = re.ReplaceAllString(text, " ")

	// Clean up whitespace
	text = regexp.MustCompile(`\s+`).ReplaceAllString(text, " ")
	return strings.TrimSpace(text)
}

