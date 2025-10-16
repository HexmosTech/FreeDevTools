---
title: "Remove Node.js Version - Uninstall Node Runtimes | Online Free DevTools by Hexmos"
name: remove-nodeversion
path: "/freedevtools/tldr/common/remove-nodeversion/"
canonical: "https://hexmos.com/freedevtools/tldr/common/remove-nodeversion/"
description: "Uninstall Node.js versions efficiently with Remove-NodeVersion. Manage Node.js runtimes easily, and ensure compatibility with your projects. Free online tool, no registration required."
category: common
keywords:
- Node.js version removal
- PowerShell Node.js uninstaller
- Node.js runtime manager
- ps-nvm Node.js uninstall
- Node.js environment cleaner
- Node.js version cleaner
- Windows Node.js management
- Cross-platform Node.js removal
- Node.js uninstall command
- Remove Node.js runtime
features:
- Uninstall specific Node.js versions
- Uninstall multiple Node.js versions simultaneously
- Uninstall Node.js versions based on filters
- Remove all installed Node.js versions
- Integrate seamlessly with `ps-nvm` for Node.js management
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# Remove-NodeVersion

> Uninstall Node.js runtime versions for `ps-nvm`.
> This command is part of `ps-nvm` and can only be run under PowerShell.
> More information: <https://github.com/aaronpowell/ps-nvm>.

- Uninstall a given Node.js version:

`Remove-NodeVersion {{node_version}}`

- Uninstall multiple Node.js versions:

`Remove-NodeVersion {{node_version1 , node_version2 , ...}}`

- Uninstall all currently-installed versions of Node.js 20.x:

`Get-NodeVersions -Filter ">=20.0.0 <21.0.0" | Remove-NodeVersion`

- Uninstall all currently-installed versions of Node.js:

`Get-NodeVersions | Remove-NodeVersion`
