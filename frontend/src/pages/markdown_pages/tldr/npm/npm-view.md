---
title: "NPM View - Inspect Package Information | Online Free DevTools by Hexmos"
name: npm-view
path: /freedevtools/tldr/npm/npm-view
canonical: "https://hexmos.com/freedevtools/tldr/npm/npm-view/"
description: "Inspect NPM package details instantly with NPM View. View versions, dependencies, maintainers, and repository URLs. Free online tool, no registration required."
category: common
keywords:
- npm package view
- npm package information
- npm registry lookup
- npm package versions
- npm dependencies check
- npm package maintainers
- npm repository url
- npm package description
- node package manager
- npm cli tool
features:
- View latest and specific versions of NPM packages
- Inspect package dependencies and their versions
- Retrieve package description and repository URL
- Display a list of package maintainers
- Lookup available package versions in the registry
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# npm view

> View registry information about a package.
> More information: <https://docs.npmjs.com/cli/npm-view>.

- View information about the latest version of a package:

`npm {{[v|view]}} {{package}}`

- View information about a specific version of a package:

`npm {{[v|view]}} {{package}}@{{version}}`

- View all available versions of a package:

`npm {{[v|view]}} {{package}} versions`

- View the description of a package:

`npm {{[v|view]}} {{package}} description`

- View the dependencies of the latest version of a package:

`npm {{[v|view]}} {{package}} dependencies`

- View the repository URL of a package:

`npm {{[v|view]}} {{package}} repository`

- View the maintainers of a package:

`npm {{[v|view]}} {{package}} maintainers`
