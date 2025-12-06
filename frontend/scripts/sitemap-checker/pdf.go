package main

import (
	"fmt"
	"strings"

	"github.com/go-pdf/fpdf"
)

func generatePDF(results []UrlResult, filename string, comparison *SitemapComparison) {
	pdf := fpdf.New("P", "mm", "A4", "")
	pdf.SetFont("Arial", "B", 16)

	// --- Summary Page ---
	pdf.AddPage()
	pdf.Cell(0, 10, "Sitemap Report Summary")
	pdf.Ln(15)

	// Calculate Stats
	total := len(results)
	failed := 0
	for _, r := range results {
		if !r.Indexable {
			failed++
		}
	}
	passed := total - failed

	// Comparison Stats
	compStatus := "N/A"
	prodTotal := 0
	localTotal := 0
	missing := 0
	extra := 0

	if comparison != nil {
		prodTotal = comparison.ProdTotal
		localTotal = comparison.LocalTotal
		missing = len(comparison.MissingInLocal)
		extra = len(comparison.ExtraInLocal)

		if missing == 0 && extra == 0 {
			compStatus = "Passed"
		} else {
			compStatus = "Failed"
		}
	}

	// Indexability Stats
	indexStatus := "Passed"
	if failed > 0 {
		indexStatus = "Failed"
	}

	// Draw Summary Table
	pdf.SetFont("Arial", "B", 12)
	wLabel, wValue := 80.0, 40.0
	hRow := 10.0

	// Helper for table row
	drawRow := func(label, value string, statusColor bool) {
		pdf.CellFormat(wLabel, hRow, label, "1", 0, "L", false, 0, "")
		if statusColor {
			if value == "Passed" {
				pdf.SetTextColor(0, 128, 0) // Green
			} else if value == "Failed" {
				pdf.SetTextColor(255, 0, 0) // Red
			}
		}
		pdf.CellFormat(wValue, hRow, value, "1", 0, "C", false, 0, "")
		pdf.SetTextColor(0, 0, 0) // Reset
		pdf.Ln(-1)
	}

	drawRow("Sitemap Comparison Report", compStatus, true)
	if comparison != nil {
		drawRow("Production URLs", fmt.Sprintf("%d", prodTotal), false)
		drawRow("Local URLs", fmt.Sprintf("%d", localTotal), false)
	}
	drawRow("Sitemap Indexability Report", indexStatus, true)
	drawRow("Total URLs Checked", fmt.Sprintf("%d", total), false)
	drawRow("Passed URLs", fmt.Sprintf("%d", passed), false)
	drawRow("Failed URLs", fmt.Sprintf("%d", failed), false)

	pdf.Ln(10)

	// --- Comparison Details (Only if Failed) ---
	if comparison != nil && (missing > 0 || extra > 0) {
		pdf.SetFont("Arial", "B", 14)
		pdf.Cell(0, 10, "Comparison Details")
		pdf.Ln(10)

		if missing > 0 {
			pdf.SetFont("Arial", "B", 12)
			pdf.Cell(0, 10, fmt.Sprintf("Missing in Local (%d)", missing))
			pdf.Ln(10)
			pdf.SetFont("Arial", "", 10)
			pdf.SetTextColor(255, 0, 0) // Red
			for _, u := range comparison.MissingInLocal {
				pdf.MultiCell(0, 5, u, "", "L", false)
			}
			pdf.SetTextColor(0, 0, 0)
			pdf.Ln(5)
		}

		if extra > 0 {
			pdf.SetFont("Arial", "B", 12)
			pdf.Cell(0, 10, fmt.Sprintf("Extra in Local (%d)", extra))
			pdf.Ln(10)
			pdf.SetFont("Arial", "", 10)
			pdf.SetTextColor(0, 0, 255) // Blue
			for _, u := range comparison.ExtraInLocal {
				pdf.MultiCell(0, 5, u, "", "L", false)
			}
			pdf.SetTextColor(0, 0, 0)
			pdf.Ln(5)
		}
	}

	// --- Indexability Details ---
	// Separate failed and passed results
	var failedRows, passedRows []UrlResult
	for _, r := range results {
		if !r.Indexable {
			failedRows = append(failedRows, r)
		} else {
			passedRows = append(passedRows, r)
		}
	}
	// Combine with failed on top
	resultsOrdered := append(failedRows, passedRows...)

	lineHeight := 5.0
	wURL, wStatus, wIndexable, wIssues := 75.0, 20.0, 20.0, 75.0

	addHeader := func() {
		pdf.AddPage()
		pdf.SetFont("Arial", "B", 14)
		pdf.Cell(0, 10, "Indexability Details")
		pdf.Ln(10)

		pdf.SetFont("Arial", "B", 10)
		pdf.CellFormat(wURL, 10, "URL", "1", 0, "L", false, 0, "")
		pdf.CellFormat(wStatus, 10, "Status", "1", 0, "C", false, 0, "")
		pdf.CellFormat(wIndexable, 10, "Indexable", "1", 0, "C", false, 0, "")
		pdf.CellFormat(wIssues, 10, "Issues", "1", 0, "L", false, 0, "")
		pdf.Ln(-1)
	}

	pdf.SetFont("Arial", "", 9)

	// Always add a header for the list
	addHeader()

	for _, r := range resultsOrdered {
		issues := strings.Join(r.Issues, "; ")

		// Calculate max number of lines for dynamic cell height
		urlLines := pdf.SplitText(r.URL, wURL)
		issuesLines := pdf.SplitText(issues, wIssues)
		maxLines := len(urlLines)
		if len(issuesLines) > maxLines {
			maxLines = len(issuesLines)
		}
		rowHeight := float64(maxLines) * lineHeight
		if rowHeight < 7 {
			rowHeight = 7
		}

		// Check page break needed
		if pdf.GetY()+rowHeight > 287 { // near page bottom for A4
			addHeader()
		}

		x := pdf.GetX()
		y := pdf.GetY()

		// URL cell
		pdf.Rect(x, y, wURL, rowHeight, "D")
		pdf.SetXY(x+2, y+2)
		pdf.MultiCell(wURL-4, lineHeight, r.URL, "", "L", false)

		// Status cell
		pdf.SetXY(x+wURL, y)
		pdf.Rect(x+wURL, y, wStatus, rowHeight, "D")
		pdf.SetXY(x+wURL, y+(rowHeight-lineHeight)/2)
		pdf.CellFormat(wStatus, lineHeight, fmt.Sprintf("%d", r.Status), "", 0, "C", false, 0, "")

		// Indexable cell with color if failed
		pdf.SetXY(x+wURL+wStatus, y)
		pdf.Rect(x+wURL+wStatus, y, wIndexable, rowHeight, "D")
		pdf.SetTextColor(255, 0, 0)
		if r.Indexable {
			pdf.SetTextColor(0, 0, 0)
		}
		pdf.SetXY(x+wURL+wStatus, y+(rowHeight-lineHeight)/2)
		pdf.CellFormat(wIndexable, lineHeight, fmt.Sprintf("%t", r.Indexable), "", 0, "C", false, 0, "")
		pdf.SetTextColor(0, 0, 0)

		// Issues cell
		pdf.SetXY(x+wURL+wStatus+wIndexable, y)
		pdf.Rect(x+wURL+wStatus+wIndexable, y, wIssues, rowHeight, "D")
		pdf.SetXY(x+wURL+wStatus+wIndexable+2, y+2)
		pdf.MultiCell(wIssues-4, lineHeight, issues, "", "L", false)

		// Move cursor to next row
		pdf.SetXY(x, y+rowHeight)
	}

	err := pdf.OutputFileAndClose(filename)
	if err != nil {
		logPrintln("Error saving PDF:", err)
	} else {
		logPrintln("✅ PDF report saved as", filename)
	}
}
