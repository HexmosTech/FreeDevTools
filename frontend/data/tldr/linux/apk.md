---
title: "Control Packages - APK Package Manager | Online Free DevTools by Hexmos"
name: apk
path: "/freedevtools/tldr/linux/apk/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/apk/"
description: "Control packages on Alpine Linux with APK Package Manager. Easily update, install, remove and search packages on your system. Free online tool, no registration required."
category: linux
keywords:
  - alpine linux package manager
  - apk package management
  - apk install package
  - apk remove package
  - apk search package
  - linux package control
  - apk update repository
  - alpine package keeper
  - apk fix package
  - apk package information
features:
  - Update package repository indexes
  - Install new packages on Alpine Linux
  - Remove existing packages from system
  - Search for packages by name or description
  - Display detailed package information
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# apk

> Alpine Linux package management tool.
> More information: <https://wiki.alpinelinux.org/wiki/Alpine_Package_Keeper>.

- Update repository indexes and upgrade all packages:

`apk upgrade {{[-U|--update-cache]}}`

- Only update repository indexes:

`apk update`

- Install a new package:

`apk add {{package}}`

- Remove a package:

`apk del {{package}}`

- Repair/Reinstall a package without modifying main dependencies:

`apk fix {{package}}`

- Search for packages with a keyword in their name and list results with descriptions:

`apk search {{[-v|--verbose]}} {{keyword}}`

- Search for packages with a keyword in their description:

`apk search {{[-d|--description]}} {{keyword}}`

- Display information about a specific package:

`apk info {{package}}`
