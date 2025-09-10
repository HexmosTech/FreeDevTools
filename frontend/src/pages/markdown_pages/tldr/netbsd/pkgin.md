---
title: "Manage Packages - Control Software with pkgin | Free DevTools"
name: pkgin
path: /freedevtools/tldr/netbsd/pkgin
canonical: "https://hexmos.com/freedevtools/tldr/netbsd/pkgin/"
description: "Manage pkgsrc binary packages effortlessly with pkgin on NetBSD. Streamline software installation, removal, and upgrades on your system. Free online tool, no registration required."
category: netbsd
keywords:
- NetBSD package management
- pkgin package manager
- install NetBSD packages
- remove NetBSD packages
- upgrade NetBSD software
- NetBSD binary packages
- pkgsrc package management
- NetBSD package dependencies
- pkgin autoremove
- NetBSD system administration
features:
- Install software packages from binary repositories
- Remove packages and their unused dependencies
- Upgrade all installed packages to the latest versions
- Search for packages by name or description
- Automatically remove orphaned dependencies
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pkgin

> Manage `pkgsrc` binary packages on NetBSD.
> More information: <https://pkgin.net/#usage>.

- Install a package:

`pkgin install {{package}}`

- Remove a package and its dependencies:

`pkgin remove {{package}}`

- Upgrade all packages:

`pkgin full-upgrade`

- Search for a package:

`pkgin search {{keyword}}`

- List installed packages:

`pkgin list`

- Remove unneeded dependencies:

`pkgin autoremove`
