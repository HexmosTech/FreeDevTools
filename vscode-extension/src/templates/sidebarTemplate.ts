import * as vscode from 'vscode';

export function getSidebarHtml(webview: vscode.Webview, extensionUri: vscode.Uri, nonce: string): string {
    const styleUri = webview.asWebviewUri(vscode.Uri.joinPath(extensionUri, 'media', 'sidebar.css'));
    const scriptUri = webview.asWebviewUri(vscode.Uri.joinPath(extensionUri, 'media', 'sidebar.js'));
    const iconUri = webview.asWebviewUri(vscode.Uri.joinPath(extensionUri, 'assets', 'images', 'logo.png'));

    return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="Content-Security-Policy" content="default-src 'none'; img-src ${webview.cspSource} https:; script-src 'nonce-${nonce}'; style-src ${webview.cspSource}; connect-src ${process.env.MEILI_SEARCH_URL || 'https://search.apps.hexmos.com/indexes/freedevtools/search'};">
            <title>Free DevTools</title>
            <link href="${styleUri}" rel="stylesheet">
        </head>
        <body>
            <div class="header" id="header">
                <img src="${iconUri}" class="logo" alt="Logo" />
                <h2>Free DevTools</h2>
            </div>

            <div class="search-container">
                <input type="text" id="search-input" class="search-input" placeholder="Search 350k+ resources..." />
                <span id="clear-btn" class="clear-btn">✕</span>
                <span id="filter-btn" class="filter-btn" title="Filter by category">
                    <!-- Filter SVG Icon -->
                    <svg width="14" height="14" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
                        <path d="M4.5 4C4.22386 4 4 4.22386 4 4.5C4 4.77614 4.22386 5 4.5 5H10.5C10.7761 5 11 4.77614 11 4.5C11 4.22386 10.7761 4 10.5 4H4.5ZM2.5 7.5C2.22386 7.5 2 7.72386 2 8C2 8.27614 2.22386 8.5 2.5 8.5H12.5C12.7761 8.5 13 8.27614 13 8C13 7.72386 12.7761 7.5 12.5 7.5H2.5ZM6.5 11C6.22386 11 6 11.2239 6 11.5C6 11.7761 6.22386 12 6.5 12H8.5C8.77614 12 9 11.7761 9 11.5C9 11.2239 8.77614 11 8.5 11H6.5Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                    </svg>
                </span>
                <div id="filter-menu" class="filter-menu">
                    <!-- Options populated by JS -->
                </div>
            </div>

            <div class="loading" id="loading">Searching...</div>
            <div class="no-results" id="no-results">No results found</div>
            <div class="error-msg" id="error-msg"></div>
            <div class="results-list" id="results-list"></div>

            <script nonce="${nonce}">
                window.vscodeConfig = {
                    meiliUrl: '${process.env.MEILI_SEARCH_URL || 'https://search.apps.hexmos.com/indexes/freedevtools/search'}',
                    meiliKey: '${process.env.MEILI_SEARCH_API_KEY || ''}'
                };
            </script>
            <script nonce="${nonce}" src="${scriptUri}"></script>
        </body>
        </html>`;
}
