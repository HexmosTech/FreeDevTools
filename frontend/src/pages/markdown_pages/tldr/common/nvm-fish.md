---
title: "NVM - Manage Node.js Versions | Online Free DevTools by Hexmos"
name: nvm.fish
path: /freedevtools/tldr/common/nvm-fish
canonical: "https://hexmos-com/freedevtools/tldr/common/nvm-fish/"
description: "Manage Node.js versions easily with NVM. Switch between versions, install, and uninstall Node.js. Free online tool, no registration required."
category: common
keywords:
- node version manager
- nvm fish
- node.js version control
- fish shell nvm
- javascript runtime manager
- install node versions
- uninstall node versions
- set default node version
- nvm linux
- nvm macos
features:
- Install specific Node.js versions
- Switch between Node.js versions in the current shell
- Set a default Node.js version
- List available Node.js versions
- Uninstall specific Node.js versions
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# nvm

> Install, uninstall, or switch between Node.js versions under the fish shell.
> Supports version numbers like "12.8" or "v16.13.1", and labels like "stable", "system", etc.
> More information: <https://github.com/jorgebucaran/nvm.fish>.

- Install a specific version of Node.js:

`nvm install {{node_version}}`

- Use a specific version of Node.js in the current shell:

`nvm use {{node_version}}`

- Set the default Node.js version:

`set nvm_default_version {{node_version}}`

- List all available Node.js versions and highlight the default one:

`nvm list`

- Uninstall a given Node.js version:

`nvm uninstall {{node_version}}`
