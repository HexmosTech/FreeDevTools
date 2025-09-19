---
title: "Install DEB Packages - Manage .deb Files | Online Free DevTools by Hexmos"
name: deb-get
path: /freedevtools/tldr/linux/deb-get
canonical: "https://hexmos.com/freedevtools/tldr/linux/deb-get/"
description: "Install .deb packages easily with deb-get, the apt-get alternative for managing software on Linux. Update, search, and remove .deb files quickly. Free online tool, no registration required."
category: linux
keywords:
- deb package installer
- deb package manager
- apt-get alternative
- linux deb install
- deb-get install package
- deb-get update package
- deb package repository
- deb file manager
- deb-get linux
- command line deb installer
features:
- Install .deb packages from third-party repositories
- Update the package list for available .deb packages
- Search for specific .deb packages by name
- Upgrade all installed .deb packages to the latest version
- Remove or purge installed .deb packages
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# deb-get

> `apt-get` functionality for `.deb` packages published in third party repositories or via direct download.
> Works with Linux distributions which use `apt-get`.
> More information: <https://github.com/wimpysworld/deb-get>.

- Update the list of available packages and versions:

`deb-get update`

- Search for a given package:

`deb-get search {{package}}`

- Show information about a package:

`deb-get show {{package}}`

- Install a package, or update it to the latest available version:

`deb-get install {{package}}`

- Remove a package (using `purge` instead also removes its configuration files):

`deb-get remove {{package}}`

- Upgrade all installed packages to their newest available versions:

`deb-get upgrade`

- List all available packages:

`deb-get list`
