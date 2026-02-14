import * as vscode from 'vscode';
import { FdtAuthenticationProvider } from '../providers/AuthenticationProvider';
import { getUserData } from '../services/AuthService';
import { getPanel } from '../services/PanelService';

export function registerAuthCommands(context: vscode.ExtensionContext, authProvider: FdtAuthenticationProvider) {

    // Register Login Command
    context.subscriptions.push(vscode.commands.registerCommand('freedevtools.login', async () => {
        try {
            const session = await vscode.authentication.getSession(FdtAuthenticationProvider.id, [], { createIfNone: true });
            const userData = await getUserData(context);
            const panel = getPanel();

            if (session && panel) {
                panel.webview.postMessage({ command: 'login-success', token: session.accessToken, user: userData });
            }
        } catch (e) {
            console.error(e);
        }
    }));

    // Register Logout Command
    context.subscriptions.push(vscode.commands.registerCommand('freedevtools.logout', async () => {
        await authProvider.forceLogout();
        const panel = getPanel();
        if (panel) {
            panel.webview.postMessage({ command: 'logout' });
        }
    }));

    // Session Change Listener
    context.subscriptions.push(vscode.authentication.onDidChangeSessions(async e => {
        if (e.provider.id === FdtAuthenticationProvider.id) {
            const session = await vscode.authentication.getSession(FdtAuthenticationProvider.id, []);
            const panel = getPanel();
            if (session) {
                const userData = await getUserData(context);
                if (panel) {
                    panel.webview.postMessage({ command: 'login-success', token: session.accessToken, user: userData });
                }
            } else {
                if (panel) {
                    panel.webview.postMessage({ command: 'logout' });
                }
            }
        }
    }));
}
