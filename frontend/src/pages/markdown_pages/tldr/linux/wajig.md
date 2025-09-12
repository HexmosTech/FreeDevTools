---
title: "Control Debian Packages - Wajig System Admin | Free DevTools"
name: wajig
path: /freedevtools/tldr/unknown/wajig
canonical: "https://hexmos.com/freedevtools/tldr/unknown/wajig/"
description: "Control Debian packages easily with Wajig. Manage, update, install, and remove packages on Debian-based systems. Free online tool, no registration required."
category: unknown
keywords:
- debian package manager
- apt package management
- linux package installer
- system administration tool
- command line utility
- debian system upgrade
- package dependency resolution
- software repository update
- debian package removal
- wajig command reference
features:
- Update the package lists and repositories
- Install or update packages to the latest version
- Remove packages and configuration files
- Perform system updates and upgrades
- Display installed package sizes
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# wajig

> Simplified all-in-one-place system support tool for Debian-based systems.
> More information: <https://togaware.com/linux/survivor/wajig.html>.

- Update the list of available packages and versions:

`wajig update`

- Install a package, or update it to the latest available version:

`wajig install {{package}}`

- Remove a package and its configuration files:

`wajig purge {{package}}`

- Perform an update and then a dist-upgrade:

`wajig daily-upgrade`

- Display the sizes of installed packages:

`wajig sizes`

- List the version and distribution for all installed packages:

`wajig versions`

- List versions of upgradable packages:

`wajig toupgrade`

- Display packages which have some form of dependency on the given package:

`wajig dependents {{package}}`
