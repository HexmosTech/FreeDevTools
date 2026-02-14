package core

import (
	"bufio"
	"context"
	"encoding/json"
	"fmt"
	"io"
	"os"
	"os/exec"
	"path/filepath"
	"regexp"
	"sort"
	"strconv"
	"strings"
	"time"

	"b2m/model"

	"github.com/jedib0t/go-pretty/v6/progress"
)

func sortDBs(dbs []model.DBInfo) {
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

// AggregateDBs combines local and remote DB lists into a unified list of DBInfo structures
func AggregateDBs(local []string, remote []string) ([]model.DBInfo, error) {
	dbMap := make(map[string]*model.DBInfo)
	for _, name := range local {
		if _, ok := dbMap[name]; !ok {
			dbMap[name] = &model.DBInfo{Name: name}
		}
		dbMap[name].ExistsLocal = true

		// Get local file stats
		info, err := os.Stat(filepath.Join(model.AppConfig.LocalDBDir, name))
		if err == nil {
			dbMap[name].ModifiedAt = info.ModTime()
			dbMap[name].CreatedAt = info.ModTime()
		}
	}
	for _, name := range remote {
		if _, ok := dbMap[name]; !ok {
			dbMap[name] = &model.DBInfo{Name: name}
		}
		dbMap[name].ExistsRemote = true
	}
	var all []model.DBInfo
	for _, info := range dbMap {
		all = append(all, *info)
	}
	sortDBs(all)
	return all, nil
}
func sendDiscord(ctx context.Context, content string) {
	payload := map[string]string{"content": content}
	data, _ := json.Marshal(payload)
	err := exec.CommandContext(ctx, "curl", "-H", "Content-Type: application/json", "-d", string(data), model.AppConfig.DiscordWebhookURL, "-s", "-o", "/dev/null").Run()
	if err != nil {
		LogError("Failed to send discord notification: %v", err)
	}
}

// ValidateAction checks if an action (upload/download) is allowed given the DB status.
func ValidateAction(dbInfo model.DBStatusInfo, action string) error {
	switch action {
	case "upload":
		if dbInfo.StatusCode == model.StatusCodeRemoteNewer {
			return fmt.Errorf("CONFLICT: Remote is newer. Please download first.")
		}
		if dbInfo.StatusCode == model.StatusCodeLockedByOther {
			return fmt.Errorf("LOCKED: Database is locked by another user.")
		}
		if dbInfo.StatusCode == model.StatusCodeRemoteOnly {
			return fmt.Errorf("MISSING: Database does not exist locally.")
		}

	case "download":
		if dbInfo.StatusCode == model.StatusCodeLocalNewer || dbInfo.StatusCode == model.StatusCodeNewLocal {
			// If we have local changes (or are new local), downloading will overwrite them.
			// Return ErrWarningLocalChanges which is handled as a warning (prompting user confirmation) rather than a hard failure.
			return model.ErrWarningLocalChanges
		}

	}
	return nil
}

// ParseRcloneOutput reads rclone's JSON output from the provided reader and calls onUpdate with progress
func ParseRcloneOutput(r io.Reader, onUpdate func(p model.RcloneProgress)) error {
	scanner := bufio.NewScanner(r)
	for scanner.Scan() {
		line := scanner.Text()

		// Parse JSON line
		var p model.RcloneProgress
		if err := json.Unmarshal([]byte(line), &p); err != nil {
			// If not JSON, ignore (might be other logs)
			continue
		}

		// Update callback
		// if p.Stats.TotalBytes > 0 { // Allow 0 for indeterminate progress
		onUpdate(p)
		// }
	}
	if err := scanner.Err(); err != nil {
		return err
	}
	return nil
}

// SetupUnifiedProgressBar creates and renders the progress bar setup used for unified flows
func SetupUnifiedProgressBar() (progress.Writer, *progress.Tracker) {
	pw := progress.NewWriter()
	pw.SetAutoStop(true)
	pw.SetTrackerLength(25)
	pw.SetMessageWidth(40) // Increased width for speed info
	pw.SetNumTrackersExpected(1)
	pw.SetSortBy(progress.SortByPercentDsc)
	pw.SetStyle(progress.StyleDefault)
	pw.SetUpdateFrequency(time.Millisecond * 100)
	pw.Style().Colors = progress.StyleColorsExample
	pw.Style().Options.PercentFormat = "%4.1f%%"
	pw.Style().Visibility.ETA = true
	pw.Style().Visibility.Time = true
	pw.Style().Visibility.Value = true
	pw.Style().Options.TimeInProgressPrecision = time.Second
	pw.Style().Options.TimeDonePrecision = time.Millisecond

	go pw.Render()

	tracker := progress.Tracker{
		Message: "Initializing...",
		Total:   100,
		Units:   progress.UnitsDefault,
	}
	pw.AppendTracker(&tracker)

	return pw, &tracker
}

// TrackProgress creates a standard progress bar and updates it from rclone output (Legacy/Default)
func TrackProgress(r io.Reader, totalSize int64, description string) error {
	pw := progress.NewWriter()
	pw.SetAutoStop(true)
	pw.SetTrackerLength(25)
	pw.SetMessageWidth(20)
	pw.SetNumTrackersExpected(1)
	pw.SetSortBy(progress.SortByPercentDsc)
	pw.SetStyle(progress.StyleDefault)
	pw.SetUpdateFrequency(time.Millisecond * 100)
	pw.Style().Colors = progress.StyleColorsExample
	pw.Style().Options.PercentFormat = "%4.1f%%"

	go pw.Render()

	tracker := progress.Tracker{Message: description, Total: totalSize, Units: progress.UnitsBytes}
	pw.AppendTracker(&tracker)

	err := ParseRcloneOutput(r, func(p model.RcloneProgress) {
		if totalSize == 0 && p.Stats.TotalBytes > 0 {
			tracker.UpdateTotal(p.Stats.TotalBytes)
		}
		tracker.SetValue(p.Stats.Bytes)
	})

	tracker.MarkAsDone()
	time.Sleep(100 * time.Millisecond)
	return err
}

// LockDatabase creates a .lock file
func LockDatabase(ctx context.Context, dbName, owner, host, intent string, force bool) error {
	locks, err := FetchLocks(ctx)
	if err != nil {
		LogError("fetchLocks failed in LockDatabase: %v", err)
		return err
	}
	if l, ok := locks[dbName]; ok {
		// If force is true, we ignore existing locks (we will overwrite)
		// If force is false, we check ownership
		if !force {
			if l.Owner != owner {
				LogError("Database %s already locked by %s", dbName, l.Owner)
				return fmt.Errorf("%w: already locked by %s", model.ErrDatabaseLocked, l.Owner)
			}
		}
	}

	filename := fmt.Sprintf("%s.%s.%s.lock", dbName, owner, host)

	// If forcing, we first clean up ALL existing locks for this DB to ensure we start fresh.
	if force {
		LogInfo("Force locking: Cleaning up old locks for %s", dbName)
		if err := UnlockDatabase(ctx, dbName, "", true); err != nil {
			LogInfo("Warning: Failed to cleanup old locks during force lock: %v", err)
		}
	}

	tmpFile := filepath.Join(os.TempDir(), filename)
	if err := os.WriteFile(tmpFile, []byte(intent), 0644); err != nil {
		LogError("Failed to write temp lock file: %v", err)
		return err
	}
	defer os.Remove(tmpFile)

	// Use RcloneCopy to upload the lock file
	// We use "copyto" because we want to rename the temp file to the target lock filename
	// quiet=true because we don't need progress for a small lock file
	// onProgress=nil
	if err := RcloneCopy(ctx, "copyto", tmpFile, model.AppConfig.LockDir+filename, "Acquiring lock...", true, nil); err != nil {
		// If cancelled
		if ctx.Err() != nil {
			return fmt.Errorf("lock cancelled")
		}
		LogError("LockDatabase: RcloneCopy failed: %v", err)
		return fmt.Errorf("failed to acquire lock: %w", err)
	}
	return nil
}

// UnlockDatabase removes the .lock file
func UnlockDatabase(ctx context.Context, dbName, owner string, force bool) error {
	// If force is true, we delete ALL lock files for this DB to ensure a clean slate.
	if force {
		// Use rclone delete with include pattern
		// Pattern: dbName.*.lock
		pattern := fmt.Sprintf("%s.*.lock", dbName)
		LogInfo("Force unlocking %s: deleting all files matching %s", dbName, pattern)

		cmd := exec.CommandContext(ctx, "rclone", "delete", model.AppConfig.LockDir, "--include", pattern)
		if err := cmd.Run(); err != nil {
			LogError("Failed to force delete lock files on B2: %v", err)
			return fmt.Errorf("failed to force delete lock files: %w", err)
		}
		return nil
	}

	// Normal graceful unlock
	locks, err := FetchLocks(ctx)
	if err != nil {
		LogError("fetchLocks failed in UnlockDatabase: %v", err)
		return err
	}

	entry, ok := locks[dbName]
	if !ok {
		return nil // Already unlocked
	}

	if entry.Owner != owner {
		LogError("Cannot unlock %s: owned by %s", dbName, entry.Owner)
		return fmt.Errorf("cannot unlock: owned by %s", entry.Owner)
	}

	filename := fmt.Sprintf("%s.%s.%s.%s", dbName, entry.Owner, entry.Hostname, entry.Type)

	// Safety check: ensure we are only deleting a .lock file
	if !strings.HasSuffix(filename, ".lock") {
		LogError("Safety check failed: attempted to delete non-lock file %s", filename)
		return fmt.Errorf("safety check failed: attempted to delete non-lock file %s", filename)
	}

	// Use RcloneDeleteFile
	if err := RcloneDeleteFile(ctx, model.AppConfig.LockDir+filename); err != nil {
		LogError("UnlockDatabase: RcloneDeleteFile failed: %v", err)
		return fmt.Errorf("failed to delete lock file: %w", err)
	}
	return nil
}

// getLocalDBs lists all .db files in the local directory
func getLocalDBs() ([]string, error) {
	matches, err := filepath.Glob(filepath.Join(model.AppConfig.LocalDBDir, "*.db"))
	if err != nil {
		LogError("filepath.Glob failed in getLocalDBs: %v", err)
		return nil, err
	}
	var names []string
	for _, m := range matches {
		info, err := os.Stat(m)
		if err == nil && !info.IsDir() {
			names = append(names, filepath.Base(m))
		}
	}
	return names, nil
}
