---
title: "Install Node Version - Manage Node.js Versions | Free DevTools"
name: install-nodeversion
path: /freedevtools/tldr/install/install-nodeversion
canonical: "https://hexmos.com/freedevtools/tldr/install/install-nodeversion/"
description: "Manage Node.js versions effortlessly with Install-NodeVersion. Install specific versions, latest versions, and architectures. Free online tool, no registration required."
category: common
keywords:
- Node.js version installer
- PowerShell Node.js manager
- Windows Node version control
- Cross-platform Node install
- Node.js architecture setup
- NVM for PowerShell
- Node.js update command
- Latest Node version installer
- x64 Node.js install
- ARM64 Node.js install
features:
- Install specific Node.js versions on Windows
- Install the latest Node.js version from a specific series (e.g., ^20)
- Install Node.js with a specified architecture (x86, x64, arm64)
- Download Node.js through a specified HTTP proxy
- Easily manage Node.js versions within PowerShell environment
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# Install-NodeVersion

> Install Node.js runtime versions for `ps-nvm`.
> This command is part of `ps-nvm` and can only be run under PowerShell.
> More information: <https://github.com/aaronpowell/ps-nvm>.

- Install a specific Node.js version:

`Install-NodeVersion {{node_version}}`

- Install multiple Node.js versions:

`Install-NodeVersion {{node_version1 , node_version2 , ...}}`

- Install latest available version of Node.js 20:

`Install-NodeVersion ^20`

- Install the x86 (x86 32-bit) / x64 (x86 64-bit) / arm64 (ARM 64-bit) version of Node.js:

`Install-NodeVersion {{node_version}} -Architecture {{x86|x64|arm64}}`

- Use a HTTP proxy to download Node.js:

`Install-NodeVersion {{node-version}} -Proxy {{http://example.com}}`
