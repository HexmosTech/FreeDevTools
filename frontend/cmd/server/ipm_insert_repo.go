package main

import (
	"bytes"
	"crypto/sha256"
	"encoding/binary"
	"encoding/json"
	"fdt-templ/internal/config"
	"fdt-templ/internal/db/installerpedia"
	"fmt"
	"log"
	"net/http"
	"os"
	"path/filepath"

	"fdt-templ/internal/db/bookmarks"

	"strings"
	"time"

	"regexp"

	"github.com/clipperhouse/jargon"
	"github.com/clipperhouse/jargon/filters/ascii"
	"github.com/clipperhouse/jargon/filters/contractions"
	"github.com/clipperhouse/jargon/filters/stemmer"
	_ "github.com/mattn/go-sqlite3"
)

type EntryPayload struct {
	Repo                string      `json:"repo"`
	RepoType            string      `json:"repo_type"`
	HasInstallation     bool        `json:"has_installation"`
	Keywords            []string    `json:"keywords"`
	Prerequisites       interface{} `json:"prerequisites"`
	InstallationMethods interface{} `json:"installation_methods"`
	PostInstallation    interface{} `json:"post_installation"`
	ResourcesOfInterest interface{} `json:"resources_of_interest"`
	Description         string      `json:"description"`
	Stars               int         `json:"stars"`
	UpdatedAt           string      `json:"updated_at"` // <--- Add this
}

type InstallMethod struct {
	Title        string        `json:"title"`
	Instructions []Instruction `json:"instructions"`
}

type Instruction struct {
	Command  string `json:"command"`
	Meaning  string `json:"meaning,omitempty"`
	Optional bool   `json:"optional,omitempty"`
}

var IPM_DB_NAME = "ipm-db-v6.db"
var IPM_DB_PATH = filepath.Join(".", "db", "all_dbs", IPM_DB_NAME)

// PostHog analytics configuration (used for Installerpedia metrics dashboard).
// These mirror the settings used by the standalone analytics scripts.
const (
	posthogBaseURL   = "https://us.i.posthog.com"
	posthogProjectID = "148275"
)

// posthogResponse represents the subset of the PostHog query API response we care about.
type posthogResponse struct {
	Results [][]interface{} `json:"results"`
}

type metricsSummary struct {
	Searches      int `json:"searches"`
	TotalAttempts int `json:"total_attempts"`
	Success       int `json:"success"`
	Failures      int `json:"failures"`
	Cancelled     int `json:"cancelled"`
	TotalUsers    int `json:"total_users"`
}

type methodStats struct {
	InstallMethod string  `json:"install_method"`
	Success       int     `json:"success"`
	Failures      int     `json:"failures"`
	Cancelled     int     `json:"cancelled"`
	Total         int     `json:"total"`
	SuccessRate   float64 `json:"success_rate"`
}

type osDistribution struct {
	OS    string `json:"os"`
	Arch  string `json:"arch"`
	Total int    `json:"total"`
}

type countryDistribution struct {
	Country string `json:"country"`
	Total   int    `json:"total"`
}

type errorLogEntry struct {
	Error     string `json:"error"`
	Arch      string `json:"arch"`
	OS        string `json:"os"`
	Command   string `json:"command,omitempty"`
	Timestamp string `json:"timestamp"`
}

type cancelLogEntry struct {
	Error     string `json:"error"`
	Arch      string `json:"arch"`
	OS        string `json:"os"`
	Command   string `json:"command,omitempty"`
	Timestamp string `json:"timestamp"`
}

// LogIPMQuery writes the executed SQL query to a .sql file matching the DB name.
func LogIPMQuery(query string, args ...interface{}) {
	// 1. Determine the .sql filename (ipm-db-v6.db -> ipm-db-v6.sql)
	ext := filepath.Ext(IPM_DB_PATH)
	sqlPath := strings.TrimSuffix(IPM_DB_PATH, ext) + ".sql"

	// 2. Format the query with arguments (Basic representation)
	formattedQuery := query
	for _, arg := range args {
		val := fmt.Sprintf("'%v'", arg)
		// Replace the first occurrence of ? with the value
		formattedQuery = strings.Replace(formattedQuery, "?", val, 1)
	}

	// 3. Prepare the entry with a semicolon and newline
	entry := fmt.Sprintf("-- %s\n%s;\n\n", time.Now().Format(time.RFC3339), formattedQuery)

	// 4. Append to file (Create if not exists)
	f, err := os.OpenFile(sqlPath, os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0644)
	if err != nil {
		log.Printf("⚠️  [SQL Log] Could not write to log file: %v", err)
		return
	}
	defer f.Close()

	if _, err := f.WriteString(entry); err != nil {
		log.Printf("⚠️  [SQL Log] Error writing string: %v", err)
	}
}

