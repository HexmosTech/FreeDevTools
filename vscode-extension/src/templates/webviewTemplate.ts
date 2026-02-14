import * as vscode from 'vscode';

export function getWebviewContent(url: string, extensionUri: vscode.Uri, webview: vscode.Webview): string {
    const styleUri = webview.asWebviewUri(vscode.Uri.joinPath(extensionUri, 'media', 'loader.css'));

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
        <link href="${styleUri}" rel="stylesheet">
    </head>
    <body>
        <div id="loader" class="loader-container">
            <div class="ripple"><div></div><div></div></div>
            <div class="loading-text">Loading...</div>
        </div>

        <iframe src="${url}" id="content-frame" allow="clipboard-read; clipboard-write" style="width: 100%; height: 100%; border: none;"></iframe>

        <script>
            const vscode = acquireVsCodeApi();
            const iframe = document.getElementById('content-frame');
            const loader = document.getElementById('loader');

            iframe.addEventListener('load', () => {
                iframe.contentWindow.postMessage({ command: 'init-vscode' }, '*');
                iframe.focus();
                
                loader.style.opacity = '0';
                setTimeout(() => {
                    loader.style.display = 'none';
                }, 300);
            });

            window.addEventListener('message', event => {
                const message = event.data;
                if (!message) return;

                if (message.command === 'download' || message.command === 'login' || message.command === 'logout' || message.command === 'open-external' || message.command === 'copy') {
                    vscode.postMessage(message);
                    return;
                }
                
                if (iframe) {
                     iframe.contentWindow.postMessage(message, '*');
                }
            });
        </script>
    </body>
    </html>`;
}

