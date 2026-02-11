const vscode = acquireVsCodeApi();
const searchInput = document.getElementById('search-input');
const clearBtn = document.getElementById('clear-btn');
const resultsList = document.getElementById('results-list');
const loadingIndicator = document.getElementById('loading');
const noResultsIndicator = document.getElementById('no-results');
const errorMsg = document.getElementById('error-msg');
const header = document.getElementById('header');

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

async function performSearch(query, isNewSearch = false) {
    if (isNewSearch) {
        currentQuery = query;
        offset = 0;
        hasMore = true;
        isLoading = false;
        resultsList.innerHTML = ''; // Clear for new search
    }

    if (isLoading) return;
    isLoading = true;

    try {
        const response = await fetch(MEILI_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + MEILI_KEY
            },
            body: JSON.stringify({
                q: query,
                limit: LIMIT,
                offset: offset,
                attributesToRetrieve: ['name', 'title', 'description', 'path', 'category', 'image', 'code']
            })
        });

        const data = await response.json();
        const hits = data.hits || [];

        if (hits.length < LIMIT) {
            hasMore = false;
        }

        offset += hits.length;
        renderResults(hits, isNewSearch);

    } catch (error) {
        console.error('Search error:', error);
        if (isNewSearch) {
            loadingIndicator.style.display = 'none';
            errorMsg.textContent = 'Error fetching results.';
            errorMsg.style.display = 'block';
        }
    } finally {
        isLoading = false;
        if (isNewSearch) {
            loadingIndicator.style.display = 'none';
        }
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
