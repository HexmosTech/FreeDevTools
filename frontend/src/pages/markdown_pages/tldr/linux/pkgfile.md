---
title: "Search Linux Packages - Find Files with pkgfile | Online Free DevTools by Hexmos"
name: pkgfile
path: /freedevtools/tldr/linux/pkgfile
canonical: "https://hexmos.com/freedevtools/tldr/linux/pkgfile/"
description: "Search for files within Linux packages using pkgfile. Easily identify the package containing a specific file. Free online tool, no registration required."
category: linux
keywords:
- linux package search
- find file in package
- arch linux package manager
- pkgfile file lookup
- locate linux file owner
- resolve package dependency
- arch package database
- linux command line tools
- package version lookup
- linux file system search
features:
- Search for packages owning a specific file
- List all files provided by a package
- Locate executables provided by a package
- Perform case-insensitive file searches
- Search for files within specific repositories
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pkgfile

> Search files from packages in the official repositories on Arch-based systems.
> See also: `pacman files` describing the usage of `pacman --files`.
> More information: <https://manned.org/pkgfile>.

- Synchronize the pkgfile database:

`sudo pkgfile --update`

- Search for a package that owns a specific file:

`pkgfile {{filename}}`

- List all files provided by a package:

`pkgfile --list {{package}}`

- List executables provided by a package:

`pkgfile --list --binaries {{package}}`

- Search for a package that owns a specific file using case-insensitive matching:

`pkgfile --ignorecase {{filename}}`

- Search for a package that owns a specific file in the `bin` or `sbin` directory:

`pkgfile --binaries {{filename}}`

- Search for a package that owns a specific file, displaying the package version:

`pkgfile --verbose {{filename}}`

- Search for a package that owns a specific file in a specific repository:

`pkgfile --repo {{repository_name}} {{filename}}`