func setupInstallerpediaApiRoutes(mux *http.ServeMux, db *installerpedia.DB, fdtPgDB *bookmarks.DB) {
	base := GetBasePath() + "/api/installerpedia"

	// Clean routing table
	mux.HandleFunc(base+"/add-entry", handleAddEntry(db))
	mux.HandleFunc(base+"/generate_ipm_repo", handleGenerateRepo())
	mux.HandleFunc(base+"/generate_ipm_repo_method", handleGenerateRepoMethod())
	mux.HandleFunc(base+"/update-entry", handleUpdateRepoMethods(db))
	mux.HandleFunc(base+"/auto_index", handleAutoIndex(db))
	mux.HandleFunc(base+"/featured", handleGetFeatured())
	mux.HandleFunc(base+"/check_ipm_repo", handleCheckRepoExists(db))
	mux.HandleFunc(base+"/check_ipm_repo_updates", handleCheckRepoUpdates(db))
	// Metrics & analytics
	mux.HandleFunc(base+"/metrics/summary",handleMetricsSummary())
	mux.HandleFunc(base+"/metrics/errors",  handleMetricsErrors())
	mux.HandleFunc(base+"/metrics/cancels", handleMetricsCancels())

}

func handleGetFeatured() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		// --- Configuration Variables (Change these anytime) ---
		title := "Featured: Git-LRC"
		tagline := "Free, unlimited AI code reviews that run on commit"
		link := "https://www.producthunt.com/products/git-lrc"
		cta := "Upvote and support us on Product Hunt!"
		// ------------------------------------------------------

		w.Header().Set("Content-Type", "application/json")

		// Constructing the message
		// Added the CTA at the end for maximum visibility
		msg := fmt.Sprintf("%s - %s. %s: %s", title, tagline, cta, link)

		resp := map[string]string{"message": msg}

		if err := json.NewEncoder(w).Encode(resp); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
		}
	}
}

// handleAddEntry handles the HTTP concerns (parsing, headers, logging)
func handleAddEntry(db *installerpedia.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		if r.Method != http.MethodPost {
			http.Error(w, "Method Not Allowed", http.StatusMethodNotAllowed)
			return
		}
		overwrite := r.URL.Query().Get("overwrite") == "true"
		var payload EntryPayload
		if err := json.NewDecoder(r.Body).Decode(&payload); err != nil {
			log.Printf("⚠️  [Installerpedia API] Bad JSON: %v", err)
			http.Error(w, "Invalid JSON", http.StatusBadRequest)
			return
		}

		// Delegate logic to the DB helper
		success, err := saveInstallerpediaEntry(db, payload, overwrite)
		if err != nil {
			log.Printf("❌ [Installerpedia API] Error: %v", err)
			http.Error(w, "Internal Server Error", http.StatusInternalServerError)
			return
		}

		w.Header().Set("Content-Type", "application/json")
		if !success {
			log.Printf("ℹ️ [Installerpedia API] Duplicate entry skipped: %s", payload.Repo) // Add this!
			w.WriteHeader(http.StatusOK)
			fmt.Fprintf(w, `{"success": false, "message": "Duplicate entry skipped"}`)
			return
		}

		if success {
			go func() {
				// Use the payload directly to sync to Meili
				if err := SyncSingleRepoToMeili(payload); err != nil {
					log.Printf("[Installerpedia API] ⚠️ Background Meili Update Error: %v\n", err)
				} else {
					log.Println("[Installerpedia API] ✅ Background Meili Update Successful")
				}
			}()
		}

		log.Printf("✅ [Installerpedia API] Added: %s", payload.Repo)
		w.WriteHeader(http.StatusCreated)
		fmt.Fprintf(w, `{"success": true, "repo": "%s"}`, payload.Repo)
	}
}

// escapeHogQLString performs minimal escaping for embedding Go strings into HogQL.
// It currently escapes single quotes by prefixing them with a backslash.
func escapeHogQLString(s string) string {
	return strings.ReplaceAll(s, "'", "\\'")
}

