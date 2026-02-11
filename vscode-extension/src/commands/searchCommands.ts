import * as vscode from 'vscode';
import { ensurePanel } from '../services/PanelService';
import { getWebviewContent } from '../templates/webviewTemplate';

let currentQuery = '';

export function registerSearchCommands(context: vscode.ExtensionContext) {
    // Search Command
    context.subscriptions.push(vscode.commands.registerCommand('freedevtools.search', async () => {
        // This command name must match the view ID in package.json
        await vscode.commands.executeCommand('freedevtools.sidebar.focus');
    }));

    // Open Tool Command
    context.subscriptions.push(vscode.commands.registerCommand('freedevtools.openTool', (path: string) => {
        let baseUrl = (process.env.APP_URL || 'https://hexmos.com/') + 'freedevtools/';
        if (baseUrl.endsWith('/') && path.startsWith('/')) {
            baseUrl = baseUrl.slice(0, -1);
        } else if (!baseUrl.endsWith('/') && !path.startsWith('/')) {
            baseUrl += '/';
        }

        let fullUrl = baseUrl + path;

        const theme = getTheme();
        if (fullUrl.includes('?')) {
            fullUrl += `&theme=${theme}&vscode=true`;
        } else {
            fullUrl += `?theme=${theme}&vscode=true`;
        }

        const panel = ensurePanel(context);
        panel.webview.html = getWebviewContent(fullUrl, context.extensionUri, panel.webview);
        panel.reveal();
    }));
}

function openSearchWebview(context: vscode.ExtensionContext, query: string) {
    const theme = getTheme();
    // Use env var or default
    const appUrl = process.env.APP_URL || 'https://hexmos.com/';
    let baseUrl = appUrl + 'freedevtools/';

    if (baseUrl.includes('?')) {
        baseUrl += `&theme=${theme}&vscode=true`;
    } else {
        baseUrl += `?theme=${theme}&vscode=true`;
    }

    let url = baseUrl;
    if (query) {
        const encodedQuery = encodeURIComponent(query);
        url = `${baseUrl}#search?q=${encodedQuery}`;
    }

    const panel = ensurePanel(context);
    panel.webview.html = getWebviewContent(url, context.extensionUri, panel.webview);
    panel.reveal();
}

function getTheme(): string {
    const kind = vscode.window.activeColorTheme.kind;
    if (kind === vscode.ColorThemeKind.Light) {
        return 'light';
    }
    return 'dark';
}
