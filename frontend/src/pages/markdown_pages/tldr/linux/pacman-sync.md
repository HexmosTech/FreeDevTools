---
title: "Pacman Sync - Manage Arch Linux Packages | Online Free DevTools by Hexmos"
name: pacman-sync
path: /freedevtools/tldr/linux/pacman-sync
canonical: "https://hexmos.com/freedevtools/tldr/linux/pacman-sync/"
description: "Manage Arch Linux packages efficiently with Pacman Sync. Update, install, and search for packages with ease on Arch Linux. Free online tool, no registration required."
category: linux
keywords:
  - arch linux package manager
  - pacman package sync
  - arch linux pacman update
  - pacman install package
  - pacman search packages
  - linux package management
  - pacman overwrite files
  - pacman clean cache
  - arch linux pacman version
  - pacman remove packages
features:
  - Install packages using pacman
  - Synchronize and update package databases
  - Search package databases for specific terms
  - Display detailed information about packages
  - Clean package cache and remove unused repositories
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pacman --sync

> Arch Linux package manager utility.
> See also: `pacman`.
> More information: <https://manned.org/pacman.8>.

- Install a new package:

`sudo pacman -S {{package}}`

- [S]ynchronize and refresh ([y]) the package database along with a sys[u]pgrade (add `--downloadonly` to only download the packages and not update them):

`sudo pacman -Syu`

- Update and [u]pgrade all packages and install a new one without prompting:

`sudo pacman -Syu --noconfirm {{package}}`

- [s]earch the package database for a `regex` or keyword:

`pacman -Ss "{{search_pattern}}"`

- Display [i]nformation about a package:

`pacman -Si {{package}}`

- Overwrite conflicting files during a package update:

`sudo pacman -Syu --overwrite {{path/to/file}}`

- Remove not installed packages and unused repositories from the cache (use the flags `Scc` to [c]lean all packages):

`sudo pacman -Sc`

- Specify the package version that should be installed:

`sudo pacman -S {{package}}={{version}}`
