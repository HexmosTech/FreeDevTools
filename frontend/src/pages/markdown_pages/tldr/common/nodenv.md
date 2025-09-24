---
title: "Nodenv - Manage Node.js Versions | Online Free DevTools by Hexmos"
name: nodenv
path: /freedevtools/tldr/common/nodenv
canonical: "https://hexmos.com/freedevtools/tldr/common/nodenv/"
description: "Manage Node.js versions effectively with Nodenv. Install specific versions, control global and local versions effortlessly. Free online tool, no registration required."
category: common
keywords:
- node.js version manager
- nodenv version control
- node.js environment manager
- install node.js version
- nodenv global version
- nodenv local version
- javascript version management
- node.js development environment
- node version selection
- cross-platform node.js
features:
- Install specific Node.js versions
- Set global Node.js version
- Set local Node.js version for directories
- Display current Node.js version
- Locate installed Node.js commands
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# nodenv

> Manage Node.js versions.
> More information: <https://github.com/nodenv/nodenv>.

- Install a specific version of Node.js:

`nodenv install {{version}}`

- Display a list of available versions:

`nodenv install --list`

- Use a specific version of Node.js across the whole system:

`nodenv global {{version}}`

- Use a specific version of Node.js with a directory:

`nodenv local {{version}}`

- Display the Node.js version for the current directory:

`nodenv version`

- Display the location of a Node.js installed command (e.g. `npm`):

`nodenv which {{command}}`
