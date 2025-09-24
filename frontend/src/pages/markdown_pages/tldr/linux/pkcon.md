---
title: "Pkcon Package Manager - Manage Linux Packages | Online Free DevTools by Hexmos"
name: pkcon
path: /freedevtools/tldr/linux/pkcon
canonical: "https://hexmos.com/freedevtools/tldr/linux/pkcon/"
description: "Manage Linux packages efficiently with Pkcon Package Manager. Install, remove, update, and search for packages easily via command line. Free online tool, no registration required."
category: linux
keywords:
  - linux package manager
  - pkcon command
  - linux package installation
  - linux package removal
  - linux package update
  - linux software management
  - pkcon search
  - packagekit client
  - gnome software management
  - linux system administration
features:
  - Install Linux packages from repositories
  - Remove unwanted Linux packages
  - Refresh the local package cache
  - Update existing installed packages
  - Search for available packages by name
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pkcon

> PackageKit client used by Discover and Gnome software and alternative to `apt`.
> More information: <https://manned.org/pkcon>.

- Install a package:

`pkcon install {{package}}`

- Remove a package:

`pkcon remove {{package}}`

- Refresh the package cache:

`pkcon refresh`

- Update packages:

`pkcon update`

- Search for a specific package:

`pkcon search {{package}}`

- List all available packages:

`pkcon get-packages`