// runPosthogQuery executes a HogQL query against PostHog's /query endpoint.
func runPosthogQuery(query string) ([][]interface{}, error) {
	cfg := config.GetConfig()
	apiKey := cfg.PostHogKey
	if apiKey == "" {
		return nil, fmt.Errorf("POSTHOG_PERSONAL_API_KEY not set")
	}

	endpoint := fmt.Sprintf("%s/api/projects/%s/query/", posthogBaseURL, posthogProjectID)

	payload := map[string]interface{}{
		"query": map[string]interface{}{
			"kind":  "HogQLQuery",
			"query": query,
		},
	}

	body, err := json.Marshal(payload)
	if err != nil {
		return nil, fmt.Errorf("failed to marshal PostHog payload: %w", err)
	}

	req, err := http.NewRequest("POST", endpoint, bytes.NewReader(body))
	if err != nil {
		return nil, fmt.Errorf("failed to create PostHog request: %w", err)
	}
	req.Header.Set("Authorization", "Bearer "+apiKey)
	req.Header.Set("Content-Type", "application/json")

	client := &http.Client{Timeout: 10 * time.Second}
	resp, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("PostHog request failed: %w", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("PostHog returned status %d", resp.StatusCode)
	}

	var pr posthogResponse
	if err := json.NewDecoder(resp.Body).Decode(&pr); err != nil {
		return nil, fmt.Errorf("failed to decode PostHog response: %w", err)
	}

	return pr.Results, nil
}

// helpers to safely convert interface{} from PostHog into useful types.
func ifaceToInt(v interface{}) int {
	switch n := v.(type) {
	case float64:
		return int(n)
	case int:
		return n
	case int64:
		return int(n)
	default:
		return 0
	}
}

func ifaceToString(v interface{}) string {
	if v == nil {
		return ""
	}
	switch s := v.(type) {
	case string:
		return s
	default:
		return fmt.Sprintf("%v", v)
	}
}

// buildTimeFilter returns a HogQL timestamp filter snippet based on a friendly range key.
// It always returns either an empty string or a string starting with "AND ".
func buildTimeFilter(rangeKey string) string {
	switch rangeKey {
	case "24h":
		return "AND timestamp > now() - INTERVAL 24 HOUR"
	case "7d":
		return "AND timestamp > now() - INTERVAL 7 DAY"
	case "30d", "1m":
		return "AND timestamp > now() - INTERVAL 30 DAY"
	case "180d", "6m":
		return "AND timestamp > now() - INTERVAL 180 DAY"
	case "365d", "1y":
		return "AND timestamp > now() - INTERVAL 365 DAY"
	case "all", "lifetime":
		return ""
	case "90d", "3m", "":
		fallthrough
	default:
		return "AND timestamp > now() - INTERVAL 90 DAY"
	}
}

// --- Metrics & Analytics Handlers (PostHog-backed) ---

