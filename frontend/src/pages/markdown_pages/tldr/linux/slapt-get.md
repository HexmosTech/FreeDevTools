---
title: "Control Slackware Packages - slapt-get Management | Free DevTools"
name: slapt-get
path: /freedevtools/tldr/linux/slapt-get
canonical: "https://hexmos.com/freedevtools/tldr/linux/slapt-get/"
description: "Control Slackware packages easily with slapt-get. Manage package installations, removals, and upgrades using the command line interface. Free online tool, no registration required."
category: linux
keywords:
- Slackware package manager
- slapt-get install package
- slapt-get remove package
- slapt-get update
- linux package management
- slackware package upgrade
- slapt-get search
- slapt-get show package info
- command line package manager
- linux slapt-get
features:
- Update package lists from configured sources
- Install or update packages to the latest version
- Remove specified packages from the system
- Upgrade all installed packages to the newest versions
- Search for packages by name or description
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# slapt-get

> An `apt` like system for Slackware package management.
> Package sources need to be configured in the slapt-getrc file.
> More information: <https://software.jaos.org>.

- Update the list of available packages and versions:

`slapt-get --update`

- Install a package, or update it to the latest available version:

`slapt-get --install {{package}}`

- Remove a package:

`slapt-get --remove {{package}}`

- Upgrade all installed packages to their latest available versions:

`slapt-get --upgrade`

- Locate packages by the package name, disk set, or version:

`slapt-get --search {{query}}`

- Show information about a package:

`slapt-get --show {{package}}`
