import * as vscode from 'vscode';
import { getWebviewContent } from '../templates/webviewTemplate';
import { getJwt, getUserData } from './AuthService';

let currentPanel: vscode.WebviewPanel | undefined;

export function getPanel(): vscode.WebviewPanel | undefined {
    return currentPanel;
}

export function ensurePanel(context: vscode.ExtensionContext): vscode.WebviewPanel {
    if (currentPanel) {
        currentPanel.reveal(undefined, true);
        return currentPanel;
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
            localResourceRoots: [
                context.extensionUri,
                vscode.Uri.joinPath(context.extensionUri, 'media')
            ]
        }
    );

    // Initial Token & User Data Load check
    getJwt(context).then(async token => {
        if (token) {
            const userData = await getUserData(context);
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
                vscode.commands.executeCommand('freedevtools.login');
                return;
            }

            if (message.command === 'logout') {
                vscode.window.showInformationMessage('Logging out...');
                vscode.commands.executeCommand('freedevtools.logout');
                return;
            }

            if (message.command === 'open-external' && message.url) {
                vscode.env.openExternal(vscode.Uri.parse(message.url));
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

    return currentPanel;
}
