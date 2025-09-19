---
title: "Node Version Manager - List Node.js Versions | Online Free DevTools by Hexmos"
name: get-nodeversions
path: /freedevtools/tldr/get/get-nodeversions
canonical: "https://hexmos.com/freedevtools/tldr/get/get-nodeversions/"
description: "List Node.js versions with ps-nvm, a PowerShell Node Version Manager. Manage your Node.js environments easily. Free online tool, no registration required."
category: common
keywords:
- node versions list
- node version manager powershell
- ps-nvm node versions
- powershell get node versions
- node js version checker
- nvm for windows
- available node versions
- installed node versions
- list remote node versions
- node version filtering
features:
- List all installed Node.js versions
- List all available remote Node.js versions
- Filter Node.js versions by a semver range
- Integrates with PowerShell for Node.js management
- Display Node.js version information for ps-nvm
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# Get-NodeVersions

> List installed and available Node.js versions for `ps-nvm`.
> Part of `ps-nvm` and can only be run under PowerShell.
> More information: <https://github.com/aaronpowell/ps-nvm>.

- List all installed Node.js versions:

`Get-NodeVersions`

- List all available Node.js versions:

`Get-NodeVersions -Remote`

- List all available Node.js 20.x versions:

`Get-NodeVersions -Remote -Filter ">=20.0.0 <21.0.0"`
