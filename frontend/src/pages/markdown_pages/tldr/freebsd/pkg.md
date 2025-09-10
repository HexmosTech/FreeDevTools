---
title: pkg
name: pkg
path: /freedevtools/tldr/freebsd/pkg
canonical: "https://hexmos.com/freedevtools/tldr/freebsd/pkg/"
description: FreeBSD package manager.
category: freebsd
keywords:
- package management in FreeBSD
- installing software packages
- removing software packages
- updating software packages
- searching for available packages
- displaying package information
- managing software dependencies
- automating package removal
- system administration tasks
- software distribution management
features:
- install new software packages
- remove installed software packages
- upgrade all installed packages
- search for packages by keyword
- list all currently installed packages
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
