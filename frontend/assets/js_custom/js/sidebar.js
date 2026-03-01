
// Close sidebar function for mobile back button
(function () {
    function closeSidebarFromButton() {
        const sidebar = document.getElementById('sidebar');
        const hamburgerButton = document.getElementById('hamburger-menu-button');
        const backdrop = document.getElementById('sidebar-backdrop');

        if (sidebar) {
            sidebar.classList.remove('sidebar-open');
        }
        if (hamburgerButton) {
            hamburgerButton.setAttribute('aria-expanded', 'false');
        }
        if (backdrop) {
            backdrop.style.display = 'none';
        }
        document.body.style.overflow = '';
    }

    // Attach click handler to close button
    function initCloseButton() {
        const closeButton = document.getElementById('sidebar-close-button');
        if (closeButton) {
            closeButton.addEventListener('click', closeSidebarFromButton);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCloseButton);
    } else {
        initCloseButton();
    }
})();

// Collapsible sidebar: collapsed by default, hover to expand, pin to stay open (desktop only)
(function () {
    const PIN_STORAGE_KEY = 'fdt-sidebar-pinned';
    var leaveTimer = null;

    function isDesktop() {
        return window.matchMedia && window.matchMedia('(min-width: 1024px)').matches;
    }
    function isPinned() {
        try { return localStorage.getItem(PIN_STORAGE_KEY) === '1'; } catch (e) { return false; }
    }
    function setPinned(pinned) {
        try {
            if (pinned) localStorage.setItem(PIN_STORAGE_KEY, '1');
            else localStorage.removeItem(PIN_STORAGE_KEY);
        } catch (e) { }
        updatePinButtonUI();
        if (pinned) setCollapsed(false);
        else setCollapsed(true);
    }
    function isCollapsed() {
        const sidebar = document.getElementById('sidebar');
        return sidebar ? sidebar.classList.contains('sidebar-collapsed') : false;
    }
    function setCollapsed(collapsed) {
        const sidebar = document.getElementById('sidebar');
        const layoutContainer = document.getElementById('layout-container');
        const profileContainer = document.getElementById('sidebar-profile-container');
        if (!sidebar) return;
        if (collapsed) {
            sidebar.classList.add('sidebar-collapsed');
            if (layoutContainer) layoutContainer.classList.add('sidebar-collapsed-layout');
        } else {
            sidebar.classList.remove('sidebar-collapsed');
            if (layoutContainer) layoutContainer.classList.remove('sidebar-collapsed-layout');
        }
        window.sidebarCollapsed = collapsed;
        if (profileContainer) profileContainer.setAttribute('data-collapsed', collapsed ? 'true' : 'false');
        window.dispatchEvent(new CustomEvent('sidebar-collapsed-changed', { detail: { collapsed: collapsed } }));
        updatePinButtonUI();
    }
    function updatePinButtonUI() {
        const toggle = document.getElementById('sidebar-collapse-toggle');
        const pinIcon = document.getElementById('sidebar-pin-icon');
        const unpinIcon = document.getElementById('sidebar-unpin-icon');
        if (!toggle) return;
        var pinned = isPinned();
        toggle.setAttribute('aria-label', pinned ? 'Unpin sidebar' : 'Pin sidebar');
        toggle.setAttribute('title', pinned ? 'Unpin sidebar' : 'Pin sidebar');
        if (pinIcon) pinIcon.style.display = pinned ? 'none' : 'block';
        if (unpinIcon) unpinIcon.style.display = pinned ? 'block' : 'none';
    }
    function openSearchPopup() {
        if (window.innerWidth < 1024) {
            window.location.href = '/freedevtools/pro/search/';
            return;
        }
        if (window.searchState) window.searchState.setQuery('');
        window.location.hash = '#search?q=';
    }
    function initCollapse() {
        const sidebar = document.getElementById('sidebar');
        const toggle = document.getElementById('sidebar-collapse-toggle');
        const searchIconBtn = document.getElementById('sidebar-search-icon-btn');
        if (!sidebar || !toggle) return;
        // Initial state from pin (desktop only); mobile unchanged
        if (isDesktop()) {
            if (isPinned()) {
                setCollapsed(false);
            } else {
                setCollapsed(true);
            }
        }
        updatePinButtonUI();
        // Pin button: toggle pin (desktop only)
        toggle.addEventListener('click', function () {
            if (!isDesktop()) return;
            setPinned(!isPinned());
        });
        if (searchIconBtn) {
            searchIconBtn.addEventListener('click', openSearchPopup);
        }
        const logoLink = document.getElementById('sidebar-logo-link');
        if (logoLink) {
            logoLink.addEventListener('click', function (e) {
                if (isCollapsed()) {
                    e.preventDefault();
                    setCollapsed(false);
                }
            });
        }
        // Hover expand / leave collapse (desktop only, when not pinned)
        if (!isDesktop()) return;
        sidebar.addEventListener('mouseenter', function () {
            if (leaveTimer) { clearTimeout(leaveTimer); leaveTimer = null; }
            if (isCollapsed() && !isPinned()) setCollapsed(false);
        });
        sidebar.addEventListener('mouseleave', function () {
            if (!isDesktop() || isPinned()) return;
            leaveTimer = setTimeout(function () {
                leaveTimer = null;
                setCollapsed(true);
            }, 180);
        });
    }
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCollapse);
    } else {
        initCollapse();
    }
})();

