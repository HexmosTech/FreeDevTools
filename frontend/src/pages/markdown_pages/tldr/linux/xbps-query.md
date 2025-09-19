---
title: "Query XBPS Packages - Manage Packages with xbps-query | Online Free DevTools by Hexmos"
name: xbps-query
path: /freedevtools/tldr/linux/xbps-query
canonical: "https://hexmos.com/freedevtools/tldr/linux/xbps-query/"
description: "Manage XBPS packages efficiently with xbps-query. Search, list, and show information about installed and remote packages. Free online tool, no registration required."
category: linux
keywords:
  - xbps package query
  - linux package manager
  - xbps package search
  - xbps package list
  - xbps repository query
  - xbps package information
  - xbps-query command
  - linux package management
  - xbps installed packages
  - xbps manual packages
features:
  - Search for packages in remote repositories using regex or keywords.
  - Display detailed information about installed packages.
  - Retrieve information on packages from remote repositories.
  - List all packages registered in the package database.
  - List explicitly installed packages (excluding dependencies).
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# xbps-query

> XBPS utility to query for package and repository information.
> See also: `xbps`.
> More information: <https://manned.org/xbps-query.1>.

- Search for a package in remote repositories using a `regex` or a keyword (if `--regex` is omitted):

`xbps-query {{[-s|--search]}} {{regex|keyword}} --repository --regex`

- Show information about an installed package:

`xbps-query {{[-S|--show]}} {{package}}`

- Show information about a package in remote repositories:

`xbps-query {{[-S|--show]}} {{package}} --repository`

- List packages registered in the package database:

`xbps-query {{[-l|--list-pkgs]}}`

- List explicitly installed packages (i.e. not automatically installed as dependencies):

`xbps-query {{[-m|--list-manual-pkgs]}}`
