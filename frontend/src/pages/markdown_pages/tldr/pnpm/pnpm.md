---
title: "PNPM Manager - Control Node Packages | Free DevTools"
name: pnpm
path: /freedevtools/tldr/pnpm/pnpm
canonical: "https://hexmos.com/freedevtools/tldr/pnpm/pnpm/"
description: "Control Node.js packages with PNPM Manager. Install, uninstall, and manage dependencies efficiently. Improve project speed and disk space. Free online tool, no registration required."
category: common
keywords:
- node package manager
- pnpm package manager
- node.js dependency manager
- javascript package manager
- fast node package install
- disk space efficient pnpm
- pnpm install command
- pnpm add package
- pnpm remove package
- pnpm global install
features:
- Manage Node.js project dependencies
- Install specific versions of packages
- Add packages as development dependencies
- Uninstall packages from projects
- List installed modules in a tree structure
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pnpm

> Fast, disk space efficient package manager for Node.js.
> Manage Node.js projects and their module dependencies.
> More information: <https://pnpm.io/pnpm-cli>.

- Create a `package.json` file:

`pnpm init`

- Download all the packages listed as dependencies in `package.json`:

`pnpm install`

- Download a specific version of a package and add it to the list of dependencies in `package.json`:

`pnpm add {{module_name}}@{{version}}`

- Download a package and add it to the list of dev dependencies in `package.json`:

`pnpm add {{[-D|--save-dev]}} {{module_name}}`

- Download a package and install it globally:

`pnpm add {{[-g|--global]}} {{module_name}}`

- Uninstall a package and remove it from the list of dependencies in `package.json`:

`pnpm remove {{module_name}}`

- Print a tree of locally installed modules:

`pnpm list`

- List top-level globally installed modules:

`pnpm list {{[-g|--global]}} --depth {{0}}`
