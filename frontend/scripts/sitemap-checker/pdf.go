package main

import (
    "fmt"
    "strings"

    "github.com/go-pdf/fpdf"
)

func generatePDF(results []UrlResult, filename string) {
    pdf := fpdf.New("P", "mm", "A4", "")
    pdf.SetFont("Arial", "B", 16)

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
        pdf.SetFont("Arial", "B", 16)
        pdf.AddPage()
        pdf.Cell(0, 10, "Sitemap Indexability Report")
        pdf.Ln(15)

        total := len(results)
        failed := len(failedRows)
        passed := len(passedRows)

        pdf.SetFont("Arial", "", 12)
        pdf.Cell(0, 10, fmt.Sprintf("Total: %d, Passed: %d, Failed: %d", total, passed, failed))
        pdf.Ln(15)

        pdf.SetFont("Arial", "B", 10)
        pdf.CellFormat(wURL, 10, "URL", "1", 0, "L", false, 0, "")
        pdf.CellFormat(wStatus, 10, "Status", "1", 0, "C", false, 0, "")
        pdf.CellFormat(wIndexable, 10, "Indexable", "1", 0, "C", false, 0, "")
        pdf.CellFormat(wIssues, 10, "Issues", "1", 0, "L", false, 0, "")
        pdf.Ln(-1)
    }

    pdf.SetFont("Arial", "", 9)

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
        fmt.Println("Error saving PDF:", err)
    } else {
        fmt.Println("✅ PDF report saved as", filename)
    }
}
