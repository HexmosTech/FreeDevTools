package main

import (
	"bytes"
	"context"
	"encoding/json"
	"errors"
	"fdt-templ/internal/config"
	"fmt"
	"io"
	"math/rand"
	"net/http"
	"strings"
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
    if cfg.GeminiKeys == "" {
        return "", errors.New("environment variable GEMINI_API_KEY not set")
    }

    // Split and shuffle keys to ensure randomness
    keys := strings.Split(cfg.GeminiKeys, ",")
    rand.Seed(time.Now().UnixNano())
    rand.Shuffle(len(keys), func(i, j int) { keys[i], keys[j] = keys[j], keys[i] })

    var lastErr error
    for _, apiKey := range keys {
		fmt.Println("Key Tried =>",apiKey)
        apiKey = strings.TrimSpace(apiKey)
        if apiKey == "" {
            continue
        }

        result, err := executeGeminiRequest(prompt, schema, apiKey)
        if err == nil {
            return result, nil
        }
        
        lastErr = err
        // Optional: Log the error here to see which key failed
    }

    return "", fmt.Errorf("all Gemini keys failed. Last error: %w", lastErr)
}

// Helper to handle the actual HTTP logic
func executeGeminiRequest(prompt string, schema interface{}, apiKey string) (string, error) {
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
        return "", fmt.Errorf("failed to parse Gemini response: %w", err)
    }

    if jr.Error.Code != 0 {
        return "", fmt.Errorf("API Error %d: %s", jr.Error.Code, jr.Error.Message)
    }
    
    if len(jr.Candidates) == 0 || len(jr.Candidates[0].Content.Parts) == 0 {
        return "", errors.New("no content from Gemini")
    }

    return jr.Candidates[0].Content.Parts[0].Text, nil
}