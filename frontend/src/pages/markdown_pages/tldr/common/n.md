---
title: "Node Version Manager - Control Node Versions | Free DevTools"
name: n
path: /freedevtools/tldr/common/n
canonical: "https://hexmos.com/freedevtools/tldr/common/n/"
description: "Manage Node versions instantly with Node Version Manager. Install, remove, and switch between different Node.js versions easily. Free online tool, no registration required."
category: common
keywords:
- node version manager
- nvm node
- node version control
- node version installer
- node version switcher
- node js version management
- command line node version
- linux node version
- macos node version
- npm node version
features:
- Install specific Node.js versions
- Interactively activate installed Node.js versions
- Remove specific Node.js versions
- Execute files using specific Node.js versions
- Output binary paths for specific Node.js versions
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# n

> Manage multiple node versions.
> More information: <https://github.com/tj/n>.

- Install a given version of node. If the version is already installed, it will be activated:

`n {{version}}`

- Display installed versions and interactively activate one of them:

`n`

- Remove a version:

`n rm {{version}}`

- Execute a file with a given version:

`n use {{version}} {{file.js}}`

- Output binary path for a version:

`n bin {{version}}`
