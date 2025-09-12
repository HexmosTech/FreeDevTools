---
title: "Query Package Info - Manage CRUX Packages | Free DevTools"
name: pkginfo
path: /freedevtools/tldr/linux/pkginfo
canonical: "https://hexmos.com/freedevtools/tldr/linux/pkginfo/"
description: "Query package information with pkginfo. Manage installed software and dependencies on CRUX systems efficiently. Free online tool, no registration required."
category: linux
keywords:
- CRUX package query
- Linux package management
- pkginfo CRUX
- CRUX software versions
- Package file listing
- Software ownership lookup
- CRUX package footprint
- Linux package database
- CRUX package information
- Linux installed packages
features:
- List installed CRUX packages with versions
- Display files owned by a specific package
- Find owners of files matching a pattern
- Print the footprint of a file
- Query the package database on CRUX systems
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pkginfo

> Query the package database on a CRUX system.
> More information: <https://crux.nu/Main/Handbook3-6#ntoc19>.

- List installed packages and their versions:

`pkginfo {{[-i|--installed]}}`

- List files owned by a package:

`pkginfo {{[-l|--list]}} {{package}}`

- List the owner(s) of files matching a pattern:

`pkginfo {{[-o|--owner]}} {{pattern}}`

- Print the footprint of a file:

`pkginfo -f {{path/to/file}}`
