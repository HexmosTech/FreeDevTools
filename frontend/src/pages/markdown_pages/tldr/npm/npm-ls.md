---
title: "List NPM Packages - View Installed Packages | Online Free DevTools by Hexmos"
name: npm-ls
path: /freedevtools/tldr/npm/npm-ls
canonical: "https://hexmos.com/freedevtools/tldr/npm/npm-ls/"
description: "List NPM packages instantly with NPM LS. View dependencies, versions, and global installations using the command line. Free online tool, no registration required."
category: common
keywords:
- npm package list
- npm ls command
- node module dependencies
- npm global packages
- list node modules
- view npm dependencies
- npm package manager
- npm list all
- npm list parseable
- npm list json
features:
- List all installed NPM packages in a project.
- Display global NPM package installations.
- Print dependencies in parseable format.
- Output NPM dependencies in JSON format.
- Show versions and extended information for packages.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# npm ls

> Print installed packages to `stdout`.
> More information: <https://docs.npmjs.com/cli/npm-ls>.

- Print all versions of direct dependencies in the current project to `stdout`:

`npm {{[ls|list]}}`

- Print all installed packages including peer dependencies:

`npm {{[ls|list]}} {{[-a|--all]}}`

- Print all globally installed packages:

`npm {{[ls|list]}} {{[-g|--global]}}`

- Print dependencies with extended information:

`npm {{[ls|list]}} {{[-l|--long]}}`

- Print dependencies in parseable format:

`npm {{[ls|list]}} {{[-p|--parseable]}}`

- Print dependencies in JSON format:

`npm {{[ls|list]}} --json`
