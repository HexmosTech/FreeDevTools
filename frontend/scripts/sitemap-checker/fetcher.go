package main

import (
	"io"
	"net/http"
	"net/url"
	"strings"
	// "time"
)

func ToOfflineUrl(url string) string {
    if mode == "local" {
        return strings.Replace(url, "https://hexmos.com", "http://localhost:4321", 1)
    }
    return url
}

// getHostHeader determines the Host header value based on the request URL and mode
func getHostHeader(requestUrl string) string {
	parsedUrl, err := url.Parse(requestUrl)
	if err != nil {
		return ""
	}
	
	host := parsedUrl.Hostname()
	
	// If requesting localhost or 127.0.0.1, set Host header based on mode
	if host == "localhost" || host == "127.0.0.1" || strings.HasPrefix(host, "127.0.0.1") {
		if mode == "local" {
			return "hexmos-local.com"
		}
		return "hexmos.com"
	}
	
	// For other hosts, use the actual hostname
	return host
}

func fetchText(url string, headOnly bool) (*http.Response, error) {
	var req *http.Request
	var err error
	if headOnly {
		req, err = http.NewRequest("HEAD", url, nil)
	} else {
		req, err = http.NewRequest("GET", url, nil)
	}
	if err != nil {
		return nil, err
	}
	req.Header.Set("User-Agent", "GoSitemapChecker/1.0")
	// Disable keep-alive for this request to avoid connection reuse issues
	req.Close = true
	
	// Set Host header for nginx routing
	hostHeader := getHostHeader(url)
	if hostHeader != "" {
		req.Host = hostHeader
		req.Header.Set("Host", hostHeader)
	}
	
	return client.Do(req)
}


func validateCanonical(url string) bool {
	req, _ := http.NewRequest("HEAD", url, nil)
	req.Header.Set("User-Agent", "GoSitemapChecker/1.0")
	// Disable keep-alive for this request
	req.Close = true
	
	// Set Host header for nginx routing
	hostHeader := getHostHeader(url)
	if hostHeader != "" {
		req.Host = hostHeader
		req.Header.Set("Host", hostHeader)
	}
	
	resp, err := client.Do(req)
	if err != nil {
		return false
	}
	defer resp.Body.Close()
	// Drain the body even for HEAD requests to ensure connection is properly closed
	io.Copy(io.Discard, resp.Body)
	return resp.StatusCode == 200
}
