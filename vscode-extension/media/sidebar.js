const vscode = acquireVsCodeApi();
const searchInput = document.getElementById('search-input');
const clearBtn = document.getElementById('clear-btn');
const resultsList = document.getElementById('results-list');
const loadingIndicator = document.getElementById('loading');
const noResultsIndicator = document.getElementById('no-results');
const errorMsg = document.getElementById('error-msg');
const header = document.querySelector('.header');

// Filter Logic
const filterBtn = document.getElementById('filter-btn');
const filterMenu = document.getElementById('filter-menu');
let selectedCategory = 'all';

const categories = [
    { key: 'all', label: 'All' },
    { key: 'installerpedia', label: 'InstallerPedia' },
    { key: 'tools', label: 'Tools' },
    { key: 'tldr', label: 'TLDR' },
    { key: 'cheatsheets', label: 'Cheatsheets' },
    { key: 'png_icons', label: 'PNG Icons' },
    { key: 'svg_icons', label: 'SVG Icons' },
    { key: 'emojis', label: 'Emojis' },
    { key: 'mcp', label: 'MCP' },
    { key: 'man_pages', label: 'Man Pages' },
];

function initFilterMenu() {
    if (!filterMenu) return;
    filterMenu.innerHTML = '';
    categories.forEach(cat => {
        const div = document.createElement('div');
        div.className = 'filter-option';
        if (cat.key === selectedCategory) div.classList.add('selected');
        div.textContent = cat.label;
        div.onclick = (e) => {
            e.stopPropagation();
            selectCategory(cat.key);
            filterMenu.classList.remove('open');
        };
        filterMenu.appendChild(div);
    });
}

function selectCategory(key) {
    selectedCategory = key;
    initFilterMenu(); // Update selection classes

    if (selectedCategory !== 'all') {
        filterBtn.classList.add('active');
    } else {
        filterBtn.classList.remove('active');
    }

    const query = searchInput.value.trim();
    if (query.length >= 2) {
        performSearch(query);
    }
}

if (filterBtn) {
    filterBtn.onclick = (e) => {
        e.stopPropagation(); // prevent window click
        filterMenu.classList.toggle('open');
    };
    initFilterMenu();
}

// Close on outside click
window.addEventListener('click', () => {
    if (filterMenu) filterMenu.classList.remove('open');
});

// Use injected config
const MEILI_URL = window.vscodeConfig.meiliUrl;
const MEILI_KEY = window.vscodeConfig.meiliKey;

let debounceTimeout;
let currentQuery = '';
let offset = 0;
const LIMIT = 30; // Show 30 by default
let isLoading = false;
let hasMore = true;

function updateClearBtn() {
    clearBtn.style.display = searchInput.value ? 'block' : 'none';
}

clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    updateClearBtn();
    resultsList.innerHTML = '';
    loadingIndicator.style.display = 'none';
    noResultsIndicator.style.display = 'none';
    errorMsg.style.display = 'none';
    header.style.display = 'flex';
    searchInput.focus();
    currentQuery = '';
});

searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim();
    updateClearBtn();

    if (debounceTimeout) clearTimeout(debounceTimeout);

    if (!query) {
        resultsList.innerHTML = '';
        header.style.display = 'flex';
        loadingIndicator.style.display = 'none';
        noResultsIndicator.style.display = 'none';
        errorMsg.style.display = 'none';
        currentQuery = '';
        return;
    }

    // Hide header & Show Loader immediately for new search
    header.style.display = 'none';
    loadingIndicator.style.display = 'block';
    noResultsIndicator.style.display = 'none';
    errorMsg.style.display = 'none';
    resultsList.innerHTML = '';

    debounceTimeout = setTimeout(() => performSearch(query, true), 300);
});

// Infinite Scroll Listener
resultsList.addEventListener('scroll', () => {
    if (isLoading || !hasMore || !currentQuery) return;

    // Load more when scrolled near bottom (100px threshold)
    if (resultsList.scrollTop + resultsList.clientHeight >= resultsList.scrollHeight - 100) {
        performSearch(currentQuery, false);
    }
});

