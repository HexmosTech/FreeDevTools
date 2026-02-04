package main

import (
	"bufio"
	"encoding/json"
	"fmt"
	"os"
	"os/exec"
	"path/filepath"
	"strings"
	"time"
)

// Lock constants
const (
	LockDir = "b2-config:hexmos/freedevtools/content/db/lock/"
)

// Sync Status Constants
const (
	SyncStatusLocalOnly  = "+"
	SyncStatusRemoteOnly = "-"
	SyncStatusDifferent  = "*"
)

type LockEntry struct {
	DBName    string
	Owner     string
	Hostname  string
	Type      string // "reserve" or "lock"
	ExpiresAt time.Time
}

func checkRclone() error {
	_, err := exec.LookPath("rclone")
	return err
}

func checkRcloneConfig() bool {
	homeDir, _ := os.UserHomeDir()
	configPath := filepath.Join(homeDir, ".config", "rclone", "rclone.conf")
	if _, err := os.Stat(configPath); err == nil {
		return true
	}
	return false
}

func runInit() {
	fmt.Println("⬇️  Initializing Rclone...")
	if _, err := exec.LookPath("rclone"); err != nil {
		fmt.Println("📦 Installing rclone...")
		cmd := exec.Command("bash", "-c", "curl https://rclone.org/install.sh | sudo bash")
		cmd.Stdin = os.Stdin
		cmd.Stdout = os.Stdout
		cmd.Stderr = os.Stderr
		if err := cmd.Run(); err != nil {
			fmt.Printf("❌ Failed to install rclone: %v\n", err)
			return
		}
		fmt.Println("✅ rclone installed successfully")
	} else {
		fmt.Println("✅ rclone already installed")
	}

	cmd := exec.Command("rclone", "version")
	cmd.Stdout = os.Stdout
	cmd.Run()

	if _, err := os.Stat(".env"); os.IsNotExist(err) {
		fmt.Println("❌ Error: .env file not found")
		return
	}

	envs, err := loadEnv()
	if err != nil {
		fmt.Printf("❌ Failed to read .env: %v\n", err)
		return
	}

	homeDir, err := os.UserHomeDir()
	if err != nil {
		fmt.Printf("❌ Failed to get user home dir: %v\n", err)
		return
	}

	configDir := filepath.Join(homeDir, ".config", "rclone")
	if err := os.MkdirAll(configDir, 0755); err != nil {
		fmt.Printf("❌ Failed to create config dir: %v\n", err)
		return
	}

	configContent := fmt.Sprintf(`[b2-config]
type = b2
account = %s
key = %s
hard_delete = false
`, envs["B2_ACCOUNT_ID"], envs["B2_APPLICATION_KEY"])

	configFile := filepath.Join(configDir, "rclone.conf")
	if err := os.WriteFile(configFile, []byte(configContent), 0600); err != nil {
		fmt.Printf("❌ Failed to write config file: %v\n", err)
		return
	}

	fmt.Println("✅ rclone config created successfully")
	fmt.Println("✅ Rclone initialized successfully")
}

func bootstrapSystem() error {
	// No more lock registry init needed
	if err := checkDBDiscoveryAndSync(); err != nil {
		return fmt.Errorf("db discovery: %w", err)
	}
	return nil
}

func checkDBDiscoveryAndSync() error {
	localDBs, err := getLocalDBs()
	if err != nil {
		return err
	}

	if len(localDBs) > 0 {
		return nil
	}

	fmt.Println("No local databases found.")

	remoteDBs, err := getRemoteDBs()
	if err != nil {
		return nil
	}

	if len(remoteDBs) == 0 {
		fmt.Println("No remote databases found either. Starting fresh.")
		return nil
	}

	fmt.Printf("Remote databases detected (%d):\n", len(remoteDBs))
	for _, db := range remoteDBs {
		fmt.Printf("- %s\n", db)
	}
	// Note: Auto-sync question removal as per refactor request to use menus.
	// But bootstrap might still want it? leaving it out for now to avoid blocking inputs.
	return nil
}

func getLocalDBs() ([]string, error) {
	matches, err := filepath.Glob(filepath.Join(LocalDBDir, "*.db"))
	if err != nil {
		return nil, err
	}
	var names []string
	for _, m := range matches {
		names = append(names, filepath.Base(m))
	}
	return names, nil
}

func getRemoteDBs() ([]string, error) {
	cmd := exec.Command("rclone", "lsf", DBBucket, "--files-only", "--include", "*.db")
	out, err := cmd.Output()
	if err != nil {
		return nil, err
	}

	lines := strings.Split(string(out), "\n")
	var names []string
	for _, line := range lines {
		trimmed := strings.TrimSpace(line)
		if trimmed != "" {
			names = append(names, trimmed)
		}
	}
	return names, nil
}

