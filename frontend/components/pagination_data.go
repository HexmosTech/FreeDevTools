package components

// PaginationPage represents a single page number in pagination
type PaginationPage struct {
	Number    int
	URL       string
	IsCurrent bool
}

// PaginationData contains all computed pagination data
type PaginationData struct {
	CurrentPage             int
	TotalPages              int
	BaseURL                 string
	AlwaysIncludePageNumber bool
	PrevURL                 string
	NextURL                 string
	HasPrev                 bool
	HasNext                 bool
	Pages                   []PaginationPage
	ShowFirst               bool
	ShowLast                bool
	FirstURL                string
	LastURL                 string
}

// NewPaginationData creates pagination data from current page, total pages, and base URL
// Added alwaysIncludePageNumber to control if /1/ is appended
func NewPaginationData(currentPage, totalPages int, baseURL string, alwaysIncludePageNumber bool) PaginationData {
	data := PaginationData{
		CurrentPage:             currentPage,
		TotalPages:              totalPages,
		BaseURL:                 baseURL,
		AlwaysIncludePageNumber: alwaysIncludePageNumber,
		HasPrev:                 currentPage > 1,
		HasNext:                 currentPage < totalPages,
	}

	if data.HasPrev {
		data.PrevURL = PaginationURL(baseURL, currentPage-1, alwaysIncludePageNumber)
	}
	if data.HasNext {
		data.NextURL = PaginationURL(baseURL, currentPage+1, alwaysIncludePageNumber)
	}

	// Calculate page range
	startPage := Max(1, Min(totalPages-4, currentPage-2))
	endPage := Min(startPage+4, totalPages)

	// Show first/last if needed
	data.ShowFirst = currentPage > 3
	data.ShowLast = currentPage < totalPages-2
	if data.ShowFirst {
		data.FirstURL = PaginationURL(baseURL, 1, alwaysIncludePageNumber)
	}
	if data.ShowLast {
		data.LastURL = PaginationURL(baseURL, totalPages, alwaysIncludePageNumber)
	}

	// Generate page numbers
	for i := startPage; i <= endPage; i++ {
		data.Pages = append(data.Pages, PaginationPage{
			Number:    i,
			URL:       PaginationURL(baseURL, i, alwaysIncludePageNumber),
			IsCurrent: i == currentPage,
		})
	}

	return data
}
