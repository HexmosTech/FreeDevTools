package main

import (
	"regexp"
	"sort"
	"strings"
)

var stopwords = map[string]bool{
	"the": true, "is": true, "and": true, "or": true, "to": true, "in": true, "of": true, "for": true,
	"on": true, "a": true, "an": true, "with": true, "that": true, "this": true, "it": true, "as": true,
	"by": true, "be": true, "are": true, "at": true, "from": true, "but": true, "not": true, "your": true,
	"you": true, "we": true, "our": true, "they": true, "their": true, "has": true, "have": true, "had": true,
	"can": true, "will": true, "would": true, "could": true, "should": true, "may": true, "might": true, "must": true,
	"about": true, "into": true, "through": true, "during": true, "before": true, "after": true, "above": true,
	"below": true, "up": true, "down": true, "out": true, "off": true, "over": true, "under": true, "again": true,
	"further": true, "then": true, "once": true, "here": true, "there": true, "when": true, "where": true,
	"why": true, "how": true, "all": true, "each": true, "other": true, "some": true, "such": true, "only": true,
	"own": true, "same": true, "so": true, "than": true, "too": true, "very": true, "just": true,
	"don": true, "now": true, "more": true, "use": true, "get": true, "see": true, "make": true, "find": true,
	"know": true, "take": true, "come": true, "think": true, "look": true, "want": true, "give": true, "tell": true,
	"work": true, "call": true, "try": true, "ask": true, "need": true, "feel": true, "become": true, "leave": true,
	"put": true, "mean": true, "keep": true, "let": true, "begin": true, "seem": true, "help": true, "talk": true,
	"turn": true, "start": true, "show": true, "hear": true, "play": true, "run": true, "move": true, "like": true,
	"live": true, "believe": true, "hold": true, "bring": true, "happen": true, "write": true, "provide": true,
	"sit": true, "stand": true, "lose": true, "pay": true, "meet": true, "include": true, "continue": true, "set": true,
	"learn": true, "change": true, "lead": true, "understand": true, "watch": true, "follow": true, "stop": true,
	"create": true, "speak": true, "read": true, "allow": true, "add": true, "spend": true, "grow": true, "open": true,
	"walk": true, "win": true, "offer": true, "remember": true, "love": true, "consider": true,
}

// GetTopKeywords extracts top N keywords from text using the same logic as SeeAlso.tsx
func GetTopKeywords(text string, n int) []string {
	if text == "" {
		return []string{}
	}

	// Normalize: lowercase, replace non-alphanumeric with spaces
	normalized := regexp.MustCompile(`[^a-z0-9\s]`).ReplaceAllString(strings.ToLower(text), " ")

	// Split into words
	words := strings.Fields(normalized)

	// Filter: length > 3 and not in stopwords
	filteredWords := make([]string, 0)
	for _, w := range words {
		if len(w) > 3 && !stopwords[w] {
			filteredWords = append(filteredWords, w)
		}
	}

	// Count frequency
	freq := make(map[string]int)
	for _, w := range filteredWords {
		freq[w]++
	}

	// Sort by frequency (descending) and take top N
	type wordFreq struct {
		word  string
		count int
	}
	wordFreqs := make([]wordFreq, 0, len(freq))
	for word, count := range freq {
		wordFreqs = append(wordFreqs, wordFreq{word, count})
	}

	sort.Slice(wordFreqs, func(i, j int) bool {
		return wordFreqs[i].count > wordFreqs[j].count
	})

	topKeywords := make([]string, 0, n)
	for i := 0; i < len(wordFreqs) && i < n; i++ {
		topKeywords = append(topKeywords, wordFreqs[i].word)
	}

	return topKeywords
}