func checkSyncStatus() (map[string]string, error) {
	cmd := exec.Command("rclone", "check", "--combined", "-", "--one-way", DBBucket, LocalDBDir)
	out, err := cmd.CombinedOutput()
	if err != nil {
		if exitError, ok := err.(*exec.ExitError); ok {
			if exitError.ExitCode() != 1 {
				return nil, fmt.Errorf("rclone check failed: %v", string(out))
			}
		} else {
			return nil, err
		}
	}

	lines := strings.Split(string(out), "\n")
	result := make(map[string]string)
	for _, line := range lines {
		line = strings.TrimSpace(line)
		if line == "" {
			continue
		}
		parts := strings.SplitN(line, " ", 2)
		if len(parts) != 2 {
			continue
		}
		code := parts[0]
		path := strings.TrimSpace(parts[1])

		result[path] = code
	}
	return result, nil
}

func checkFileChanged(dbName string) (bool, error) {
	localPath := filepath.Join(LocalDBDir, dbName)
	remotePath := DBBucket + dbName

	// rclone check returns exit code 1 if differences found
	cmd := exec.Command("rclone", "check", localPath, remotePath, "--one-way")
	if err := cmd.Run(); err != nil {
		if exitError, ok := err.(*exec.ExitError); ok {
			if exitError.ExitCode() == 1 {
				return true, nil // Changed
			}
		}
		return false, err
	}
	return false, nil // No change
}

// SyncDatabase syncs a single database from remote to local
func SyncDatabase(dbName string) error {
	locks, err := fetchLocks()
	if err != nil {
		return fmt.Errorf("failed to fetch locks: %w", err)
	}
	// Warning if locked by others?
	// Existing logic blocked ALL syncs if ANY DB was locked.
	// We will block if THIS db is locked by someone else.
	if l, ok := locks[dbName]; ok {
		if l.Type == "lock" { // Uploading
			return fmt.Errorf("database %s is currently being uploaded by %s", dbName, l.Owner)
		}
		// If just reserved, we can technically sync, but warning is good.
		// For now, let's allow sync if just reserved, but warn. (Caller handles warning)
	}

	if err := os.MkdirAll(LocalDBDir, 0755); err != nil {
		return fmt.Errorf("failed to create local directory: %w", err)
	}

	// We use copyto to sync a single file
	remotePath := DBBucket + dbName
	localPath := filepath.Join(LocalDBDir, dbName)

	// rclone copyto remote:path/to/file local/path/to/file
	cmdSync := exec.Command("rclone", "copyto",
		remotePath,
		localPath,
		"--checksum",
		"--retries", "20",
		"--low-level-retries", "30",
		"--retries-sleep", "10s",
		"--progress",
	)
	cmdSync.Stdout = os.Stdout
	cmdSync.Stderr = os.Stderr
	if err := cmdSync.Run(); err != nil {
		return fmt.Errorf("sync failed: %w", err)
	}
	return nil
}

// SyncAllDatabases syncs all databases from remote to local
func SyncAllDatabases() error {
	fmt.Println("⬇️  Syncing all databases from Backblaze B2...")
	if err := os.MkdirAll(LocalDBDir, 0755); err != nil {
		return fmt.Errorf("failed to create local directory: %w", err)
	}

	// rclone sync remote:dir local:dir
	cmdSync := exec.Command("rclone", "sync",
		DBBucket,
		LocalDBDir,
		"--checksum",
		"--retries", "20",
		"--low-level-retries", "30",
		"--retries-sleep", "10s",
		"--progress",
	)
	cmdSync.Stdout = os.Stdout
	cmdSync.Stderr = os.Stderr
	if err := cmdSync.Run(); err != nil {
		return fmt.Errorf("sync failed: %w", err)
	}

	fmt.Println("✅ Database sync completed")
	return nil
}

// UploadDatabase uploads a single database to remote
func UploadDatabase(dbName string, quiet bool) error {
	// Check for changes before uploading
	changed, err := checkFileChanged(dbName)
	if err != nil {
		if !quiet {
			fmt.Printf("⚠️  Could not verify changes: %v. Proceeding with upload.\n", err)
		}
		changed = true // Fallback to upload
	}

	if !changed {
		if !quiet {
			fmt.Println("No change found in this db skipping Upload")
		}
		return nil
	}

	if !quiet {
		fmt.Printf("⬆ Uploading %s to Backblaze B2...\n", dbName)
	}
	localPath := filepath.Join(LocalDBDir, dbName)

	// Use copy to directory (DBBucket includes trailing slash)
	// rclone copy localfile remote:dir/
	rcloneArgs := []string{"copy",
		localPath,
		DBBucket,
		"--checksum",
		"--retries", "20",
		"--low-level-retries", "30",
		"--retries-sleep", "10s",
	}
	if !quiet {
		rcloneArgs = append(rcloneArgs, "--progress")
	}
	cmd := exec.Command("rclone", rcloneArgs...)
	if !quiet {
		cmd.Stdout = os.Stdout
		cmd.Stderr = os.Stderr
	}
	if err := cmd.Run(); err != nil {
		return fmt.Errorf("upload failed: %w", err)
	}

	if !quiet {
		fmt.Println("📢 Notifying Discord...")
		sendDiscord(fmt.Sprintf("✅ Database updated to B2: **%s**", dbName))
	} else {
		sendDiscord(fmt.Sprintf("✅ Database updated to B2: **%s**", dbName))
	}

	return nil
}

