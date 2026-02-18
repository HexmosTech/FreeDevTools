package main

import (
	"bytes"
	"context"
	"encoding/json"
	"errors"
	"fdt-templ/internal/config"
	"fmt"
	"io"
	"net/http"
	"time"
)

const (
	geminiAPIURL   = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent"
	requestTimeout = 15 * time.Second
)

type geminiRequest struct {
	Contents []struct {
		Parts []struct {
			Text string `json:"text"`
		} `json:"parts"`
	} `json:"contents"`
	GenerationConfig struct {
		ResponseMimeType string      `json:"response_mime_type"`
		ResponseSchema   interface{} `json:"response_schema"` // The magic fix
	} `json:"generation_config"`
}

type geminiResponse struct {
	Candidates []struct {
		Content struct {
			Parts []struct {
				Text string `json:"text"`
			} `json:"parts"`
		} `json:"content"`
		// ignoring finishReason, index etc
	} `json:"candidates"`
	Error struct {
		Code    int    `json:"code"`
		Message string `json:"message"`
	} `json:"error"`
}

func QueryGemini(prompt string, schema interface{}) (string, error) {
	cfg := config.GetConfig()
	apiKey := cfg.GeminiKeys
	if apiKey == "" {
		return "", errors.New("environment variable GEMINI_API_KEY not set")
	}

	reqBody := geminiRequest{}
	reqBody.Contents = []struct {
		Parts []struct {
			Text string `json:"text"`
		} `json:"parts"`
	}{{
		Parts: []struct {
			Text string `json:"text"`
		}{{Text: prompt}},
	}}

	// Strict Enforcement
	reqBody.GenerationConfig.ResponseMimeType = "application/json"
	reqBody.GenerationConfig.ResponseSchema = schema

	bodyBytes, err := json.Marshal(reqBody)
	if err != nil {
		return "", err
	}

	ctx, cancel := context.WithTimeout(context.Background(), requestTimeout)
	defer cancel()

	req, err := http.NewRequestWithContext(ctx, "POST", geminiAPIURL, bytes.NewReader(bodyBytes))
	if err != nil {
		return "", err
	}
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("x-goog-api-key", apiKey)

	resp, err := http.DefaultClient.Do(req)
	if err != nil {
		return "", err
	}
	defer resp.Body.Close()
	respBytes, err := io.ReadAll(resp.Body)
	if err != nil {
		return "", err
	}

	var jr geminiResponse
	if err := json.Unmarshal(respBytes, &jr); err != nil {
		return "", fmt.Errorf("failed to parse Gemini response: %w, raw: %s", err, string(respBytes))
	}

	if jr.Error.Code != 0 {
		return "", fmt.Errorf("Gemini API returned error: %d – %s", jr.Error.Code, jr.Error.Message)
	}
	if len(jr.Candidates) == 0 || len(jr.Candidates[0].Content.Parts) == 0 {
		return "", fmt.Errorf("no content from Gemini, raw response: %s", string(respBytes))
	}

	return jr.Candidates[0].Content.Parts[0].Text, nil
}
