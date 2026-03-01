(function () {
    // 1. Theme Initialization
    function getTheme() {
        const urlParams = new URLSearchParams(window.location.search);
        const urlTheme = urlParams.get('theme');
        if (urlTheme) return urlTheme;
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) return savedTheme;
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    window.applyTheme = function (theme) {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }
    applyTheme(getTheme());
    window.addEventListener('message', (event) => {
        const message = event.data;
        if (message && message.command === 'setTheme' && message.theme) {
            applyTheme(message.theme);
        }
    });

    // 2. Pro Status & Ad Management
    window.getProStatusCookie = function () {
        const cookies = document.cookie.split('; ');
        for (const cookie of cookies) {
            const [name, value] = cookie.split('=');
            if (name.trim() === 'hexmos-one-fdt-p-status') {
                return value === 'true';
            }
        }
        return false;
    };
    function setProFlag(isPro) {
        document.documentElement.setAttribute('data-pro', isPro ? '1' : '0');
    }
    setProFlag(window.getProStatusCookie());
    window.addEventListener('pro-status-changed', function (e) {
        if (e && e.detail && typeof e.detail.isPro === 'boolean') {
            setProFlag(e.detail.isPro);
        } else {
            setProFlag(window.getProStatusCookie());
        }
    });
    function removeGoogleAdSense() {
        const cookieStatus = window.getProStatusCookie();
        if (cookieStatus) {
            const metaTag = document.querySelector('meta[name="google-adsense-account"]');
            if (metaTag) metaTag.remove();
            const adScript = document.querySelector('script[src*="adsbygoogle.js"]');
            if (adScript) adScript.remove();
        }
    }
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', removeGoogleAdSense);
    } else {
        removeGoogleAdSense();
    }
    window.addEventListener('pro-status-changed', removeGoogleAdSense);

    // 3. Search State Initialization
    window.searchState = {
        query: '',
        setQuery: function (query) {
            this.query = query;
            window.dispatchEvent(new CustomEvent('searchQueryChanged', { detail: { query } }));
        },
        getQuery: function () { return this.query; },
    };

    // 4. GTM Loading
    (function () {
        const GTM_ID = 'GTM-KH6DG8PP';
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
        function loadGTM() {
            if (window.__gtmLoaded) return;
            window.__gtmLoaded = true;
            const s = document.createElement('script');
            s.async = true;
            s.src = "https://www.googletagmanager.com/gtm.js?id=" + GTM_ID;
            document.head.appendChild(s);
        }
        window.addEventListener('load', loadGTM);
    })();

    // 5. Tool Interaction & Banner Logic
    window.__fdtVer = document.body ? document.body.getAttribute('data-fdt-ver') || '' : '';
    let jsModuleLoaded = false;
    let jsModuleLoading = false;
    async function loadSearchModule() {
        if (jsModuleLoaded) return Promise.resolve();
        if (jsModuleLoading) {
            return new Promise((resolve) => {
                const checkInterval = setInterval(() => {
                    if (jsModuleLoaded) { clearInterval(checkInterval); resolve(); }
                }, 50);
            });
        }
        jsModuleLoading = true;
        try {
            await import('/freedevtools/static/js/index.js?ver=' + window.__fdtVer);
            jsModuleLoaded = true;
        } finally { jsModuleLoading = false; }
    }
    window.toggleSearchView = function () {
        const searchContainer = document.getElementById('search-container');
        const slotContainer = document.getElementById('slot-container');
        if (!searchContainer || !slotContainer) return;
        const searchQuery = window.searchState?.getQuery?.() || '';
        const isSearchHash = window.location.hash.startsWith('#search');
        if (searchQuery.trim() || (isSearchHash && window.location.hash === '#search?q=')) {
            searchContainer.style.display = 'block';
            slotContainer.style.opacity = '0.3';
            slotContainer.style.pointerEvents = 'none';
            if (!window.searchMounted) {
                loadSearchModule().then(() => {
                    if (window.renderTool && !window.searchMounted) {
                        window.renderTool('search-page', 'search-container');
                        window.searchMounted = true;
                    }
                });
            }
        } else {
            searchContainer.style.display = 'none';
            slotContainer.style.opacity = '1';
            slotContainer.style.pointerEvents = 'auto';
        }
    }
    let proBannerMounted = false;
    async function loadProBannerModule() {
        if (proBannerMounted) return Promise.resolve();
        try {
            await loadSearchModule();
            if (window.renderTool && !proBannerMounted) {
                const container = document.getElementById('pro-banner-container');
                if (container) {
                    window.renderTool('pro-banner', 'pro-banner-container');
                    proBannerMounted = true;
                }
            }
        } catch (error) { console.error('Failed to load ProBanner module:', error); }
    }
    function trackPageVisit() {
        const hash = window.location.hash;
        const pathname = window.location.pathname;
        if (hash.startsWith('#search') || pathname.includes('/pro/')) return 0;
        const today = new Date().toISOString().split('T')[0];
        try {
            const lastPage = localStorage.getItem('fdt_pro_banner_last_page');
            if (lastPage === pathname) return JSON.parse(localStorage.getItem('fdt_pro_banner_visits') || '{}').count || 0;
            localStorage.setItem('fdt_pro_banner_last_page', pathname);
            let visitData = JSON.parse(localStorage.getItem('fdt_pro_banner_visits') || '{"count":0}');
            if (visitData.date !== today) visitData = { date: today, count: 0 };
            visitData.count += 1;
            localStorage.setItem('fdt_pro_banner_visits', JSON.stringify(visitData));
            return visitData.count;
        } catch (e) { return 0; }
    }
    window.toggleProBanner = function () {
        const proBannerContainer = document.getElementById('pro-banner-container');
        if (!proBannerContainer) return;
        const manualTrigger = (new URLSearchParams(window.location.search)).get('buy') === 'pro' || window.location.hash === '#pro-banner';
        let shouldShow = manualTrigger;
        if (!manualTrigger) {
            const visitCount = trackPageVisit();
            if (visitCount > 0 && visitCount <= 12 && visitCount % 3 === 0) {
                const today = new Date().toISOString().split('T')[0];
                if (localStorage.getItem('fdt_pro_banner_last_shown_date') !== today) {
                    localStorage.removeItem('fdt_pro_banner_last_shown');
                    localStorage.setItem('fdt_pro_banner_last_shown_date', today);
                }
                if (localStorage.getItem('fdt_pro_banner_last_shown') !== visitCount.toString()) {
                    shouldShow = true;
                    localStorage.setItem('fdt_pro_banner_last_shown', visitCount.toString());
                }
            }
        }
        if (shouldShow && window.getProStatusCookie()) shouldShow = false;
        proBannerContainer.style.display = shouldShow ? 'block' : 'none';
        if (shouldShow && !proBannerMounted) loadProBannerModule();
    }

    document.addEventListener('DOMContentLoaded', function () {
        if (!window.__fdtVer && document.body) window.__fdtVer = document.body.getAttribute('data-fdt-ver') || '';
        toggleSearchView();
        toggleProBanner();
        window.addEventListener('searchQueryChanged', toggleSearchView);
        window.addEventListener('hashchange', () => { toggleSearchView(); toggleProBanner(); });
        window.addEventListener('popstate', toggleProBanner);
        if (window.location.hash.startsWith('#search')) {
            const qIndex = window.location.hash.indexOf('q=');
            if (qIndex !== -1) window.searchState.setQuery(decodeURIComponent(window.location.hash.substring(qIndex + 2)));
        }
    });
    window.addEventListener('load', () => {
        const schedulePreload = () => loadSearchModule().then(() => window.preloadSearchPage?.().catch(() => { }));
        if ('requestIdleCallback' in window) requestIdleCallback(schedulePreload, { timeout: 3000 });
        else setTimeout(schedulePreload, 1500);
    });

    // 6. Launch Banner Scroll Logic
    (function () {
        var launchBannerShown = false;
        function showLaunchBannerOnScroll() {
            if (launchBannerShown || (document.scrollingElement.scrollTop || window.pageYOffset || 0) <= 80) return;
            launchBannerShown = true;
            window.removeEventListener('scroll', showLaunchBannerOnScroll);
            var root = document.getElementById('lr-launch-banner-root');
            var card = document.getElementById('lr-launch-banner');
            if (!root) return;
            if (card) {
                card.classList.remove('lr-ph-theme-light', 'lr-ph-theme-dark');
                card.classList.add(document.documentElement.classList.contains('dark') ? 'lr-ph-theme-dark' : 'lr-ph-theme-light');
            }
            root.style.display = '';
            root.style.opacity = '0';
            root.style.transform = 'translateY(14px)';
            requestAnimationFrame(() => requestAnimationFrame(() => {
                root.style.opacity = '1';
                root.style.transform = 'translateY(0)';
            }));
        }
        setTimeout(() => window.addEventListener('scroll', showLaunchBannerOnScroll, { passive: true }), 500);
    })();
})();