// LockDatabase creates a .reserve file
func LockDatabase(dbName, owner, host, intent string) error {
	// Check if already locked
	locks, err := fetchLocks()
	if err != nil {
		return err
	}
	if l, ok := locks[dbName]; ok {
		// allow re-lock if same owner?
		if l.Owner != owner {
			return fmt.Errorf("database %s is already locked/reserved by %s", dbName, l.Owner)
		}
	}

	// Filename: <dbname>.<user>.<hostname>.lock
	filename := fmt.Sprintf("%s.%s.%s.lock", dbName, owner, host)

	// Create empty file locally
	tmpFile := filepath.Join(os.TempDir(), filename)
	if err := os.WriteFile(tmpFile, []byte(intent), 0644); err != nil {
		return err
	}
	defer os.Remove(tmpFile)

	// Upload to B2
	cmd := exec.Command("rclone", "copyto", tmpFile, LockDir+filename)
	if err := cmd.Run(); err != nil {
		return fmt.Errorf("failed to acquire lock: %w", err)
	}
	return nil
}

// UnlockDatabase removes the .reserve or .lock file
func UnlockDatabase(dbName, owner string, force bool) error {
	locks, err := fetchLocks()
	if err != nil {
		return err
	}

	entry, ok := locks[dbName]
	if !ok {
		return nil // Already unlocked
	}

	if !force && entry.Owner != owner {
		return fmt.Errorf("cannot unlock: owned by %s", entry.Owner)
	}

	// Construct filename to delete
	// We need to know the exact filename from fetchLocks logic or reconstruct it.
	// Since fetchLocks parses, let's reconstruct or list to find exact match if needed.
	// But our naming convention is strict, so we can try to reconstruct if we trust the entry.
	// Actually, fetchLocks should probably return the Filename too.
	// For now, let's list again to find the file specific to this DB + Owner.

	// Better: fetchLocks returns map[dbName]LockEntry, let's add Filename to LockEntry in next step if needed.
	// For now, assume format:
	filename := fmt.Sprintf("%s.%s.%s.%s", dbName, entry.Owner, entry.Hostname, entry.Type)

	cmd := exec.Command("rclone", "deletefile", LockDir+filename)
	if err := cmd.Run(); err != nil {
		return fmt.Errorf("failed to delete lock file: %w", err)
	}
	return nil
}

// fetchLocks lists all files in LockDir and parses them
func fetchLocks() (map[string]LockEntry, error) {
	cmd := exec.Command("rclone", "lsf", LockDir)
	out, err := cmd.Output()
	if err != nil {
		// If directory doesn't exist, it might be empty
		return make(map[string]LockEntry), nil
	}

	locks := make(map[string]LockEntry)
	lines := strings.Split(string(out), "\n")
	for _, line := range lines {
		line = strings.TrimSpace(line)
		if line == "" {
			continue
		}

		// Expected format: <dbname>.<user>.<hostname>.(reserve|lock)
		// Reverse split to find extension
		parts := strings.Split(line, ".")
		if len(parts) < 4 {
			continue // Invalid format
		}

		// type is last
		lockType := parts[len(parts)-1] // reserve or lock
		hostname := parts[len(parts)-2]
		owner := parts[len(parts)-3]
		// dbname is everything before
		dbName := strings.Join(parts[:len(parts)-3], ".")

		locks[dbName] = LockEntry{
			DBName:    dbName,
			Owner:     owner,
			Hostname:  hostname,
			Type:      lockType,
			ExpiresAt: time.Now().Add(24 * time.Hour), // Dummy, B2 doesn't give modtime easily in lsf without flags
		}
	}
	return locks, nil
}

// updateLocks is removed as we don't use single file anymore

func sendDiscord(content string) {
	payload := map[string]string{"content": content}
	data, _ := json.Marshal(payload)
	exec.Command("curl", "-H", "Content-Type: application/json", "-d", string(data), DiscordWebhookURL, "-s", "-o", "/dev/null").Run()
}

func loadEnv() (map[string]string, error) {
	envPath := filepath.Join(projectRoot, ".env")
	f, err := os.Open(envPath)
	if err != nil {
		return nil, err
	}
	defer f.Close()

	envs := make(map[string]string)
	scanner := bufio.NewScanner(f)
	for scanner.Scan() {
		line := strings.TrimSpace(scanner.Text())
		if line == "" || strings.HasPrefix(line, "#") {
			continue
		}
		if parts := strings.SplitN(line, "=", 2); len(parts) == 2 {
			envs[parts[0]] = strings.Trim(parts[1], "\"")
		}
	}
	return envs, nil
}