async function performSearch(query, isNewSearch = true) {
    if (!query) {
        resultsList.innerHTML = '';
        clearBtn.style.display = 'none';
        filterBtn.style.display = 'none';
        return;
    }

    if (isNewSearch) {
        offset = 0;
        hasMore = true;
        currentQuery = query;
        resultsList.innerHTML = '';
        noResultsIndicator.style.display = 'none';
        errorMsg.style.display = 'none';
        clearBtn.style.display = 'flex';
        filterBtn.style.display = 'flex';
        loadingIndicator.style.display = 'block';
    } else {
        if (isLoading || !hasMore) return;
        loadingIndicator.style.display = 'block';
    }

    isLoading = true;

    try {
        const searchBody = {
            q: query,
            limit: LIMIT,
            offset: offset,
            attributesToRetrieve: [
                'id',
                'name',
                'title',
                'description',
                'category',
                'path',
                'image',
                'code'
            ]
        };

        if (selectedCategory && selectedCategory !== 'all') {
            searchBody.filter = `category = '${selectedCategory}'`;
        }

        const response = await fetch(MEILI_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${MEILI_KEY}`
            },
            body: JSON.stringify(searchBody)
        });

        if (!response.ok) {
            if (response.status === 403) {
                throw new Error('Access denied (403). check API Key.');
            }
            throw new Error(`Search failed: ${response.statusText}`);
        }

        const data = await response.json();
        const hits = data.hits || [];

        // Update Pagination State
        if (hits.length < LIMIT) {
            hasMore = false;
        }
        offset += hits.length;

        renderResults(hits, isNewSearch);

        // Handle no results case specifically for new search
        if (isNewSearch && hits.length === 0) {
            noResultsIndicator.style.display = 'block';
        }

    } catch (error) {
        console.error(error);
        if (isNewSearch) {
            errorMsg.textContent = error.message;
            errorMsg.style.display = 'block';
        }
    } finally {
        isLoading = false;
        loadingIndicator.style.display = 'none';
    }
}

function renderResults(hits, isNewSearch) {
    // For new search, checking empty result
    if (isNewSearch && hits.length === 0) {
        noResultsIndicator.style.display = 'block';
        return;
    }

    hits.forEach(hit => {
        const item = document.createElement('div');
        item.className = 'result-item';

        // Determine Category & Preview
        const category = hit.category || 'tool';
        const titleText = hit.name || hit.title || 'Untitled';
        let previewHtml = '';

        const isIconOrEmoji = ['emojis', 'svg_icons', 'png_icons'].includes(category);
        const showDesc = !isIconOrEmoji;

        if (isIconOrEmoji) {
            item.classList.add('large-preview');
        }

        if (category === 'emojis' && hit.code) {
            previewHtml = `<div class="preview-box"><span class="preview-emoji">${hit.code}</span></div>`;
        } else if ((category === 'svg_icons' || category === 'png_icons') && hit.image) {
            const imgUrl = hit.image.startsWith('http') ? hit.image : 'https://hexmos.com/freedevtools' + hit.image;
            previewHtml = `<div class="preview-box"><img src="${imgUrl}" class="preview-img" alt="icon"></div>`;
        }

        // Clean Category Name (replace _ with space)
        const categoryDisplay = category.replace(/_/g, ' ');

        const contentHtml = `
            <div class="content-box">
                <div class="result-title">${titleText}</div>
                ${showDesc && hit.description ? `<div class="result-desc">${hit.description}</div>` : ''}
                <div class="badge">${categoryDisplay}</div>
            </div>
        `;

        item.innerHTML = previewHtml + contentHtml;

        item.addEventListener('click', () => {
            vscode.postMessage({ command: 'open-tool', path: hit.path, url: hit.url });
        });

        resultsList.appendChild(item);
    });
}

window.addEventListener('load', () => {
    searchInput.focus();
    updateClearBtn();
});

window.addEventListener('focus', () => {
    // Re-focus search input when the webview gains focus
    if (searchInput) {
        searchInput.focus();
    }
});
