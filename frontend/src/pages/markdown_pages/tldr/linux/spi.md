---
title: "Manage Packages - Control Packages and Slackbuilds with SPI | Online Free DevTools by Hexmos"
name: spi
path: /freedevtools/tldr/linux/spi
canonical: "https://hexmos.com/freedevtools/tldr/linux/spi/"
description: "Manage packages with SPI. A powerful command-line tool to install, upgrade, and locate packages and slackbuilds on Linux. Free online tool, no registration required."
category: linux
keywords:
- linux package manager
- slackbuild manager
- spi package install
- spi slackbuild install
- linux software update
- command line package manager
- package search linux
- software repository manager
- package dependency manager
- linux package upgrade
features:
- Update package and slackbuild lists
- Install packages and slackbuilds by name
- Upgrade all installed packages
- Locate packages and slackbuilds
- Purge local package and slackbuild caches
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# spi

> A meta package manager that handles both packages and slackbuilds.
> More information: <https://github.com/gapan/spi/blob/master/man/spi.t2t>.

- Update the list of available packages and slackbuilds:

`spi {{[-u|--update]}}`

- Install a package or slackbuild:

`spi {{[-i|--install]}} {{package/slackbuild_name}}`

- Upgrade all installed packages to the latest versions available:

`spi {{[-U|--upgrade]}}`

- Locate packages or slackbuilds by package name or description:

`spi {{search_terms}}`

- Display information about a package or slackbuild:

`spi --show {{package/slackbuild_name}}`

- Purge the local package and slackbuild caches:

`spi --clean`
