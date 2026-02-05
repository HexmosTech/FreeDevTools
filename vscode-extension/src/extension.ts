import * as vscode from 'vscode';
import { searchUtilities } from './api';
import { getWebviewContent, getIframeContent } from './views/webview';

let currentPanel: vscode.WebviewPanel | undefined;
let currentCategory = 'all';
let currentQuery = '';
let currentOffset = 0;

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('fdt.search', async () => {
        // Show Input Box for Live Search
        const inputBox = vscode.window.createInputBox();
        inputBox.placeholder = 'Search 350k+ resources...';
        inputBox.title = 'FDT Search';
        inputBox.value = currentQuery; // Restore previous query if any

        let timeout: NodeJS.Timeout | undefined;

        inputBox.onDidChangeValue(value => {
            currentQuery = value;
            if (timeout) clearTimeout(timeout);
            timeout = setTimeout(() => {
                if (!value) {
                    if (currentPanel) {
                        currentPanel.webview.postMessage({ command: 'clear' });
                    }
                    return;
                }

                ensurePanel(context);
                performSearch(value, currentCategory); // New search
            }, 300);
        });

        inputBox.onDidAccept(() => {
            // Optional action
        });

        inputBox.onDidHide(() => {
            inputBox.dispose();
        });

        inputBox.show();
    });

    // Status Bar Item
    const statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
    statusBarItem.command = 'fdt.search';
    statusBarItem.text = '$(search) freedevtools';
    statusBarItem.tooltip = 'Search Free Dev Tools';
    statusBarItem.show();
    context.subscriptions.push(statusBarItem);

    context.subscriptions.push(disposable);
}

function ensurePanel(context: vscode.ExtensionContext) {
    if (currentPanel) {
        currentPanel.reveal(undefined, true);
        return;
    }

    const column = vscode.window.activeTextEditor
        ? vscode.window.activeTextEditor.viewColumn
        : undefined;

    currentPanel = vscode.window.createWebviewPanel(
        'fdtSearchResults',
        'FDT Search',
        column || vscode.ViewColumn.One,
        {
            enableScripts: true,
            retainContextWhenHidden: true,
            localResourceRoots: []
        }
    );

    currentPanel.webview.html = getWebviewContent();

    // Handle messages from the webview
    currentPanel.webview.onDidReceiveMessage(
        async message => {
            switch (message.command) {
                case 'openPage':
                    if (currentPanel) {
                        currentPanel.webview.html = getIframeContent(message.url);
                    }
                    return;
                case 'setCategory':
                    currentCategory = message.category;
                    if (currentQuery) {
                        performSearch(currentQuery, currentCategory);
                    }
                    return;
                case 'back':
                    if (currentPanel) {
                        currentPanel.webview.html = getWebviewContent();
                    }
                    return;
                case 'ready':
                    // Webview is ready (e.g. after back button), restore results
                    if (currentQuery && currentPanel) {
                        // We restore the initial search (first page) for simplicity, or we could track all loaded results.
                        // For now, let's just reload the first page to ensure consistency.
                        performSearch(currentQuery, currentCategory);
                    }
                    return;
                case 'loadMore':
                    currentOffset += 100;
                    performSearch(currentQuery, currentCategory, true);
                    return;
                case 'search':
                    currentQuery = message.query;
                    // Reset offset for new search
                    currentOffset = 0;
                    performSearch(currentQuery, currentCategory);
                    return;
            }
        },
        undefined,
        context.subscriptions
    );

    currentPanel.onDidDispose(
        () => {
            currentPanel = undefined;
            // Reset state on close?
            currentCategory = 'all';
            currentQuery = '';
            currentOffset = 0; // Reset offset
        },
        null,
        context.subscriptions
    );
}

async function performSearch(query: string, category: string, isAppend: boolean = false) {
    if (!currentPanel) return;

    if (!isAppend) {
        currentOffset = 0;
        // Only show full loading on new search
        currentPanel.webview.postMessage({ command: 'loading', query: query });
    } else {
        // Show appended loading? Or handle in UI? 
        // For now, UI handles button state.
        // We don't send 'loading' command here as it clears screen.
    }

    try {
        const data = await searchUtilities(query, category, currentOffset);
        if (currentPanel) {
            currentPanel.webview.postMessage({
                command: 'results',
                results: data.hits,
                query: query,
                append: isAppend,
                total: data.total
            });

            // Sync category only on new search? Or always. Matches state.
            if (!isAppend) {
                currentPanel.webview.postMessage({ command: 'setCategory', category: category });
            }
        }
    } catch (e) {
        console.error(e);
    }
}

export function deactivate() { }
