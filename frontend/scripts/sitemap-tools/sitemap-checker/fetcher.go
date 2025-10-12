package main

import (
	"net/http"
	"strings"
	// "time"
)

func ToOfflineUrl(url string) string {
    if mode == "local" {
        return strings.Replace(url, "https://hexmos.com", "http://localhost:4321", 1)
    }
    return url
}


func fetchText(url string) (*http.Response, error) {
	req, err := http.NewRequest("GET", url, nil)
	if err != nil {
		return nil, err
	}
	req.Header.Set("User-Agent", "GoSitemapChecker/1.0")
	return client.Do(req)
}

func validateCanonical(url string) bool {
	req, _ := http.NewRequest("HEAD", url, nil)
	req.Header.Set("User-Agent", "GoSitemapChecker/1.0")
	resp, err := client.Do(req)
	if err != nil {
		return false
	}
	defer resp.Body.Close()
	return resp.StatusCode == 200
}
