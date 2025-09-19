---
title: "Pacaur Package Manager - Install AUR Packages | Online Free DevTools by Hexmos"
name: pacaur
path: /freedevtools/tldr/linux/pacaur
canonical: "https://hexmos.com/freedevtools/tldr/linux/pacaur/"
description: "Install AUR packages easily with Pacaur Package Manager. Update, remove, and search Arch Linux packages. Free online tool, no registration required."
category: linux
keywords:
  - aur package manager
  - arch linux package
  - pacaur install
  - pacaur update
  - pacaur remove
  - pacaur search
  - aur repository
  - arch user repository
  - linux package manager
  - command line package
features:
  - Synchronize and update all packages, including AUR.
  - Install new packages from both official repositories and AUR.
  - Remove packages and their dependencies, including AUR packages.
  - Search the package database for specific keywords.
  - List all currently installed packages, including AUR packages.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pacaur

> A utility for Arch Linux to build and install packages from the Arch User Repository.
> More information: <https://github.com/rmarquis/pacaur>.

- Synchronize and update all packages (includes AUR):

`pacaur -Syu`

- Synchronize and update only AUR packages:

`pacaur -Syua`

- Install a new package (includes AUR):

`pacaur -S {{package}}`

- Remove a package and its dependencies (includes AUR packages):

`pacaur -Rs {{package}}`

- Search the package database for a keyword (includes AUR):

`pacaur -Ss {{keyword}}`

- List all currently installed packages (includes AUR packages):

`pacaur -Qs`
