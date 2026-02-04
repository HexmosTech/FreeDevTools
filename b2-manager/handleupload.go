package main

import (
	"fmt"
	"os"
	"sync"
	"time"

	"github.com/eiannone/keyboard"
	"github.com/jedib0t/go-pretty/v6/table"
	"github.com/jedib0t/go-pretty/v6/text"
)

// Upload Sub-Menus
const (
	UploadMenuLockAndUpload = 0
	UploadMenuUploadLocked  = 1
	UploadMenuUnlock        = 2
	UploadMenuBack          = 3
	UploadMenuMainMenu      = 4
)

type UploadEntry struct {
	Name   string
	Status string
	Color  text.Color
}

func handleUpload() {
	options := []string{
		"Lock and Upload Selected DB's", // Moved to 1st
		"Upload Locked DB's",            // Moved to 2nd
		"Lock/Unlock DB",                // Renamed
		"Back",
		"Main Menu",
	}
	descriptions := []string{
		"Select databases to Lock locally and then Upload.",
		"Upload databases you have already locked.",
		"Manually Lock or Unlock databases.",
		"Go back to the previous menu.",
		"Return to the Main Menu.",
	}
	selected := 0

	for {
		clearScreen()
		renderHeader()
		fmt.Println("\n[Upload Menu] - Select an action:")

		// Render Menu as Table
		t := table.NewWriter()
		t.SetOutputMirror(os.Stdout)
		t.SetStyle(table.StyleRounded)

		row := table.Row{}
		for i, opt := range options {
			if i == selected {
				row = append(row, text.Colors{text.BgCyan, text.FgBlack}.Sprint(fmt.Sprintf(" %s ", opt)))
			} else {
				row = append(row, fmt.Sprintf(" %s ", opt))
			}
		}
		t.AppendRow(row)
		t.Render()

		// Description
		fmt.Printf("\n%s\n", descriptions[selected])

		char, key, err := readKey()
		if err != nil {
			return
		}

		if key == keyboard.KeyArrowLeft {
			selected--
			if selected < 0 {
				selected = len(options) - 1
			}
		} else if key == keyboard.KeyArrowRight {
			selected++
			if selected >= len(options) {
				selected = 0
			}
		} else if key == keyboard.KeyEnter {
			exitToMain := false
			switch selected {
			case UploadMenuLockAndUpload: // Lock & Upload
				exitToMain = runLockAndUpload()
			case UploadMenuUploadLocked: // Upload Locked
				exitToMain = runUploadLocked()
			case UploadMenuUnlock: // Lock/Unlock
				exitToMain = runLockUnlock()
			case UploadMenuBack, UploadMenuMainMenu: // Back, Main Menu
				// Wait, handleUpload is called by Main Menu.
				// If Back, we return.
				// If Main Menu, we return.
				// Main Menu loop (in main.go) just re-loops.
				// So both effectively go back to Main Menu.
				return
			}
			if exitToMain {
				return
			}
		} else if key == keyboard.KeyEsc || key == keyboard.KeyBackspace || key == keyboard.KeyBackspace2 || char == 'q' {
			return
		}
	}
}

