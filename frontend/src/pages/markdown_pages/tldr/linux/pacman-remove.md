---
title: "Pacman Remove - Remove Packages on Linux | Online Free DevTools by Hexmos"
name: pacman-remove
path: /freedevtools/tldr/linux/pacman-remove
canonical: "https://hexmos.com/freedevtools/tldr/linux/pacman-remove/"
description: "Remove Linux packages easily with Pacman Remove. Manage dependencies, delete orphan packages, and cascade removals effectively. Free online tool, no registration required."
category: linux
keywords:
- linux package removal
- pacman remove command
- arch linux package manager
- delete linux packages
- pacman dependency removal
- remove orphan packages linux
- arch linux command
- pacman remove recursive
- linux pacman utility
- package management linux
features:
- Recursively remove packages and dependencies
- Force package removal without confirmation
- Remove packages without saving configuration backups
- Delete orphan packages not required by other packages
- Cascade removal to dependent packages
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pacman --remove

> Arch Linux package manager utility.
> See also: `pacman`.
> More information: <https://manned.org/pacman.8>.

- [R]emove a package and its dependencies recur[s]ively:

`sudo pacman -Rs {{package}}`

- [R]emove a package and its dependencies. Also do [n]ot save backups of configuration files:

`sudo pacman -Rsn {{package}}`

- [R]emove a package without prompting:

`sudo pacman -R --noconfirm {{package}}`

- [R]emove orphan packages (installed as [d]ependencies but no[t] required by any package):

`sudo pacman -Rsn $(pacman -Qdtq)`

- [R]emove a package and [c]ascade that to all packages that depend on it:

`sudo pacman -Rc {{package}}`

- List and [p]rint packages that would be affected (does not [R]emove any packages):

`pacman -Rp {{package}}`

- Display [h]elp:

`pacman -Rh`
