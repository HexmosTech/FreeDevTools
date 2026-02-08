package ui

import (
	"fmt"
	"strings"

	"b2m/model"

	"github.com/jroimartin/gocui"
)

// ListController handles logic for the database list view
type ListController struct {
	app *AppUI
}

func (lc *ListController) cursorDown(g *gocui.Gui, v *gocui.View) error {
	if v != nil {
		cx, cy := v.Cursor()
		if cy < len(lc.app.dbs)+HeaderHeight-1 {
			v.SetCursor(cx, cy+1)
			lc.app.selected = cy + 1 - HeaderHeight
		}
	}
	return nil
}

func (lc *ListController) cursorUp(g *gocui.Gui, v *gocui.View) error {
	if v != nil {
		cx, cy := v.Cursor()
		if cy > HeaderHeight {
			v.SetCursor(cx, cy-1)
			lc.app.selected = cy - 1 - HeaderHeight
		}
	}
	return nil
}

func (app *AppUI) renderMainView(g *gocui.Gui) {
	v, err := g.View("main")
	if err != nil {
		return
	}

	app.mu.Lock()
	defer app.mu.Unlock()

	v.Clear()
	viewW, _ := v.Size()

	// Column Widths (Percentage Based)
	// 25% (Name) | 25% (Status) | 10% (Step/Msg) | 40% (Bar/ETA)
	colNameW := int(float64(viewW) * 0.25)
	colStatusW := int(float64(viewW) * 0.25)
	colStepW := int(float64(viewW) * 0.10)
	colBarW := viewW - colNameW - colStatusW - colStepW - 2

	if colNameW < 10 {
		colNameW = 10
	}
	if colStatusW < 10 {
		colStatusW = 10
	}
	if colStepW < 10 {
		colStepW = 10
	}
	if colBarW < 10 {
		colBarW = 10
	}

	// Header - Line 0
	titleRow := fmt.Sprintf("%-*s%-*s%-*s%-*s",
		colNameW, " DB Name",
		colStatusW, " Status",
		colStepW, " Step",
		colBarW, " Progress")
	fmt.Fprintln(v, titleRow)

	// Separator - Line 1
	sepRow := fmt.Sprintf("%s%s%s%s",
		strings.Repeat("-", colNameW),
		strings.Repeat("-", colStatusW),
		strings.Repeat("-", colStepW),
		strings.Repeat("-", colBarW))
	fmt.Fprintln(v, sepRow)

	// Data Rows - Line 2+
	if app.loading && len(app.dbs) == 0 {
		fmt.Fprintln(v, "")
		return
	}

	for _, db := range app.dbs {
		statusText := db.Status
		stepText := ""
		barText := ""

		if uiStat, ok := app.dbStatus[db.DB.Name]; ok {
			// Override Status Text based on OpType
			if uiStat.OpType == "upload" {
				statusText = model.DBStatuses.Uploading.Text
			} else if uiStat.OpType == "download" {
				// Keep default
			}

			stepText = uiStat.Message

			statsStr := ""
			// Render Progress Bar
			// Always render if OpType is set (active operation), or if Percent > 0
			if uiStat.Percent > 0 || uiStat.OpType == "upload" || uiStat.OpType == "download" {
				// Calculate available space for bar
				if uiStat.Percent > 0 {
					statsStr = fmt.Sprintf(" %d%%", uiStat.Percent)
				}
				if uiStat.Speed > 0 {
					statsStr += fmt.Sprintf(" (%.1f MB/s)", uiStat.Speed)
				}
				if uiStat.ETA != "" {
					statsStr += fmt.Sprintf(" %s", uiStat.ETA)
				}

				barWidth := colBarW - len(statsStr) - 2 // -2 for spacing
				if barWidth < 5 {
					barWidth = 5
				}

				barStr := renderProgressBarWithWidth(uiStat.Percent, barWidth)
				barText = barStr + statsStr
			}
		}

		name := " " + db.DB.Name
		if len(name) > colNameW-1 {
			name = name[:colNameW-1]
		}

		status := " " + statusText
		if len(status) > colStatusW-1 {
			status = status[:colStatusW-1]
		}

		if len(stepText) > colStepW-1 {
			stepText = stepText[:colStepW-1]
		}

		line := fmt.Sprintf("%-*s%-*s%-*s%-s",
			colNameW, name,
			colStatusW, status,
			colStepW, " "+stepText,
			" "+barText)

		fmt.Fprintln(v, line)
	}

	// Adjust cursor to stay within bounds and skip header
	cx, cy := v.Cursor()
	if cy < HeaderHeight {
		if len(app.dbs) > 0 {
			v.SetCursor(cx, HeaderHeight)
			app.selected = 0
		}
	}
}
