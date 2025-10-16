---
title: "XBPS Remove - Uninstall Packages on Linux | Online Free DevTools by Hexmos"
name: xbps-remove
path: "/freedevtools/tldr/linux/xbps-remove/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/xbps-remove/"
description: "Uninstall packages instantly with XBPS Remove. Manage software, remove dependencies, and clean your Linux system. Free online tool, no registration required."
category: linux
keywords:
- linux package manager
- xbps package removal
- void linux xbps
- linux software uninstall
- xbps remove package
- uninstall linux packages
- delete linux software
- xbps orphan removal
- linux package cleanup
- xbps clean cache
features:
- Remove specified packages from the system
- Recursively remove packages and their dependencies
- Remove orphaned packages no longer required
- Clean the XBPS package cache
- Uninstall software on Void Linux
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# xbps-remove

> XBPS utility to remove packages.
> See also: `xbps`.
> More information: <https://manned.org/xbps-remove.1>.

- Remove a package:

`xbps-remove {{package}}`

- Remove a package and its dependencies:

`xbps-remove {{[-R|--recursive]}} {{package}}`

- Remove orphan packages (installed as dependencies but no longer required by any package):

`xbps-remove {{[-o|--remove-orphans]}}`

- Remove obsolete packages from the cache:

`xbps-remove {{[-O|--clean-cache]}}`
