---
title: "Manage APX Package Managers - Create & Control Packages | Free DevTools"
name: apx-pkgmanagers
path: /freedevtools/tldr/linux/apx-pkgmanagers
canonical: "https://hexmos.com/freedevtools/tldr/linux/apx-pkgmanagers/"
description: "Manage and control APX package managers with ease. Create, list, remove, and show package manager configurations. Free online tool, no registration required."
category: linux
keywords:
  - apx package manager management
  - apx package configuration
  - apx package manager create
  - apx package manager list
  - apx package manager remove
  - apx package manager show
  - apx configuration management
  - command-line package management
  - apx package manager CLI
  - linux package management
features:
  - Create new package manager configurations interactively.
  - List all available package manager configurations.
  - Remove existing package manager configurations.
  - Display detailed information about specific package managers.
  - Manage APX package configurations via the command line.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# apx pkgmanagers

> Manage package managers in `apx`.
> Note: User-created package manager configurations are stored in `~/.local/share/apx/pkgmanagers`.
> More information: <https://github.com/Vanilla-OS/apx>.

- Interactively create a new package manager configuration:

`apx pkgmanagers create`

- List all available package manager confirgurations:

`apx pkgmanagers list`

- Remove a package manager configuration:

`apx pkgmanagers rm --name {{string}}`

- Display information about a specific package manager:

`apx pkgmanagers show {{name}}`
