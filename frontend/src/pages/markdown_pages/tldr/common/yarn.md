---
title: "Manage Yarn Packages - Install, Remove | Online Free DevTools by Hexmos"
name: yarn
path: /freedevtools/tldr/common/yarn
canonical: "https://hexmos.com/freedevtools/tldr/common/yarn/"
description: "Manage dependencies with Yarn. Install, remove, and update JavaScript packages for your projects. Free online tool, no registration required."
category: common
keywords:
- javascript package manager
- nodejs package manager
- yarn install
- yarn add
- yarn remove
- yarn global add
- package dependency management
- yarn package manager
- yarn command line
- yarn package.json
features:
- Install JavaScript packages globally
- Manage project dependencies defined in package.json
- Add packages as dependencies to a project
- Uninstall packages and remove them from package.json
- Create and initialize a new package.json file
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# yarn

> JavaScript and Node.js package manager alternative.
> More information: <https://yarnpkg.com/cli>.

- Install a module globally:

`yarn global add {{module_name}}`

- Install all dependencies referenced in the `package.json` file (the `install` is optional):

`yarn install`

- Install a module and save it as a dependency to the `package.json` file (add `--dev` to save as a dev dependency):

`yarn add {{module_name}}@{{version}}`

- Uninstall a module and remove it from the `package.json` file:

`yarn remove {{module_name}}`

- Interactively create a `package.json` file:

`yarn init`

- Identify whether a module is a dependency and list other modules that depend upon it:

`yarn why {{module_name}}`
