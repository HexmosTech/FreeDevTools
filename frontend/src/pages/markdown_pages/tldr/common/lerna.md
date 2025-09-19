---
title: "Manage JavaScript Projects - Lerna | Online Free DevTools by Hexmos"
name: lerna
path: /freedevtools/tldr/common/lerna
canonical: "https://hexmos.com/freedevtools/tldr/common/lerna/"
description: "Manage JavaScript projects with Lerna, easily handling multi-package repositories and dependencies. Automate versioning, publishing, and boosting development workflows. Free online tool, no registration required."
category: common
keywords:
- javascript monorepo management
- lerna package manager
- npm package management
- yarn workspace management
- javascript dependency management
- lerna bootstrap command
- lerna publish command
- monorepo versioning tool
- nodejs project management
- javascript multi-package projects
features:
- Initialize project files for multi-package repositories.
- Install and symlink dependencies across multiple packages.
- Run scripts across multiple packages simultaneously.
- Execute arbitrary shell commands in each package.
- Publish updated packages to a registry.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# lerna

> Manage JavaScript projects with multiple packages.
> More information: <https://lerna.js.org>.

- Initialize project files (`lerna.json`, `package.json`, `.git`, etc.):

`lerna init`

- Install all external dependencies of each package and symlink together local dependencies:

`lerna bootstrap`

- Run a specific script for every package that contains it in its `package.json`:

`lerna run {{script}}`

- Execute an arbitrary shell command in every package:

`lerna exec -- {{ls}}`

- Publish all packages that have changed since the last release:

`lerna publish`
