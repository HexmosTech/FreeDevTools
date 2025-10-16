---
title: "Pacman Database - Manage Arch Packages | Online Free DevTools by Hexmos"
name: pacman-database
path: "/freedevtools/tldr/linux/pacman-database/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/pacman-database/"
description: "Manage Arch Linux packages efficiently with Pacman Database.  Control package attributes, check dependencies, and ensure database synchronization. Free online tool, no registration required."
category: linux
keywords:
  - pacman database management
  - arch linux package control
  - linux package dependency check
  - pacman database synchronization
  - pacman package attributes
  - linux package manager commands
  - pacman database manipulation
  - arch linux package installation
  - pacman command line tool
  - linux system administration
features:
  - Mark packages as implicitly or explicitly installed
  - Check for complete package dependency installation
  - Verify database synchronization for downloadable package dependencies
  - Operate in quiet mode for concise error reporting
  - Modify attributes of installed Arch Linux packages
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pacman --database

> Operate on the Arch Linux package database.
> Modify certain attributes of the installed packages.
> See also: `pacman`.
> More information: <https://manned.org/pacman.8>.

- Mark a package as implicitly installed:

`sudo pacman -D --asdeps {{package}}`

- Mark a package as explicitly installed:

`sudo pacman -D --asexplicit {{package}}`

- Chec[k] that all the package dependencies are installed:

`pacman -Dk`

- Chec[k] the sync [D]atabase to ensure all specified dependencies of downloadable packages are available:

`pacman -Dkk`

- Chec[k] and display in [q]uiet mode (only error messages are displayed):

`pacman -Dkq`

- Display [h]elp:

`pacman -Dh`
