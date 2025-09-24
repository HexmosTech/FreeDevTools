---
title: "Manage Packages with dpkg - Debian Package Control | Online Free DevTools by Hexmos"
name: dpkg
path: /freedevtools/tldr/linux/dpkg
canonical: "https://hexmos.com/freedevtools/tldr/linux/dpkg/"
description: "Control Debian packages easily with dpkg. Install, remove, list, and manage packages via command line. Free online tool, no registration required."
category: linux
keywords:
  - debian package manager
  - dpkg commands
  - linux package management
  - dpkg install
  - dpkg remove
  - dpkg list
  - dpkg search
  - package installation linux
  - debian package control
  - linux package removal
features:
  - Install Debian packages from .deb files.
  - Remove installed Debian packages.
  - List installed Debian packages and their details.
  - Search for files belonging to specific packages.
  - Completely purge packages including configuration files.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# dpkg

> Debian package manager.
> Some subcommands such as `deb` have their own usage documentation.
> For equivalent commands in other package managers, see <https://wiki.archlinux.org/title/Pacman/Rosetta>.
> More information: <https://manned.org/dpkg>.

- Install a package:

`dpkg {{[-i|--install]}} {{path/to/file.deb}}`

- Remove a package:

`dpkg {{[-r|--remove]}} {{package}}`

- List installed packages:

`dpkg {{[-l|--list]}} {{pattern}}`

- List a package's contents:

`dpkg {{[-L|--listfiles]}} {{package}}`

- List contents of a local package file:

`dpkg {{[-c|--contents]}} {{path/to/file.deb}}`

- Find out which package owns a file:

`dpkg {{[-S|--search]}} {{path/to/file}}`

- Purge an installed or already removed package, including configuration:

`dpkg {{[-P|--purge]}} {{package}}`
