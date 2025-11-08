---
title: "Winget - Manage Windows Packages | Online Free DevTools by Hexmos"
name: winget
path: "/freedevtools/tldr/windows/winget/"
canonical: "https://hexmos.com/freedevtools/tldr/windows/winget/"
description: "Manage Windows packages efficiently with Winget. Install, uninstall, search, and upgrade software on your Windows system. Free online tool, no registration required."
category: windows
keywords:
- windows package manager
- winget install package
- winget uninstall package
- winget search package
- winget upgrade packages
- windows command line package manager
- winget import export
- winget validate manifest
- windows software management
- windows package deployment
features:
- Install software packages using the command line
- Uninstall software packages using the command line
- Search for available software packages
- Upgrade installed packages to the latest versions
- Import or export a list of installed packages
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# winget

> Windows Package Manager.
> More information: <https://learn.microsoft.com/windows/package-manager/winget>.

- Install a package:

`winget {{[add|install]}} {{package}}`

- Remove a package (Note: `remove` can also be used instead of `uninstall`):

`winget {{[rm|uninstall]}} {{package}}`

- Display information about a package:

`winget show {{package}}`

- Search for a package:

`winget search {{package}}`

- Upgrade all packages to the latest versions:

`winget upgrade {{[-r|--all]}}`

- List all packages installed that can be managed with `winget`:

`winget {{[ls|list]}} {{[-s|--source]}} winget`

- Import packages from a file, or export installed packages to a file:

`winget {{import|export}} {{--import-file|--output}} {{path/to/file}}`

- Validate manifests before submitting a PR to the winget-pkgs repository:

`winget validate {{path/to/manifest}}`
