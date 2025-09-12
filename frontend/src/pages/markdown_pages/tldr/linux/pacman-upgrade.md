---
title: "Upgrade Packages - Manage Arch Linux Packages | Free DevTools"
name: pacman-upgrade
path: /freedevtools/tldr/linux/pacman-upgrade
canonical: "https://hexmos.com/freedevtools/tldr/linux/pacman-upgrade/"
description: "Manage packages with Pacman Upgrade. Install, update, and manage software packages on Arch Linux systems with ease. Free online tool, no registration required."
category: linux
keywords:
- arch linux package upgrade
- pacman package manager
- linux package installer
- arch linux update packages
- pacman update command
- linux software management
- pacman force install
- arch linux package overwrite
- pacman skip dependencies
- arch linux package print affected
features:
- Install packages from local files
- Force install packages without confirmation
- Overwrite conflicting files during package installation
- Skip dependency version checks during installation
- Print packages affected by an upgrade
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pacman --upgrade

> Arch Linux package manager utility.
> See also: `pacman`.
> More information: <https://manned.org/pacman.8>.

- Install one or more packages from files:

`sudo pacman -U {{path/to/package1.pkg.tar.zst path/to/package2.pkg.tar.zst ...}}`

- Install a package without prompting:

`sudo pacman -U --noconfirm {{path/to/package.pkg.tar.zst}}`

- Overwrite conflicting files during a package installation:

`sudo pacman -U --overwrite {{path/to/file}} {{path/to/package.pkg.tar.zst}}`

- Install a package, skipping the [d]ependency version checks:

`sudo pacman -Ud {{path/to/package.pkg.tar.zst}}`

- Fetch and [p]rint packages that would be affected by upgrade (does not install any packages):

`pacman -Up {{path/to/package.pkg.tar.zst}}`

- Display [h]elp:

`pacman -Uh`
