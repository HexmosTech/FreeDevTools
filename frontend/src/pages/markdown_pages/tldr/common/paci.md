---
title: "Manage Packages - Paci Package Manager for Bash | Free DevTools"
name: paci
path: /freedevtools/tldr/common/paci
canonical: "https://hexmos.com/freedevtools/tldr/common/paci/"
description: "Manage Bash script packages with Paci Package Manager. Install, update, and search packages effortlessly with this free online tool, no registration required."
category: common
keywords:
- Bash package manager
- Paci package management
- Linux package installer
- Command-line package manager
- Bash script dependencies
- Package version control
- Paci configuration tool
- Software package search
- Package update manager
- Shell script management
features:
- Install packages with a single command
- Update existing packages to the latest versions
- Search for available packages in repositories
- Refresh the package list for up-to-date information
- Configure Paci behavior to suit your needs
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# paci

> A package manager for Bash scripts.
> More information: <https://github.com/tradebyte/paci>.

- Update the list of available packages and versions (it's recommended to run this before other `paci` commands):

`paci refresh`

- Configure its behaviour:

`paci configure`

- Search for a given package:

`paci search {{package}}`

- Install a package:

`paci install {{package}}`

- Update a package:

`paci update {{package}}`
