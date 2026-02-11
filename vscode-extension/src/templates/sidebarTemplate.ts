import * as vscode from 'vscode';
import { CONFIG } from '../config';

export function getSidebarHtml(webview: vscode.Webview, extensionUri: vscode.Uri, nonce: string): string {
    const styleUri = webview.asWebviewUri(vscode.Uri.joinPath(extensionUri, 'media', 'sidebar.css'));
    const scriptUri = webview.asWebviewUri(vscode.Uri.joinPath(extensionUri, 'media', 'sidebar.js'));
    const iconUri = webview.asWebviewUri(vscode.Uri.joinPath(extensionUri, 'assets', 'images', 'logo.png'));

    return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="Content-Security-Policy" content="default-src 'none'; img-src ${webview.cspSource} https:; script-src 'nonce-${nonce}'; style-src ${webview.cspSource}; connect-src ${CONFIG.MEILI_SEARCH_URL};">
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
            </div>

            <div class="loading" id="loading">Searching...</div>
            <div class="no-results" id="no-results">No results found</div>
            <div class="error-msg" id="error-msg"></div>
            <div class="results-list" id="results-list"></div>

            <script nonce="${nonce}">
                window.vscodeConfig = {
                    meiliUrl: '${CONFIG.MEILI_SEARCH_URL}',
                    meiliKey: '${CONFIG.MEILI_SEARCH_API_KEY}'
                };
            </script>
            <script nonce="${nonce}" src="${scriptUri}"></script>
        </body>
        </html>`;
}