// handleMetricsSummary returns aggregate stats + per-method stats + OS distribution
// for a given repo, mirroring the behaviour of the repo_level_info.py script.
func handleMetricsSummary() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		repoName := r.URL.Query().Get("repo")
		if repoName == "" {
			http.Error(w, "Missing repo parameter", http.StatusBadRequest)
			return
		}

		rangeKey := r.URL.Query().Get("range")
		timeFilter := buildTimeFilter(rangeKey)

		repoEsc := escapeHogQLString(repoName)

		// 1. Define Queries
		summaryQuery := fmt.Sprintf(`
        SELECT 
            countIf(event == 'ipm_repo_search_event') as searches,
            countIf(event IN ('ipm_install_repo_success', 'ipm_install_repo_failed', 'ipm_install_repo_cancelled')) as total_attempts,
            countIf(event == 'ipm_install_repo_success') as success,
            countIf(event == 'ipm_install_repo_failed') as failures,
            countIf(event == 'ipm_install_repo_cancelled') as cancelled,
            countIf(length(distinct_id) == 64 AND distinct_id NOT LIKE '%%-%%') as users
        FROM events
        WHERE (properties.reponame = '%s' OR properties.query = '%s')
        %s
        `, repoEsc, repoEsc, timeFilter)

		methodQuery := fmt.Sprintf(`
        SELECT 
            properties.method as install_method,
            countIf(event == 'ipm_install_repo_success') as success,
            countIf(event == 'ipm_install_repo_failed') as failures,
            countIf(event == 'ipm_install_repo_cancelled') as cancelled,
            count() as total
        FROM events
        WHERE properties.reponame = '%s'
        AND event IN ('ipm_install_repo_success', 'ipm_install_repo_failed', 'ipm_install_repo_cancelled')
        %s
        GROUP BY install_method
        `, repoEsc, timeFilter)

		osQuery := fmt.Sprintf(`
        SELECT 
            properties.os as os,
            properties.arch as arch,
            count() as total
        FROM events
        WHERE properties.reponame = '%s'
        AND event IN ('ipm_install_repo_success', 'ipm_install_repo_failed', 'ipm_install_repo_cancelled')
        %s
        GROUP BY os, arch
        ORDER BY total DESC
        LIMIT 15
        `, repoEsc, timeFilter)

		countryQuery := fmt.Sprintf(`
        SELECT 
            properties.$geoip_country_name as country,
            count() as total
        FROM events
        WHERE properties.reponame = '%s'
        AND event IN ('ipm_install_repo_success', 'ipm_install_repo_failed', 'ipm_install_repo_cancelled')
        %s
        GROUP BY country
        ORDER BY total DESC
        LIMIT 15
        `, repoEsc, timeFilter)

		// 2. Execute Queries in Parallel
		type queryResult struct {
			data [][]interface{}
			err  error
			id   string
		}
		resultsChan := make(chan queryResult, 4)

		go func() {
			res, err := runPosthogQuery(summaryQuery)
			resultsChan <- queryResult{res, err, "summary"}
		}()
		go func() {
			res, err := runPosthogQuery(methodQuery)
			resultsChan <- queryResult{res, err, "method"}
		}()
		go func() {
			res, err := runPosthogQuery(osQuery)
			resultsChan <- queryResult{res, err, "os"}
		}()
		go func() {
			res, err := runPosthogQuery(countryQuery)
			resultsChan <- queryResult{res, err, "country"}
		}()

		// 3. Collect Results
		var summaryResults [][]interface{}
		var methodResults [][]interface{}
		var osResults [][]interface{}
		var countryResults [][]interface{}

		for i := 0; i < 4; i++ {
			res := <-resultsChan
			if res.err != nil {
				log.Printf("[Installerpedia Metrics] %s query error for %s: %v", res.id, repoName, res.err)
				http.Error(w, fmt.Sprintf("Failed to fetch %s metrics", res.id), http.StatusInternalServerError)
				return
			}
			switch res.id {
			case "summary":
				summaryResults = res.data
			case "method":
				methodResults = res.data
			case "os":
				osResults = res.data
			case "country":
				countryResults = res.data
			}
		}

		// 4. Parse Results
		var summary metricsSummary
		if len(summaryResults) > 0 {
			row := summaryResults[0]
			if len(row) >= 6 {
				summary.Searches = ifaceToInt(row[0])
				summary.TotalAttempts = ifaceToInt(row[1])
				summary.Success = ifaceToInt(row[2])
				summary.Failures = ifaceToInt(row[3])
				summary.Cancelled = ifaceToInt(row[4])
				summary.TotalUsers = ifaceToInt(row[5])
			}
		}

		methods := make([]methodStats, 0, len(methodResults))
		for _, row := range methodResults {
			if len(row) < 5 {
				continue
			}
			ms := methodStats{
				InstallMethod: ifaceToString(row[0]),
				Success:       ifaceToInt(row[1]),
				Failures:      ifaceToInt(row[2]),
				Cancelled:     ifaceToInt(row[3]),
				Total:         ifaceToInt(row[4]),
			}
			if ms.Total > 0 {
				ms.SuccessRate = float64(ms.Success) / float64(ms.Total) * 100.0
			}
			methods = append(methods, ms)
		}

		osDist := make([]osDistribution, 0, len(osResults))
		for _, row := range osResults {
			if len(row) < 3 {
				continue
			}
			osDist = append(osDist, osDistribution{
				OS:    ifaceToString(row[0]),
				Arch:  ifaceToString(row[1]),
				Total: ifaceToInt(row[2]),
			})
		}

		countryDist := make([]countryDistribution, 0, len(countryResults))
		for _, row := range countryResults {
			if len(row) < 2 {
				continue
			}
			countryDist = append(countryDist, countryDistribution{
				Country: ifaceToString(row[0]),
				Total:   ifaceToInt(row[1]),
			})
		}

		w.Header().Set("Content-Type", "application/json")
		_ = json.NewEncoder(w).Encode(map[string]interface{}{
			"summary":              summary,
			"methods":              methods,
			"os_distribution":      osDist,
			"country_distribution": countryDist,
		})
	}
}