// ==========================================
// Flow 1: Lock and Upload
// ==========================================
func runLockAndUpload() bool {
	// 1. Fetch Status for ALL local DBs
	spin := StartSpinner("Loading DB Status...")
	entries, syncMap, err := getUploadableEntries(false, false) // include non-locked, do sync check
	spin.Stop()

	if err != nil {
		fmt.Println("Error:", err)
		readKey()
		return false
	}

	// 2. Filter: DBs NOT locked by others (and prefer not locked by me, but if I lock it again it's fine)
	var available []UploadEntry
	for _, e := range entries {
		// Filter out locked by others
		if checkIsLockedByOther(e.Status) {
			continue
		}
		available = append(available, e)
	}

	if len(available) == 0 {
		fmt.Println("\nNo available databases to lock and upload.")
		readKey()
		return false
	}

	// 3. Select DBs
	selectedNames, exitToMain := selectDBsEx("Lock and Upload", "Lock & Upload", available)
	if exitToMain {
		return true
	}
	if len(selectedNames) == 0 {
		return false
	}

	// 4. Check Sync for Selected
	var toSync []string
	for _, name := range selectedNames {
		// Check against syncMap we got earlier
		if val, ok := syncMap[name]; ok && (val == SyncStatusDifferent || val == SyncStatusRemoteOnly) {
			toSync = append(toSync, name)
		}
		// Also check if remote exists and local doesn't (but we filtered by ExistsLocal in getUploadableEntries usually)
	}

	if len(toSync) > 0 {
		clearScreen()
		renderHeader()
		fmt.Printf("\n⚠️  The following databases are outdated or missing locally:\n")
		for _, n := range toSync {
			fmt.Printf("- %s\n", n)
		}
		fmt.Printf("\nSync these now? (Y/n): ")

		char, key, _ := readKey()
		if char == 'y' || char == 'Y' || key == keyboard.KeyEnter {
			fmt.Println("\nSyncing...")
			for _, n := range toSync {
				s := StartSpinner(fmt.Sprintf("Syncing %s...", n))
				err := SyncDatabase(n)
				s.Stop()
				if err != nil {
					fmt.Printf("❌ Sync failed for %s: %v\n", n, err)
				} else {
					fmt.Printf("✅ Synced %s\n", n)
				}
			}
			time.Sleep(1 * time.Second)
		} else {
			fmt.Println("\nSkipping sync (Proceeding with potentially outdated local copies)...")
			time.Sleep(1 * time.Second)
		}
	}

	// 5. Lock Selected
	clearScreen()
	renderHeader()
	fmt.Println("\n🔒 Locking selected databases...")

	var locked []string
	var mu sync.Mutex
	var wg sync.WaitGroup

	for _, name := range selectedNames {
		wg.Add(1)
		go func(dbName string) {
			defer wg.Done()
			fmt.Printf("🔒 Locking %s...\n", dbName)
			err := LockDatabase(dbName, currentUser, hostname, "upload-flow")

			if err != nil {
				fmt.Printf("❌ Failed to lock %s: %v\n", dbName, err)
			} else {
				fmt.Printf("✅ Locked %s\n", dbName)
				mu.Lock()
				locked = append(locked, dbName)
				mu.Unlock()
			}
		}(name)
	}
	wg.Wait()

	if len(locked) == 0 {
		fmt.Println("\nFailed to lock any databases. Aborting.")
		readKey()
		return false
	}

	// 6. Pause for Modification
	idx := HandleMenu([]string{"Proceed to Upload", "Cancel (Unlock)", "Back", "Main Menu"}, func() {
		clearScreen()
		renderHeader()
		fmt.Println("\n[Locked Databases] - Ready for local modification")

		t := table.NewWriter()
		t.SetOutputMirror(os.Stdout)
		t.SetStyle(table.StyleRounded)
		t.AppendHeader(table.Row{"DB NAME", "STATUS"})
		for _, name := range locked {
			t.AppendRow(table.Row{name, text.Colors{text.FgYellow}.Sprint("LOCKED")})
		}
		t.Render()

		fmt.Println("\nYou can now modify these databases locally.")
		fmt.Println("Select 'Proceed' when ready to Upload.")
	})

	if idx == 0 {
		// 7. Upload and Unlock
		return performBatchUploadUnlock(locked)
	}

	if idx == 1 { // Cancel (Unlock)
		fmt.Println("\nUnlocking databases...")
		for _, name := range locked {
			UnlockDatabase(name, currentUser, true)
		}
		return false
	}

	if idx == 4 { // Main Menu
		return true
	}

	// Back (3) / Upload Page (2) -> Return to (Upload) Menu (Keep locks)
	return false
}

// ==========================================
// Flow 2: Upload Locked
// ==========================================
func runUploadLocked() bool {
	// 1. Fetch "Locked by Me"
	spin := StartSpinner("Loading DB Status...")
	entries, _, err := getUploadableEntries(true, false) // only my locks, do sync check
	spin.Stop()

	if err != nil {
		fmt.Println("Error:", err)
		readKey()
		return false
	}

	if len(entries) == 0 {
		fmt.Println("\nNo databases currently locked by you.")
		readKey()
		return false
	}

	// 2. Select
	selectedNames, exitToMain := selectDBsEx("Upload Locked DB's", "Upload", entries)
	if exitToMain {
		return true
	}
	if len(selectedNames) == 0 {
		return false
	}

	// 3. Upload and Unlock
	return performBatchUploadUnlock(selectedNames)
}