// Hide sidebar search on homepage and when search page is active (when expanded; when collapsed always show section for search icon)
(function () {
    function hideSidebarSearch() {
        const sidebar = document.getElementById('sidebar');
        const sidebarSearchSection = document.getElementById('sidebar-search-section');
        if (!sidebarSearchSection) return;
        const currentPath = window.location.pathname;
        const urlParams = new URLSearchParams(window.location.search);
        const browse = urlParams.get('browse');
        const isHomepage = currentPath === '/freedevtools/';
        const isBrowseCategories = browse === 'categories';
        // Only on homepage: never show sidebar search (no icon in collapsed, no input in expanded), even when search popup is open
        if (isHomepage && !isBrowseCategories) {
            sidebarSearchSection.style.display = 'none';
            return;
        }
        // On other pages: always show section (search icon when collapsed, input when expanded), even when search popup is open
        sidebarSearchSection.style.display = '';
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', hideSidebarSearch);
    } else {
        hideSidebarSearch();
    }

    // Also check on hash change and popstate (for client-side routing and back/forward)
    window.addEventListener('hashchange', hideSidebarSearch);
    window.addEventListener('popstate', hideSidebarSearch);
})();

// Set active nav link based on current path
(function () {
    function setActiveNavLink() {
        const currentPath = window.location.pathname;
        const navLinks = document.querySelectorAll('.nav-link-text');
        let bestMatch = null;
        let bestLength = 0;

        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (!href) return;

            // Exact match or path starts with href + '/'
            const isMatch = currentPath === href || currentPath.startsWith(href + '/');
            if (isMatch && href.length > bestLength) {
                bestMatch = link;
                bestLength = href.length;
            }
        });

        if (bestMatch) {
            bestMatch.classList.add('active');
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setActiveNavLink);
    } else {
        setActiveNavLink();
    }

    window.addEventListener('popstate', setActiveNavLink);
})();

