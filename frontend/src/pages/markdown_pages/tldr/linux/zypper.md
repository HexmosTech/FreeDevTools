---
title: "Zypper Package Manager - Manage Packages | Online Free DevTools by Hexmos"
name: zypper
path: /freedevtools/tldr/linux/zypper
canonical: "https://hexmos.com/freedevtools/tldr/linux/zypper/"
description: "Manage software packages with Zypper Package Manager on Linux. Update repositories, install, remove and search packages efficiently using command line. Free online tool, no registration required."
category: linux
keywords:
- linux package manager
- zypper install package
- zypper remove package
- zypper update repository
- zypper search package
- suse package management
- opensuse package management
- zypper command line tool
- linux command
- zypper repository management
features:
- Synchronize package lists with remote repositories
- Install software packages from repositories
- Remove unwanted software packages
- Upgrade installed packages to the latest versions
- Search for packages using keywords
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# zypper

> SUSE & openSUSE package management utility.
> For equivalent commands in other package managers, see <https://wiki.archlinux.org/title/Pacman/Rosetta>.
> More information: <https://en.opensuse.org/SDB:Zypper_manual>.

- Synchronize list of packages and versions available:

`zypper {{[ref|refresh]}}`

- Install a new package:

`zypper {{[in|install]}} {{package}}`

- Remove a package:

`zypper {{[rm|remove]}} {{package}}`

- Upgrade installed packages to the newest available versions:

`zypper {{[up|update]}}`

- Search package via keyword:

`zypper {{[se|search]}} {{keyword}}`

- Show information related to configured repositories:

`zypper {{[lr|repos]}} --sort-by-priority`
