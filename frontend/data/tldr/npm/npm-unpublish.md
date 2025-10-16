---
title: "Unpublish NPM Package - Remove Packages from NPM Registry | Online Free DevTools by Hexmos"
name: npm-unpublish
path: "/freedevtools/tldr/npm/npm-unpublish/"
canonical: "https://hexmos.com/freedevtools/tldr/npm/npm-unpublish/"
description: "Remove NPM packages easily with NPM Unpublish. Delete specific versions or entire packages from the NPM registry. Free online tool, no registration required."
category: common
keywords:
- npm unpublish
- unpublish npm package
- npm remove package
- npm delete package
- npm registry management
- npm command line tools
- npm package removal
- node package manager
- npm uninstall package
- npm package maintenance
features:
- Remove specific versions of NPM packages.
- Unpublish entire NPM packages from the registry.
- Supports scoped NPM packages.
- Specify a timeout period for unpublishing.
- Dry run to preview unpublishing changes.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# npm unpublish

> Remove a package from the npm registry.
> More information: <https://docs.npmjs.com/cli/npm-unpublish>.

- Unpublish a specific package version:

`npm unpublish {{package_name}}@{{version}}`

- Unpublish the entire package:

`npm unpublish {{package_name}} {{[-f|--force]}}`

- Unpublish a package that is scoped:

`npm unpublish @{{scope}}/{{package_name}}`

- Specify a timeout period before unpublishing:

`npm unpublish {{package_name}} --timeout {{time_in_milliseconds}}`

- To prevent accidental unpublishing, use the `--dry-run` flag to see what would be unpublished:

`npm unpublish {{package_name}} --dry-run`
