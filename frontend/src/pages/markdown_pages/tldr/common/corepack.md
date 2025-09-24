---
title: "Corepack - Manage Package Managers | Online Free DevTools by Hexmos"
name: corepack
path: /freedevtools/tldr/common/corepack
canonical: "https://hexmos.com/freedevtools/tldr/common/corepack/"
description: "Manage Node.js package managers with Corepack. Enable, disable, and prepare npm, pnpm, and yarn effortlessly. Free online tool, no registration required."
category: common
keywords:
- node package manager
- corepack manager
- npm management
- pnpm management
- yarn management
- javascript package
- nodejs package
- package version control
- package dependency manager
- global package management
features:
- Enable corepack shims globally
- Prepare specific package manager versions
- Disable corepack shims
- Use package managers without global installation
- Hydrate package managers from archives
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# corepack

> Zero-runtime-dependency package acting as bridge between Node projects and their package managers.
> More information: <https://github.com/nodejs/corepack>.

- Add the Corepack shims to the Node.js installation directory to make them available as global commands:

`corepack enable`

- Add the Corepack shims to a specific directory:

`corepack enable --install-directory {{path/to/directory}}`

- Remove the Corepack shims from the Node.js installation directory:

`corepack disable`

- Prepare a specific package manager:

`corepack prepare {{package_manager}}@{{version}} --activate`

- Prepare the package manager configured for the project in the current path:

`corepack prepare`

- Use a package manager without installing it as a global command:

`corepack {{npm|pnpm|yarn}} {{package_manager_arguments}}`

- Install a package manager from the specified archive:

`corepack hydrate {{path/to/corepack.tgz}}`

- Display help for a subcommand:

`corepack {{subcommand}} --help`
