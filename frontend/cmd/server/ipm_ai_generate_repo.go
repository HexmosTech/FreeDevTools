package main

import (
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
	"net/url"

	_ "github.com/mattn/go-sqlite3"
)

var USE_MOCK = false

type GitHubRelease struct {
	TagName string `json:"tag_name"`
	Name    string `json:"name"`
	Assets  []struct {
		Name      string `json:"name"`
		Size      int64  `json:"size"`
		BrowseUrl string `json:"browser_download_url"`
	} `json:"assets"`
}


const mockData = `{
	"repo": "BLAKE3-team/BLAKE3-13",
	"repo_type": "tool",
	"has_installation": true,
	"installation_methods": [
	  {
		"title": "Install b3sum using Cargo (Recommended)",
		"instructions": [
		  {
			"command": "cargo install b3sum"
		  }
		]
	  },
	  {
		"title": "Download prebuilt b3sum binary for Linux",
		"instructions": [
		  {
			"command": "curl -L https://github.com/BLAKE3-team/BLAKE3/releases/download/1.8.3/b3sum_linux_x64_bin -o b3sum"
		  }
		]
	  },
	  {
		"title": "Download prebuilt b3sum binary for macOS",
		"instructions": [
		  {
			"command": "curl -L https://github.com/BLAKE3-team/BLAKE3/releases/download/1.8.3/b3sum_macos_x64_bin -o b3sum"
		  }
		]
	  },
	  {
		"title": "Download prebuilt b3sum binary for Windows",
		"instructions": [
		  {
			"command": "curl -L https://github.com/BLAKE3-team/BLAKE3/releases/download/1.8.3/b3sum_windows_x64_bin.exe -o b3sum.exe"
		  }
		]
	  },
	  {
		"title": "Build BLAKE3 crate from source",
		"instructions": [
		  {
			"command": "git clone https://github.com/BLAKE3-team/BLAKE3"
		  },
		  {
			"command": "cd BLAKE3"
		  },
		  {
			"command": "cargo install b3sum"
		  }
		]
	  }
	],
	"keywords": [
	  "hash",
	  "cryptography",
	  "blake3",
	  "cli",
	  "rust"
	],
	"post_installation": [
	  "echo 'b3sum installed successfully. You can now use it to hash files.'"
	],
	"prerequisites": [
	  {
		"name": "Rust and Cargo",
		"type": "language_runtime",
		"version": ">=1.31.0"
	  }
	],
	"resources_of_interest": [
	  {
		"reason": "Official documentation for the BLAKE3 crate",
		"title": "BLAKE3 Crate Documentation",
		"type": "documentation",
		"url_or_path": "https://docs.rs/blake3"
	  },
	  {
		"reason": "Official releases page for prebuilt binaries",
		"title": "BLAKE3 Releases",
		"type": "release",
		"url_or_path": "https://github.com/BLAKE3-team/BLAKE3/releases"
	  },
	  {
		"reason": "Main repository for BLAKE3",
		"title": "BLAKE3 GitHub Repository",
		"type": "website",
		"url_or_path": "https://github.com/BLAKE3-team/BLAKE3"
	  },
	  {
		"reason": "Detailed benchmarks of BLAKE3",
		"title": "BLAKE3 Benchmarks",
		"type": "documentation",
		"url_or_path": "https://github.com/BLAKE3-team/BLAKE3-specs/blob/master/benchmarks/bar_chart.py"
	  },
	  {
		"reason": "BLAKE3 design rationale and specifications",
		"title": "BLAKE3 Paper",
		"type": "documentation",
		"url_or_path": "https://github.com/BLAKE3-team/BLAKE3-specs/blob/master/blake3.pdf"
	  }
	]
  }
  `

func fetchLatestRelease(repoName string) (*GitHubRelease, error) {
	u, err := url.Parse("https://api.github.com/repos/")
	if err != nil {
		return nil, err
	}
	finalURL := u.JoinPath(repoName, "releases", "latest").String()

	resp, err := http.Get(finalURL)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("GitHub returned status: %d", resp.StatusCode)
	}

	var release GitHubRelease
	if err := json.NewDecoder(resp.Body).Decode(&release); err != nil {
		return nil, err
	}
	return &release, nil
}

func fetchReadme(repoName string) (string, error) {
	// Try 'main' then 'master' branches for raw content
	branches := []string{"main", "master"}
	var lastErr error

	for _, branch := range branches {
		url, err := url.JoinPath("https://raw.githubusercontent.com", repoName, branch, "README.md")
		if err != nil {
			lastErr = err
			continue
		}
		resp, err := http.Get(url)
		if err != nil {
			lastErr = err
			continue
		}
		defer resp.Body.Close()

		if resp.StatusCode == http.StatusOK {
			body, err := io.ReadAll(resp.Body)
			if err != nil {
				return "", err
			}
			return string(body), nil
		}
		lastErr = fmt.Errorf("status %d", resp.StatusCode)
	}
	return "", fmt.Errorf("tried main/master: %v", lastErr)
}


