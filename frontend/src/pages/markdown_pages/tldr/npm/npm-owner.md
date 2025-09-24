---
title: "Control npm Package Owners - Manage Access | Online Free DevTools by Hexmos"
name: npm-owner
path: /freedevtools/tldr/npm/npm-owner
canonical: "https://hexmos.com/freedevtools/tldr/npm/npm-owner/"
description: "Control npm package owners effortlessly with npm Owner. Manage access rights, add/remove maintainers, and list existing owners. Free online tool, no registration required."
category: common
keywords:
- npm package owners
- npm access control
- npm maintainers
- npm user management
- npm package management
- npm command line
- node package manager
- npm permissions
- npm package ownership
- javascript package
features:
- Add new users as maintainers to npm packages.
- Remove users from an npm package's owner list.
- List all current owners of a specified npm package.
- Manage access rights to published npm packages.
- Modify npm package permissions via the command line.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# npm owner

> Manage ownership of published packages.
> More information: <https://docs.npmjs.com/cli/npm-owner>.

- Add a new user as a maintainer of a package:

`npm owner add {{username}} {{package_name}}`

- Remove a user from a package's owner list:

`npm owner rm {{username}} {{package_name}}`

- List all owners of a package:

`npm owner ls {{package_name}}`
