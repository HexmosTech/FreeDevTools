---
title: "Port - Package Management on macOS | Online Free DevTools by Hexmos"
name: port
path: /freedevtools/tldr/osx/port
canonical: "https://hexmos.com/freedevtools/tldr/osx/port/"
description: "Manage packages with Port, the macOS package manager. Install, update, and uninstall software from the command line. Free online tool, no registration required."
category: osx
keywords:
- macOS package manager
- osx package management
- port command line
- install macOS packages
- update macOS software
- uninstall macOS software
- MacPorts package control
- macOS application installer
- BSD package manager
- command-line package tools
features:
- Search for available packages in the MacPorts repository.
- Install software packages and their dependencies.
- List all currently installed packages on the system.
- Update the MacPorts installation itself to the latest version.
- Upgrade outdated packages to their newest available releases.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# port

> Package manager for macOS.
> More information: <https://www.macports.org>.

- Search for a package:

`port search {{search_term}}`

- Install a package:

`sudo port install {{package}}`

- List installed packages:

`port installed`

- Update port and fetch the latest list of available packages:

`sudo port selfupdate`

- Upgrade outdated packages:

`sudo port upgrade outdated`

- Remove old versions of installed packages:

`sudo port uninstall inactive`
