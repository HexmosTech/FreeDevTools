---
title: "NPM Cache - Manage Package Cache | Online Free DevTools by Hexmos"
name: npm-cache
path: "/freedevtools/tldr/npm/npm-cache/"
canonical: "https://hexmos.com/freedevtools/tldr/npm/npm-cache/"
description: "Manage NPM package cache with NPM Cache. Clear cache, add/remove packages, and verify integrity with ease. Free online tool, no registration required."
category: common
keywords:
- npm cache manager
- node package cache
- npm cache cleaner
- npm registry cache
- npm cache verify
- npm cache add package
- npm cache remove package
- npm cache path
- node.js cache control
- javascript package cache
features:
- Add specific packages to the NPM cache.
- Remove specific packages from the NPM cache.
- Clear the entire NPM cache forcefully.
- List contents of the current NPM cache.
- Verify the integrity of the NPM cache.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# npm cache

> Manage the npm package cache.
> More information: <https://docs.npmjs.com/cli/npm-cache>.

- Add a specific package to the cache:

`npm cache add {{package_name}}`

- Remove a specific package from the cache:

`npm cache remove {{package_name}}`

- Clear a specific cached item by key:

`npm cache clean {{key}}`

- Clear the entire npm cache:

`npm cache clean --force`

- List the contents of the npm cache:

`npm cache ls`

- Verify the integrity of the npm cache:

`npm cache verify`

- Show the cache path:

`npm {{[c|config]}} get cache`

- Change the cache path:

`npm {{[c|config]}} set cache {{path/to/directory}}`
