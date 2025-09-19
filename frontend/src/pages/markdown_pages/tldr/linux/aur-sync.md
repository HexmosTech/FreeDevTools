---
title: "Sync AUR Packages - Automate Builds | Online Free DevTools by Hexmos"
name: aur-sync
path: /freedevtools/tldr/linux/aur-sync
canonical: "https://hexmos.com/freedevtools/tldr/linux/aur-sync/"
description: "Automate AUR package syncing with aur-sync. Build, download, and upgrade packages from the Arch User Repository. Free online tool, no registration required."
category: linux
keywords:
  - aur package sync
  - arch user repository build
  - aur package manager
  - linux package management
  - aur dependency resolver
  - aur package builder
  - aur package installer
  - aur package upgrade
  - pacman package repository
  - aurutils aur sync
features:
  - Download and build AUR packages automatically
  - Upgrade packages in a local repository
  - Clean build files after installation
  - Install packages without interactive viewing
  - Ignore specific packages during upgrades
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# aur sync

> Download and build AUR packages automatically.
> Note: A local repository needs to be defined in `/etc/pacman.conf` and `vifm` needs to be installed for this to fully function.
> More information: <https://github.com/aurutils/aurutils>.

- Download one or more packages and their dependencies from the AUR, build them, and add them to a local repository:

`aur sync {{package1 package2 ...}}`

- Upgrade local repository packages:

`aur sync {{[-u|--upgrades]}}`

- Clean build files after install:

`aur sync {{[-C|--clean]}} {{package}}`

- Install a package without viewing changes in Vim and do not confirm dependency installation:

`aur sync --noview {{[-n|--noconfirm]}} {{package}}`

- Ignore specific packages when upgrading:

`aur sync {{[-u|--upgrades]}} --ignore {{package1,package2,...}}`
