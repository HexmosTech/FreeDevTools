import * as vscode from 'vscode';
import { getWebviewContent } from './views/webview';
import { CONFIG } from './config';

let currentPanel: vscode.WebviewPanel | undefined;
let currentQuery = '';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('freedevtools.search', async () => {
        // Show Input Box for Search
        const inputBox = vscode.window.createInputBox();
        inputBox.placeholder = 'Search 350k+ resources...';
        inputBox.title = 'Free Devtools Search';
        inputBox.value = currentQuery; // Restore previous query if any

        inputBox.onDidChangeValue(value => {
            currentQuery = value;
        });

        inputBox.onDidAccept(() => {
            const query = inputBox.value;
            ensurePanel(context);

            // Construct URL
            const theme = getTheme();
            let baseUrl = CONFIG.APP_URL;

            // Append theme as query param (before hash)
            // If BASE_PATH doesn't end with /, we assume it's a path.
            // Check if baseUrl already has query params? Unlikely for base path but good practice.
            if (baseUrl.includes('?')) {
                baseUrl += `&theme=${theme}&vscode=true`;
            } else {
                baseUrl += `?theme=${theme}&vscode=true`;
            }

            let url = baseUrl;
            if (query) {
                // Ensure query is encoded
                const encodedQuery = encodeURIComponent(query);
                url = `${baseUrl}#search?q=${encodedQuery}`;
            }

            if (currentPanel) {
                currentPanel.webview.html = getWebviewContent(url);
                currentPanel.reveal();
            }

            inputBox.hide();
        });

        inputBox.onDidHide(() => {
            inputBox.dispose();
        });

        inputBox.show();
    });

    // Listener for theme changes
    vscode.window.onDidChangeActiveColorTheme(theme => {
        if (currentPanel) {
            const themeName = (theme.kind === vscode.ColorThemeKind.Light) ? 'light' : 'dark';
            currentPanel.webview.postMessage({ command: 'setTheme', theme: themeName });
        }
    });

    // Status Bar Item
    const statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
    statusBarItem.command = 'freedevtools.search';
    statusBarItem.text = '$(search) Free DevTools';
    statusBarItem.tooltip = 'Search Free DevTools';
    statusBarItem.show();
    context.subscriptions.push(statusBarItem);

    context.subscriptions.push(disposable);
}

function getTheme(): string {
    const kind = vscode.window.activeColorTheme.kind;
    if (kind === vscode.ColorThemeKind.Light) {
        return 'light';
    }
    return 'dark';
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
        'Free Devtools Search',
        column || vscode.ViewColumn.One,
        {
            enableScripts: true,
            retainContextWhenHidden: true,
            localResourceRoots: []
        }
    );

    currentPanel.webview.onDidReceiveMessage(
        async message => {
            if (message.command === 'download') {
                const workspaceFolders = vscode.workspace.workspaceFolders;
                const defaultUri = workspaceFolders && workspaceFolders[0] ? workspaceFolders[0].uri : undefined;

                let data: Uint8Array;
                if (message.isBase64) {
                    const base64Data = message.content.replace(/^data:image\/\w+;base64,/, "");
                    data = Buffer.from(base64Data, 'base64');
                } else {
                    data = Buffer.from(message.content, 'utf8');
                }

                // Prompt user to select location
                const fileExtension = message.fileName.split('.').pop() || '*';
                const uri = await vscode.window.showSaveDialog({
                    defaultUri: defaultUri ? vscode.Uri.joinPath(defaultUri, message.fileName) : undefined,
                    saveLabel: 'Save Icon',
                    filters: {
                        'Files': [fileExtension]
                    }
                });

                if (uri) {
                    try {
                        await vscode.workspace.fs.writeFile(uri, data);
                        vscode.window.showInformationMessage(`Saved ${message.fileName}`);
                    } catch (err: any) {
                        vscode.window.showErrorMessage(`Failed to save file: ${err.message || err}`);
                    }
                }
            }
        },
        undefined,
        context.subscriptions
    );

    currentPanel.onDidDispose(
        () => {
            currentPanel = undefined;
        },
        null,
        context.subscriptions
    );
}

export function deactivate() { }
