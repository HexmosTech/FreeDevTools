import { CONFIG } from '../config';

const CATEGORIES = [
    { key: 'all', label: 'All' },
    { key: 'tools', label: 'Tools' },
    { key: 'tldr', label: 'TLDR' },
    { key: 'cheatsheets', label: 'Cheatsheets' },
    { key: 'png_icons', label: 'PNG Icons' },
    { key: 'svg_icons', label: 'SVG Icons' },
    { key: 'emoji', label: 'Emojis' },
    { key: 'mcp', label: 'MCP' },
    { key: 'man_pages', label: 'Man Pages' },
    { key: 'installerpedia', label: 'InstallerPedia' },
];

export function getWebviewContent(): string {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Search Results</title>
        <style>
            :root {
                --card-bg: var(--vscode-editor-background);
                --card-hover: var(--vscode-list-hoverBackground);
                --text-color: var(--vscode-foreground);
                --desc-color: var(--vscode-descriptionForeground);
                --border-color: var(--vscode-widget-border);
                --tab-active-bg: var(--vscode-button-background);
                --tab-active-fg: var(--vscode-button-foreground);
                --tab-inactive-bg: var(--vscode-editor-widget-background);
                --tab-inactive-fg: var(--text-color);
            }
            body { font-family: var(--vscode-font-family); padding: 20px; color: var(--text-color); background-color: var(--vscode-editor-background); }
            h2 { margin-bottom: 20px; font-weight: normal; }
            
            /* Tabs */
            .tabs {
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
                margin-bottom: 20px;
                padding-bottom: 5px;
            }
            .tab {
                border: 1px solid var(--border-color);
                background-color: var(--tab-inactive-bg);
                color: var(--tab-inactive-fg);
                padding: 6px 12px;
                border-radius: 6px;
                font-size: 12px;
                cursor: pointer;
                transition: all 0.2s ease;
                user-select: none;
            }
            .tab:hover {
                border-color: var(--tab-active-bg);
                opacity: 0.9;
            }
            .tab.active {
                background-color: var(--tab-active-bg);
                color: var(--tab-active-fg);
                border-color: var(--tab-active-bg);
            }

            .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 16px; }
            .card {
                border: 1px solid var(--border-color);
                border-radius: 6px;
                padding: 42px 16px 16px 16px;
                cursor: pointer;
                background: var(--card-bg);
                transition: transform 0.1s, background-color 0.1s;
                display: flex;
                flex-direction: column;
                position: relative; /* For absolute category */
                text-align: left;
                height: 100%;
                box-sizing: border-box;
            }
            .card:hover { background-color: var(--card-hover); transform: translateY(-2px); border-color: var(--vscode-focusBorder); }
            .icon-container { margin-bottom: 12px; height: 64px; display: flex; align-items: center; justify-content: center; width: 100%; }
            .icon { max-height: 64px; max-width: 100%; object-fit: contain; }
            .emoji { font-size: 48px; }
            .placeholder-icon { font-size: 32px; font-weight: bold; color: var(--vscode-textLink-foreground); }
            .content { width: 100%; }
            .header { display: flex; flex-direction: column; gap: 4px; margin-bottom: 8px; padding-right: 0; }
            .title { font-weight: 600; font-size: 1.1em; }
            .category { 
                position: absolute; 
                top: 12px; 
                right: 12px; 
                font-size: 0.75em; 
                text-transform: uppercase; 
                background: var(--vscode-badge-background); 
                color: var(--vscode-badge-foreground); 
                padding: 2px 6px; 
                border-radius: 4px; 
                max-width: 120px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                text-align: center;
            }
            .description { font-size: 0.9em; color: var(--desc-color); display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; line-height: 1.4; }
            
            /* Icon Mode Overrides */
            .card.icon-mode {
                padding-top: 16px;
                text-align: center;
                align-items: center;
            }
            .card.icon-mode .header {
                padding-right: 0;
                align-items: center;
            }
            .card.icon-mode .category {
                /* Optional: Move tag for icons? Or keep top right? Keep consistent. */
            }
            .spinner { 
                border: 4px solid var(--vscode-editor-background); 
                width: 40px; 
                height: 40px; 
                border-radius: 50%; 
                border-left-color: var(--vscode-progressBar-background); 
                border-top-color: var(--vscode-progressBar-background); 
                animation: spin 1s linear infinite; 
                display: inline-block; 
                margin-bottom: 10px;
            }
            @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
            .message { text-align: center; margin-top: 20px; color: var(--desc-color); }
            .loading-container {
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: 20px;
                background: var(--vscode-editor-background);
                border-radius: 8px;
                box-shadow: 0 4px 10px rgba(0,0,0,0.2);
                z-index: 100;
            }
            .empty-state {
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                text-align: center;
                color: var(--desc-color);
                z-index: 90;
            }
            .empty-icon {
                font-size: 48px;
                margin-bottom: 8px;
                opacity: 0.5;
            }
            
            /* Search Bar styling */
            .search-bar {
                margin-bottom: 15px;
                display: flex;
            }
            .search-input {
                width: 100%;
                max-width: 400px;
                padding: 8px 8px;
                background-color: var(--vscode-input-background);
                color: var(--vscode-input-foreground);
                border: 1px solid var(--vscode-input-border);
                border-radius: 2px;
                outline: none;
                font-family: inherit;
                font-size: 14px;
            }
            .search-input:focus {
                border-color: var(--vscode-focusBorder);
            }
            .input-wrapper {
                position: relative;
                width: 100%;
                max-width: 400px;
            }
            .search-clear {
                position: absolute;
                right: 8px;
                top: 50%;
                transform: translateY(-50%);
                cursor: pointer;
                color: var(--vscode-input-foreground);
                font-size: 18px;
                line-height: 1;
                opacity: 0.6;
                display: none;
                user-select: none;
            }
            .search-clear:hover { opacity: 1; }
        </style>
    </head>
    <body>
        <div class="search-bar">
            <div class="input-wrapper">
                <input type="text" id="search-input" class="search-input" placeholder="Search 350k+ resources..." autocomplete="off">
                <div id="search-clear" class="search-clear">&times;</div>
            </div>
        </div>

        <div id="status"></div>
        
        <div id="tabs-container" class="tabs" style="display:none;">
            <!-- Tabs injected by JS -->
        </div>

        <div id="results" class="grid"></div>
        
        <div id="load-more-container" style="display:none; text-align:center; padding: 20px;">
            <button id="load-more-btn" class="tab" style="padding: 10px 20px; font-size: 14px;">Load More</button>
        </div>

        <script>
            const vscode = acquireVsCodeApi();
            const resultsDiv = document.getElementById('results');
            const statusDiv = document.getElementById('status');
            const tabsContainer = document.getElementById('tabs-container');
            const loadMoreContainer = document.getElementById('load-more-container');
            const loadMoreBtn = document.getElementById('load-more-btn');
            const searchInput = document.getElementById('search-input');
            const searchClear = document.getElementById('search-clear');
            
            const domain = '${CONFIG.DOMAIN}';
            const imageBaseUrl = '${CONFIG.DOMAIN}${CONFIG.BASE_PATH}';
            
            const categories = ${JSON.stringify(CATEGORIES)};
            let activeCategory = 'all';
            let currentCount = 0;
            let debounceTimer;

            function updateClearBtn() {
                searchClear.style.display = searchInput.value ? 'block' : 'none';
            }

            // Handle internal search input
            searchInput.addEventListener('input', (e) => {
                updateClearBtn();
                const val = e.target.value;
                if (debounceTimer) clearTimeout(debounceTimer);
                debounceTimer = setTimeout(() => {
                    // Send search command to extension
                    vscode.postMessage({
                        command: 'search',
                        query: val
                    });
                }, 300);
            });

            searchClear.onclick = () => {
                searchInput.value = '';
                updateClearBtn();
                searchInput.focus();
                vscode.postMessage({ command: 'search', query: '' });
            };

            loadMoreBtn.onclick = () => {
                loadMoreBtn.textContent = 'Loading...';
                vscode.postMessage({ command: 'loadMore' });
            };

            // Render Tabs
            function renderTabs() {
                tabsContainer.innerHTML = '';
                categories.forEach(cat => {
                    const btn = document.createElement('div');
                    btn.className = 'tab ' + (cat.key === activeCategory ? 'active' : '');
                    btn.textContent = cat.label;
                    btn.onclick = () => {
                        if (activeCategory === cat.key) return;
                        activeCategory = cat.key;
                        renderTabs();
                        vscode.postMessage({
                            command: 'setCategory',
                            category: cat.key
                        });
                    };
                    tabsContainer.appendChild(btn);
                });
            }

            // Initial render
            renderTabs();

            // Auto-focus search input
            searchInput.focus();

            // Notify extension that the view is ready to receive data
            vscode.postMessage({ command: 'ready' });

            function openUrl(url) {
                vscode.postMessage({
                    command: 'openPage',
                    url: url
                });
            }

            function escapeHtml(unsafe) {
                return unsafe
                    .replace(/&/g, "&amp;")
                    .replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;")
                    .replace(/"/g, "&quot;")
                    .replace(/'/g, "&#039;");
            }

            window.addEventListener('message', event => {
                const message = event.data;
                
                if (message.command === 'clear') {
                    resultsDiv.innerHTML = '';
                    statusDiv.innerHTML = '';
                    tabsContainer.style.display = 'none';
                    loadMoreContainer.style.display = 'none';
                    currentCount = 0;
                    searchInput.value = '';
                    updateClearBtn();
                }
                else if (message.command === 'loading') {
                    statusDiv.innerHTML = '<div class="loading-container"><div class="spinner"></div><p>Searching...</p></div>';
                    tabsContainer.style.display = 'flex';
                    resultsDiv.innerHTML = '';
                    loadMoreContainer.style.display = 'none';
                    currentCount = 0;
                    if (message.query && (document.activeElement !== searchInput || searchInput.value === '') && searchInput.value !== message.query) {
                        searchInput.value = message.query;
                        updateClearBtn();
                    }
                }
                else if (message.command === 'results') {
                    tabsContainer.style.display = 'flex';
                    statusDiv.innerHTML = '';

                    const results = message.results;
                    const total = message.total || 0;
                    
                    if (!message.append) {
                        resultsDiv.innerHTML = '';
                        currentCount = 0;
                        if (message.query && document.activeElement !== searchInput && searchInput.value !== message.query) {
                            searchInput.value = message.query;
                            updateClearBtn();
                        }
                        if (results.length === 0) {
                            statusDiv.innerHTML = \`
                                <div class="empty-state">
                                    <div class="empty-icon">🔍</div>
                                    <div class="message">No results found for "\${escapeHtml(message.query)}"</div>
                                </div>
                            \`;
    loadMoreContainer.style.display = 'none';
    return;
}
                    }

// Reset button text
loadMoreBtn.textContent = 'Load More';

// Update count
currentCount += results.length;

// Show count? 
// statusDiv.innerHTML = '<h2>Found ' + total + ' results</h2>'; // Optional

const html = results.map(result => {
    const fullUrl = result.path ? (domain + result.path) : '#';
    const name = result.name || result.title || 'Untitled';
    const description = result.description || '';
    const category = result.category || 'Tool';

    const isIconResource = result.category === 'emojis' || result.category === 'png_icons' || result.category === 'svg_icons';
    const cardClass = isIconResource ? 'card icon-mode' : 'card';

    let iconContainerHtml = '';
    if (result.image) {
        const img = '<img src="' + imageBaseUrl + result.image + '" alt="' + escapeHtml(name) + '" class="icon">';
        iconContainerHtml = '<div class="icon-container">' + img + '</div>';
    } else if (result.category === 'emojis' && result.code) {
        const emoji = '<div class="emoji">' + result.code + '</div>';
        iconContainerHtml = '<div class="icon-container">' + emoji + '</div>';
    }

    const descriptionHtml = isIconResource ? '' : '<div class="description">' + escapeHtml(description) + '</div>';

    return \`
                            <div class="\${cardClass}" onclick="openUrl('\${fullUrl}')">
                                <span class="category">\${escapeHtml(category)}</span>
                                \${iconContainerHtml}
                                <div class="content">
                                    <div class="header">
                                        <span class="title">\${escapeHtml(name)}</span>
                                    </div>
                                    \${descriptionHtml}
                                </div>
                            </div>
                        \`;
                    }).join('');
                    
                    resultsDiv.insertAdjacentHTML('beforeend', html);
                    
                    // Show/Hide Load More
                    if (currentCount < total) {
                        loadMoreContainer.style.display = 'block';
                    } else {
                        loadMoreContainer.style.display = 'none';
                    }
                }
                else if (message.command === 'setCategory') {
                     activeCategory = message.category;
                     renderTabs();
                }
            });
        </script>
    </body>
    </html>`;
}

export function getIframeContent(url: string): string {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
        <style>
            body, html { margin: 0; padding: 0; height: 100%; overflow: hidden; background-color: #1e1e1e; }
            iframe { width: 100%; height: 100%; border: none; }
            .back-btn {
                position: fixed;
                top: 15px;
                left: 15px;
                z-index: 10000;
                background-color: #1e1e1e;
                color: #ffffff;
                border: 1px solid #333;
                padding: 8px 16px;
                border-radius: 20px;
                cursor: pointer;
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
                font-size: 13px;
                font-weight: 500;
                box-shadow: 0 4px 12px rgba(0,0,0,0.3);
                display: flex;
                align-items: center;
                gap: 6px;
                transition: all 0.2s ease;
            }
            .back-btn:hover {
                background-color: #2d2d2d;
                transform: translateY(-1px);
                box-shadow: 0 6px 16px rgba(0,0,0,0.4);
            }
            .back-btn:active {
                transform: translateY(0);
            }
        </style>
    </head>
    <body>
        <button class="back-btn" onclick="back()">
            <span>&larr;</span> Back to Search
        </button>
        <iframe src="${url}"></iframe>
        <script>
            // Set dark theme preference
            try {
                localStorage.setItem('theme', 'dark');
            } catch (e) { console.error(e); }

            const vscode = acquireVsCodeApi();
            function back() {
                vscode.postMessage({ command: 'back' });
            }
        </script>
    </body>
    </html>`;
}
