---
title: "Streaming LLM Responses in Go: A Terminal Chat Client for Any OpenAI-Compatible API"
date: 2026-10-18
description: "Build a terminal chat client in Go that streams server-sent events from any OpenAI-compatible API, using only the standard library, and handles empty events, dropped connections, and incomplete answers without corrupting chat history."
tags: [Go, LLM, streaming, API]
author: "Athreya"
feature_image: "./cover.webp"
slug: "streaming-llm-responses-in-go-terminal-chat-client"
---

A terminal chat feels slow when the screen stays blank until the model finishes its answer. Streaming solves that by sending text as it is generated: a Go client posts a request with `stream: true`, reads server-sent events, and prints each content delta.

The difficult part is handling empty events, dropped connections, and incomplete answers without corrupting chat history. This tutorial builds a terminal client with Go's standard library and explains how to handle those failure cases.

## Build a Streaming Chat Client

A terminal chat feels sluggish when it waits for the entire answer before printing anything. Server-sent events (SSE) solve the display problem: an OpenAI-compatible endpoint returns text in chunks, and a small Go program writes each chunk to stdout as it arrives. The implementation below uses only the standard library and keeps conversation history between prompts.

### What Streaming Changes

A normal chat completion returns a response body after generation. Streaming sends small response events while the model is generating, so the terminal can show the first text before the entire answer is complete.

The network still needs time to connect and receive the first event. And some events contain metadata or role information rather than visible text.

Measure two durations separately:

- **Time to first visible character** starts when the HTTP request begins and ends when a nonempty content delta arrives.
- **Total response time** ends when the stream reaches its completion marker or the connection closes.

Do not compare one provider's first-byte timing with another provider's first-character timing.

| Mode          | First visible character         | Full answer       | How to measure                       |
| ------------- | ------------------------------- | ----------------- | ------------------------------------ |
| Non-streaming | Usually at completed response   | At HTTP completion | Record time to completed body        |
| Streaming     | On first nonempty delta         | At final event    | Record first delta and `[DONE]`      |

The important distinction is between the first visible text and the completed answer. Record both timings for the same request.

### What the Stream Looks Like

A typical OpenAI-compatible SSE response uses `data:` lines separated by blank lines:

```text
data: {"choices":[{"delta":{"role":"assistant"}}]}

data: {"choices":[{"delta":{"content":"Hello"}}]}

data: {"choices":[{"delta":{"content":" there"}}]}

data: [DONE]
```

Some services include usage in a final event; others omit it. Empty deltas and extra JSON fields should not break the client.

### Request, Stream, Terminal

```text
Terminal input -> HTTP POST -> model endpoint -> SSE events -> Go scanner -> stdout
```

## Read the Stream in Go

