---
title: "Convert Debian Packages - debtap Arch Linux Converter | Online Free DevTools by Hexmos"
name: debtap
path: /freedevtools/tldr/linux/debtap
canonical: "https://hexmos.com/freedevtools/tldr/linux/debtap/"
description: "Convert Debian packages to Arch Linux packages with debtap.  Easily manage and install Debian software on Arch systems. Free online tool, no registration required."
category: linux
keywords:
  - debian package converter
  - arch linux package
  - debian to arch converter
  - linux package conversion
  - debtap command
  - debian package management
  - arch linux installation
  - package conversion tool
  - linux package manager
  - debian arch migration
features:
  - Converts Debian .deb packages into Arch Linux PKGBUILD files.
  - Supports updating the debtap database for the latest package information.
  - Offers a quiet mode to automate the conversion process.
  - Allows generating only the PKGBUILD file without full conversion.
  - Provides a simple command-line interface for easy use.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# debtap

> Convert Debian packages into Arch Linux packages.
> See also: `pacman-upgrade`.
> More information: <https://github.com/helixarch/debtap>.

- Update debtap database (before the first run):

`sudo debtap {{[-u|--update]}}`

- Convert the specified package:

`debtap {{path/to/package.deb}}`

- Convert the specified package bypassing all questions, except for editing metadata files:

`debtap {{[-q|--quiet]}} {{path/to/package.deb}}`

- Generate a PKGBUILD file:

`debtap {{[-p|--pkgbuild]}} {{path/to/package.deb}}`
