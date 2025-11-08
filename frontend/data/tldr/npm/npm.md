---
title: "NPM Package Manager - Manage Node.js Projects | Online Free DevTools by Hexmos"
name: npm
path: "/freedevtools/tldr/npm/npm/"
canonical: "https://hexmos.com/freedevtools/tldr/npm/npm/"
description: "Manage Node.js packages efficiently with NPM Package Manager. Simplify dependency management, install, uninstall and list packages. Free online tool, no registration required."
category: common
keywords:
- Node.js package manager
- NPM package management
- JavaScript dependency management
- Node module installer
- NPM install package
- NPM uninstall package
- Package.json manager
- Node.js dependencies
- NPM list packages
- Global NPM package installer
features:
- Initialize package.json files
- Install and manage Node.js dependencies
- Update specific package versions
- Install packages globally
- List installed NPM packages
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# npm

> JavaScript and Node.js package manager.
> Manage Node.js projects and their module dependencies.
> More information: <https://docs.npmjs.com/cli/npm>.

- Create a `package.json` file with default values (omit `--yes` to do it interactively):

`npm init {{[-y|--yes]}}`

- Download all the packages listed as dependencies in `package.json`:

`npm {{[i|install]}}`

- Download a specific version of a package and add it to the list of dependencies in `package.json`:

`npm {{[i|install]}} {{package_name}}@{{version}}`

- Download the latest version of a package and add it to the list of dev dependencies in `package.json`:

`npm {{[i|install]}} {{package_name}} {{[-D|--save-dev]}}`

- Download the latest version of a package and install it globally:

`npm {{[i|install]}} {{[-g|--global]}} {{package_name}}`

- Uninstall a package and remove it from the list of dependencies in `package.json`:

`npm {{[r|uninstall]}} {{package_name}}`

- List all locally installed dependencies:

`npm {{[ls|list]}}`

- List all top-level globally installed packages:

`npm {{[ls|list]}} {{[-g|--global]}} --depth {{0}}`
