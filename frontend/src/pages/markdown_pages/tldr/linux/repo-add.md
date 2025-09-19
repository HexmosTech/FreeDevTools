---
title: "Create Package Database - Manage Packages on Linux | Online Free DevTools by Hexmos"
name: repo-add
path: /freedevtools/tldr/linux/repo-add
canonical: "https://hexmos.com/freedevtools/tldr/linux/repo-add/"
description: "Create and manage package databases with repo-add on Linux. Simplify package installation and updates using Pacman with this tool. Free online tool, no registration required."
category: linux
keywords:
- linux package manager
- pacman database creation
- create package database
- arch linux repository
- package repository manager
- linux package management
- repo-add linux
- package database utility
- arch linux package
- linux package database
features:
- Create empty package databases for Pacman
- Add multiple packages to a Pacman repository
- Remove outdated package files from a repository
- Suppress command output except for warnings and errors
- Create package databases with or without color output
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# repo-add

> Package database maintenance utility which enables installation of said package via Pacman.
> See also: `repo-remove`.
> More information: <https://manned.org/repo-add>.

- Create an empty repository:

`repo-add {{path/to/database.db.tar.gz}}`

- Add packages to the repository:

`repo-add {{path/to/database.db.tar.gz}} {{package1.pkg.tar.zst package2.pkg.tar.zst ...}}`

- Add all package binaries in the current directory and remove any outdated package files:

`repo-add {{[-R|--remove]}} {{path/to/database.db.tar.gz}} {{*.pkg.tar.zst}}`

- Add all package binaries in the current directory in silent mode except for warning and error messages:

`repo-add {{[-q|--quiet]}} {{path/to/database.db.tar.gz}} {{*.pkg.tar.zst}}`

- Add all package binaries in the current directory without showing color:

`repo-add --nocolor {{path/to/database.db.tar.gz}} {{*.pkg.tar.zst}}`
