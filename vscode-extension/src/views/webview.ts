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
        <iframe src="${url}" id="content-frame"></iframe>
        <script>
            const vscode = acquireVsCodeApi();
            const iframe = document.getElementById('content-frame');

            // Listen for messages from the extension
            window.addEventListener('message', event => {
                const message = event.data;
                if (iframe && message) {
                    // Forward message to iframe
                    iframe.contentWindow.postMessage(message, '*');
                }
            });
        </script>
    </body>
    </html>`;
}
