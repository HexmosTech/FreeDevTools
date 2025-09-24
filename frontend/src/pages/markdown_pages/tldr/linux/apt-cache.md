---
title: "Query Debian Packages - Manage Apt Packages | Online Free DevTools by Hexmos"
name: apt-cache
path: /freedevtools/tldr/linux/apt-cache
canonical: "https://hexmos.com/freedevtools/tldr/linux/apt-cache/"
description: "Manage Debian and Ubuntu packages with apt-cache. Search, view details, check status, and manage dependencies easily. Free online tool, no registration required."
category: linux
keywords:
  - apt package search
  - apt package management
  - debian package query
  - ubuntu package info
  - linux package manager
  - apt-cache command
  - apt package dependencies
  - linux package details
  - apt policy command
  - debian package installer
features:
  - Search for packages in repositories
  - Display detailed package information
  - Check package installation status and updates
  - Show package dependencies and reverse dependencies
  - Manage and troubleshoot package installations
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# apt-cache

> Debian and Ubuntu package query tool.
> More information: <https://manned.org/apt-cache.8>.

- Search for a package in your current sources:

`apt-cache search {{query}}`

- Show information about a package:

`apt-cache show {{package}}`

- Show whether a package is installed and up to date:

`apt-cache policy {{package}}`

- Show dependencies for a package:

`apt-cache depends {{package}}`

- Show packages that depend on a particular package:

`apt-cache rdepends {{package}}`
