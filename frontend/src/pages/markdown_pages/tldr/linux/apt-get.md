---
title: "Manage Packages with apt-get - Linux Package Management | Online Free DevTools by Hexmos"
name: apt-get
path: /freedevtools/tldr/linux/apt-get
canonical: "https://hexmos.com/freedevtools/tldr/linux/apt-get/"
description: "Manage Linux packages efficiently with apt-get.  Install, update, remove, and upgrade packages easily. Free online tool, no registration required."
category: linux
keywords:
  - linux package manager
  - apt-get commands
  - debian package management
  - ubuntu package manager
  - apt-get install
  - apt-get update
  - apt-get remove
  - linux software installation
  - package upgrade linux
  - apt-get purge
features:
  - Install new software packages
  - Update existing packages to the latest versions
  - Remove unwanted packages
  - Completely remove packages including configuration files
  - Manage system dependencies during upgrades
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# apt-get

> Debian and Ubuntu package management utility.
> Search for packages using `apt-cache`.
> It is recommended to use `apt` when used interactively in Ubuntu versions 16.04 and later.
> More information: <https://manned.org/apt-get.8>.

- Update the list of available packages and versions (it's recommended to run this before other `apt-get` commands):

`apt-get update`

- Install a package, or update it to the latest available version:

`apt-get install {{package}}`

- Remove a package:

`apt-get remove {{package}}`

- Remove a package and its configuration files:

`apt-get purge {{package}}`

- Upgrade all installed packages to their newest available versions:

`apt-get upgrade`

- Clean the local repository - removing package files (`.deb`) from interrupted downloads that can no longer be downloaded:

`apt-get autoclean`

- Remove all packages that are no longer needed:

`apt-get autoremove`

- Upgrade installed packages (like `upgrade`), but remove obsolete packages and install additional packages to meet new dependencies:

`apt-get dist-upgrade`