// Defer SidebarBookmark component loading until after main content
const deferSidebarBookmarkLoad = () => {
    const bookmarkContainer = document.getElementById('sidebar-bookmark-container');
    if (!bookmarkContainer) return;

    // Don't initialize bookmark icon on pro pages
    const currentPath = window.location.pathname;
    if (currentPath.includes('/pro/')) {
        bookmarkContainer.style.display = 'none';
        return;
    }

    // Load and render BookmarkIcon component
    async function loadSidebarBookmark() {
        const bookmarkContainer = document.getElementById('sidebar-bookmark-container');
        if (!bookmarkContainer) return;

        try {
            // Check if module is already loaded (from base_layout or previous import)
            if (window.renderTool) {
                window.renderTool('bookmarkIcon', 'sidebar-bookmark-container');
                return;
            }

            // Import the module (ES modules are cached, so duplicate imports are safe)
            // The module may already be preloaded via modulepreload links in base_layout
            await import('/freedevtools/static/js/index.js');

            // Render BookmarkIcon component (replaces empty placeholder)
            if (window.renderTool) {
                window.renderTool('bookmarkIcon', 'sidebar-bookmark-container');
            } else {
                // Fallback: wait for module to load
                const checkInterval = setInterval(() => {
                    if (window.renderTool) {
                        window.renderTool('bookmarkIcon', 'sidebar-bookmark-container');
                        clearInterval(checkInterval);
                    }
                }, 100);

                // Timeout after 5 seconds
                setTimeout(() => clearInterval(checkInterval), 5000);
            }
        } catch (error) {
            console.error('[Sidebar] Failed to load BookmarkIcon component:', error);
        }
    }

    // Wait for page to be fully loaded, then use requestIdleCallback
    const loadWhenReady = () => {
        if ('requestIdleCallback' in window) {
            requestIdleCallback(() => {
                loadSidebarBookmark();
            }, { timeout: 1000 });
        } else {
            // Fallback for browsers without requestIdleCallback
            setTimeout(() => loadSidebarBookmark(), 1000);
        }
    };

    // Check if page is already loaded
    if (document.readyState === 'complete') {
        loadWhenReady();
    } else {
        // Wait for load event
        window.addEventListener('load', loadWhenReady, { once: true });
    }
};

// Defer SidebarProfile component loading until after main content
const deferSidebarProfileLoad = () => {
    const profileContainer = document.getElementById('sidebar-profile-container');
    if (!profileContainer) return;

    // Load and render SidebarProfile component
    async function loadSidebarProfile() {
        const profileContainer = document.getElementById('sidebar-profile-container');
        if (!profileContainer) return;

        try {
            // Check if module is already loaded (from base_layout or previous import)
            if (window.renderTool) {
                window.renderTool('sidebarProfile', 'sidebar-profile-container');
                return;
            }

            // Import the module (ES modules are cached, so duplicate imports are safe)
            // The module may already be preloaded via modulepreload links in base_layout
            await import('/freedevtools/static/js/index.js');

            // Render SidebarProfile component (replaces empty placeholder)
            if (window.renderTool) {
                window.renderTool('sidebarProfile', 'sidebar-profile-container');
            } else {
                // Fallback: wait for module to load
                const checkInterval = setInterval(() => {
                    if (window.renderTool) {
                        window.renderTool('sidebarProfile', 'sidebar-profile-container');
                        clearInterval(checkInterval);
                    }
                }, 100);

                // Timeout after 5 seconds
                setTimeout(() => clearInterval(checkInterval), 5000);
            }
        } catch (error) {
            console.error('[Sidebar] Failed to load SidebarProfile component:', error);
        }
    }

    // Wait for page to be fully loaded, then use requestIdleCallback
    const loadWhenReady = () => {
        if ('requestIdleCallback' in window) {
            requestIdleCallback(() => {
                loadSidebarProfile();
            }, { timeout: 1000 });
        } else {
            // Fallback for browsers without requestIdleCallback
            setTimeout(() => loadSidebarProfile(), 1000);
        }
    };

    // Check if page is already loaded
    if (document.readyState === 'complete') {
        loadWhenReady();
    } else {
        // Wait for load event
        window.addEventListener('load', loadWhenReady, { once: true });
    }
};

