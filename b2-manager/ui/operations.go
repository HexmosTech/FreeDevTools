package ui

import (
	"context"
	"errors"
	"fmt"
	"time"

	"github.com/jroimartin/gocui"

	"b2m/core"
	"b2m/model"
)

func (lc *ListController) onUpload(g *gocui.Gui, v *gocui.View) error {
	lc.app.mu.Lock()
	if lc.app.selected < 0 || lc.app.selected >= len(lc.app.dbs) {
		lc.app.mu.Unlock()
		return nil
	}
	selectedDB := lc.app.dbs[lc.app.selected]
	lc.app.mu.Unlock()

	// Phase 6.5: Validation
	if err := core.ValidateAction(selectedDB, "upload"); err != nil {
		lc.app.confirm("Error: Cannot Upload", err.Error()+"\n\n(Press y/n to close)", nil, nil)
		return nil
	}

	return lc.app.startOperation("Upload", func(ctx context.Context, dbName string) error {
		// var bar *progressbar.ProgressBar

		// Define upload logic as a closure so we can retry it
		doUpload := func(force bool) error {
			return core.PerformUpload(ctx, dbName, force, func(p model.RcloneProgress) {
				// Remove unused progressbar library usage
				var percent int
				var speedMB float64
				var eta string
				var msg = "Uploading..."

				if p.Stats.TotalBytes > 0 {
					rawPercent := float64(p.Stats.Bytes) / float64(p.Stats.TotalBytes)
					// Scale 10-90% range for upload
					percent = 10 + int(rawPercent*80)
				} else {
					// Indeterminate
					percent = 0
					// Show transferred amount in message since bar is empty
					transferredMB := float64(p.Stats.Bytes) / 1024 / 1024
					msg = fmt.Sprintf("Uploading (%.1f MB)...", transferredMB)
				}

				speedMB = p.Stats.Speed / 1024 / 1024

				// Calculate ETA
				if p.Stats.Speed > 0 && p.Stats.TotalBytes > 0 {
					remaining := p.Stats.TotalBytes - p.Stats.Bytes
					seconds := remaining / int64(p.Stats.Speed)
					eta = (time.Duration(seconds) * time.Second).String()
				}

				lc.app.updateDBStatus(dbName, msg, percent, speedMB, "upload", eta)

			}, func(msg string) {
				percent := -1
				switch msg {
				case "Locking...":
					percent = 0
				case "Setting Metadata...":
					percent = 5
				case "Uploading...":
					percent = 10
				case "Finalizing...":
					percent = 90
				case "Unlocking...":
					percent = 95
				case "Done":
					percent = 100
				}

				lc.app.updateDBStatus(dbName, msg, percent, -1, "upload", "")
			})
		}

		// Initial attempt (force=false)
		err := doUpload(false)

		// Check if error is due to lock
		if err != nil && errors.Is(err, model.ErrDatabaseLocked) {
			// Create channel to carry user decision back to this background thread
			confirmCh := make(chan bool, 1)

			lc.app.updateDBStatus(dbName, "Waiting for confirmation...", -1, -1, "", "")

			lc.app.confirm("Force Upload?", fmt.Sprintf("Full error: %v\n\nDatabase is locked. Force override?", err), func() {
				// On Yes
				confirmCh <- true
			}, func() {
				// On No
				confirmCh <- false
			})

			// Wait for decision
			select {
			case <-ctx.Done():
				return ctx.Err()
			case yes := <-confirmCh:
				if yes {
					lc.app.updateDBStatus(dbName, "Force Uploading...", 0, 0, "upload", "")
					return doUpload(true)
				} else {
					return fmt.Errorf("upload cancelled by user")
				}
			}
		}

		return err
	})
}

func (lc *ListController) onDownload(g *gocui.Gui, v *gocui.View) error {
	lc.app.mu.Lock()
	if lc.app.selected < 0 || lc.app.selected >= len(lc.app.dbs) {
		lc.app.mu.Unlock()
		return nil
	}
	selectedDB := lc.app.dbs[lc.app.selected]
	lc.app.mu.Unlock()

	// Phase 6.5: Validation
	startDownload := func() {
		lc.app.startOperation("Download", func(ctx context.Context, dbName string) error {
			lc.app.updateDBStatus(dbName, "Checking...", 0, 0, "download", "")
			time.Sleep(200 * time.Millisecond)

			lc.app.updateDBStatus(dbName, "Starting Download...", 5, 0, "download", "")

			// var bar *progressbar.ProgressBar

			err := core.DownloadDatabase(ctx, dbName, false, func(p model.RcloneProgress) {
				// Remove unused progressbar library usage
				var percent int
				var speedMB float64
				var eta string
				var msg = "Downloading..."

				if p.Stats.TotalBytes > 0 {
					rawPercent := float64(p.Stats.Bytes) / float64(p.Stats.TotalBytes)
					percent = 5 + int(rawPercent*90)
				} else {
					percent = 0
					transferredMB := float64(p.Stats.Bytes) / 1024 / 1024
					msg = fmt.Sprintf("Downloading (%.1f MB)...", transferredMB)
				}

				speedMB = p.Stats.Speed / 1024 / 1024

				if p.Stats.Speed > 0 && p.Stats.TotalBytes > 0 {
					remaining := p.Stats.TotalBytes - p.Stats.Bytes
					seconds := remaining / int64(p.Stats.Speed)
					eta = (time.Duration(seconds) * time.Second).String()
				}

				lc.app.updateDBStatus(dbName, msg, percent, speedMB, "download", eta)
			})

			if err == nil {
				lc.app.updateDBStatus(dbName, "Finalizing...", 95, 0, "download", "")
				time.Sleep(200 * time.Millisecond)
			}
			return err
		})
	}

	if err := core.ValidateAction(selectedDB, "download"); err != nil {
		if err == model.ErrWarningLocalChanges {
			// Warning: Local changes will be lost
			lc.app.confirm("Warning: Local Changes", "You have unsaved local changes.\nDownloading will overwrite them.\n\nAre you sure?", func() {
				startDownload()
			}, nil)
			return nil
		}
		if err == model.ErrWarningDatabaseUpdating {
			// Warning: Database is being updated by another user
			lc.app.confirm("Warning: DB Updating", "This database is currently being updated by another user.\nDownloading now might give you incomplete data.\n\nAre you sure?", func() {
				startDownload()
			}, nil)
			return nil
		}
		// Block error
		lc.app.confirm("Error: Cannot Download", err.Error()+"\n\n(Press y/n to close)", nil, nil)
		return nil
	}

	startDownload()
	return nil
}

func (lc *ListController) onCancel(g *gocui.Gui, v *gocui.View) error {
	lc.app.mu.Lock()
	if lc.app.selected < 0 || lc.app.selected >= len(lc.app.dbs) {
		lc.app.mu.Unlock()
		return nil
	}
	dbName := lc.app.dbs[lc.app.selected].DB.Name
	cancel, ok := lc.app.activeOps[dbName]
	lc.app.mu.Unlock()

	if ok {
		cancel()
		lc.app.updateDBStatus(dbName, "Cancelling...", -1, -1, "", "")
	}
	return nil
}
