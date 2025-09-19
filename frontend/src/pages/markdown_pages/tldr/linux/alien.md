---
title: "Alien - Convert Package Formats | Online Free DevTools by Hexmos"
name: alien
path: /freedevtools/tldr/linux/alien
canonical: "https://hexmos.com/freedevtools/tldr/linux/alien/"
description: "Convert installation packages between Debian (.deb), Red Hat (.rpm), and Slackware (.tgz) formats with Alien.  Manage Linux software packages easily. Free online tool, no registration required."
category: linux
keywords:
  - deb package converter
  - rpm package converter
  - tgz package converter
  - linux package conversion
  - alien package manager
  - debian package management
  - redhat package management
  - slackware package management
  - cross-distribution package conversion
  - linux software installation
features:
  - Converts .deb packages to .rpm, .tgz, and vice-versa.
  - Enables installation of packages from different distributions.
  - Supports Debian, Red Hat, and Slackware package formats.
  - Offers command-line interface for easy automation.
  - Simplifies cross-distribution software deployment.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# alien

> Convert different installation packages to other formats.
> See also: `debtap` for `.deb` conversion on Arch Linux.
> More information: <https://manned.org/alien>.

- Convert a specific installation file to Debian format (`.deb` extension):

`sudo alien {{[-d|--to-deb]}} {{path/to/file}}`

- Convert a specific installation file to Red Hat format (`.rpm` extension):

`sudo alien {{[-r|--to-rpm]}} {{path/to/file}}`

- Convert a specific installation file to a Slackware installation file (`.tgz` extension):

`sudo alien {{[-t|--to-tgz]}} {{path/to/file}}`

- Convert a specific installation file to Debian format and install on the system:

`sudo alien {{[-d|--to-deb]}} {{[-i|--install]}} {{path/to/file}}`
