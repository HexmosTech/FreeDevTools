---
title: "Check Package Updates - Update npm Packages with ncu | Online Free DevTools by Hexmos"
name: ncu
path: /freedevtools/tldr/common/ncu
canonical: "https://hexmos.com/freedevtools/tldr/common/ncu/"
description: "Check npm package updates with ncu. Find and upgrade outdated dependencies in your package.json. Free online tool, no registration required."
category: common
keywords:
- npm package update checker
- javascript dependency update
- node module version control
- package.json dependency updater
- ncu npm check updates
- command line npm upgrade
- global npm package manager
- node package versioning
- npm dependency management
- find outdated npm modules
features:
- List outdated npm dependencies
- Upgrade dependencies in package.json
- Interactively update npm packages
- Filter dependencies by keyword or regex
- Target specific dependency sections (dev, optional, etc.)
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ncu

> Find newer versions of package dependencies and check outdated npm packages locally or globally.
> `ncu` only updates dependency versions in `package.json`. To install the new versions, run `npm install` afterwards.
> More information: <https://github.com/raineorshine/npm-check-updates>.

- List outdated dependencies in the current directory:

`ncu`

- List outdated global `npm` packages:

`ncu --global`

- Upgrade all dependencies in the current directory:

`ncu --upgrade`

- Interactively upgrade dependencies in the current directory:

`ncu --interactive`

- List outdated dependencies up to the highest minor version:

`ncu --target {{minor}}`

- List outdated dependencies that match a keyword or `regex`:

`ncu --filter {{keyword|/regex/}}`

- List only a specific section of outdated dependencies:

`ncu --dep {{dev|optional|peer|prod|packageManager}}`

- Display help:

`ncu --help`
