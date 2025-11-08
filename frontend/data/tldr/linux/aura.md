---
title: "Aura Package Manager - Manage Arch Linux Packages | Online Free DevTools by Hexmos"
name: aura
path: "/freedevtools/tldr/linux/aura/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/aura/"
description: "Manage Arch Linux packages efficiently with Aura Package Manager.  Search, install, update, and remove packages from both the official repositories and AUR. Free online tool, no registration required."
category: linux
keywords:
  - linux package manager
  - aur package manager
  - arch linux packages
  - aura package management
  - linux software installation
  - aur repository management
  - arch linux aur
  - linux system upgrade
  - package dependency management
  - linux package downgrade
features:
  - Search and install packages from the AUR and official repositories.
  - Update and upgrade all AUR and system packages.
  - Manage package dependencies, including removing orphans.
  - Downgrade packages using the local cache.
  - Remove packages and their dependencies recursively.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# aura

> The Aura Package Manager: a secure, multilingual package manager for Arch Linux and the AUR.
> More information: <https://github.com/fosskers/aura>.

- Search for packages from the official repositories and AUR:

`aura --aursync --both --search {{keyword|regex}}`

- Install a package from the AUR:

`aura --aursync {{package}}`

- Update all AUR packages in a verbose mode and remove all make dependencies:

`aura --aursync --diff --sysupgrade --delmakedeps --unsuppress`

- Install a package from the official repositories:

`aura --sync {{package}}`

- Synchronize and update all packages from the official repositories:

`aura --sync --refresh --sysupgrade`

- Downgrade a package using the package cache:

`aura --downgrade {{package}}`

- Remove a package and its dependencies:

`aura --remove --recursive --unneeded {{package}}`

- Remove orphan packages (installed as dependencies but not required by any package):

`aura --orphans --abandon`