// ==========================================
// Flow 3: Lock/Unlock Only
// ==========================================
func runLockUnlock() bool {
	// 1. Fetch ALL DBs
	spin := StartSpinner("Loading DB Status...")
	entries, _, err := getUploadableEntries(false, true) // include all, SKIP sync check
	spin.Stop()

	if err != nil {
		fmt.Println("Error:", err)
		readKey()
		return false
	}

	// Selection Logic (Inline to support custom buttons)
	selectionMap := make(map[string]bool)
	rowIdx := 0
	inMenu := false
	menuIdx := 0
	// Menu: Lock (0), Unlock (1), Back (2), Main Menu (3)
	opts := []string{"Lock", "Unlock", "Back", "Main Menu"}

	for {
		clearScreen()
		renderHeader()
		fmt.Println("\n[Lock/Unlock DB] - Select databases")

		t := table.NewWriter()
		t.SetOutputMirror(os.Stdout)
		t.SetStyle(table.StyleRounded)
		t.AppendHeader(table.Row{"SELECT", "DB NAME", "STATUS"})

		for i, entry := range entries {
			checked := selectionMap[entry.Name]
			checkbox := "[ ]"
			if checked {
				checkbox = "[x]"
			}

			c1, c2, c3 := checkbox, entry.Name, entry.Status
			c3 = entry.Color.Sprint(c3)

			if i == rowIdx && !inMenu {
				style := text.Colors{text.BgCyan, text.FgBlack}
				c1 = style.Sprint(checkbox)
				c2 = style.Sprint(c2)
				c3 = style.Sprint(entry.Status)
			}
			t.AppendRow(table.Row{c1, c2, c3})
		}
		t.Render()

		// Bottom Menu
		fmt.Println()
		tMenu := table.NewWriter()
		tMenu.SetOutputMirror(os.Stdout)
		tMenu.SetStyle(table.StyleRounded)
		row := table.Row{}
		for i, opt := range opts {
			if inMenu && i == menuIdx {
				row = append(row, text.Colors{text.BgCyan, text.FgBlack}.Sprint(" "+opt+" "))
			} else {
				row = append(row, fmt.Sprintf(" %s ", opt))
			}
		}
		tMenu.AppendRow(row)
		tMenu.Render()

		// Inputs
		char, key, err := readKey()
		if err != nil {
			return false
		}

		// Global Navigation
		if key == keyboard.KeyCtrlC {
			return true // Main Menu
		}
		if key == keyboard.KeyEsc || key == keyboard.KeyBackspace || key == keyboard.KeyBackspace2 || char == 'q' {
			return false // Back
		}

		if inMenu {
			if key == keyboard.KeyArrowLeft {
				menuIdx--
				if menuIdx < 0 {
					menuIdx = len(opts) - 1
				}
			} else if key == keyboard.KeyArrowRight {
				menuIdx++
				if menuIdx >= len(opts) {
					menuIdx = 0
				}
			} else if key == keyboard.KeyArrowUp {
				inMenu = false
				rowIdx = len(entries) - 1
			} else if key == keyboard.KeyEnter {
				// Actions
				var selected []string
				for _, e := range entries {
					if selectionMap[e.Name] {
						selected = append(selected, e.Name)
					}
				}

				switch menuIdx {
				case 0: // Lock
					if len(selected) > 0 {
						if performBatchLockUnlock(selected, "Lock") {
							return true
						}
					}
				case 1: // Unlock
					if len(selected) > 0 {
						if performBatchLockUnlock(selected, "Unlock") {
							return true
						}
					}
				case 2: // Back
					return false
				case 3: // Main Menu
					return true
				}
			}
		} else {
			// List Nav
			if key == keyboard.KeyArrowUp {
				rowIdx--
				if rowIdx < 0 {
					rowIdx = len(entries) - 1
				}
			} else if key == keyboard.KeyArrowDown {
				rowIdx++
				if rowIdx >= len(entries) {
					// Move to Menu
					inMenu = true
					menuIdx = 0
				}
			} else if key == keyboard.KeyEnter { // Enter toggles selection
				if len(entries) > 0 {
					target := entries[rowIdx].Name
					selectionMap[target] = !selectionMap[target]
				}
			}
		}
	}
}

