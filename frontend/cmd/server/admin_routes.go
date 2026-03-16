package main

import (
	"encoding/json"
	"log"
	"net/http"
	"net/url"
	"time"

	"fdt-templ/components/pages/admin"
	"fdt-templ/internal/config"
	"fdt-templ/internal/db/bookmarks"

	"github.com/a-h/templ"
)

func setupAdminRoutes(mux *http.ServeMux, fdtPgDB *bookmarks.DB) {
	basePath := GetBasePath()

	mux.HandleFunc(basePath+"/admin/", requireAdmin(fdtPgDB, func(w http.ResponseWriter, r *http.Request) {
		// User is admin, render the admin page
		
		// Fetch existing users for IPM dashboard
		users, err := fdtPgDB.GetIPMDashboardUsers()
		if err != nil {
			log.Printf("[Admin] Error fetching IPM dashboard users: %v", err)
			// Continue rendering the page but with empty users list, 
			// so the rest of the page still works
			users = []bookmarks.IPMDashboardUser{}
		}
		
		handler := templ.Handler(admin.AdminPage(users))
		handler.ServeHTTP(w, r)
	}))

	// API endpoint to add user to IPM dashboard
	mux.HandleFunc(basePath+"/api/admin/ipm/add-user", requireAdmin(fdtPgDB, func(w http.ResponseWriter, r *http.Request) {
		if r.Method != http.MethodPost {
			http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
			return
		}

		var payload struct {
			Email string   `json:"email"`
			Slugs []string `json:"slugs"`
		}

		if err := json.NewDecoder(r.Body).Decode(&payload); err != nil {
			http.Error(w, "Invalid JSON", http.StatusBadRequest)
			return
		}

		if payload.Email == "" || len(payload.Slugs) == 0 {
			http.Error(w, "email and slugs are required", http.StatusBadRequest)
			return
		}

		// Validation on Slugs
		for _, slug := range payload.Slugs {
			if len(slug) > 200 || len(slug) == 0 {
				http.Error(w, "invalid slug length", http.StatusBadRequest)
				return
			}
		}

		// Resolve Email to UID via Parse
		parseQueryMap := map[string]string{"email": payload.Email}
		parseQueryBytes, _ := json.Marshal(parseQueryMap)
		reqUrl := "https://parse.apps.hexmos.com/parse/classes/_User?where=" + url.QueryEscape(string(parseQueryBytes))
		
		req, err := http.NewRequest("GET", reqUrl, nil)
		if err != nil {
			log.Printf("[Admin] Error creating request to Parse: %v", err)
			http.Error(w, "Internal server error", http.StatusInternalServerError)
			return
		}
		req.Header.Add("X-Parse-Application-Id", config.GetParseAppID())
		
		client := &http.Client{Timeout: 10 * time.Second}
		resp, err := client.Do(req)
		if err != nil {
			log.Printf("[Admin] Error fetching from Parse: %v", err)
			http.Error(w, "Internal server error", http.StatusInternalServerError)
			return
		}
		defer resp.Body.Close()
		
		var parseResult struct {
			Results []struct {
				ObjectId string `json:"objectId"`
			} `json:"results"`
		}
		
		if err := json.NewDecoder(resp.Body).Decode(&parseResult); err != nil {
			log.Printf("[Admin] Error decoding Parse response: %v", err)
			http.Error(w, "Internal server error", http.StatusInternalServerError)
			return
		}
		
		if len(parseResult.Results) == 0 {
			http.Error(w, "user not found by email", http.StatusNotFound)
			return
		}
		
		uid := parseResult.Results[0].ObjectId

		// Add user to IPM Dashboard
		if err := fdtPgDB.AddIPMDashboardUser(uid, payload.Email, payload.Slugs); err != nil {
			log.Printf("[Admin] Error adding IPM dashboard user for uid=%s: %v", uid, err)
			http.Error(w, "Internal server error", http.StatusInternalServerError)
			return
		}

		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(map[string]interface{}{"success": true})
	}))
}
