---
title: "Yaourt Package Manager - Manage Arch Linux Packages | Online Free DevTools by Hexmos"
name: yaourt
path: /freedevtools/tldr/linux/yaourt
canonical: "https://hexmos.com/freedevtools/tldr/linux/yaourt/"
description: "Manage Arch Linux packages easily with Yaourt.  Install, update, remove, and search AUR packages efficiently. Free online tool, no registration required."
category: linux
keywords:
  - linux package manager
  - arch linux yaourt
  - aur package manager
  - yaourt commands
  - linux package installation
  - arch linux aur
  - package update linux
  - yaourt search
  - linux package removal
  - arch linux repository
features:
  - Synchronizes and updates all packages, including AUR packages.
  - Installs new packages from the AUR and official repositories.
  - Removes packages and their dependencies, including AUR packages.
  - Searches the package database (including AUR) for specific keywords.
  - Lists installed packages with versions and repositories.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# yaourt

> Arch Linux utility for building packages from the Arch User Repository.
> More information: <https://archlinux.fr/yaourt-en>.

- Synchronize and update all packages (including AUR):

`yaourt -Syua`

- Install a new package (includes AUR):

`yaourt -S {{package}}`

- Remove a package and its dependencies (includes AUR packages):

`yaourt -Rs {{package}}`

- Search the package database for a keyword (including AUR):

`yaourt -Ss {{query}}`

- List installed packages, versions, and repositories (AUR packages will be listed under the repository name 'local'):

`yaourt -Q`
