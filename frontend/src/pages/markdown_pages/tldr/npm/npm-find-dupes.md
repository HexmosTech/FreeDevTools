---
title: "Find Duplicates - Analyze npm Dependencies | Free DevTools"
name: npm-find-dupes
path: /freedevtools/tldr/npm/npm-find-dupes
canonical: "https://hexmos.com/freedevtools/tldr/npm/npm-find-dupes/"
description: "Analyze npm dependencies with npm-find-dupes. Quickly identify duplicate packages in your node_modules folder and optimize your project. Free online tool, no registration required."
category: common
keywords:
- npm dependency analyzer
- duplicate package finder
- node_modules cleaner
- javascript dependency check
- npm package manager
- node dependency manager
- npm duplicate dependencies
- node package analysis
- npm package analyzer
- find duplicate npm packages
features:
- Identifies duplicate packages in `node_modules`
- Includes `devDependencies` in the analysis
- Excludes optional dependencies from detection
- Outputs duplicate information in JSON format
- Limits or excludes searches to/from specific scopes
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# npm find-dupes

> Identify duplicate dependencies in `node_modules`.
> More information: <https://docs.npmjs.com/cli/npm-find-dupes>.

- List all duplicate packages within `node_modules`:

`npm find-dupes`

- Include `devDependencies` in duplicate detection:

`npm find-dupes --include dev`

- List all duplicate instances of a specific package in `node-modules`:

`npm find-dupes {{package_name}}`

- Exclude optional dependencies from duplicate detection:

`npm find-dupes --omit optional`

- Set the logging level for output:

`npm find-dupes --loglevel {{silent|error|warn|info|verbose}}`

- Output duplicate information in JSON format:

`npm find-dupes --json`

- Limit duplicate search to specific scopes:

`npm find-dupes --scope {{@scope1,@scope2}}`

- Exclude specific scopes from duplicate detection:

`npm find-dupes --omit-scope {{@scope1,@scope2}}`
