---
title: "Eclean - Clean Package Files on Linux | Online Free DevTools by Hexmos"
name: eclean
path: /freedevtools/tldr/linux/eclean
canonical: "https://hexmos.com/freedevtools/tldr/linux/eclean/"
description: "Clean package files with Eclean on Linux systems. Remove obsolete source and binary packages to free up disk space. Free online tool, no registration required."
category: linux
keywords:
- linux package cleaner
- eclean distfiles
- eclean packages
- linux repository cleaning
- remove obsolete packages linux
- gentoo package management
- linux disk space optimization
- binary package removal linux
- source file cleanup linux
- package file management linux
features:
- Remove obsolete source files
- Remove obsolete binary packages
- Clean distfiles of uninstalled packages
- Clean binary packages of uninstalled packages
- Preserve packages of installed software
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# eclean

> Clean repository source files and binary packages.
> More information: <https://wiki.gentoo.org/wiki/Eclean>.

- Clean the source file directory:

`sudo eclean distfiles`

- Clean the binary package directory:

`sudo eclean packages`

- Clean the distfiles of all uninstalled packages, but keep the distfiles of installed packages:

`sudo eclean {{[-d|--deep]}} {{[-n|--package-names]}} distfiles`

- Clean the binary packages of all uninstalled packages, but keep the binaries of installed packages:

`sudo eclean {{[-d|--deep]}} {{[-n|--package-names]}} packages`
