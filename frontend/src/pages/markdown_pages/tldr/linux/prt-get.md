---
title: "Control CRUX Packages - Manage Software with prt-get | Free DevTools"
name: prt-get
path: /freedevtools/tldr/linux/prt-get
canonical: "https://hexmos.com/freedevtools/tldr/linux/prt-get/"
description: "Manage CRUX packages effortlessly with prt-get. Install, update, and remove software on your CRUX system using simple command-line instructions. Free online tool, no registration required."
category: linux
keywords:
  - crux package manager
  - crux software installation
  - crux package upgrade
  - crux package removal
  - prt-get install
  - prt-get upgrade
  - prt-get remove
  - prt-get search
  - crux ports tree
  - crux dependency management
features:
  - Install CRUX packages with a single command.
  - Handle dependencies automatically during package installation.
  - Upgrade existing packages from the local ports tree.
  - Remove installed packages easily.
  - Search the ports tree for available packages.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# prt-get

> The CRUX package manager.
> More information: <https://crux.nu/doc/prt-get%20-%20User%20Manual.html>.

- Install a package:

`prt-get install {{package}}`

- Install a package with dependency handling:

`prt-get depinst {{package}}`

- Update a package manually:

`prt-get upgrade {{package}}`

- Remove a package:

`prt-get remove {{package}}`

- Upgrade the system from the local ports tree:

`prt-get sysup`

- Search the ports tree:

`prt-get search {{query}}`

- Search for a file in a package:

`prt-get fsearch {{file}}`
