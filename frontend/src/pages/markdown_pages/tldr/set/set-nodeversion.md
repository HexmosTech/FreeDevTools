---
title: "Set Node Version - Manage Node.js Versions | Free DevTools"
name: set-nodeversion
path: /freedevtools/tldr/set/set-nodeversion
canonical: "https://hexmos.com/freedevtools/tldr/set/set-nodeversion/"
description: "Manage Node.js versions easily with Set-NodeVersion. Control your Node.js environment and streamline development workflow. Free online tool, no registration required."
category: common
keywords:
- node.js version manager
- powershell node version
- ps-nvm node version
- set node version powershell
- node version control
- node.js version setter
- windows node version
- linux node version
- macos node version
- node.js environment manager
features:
- Set Node.js version for current PowerShell session
- Persist Node.js version for user-specific sessions
- Set Node.js version for all users (machine-wide)
- Specify Node.js version using version ranges (e.g., ^20)
- Manage Node.js environment with ease
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# Set-NodeVersion

> Set the default Node.js version for `ps-nvm`.
> Part of `ps-nvm` and can only be run under PowerShell.
> More information: <https://github.com/aaronpowell/ps-nvm>.

- Use a specific version of Node.js in the current PowerShell session:

`Set-NodeVersion {{node_version}}`

- Use the latest installed Node.js version 20.x:

`Set-NodeVersion ^20`

- Set the default Node.js version for the current user (only applies to future PowerShell sessions):

`Set-NodeVersion {{node_version}} -Persist User`

- Set the default Node.js version for all users (must be run as Administrator/root and only applies to future PowerShell sessions):

`Set-NodeVersion {{node_version}} -Persist Machine`
