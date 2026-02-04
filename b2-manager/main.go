package main

import (
	"fmt"
	"os"
	"os/user"
	"path/filepath"
	"regexp"
	"sort"

	"strconv"

	"github.com/eiannone/keyboard"
	"github.com/jedib0t/go-pretty/v6/table"
	"github.com/jedib0t/go-pretty/v6/text"
)

// Global paths and config
var (
	DBBucket          = "b2-config:hexmos/freedevtools/content/db/"
	LocalDBDir        string // Will be resolved at runtime
	DiscordWebhookURL string // Will be loaded from env
)

// Global state
var (
	currentUser string
	hostname    string
	projectRoot string
)

func init() {
	var err error
	var u *user.User
	u, err = user.Current()
	if err != nil {
		currentUser = "unknown"
	} else {
		currentUser = u.Username
	}
	var h string
	h, err = os.Hostname()
	if err != nil {
		hostname = "unknown"
	} else {
		hostname = h
	}

	projectRoot, err = findProjectRoot()
	if err != nil {
		fmt.Printf("⚠️  Could not determine project root: %v. Using CWD.\n", err)
		projectRoot, _ = os.Getwd()
	}

	LocalDBDir = filepath.Join(projectRoot, "db/all_dbs/")

	// Load env to get Discord URL
	envs, err := loadEnv()
	if err == nil {
		DiscordWebhookURL = envs["DISCORD_WEBHOOK_URL"]
	}
}

func findProjectRoot() (string, error) {
	dir, err := os.Getwd()
	if err != nil {
		return "", err
	}
	for {
		if _, err := os.Stat(filepath.Join(dir, ".env")); err == nil {
			return dir, nil
		}
		if _, err := os.Stat(filepath.Join(dir, "go.mod")); err == nil {
			return dir, nil
		}
		parent := filepath.Dir(dir)
		if parent == dir {
			return "", fmt.Errorf("root not found")
		}
		dir = parent
	}
}

func main() {
	if err := initKeyboard(); err != nil {
		fmt.Println("Failed to initialize keyboard:", err)
		return
	}
	defer closeKeyboard()

	// Startup checks (silent)
	// Startup checks
	if err := checkRclone(); err != nil {
		fmt.Println("Warning: rclone not found or error:", err)
	}
	if !checkRcloneConfig() {
		fmt.Println("Warning: rclone config not found. Run 'init' or check setup.")
	}
	if err := bootstrapSystem(); err != nil {
		fmt.Println("Startup Warning:", err)
	}

	runMainMenu()
}

func runMainMenu() {
	options := []string{"Status", "Upload", "Sync to Local", "Exit"}
	descriptions := []string{
		"Check status of all databases (Locks, Sync state)",
		"Upload databases to B2 (Auto-lock)",
		"Sync databases from B2 to local",
		"Exit the application",
	}
	selected := 0

	for {
		clearScreen()
		renderHeader()
		fmt.Println("\nUse ← → arrows to navigate, Enter to select.")

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

		fmt.Printf("\n%s\n", descriptions[selected])

		char, key, err := readKey()
		if err != nil {
			break
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
			switch options[selected] {
			case "Status":
				handleStatus()
			case "Upload":
				handleUpload()
			case "Sync to Local":
				handleSync()
			case "Exit":
				return
			}
		} else if key == keyboard.KeyEsc || key == keyboard.KeyCtrlC || char == 'q' {
			return
		}
	}
}

func renderHeader() {
	t := table.NewWriter()
	t.SetOutputMirror(os.Stdout)
	t.SetStyle(table.StyleRounded)
	t.AppendRow(table.Row{"fdtdb - Interactive DB Control Plane"})
	t.AppendRow(table.Row{fmt.Sprintf("v1.0 | %s@%s", currentUser, hostname)})
	t.Render()
}

// ... DBInfo, getAllDBs, sortDBs ... (reusing existing logic placeholders)

type DBInfo struct {
	Name         string
	ExistsLocal  bool
	ExistsRemote bool
}

func getAllDBs() ([]DBInfo, error) {
	local, err := getLocalDBs()
	if err != nil {
		return nil, err
	}
	remote, err := getRemoteDBs()
	if err != nil {
		return nil, err
	}

	dbMap := make(map[string]*DBInfo)
	for _, name := range local {
		if _, ok := dbMap[name]; !ok {
			dbMap[name] = &DBInfo{Name: name}
		}
		dbMap[name].ExistsLocal = true
	}
	for _, name := range remote {
		if _, ok := dbMap[name]; !ok {
			dbMap[name] = &DBInfo{Name: name}
		}
		dbMap[name].ExistsRemote = true
	}
	var all []DBInfo
	for _, info := range dbMap {
		all = append(all, *info)
	}
	sortDBs(all)
	return all, nil
}

func sortDBs(dbs []DBInfo) {
	re := regexp.MustCompile(`^(.*)-v(\d+)(\..*)?$`)
	sort.Slice(dbs, func(i, j int) bool {
		name1 := dbs[i].Name
		name2 := dbs[j].Name
		match1 := re.FindStringSubmatch(name1)
		match2 := re.FindStringSubmatch(name2)
		if match1 != nil && match2 != nil {
			base1 := match1[1]
			base2 := match2[1]
			if base1 != base2 {
				return base1 < base2
			}
			v1, err1 := strconv.Atoi(match1[2])
			v2, err2 := strconv.Atoi(match2[2])
			if err1 != nil {
				v1 = 0
			}
			if err2 != nil {
				v2 = 0
			}
			return v1 > v2 // Descending version
		}
		return name1 < name2
	})
}

func handleSync() {
	clearScreen()
	renderHeader()
	fmt.Println("\n[Sync] - Syncing all databases...")
	SyncAllDatabases()

	fmt.Println()
	HandleMenu([]string{"Back", "Main Menu"}, nil) // nil renderFunc = inline at bottom
}
