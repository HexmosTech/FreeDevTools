import * as vscode from 'vscode';
import { FdtAuthenticationProvider } from './providers/AuthenticationProvider';
import { SidebarProvider } from './providers/SidebarProvider';
import { registerCommands } from './commands/index';
import { getPanel } from './services/PanelService';

export function activate(context: vscode.ExtensionContext) {
    // 1. Register Auth Provider
    const authProvider = new FdtAuthenticationProvider(context);
    context.subscriptions.push(vscode.authentication.registerAuthenticationProvider(
        FdtAuthenticationProvider.id,
        FdtAuthenticationProvider.label,
        authProvider,
        { supportsMultipleAccounts: false }
    ));

    // 2. Register Sidebar Provider
    const sidebarProvider = new SidebarProvider(context.extensionUri, context);
    context.subscriptions.push(vscode.window.registerWebviewViewProvider(
        SidebarProvider.viewType,
        sidebarProvider
    ));

    // 3. Register Commands
    registerCommands(context, authProvider);

    // 4. Global Theme Listener (handled here because it's global context)
    vscode.window.onDidChangeActiveColorTheme(theme => {
        const panel = getPanel();
        if (panel) {
            const themeName = (theme.kind === vscode.ColorThemeKind.Light) ? 'light' : 'dark';
            panel.webview.postMessage({ command: 'setTheme', theme: themeName });
        }
    });
}

export function deactivate() { }
