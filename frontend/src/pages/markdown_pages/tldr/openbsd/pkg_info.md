---
title: "List Packages - View OpenBSD Packages with pkg_info | Online Free DevTools by Hexmos"
name: pkg_info
path: /freedevtools/tldr/openbsd/pkg_info
canonical: "https://hexmos.com/freedevtools/tldr/openbsd/pkg_info/"
description: "List packages with pkg_info. View installed software, search by name, and generate package lists. Free online tool, no registration required."
category: openbsd
keywords:
- openbsd package listing
- openbsd software information
- pkg_info package search
- list installed packages openbsd
- openbsd package details
- view package information
- openbsd package manager
- software inventory openbsd
- package name lookup
- openbsd pkg_add list
features:
- Display detailed information about installed packages
- Search for packages by name or keyword
- Generate a list of installed packages compatible with pkg_add
- Output machine-readable package information
- Show package dependencies and version numbers
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pkg_info

> View information about packages in OpenBSD.
> See also: `pkg_add`, `pkg_delete`.
> More information: <https://man.openbsd.org/pkg_info>.

- Search for a package using the package name:

`pkg_info -Q {{package}}`

- Output a list of installed packages for use with `pkg_add -l`:

`pkg_info -mz`
