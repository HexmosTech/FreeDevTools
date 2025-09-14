---
title: "NPM Search - Find Packages in the Registry | Free DevTools"
name: npm-search
path: /freedevtools/tldr/npm/npm-search
canonical: "https://hexmos.com/freedevtools/tldr/npm/npm-search/"
description: "Find NPM packages easily with NPM Search. Discover, explore, and install Node.js modules from the registry. Free online tool, no registration required."
category: common
keywords:
- npm package search
- node package manager search
- javascript package registry
- npm module lookup
- npm command line search
- npm package directory
- npm find packages
- node js libraries
- npm package explorer
- npm registry search
features:
- Search for npm packages by name or keyword
- View detailed package information (description, author, version)
- Search packages by author
- Search packages within a specific npm organization scope
- Combine multiple search terms for advanced filtering
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# npm search

> Search for packages in the `npm` registry.
> More information: <https://docs.npmjs.com/cli/npm-search>.

- Search for a package by name:

`npm {{[s|search]}} {{package}}`

- Search for packages by a specific keyword:

`npm {{[s|search]}} {{keyword}}`

- Search for packages, including detailed information (e.g., description, author, version):

`npm {{[s|search]}} {{package}} --long`

- Search for packages maintained by a specific author:

`npm {{[s|search]}} --author {{author}}`

- Search for packages with a specific organization:

`npm {{[s|search]}} --scope {{organization}}`

- Search for packages with a specific combination of terms:

`npm {{[s|search]}} {{term1 term2 ...}}`
