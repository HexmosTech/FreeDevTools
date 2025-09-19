---
title: "Equery - Manage Portage Packages | Online Free DevTools by Hexmos"
name: equery
path: /freedevtools/tldr/linux/equery
canonical: "https://hexmos.com/freedevtools/tldr/linux/equery/"
description: "Manage Portage packages efficiently with equery. Search, list, and inspect dependencies for Gentoo Linux packages. Free online tool, no registration required."
category: linux
keywords:
  - Portage package manager
  - Gentoo package query
  - equery command linux
  - list installed packages
  - check package dependencies
  - view package files
  - Gentoo package management
  - Linux package inspection
  - equery depgraph
  - equery files
features:
  - List all installed Portage packages.
  - Search for packages within the Portage tree and overlays.
  - Display all packages dependent on a specified package.
  - Show packages a given package depends on using a dependency graph.
  - List all files installed by a particular package with a tree view.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# equery

> View information about Portage packages.
> More information: <https://wiki.gentoo.org/wiki/Equery>.

- List all installed packages:

`equery list '*'`

- Search for installed packages in the Portage tree and in overlays:

`equery list -po {{package1 package2 ...}}`

- List all packages that depend on a given package:

`equery depends {{package}}`

- List all packages that a given package depends on:

`equery depgraph {{package}}`

- List all files installed by a package:

`equery files --tree {{package}}`
