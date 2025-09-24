---
title: "Create Binary Packages - Manage CRUX Packages | Online Free DevTools by Hexmos"
name: pkgmk
path: /freedevtools/tldr/linux/pkgmk
canonical: "https://hexmos.com/freedevtools/tldr/linux/pkgmk/"
description: "Create binary packages with pkgmk for CRUX package management. Build, install, and upgrade packages effortlessly. Free online tool, no registration required."
category: linux
keywords:
  - crux binary package
  - crux package manager
  - pkgmk package creation
  - crux pkgadd package
  - crux package build
  - package installation crux
  - package upgrade crux
  - footprint package creation
  - md5 package creation
  - crux package update
features:
  - Build binary packages for CRUX using pkgmk
  - Install packages directly after creation
  - Upgrade existing packages using pkgmk
  - Ignore footprint during package creation
  - Update package footprint using command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pkgmk

> Make a binary package for use with pkgadd on CRUX.
> More information: <https://docs.oracle.com/cd/E88353_01/html/E37839/pkgmk-1.html>.

- Make and download a package:

`pkgmk -d`

- Install the package after making it:

`pkgmk -d -i`

- Upgrade the package after making it:

`pkgmk -d -u`

- Ignore the footprint when making a package:

`pkgmk -d -if`

- Ignore the MD5 sum when making a package:

`pkgmk -d -im`

- Update the package's footprint:

`pkgmk -uf`
