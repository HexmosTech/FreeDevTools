---
title: "Manage Packages - Control Yay, Flatpak, and Snap | Online Free DevTools by Hexmos"
name: paxs
path: "/freedevtools/tldr/linux/paxs/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/paxs/"
description: "Manage packages across Yay, Flatpak, and Snap with paxs.  Search, install, remove, and upgrade packages effortlessly. Free online tool, no registration required."
category: linux
keywords:
  - package manager linux
  - linux package control
  - flatpak management tool
  - snap package management
  - yay package management
  - cross-platform package manager
  - command-line package manager
  - linux software installer
  - package upgrade linux
  - search packages linux
features:
  - Search and locate packages across multiple package managers
  - Install packages from Yay, Flatpak, and Snap sources
  - Remove packages from Yay, Flatpak, and Snap sources
  - Upgrade all installed packages across all sources
  - Check for updates for all installed packages
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# paxs

> Manage packages across Yay, Flatpak, and Snap.
> Supports searching, installing, removing, and upgrading packages.
> More information: <https://github.com/zamhedonia/paxs>.

- Search for a package:

`paxs {{search_term}}`

- Upgrade all packages:

`paxs {{[-u|--upgrade-all]}}`

- Install a package (prompting for the source):

`paxs {{[-i|--install]}} {{package}}`

- Remove a package (prompting for the source):

`paxs {{[-r|--remove]}} {{package}}`

- Check for updates across all package managers:

`paxs {{[-c|--check-update]}}`

- Display help:

`paxs {{[-h|--help]}}`
