---
title: "Pamac Package Manager - Manage Linux Packages | Online Free DevTools by Hexmos"
name: pamac
path: "/freedevtools/tldr/linux/pamac/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/pamac/"
description: "Manage Linux packages efficiently with Pamac. Install, remove, search, update, and upgrade packages using the command line. Free online tool, no registration required."
category: linux
keywords:
  - linux package manager
  - pamac command line
  - arch linux pamac
  - manjaro pamac
  - linux package installation
  - linux package removal
  - linux package search
  - linux package update
  - pamac upgrade command
  - linux system administration
features:
  - Install new packages from repositories and AUR.
  - Remove packages and their orphaned dependencies.
  - Search the package database for specific packages.
  - List all installed packages on the system.
  - Check for and apply system-wide package updates.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pamac

> A command-line utility for the GUI package manager pamac.
> If you can't see the AUR packages, enable it in `/etc/pamac.conf` or in the GUI.
> More information: <https://wiki.manjaro.org/index.php/Pamac>.

- Install a new package:

`pamac install {{package_name}}`

- Remove a package and its no longer required dependencies (orphans):

`pamac remove --orphans {{package_name}}`

- Search the package database for a package:

`pamac search {{package_name}}`

- List installed packages:

`pamac list --installed`

- Check for package updates:

`pamac checkupdates`

- Upgrade all packages:

`pamac upgrade`
