(function () {
    const searchInput = document.getElementById('search');
    const searchInputMobile = document.getElementById('search-mobile');
    const mobileSearchButton = document.getElementById('mobile-search-button');
    const mobileSearchExpanded = document.getElementById('mobile-search-expanded');
    const mobileSearchClose = document.getElementById('mobile-search-close');

    // Get the active search input (desktop or mobile)
    function getActiveSearchInput() {
        if (mobileSearchExpanded?.classList.contains('hidden')) {
            return searchInput;
        } else {
            return searchInputMobile;
        }
    }

    // Get header element to add class for styling
    const header = document.querySelector('header');
    const headerContainer = header?.parentElement;

    // Handle mobile search button click
    if (mobileSearchButton && mobileSearchExpanded && searchInputMobile) {
        const openMobileSearch = () => {
            if (window.innerWidth < 1024) {
                window.location.href = '/freedevtools/pro/search/';
                return;
            }
            mobileSearchButton.classList.add('hidden');
            mobileSearchExpanded.classList.remove('hidden');
            mobileSearchExpanded.classList.add('flex');
            if (header) {
                header.classList.add('mobile-search-active');
            }
            if (headerContainer) {
                headerContainer.classList.add('mobile-search-active');
            }
            setTimeout(() => {
                searchInputMobile?.focus();
            }, 100);
        };

        const closeMobileSearch = () => {
            mobileSearchButton.classList.remove('hidden');
            mobileSearchExpanded.classList.add('hidden');
            mobileSearchExpanded.classList.remove('flex');
            if (header) {
                header.classList.remove('mobile-search-active');
            }
            if (headerContainer) {
                headerContainer.classList.remove('mobile-search-active');
            }
            if (searchInputMobile) {
                searchInputMobile.value = '';
            }
            if (window.searchState) {
                window.searchState.setQuery('');
            }
        };

        mobileSearchButton.addEventListener('click', openMobileSearch);

        if (mobileSearchClose) {
            mobileSearchClose.addEventListener('click', closeMobileSearch);
        }

        searchInputMobile.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeMobileSearch();
            }
        });
    }

    // Initialize search for input
    function initializeSearch(input) {
        if (!input) return;
        if (window.location.hash.startsWith('#search?q=')) {
            try {
                const hashParams = new URLSearchParams(window.location.hash.substring(8));
                const searchParam = hashParams.get('q');
                if (searchParam) {
                    input.value = searchParam;
                    // Wait for searchState to be available if it's not yet
                    if (window.searchState) {
                        window.searchState.setQuery(searchParam);
                    } else {
                        // Retry briefly
                        setTimeout(() => {
                            if (window.searchState) window.searchState.setQuery(searchParam);
                        }, 100);
                    }
                } else {
                    // Empty query param - set empty state
                    input.value = '';
                    if (window.searchState) {
                        window.searchState.setQuery('');
                    }
                }
            } catch (e) {
                console.error('Error parsing hash params:', e);
            }
        } else if (window.searchState && window.searchState.getQuery()) {
            input.value = window.searchState.getQuery();
        }
    }

    // Handle search input changes
    function handleSearchChange(e, input) {
        const query = input.value;

        if (window.searchState) {
            window.searchState.setQuery(query);
        }

        // Only navigate to search page when user types something
        if (query.trim()) {
            const newHash = `search?q=${encodeURIComponent(query)}`;
            if (window.location.hash !== '#' + newHash) {
                window.location.hash = newHash;
            }
        } else {
            // Clear hash if query is empty
            if (window.location.hash.startsWith('#search')) {
                history.pushState(
                    '',
                    document.title,
                    window.location.pathname + window.location.search
                );
            }
        }
    }

    // Handle keyboard events
    function handleKeyDown(e, input) {
        if (e.key === 'Enter' && input.value.trim()) {
            if (window.searchState) {
                window.searchState.setQuery(input.value);
            }
            window.location.hash = `search?q=${encodeURIComponent(input.value)}`;
        } else if (e.key === 'Escape') {
            if (mobileSearchExpanded && !mobileSearchExpanded.classList.contains('hidden')) {
                // Only clear/close on escape if mobile search is active
                // For desktop, the BaseLayout clears the search on Escape
            } else {
                // For desktop, if we want to clear input on escape
                input.value = '';
                if (window.searchState) {
                    window.searchState.setQuery('');
                }
            }
        }
    }

    // Handle focus/blur styling
    function handleFocus(input) {
        input.classList.remove('border-gray-300', 'dark:border-gray-600');
        input.classList.add('border-fdt-yellow', 'dark:border-fdt-yellow');
    }

    function handleBlur(input) {
        input.classList.remove('border-fdt-yellow', 'dark:border-fdt-yellow');
        input.classList.add('border-gray-300', 'dark:border-gray-600');
    }

    // Listen for global search state changes
    function handleSearchQueryChange(event) {
        const activeInput = getActiveSearchInput();
        if (activeInput && event?.detail && event.detail.query !== undefined) {
            // Only update if value is different to avoid cursor jumping
            if (activeInput.value !== event.detail.query) {
                activeInput.value = event.detail.query;
            }
        }
    }

    // Initialize
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            initializeSearch(searchInput);
            initializeSearch(searchInputMobile);
        });
    } else {
        initializeSearch(searchInput);
        initializeSearch(searchInputMobile);
    }

    // Global shortcut
    function handleGlobalKeyDown(e) {
        if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
            e.preventDefault();
            const activeInput = getActiveSearchInput();
            if (window.innerWidth < 768 && mobileSearchButton) {
                mobileSearchButton.click();
            } else if (activeInput) {
                activeInput.focus();
            }
        }
    }

    // Handle click/focus on search input: non-desktop -> go to pro search page
    function isNonDesktop() { return window.innerWidth < 1024; }
    function handleSearchClick(input) {
        if (isNonDesktop()) {
            window.location.href = '/freedevtools/pro/search/';
            return;
        }
        input.focus();
    }
    function handleSearchFocus(e, input) {
        if (isNonDesktop()) {
            e.preventDefault();
            input.blur();
            window.location.href = '/freedevtools/pro/search/';
            return;
        }
        handleFocus(input);
    }

    // Attach listeners
    [searchInput, searchInputMobile].forEach(input => {
        if (input) {
            input.addEventListener('input', (e) => handleSearchChange(e, input));
            input.addEventListener('keydown', (e) => handleKeyDown(e, input));
            input.addEventListener('focus', (e) => handleSearchFocus(e, input));
            input.addEventListener('blur', () => handleBlur(input));
            input.addEventListener('click', () => handleSearchClick(input));
        }
    });

    window.addEventListener('searchQueryChanged', handleSearchQueryChange);
    document.addEventListener('keydown', handleGlobalKeyDown);
})();
