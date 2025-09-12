---
title: "Trizen - Build AUR Packages | Free DevTools"
name: trizen
path: /freedevtools/tldr/linux/trizen
canonical: "https://hexmos.com/freedevtools/tldr/linux/trizen/"
description: "Build AUR packages easily with Trizen. Install, update, and remove packages from the Arch User Repository. Free online tool, no registration required."
category: linux
keywords:
- aur package builder
- trizen arch linux
- aur package manager
- linux package install
- arch user repository
- arch linux aur
- aur package update
- trizen package search
- aur dependency resolver
- linux aur helper
features:
- Synchronize and update AUR packages
- Install packages from the AUR
- Remove packages and dependencies
- Search the AUR package database
- Show information about AUR packages
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# trizen

> Arch Linux utility for building packages from the Arch User Repository (AUR).
> More information: <https://github.com/trizen/trizen/blob/master/TRIZEN.md>.

- Synchronize and update all AUR packages:

`trizen -Syua`

- Install a new package:

`trizen -S {{package}}`

- Remove a package and its dependencies:

`trizen -Rs {{package}}`

- Search the package database for a keyword:

`trizen -Ss {{keyword}}`

- Show information about a package:

`trizen -Si {{package}}`

- List installed packages and versions:

`trizen -Qe`
