---
title: "Pacman Query - Manage Arch Linux Packages | Online Free DevTools by Hexmos"
name: pacman-query
path: /freedevtools/tldr/linux/pacman-query
canonical: "https://hexmos.com/freedevtools/tldr/linux/pacman-query/"
description: "Manage Arch Linux packages efficiently with Pacman Query. Find package information, dependencies, and file ownership. Free online tool, no registration required."
category: linux
keywords:
  - arch linux package manager
  - pacman query tool
  - linux package manager
  - find package file ownership
  - list installed packages
  - arch linux package dependencies
  - pacman upgrade packages
  - query local package database
  - orphan package removal
  - foreign packages list
features:
  - Query the local package database
  - List explicitly installed packages
  - Find package file ownership
  - Display detailed package information
  - List files owned by a package
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pacman --query

> Arch Linux package manager utility.
> See also: `pacman`.
> More information: <https://manned.org/pacman.8>.

- [Q]uery the local package database and list installed packages and versions:

`pacman -Q`

- List only packages and versions that were [e]xplicitly installed:

`pacman -Qe`

- Find which package [o]wns a file:

`pacman -Qo {{filename}}`

- Display information about an [i]nstalled package:

`pacman -Qi {{package}}`

- Display the [l]ist of files owned by a specific package:

`pacman -Ql {{package}}`

- List orphan packages (installed as [d]ependencies but unrequired ([t]) by any package and print in [q]uiet mode (only package name is displayed)):

`pacman -Qdtq`

- List installed packages foreign ([m]) to the repository database:

`pacman -Qm`

- List packages that can be [u]pgraded:

`pacman -Qu`
