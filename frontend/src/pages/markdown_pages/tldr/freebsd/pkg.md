---
title: "Package Manager - Manage FreeBSD Packages | Online Free DevTools by Hexmos"
name: pkg
path: /freedevtools/tldr/freebsd/pkg
canonical: "https://hexmos.com/freedevtools/tldr/freebsd/pkg/"
description: "Manage software packages with pkg, the FreeBSD package manager. Easily install, remove, and update software. Free online resource, no registration required."
category: freebsd
keywords:
  - FreeBSD package management
  - pkg install FreeBSD
  - software package installer
  - package removal FreeBSD
  - FreeBSD package update
  - pkg search command
  - system administration FreeBSD
  - dependency management
  - software deployment FreeBSD
  - binary package manager
features:
  - Install new software packages from repositories
  - Remove installed software packages and dependencies
  - Upgrade all installed packages to the latest versions
  - Search for packages by name or keyword
  - Automatically remove orphaned dependencies
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pkg

> FreeBSD package manager.
> More information: <https://man.freebsd.org/cgi/man.cgi?pkg>.

- Install a new package:

`pkg install {{package}}`

- Delete a package:

`pkg delete {{package}}`

- Upgrade all packages:

`pkg upgrade`

- Search for a package:

`pkg search {{keyword}}`

- List installed packages:

`pkg info`

- Remove unneeded dependencies:

`pkg autoremove`
