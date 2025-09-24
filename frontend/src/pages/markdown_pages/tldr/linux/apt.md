---
title: "Apt Package Manager - Manage Debian Packages | Online Free DevTools by Hexmos"
name: apt
path: /freedevtools/tldr/linux/apt
canonical: "https://hexmos.com/freedevtools/tldr/linux/apt/"
description: "Manage Debian packages efficiently with Apt Package Manager.  Update, install, remove, and upgrade packages easily using simple commands. Free online tool, no registration required."
category: linux
keywords:
  - Debian package manager
  - apt package management
  - linux package installation
  - apt update command
  - apt install command
  - apt remove command
  - apt upgrade command
  - apt search command
  - apt show command
  - Debian software management
features:
  - Update package lists for the latest versions
  - Install new packages or upgrade existing ones
  - Remove unwanted packages, optionally purging configuration files
  - Search for packages by name or description
  - Display detailed information about a specific package
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# apt

> Package manager for Debian-based distributions.
> Intended as a user-friendly alternative to `apt-get` for interactive use.
> For equivalent commands in other package managers, see <https://wiki.archlinux.org/title/Pacman/Rosetta>.
> More information: <https://manned.org/apt.8>.

- Update the list of available packages and versions (recommended before running other `apt` commands):

`sudo apt update`

- Search packages by name or description:

`apt search {{package}}`

- Search packages by name only (supports wildcards like `*`):

`apt list {{package}}`

- Show detailed information about a package:

`apt show {{package}}`

- Install a package, or update it to the latest version:

`sudo apt install {{package}}`

- Remove a package (use `purge` instead to also remove configuration files):

`sudo apt remove {{package}}`

- Upgrade all installed packages to their latest versions:

`sudo apt upgrade`

- List all installed packages:

`apt list {{[-i|--installed]}}`
