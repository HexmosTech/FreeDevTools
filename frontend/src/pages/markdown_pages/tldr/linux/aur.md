---
title: "AUR Package Manager - Build Arch Packages | Online Free DevTools by Hexmos"
name: aur
path: /freedevtools/tldr/linux/aur
canonical: "https://hexmos.com/freedevtools/tldr/linux/aur/"
description: "Build Arch Linux packages effortlessly with AUR Package Manager.  Manage local repositories and streamline your package installations. Free online tool, no registration required."
category: linux
keywords:
  - arch linux package manager
  - aur package builder
  - linux package management
  - aur repository manager
  - pacman package management
  - arch linux build system
  - aur package installer
  - linux command line tool
  - aur database search
  - arch linux build tools
features:
  - Build and install AUR packages.
  - Manage local pacman repositories.
  - Search the AUR database for packages.
  - Upgrade installed AUR packages.
  - Clean up build files after installation.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# aur

> Build packages from the AUR and manage local repositories.
> Note: A local repository needs to be defined in `/etc/pacman.conf` and `vifm` needs to be installed for this to fully function.
> More information: <https://github.com/aurutils/aurutils>.

- Initialize the repository that matches the path in `/etc/pacman.conf`:

`repo-add {{path/to/database.db.tar.gz}}`

- Search the AUR database for a package:

`aur search {{keyword}}`

- Download one or more packages and their dependencies from the AUR, build them, and add them to a local repository:

`aur sync {{package1 package2 ...}}`

- List packages available in your local repository:

`aur repo {{[-l|--list]}}`

- Upgrade local repository packages:

`aur sync {{[-u|--upgrades]}}`

- Clean build files after install:

`aur sync {{[-C|--clean]}} {{package}}`

- Install a package without viewing changes in Vim and do not confirm dependency installation:

`aur sync --noview {{[-n|--noconfirm]}} {{package}}`

- Remove a package form the repository metadata (does not remove the package file itself):

`repo-remove {{path/to/database.db.tar.gz}} {{package}}`
