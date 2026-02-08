package core

import (
	"bufio"
	"encoding/json"
	"io"
	"time"

	"b2m/model"

	"github.com/jedib0t/go-pretty/v6/progress"
)

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
