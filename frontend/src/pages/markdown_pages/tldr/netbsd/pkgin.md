---
title: pkgin
name: pkgin
path: /freedevtools/tldr/netbsd/pkgin
canonical: "https://hexmos.com/freedevtools/tldr/netbsd/pkgin/"
description: Manage pkgsrc binary packages on NetBSD.
category: netbsd
keywords:
- package management on NetBSD
- installing software packages
- removing software packages
- upgrading software packages
- searching for packages
- listing installed software
- resolving package dependencies
- automated package removal
- binary package management
- NetBSD system administration
features:
- install software packages
- remove software packages and dependencies
- upgrade all installed packages
- search for specific packages
- remove orphaned dependencies
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pkgin

> Manage `pkgsrc` binary packages on NetBSD.
> More information: <https://pkgin.net/#usage>.

- Install a package:

`pkgin install {{package}}`

- Remove a package and its dependencies:

`pkgin remove {{package}}`

- Upgrade all packages:

`pkgin full-upgrade`

- Search for a package:

`pkgin search {{keyword}}`

- List installed packages:

`pkgin list`

- Remove unneeded dependencies:

`pkgin autoremove`
