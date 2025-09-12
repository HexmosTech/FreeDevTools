---
title: "Debman - Read Man Pages Offline | Free DevTools"
name: debman
path: /freedevtools/tldr/linux/debman
canonical: "https://hexmos.com/freedevtools/tldr/linux/debman/"
description: "Read man pages offline with Debman. Access documentation for uninstalled Debian packages easily and quickly. Free online tool, no registration required."
category: linux
keywords:
  - debian package man pages
  - offline man pages reader
  - debian documentation viewer
  - linux man page reader
  - deb file man pages
  - command line man pages
  - debian package manager
  - offline debian documentation
  - access man pages offline
  - read man pages from deb
features:
  - Read man pages from uninstalled Debian packages.
  - Specify package and command to view specific man pages.
  - Specify package version to access specific version documentation.
  - Read man pages directly from .deb files.
  - Supports command-line interface for easy access.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# debman

> Read man pages from uninstalled packages.
> More information: <https://manned.org/debman.1>.

- Read a man page for a command that is provided by a specified [p]ackage:

`debman -p {{package}} {{command}}`

- Specify a [p]ackage version to download:

`debman -p {{package}}={{version}} {{command}}`

- Read a man page in a `.deb` [f]ile:

`debman -f {{path/to/filename.deb}} {{command}}`
