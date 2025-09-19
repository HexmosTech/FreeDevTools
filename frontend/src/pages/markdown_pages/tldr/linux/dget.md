---
title: "Download Debian Packages - dget Command | Online Free DevTools by Hexmos"
name: dget
path: /freedevtools/tldr/linux/dget
canonical: "https://hexmos.com/freedevtools/tldr/linux/dget/"
description: "Download Debian packages efficiently with the dget command.  Manage binary packages and source code effortlessly. Free online tool, no registration required."
category: linux
keywords:
  - debian package downloader
  - dget command linux
  - download debian packages
  - debian package manager
  - linux package download
  - source package download
  - debian dsc download
  - download debian source
  - linux package installation
  - command-line package manager
features:
  - Downloads Debian binary packages directly.
  - Downloads and extracts Debian source packages from .dsc files.
  - Allows downloading Debian source package tarballs without extraction.
  - Provides a command-line interface for easy package management.
  - Simplifies the process of obtaining Debian packages.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# dget

> Download Debian packages.
> More information: <https://manned.org/dget.1>.

- Download a binary package:

`dget {{package}}`

- Download and extract a package source from its `.dsc` file:

`dget {{http://deb.debian.org/debian/pool/main/h/haskell-tldr/haskell-tldr_0.4.0-2.dsc}}`

- Download a package source tarball from its `.dsc` file but don't extract it:

`dget {{[-d|--download-only]}} {{http://deb.debian.org/debian/pool/main/h/haskell-tldr/haskell-tldr_0.4.0-2.dsc}}`
