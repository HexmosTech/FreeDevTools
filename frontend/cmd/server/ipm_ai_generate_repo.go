package main

import (
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
	"net/url"
	"time"

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

func fetchRepologyContext(projectName string) (string, error) {
	targetURL := fmt.Sprintf("https://repology.org/api/v1/project/%s", url.QueryEscape(projectName))

	client := &http.Client{Timeout: 10 * time.Second}
	req, err := http.NewRequest("GET", targetURL, nil)
	if err != nil {
		log.Printf("error creating Repology request for %s: %v", projectName, err)
		return "", fmt.Errorf("failed to create Repology request: %w", err)
	}

	// Adding the User-Agent to prevent 403 Forbidden errors
	req.Header.Set("User-Agent", "Mozilla/5.0 (IPM-CLI-Tool; contact@example.com)")

	resp, err := client.Do(req)
	if err != nil {
		log.Printf("error performing Repology request for %s: %v", projectName, err)
		return "", fmt.Errorf("Repology network error: %w", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		log.Printf("Repology returned non-OK status for %s: %d", projectName, resp.StatusCode)
		return "", fmt.Errorf("Repology HTTP status %d", resp.StatusCode)
	}

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		log.Printf("error reading Repology response body for %s: %v", projectName, err)
		return "", fmt.Errorf("failed to read Repology response: %w", err)
	}
	return string(body), nil
}

func generateIPMJson(repoName, readme, releaseInfo string, sourceType string) (string, error) {
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

	// Build data sources section with availability indicators
	dataSourcesNote := ""
	if readme == "" {
		dataSourcesNote += "\n      - **NOTE:** README/CONTEXT CONTENT is unavailable for this repository."
	}
	if releaseInfo == "" || releaseInfo == "No release assets found." {
		dataSourcesNote += "\n      - **NOTE:** RELEASE/REPO ASSETS information is unavailable for this repository."
	}

	promptHeader := fmt.Sprintf(`
      You are an Expert Installation instruction extractor. Analyze the repository '%s' to generate a precise Installation Plan.
      
      ### DATA SOURCES%s
      - **README/CONTEXT CONTENT:** %s
      - **RELEASE/REPO ASSETS:** %s`, repoName, dataSourcesNote, readme, releaseInfo)

	// Conditional Repology Section
	repologyContext := ""
	if sourceType == "repology" {
		repologyContext = `
      ### REPOLOGY SPECIFIC RULES
      	The 'README/CONTEXT CONTENT' provided is a Repology JSON array.
		1. **Package Identification:** Map the 'repo' field (e.g., "aur", "debian", "nix_pkgs") to its corresponding package manager.
		2. **Command Construction:** Use the 'srcname' or 'binname' to create the installation command.
		3. **Title Format:** Use "Install via [Repository Name]" (e.g., "Install via AUR").
		4. **Accuracy:** Ensure the 'version' from the Repology data is noted if relevant.

	  ### REPOLOGY AUTO-CONFIRMATION MAPPING
		Map the Repology 'repo' field to these EXACT non-interactive commands:
		Some examples:
		1.  **Alpine (alpine_*)**: "apk add [binname]" (Note: apk is non-interactive by default, but use --no-cache for efficiency).
		2.  **Arch/AUR (arch, aur)**: "yay -S --noconfirm [binname]" or "sudo pacman -S --noconfirm [binname]".
		3.  **Debian/Ubuntu/Devuan/Kali/PureOS (debian_*, ubuntu_*, kali_*, etc.)**: "sudo apt-get install -y [binname]".
		4.  **Fedora/CentOS/AlmaLinux/Rocky/openEuler (fedora_*, centos_*, ammalinux_*, openeuler_*)**: "sudo dnf install -y [binname]".
		5.  **openSUSE (opensuse_*)**: "sudo zypper --non-interactive install [binname]".
		6.  **FreeBSD/MidnightBSD (freebsd, midnightbsd)**: "sudo pkg install -y [binname]".
		7.  **Nix (nixpkgs_*)**: "nix-env -iA nixpkgs.[binname]".
		8.  **macOS (homebrew)**: "brew install [binname]".
		9.  **Windows (scoop, chocolatey)**: "scoop install [binname]" or "choco install -y [binname]".
		10. **Solus (solus)**: "sudo eopkg install -y [binname]".
		11. **Void Linux (void)**: "sudo xbps-install -y [binname]".
		12. **Gentoo (gentoo)**: "sudo emerge --ask=n [binname]".`
	}

	// Extraction Rules (Merged with your existing rules)
	extractionRules := `
      ### MANDATORY EXTRACTION RULES
      1. **REPO CLASSIFICATION (Strict):**
         - Determine 'repo_type'. Use 'server' or 'tool' for persistent services/deployments.
         - 'library' is ONLY for code meant to be imported.
         - 'has_installation' is true only if there are build/run/deploy steps.
      
      2. **ATOMIC INSTALLATION METHODS (Sequential):**
         - Every method must be EXECUTABLE and ATOMIC.
         - If source code is required, the first command MUST be 'git clone [url]', the second MUST be 'cd [folder]'.
         - Order by convenience: Package Manager > Binary > Container > Source.
      
      3. **PREREQUISITE ATOMicity:**
         - Extract distinct dependencies (Docker, Go, Python) as individual objects.
      
      4. **STRING CLEANLINESS:**
         - NO markdown fences, NO backticks. Output ONLY raw JSON.

	  5. **CROSS-PLATFORM:**
	   	 - If Windows, macOS, or Linux specific steps are found in README or Releases, include them as separate installation methods.
	   
	  6. **RESOURCES OF INTEREST:**
		- Identify relevant links such as Official Docs, Wiki, or specific Release pages found in the README.
		- For 'url_or_path', use absolute URLs.
      
      ### OUTPUT FORMAT
      Output ONLY valid JSON matching the provided schema.`

	  autoConfirmRules := `
      ### UNIVERSAL NON-INTERACTIVE RULES
      Every command generated MUST be capable of running in a CI/CD pipeline without human input:
      - ALWAYS append -y, --noconfirm, or --non-interactive based on the specific package manager.
      - If a command requires sudo, include 'sudo ' at the start.
      - If multiple commands are needed (like adding a repo before installing), provide them as sequential objects in the instructions array.`
	// Final Prompt Assembly
	fullPrompt := promptHeader + "\n" + repologyContext + "\n" + autoConfirmRules + "\n" + extractionRules

	if USE_MOCK {
		return mockData, nil
	}

	// DEBUG --------------
	// fmt.Println(prompt)
	// --------------------

	// Call Gemini
	result, err := QueryGemini(fullPrompt, schema)
	if err != nil {
		return "", err
	}

	return result, nil
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
			Repo       string `json:"repo"`
			SourceType string `json:"source_type"`
		}
		if err := json.NewDecoder(r.Body).Decode(&payload); err != nil {
			log.Printf("⚠️ [Installerpedia API] Bad JSON: %v", err)
			http.Error(w, "Invalid JSON", http.StatusBadRequest)
			return
		}

		selectedRepo := payload.Repo
		sourceType := payload.SourceType

		var contextData string
		var releaseText string

		if sourceType == "repology" {
			repologyData, err := fetchRepologyContext(selectedRepo)
			if err != nil {
				log.Printf("error fetching Repology context for %s: %v", selectedRepo, err)
				contextData = ""
			} else {
				contextData = repologyData
			}
			releaseText = "Source: Repology Package Repository"
		} else {
			// Default GitHub logic
			readmeBody, err := fetchReadme(selectedRepo)
			if err != nil {
				log.Printf("error fetching README for %s: %v", selectedRepo, err)
				contextData = ""
			} else {
				contextData = readmeBody
			}

			release, err := fetchLatestRelease(selectedRepo)
			if err != nil {
				log.Printf("error fetching latest release for %s: %v", selectedRepo, err)
				releaseText = ""
			} else if release != nil {
				releaseText = fmt.Sprintf("Tag: %s, Assets: ", release.TagName)
				for _, a := range release.Assets {
					releaseText += fmt.Sprintf("[%s : %s] ", a.Name, a.BrowseUrl)
				}
			} else {
				releaseText = ""
			}
		}

		// 2. Call Generation Logic
		log.Printf("\nAnalyzing %s to generate installation steps...\n", selectedRepo)

		rawJson, err := generateIPMJson(selectedRepo, contextData, releaseText, sourceType)
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
