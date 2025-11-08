---
title: "dpkg-query - Display Package Information | Online Free DevTools by Hexmos"
name: dpkg-query
path: "/freedevtools/tldr/linux/dpkg-query/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/dpkg-query/"
description: "Display package information easily with dpkg-query. List installed packages, find files, and view status details using command line. Free online tool, no registration required."
category: linux
keywords:
  - dpkg-query command
  - package listing linux
  - linux package search
  - dpkg package information
  - installed package details
  - package file listing
  - debian package status
  - debian package query
  - package management linux
  - linux package manager
features:
  - List all installed packages
  - List installed packages matching a pattern
  - List all files installed by a package
  - Show information about a package
  - Search for packages that own files matching a pattern
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# dpkg-query

> Display information about installed packages.
> More information: <https://manned.org/dpkg-query.1>.

- List all installed packages:

`dpkg-query {{[-l|--list]}}`

- List installed packages matching a pattern:

`dpkg-query {{[-l|--list]}} '{{libc6*}}'`

- List all files installed by a package:

`dpkg-query {{[-L|--listfiles]}} {{libc6}}`

- Show information about a package:

`dpkg-query {{[-s|--status]}} {{libc6}}`

- Search for packages that own files matching a pattern:

`dpkg-query {{[-S|--search]}} {{/etc/ld.so.conf.d}}`
