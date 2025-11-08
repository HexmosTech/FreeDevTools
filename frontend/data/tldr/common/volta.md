---
title: "Volta - Manage Node.js Versions | Online Free DevTools by Hexmos"
name: volta
path: "/freedevtools/tldr/common/volta/"
canonical: "https://hexmos.com/freedevtools/tldr/common/volta/"
description: "Manage Node.js versions with Volta, your JavaScript tool manager. Install specific versions, pin to projects, and control dependencies. Free online tool, no registration required."
category: common
keywords:
- javascript tool manager
- node version manager
- volta node
- volta npm
- volta yarn
- node.js runtime manager
- npm package manager
- yarn package manager
- javascript dependency manager
- node version pinning
features:
- Install specific Node.js versions
- Pin Node.js versions to projects
- Manage npm package versions
- Manage Yarn package versions
- List installed JavaScript tools
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# volta

> A JavaScript Tool Manager that installs Node.js runtimes, npm and Yarn package managers, or any binaries from npm.
> More information: <https://volta.sh>.

- List all installed tools:

`volta list`

- Install the latest version of a tool:

`volta install {{node|npm|yarn|package_name}}`

- Install a specific version of a tool:

`volta install {{node|npm|yarn}}@version`

- Choose a tool version for a project (will store it in `package.json`):

`volta pin {{node|npm|yarn}}@version`

- Display help:

`volta help`

- Display help for a subcommand:

`volta help {{fetch|install|uninstall|pin|list|completions|which|setup|run|help}}`
