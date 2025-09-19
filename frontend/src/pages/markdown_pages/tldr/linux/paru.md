---
title: "Manage AUR Packages - Paru Package Manager | Online Free DevTools by Hexmos"
name: paru
path: /freedevtools/tldr/linux/paru
canonical: "https://hexmos.com/freedevtools/tldr/linux/paru/"
description: "Manage AUR packages easily with Paru package manager. Update, search, and install packages from the AUR repository. Free online tool, no registration required."
category: linux
keywords:
  - AUR package manager
  - Arch User Repository
  - Pacman wrapper
  - Paru AUR helper
  - Linux package manager
  - Command line package install
  - System update utility
  - PKGBUILD manager
  - AUR package search
  - Terminal package installer
features:
  - Interactively search and install packages
  - Synchronize and update all system packages
  - Upgrade AUR packages efficiently
  - Download PKGBUILD source files
  - Display package PKGBUILD file content
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# paru

> An AUR helper and pacman wrapper.
> More information: <https://github.com/Morganamilo/paru>.

- Interactively search for and install a package:

`paru {{package_name_or_search_term}}`

- Synchronize and update all packages:

`paru`

- Upgrade AUR packages:

`paru -Sua`

- Get information about a package:

`paru -Si {{package}}`

- Download `PKGBUILD` and other package source files from the AUR or ABS:

`paru --getpkgbuild {{package}}`

- Display the `PKGBUILD` file of a package:

`paru --getpkgbuild --print {{package}}`
