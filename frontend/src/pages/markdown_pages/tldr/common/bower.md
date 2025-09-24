---
title: "Bower Package Manager - Manage Web Dependencies | Online Free DevTools by Hexmos"
name: bower
path: /freedevtools/tldr/common/bower
canonical: "https://hexmos.com/freedevtools/tldr/common/bower/"
description: "Manage front-end web dependencies with Bower Package Manager. Install, uninstall, and list packages. Simplify web development. Free online tool, no registration required."
category: common
keywords:
- Bower package manager
- Front-end dependency manager
- Web dependency management
- Bower install command
- Bower uninstall command
- Bower list packages
- Bower init project
- Bower version control
- Bower.json configuration
- JavaScript dependency management
features:
- Install project dependencies from bower.json
- Install specific packages to bower_components
- Uninstall packages from the local directory
- List local packages and check for updates
- Create a bower.json file for project configuration
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# bower

> A package manager optimized for front-end web development.
> A package can be a GitHub user/repo shorthand, a Git endpoint, a URL or a registered package.
> More information: <https://bower.io/#getting-started>.

- Install a project's dependencies, listed in its bower.json:

`bower install`

- Install one or more packages to the bower_components directory:

`bower install {{package}} {{package}}`

- Uninstall packages locally from the bower_components directory:

`bower uninstall {{package}} {{package}}`

- List local packages and possible updates:

`bower list`

- Create a `bower.json` file for your package:

`bower init`

- Install a specific dependency version, and add it to `bower.json`:

`bower install {{local_name}}={{package}}#{{version}} --save`

- Display help for a specific command:

`bower help {{command}}`
