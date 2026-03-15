package main

import (
	"fmt"
	"time"
)

type ProgressTracker struct {
	TotalPages     int
	CompletedPages int
	Section        string
	StartTime      time.Time
}

// NewProgressTracker creates a new progress tracker for the given section and total pages.
func NewProgressTracker(section string, total int) *ProgressTracker {
	return &ProgressTracker{
		Section:    section,
		TotalPages: total,
		StartTime:  time.Now(),
	}
}

// Increment adds one to the completed pages and updates the progress in the console.
func (p *ProgressTracker) Increment() {
	p.CompletedPages++
	elapsed := time.Since(p.StartTime).Round(time.Second)
	fmt.Printf("\rGenerating %s Pages: [%d/%d] completed (elapsed: %s)...", p.Section, p.CompletedPages, p.TotalPages, elapsed)
}

// Finish prints the final completion message.
func (p *ProgressTracker) Finish() {
	elapsed := time.Since(p.StartTime).Round(time.Millisecond)
	fmt.Printf("\nDone! Generated %d pages for %s in %s.\n", p.CompletedPages, p.Section, elapsed)
}