// Common function for Lock/Unlock
func performBatchLockUnlock(dbNames []string, action string) bool {
	clearScreen()
	renderHeader()
	fmt.Printf("\n%sing %d databases...\n", action, len(dbNames))

	type Result struct {
		Name, Status string
		Color        text.Color
	}
	results := make([]Result, len(dbNames))
	var wg sync.WaitGroup
	// var mu sync.Mutex // No shared write logic needed if we index by i? Result slice access is safe if distinct indices? Yes.

	for i, name := range dbNames {
		wg.Add(1)
		go func(idx int, dbName string) {
			defer wg.Done()

			var err error
			fmt.Printf("⏳ %sing %s...\n", action, dbName)

			if action == "Lock" {
				// fmt.Printf("🔒 Locking %s...\n", dbName)
				err = LockDatabase(dbName, currentUser, hostname, "manual-lock")
			} else {
				// fmt.Printf("🔓 Unlocking %s...\n", dbName)
				err = UnlockDatabase(dbName, currentUser, false)
			}

			status := action + "ed" // Locked / Unlocked
			col := text.FgGreen
			if err != nil {
				fmt.Printf("❌ Failed: %s : %v\n", dbName, err)
				status = "Failed"
				col = text.FgRed
			} else {
				fmt.Printf("✅ Success %s\n", dbName)
			}
			results[idx] = Result{Name: dbName, Status: status, Color: col}
		}(i, name)
	}
	wg.Wait()

	// Summary
	idx := HandleMenu([]string{"Back", "Main Menu"}, func() {
		renderHeader()
		fmt.Printf("\n[%s Summary]\n", action)
		t := table.NewWriter()
		t.SetOutputMirror(os.Stdout)
		t.SetStyle(table.StyleRounded)
		t.AppendHeader(table.Row{"DB NAME", "RESULT"})
		for _, r := range results {
			t.AppendRow(table.Row{r.Name, r.Color.Sprint(r.Status)})
		}
		t.Render()
	})

	return idx == 1
}

// Helpers

func getUploadableEntries(onlyMyMills bool, skipSyncCheck bool) ([]UploadEntry, map[string]string, error) {
	// Note: getAllDBs/fetchLocks/checkSyncStatus might be slow, caller wraps spinner
	allDBs, err := getAllDBs()
	if err != nil {
		return nil, nil, err
	}
	locks, err := fetchLocks()
	if err != nil {
		return nil, nil, err
	}

	var syncMap map[string]string
	if !skipSyncCheck {
		syncMap, err = checkSyncStatus()
		// Ignore sync error non-fatal?
	} else {
		syncMap = make(map[string]string)
	}

	var entries []UploadEntry
	for _, db := range allDBs {
		if !db.ExistsLocal {
			continue
		}

		// Status calculation
		status := "Ready"
		color := text.FgGreen

		isLockedByMe := false
		if l, ok := locks[db.Name]; ok {
			if l.Owner == currentUser {
				status = "Locked by YOU"
				color = text.FgYellow
				isLockedByMe = true
			} else {
				status = fmt.Sprintf("Locked by %s", l.Owner)
				color = text.FgRed
			}
		} else {
			// Not locked
			if !db.ExistsRemote {
				status = "New DB"
				color = text.FgBlue
			} else if val, ok := syncMap[db.Name]; ok && (val == SyncStatusDifferent || val == SyncStatusRemoteOnly) {
				status = "Outdated"
				color = text.FgRed
			}
		}

		if onlyMyMills {
			if isLockedByMe {
				entries = append(entries, UploadEntry{Name: db.Name, Status: status, Color: color})
			}
		} else {
			entries = append(entries, UploadEntry{Name: db.Name, Status: status, Color: color})
		}
	}
	return entries, syncMap, nil
}

func checkIsLockedByOther(status string) bool {
	// Hacky string check, but consistent with getUploadableEntries
	// Better to pass LockEntry object, but this works for now given struct
	return len(status) > 9 && status[:9] == "Locked by" && status != "Locked by YOU"
}

