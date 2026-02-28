(function () {
    // Load bookmark icon in breadcrumb
    const bookmarkContainer = document.getElementById('breadcrumb-bookmark-container');
    if (!bookmarkContainer) return;

    // Don't initialize bookmark icon on pro pages
    const currentPath = window.location.pathname;
    if (currentPath.includes('/pro/')) {
        bookmarkContainer.style.display = 'none';
        return;
    }

    async function loadBreadcrumbBookmark() {
        if (!bookmarkContainer) return;

        try {
            if (window.renderTool) {
                window.renderTool('bookmarkIcon', 'breadcrumb-bookmark-container');
                return;
            }

            await import('/freedevtools/static/js/index.js');

            if (window.renderTool) {
                window.renderTool('bookmarkIcon', 'breadcrumb-bookmark-container');
            } else {
                const checkInterval = setInterval(() => {
                    if (window.renderTool) {
                        window.renderTool('bookmarkIcon', 'breadcrumb-bookmark-container');
                        clearInterval(checkInterval);
                    }
                }, 100);
                setTimeout(() => clearInterval(checkInterval), 5000);
            }
        } catch (error) {
            console.error('[Breadcrumb] Failed to load BookmarkIcon component:', error);
        }
    }

    const loadWhenReady = () => {
        if ('requestIdleCallback' in window) {
            requestIdleCallback(() => {
                loadBreadcrumbBookmark();
            }, { timeout: 1000 });
        } else {
            setTimeout(() => loadBreadcrumbBookmark(), 1000);
        }
    };

    if (document.readyState === 'complete') {
        loadWhenReady();
    } else {
        window.addEventListener('load', loadWhenReady, { once: true });
    }
})();
