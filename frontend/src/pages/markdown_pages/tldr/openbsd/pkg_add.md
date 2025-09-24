---
title: "Install Packages - Update Software in OpenBSD | Online Free DevTools by Hexmos"
name: pkg_add
path: /freedevtools/tldr/openbsd/pkg_add
canonical: "https://hexmos.com/freedevtools/tldr/openbsd/pkg_add/"
description: "Install Packages with pkg_add in OpenBSD. Update software and dependencies easily. Free online tool, no registration required."
category: openbsd
keywords:
- openbsd package installer
- openbsd software update
- pkg_add command
- openbsd package management
- install openbsd packages
- update openbsd software
- openbsd dependency resolution
- install dependencies openbsd
- openbsd command line install
- install packages from file
features:
- Update all installed packages and dependencies.
- Install a specified package from the repository.
- Install packages from a local file.
- Resolve package dependencies automatically.
- Manage software installations on OpenBSD.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pkg_add

> Install/update packages in OpenBSD.
> See also: `pkg_info`, `pkg_delete`.
> More information: <https://man.openbsd.org/pkg_add>.

- Update all packages, including dependencies:

`pkg_add -u`

- Install a new package:

`pkg_add {{package}}`

- Install packages from the raw output of `pkg_info`:

`pkg_add -l {{path/to/file}}`
