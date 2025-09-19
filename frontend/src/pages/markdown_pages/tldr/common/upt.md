---
title: "Manage Packages - Upt Package Manager | Online Free DevTools by Hexmos"
name: upt
path: /freedevtools/tldr/common/upt
canonical: "https://hexmos.com/freedevtools/tldr/common/upt/"
description: "Manage packages easily with Upt Package Manager, a unified interface for various operating systems. Install, update, and remove packages effortlessly. Free online tool, no registration required."
category: common
keywords:
- package manager
- upt package manager
- linux package manager
- macos package manager
- windows package manager
- freebsd package manager
- haiku package manager
- apt package manager
- dnf package manager
- cross platform package management
features:
- Install packages across multiple operating systems.
- Update package lists and installed packages.
- Search for packages in available repositories.
- Show detailed information about specific packages.
- Remove or uninstall packages from the system.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# upt

> Unified interface for managing packages across various operating systems, like Windows, many Linux distributions, macOS, FreeBSD and even Haiku.
> It requires the native OS package manager to be installed.
> See also: `flatpak`, `brew`, `scoop`, `apt`, `dnf`.
> More information: <https://github.com/sigoden/upt>.

- Update the list of available packages:

`upt update`

- Search for a given package:

`upt search {{search_term}}`

- Show information for a package:

`upt info {{package}}`

- Install a given package:

`upt install {{package}}`

- Remove a given package:

`upt {{remove|uninstall}} {{package}}`

- Upgrade all installed packages:

`upt upgrade`

- Upgrade a given package:

`upt upgrade {{package}}`

- List installed packages:

`upt list`
