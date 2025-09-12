---
title: "dpkg-deb - Manage Debian Packages | Free DevTools"
name: dpkg-deb
path: /freedevtools/tldr/linux/dpkg-deb
canonical: "https://hexmos.com/freedevtools/tldr/linux/dpkg-deb/"
description: "Manage Debian packages with dpkg-deb.  Create, extract, and inspect .deb files easily. Free online tool, no registration required."
category: linux
keywords:
  - deb package manager
  - deb package creation
  - deb package extraction
  - deb package information
  - linux package manager
  - dpkg deb commands
  - deb file manipulation
  - linux debian package
  - debian package control
  - package management linux
features:
  - Extract contents of Debian packages
  - Create Debian packages from directories
  - Inspect metadata of Debian packages
  - List files within a Debian package
  - Display package name and version
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# dpkg-deb

> Pack, unpack and provide information about Debian archives.
> More information: <https://manned.org/dpkg-deb>.

- Display information about a package:

`dpkg-deb {{[-I|--info]}} {{path/to/file.deb}}`

- Display the package's name and version on one line:

`dpkg-deb {{[-W|--show]}} {{path/to/file.deb}}`

- List the package's contents:

`dpkg-deb {{[-c|--contents]}} {{path/to/file.deb}}`

- Extract package's contents into a directory:

`dpkg-deb {{[-x|--extract]}} {{path/to/file.deb}} {{path/to/directory}}`

- Create a package from a specified directory:

`dpkg-deb {{[-b|--build]}} {{path/to/directory}}`
