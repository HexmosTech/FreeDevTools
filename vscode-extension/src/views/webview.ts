import { CONFIG } from '../config';

export function getWebviewContent(url: string = CONFIG.APP_URL): string {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
        <style>
            body, html { margin: 0; padding: 0; height: 100%; overflow: hidden; background-color: var(--vscode-editor-background); }
            iframe { width: 100%; height: 100%; border: none; }
        </style>
    </head>
    <body>
        <iframe src="${url}" id="content-frame" onload="this.contentWindow.postMessage({ command: 'init-vscode' }, '*');"></iframe>
        <script>
            const vscode = acquireVsCodeApi();
            const iframe = document.getElementById('content-frame');

            // Listen for messages
            window.addEventListener('message', event => {
                const message = event.data;
                if (!message) return;

                // Message from Iframe (App) -> Forward to Extension Host
                if (message.command === 'download' || message.command === 'login') {
                    vscode.postMessage(message);
                    return;
                }

                // Message from Extension Host -> Forward to Iframe (App)
                if (iframe) {
                    iframe.contentWindow.postMessage(message, '*');
                }
            });
        </script>
    </body>
    </html>`;
}