// handleMetricsErrors returns recent failure logs for a given repo + install method.
func handleMetricsErrors() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		repoName := r.URL.Query().Get("repo")
		method := r.URL.Query().Get("method")
		if repoName == "" || method == "" {
			http.Error(w, "Missing repo or method parameter", http.StatusBadRequest)
			return
		}

		repoEsc := escapeHogQLString(repoName)
		methodEsc := escapeHogQLString(method)

		rangeKey := r.URL.Query().Get("range")
		timeFilter := buildTimeFilter(rangeKey)

		query := fmt.Sprintf(`
        SELECT 
            properties.error, 
            properties.arch, 
            properties.os, 
            properties.command,
            timestamp
        FROM events
        WHERE event == 'ipm_install_repo_failed'
          AND properties.reponame == '%s'
          AND properties.method == '%s'
          %s
        ORDER BY timestamp DESC LIMIT 10
        `, repoEsc, methodEsc, timeFilter)

		results, err := runPosthogQuery(query)
		if err != nil {
			log.Printf("[Installerpedia Metrics] error logs query error for %s / %s: %v", repoName, method, err)
			http.Error(w, "Failed to fetch error logs", http.StatusInternalServerError)
			return
		}

		logs := make([]errorLogEntry, 0, len(results))
		for _, row := range results {
			if len(row) < 5 {
				continue
			}
			logs = append(logs, errorLogEntry{
				Error:     ifaceToString(row[0]),
				Arch:      ifaceToString(row[1]),
				OS:        ifaceToString(row[2]),
				Command:   ifaceToString(row[3]),
				Timestamp: ifaceToString(row[4]),
			})
		}

		w.Header().Set("Content-Type", "application/json")
		if err := json.NewEncoder(w).Encode(map[string]interface{}{"logs": logs}); err != nil {
			log.Printf("[Installerpedia Metrics] encode error logs error for %s / %s: %v", repoName, method, err)
		}
	}
}

// handleMetricsCancels returns recent cancellation logs for a given repo + install method.
func handleMetricsCancels() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		repoName := r.URL.Query().Get("repo")
		method := r.URL.Query().Get("method")
		if repoName == "" || method == "" {
			http.Error(w, "Missing repo or method parameter", http.StatusBadRequest)
			return
		}

		repoEsc := escapeHogQLString(repoName)
		methodEsc := escapeHogQLString(method)

		rangeKey := r.URL.Query().Get("range")
		timeFilter := buildTimeFilter(rangeKey)

		query := fmt.Sprintf(`
        SELECT 
            properties.error, 
            properties.arch, 
            properties.os, 
            properties.command,
            timestamp
        FROM events
        WHERE event == 'ipm_install_repo_cancelled'
          AND properties.reponame == '%s'
          AND properties.method == '%s'
          %s
        ORDER BY timestamp DESC LIMIT 10
        `, repoEsc, methodEsc, timeFilter)

		results, err := runPosthogQuery(query)
		if err != nil {
			log.Printf("[Installerpedia Metrics] cancel logs query error for %s / %s: %v", repoName, method, err)
			http.Error(w, "Failed to fetch cancel logs", http.StatusInternalServerError)
			return
		}

		logs := make([]cancelLogEntry, 0, len(results))
		for _, row := range results {
			if len(row) < 5 {
				continue
			}
			logs = append(logs, cancelLogEntry{
				Error:     ifaceToString(row[0]),
				Arch:      ifaceToString(row[1]),
				OS:        ifaceToString(row[2]),
				Command:   ifaceToString(row[3]),
				Timestamp: ifaceToString(row[4]),
			})
		}

		w.Header().Set("Content-Type", "application/json")
		if err := json.NewEncoder(w).Encode(map[string]interface{}{"logs": logs}); err != nil {
			log.Printf("[Installerpedia Metrics] encode cancel logs error for %s / %s: %v", repoName, method, err)
		}
	}
}

