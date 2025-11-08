---
title: "Control AUR Packages - Manage AUR with aurman | Online Free DevTools by Hexmos"
name: aurman
path: "/freedevtools/tldr/linux/aurman/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/aurman/"
description: "Control AUR packages efficiently with aurman. Build, install, and manage packages from the Arch User Repository. Free online tool, no registration required."
category: linux
keywords:
- aur package manager
- arch user repository
- linux package builder
- aur package installer
- pacman alternative
- aur package synchronizer
- arch linux utility
- aur package updater
- command line aur tool
- linux aur package control
features:
- Synchronize and update all packages.
- Install packages from the AUR.
- Search for packages in official repositories and AUR.
- Remove packages and dependencies.
- Clear the package cache.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# aurman

> An Arch Linux utility to build and install packages from the Arch User Repository.
> See also: `pacman`.
> More information: <https://github.com/polygamma/aurman>.

- Synchronize and update all packages:

`aurman {{[-S|--sync]}} {{[-y|--refresh]}} {{[-u|--sysupgrade]}}`

- Synchronize and update all packages without show changes of `PKGBUILD` files:

`aurman {{[-S|--sync]}} {{[-y|--refresh]}} {{[-u|--sysupgrade]}} --noedit`

- Install a new package:

`aurman {{[-S|--sync]}} {{package}}`

- Install a new package without show changes of `PKGBUILD` files:

`aurman {{[-S|--sync]}} --noedit {{package}}`

- Install a new package without prompting:

`aurman {{[-S|--sync]}} --noedit --noconfirm {{package}}`

- Search the package database for a keyword from the official repositories and AUR:

`aurman {{[-S|--sync]}} {{[-s|--search]}} {{keyword}}`

- Remove a package and its dependencies:

`aurman --remove --recursive --nosave {{package}}`

- Clear the package cache (use two `--clean` flags to clean all packages):

`aurman {{[-S|--sync]}} {{[-c|--clean]}}`
