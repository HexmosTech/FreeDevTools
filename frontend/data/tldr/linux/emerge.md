---
title: "Manage Packages with emerge - Gentoo Package Management | Online Free DevTools by Hexmos"
name: emerge
path: "/freedevtools/tldr/linux/emerge/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/emerge/"
description: "Manage Gentoo packages efficiently with emerge, the powerful package manager.  Update, install, remove, and search for packages with ease. Free online tool, no registration required."
category: linux
keywords:
  - Gentoo package manager
  - emerge commands
  - linux package management
  - portage emerge
  - gentoo update
  - gentoo install packages
  - gentoo remove packages
  - gentoo package search
  - emerge sync
  - emerge update
features:
  - Synchronize all Gentoo packages
  - Update all installed packages and their dependencies
  - Resume interrupted package installations
  - Install new packages with dependency resolution
  - Remove packages and their dependencies
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# emerge

> Gentoo Linux package manager utility.
> For equivalent commands in other package managers, see <https://wiki.archlinux.org/title/Pacman/Rosetta>.
> More information: <https://wiki.gentoo.org/wiki/Portage#emerge>.

- Synchronize all packages:

`sudo emerge --sync`

- Update all packages, including dependencies:

`sudo emerge {{[-avuDN|--ask --verbose --update --deep --newuse]}} @world`

- Resume a failed update, skipping the failing package:

`sudo emerge --resume --skipfirst`

- Install a new package, with confirmation:

`sudo emerge {{[-av|--ask --verbose]}} {{package}}`

- Remove a package and its dependencies with confirmation:

`sudo emerge {{[-avc|--ask --verbose --depclean]}} {{package}}`

- Remove orphaned packages (installed as dependencies but no longer required by any package):

`sudo emerge {{[-avc|--ask --verbose --depclean]}}`

- Search the package database for a keyword:

`emerge {{[-S|--searchdesc]}} {{keyword}}`
