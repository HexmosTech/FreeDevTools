---
title: "NPM Query - Print Package Dependencies | Free DevTools"
name: npm-query
path: /freedevtools/tldr/common/npm-query
canonical: "https://hexmos.com/freedevtools/tldr/common/npm-query/"
description: "Print package dependencies with NPM Query, using CSS-like selectors to filter and extract data. Inspect package structure, identify dependencies, and automate tasks. Free online tool, no registration required."
category: common
keywords:
- npm package dependencies
- javascript dependency management
- node package inspection
- npm query selector
- CSS selector npm
- npm package analyzer
- npm dependency tree
- npm dependency filter
- npm package metadata
- command line npm
features:
- Print direct dependencies
- Filter dependencies by name and version
- Identify packages with no dependencies
- Extract dependencies with specific scripts
- Locate Git dependencies and their requirers
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# npm query

> Print an array of dependency objects using CSS-like selectors.
> More information: <https://docs.npmjs.com/cli/npm-query>.

- Print direct dependencies:

`npm query ':root > *'`

- Print all direct production/development dependencies:

`npm query ':root > .{{prod|dev}}'`

- Print dependencies with a specific name:

`npm query '#{{package}}'`

- Print dependencies with a specific name and within a semantic versioning range:

`npm query '#{{package}}@{{semantic_version}}'`

- Print dependencies which have no dependencies:

`npm query ':empty'`

- Find all dependencies with postinstall scripts and uninstall them:

`npm query ":attr(scripts, [postinstall])" | jq 'map(.name) | join("\n")' {{[-r|--raw-output]}} | xargs -I _ npm uninstall _`

- Find all Git dependencies and print which application requires them:

`npm query ":type(git)" | jq 'map(.name)' | xargs -I _ npm why _`