func handleGenerateRepo() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		SetNoCacheHeaders(w)

		if r.Method != http.MethodPost {
			http.Error(w, "Method Not Allowed", http.StatusMethodNotAllowed)
			return
		}

		// FIX: Define payload structure and decode
		var payload struct {
			Repo string `json:"repo"`
		}
		if err := json.NewDecoder(r.Body).Decode(&payload); err != nil {
			log.Printf("⚠️ [Installerpedia API] Bad JSON: %v", err)
			http.Error(w, "Invalid JSON", http.StatusBadRequest)
			return
		}

		selectedRepo := payload.Repo

		// 1. Fetch Context
		readmeBody, _ := fetchReadme(selectedRepo)
		release, _ := fetchLatestRelease(selectedRepo)

		releaseText := "No release assets found."
		if release != nil {
			releaseText = fmt.Sprintf("Tag: %s, Assets: ", release.TagName)
			for _, a := range release.Assets {
				releaseText += fmt.Sprintf("[%s : %s] ", a.Name, a.BrowseUrl)
			}
		}

		// 2. Call Generation Logic
		log.Printf("\nAnalyzing %s to generate installation steps...\n", selectedRepo)

		rawJson, err := generateIPMJson(selectedRepo, readmeBody, releaseText)
		if err != nil {
			log.Printf("❌ AI Analysis failed: %v\n", err)
			http.Error(w, "Generation failed", http.StatusInternalServerError)
			return
		}

		// FIX: Return the generated JSON data
		w.Header().Set("Content-Type", "application/json")
		fmt.Fprint(w, rawJson)
	}
}


func generateIPMJson(repoName, readme, releaseInfo string) (string, error) {
	// Define the strict structure
	schema := map[string]interface{}{
		"type": "object",
		"properties": map[string]interface{}{
			"repo":             map[string]interface{}{"type": "string"},
			"repo_type":        map[string]interface{}{"type": "string", "enum": []string{"library", "cli", "server", "tool", "desktop", "framework", "api"}},
			"has_installation": map[string]interface{}{"type": "boolean"},
			"keywords":         map[string]interface{}{"type": "array", "items": map[string]interface{}{"type": "string"}},
			"prerequisites": map[string]interface{}{
				"type": "array",
				"items": map[string]interface{}{
					"type": "object",
					"properties": map[string]interface{}{
						"name":    map[string]interface{}{"type": "string"},
						"type":    map[string]interface{}{"type": "string"},
						"version": map[string]interface{}{"type": "string"},
					},
					"required": []string{"name", "type"},
				},
			},
			"installation_methods": map[string]interface{}{
				"type": "array",
				"items": map[string]interface{}{
					"type": "object",
					"properties": map[string]interface{}{
						"title": map[string]interface{}{"type": "string"},
						"instructions": map[string]interface{}{
							"type": "array",
							"items": map[string]interface{}{
								"type": "object",
								"properties": map[string]interface{}{
									"command": map[string]interface{}{"type": "string"},
								},
								"required": []string{"command"},
							},
						},
					},
					"required": []string{"title", "instructions"},
				},
			},
			"post_installation": map[string]interface{}{"type": "array", "items": map[string]interface{}{"type": "string"}},
			"resources_of_interest": map[string]interface{}{
				"type": "array",
				"items": map[string]interface{}{
					"type": "object",
					"properties": map[string]interface{}{
						"reason":      map[string]interface{}{"type": "string"},
						"title":       map[string]interface{}{"type": "string"},
						"type":        map[string]interface{}{"type": "string", "enum": []string{"documentation", "tutorial", "issue", "release", "website"}},
						"url_or_path": map[string]interface{}{"type": "string"},
					},
					"required": []string{"reason", "title", "type", "url_or_path"},
				},
			},
		},
		"required": []string{"repo", "repo_type", "has_installation", "installation_methods"},
	}

	prompt := fmt.Sprintf(`
	  You are an Expert Installation instruction extractor. Analyze the repository '%s' to generate a precise Installation Plan.
	  
	  ### DATA SOURCES
	  - **README CONTENT:** %s
	  - **RELEASE ASSETS:** %s
	  
	  ### MANDATORY EXTRACTION RULES
	  1. **REPO CLASSIFICATION (Strict):**
		 - Determine 'repo_type'. Use 'server' or 'tool' for persistent services/deployments.
		 - 'library' is ONLY for code meant to be imported.
		 - 'has_installation' is true only if there are build/run/deploy steps.
	  
	  2. **ATOMIC INSTALLATION METHODS (Sequential):**
		 - Every method must be EXECUTABLE and ATOMIC.
		 - **Crucial:** If source code is required, the first command MUST be 'git clone [url]', the second MUST be 'cd [folder]'.
		 - Order by convenience: Binary > Container > Package Manager > Source.
		 - For Binary methods: Look at RELEASE ASSETS. If a URL exists, use 'curl -L [URL] -o [file]'.
	  
	  3. **PREREQUISITE ATOMicity:**
		 - Extract distinct dependencies (Docker, Go, Python) as individual objects.
		 - Use proper nouns for 'name' (e.g., 'Node.js', 'PostgreSQL').
	  
	  4. **STRING CLEANLINESS (Post-Installation):**
		 - NO markdown fences , NO HTML tags, NO stray characters.
		 - Include only critical next steps: starting services, migrations, or verification commands.
	  
	  5. **CROSS-PLATFORM:**
		 - If Windows, macOS, or Linux specific steps are found in README or Releases, include them as separate installation methods.
	  
	  6. **RESOURCES OF INTEREST:**
		 - Identify relevant links such as Official Docs, Wiki, or specific Release pages found in the README.
		 - For 'url_or_path', use absolute URLs.
	  ### OUTPUT FORMAT
	  Output ONLY valid JSON matching the provided schema. No prose, no markdown artifacts, no backticks.
	  `, repoName, readme, releaseInfo)

	if USE_MOCK {
		return mockData, nil
	}

	// Call Gemini
	result, err := QueryGemini(prompt, schema)
	if err != nil {
		return "", err
	}

	return result, nil
}
