import * as vscode from 'vscode';
import { authenticate, logout, getUserData, getJwt } from './auth';

export class FdtAuthenticationProvider implements vscode.AuthenticationProvider {
    static id = 'freedevtools';
    static label = 'Free DevTools';

    private _onDidChangeSessions = new vscode.EventEmitter<vscode.AuthenticationProviderAuthenticationSessionsChangeEvent>();
    get onDidChangeSessions(): vscode.Event<vscode.AuthenticationProviderAuthenticationSessionsChangeEvent> {
        return this._onDidChangeSessions.event;
    }

    constructor(private context: vscode.ExtensionContext) { }

    async getSessions(scopes?: readonly string[]): Promise<vscode.AuthenticationSession[]> {
        const jwt = await getJwt(this.context);
        const userData = await getUserData(this.context);

        if (!jwt) {
            return [];
        }

        const accountId = userData?.objectId || 'fdt-user';
        const accountLabel = userData?.first_name && userData?.last_name
            ? `${userData.first_name} ${userData.last_name}`
            : (userData?.username || userData?.email || 'Free DevTools User');

        const session: vscode.AuthenticationSession = {
            id: 'fdt-session',
            accessToken: jwt,
            account: {
                id: accountId,
                label: accountLabel,
            },
            scopes: scopes || []
        };

        return [session];
    }

    async createSession(scopes: readonly string[]): Promise<vscode.AuthenticationSession> {
        // Trigger the login flow
        const authData = await authenticate(this.context);

        if (!authData || !authData.jwt) {
            throw new Error('Authentication failed');
        }

        // authenticate() already stores variables in secrets

        const userData = authData.user;
        const accountId = userData?.objectId || 'fdt-user';
        const accountLabel = userData?.first_name && userData?.last_name
            ? `${userData.first_name} ${userData.last_name}`
            : (userData?.username || userData?.email || 'Free DevTools User');

        const session: vscode.AuthenticationSession = {
            id: 'fdt-session',
            accessToken: authData.jwt,
            account: {
                id: accountId,
                label: accountLabel,
            },
            scopes: scopes || []
        };

        this._onDidChangeSessions.fire({ added: [session], removed: [], changed: [] });
        return session;
    }

    async removeSession(sessionId: string): Promise<void> {
        await logout(this.context);
        this._onDidChangeSessions.fire({ added: [], removed: [{ id: sessionId, accessToken: '', account: { id: '', label: '' }, scopes: [] }], changed: [] });
    }
}
