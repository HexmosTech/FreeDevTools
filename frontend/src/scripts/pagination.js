// Pagination utility functions
export function createPaginationManager(config, onPageChange, onItemsPerPageChange) {
  let currentPage = config.currentPage || 1;
  let itemsPerPage = config.itemsPerPage || config.defaultItemsPerPage;
  const totalItems = config.totalItems;
  const defaultItemsPerPage = config.defaultItemsPerPage;
  const itemsLabel = config.itemsLabel || 'items';

  // Get current page and items per page from URL
  function getCurrentPageFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const page = parseInt(urlParams.get('page') || '1', 10);
    const items = parseInt(urlParams.get('items') || defaultItemsPerPage.toString(), 10);

    // Update items per page if specified in URL
    if (items !== itemsPerPage) {
      itemsPerPage = items;
      const dropdown = document.getElementById('items-per-page');
      if (dropdown) {
        dropdown.value = items.toString();
      }
    }

    return Math.max(1, Math.min(page, Math.ceil(totalItems / itemsPerPage)));
  }

  // Update URL without page reload
  function updateURL(page, items = null) {
    const url = new URL(window.location);
    if (page === 1) {
      url.searchParams.delete('page');
    } else {
      url.searchParams.set('page', page.toString());
    }

    const currentItems = items || itemsPerPage;
    if (currentItems !== defaultItemsPerPage) {
      url.searchParams.set('items', currentItems.toString());
    } else {
      url.searchParams.delete('items');
    }

    window.history.pushState({}, '', url);
  }

  // Generate page numbers for pagination
  function getPageNumbers(currentPage, totalPages) {
    const pages = [];
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
  function updatePaginationInfo(currentPage, itemsPerPage, totalItems, totalPages) {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedItems = Math.min(endIndex, totalItems) - startIndex;

    // Update pagination info
    const paginationInfo = document.getElementById('pagination-info');
    if (paginationInfo) {
      paginationInfo.textContent =
        `Showing ${paginatedItems} of ${totalItems} items (Page ${currentPage} of ${totalPages})`;
    }

    const pageInfo = document.getElementById('page-info');
    if (pageInfo) {
      pageInfo.textContent = `${currentPage} / ${totalPages}`;
    }

    const bottomPageInfo = document.getElementById('bottom-page-info');
    if (bottomPageInfo) {
      bottomPageInfo.textContent =
        `Page ${currentPage} of ${totalPages} • ${totalItems} total ${itemsLabel}`;
    }
  }

  // Update button states
  function updateButtonStates(currentPage, totalPages) {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const bottomPrevBtn = document.getElementById('bottom-prev-btn');
    const bottomNextBtn = document.getElementById('bottom-next-btn');

    const hasPrev = currentPage > 1;
    const hasNext = currentPage < totalPages;

    [prevBtn, bottomPrevBtn].forEach(btn => {
      if (btn) {
        btn.disabled = !hasPrev;
      }
    });

    [nextBtn, bottomNextBtn].forEach(btn => {
      if (btn) {
        btn.disabled = !hasNext;
      }
    });
  }

  // Render page numbers
  function renderPageNumbers(currentPage, totalPages) {
    const pageNumbers = getPageNumbers(currentPage, totalPages);
    const pageNumbersContainer = document.getElementById('page-numbers');
    if (pageNumbersContainer) {
      pageNumbersContainer.innerHTML = pageNumbers.map(pageNum => {
        const isCurrentPage = pageNum === currentPage;
        const buttonClass = isCurrentPage
          ? 'bg-blue-600 text-white'
          : 'text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-600';

        return `<button data-page="${pageNum}" class="page-number-btn inline-flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${buttonClass}">${pageNum}</button>`;
      }).join('');
    }
  }

  // Show/hide bottom pagination
  function toggleBottomPagination(totalPages) {
    const bottomPagination = document.getElementById('bottom-pagination');
    if (bottomPagination) {
      bottomPagination.style.display = totalPages > 1 ? 'flex' : 'none';
    }
  }

  // Navigate to page
  function goToPage(page) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    if (page < 1 || page > totalPages || page === currentPage) {
      return;
    }

    currentPage = page;
    updateURL(page);
    onPageChange(page);

    // Scroll to top of page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Handle items per page change
  function handleItemsPerPageChange(newItemsPerPage) {
    const newTotalPages = Math.ceil(totalItems / newItemsPerPage);
    const newCurrentPage = Math.min(currentPage, newTotalPages);

    itemsPerPage = newItemsPerPage;
    currentPage = newCurrentPage;

    updateURL(currentPage, itemsPerPage);
    onItemsPerPageChange(newItemsPerPage);

    // Scroll to top of page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Setup event listeners
  function setupEventListeners() {
    // Use event delegation on the document to handle all clicks
    document.addEventListener('click', (e) => {
      // Handle previous buttons
      if (e.target.id === 'prev-btn' || e.target.id === 'bottom-prev-btn') {
        e.preventDefault();
        goToPage(currentPage - 1);
        return;
      }

      // Handle next buttons
      if (e.target.id === 'next-btn' || e.target.id === 'bottom-next-btn') {
        e.preventDefault();
        goToPage(currentPage + 1);
        return;
      }

      // Handle page number buttons
      if (e.target.classList.contains('page-number-btn')) {
        e.preventDefault();
        const page = parseInt(e.target.dataset.page, 10);
        goToPage(page);
        return;
      }
    });

    // Handle items per page dropdown change
    document.addEventListener('change', (e) => {
      if (e.target.id === 'items-per-page') {
        const newItemsPerPage = parseInt(e.target.value, 10);
        handleItemsPerPageChange(newItemsPerPage);
      }
    });
  }

  // Initialize pagination
  function init() {
    currentPage = getCurrentPageFromURL();
    onPageChange(currentPage);
  }

  // Public API
  return {
    init,
    setupEventListeners,
    getCurrentPage: () => currentPage,
    getItemsPerPage: () => itemsPerPage,
    updatePaginationInfo,
    updateButtonStates,
    renderPageNumbers,
    toggleBottomPagination,
    goToPage,
    handleItemsPerPageChange
  };
}
