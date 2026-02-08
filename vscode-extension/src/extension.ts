import * as vscode from 'vscode';
import { getWebviewContent } from './views/webview';
import { CONFIG } from './config';
import { authenticate, logout, getJwt, getUserData } from './auth';
import { FdtAuthenticationProvider } from './authProvider';

let currentPanel: vscode.WebviewPanel | undefined;
let currentQuery = '';

export function activate(context: vscode.ExtensionContext) {
    // 1. Register Auth Provider
    const authProvider = new FdtAuthenticationProvider(context);
    context.subscriptions.push(vscode.authentication.registerAuthenticationProvider(
        FdtAuthenticationProvider.id,
        FdtAuthenticationProvider.label,
        authProvider,
        { supportsMultipleAccounts: false }
    ));

    // 2. Register Login Command (Delegate to Provider or direct call?)
    // While Provider exists, we can use session creation, but for consistency with previous flow:
    context.subscriptions.push(vscode.commands.registerCommand('freedevtools.login', async () => {
        // Use the session API which triggers provider.createSession
        try {
            // This will call provider.createSession if no session exists
            // And provider.createSession calls authenticate()
            const session = await vscode.authentication.getSession(FdtAuthenticationProvider.id, [], { createIfNone: true });

            // Now explicitly get the full userdata to send to webview
            // (provider creates session and stores data)
            const userData = await getUserData(context);

            if (session && currentPanel) {
                currentPanel.webview.postMessage({ command: 'login-success', token: session.accessToken, user: userData });
            }
        } catch (e) {
            // Error handling
        }
    }));

    // 3. Register Logout Command
    context.subscriptions.push(vscode.commands.registerCommand('freedevtools.logout', async () => {
        // Get current session to pass only session ID? Or just clean up.
        // provider.removeSession cleans up secrets.
        // We need a session ID. Let's find any session.
        const sessions = await vscode.authentication.getSession(FdtAuthenticationProvider.id, []);
        if (sessions) {
            // Removing session triggers provider.removeSession
            // But vscode.authentication doesn't have a direct removeSession command exposed easily without managing sessions array?
            // Actually, provider implementation handles removeSession.
            // We can manually call provider.removeSession or rely on UI.
            // But for command consistency:
            await authProvider.removeSession(sessions.id);
        } else {
            await logout(context); // Fallback
        }

        if (currentPanel) {
            currentPanel.webview.postMessage({ command: 'logout' });
        }
    }));

    // 4. Listen for session changes (from Accounts menu)
    context.subscriptions.push(vscode.authentication.onDidChangeSessions(async e => {
        if (e.provider.id === FdtAuthenticationProvider.id) {
            const session = await vscode.authentication.getSession(FdtAuthenticationProvider.id, []);
            if (session) {
                const userData = await getUserData(context);
                if (currentPanel) {
                    currentPanel.webview.postMessage({ command: 'login-success', token: session.accessToken, user: userData });
                }
            } else {
                if (currentPanel) {
                    currentPanel.webview.postMessage({ command: 'logout' });
                }
            }
        }
    }));

    // 3. Search Command (Main Entry)
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

            // Append theme as query param
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

    // Initial Token & User Data Load check
    getJwt(context).then(async token => {
        if (token) {
            const userData = await getUserData(context);
            // Wait slightly for webview script to be ready
            setTimeout(() => {
                if (currentPanel) {
                    currentPanel.webview.postMessage({ command: 'login-success', token: token, user: userData });
                }
            }, 1000);
        }
    });

    currentPanel.webview.onDidReceiveMessage(
        async message => {
            if (message.command === 'login') {
                // If webview triggers login, execute the command
                vscode.commands.executeCommand('freedevtools.login');
                return;
            }

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
