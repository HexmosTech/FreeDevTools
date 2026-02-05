import * as cheerio from 'cheerio';
import { CONFIG } from './config';
import { SearchResult, SearchResponse } from './types';

export async function fetchAndParseTool(url: string): Promise<string | null> {
    try {
        const response = await fetch(url);
        if (!response.ok) return null;

        const text = await response.text();
        const $ = cheerio.load(text);

        const slotContainer = $('#slot-container');
        if (slotContainer.length > 0) {
            const headContent = $('head').html() || '';
            const baseTag = `<base href="${CONFIG.DOMAIN}">`;

            return `<!DOCTYPE html>
            <html>
                <head>
                    ${baseTag}
                    ${headContent}
                    <style>
                        body { margin: 0; padding: 20px; background: #fff; }
                        #slot-container { display: block !important; }
                        /* Back button styles */
                        .back-btn {
                            position: fixed;
                            top: 10px;
                            left: 10px;
                            z-index: 10000;
                            background-color: var(--vscode-button-background);
                            color: var(--vscode-button-foreground);
                            border: none;
                            padding: 6px 12px;
                            border-radius: 4px;
                            cursor: pointer;
                            font-family: var(--vscode-font-family);
                            font-size: 13px;
                            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
                            display: flex;
                            align-items: center;
                            gap: 5px;
                        }
                        .back-btn:hover {
                            background-color: var(--vscode-button-hoverBackground);
                        }
                    </style>
                </head>
                <body>
                    <button class="back-btn" onclick="back()">
                        <span>&larr;</span> Back
                    </button>
                    ${$.html('#slot-container')}
                    <script>
                        const vscode = acquireVsCodeApi();
                        function back() {
                            vscode.postMessage({ command: 'back' });
                        }
                    </script>
                </body>
            </html>`;
        }

        return null;
    } catch (e) {
        console.error('Fetch tool error:', e);
        return null;
    }
}

export async function searchUtilities(query: string, category: string = 'all', offset: number = 0): Promise<{ hits: SearchResult[], total: number }> {
    try {
        const searchBody: any = {
            q: query,
            limit: 100, // Fetch more to account for filtering
            offset: offset,
            facets: ['category'],
            attributesToRetrieve: [
                'id',
                'name',
                'title',
                'description',
                'category',
                'path',
                'image',
                'code',
            ],
        };

        if (category && category !== 'all') {
            if (category === 'emoji') {
                searchBody.filter = "category = 'emojis'";
            } else {
                searchBody.filter = `category = '${category}'`;
            }
        }

        const response = await fetch(CONFIG.SEARCH_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${CONFIG.API_KEY}`,
            },
            body: JSON.stringify(searchBody),
        });

        if (!response.ok) {
            throw new Error('Search failed: ' + response.statusText);
        }

        const data = await response.json() as SearchResponse;
        const hits = data.hits;
        const total = data.estimatedTotalHits || data.totalHits || 0;
        return { hits, total };
    } catch (error) {
        console.error('Search error:', error);
        return { hits: [], total: 0 };
    }
}
