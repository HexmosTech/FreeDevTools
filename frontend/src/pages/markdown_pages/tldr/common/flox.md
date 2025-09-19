---
title: "Manage Nix Packages - Control Environments with Flox | Online Free DevTools by Hexmos"
name: flox
path: /freedevtools/tldr/common/flox
canonical: "https://hexmos.com/freedevtools/tldr/common/flox/"
description: "Control Nix package environments easily with Flox. Manage dependencies, install packages, and share environments with others. Free online tool, no registration required."
category: common
keywords:
- nix package manager
- flox environment management
- nix dependency management
- flox package installation
- share nix environments
- nix environment creation
- nix package search
- nix environment activation
- floxhub environment sharing
- declarative package management
features:
- Create and manage isolated Nix environments.
- Install and uninstall packages within environments.
- Share environments with others via FloxHub.
- Search for packages within the FloxHub catalog.
- Activate and deactivate environments for project isolation.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# flox

> Easy to use Nix package and environment manager.
> More information: <https://flox.dev/docs/reference/command-reference/flox/>.

- Create a new environment in the current directory:

`flox init`

- Enter an environment, or create one if it doesn't exist:

`flox activate`

- Search for packages in the FloxHub catalog:

`flox search {{package}}`

- Install a package into the current environment:

`flox {{[i|install]}} {{package}}`

- Uninstall a package from the current environment:

`flox uninstall {{package}}`

- View a list of all packages installed in the current environment:

`flox {{[l|list]}}`

- Push a local environment to FloxHub to share with others:

`flox push`

- Pull a shared environment from FloxHub:

`flox pull {{environment_name}}`