// Initialize sidebar search functionality (same as header search)
(function () {
    function initializeSidebarSearch() {
        const sidebar = document.getElementById('sidebar');
        if (!sidebar) return;

        // Find sidebar search input (scoped to sidebar)
        const sidebarSearchInput = sidebar.querySelector('#search');
        if (!sidebarSearchInput) return;

        // Initialize search from hash or searchState
        function initializeSearch(input) {
            if (!input) return;
            if (window.location.hash.startsWith('#search?q=')) {
                try {
                    const hashParams = new URLSearchParams(window.location.hash.substring(8));
                    const searchParam = hashParams.get('q');
                    if (searchParam) {
                        input.value = searchParam;
                        if (window.searchState) {
                            window.searchState.setQuery(searchParam);
                        } else {
                            setTimeout(() => {
                                if (window.searchState) window.searchState.setQuery(searchParam);
                            }, 100);
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

        // Handle click on search input - just highlight, don't navigate
        function handleSearchClick(input) {
            // Just focus the input, don't navigate
            input.focus();
        }

        // Handle keyboard events
        function handleKeyDown(e, input) {
            if (e.key === 'Enter' && input.value.trim()) {
                if (window.searchState) {
                    window.searchState.setQuery(input.value);
                }
                window.location.hash = `search?q=${encodeURIComponent(input.value)}`;
            } else if (e.key === 'Escape') {
                input.value = '';
                if (window.searchState) {
                    window.searchState.setQuery('');
                }
            }
        }

        // Handle focus/blur styling
        function handleFocus(input) {
            input.classList.remove('border-gray-300', 'dark:border-gray-600');
            input.classList.add('border-fdt-yellow-dark', 'dark:border-fdt-yellow');
        }

        function handleBlur(input) {
            input.classList.remove('border-fdt-yellow-dark', 'dark:border-fdt-yellow');
            input.classList.add('border-gray-300', 'dark:border-gray-600');
        }

        // Listen for global search state changes
        function handleSearchQueryChange(event) {
            if (sidebarSearchInput && event?.detail && event.detail.query !== undefined) {
                if (sidebarSearchInput.value !== event.detail.query) {
                    sidebarSearchInput.value = event.detail.query;
                }
            }
        }

        // Initialize search
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                initializeSearch(sidebarSearchInput);
            });
        } else {
            initializeSearch(sidebarSearchInput);
        }

        // Attach event listeners
        sidebarSearchInput.addEventListener('input', (e) => handleSearchChange(e, sidebarSearchInput));
        sidebarSearchInput.addEventListener('keydown', (e) => handleKeyDown(e, sidebarSearchInput));
        sidebarSearchInput.addEventListener('focus', () => handleFocus(sidebarSearchInput));
        sidebarSearchInput.addEventListener('blur', () => handleBlur(sidebarSearchInput));
        sidebarSearchInput.addEventListener('click', () => handleSearchClick(sidebarSearchInput));

        // Listen for global search state changes
        window.addEventListener('searchQueryChanged', handleSearchQueryChange);

        // Handle hash changes
        window.addEventListener('hashchange', () => {
            initializeSearch(sidebarSearchInput);
        });
    }

    // Initialize sidebar search
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeSidebarSearch);
    } else {
        initializeSidebarSearch();
    }

    // Handle Ctrl/Cmd+K - when collapsed open search popup; when expanded focus sidebar search (non-homepage only)
    document.addEventListener('keydown', function (e) {
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            const currentPath = window.location.pathname;
            const hash = window.location.hash;
            const isHomepage = currentPath === '/freedevtools/' && (!hash || hash === '#' || hash === '');
            if (isHomepage) return;
            if (window.innerWidth < 1024) {
                e.preventDefault();
                e.stopImmediatePropagation();
                window.location.href = '/freedevtools/pro/search/';
                return;
            }
            const sidebar = document.getElementById('sidebar');
            const collapsed = sidebar && sidebar.classList.contains('sidebar-collapsed');
            e.preventDefault();
            e.stopImmediatePropagation();
            if (collapsed) {
                if (window.searchState) window.searchState.setQuery('');
                window.location.hash = '#search?q=';
            } else {
                const sidebarSearchInput = document.querySelector('#sidebar #search');
                if (sidebarSearchInput) sidebarSearchInput.focus();
            }
        }
    }, true);
})();

// Run immediately if DOM is ready, otherwise wait for DOMContentLoaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
        deferSidebarProfileLoad();
    });
} else {
    // DOM already loaded, run immediately (but still defer component loading)
    deferSidebarProfileLoad();
}