---
title: "NPM Deprecate - Mark Package Versions as Deprecated | Free DevTools"
name: npm-deprecate
path: /freedevtools/tldr/npm/npm-deprecate
canonical: "https://hexmos.com/freedevtools/tldr/npm/npm-deprecate/"
description: "Deprecate NPM package versions instantly with NPM Deprecate. Manage version deprecation messages and prevent package usage. Free online tool, no registration required."
category: common
keywords:
- npm deprecate
- npm package deprecate
- javascript package deprecate
- node package deprecate
- npm version deprecate
- package version control
- npm command line tool
- node version management
- npm update message
- javascript package management
features:
- Deprecate specific package versions.
- Deprecate a range of package versions.
- Remove deprecation messages from package versions.
- Communicate deprecation reasons to users.
- Manage package lifecycle with deprecation flags.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# npm deprecate

> Mark a version or range of versions of an `npm` package as deprecated.
> More information: <https://docs.npmjs.com/cli/npm-deprecate/>.

- Deprecate a specific version of a package:

`npm deprecate {{package_name}}@{{version}} "{{deprecation_message}}"`

- Deprecate a range of versions of a package:

`npm deprecate {{package_name}}@"<{{version_range}}" "{{deprecation_message}}"`

- Un-deprecate a specific version of a package:

`npm deprecate {{package_name}}@{{version}} ""`
