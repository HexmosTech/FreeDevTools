---
title: "AUR Package Manager - Control AUR Packages | Online Free DevTools by Hexmos"
name: auracle
path: /freedevtools/tldr/linux/auracle
canonical: "https://hexmos.com/freedevtools/tldr/linux/auracle/"
description: "Control AUR packages easily with AUR Package Manager. Search packages, display info, show PKGBUILD and check for updates. Free online tool, no registration required."
category: linux
keywords:
- aur package manager
- arch linux aur
- aur helper linux
- aur package search
- aur package info
- aur pkgbuild viewer
- aur update checker
- linux package manager
- arch linux packages
- command line aur
features:
- Search for AUR packages using regular expressions.
- Display detailed information about specific AUR packages.
- Show the PKGBUILD file for AUR packages.
- Check for available updates for installed AUR packages.
- Interact with the Arch User Repository.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# auracle

> Interact with Arch Linux's User Repository, commonly referred to as the AUR.
> More information: <https://github.com/falconindy/auracle>.

- Display AUR packages that match a `regex`:

`auracle search '{{regex}}'`

- Display information about one or more AUR packages:

`auracle info {{package1 package2 ...}}`

- Display the `PKGBUILD` file (build information) of one or more AUR packages:

`auracle show {{package1 package2 ...}}`

- Display updates for installed AUR packages:

`auracle outdated`
