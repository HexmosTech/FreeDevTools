---
title: "Create Packages - Build Pacman Packages with makepkg | Online Free DevTools by Hexmos"
name: makepkg
path: /freedevtools/tldr/linux/makepkg
canonical: "https://hexmos.com/freedevtools/tldr/linux/makepkg/"
description: "Create Pacman packages easily with makepkg. Build installable packages from PKGBUILD files and manage dependencies. Free online tool, no registration required."
category: linux
keywords:
  - pacman package creation
  - makepkg package builder
  - linux package management
  - PKGBUILD package generator
  - arch linux package
  - installable package build
  - software packaging tool
  - dependency installer
  - checksum verification
  - SRCINFO generator
features:
  - Build installable Pacman packages
  - Manage package dependencies automatically
  - Verify source file checksums
  - Generate SRCINFO files
  - Clean build directories after success
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# makepkg

> Create a package which can be used with `pacman`.
> Uses the `PKGBUILD` file in the current working directory by default.
> More information: <https://manned.org/makepkg.8>.

- Make a package:

`makepkg`

- Make a package and install its dependencies:

`makepkg {{[-s|--syncdeps]}}`

- Make a package, install its dependencies then install it to the system:

`makepkg {{[-si|--syncdeps --install]}}`

- Make a package, but skip checking the source's hashes:

`makepkg --skipchecksums`

- Clean up work directories after a successful build:

`makepkg {{[-c|--clean]}}`

- Verify the hashes of the sources:

`makepkg --verifysource`

- Generate and save the source information into `.SRCINFO`:

`makepkg --printsrcinfo > .SRCINFO`

- Download the source and install only the build dependencies for a program:

`makepkg {{[-so|--syncdeps --nobuild]}}`
