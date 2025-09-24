---
title: "Control Node.js Versions - NVM Command | Online Free DevTools by Hexmos"
name: nvm
path: /freedevtools/tldr/common/nvm
canonical: "https://hexmos.com/freedevtools/tldr/common/nvm/"
description: "Control Node.js versions with NVM. Install, switch, and manage multiple Node.js environments effortlessly. Free online tool, no registration required."
category: common
keywords:
- node version manager
- nvm install node
- nvm use node
- node version control
- javascript version manager
- node environment manager
- nvm alias default
- nvm list node versions
- linux nvm
- macos nvm
features:
- Install specific Node.js versions
- Switch between different Node.js versions
- Set a default Node.js version for new shells
- List available Node.js versions
- Uninstall unused Node.js versions
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# nvm

> Install, uninstall or switch between Node.js versions.
> Supports version numbers like "12.8" or "v16.13.1", and labels like "stable", "system", etc.
> See also: `asdf`.
> More information: <https://github.com/creationix/nvm>.

- Install a specific version of Node.js:

`nvm install {{node_version}}`

- Use a specific version of Node.js in the current shell:

`nvm use {{node_version}}`

- Set the default Node.js version:

`nvm alias default {{node_version}}`

- List all available Node.js versions and highlight the default one:

`nvm list`

- Uninstall a given Node.js version:

`nvm uninstall {{node_version}}`

- Launch the REPL of a specific version of Node.js:

`nvm run {{node_version}} --version`

- Execute a script in a specific version of Node.js:

`nvm exec {{node_version}} node {{app.js}}`
