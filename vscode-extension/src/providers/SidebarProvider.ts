import * as vscode from 'vscode';
import { getSidebarHtml } from '../templates/sidebarTemplate';
import { getNonce } from '../utils/nonce';

// Inject environment variables
declare const process: {
    env: {
        NODE_ENV: string;
        API_BASE_URL: string;
    };
};

export class SidebarProvider implements vscode.WebviewViewProvider {
    public static readonly viewType = 'freedevtools.sidebar';
    private _view?: vscode.WebviewView;

    constructor(
        private readonly _extensionUri: vscode.Uri,
        private readonly _context: vscode.ExtensionContext,
    ) { }

    public resolveWebviewView(
        webviewView: vscode.WebviewView,
        context: vscode.WebviewViewResolveContext,
        _token: vscode.CancellationToken,
    ) {
        this._view = webviewView;

        webviewView.webview.options = {
            enableScripts: true,
            localResourceRoots: [
                this._extensionUri,
                vscode.Uri.joinPath(this._extensionUri, 'media')
            ]
        };

        // Initially show the Search Widget
        this.showSearchWidget();

        // Reset to search widget when sidebar becomes visible
        webviewView.onDidChangeVisibility(() => {
            if (webviewView.visible) {
                this.showSearchWidget();
            }
        });

        webviewView.webview.onDidReceiveMessage(async (data) => {
            switch (data.command) {
                case 'open-tool':
                    if (data.path) {
                        vscode.commands.executeCommand('freedevtools.openTool', data.path.replace('/freedevtools/', ''));
                    }
                    else if (data.url) {
                        if (data.url.startsWith('http')) {
                            vscode.env.openExternal(vscode.Uri.parse(data.url));
                        } else {
                            vscode.commands.executeCommand('freedevtools.openTool', data.url.replace('/freedevtools/', ''));
                        }
                    }
                    break;

                case 'login':
                    vscode.commands.executeCommand('freedevtools.login');
                    break;
            }
        });
    }

    private showSearchWidget() {
        if (!this._view) { return; }
        const nonce = getNonce();
        this._view.webview.html = getSidebarHtml(this._view.webview, this._extensionUri, nonce);
    }
}
