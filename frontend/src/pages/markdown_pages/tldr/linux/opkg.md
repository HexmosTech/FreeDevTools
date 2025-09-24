---
title: "opkg Package Manager - Manage OpenWrt Packages | Online Free DevTools by Hexmos"
name: opkg
path: /freedevtools/tldr/linux/opkg
canonical: "https://hexmos.com/freedevtools/tldr/linux/opkg/"
description: "Manage OpenWrt packages efficiently with opkg. Install, remove, update, and upgrade packages easily. Free online tool, no registration required."
category: linux
keywords:
  - opkg package manager
  - openwrt package management
  - linux package installer
  - opkg install command
  - opkg update command
  - opkg remove command
  - opkg upgrade command
  - opkg list command
  - embedded linux packages
  - openwrt package control
features:
  - Install new packages from OpenWrt repositories.
  - Remove unwanted or unnecessary packages.
  - Update the package list to reflect available versions.
  - Upgrade existing packages to their latest versions.
  - Query package information and installed files.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# opkg

> A lightweight package manager used to install OpenWrt packages.
> More information: <https://openwrt.org/docs/guide-user/additional-software/opkg>.

- Install a package:

`opkg install {{package}}`

- Remove a package:

`opkg remove {{package}}`

- Update the list of available packages:

`opkg update`

- Upgrade one or more specific package(s):

`opkg upgrade {{package(s)}}`

- Display information for a specific package:

`opkg info {{package}}`

- List all the available packages:

`opkg list`

- Find out which package owns a file:

`opkg search /{{path/to/file}}`

- List all files belonging to a package:

`opkg files {{package}}`
