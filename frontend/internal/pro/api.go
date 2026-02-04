package pro

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"time"
)

const (
	parseAPIBaseURL = "https://parse.apps.hexmos.com/parse"
	getLicencesPath = "/functions/getLicences"
	freedevtoolsAppID = "GQIJtnbPZq"
)

// LicenceResponse represents the response from getLicences API
type LicenceResponse struct {
	Result struct {
		Success bool   `json:"success"`
		Message string `json:"message"`
		Data    struct {
			ExpirationDate      *string `json:"expirationDate"`
			ExpireAt            *string `json:"expireAt"`
			Name                string  `json:"name"`
			ActiveStatus        bool    `json:"activeStatus"`
			LicencePlansPointer string  `json:"licencePlansPointer"`
			LicenceID           string  `json:"licenceId"`
			Platform            string  `json:"platform"`
		} `json:"data"`
	} `json:"result"`
}

// CheckProStatus makes a POST request to Parse API to check if user has active pro licence
// Returns true if activeStatus is true, false otherwise
func CheckProStatus(jwt string) (bool, error) {
	if jwt == "" {
		return false, fmt.Errorf("JWT token is empty")
	}

	// Extract userId from JWT for the request body
	userId, err := extractUserIdFromJWT(jwt)
	if err != nil {
		return false, fmt.Errorf("failed to extract userId from JWT: %w", err)
	}

	// Create HTTP client with timeout
	client := &http.Client{
		Timeout: 5 * time.Second,
	}

	// Prepare request body (must include userId as shown in curl example)
	requestBody := map[string]interface{}{
		"appId":   freedevtoolsAppID,
		"userId":  userId,
		"renewal": false,
	}

	bodyJSON, err := json.Marshal(requestBody)
	if err != nil {
		return false, fmt.Errorf("failed to marshal request body: %w", err)
	}

	// Create request
	url := parseAPIBaseURL + getLicencesPath
	req, err := http.NewRequest("POST", url, bytes.NewBuffer(bodyJSON))
	if err != nil {
		return false, fmt.Errorf("failed to create request: %w", err)
	}

	// Set headers
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", "Bearer "+jwt)

	// Make request
	resp, err := client.Do(req)
	if err != nil {
		return false, fmt.Errorf("failed to make request: %w", err)
	}
	defer resp.Body.Close()

	// Read response body
	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return false, fmt.Errorf("failed to read response body: %w", err)
	}

	// Check status code
	if resp.StatusCode != http.StatusOK {
		return false, fmt.Errorf("API returned status %d: %s", resp.StatusCode, string(body))
	}

	// Parse response
	var licenceResp LicenceResponse
	if err := json.Unmarshal(body, &licenceResp); err != nil {
		return false, fmt.Errorf("failed to parse response: %w", err)
	}

	// Check if success and activeStatus is true
	if licenceResp.Result.Success && licenceResp.Result.Data.ActiveStatus {
		return true, nil
	}

	return false, nil
}

