---
title: "NPM Install - Manage Node Packages | Free DevTools"
name: npm-install
path: /freedevtools/tldr/npm/npm-install
canonical: "https://hexmos.com/freedevtools/tldr/npm/npm-install/"
description: "Install Node packages efficiently with NPM Install. Manage project dependencies, download specific versions, and update global packages. Free online tool, no registration required."
category: common
keywords:
- npm install
- node package manager
- npm dependencies
- install npm package
- npm install global
- package.json dependencies
- node modules
- javascript packages
- npm dev dependencies
- node package install
features:
- Install dependencies from package.json
- Download specific package versions
- Add packages to dev dependencies
- Install packages globally
- Update existing node packages
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# npm install

> Install Node packages.
> More information: <https://docs.npmjs.com/cli/npm-install>.

- Install dependencies listed in `package.json`:

`npm {{[i|install]}}`

- Download a specific version of a package and add it to the list of dependencies in `package.json`:

`npm {{[i|install]}} {{package_name}}@{{version}}`

- Download the latest version of a package and add it to the list of dev dependencies in `package.json`:

`npm {{[i|install]}} {{[-D|--save-dev]}} {{package_name}}`

- Download the latest version of a package and install it globally:

`npm {{[i|install]}} {{[-g|--global]}} {{package_name}}`