A provider such as [AI/ML API](https://aimlapi.com/) supplies an API key and an OpenAI-compatible endpoint. Take the endpoint URL and model identifier from the provider's current documentation, and keep the key in an environment variable.

The following complete program uses only the Go standard library. Save it as `main.go`:

```go
package main

import (
	"bufio"
	"bytes"
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"net/http"
	"os"
	"strings"
	"time"
)

type Message struct {
	Role    string `json:"role"`
	Content string `json:"content"`
}

type Request struct {
	Model    string    `json:"model"`
	Messages []Message `json:"messages"`
	Stream   bool      `json:"stream"`
}

type Chunk struct {
	Choices []struct {
		Delta struct {
			Content string `json:"content"`
		} `json:"delta"`
	} `json:"choices"`
}

func stream(ctx context.Context, client *http.Client, endpoint, key, model string, history []Message) (string, error) {
	payload, err := json.Marshal(Request{Model: model, Messages: history, Stream: true})
	if err != nil {
		return "", err
	}
	req, err := http.NewRequestWithContext(ctx, http.MethodPost, endpoint, bytes.NewReader(payload))
	if err != nil {
		return "", err
	}
	req.Header.Set("Authorization", "Bearer "+key)
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Accept", "text/event-stream")
	started := time.Now()
	resp, err := client.Do(req)
	if err != nil {
		return "", err
	}
	defer resp.Body.Close()
	if resp.StatusCode != http.StatusOK {
		body, _ := io.ReadAll(io.LimitReader(resp.Body, 4096))
		return "", fmt.Errorf("HTTP %d: %s", resp.StatusCode, strings.TrimSpace(string(body)))
	}
	scanner := bufio.NewScanner(resp.Body)
	scanner.Buffer(make([]byte, 64*1024), 4*1024*1024)
	var result strings.Builder
	first := true
	done := false
	for scanner.Scan() {
		line := scanner.Text()
		if !strings.HasPrefix(line, "data:") {
			continue
		}
		data := strings.TrimSpace(strings.TrimPrefix(line, "data:"))
		if data == "[DONE]" {
			done = true
			break
		}
		if data == "" {
			continue
		}
		var chunk Chunk
		if err := json.Unmarshal([]byte(data), &chunk); err != nil {
			return result.String(), fmt.Errorf("invalid stream event: %w", err)
		}
		for _, choice := range chunk.Choices {
			delta := choice.Delta.Content
			if delta == "" {
				continue
			}
			if first {
				fmt.Fprintf(os.Stderr, "\nFirst text after %s\n", time.Since(started).Round(time.Millisecond))
				first = false
			}
			fmt.Print(delta)
			result.WriteString(delta)
		}
	}
	if err := scanner.Err(); err != nil {
		return result.String(), err
	}
	if !done {
		return result.String(), errors.New("stream closed before [DONE]")
	}
	fmt.Fprintf(os.Stderr, "\nTotal time %s\n", time.Since(started).Round(time.Millisecond))
	fmt.Println()
	return result.String(), nil
}

func main() {
	key := os.Getenv("AIML_API_KEY")
	endpoint := os.Getenv("AIML_CHAT_URL")
	model := os.Getenv("AIML_MODEL")
	if key == "" || endpoint == "" || model == "" {
		fmt.Fprintln(os.Stderr, "Set AIML_API_KEY, AIML_CHAT_URL and AIML_MODEL")
		os.Exit(2)
	}
	client := &http.Client{}
	history := []Message{}
	input := bufio.NewScanner(os.Stdin)
	fmt.Println("Type /quit to exit")
	for {
		fmt.Print("> ")
		if !input.Scan() {
			break
		}
		question := strings.TrimSpace(input.Text())
		if question == "/quit" {
			break
		}
		if question == "" {
			continue
		}
		history = append(history, Message{Role: "user", Content: question})
		ctx, cancel := context.WithTimeout(context.Background(), 2*time.Minute)
		answer, err := stream(ctx, client, endpoint, key, model, history)
		cancel()
		if err != nil {
			fmt.Fprintln(os.Stderr, "Request failed:", err)
			history = history[:len(history)-1]
			continue
		}
		history = append(history, Message{Role: "assistant", Content: answer})
	}
	if err := input.Err(); err != nil {
		fmt.Fprintln(os.Stderr, err)
	}
}
```

A few details worth noticing:

- `scanner.Buffer` raises the maximum line size to 4 MB. The default `bufio.Scanner` limit is 64 KB, which an unusually long event line can exceed.
- Lines that don't start with `data:` (comments, `event:` lines, keep-alives) are skipped.
- Chunks with an empty `content` delta, like the initial role-only event, are ignored rather than printed.
- The `done` flag records whether `[DONE]` actually arrived. Without it, a dropped connection looks exactly like a finished answer.

## Build a Terminal Chat

Create a new directory, save `main.go`, set the three environment variables, and run it:

```bash
export AIML_API_KEY="..."        # load from a secret manager
export AIML_CHAT_URL="..."       # the documented chat completions URL
export AIML_MODEL="..."          # a currently supported model ID
go run main.go
```

Never paste a live key into source code or screenshots.

Each user message is appended to the conversation history. A successful streamed answer is appended as an assistant message. On HTTP or streaming failure, the newest user message is removed so a retry does not silently duplicate it.

The program retains history in memory only. Closing the process discards it.

## Handle Errors and Partial Streams

| HTTP status | Likely cause                   | Action                                                  |
| ----------- | ------------------------------ | ------------------------------------------------------- |
| 401         | Missing or invalid credential  | Confirm key, account, and authorization header          |
| 404         | Wrong endpoint or model ID     | Verify exact base URL, route, and catalog identifier    |
| 429         | Rate or quota limit            | Read `Retry-After`, reduce concurrency, and retry later |
| 5xx         | Provider-side failure          | Retry with capped exponential backoff                   |
| Early EOF   | Network interruption           | Mark answer incomplete and do not append it to history  |

Retries require care. A request that fails after printing partial output may already have consumed tokens, and repeating it can incur a second charge. Do not automatically replay a partially completed request without telling the operator.

For 429 responses, honor `Retry-After` when present. Set a finite retry limit and add jitter when multiple clients share a quota.

## Try Other Models

The same program can target different models by changing `AIML_MODEL`. A [Qwen API setup guide](https://aimlapi.com/build-with-qwen-api) documents one model family, and [Kimi K2](https://aimlapi.com/kimi-k2) is another candidate. Confirm the currently supported API model IDs from the live provider catalog before setting the environment variable.

Use the same prompt for both, such as _"Explain how to close an HTTP response body in Go in 80 words."_ Record time to first text, total duration, and any provider-reported token usage.

Do not infer quality from latency alone. A slower response can still be more useful if it is more accurate.

## FAQ

**Does an OpenAI-compatible API guarantee identical streaming behavior?**
No. Request and response conventions are similar, but usage events, error formats, and supported parameters can differ.

**Why use `bufio.Scanner`?**
It handles line-oriented SSE frames conveniently. Increase the token buffer limit, because the default scanner limit can reject unusually long event lines.

**Can the terminal client recover a broken answer automatically?**
Not safely in every case. A partial answer should be flagged, and the operator should decide whether to retry.

**Does streaming reduce total token cost?**
Not inherently. Streaming changes delivery timing, not the number of generated tokens.

## What This Client Handles

A streaming client can be built with `net/http`, `encoding/json`, and `bufio.Scanner`. The `[DONE]` marker distinguishes a completed response from an interrupted stream. Credentials belong in environment variables. Conversation history should be updated only after successful completion. Compare providers with actual request logs and the same prompt.

For repeatable timing comparisons, save the Go version, the selected model ID, and the terminal output from the same prompt. The timing values printed by the program are per-request observations, not a general provider benchmark.
