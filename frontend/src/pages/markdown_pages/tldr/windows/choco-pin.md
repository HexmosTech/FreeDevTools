---
title: "Choco Pin - Control Package Versions | Free DevTools"
name: choco-pin
path: /freedevtools/tldr/windows/choco-pin
canonical: "https://hexmos.com/freedevtools/tldr/windows/choco-pin/"
description: "Control package versions with Choco Pin on Windows. Prevent unwanted upgrades and maintain stable environments. Free online tool, no registration required."
category: windows
keywords:
- chocolatey pin package
- choco pin version
- windows package management
- choco pin command
- chocolatey freeze version
- windows package pinning
- choco block upgrade
- chocolatey version control
- package version manager
- windows choco pin
features:
- Pin packages to specific versions
- Prevent automatic package upgrades
- List all pinned packages
- Remove package pins
- Manage package versions via command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# choco pin

> Pin a package at a version with Chocolatey.
> Pinned packages are skipped automatically when upgrading.
> More information: <https://chocolatey.org/docs/commands-pin>.

- Display a list of pinned packages and their versions:

`choco pin list`

- Pin a package at its current version:

`choco pin add {{[-n|--name]}} {{package}}`

- Pin a package at a specific version:

`choco pin add {{[-n|--name]}} {{package}} --version {{version}}`

- Remove a pin for a specific package:

`choco pin remove {{[-n|--name]}} {{package}}`
