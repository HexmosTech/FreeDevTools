---
title: "Scoop - Manage Windows Packages | Free DevTools"
name: scoop
path: /freedevtools/tldr/windows/scoop
canonical: "https://hexmos.com/freedevtools/tldr/windows/scoop/"
description: "Manage Windows packages effectively with Scoop. Install, uninstall, and update software effortlessly on your Windows system. Free online tool, no registration required."
category: windows
keywords:
- windows package manager
- scoop package management
- command line package manager
- windows command line tools
- software installation windows
- app installer windows
- scoop update packages
- scoop install command
- scoop uninstall command
- scoop search packages
features:
- Install software packages using the command line.
- Uninstall software packages from your system.
- Update all installed software packages.
- Search for available software packages.
- Clean up old package versions and the download cache.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# scoop

> The Scoop package manager.
> Some subcommands such as `bucket` have their own usage documentation.
> More information: <https://scoop.sh>.

- Install a package:

`scoop install {{package}}`

- Remove a package:

`scoop uninstall {{package}}`

- Update all installed packages:

`scoop update --all`

- List installed packages:

`scoop list`

- Display information about a package:

`scoop info {{package}}`

- Search for a package:

`scoop search {{package}}`

- Remove old versions of all packages and clear the download cache:

`scoop cleanup --cache --all`
