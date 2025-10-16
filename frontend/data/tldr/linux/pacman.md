---
title: "Pacman Package Manager - Manage Arch Linux Packages | Online Free DevTools by Hexmos"
name: pacman
path: "/freedevtools/tldr/linux/pacman/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/pacman/"
description: "Manage Arch Linux packages efficiently with Pacman. Install, remove, update, and query packages using simple commands. Free online tool, no registration required."
category: linux
keywords:
  - pacman package manager
  - arch linux pacman
  - linux package management
  - pacman install package
  - pacman remove package
  - pacman update packages
  - pacman search package
  - pacman query package
  - pacman dependency management
  - linux command line tools
features:
  - Install new packages from the Arch Linux repositories.
  - Remove packages and their dependencies.
  - Update all installed packages to their latest versions.
  - Search for packages using keywords or regular expressions.
  - Manage package dependencies and resolve conflicts.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pacman

> Arch Linux package manager utility.
> See also: `pacman-sync`, `pacman-remove`, `pacman-query`, `pacman-upgrade`, `pacman-files`, `pacman-database`, `pacman-deptest`, `pacman-key`, `pacman-mirrors`.
> For equivalent commands in other package managers, see <https://wiki.archlinux.org/title/Pacman/Rosetta>.
> More information: <https://manned.org/pacman.8>.

- [S]ynchronize and update all packages:

`sudo pacman -Syu`

- Install a new package:

`sudo pacman -S {{package}}`

- [R]emove a package and its dependencies:

`sudo pacman -Rs {{package}}`

- Search ([s]) the package database for a `regex` or keyword:

`pacman -Ss "{{search_pattern}}"`

- Search the database for packages containing a specific [F]ile:

`pacman -F "{{file_name}}"`

- List only the [e]xplicitly installed packages and versions:

`pacman -Qe`

- List orphan packages (installed as [d]ependencies but not actually required by any package):

`pacman -Qtdq`

- Empty the entire `pacman` cache:

`sudo pacman -Scc`
