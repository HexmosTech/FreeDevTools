package main

import (
	"fmt"
	"os"

	"github.com/jedib0t/go-pretty/v6/table"
	"github.com/jedib0t/go-pretty/v6/text"
)

func handleStatus() {
	clearScreen()
	renderHeader()
	// 1. Fetch Status
	spin := StartSpinner("Loading Status...")
	allDBs, err := getAllDBs()
	if err != nil {
		spin.Stop()
		fmt.Println("Error:", err)
		return
	}
	locks, _ := fetchLocks()
	syncMap, _ := checkSyncStatus()
	spin.Stop()

	// 2. Process Entries
	type StatusRow struct {
		Name, Status string
		Color        text.Color
	}
	var existing []StatusRow
	var newDBs []StatusRow

	for _, db := range allDBs {
		status := "Synced" // Default
		statusColor := text.Colors{text.FgGreen}

		if l, ok := locks[db.Name]; ok {
			if l.Type == "lock" {
				if l.Owner != currentUser {
					status = fmt.Sprintf("Uploading by %s", l.Owner)
					statusColor = text.Colors{text.FgRed}
				} else {
					status = "Ready to upload" // My lock
					statusColor = text.Colors{text.FgGreen}
				}
			} else {
				// Reserve
				if l.Owner != currentUser {
					status = fmt.Sprintf("Reserved by %s", l.Owner)
					statusColor = text.Colors{text.FgYellow}
				} else {
					status = "Ready to upload"
					statusColor = text.Colors{text.FgGreen}
				}
			}
		}

		if status == "Synced" {
			if val, ok := syncMap[db.Name]; ok {
				switch val {
				case SyncStatusLocalOnly: // Local only
					status = "New DB"
					statusColor = text.Colors{text.FgBlue}
				case SyncStatusRemoteOnly: // Remote only
					status = "Ready to sync"
					statusColor = text.Colors{text.FgYellow}
				case SyncStatusDifferent: // Changed
					status = "Modified / Outdated"
					statusColor = text.Colors{text.FgRed}
				}
			} else {
				if !db.ExistsRemote && db.ExistsLocal {
					status = "New DB"
					statusColor = text.Colors{text.FgBlue}
				} else if db.ExistsRemote && !db.ExistsLocal {
					status = "Ready to sync"
					statusColor = text.Colors{text.FgYellow}
				}
			}
		}

		// row := StatusRow... (Removed)

		colorVal := text.FgWhite // Default
		if len(statusColor) > 0 {
			colorVal = statusColor[0]
		}

		if status == "New DB" {
			newDBs = append(newDBs, StatusRow{db.Name, status, colorVal})
		} else {
			existing = append(existing, StatusRow{db.Name, status, colorVal})
		}
	}

	renderAll := func() {
		renderHeader()
		fmt.Println("\n[Status View]")

		renderT := func(title string, rows []StatusRow) {
			if len(rows) == 0 {
				return
			}
			if title != "" {
				fmt.Printf("\n%s\n", title)
			}
			t := table.NewWriter()
			t.SetOutputMirror(os.Stdout)
			t.SetStyle(table.StyleBold)
			t.AppendHeader(table.Row{"DB Name", "Status"})
			for _, r := range rows {
				t.AppendRow(table.Row{r.Name, text.Colors{r.Color}.Sprint(r.Status)})
			}
			t.Render()
		}

		if len(existing) > 0 {
			renderT("EXISTING DATABASES", existing)
		} else if len(newDBs) == 0 {
			fmt.Println("\nNo databases found.")
		}

		if len(newDBs) > 0 {
			renderT("NEW DATABASES", newDBs)
		}
	}

	clearScreen()
	renderAll()

	// Buttons
	HandleMenu([]string{"Back", "Main Menu"}, func() {
		clearScreen()
		renderAll()
	})
	return
}