// saveInstallerpediaEntry handles the data transformation and DB transaction
func saveInstallerpediaEntry(db *installerpedia.DB, p EntryPayload, overwrite bool) (bool, error) {
	repoSlug := strings.ReplaceAll(strings.ToLower(p.Repo), "/", "-")
	slugHash := hashStringToInt64(repoSlug)
	categoryHash := hashStringToInt64(p.RepoType)
	updatedAt := time.Now().UTC().Format(time.RFC3339) + "Z"

	m := func(v interface{}) string {
		if v == nil {
			return ""
		}
		b, _ := json.Marshal(v)
		if string(b) == "null" {
			return ""
		}
		return string(b)
	}

	verb := "INSERT OR IGNORE"
	if overwrite {
		verb = "INSERT OR REPLACE"
	}

	tx, err := db.GetConn().Begin()
	if err != nil {
		return false, err
	}
	defer tx.Rollback()

	// --- Query 1: Main Data ---
	ipm_data_query := fmt.Sprintf(`
        %s INTO ipm_data (
            slug_hash, repo, repo_slug, repo_type, category_hash, 
            has_installation, is_deleted, prerequisites, 
            installation_methods, post_installation, resources_of_interest, description, 
            stars, keywords, updated_at
        ) VALUES (?, ?, ?, ?, ?, ?, 0, ?, ?, ?, ?, ?, ?, ?, ?)
    `, verb)
	ipm_data_query_args := []interface{}{
		slugHash, p.Repo, repoSlug, p.RepoType, categoryHash,
		p.HasInstallation, m(p.Prerequisites), m(p.InstallationMethods),
		m(p.PostInstallation), m(p.ResourcesOfInterest), p.Description, p.Stars, m(p.Keywords), updatedAt,
	}

	res, err := tx.Exec(ipm_data_query, ipm_data_query_args...)
	if err != nil {
		return false, err
	}

	rowsAffected, _ := res.RowsAffected()
	if rowsAffected == 0 {
		return false, nil
	}

	// Log successful execution
	LogIPMQuery(ipm_data_query, ipm_data_query_args...)

	// --- Query 2: ipm_category update ---
	ipm_category_query := `INSERT INTO ipm_category (category_hash, repo_type, repo_count, updated_at)
    SELECT category_hash, repo_type, COUNT(*), ? FROM ipm_data 
    WHERE is_deleted = 0 AND category_hash = ?
    GROUP BY category_hash
    ON CONFLICT(category_hash) DO UPDATE SET repo_count=excluded.repo_count, updated_at=excluded.updated_at`
	ipm_category_query_args := []interface{}{updatedAt, categoryHash}

	if _, err = tx.Exec(ipm_category_query, ipm_category_query_args...); err != nil {
		return false, fmt.Errorf("failed to update ipm_category: %w", err)
	}
	LogIPMQuery(ipm_category_query, ipm_category_query_args...)

	// --- Query 3: overview update ---
	ipm_overview_query := `INSERT INTO overview (id, total_count, last_updated_at)
    SELECT 1, COUNT(*), ? FROM ipm_data WHERE is_deleted = 0
    ON CONFLICT(id) DO UPDATE SET total_count=excluded.total_count, last_updated_at=excluded.last_updated_at`
	ipm_overview_query_args := []interface{}{updatedAt}

	if _, err = tx.Exec(ipm_overview_query, ipm_overview_query_args...); err != nil {
		return false, fmt.Errorf("failed to update overview: %w", err)
	}
	LogIPMQuery(ipm_overview_query, ipm_overview_query_args...)

	return true, tx.Commit()
}
func hashStringToInt64(s string) int64 {
	h := sha256.Sum256([]byte(s))
	return int64(binary.BigEndian.Uint64(h[:8]))
}

// CleanName handles suffix stripping and whitespace trimming
func CleanName(name string) string {
	name = strings.TrimSpace(name)
	re := regexp.MustCompile(`(?i)\s*\|\s*online\s+free\s+devtools?\s+by\s+hexmos?\s*$`)
	name = re.ReplaceAllString(name, "")
	return strings.TrimSpace(name)
}

// ProcessText applies the jargon stemming logic directly
func ProcessText(text string) string {
	stream := jargon.TokenizeString(text).
		Filter(contractions.Expand).
		Filter(ascii.Fold).
		Filter(stemmer.English)

	var results []string
	for stream.Scan() {
		token := stream.Token()
		if !token.IsSpace() {
			results = append(results, token.String())
		}
	}
	return strings.Join(results, " ")
}