func selectDBsEx(title string, btnLabel string, entries []UploadEntry) ([]string, bool) {
	selectionMap := make(map[string]bool)
	rowIdx := 0
	inMenu := false
	menuIdx := 0 // 0=Action, 1=Back, 2=Main Menu

	// Default btnLabel
	if btnLabel == "" {
		btnLabel = "Proceed"
	}
	opts := []string{btnLabel, "Back", "Main Menu"}

	for {
		clearScreen()
		renderHeader()
		fmt.Printf("\n[%s] - Select databases\n", title)

		t := table.NewWriter()
		t.SetOutputMirror(os.Stdout)
		t.SetStyle(table.StyleRounded)
		t.AppendHeader(table.Row{"SELECT", "DB NAME", "STATUS"})

		for i, entry := range entries {
			checked := selectionMap[entry.Name]
			checkbox := "[ ]"
			if checked {
				checkbox = "[x]"
			}

			c1, c2, c3 := checkbox, entry.Name, entry.Status
			c3 = entry.Color.Sprint(c3)

			if i == rowIdx && !inMenu {
				style := text.Colors{text.BgCyan, text.FgBlack}
				c1 = style.Sprint(checkbox)
				c2 = style.Sprint(c2)
				c3 = style.Sprint(entry.Status)
			}

			t.AppendRow(table.Row{c1, c2, c3})
		}
		t.Render()

		// Menu
		fmt.Println()
		tMenu := table.NewWriter()
		tMenu.SetOutputMirror(os.Stdout)
		tMenu.SetStyle(table.StyleRounded)
		row := table.Row{}
		for i, opt := range opts {
			if inMenu && i == menuIdx {
				row = append(row, text.Colors{text.BgCyan, text.FgBlack}.Sprint(" "+opt+" "))
			} else {
				row = append(row, fmt.Sprintf(" %s ", opt))
			}
		}
		tMenu.AppendRow(row)
		tMenu.Render()

		char, key, err := readKey()
		if err != nil {
			return nil, false
		}

		if key == keyboard.KeyCtrlC {
			return nil, true
		}
		if key == keyboard.KeyEsc || key == keyboard.KeyBackspace || key == keyboard.KeyBackspace2 || char == 'q' {
			return nil, false
		}

		if inMenu {
			if key == keyboard.KeyArrowLeft {
				menuIdx--
				if menuIdx < 0 {
					menuIdx = len(opts) - 1
				}
			} else if key == keyboard.KeyArrowRight {
				menuIdx++
				if menuIdx >= len(opts) {
					menuIdx = 0
				}
			} else if key == keyboard.KeyArrowUp {
				inMenu = false
				rowIdx = len(entries) - 1
			} else if key == keyboard.KeyEnter {
				// Action
				switch menuIdx {
				case 0:
					var selected []string
					for _, e := range entries {
						if selectionMap[e.Name] {
							selected = append(selected, e.Name)
						}
					}
					return selected, false
				case 1: // Back
					return nil, false
				case 2: // Main Menu
					return nil, true
				}
			}
		} else {
			if key == keyboard.KeyArrowUp {
				rowIdx--
				if rowIdx < 0 {
					rowIdx = len(entries) - 1
				}
			} else if key == keyboard.KeyArrowDown {
				rowIdx++
				if rowIdx >= len(entries) {
					inMenu = true
					menuIdx = 0
				}
			} else if key == keyboard.KeyEnter { // Enter toggles
				target := entries[rowIdx].Name
				selectionMap[target] = !selectionMap[target]
			}
		}
	}
}

func performBatchUploadUnlock(dbNames []string) bool {
	clearScreen()
	renderHeader()
	fmt.Printf("\nUploading %d databases...\n", len(dbNames))
	fmt.Println()

	type Result struct {
		Name, Status string
		Color        text.Color
	}
	results := make([]Result, len(dbNames))
	var wg sync.WaitGroup

	for i, db := range dbNames {
		wg.Add(1)
		go func(idx int, name string) {
			defer wg.Done()

			// Upload
			fmt.Printf("⏳ Uploading %s...\n", name)
			// Note: UploadDatabase output might interfere with other goroutines but it's okay for CLI
			err := UploadDatabase(name, true)

			status := "Success"
			col := text.FgGreen
			if err != nil {
				fmt.Printf("❌ Upload failed %s: %v\n", name, err)
				status = "Upload Failed"
				col = text.FgRed
			} else {
				fmt.Printf("✅ Uploaded %s\n", name)
			}

			// Unlock (Always, if we reached here we own the lock)
			fmt.Printf("🔓 Unlocking %s...\n", name)
			unlockErr := UnlockDatabase(name, currentUser, true)
			if unlockErr != nil {
				fmt.Printf("❌ Unlock failed %s: %v\n", name, unlockErr)
				if status == "Success" {
					status = "Unlock Failed"
					col = text.FgRed
				}
			}

			results[idx] = Result{Name: name, Status: status, Color: col}
		}(i, db)
	}
	wg.Wait()
	time.Sleep(500 * time.Millisecond)

	// Summary
	idx := HandleMenu([]string{"Back", "Main Menu"}, func() {
		renderHeader()
		fmt.Println("\n[Operation Summary]")
		t := table.NewWriter()
		t.SetOutputMirror(os.Stdout)
		t.SetStyle(table.StyleRounded)
		t.AppendHeader(table.Row{"DB NAME", "RESULT"})
		for _, r := range results {
			t.AppendRow(table.Row{r.Name, r.Color.Sprint(r.Status)})
		}
		t.Render()
	})
	return idx == 1
}
