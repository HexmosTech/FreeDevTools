import * as vscode from 'vscode';
import { registerSearchCommands } from './searchCommands';
import { registerAuthCommands } from './authCommands';
import { FdtAuthenticationProvider } from '../providers/AuthenticationProvider';

export function registerCommands(context: vscode.ExtensionContext, authProvider: FdtAuthenticationProvider) {
    registerAuthCommands(context, authProvider);
    registerSearchCommands(context);
}