func SyncSingleRepoToMeili(p EntryPayload) error {
	cfg := config.GetConfig()
	apiKey := cfg.MeiliWriteKey
	if apiKey == "" {
		return fmt.Errorf("MEILI_WRITE_KEY not found in environment")
	}

	// 1. Re-calculate slugs and IDs to match DB exactly
	repoSlug := strings.ReplaceAll(strings.ToLower(p.Repo), "/", "-")
	slugHash := hashStringToInt64(repoSlug)
	cleanedName := CleanName(p.Repo)

	// 2. Prepare the Meilisearch document
	meiliDoc := map[string]interface{}{
		"id":                    fmt.Sprintf("installerpedia-%d", slugHash),
		"name":                  cleanedName,
		"altName":               CleanName(ProcessText(cleanedName)),
		"description":           p.Description,
		"altDescription":        ProcessText(p.Description),
		"path":                  fmt.Sprintf("/freedevtools/installerpedia/%s/%s/", p.RepoType, repoSlug),
		"category":              "installerpedia",
		"repo_type":             p.RepoType,
		"stars":                 p.Stars,
		"prerequisites":         p.Prerequisites,
		"installation_methods":  p.InstallationMethods,
		"post_installation":     p.PostInstallation,
		"resources_of_interest": p.ResourcesOfInterest,
	}

	// 3. Prepare Payload
	payload, err := json.Marshal([]interface{}{meiliDoc})
	if err != nil {
		return fmt.Errorf("marshal failed: %w", err)
	}

	url := "https://search.apps.hexmos.com/indexes/freedevtools/documents"

	// 4. POST to production Meili instance
	req, err := http.NewRequest("POST", url, bytes.NewBuffer(payload))
	if err != nil {
		return err
	}

	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", "Bearer "+apiKey)

	var httpClient = &http.Client{
		Timeout: time.Second * 10,
	}
	resp, err := httpClient.Do(req)
	if err != nil {
		return fmt.Errorf("request failed: %w", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode >= 300 {
		// Helpful 403 debug info
		keyHint := "empty"
		if len(apiKey) > 8 {
			keyHint = fmt.Sprintf("%s...%s", apiKey[:4], apiKey[len(apiKey)-4:])
		}
		return fmt.Errorf("[Installerpedia API] meilisearch error: status %d (Key used: %s)", resp.StatusCode, keyHint)
	}

	log.Printf("[Installerpedia API] ✅ Synced '%s' to Meili successfully\n", cleanedName)
	return nil
}

// Updating new installation methods

func handleUpdateRepoMethods(db *installerpedia.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		if r.Method != http.MethodPost {
			http.Error(w, "Method Not Allowed", http.StatusMethodNotAllowed)
			return
		}

		var payload struct {
			Repo       string          `json:"repo"`
			NewMethods []InstallMethod `json:"new_methods"`
		}

		if err := json.NewDecoder(r.Body).Decode(&payload); err != nil {
			http.Error(w, "Invalid JSON", http.StatusBadRequest)
			return
		}

		// 1. Update the Local SQLite DB first (Append logic)
		// We do this first so that the DB contains the latest installation methods
		log.Printf("[Installerpedia API] Updating DB for %s...", payload.Repo)
		err := appendInstallerpediaMethods(db, payload.Repo, payload.NewMethods)
		if err != nil {
			log.Printf("❌ [Installerpedia API] DB Update error: %v", err)
			http.Error(w, "Internal DB error", http.StatusInternalServerError)
			return
		}

		// 2. Fetch the FULL, REFRESHED entry from the DB
		// This ensures we have the full metadata (stars, description, etc.) + the new methods
		updatedEntry, err := fetchFullEntryFromDB(db, payload.Repo)
		if err != nil {
			log.Printf("❌ [Installerpedia API] Post-update fetch failed for %s: %v", payload.Repo, err)
			http.Error(w, "Failed to retrieve updated record", http.StatusInternalServerError)
			return
		}

		// 3. Perform a Full Rewrite to Meilisearch
		// By using SyncSingleRepoToMeili, we send all fields.
		// If Meili had a "ruined" version, this will overwrite it with the correct full data.
		go func() {
			log.Printf("[Installerpedia API] Syncing full record to Meilisearch for %s...", payload.Repo)
			if err := SyncSingleRepoToMeili(updatedEntry); err != nil {
				log.Printf("⚠️ [Installerpedia API] Meili Sync failure: %v", err)
			} else {
				log.Printf("✅ [Installerpedia API] Meili fully restored/updated for %s", payload.Repo)
			}
		}()

		w.WriteHeader(http.StatusOK)
		fmt.Fprintf(w, "Successfully updated and synced full record for %s", payload.Repo)
	}
}
func appendInstallerpediaMethods(db *installerpedia.DB, repoName string, newMethods []InstallMethod) error {
    repoSlug := strings.ReplaceAll(strings.ToLower(repoName), "/", "-")
    slugHash := hashStringToInt64(repoSlug)
    updatedAt := time.Now().UTC().Format(time.RFC3339)

	tx, err := db.GetConn().Begin()
	if err != nil {
		return err
	}
	defer tx.Rollback()

	// 1. Extract existing methods
	var existingJson string
	err = tx.QueryRow(`SELECT installation_methods FROM ipm_data WHERE slug_hash = ?`, slugHash).Scan(&existingJson)
	if err != nil {
		return fmt.Errorf("failed to fetch existing methods: %w", err)
	}

	var methods []InstallMethod
	if existingJson != "" && existingJson != "null" {
		if err := json.Unmarshal([]byte(existingJson), &methods); err != nil {
			return fmt.Errorf("failed to unmarshal existing methods: %w", err)
		}
	}

	// 2. Add the new methods into the list
	methods = append(methods, newMethods...)

	// 3. Re-marshal and update back
	updatedJson, err := json.Marshal(methods)
	if err != nil {
		return err
	}

	// Prepare Query and Args for Logging
	ipm_update_method_query := `
        UPDATE ipm_data 
        SET installation_methods = ?, 
            updated_at = ?
        WHERE slug_hash = ?
    `
	ipm_update_method_query_args := []interface{}{string(updatedJson), updatedAt, slugHash}

	_, err = tx.Exec(ipm_update_method_query, ipm_update_method_query_args...)
	if err != nil {
		return err
	}

	// Log the update query
	LogIPMQuery(ipm_update_method_query, ipm_update_method_query_args...)

	return tx.Commit()
}

func fetchFullEntryFromDB(db *installerpedia.DB, repoName string) (EntryPayload, error) {
	repoSlug := strings.ReplaceAll(strings.ToLower(repoName), "/", "-")
	slugHash := hashStringToInt64(repoSlug)

	var p EntryPayload
	var prereqJson, methodsJson, postJson, resourceJson, keywordsJson string

	err := db.GetConn().QueryRow(`
        SELECT repo, repo_type, has_installation, description, stars, 
               prerequisites, installation_methods, post_installation, 
               resources_of_interest, keywords, updated_at
        FROM ipm_data WHERE slug_hash = ?
    `, slugHash).Scan(
		&p.Repo, &p.RepoType, &p.HasInstallation, &p.Description, &p.Stars,
		&prereqJson, &methodsJson, &postJson, &resourceJson, &keywordsJson, &p.UpdatedAt, // <--- Scan it here
	)

	if err != nil {
		return p, err
	}

	// Unmarshal JSON fields into the payload structure
	json.Unmarshal([]byte(prereqJson), &p.Prerequisites)
	json.Unmarshal([]byte(methodsJson), &p.InstallationMethods)
	json.Unmarshal([]byte(postJson), &p.PostInstallation)
	json.Unmarshal([]byte(resourceJson), &p.ResourcesOfInterest)
	json.Unmarshal([]byte(keywordsJson), &p.Keywords)

	return p, nil
}

func handleCheckRepoExists(db *installerpedia.DB) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		repoName := r.URL.Query().Get("repo")
		if repoName == "" {
			http.Error(w, "Missing repo parameter", http.StatusBadRequest)
			return
		}

		w.Header().Set("Content-Type", "application/json")

		// Reuse your existing helper to fetch the data
		entry, err := fetchFullEntryFromDB(db, repoName)

		if err != nil {
			// If the error is "no rows", it just doesn't exist
			if strings.Contains(err.Error(), "no rows in result set") {
				json.NewEncoder(w).Encode(map[string]interface{}{
					"exists": false,
					"repo":   repoName,
				})
				return
			}
			log.Printf("❌ [Installerpedia API] DB Check Error: %v", err)
			http.Error(w, "Internal Server Error", http.StatusInternalServerError)
			return
		}

		// If we reached here, it exists. Return 'exists: true' + the full data
		resp := map[string]interface{}{
			"exists": true,
			"data":   entry,
		}
		json.NewEncoder(w).Encode(resp)
	}
}
