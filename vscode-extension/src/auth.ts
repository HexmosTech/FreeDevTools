import * as vscode from 'vscode';
import * as http from 'http';
import * as url from 'url';

let lastAuthServer: http.Server | null = null;
let lastAuthServerResolver: ((value?: void | PromiseLike<void>) => void) | null = null;

const SECRET_KEY = 'fdt_jwt_token';
const USER_DATA_KEY = 'fdt_user_info';

export async function authenticate(context: vscode.ExtensionContext): Promise<{ jwt: string, user: any } | null> {
    if (lastAuthServer) {
        try { lastAuthServer.close(); } catch { }
        lastAuthServer = null;
    }
    if (lastAuthServerResolver) {
        lastAuthServerResolver();
        lastAuthServerResolver = null;
        vscode.window.showInformationMessage('Previous login attempt reset.');
    }

    const server = http.createServer();
    lastAuthServer = server;
    await new Promise<void>(resolve => server.listen(0, resolve));

    const address = server.address();
    const port = (typeof address === 'object' && address) ? address.port : 2341;
    const redirectUri = `http://localhost:${port}/signin`;
    const loginUrl = `https://hexmos.com/signin?app=freedevtools&appRedirectURI=${encodeURIComponent(redirectUri)}`;

    let resultUserJwt: string | null = null;
    let resultUserData: any | null = null;

    try {
        await vscode.env.openExternal(vscode.Uri.parse(loginUrl));
        vscode.window.showInformationMessage('Please complete login in your browser.');
    } catch (e) {
        vscode.window.showErrorMessage(`Could not open browser. Please open manually: ${loginUrl}`);
    }

    await new Promise<void>(resolve => {
        lastAuthServerResolver = resolve;
        let serverClosed = false;

        const safeCloseServer = () => {
            if (!serverClosed) {
                server.close();
                if (lastAuthServer === server) lastAuthServer = null;
                serverClosed = true;
            }
        };

        const timeout = setTimeout(() => {
            safeCloseServer();
            vscode.window.showWarningMessage('Login timed out.');
            resolve();
        }, 120000);

        server.on('request', async (req, res) => {
            const reqUrl = url.parse(req.url || '', true);
            if (reqUrl.pathname === '/signin' && reqUrl.query.data) {
                const data = decodeURIComponent(reqUrl.query.data as string);
                try {
                    const parsed = JSON.parse(data);
                    const jwt = parsed.result?.jwt;
                    const userData = parsed.result?.data;
                    if (jwt) {
                        resultUserJwt = jwt;
                        resultUserData = userData || {};
                        await context.secrets.store(SECRET_KEY, resultUserJwt as string);
                        await context.secrets.store(USER_DATA_KEY, JSON.stringify(resultUserData));
                        vscode.window.showInformationMessage('Authentication successful!');
                    } else {
                        vscode.window.showErrorMessage('Invalid authentication response.');
                    }
                } catch (e) {
                    vscode.window.showErrorMessage('Failed to parse auth data.');
                }
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end('<h2>Authentication complete. You may close this window.</h2><script>window.close()</script>');
                safeCloseServer();
                clearTimeout(timeout);
                if (lastAuthServerResolver === resolve) lastAuthServerResolver = null;
                resolve();
            } else {
                if (reqUrl.pathname !== '/favicon.ico') {
                    res.writeHead(404);
                    res.end();
                }
            }
        });
    });

    if (lastAuthServerResolver) lastAuthServerResolver = null;
    return resultUserJwt ? { jwt: resultUserJwt as string, user: resultUserData } : null;
}

export async function logout(context: vscode.ExtensionContext): Promise<boolean> {
    await context.secrets.delete(SECRET_KEY);
    await context.secrets.delete(USER_DATA_KEY);
    vscode.window.showInformationMessage('Logged out successfully.');
    return true;
}

export async function getJwt(context: vscode.ExtensionContext): Promise<string | undefined> {
    return await context.secrets.get(SECRET_KEY);
}

export async function getUserData(context: vscode.ExtensionContext): Promise<any | undefined> {
    const data = await context.secrets.get(USER_DATA_KEY);
    return data ? JSON.parse(data) : undefined;
}
