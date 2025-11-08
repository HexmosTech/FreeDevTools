---
title: "Apt-File Search - Find Files in APT Packages | Online Free DevTools by Hexmos"
name: apt-file
path: "/freedevtools/tldr/linux/apt-file/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/apt-file/"
description: "Search for files within APT packages using apt-file.  Find specific files, list package contents, and use regular expressions for advanced searches. Free online tool, no registration required."
category: linux
keywords:
  - apt package file search
  - linux file finder
  - apt-file command
  - linux package contents
  - find files in apt
  - apt package manager
  - debian package search
  - ubuntu file location
  - search apt packages
  - linux system administration
features:
  - Search for files within installed and uninstalled APT packages.
  - List the contents of a specific APT package.
  - Utilize regular expressions for advanced file searches.
  - Update the APT package database for accurate results.
  - Efficiently locate files based on file name or path.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# apt-file

> Search for files in `apt` packages, including ones not yet installed.
> More information: <https://manned.org/apt-file.1>.

- Update the metadata database:

`sudo apt update`

- Search for packages that contain the specified file or path:

`apt-file {{search|find}} {{path/to/file}}`

- List the contents of a specific package:

`apt-file {{show|list}} {{package}}`

- Search for packages that match the `regex`:

`apt-file {{search|find}} {{[-x|--regexp]}} {{regex}}`
