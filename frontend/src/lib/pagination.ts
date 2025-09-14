export interface PaginationConfig {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  totalPages: number;
  defaultItemsPerPage: number;
  itemsLabel?: string;
}

export class PaginationManager {
  private config: PaginationConfig;
  private onPageChange: (page: number) => void;
  private onItemsPerPageChange: (itemsPerPage: number) => void;

  constructor(
    config: PaginationConfig,
    onPageChange: (page: number) => void,
    onItemsPerPageChange: (itemsPerPage: number) => void
  ) {
    this.config = config;
    this.onPageChange = onPageChange;
    this.onItemsPerPageChange = onItemsPerPageChange;
  }

  // Get current page and items per page from URL
  getCurrentPageFromURL(): number {
    const urlParams = new URLSearchParams(window.location.search);
    const page = parseInt(urlParams.get("page") || "1", 10);
    const items = parseInt(
      urlParams.get("items") || this.config.defaultItemsPerPage.toString(),
      10
    );

    // Update items per page if specified in URL
    if (items !== this.config.itemsPerPage) {
      this.config.itemsPerPage = items;
      const dropdown = document.getElementById("items-per-page");
      if (dropdown) {
        dropdown.value = items.toString();
      }
    }

    return Math.max(
      1,
      Math.min(
        page,
        Math.ceil(this.config.totalItems / this.config.itemsPerPage)
      )
    );
  }

  // Update URL without page reload
  updateURL(page: number, items?: number): void {
    const url = new URL(window.location);
    if (page === 1) {
      url.searchParams.delete("page");
    } else {
      url.searchParams.set("page", page.toString());
    }

    const currentItems = items || this.config.itemsPerPage;
    if (currentItems !== this.config.defaultItemsPerPage) {
      url.searchParams.set("items", currentItems.toString());
    } else {
      url.searchParams.delete("items");
    }

    window.history.pushState({}, "", url);
  }

  // Generate page numbers for pagination
  getPageNumbers(currentPage: number, totalPages: number): number[] {
    const pages: number[] = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else if (currentPage <= 3) {
      for (let i = 1; i <= maxVisible; i++) {
        pages.push(i);
      }
    } else if (currentPage >= totalPages - 2) {
      for (let i = totalPages - maxVisible + 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      for (let i = currentPage - 2; i <= currentPage + 2; i++) {
        pages.push(i);
      }
    }

    return pages;
  }

  // Update pagination info display
  updatePaginationInfo(
    currentPage: number,
    itemsPerPage: number,
    totalItems: number,
    totalPages: number
  ): void {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedItems = Math.min(endIndex, totalItems) - startIndex;

    // Update pagination info
    const paginationInfo = document.getElementById("pagination-info");
    if (paginationInfo) {
      paginationInfo.textContent = `Showing ${paginatedItems} of ${totalItems} items (Page ${currentPage} of ${totalPages})`;
    }

    const pageInfo = document.getElementById("page-info");
    if (pageInfo) {
      pageInfo.textContent = `${currentPage} / ${totalPages}`;
    }

    const bottomPageInfo = document.getElementById("bottom-page-info");
    if (bottomPageInfo) {
      bottomPageInfo.textContent = `Page ${currentPage} of ${totalPages} • ${totalItems} total ${this.config.itemsLabel || "items"}`;
    }
  }

  // Update button states
  updateButtonStates(currentPage: number, totalPages: number): void {
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    const bottomPrevBtn = document.getElementById("bottom-prev-btn");
    const bottomNextBtn = document.getElementById("bottom-next-btn");

    const hasPrev = currentPage > 1;
    const hasNext = currentPage < totalPages;

    [prevBtn, bottomPrevBtn].forEach((btn) => {
      if (btn) {
        btn.disabled = !hasPrev;
      }
    });

    [nextBtn, bottomNextBtn].forEach((btn) => {
      if (btn) {
        btn.disabled = !hasNext;
      }
    });
  }

  // Render page numbers
  renderPageNumbers(currentPage: number, totalPages: number): void {
    const pageNumbers = this.getPageNumbers(currentPage, totalPages);
    const pageNumbersContainer = document.getElementById("page-numbers");
    if (pageNumbersContainer) {
      pageNumbersContainer.innerHTML = pageNumbers
        .map((pageNum) => {
          const isCurrentPage = pageNum === currentPage;
          const buttonClass = isCurrentPage
            ? "bg-blue-600 text-white"
            : "text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-600";

          return `<button data-page="${pageNum}" class="page-number-btn inline-flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${buttonClass}">${pageNum}</button>`;
        })
        .join("");
    }
  }

  // Show/hide bottom pagination
  toggleBottomPagination(totalPages: number): void {
    const bottomPagination = document.getElementById("bottom-pagination");
    if (bottomPagination) {
      bottomPagination.style.display = totalPages > 1 ? "flex" : "none";
    }
  }

  // Navigate to page
  goToPage(page: number): void {
    const totalPages = Math.ceil(
      this.config.totalItems / this.config.itemsPerPage
    );
    if (page < 1 || page > totalPages || page === this.config.currentPage) {
      return;
    }

    this.config.currentPage = page;
    this.updateURL(page);
    this.onPageChange(page);

    // Scroll to top of page
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Handle items per page change
  handleItemsPerPageChange(newItemsPerPage: number): void {
    const newTotalPages = Math.ceil(this.config.totalItems / newItemsPerPage);
    const newCurrentPage = Math.min(this.config.currentPage, newTotalPages);

    this.config.itemsPerPage = newItemsPerPage;
    this.config.currentPage = newCurrentPage;

    this.updateURL(this.config.currentPage, this.config.itemsPerPage);
    this.onItemsPerPageChange(newItemsPerPage);

    // Scroll to top of page
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Setup event listeners
  setupEventListeners(): void {
    // Use event delegation on the document to handle all clicks
    document.addEventListener("click", (e) => {
      const target = e.target as HTMLElement;

      // Handle previous buttons
      if (target.id === "prev-btn" || target.id === "bottom-prev-btn") {
        e.preventDefault();
        this.goToPage(this.config.currentPage - 1);
        return;
      }

      // Handle next buttons
      if (target.id === "next-btn" || target.id === "bottom-next-btn") {
        e.preventDefault();
        this.goToPage(this.config.currentPage + 1);
        return;
      }

      // Handle page number buttons
      if (target.classList.contains("page-number-btn")) {
        e.preventDefault();
        const page = parseInt(target.dataset.page || "1", 10);
        this.goToPage(page);
        return;
      }
    });

    // Handle items per page dropdown change
    document.addEventListener("change", (e) => {
      const target = e.target as HTMLSelectElement;
      if (target.id === "items-per-page") {
        const newItemsPerPage = parseInt(target.value, 10);
        this.handleItemsPerPageChange(newItemsPerPage);
      }
    });
  }

  // Initialize pagination
  init(): void {
    this.config.currentPage = this.getCurrentPageFromURL();
    this.onPageChange(this.config.currentPage);
  }

  // Update config
  updateConfig(newConfig: Partial<PaginationConfig>): void {
    this.config = { ...this.config, ...newConfig };
  }

  // Get current config
  getConfig(): PaginationConfig {
    return { ...this.config };
  }
}
