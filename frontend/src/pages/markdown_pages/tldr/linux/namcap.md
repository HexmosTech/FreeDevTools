---
title: "Validate Package - Check PKGBUILD Files with namcap | Free DevTools"
name: namcap
path: /freedevtools/tldr/linux/namcap
canonical: "https://hexmos.com/freedevtools/tldr/linux/namcap/"
description: "Validate package integrity with namcap on Linux. Check PKGBUILD files for errors and common mistakes to improve software quality. Free online tool, no registration required."
category: linux
keywords:
- PKGBUILD validator
- Arch Linux package check
- Linux package integrity
- namcap package analysis
- Package build validation
- PKGBUILD syntax checker
- Binary package inspector
- Arch Linux package linting
- Software packaging analysis
- pacman package validation
features:
- Check PKGBUILD files for errors
- Inspect binary packages for issues
- Validate package integrity on Linux
- Identify common packaging mistakes
- Print extra informational messages
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# namcap

> Check binary packages and source `PKGBUILD`s for common packaging mistakes.
> More information: <https://manned.org/namcap>.

- Check a specific `PKGBUILD` file:

`namcap {{path/to/pkgbuild}}`

- Check a specific package file:

`namcap {{path/to/package.pkg.tar.zst}}`

- Check a file, printing extra informational messages:

`namcap {{[-i|--info]}} {{path/to/file}}`
