---
title: "Control Pacman Files - Manage Arch Linux Packages | Online Free DevTools by Hexmos"
name: pacman-files
path: /freedevtools/tldr/linux/pacman-files
canonical: "https://hexmos.com/freedevtools/tldr/linux/pacman-files/"
description: "Control package files with Pacman Files, the Arch Linux package manager utility. Search for files within packages, and update package databases. Free online tool, no registration required."
category: linux
keywords:
  - pacman file search
  - arch linux package manager
  - package file lookup
  - linux file database
  - pacman database update
  - pacman package query
  - arch package file location
  - pacman file regex search
  - linux package details
  - arch linux command line
features:
  - Update the Arch Linux package database
  - Find the package owning a specific file
  - Search for files using regular expressions
  - List package names for specific files
  - List all files owned by a specific package
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pacman --files

> Arch Linux package manager utility.
> See also: `pacman`, `pkgfile`.
> More information: <https://manned.org/pacman.8>.

- Update the package database:

`sudo pacman -Fy`

- Find the package that owns a specific [F]ile:

`pacman -F {{filename}}`

- Find the package that owns a specific [F]ile, using a `rege[x]`:

`pacman -Fx '{{regex}}'`

- List only the package names:

`pacman -Fq {{filename}}`

- [l]ist the [F]iles owned by a specific package:

`pacman -Fl {{package}}`

- Display [h]elp:

`pacman -Fh`
