---
title: "Search Gentoo Packages - Find Packages with Eix | Online Free DevTools by Hexmos"
name: eix
path: /freedevtools/tldr/linux/eix
canonical: "https://hexmos.com/freedevtools/tldr/linux/eix/"
description: "Search Gentoo Linux packages efficiently with Eix. Quickly find software, view package descriptions, and manage licenses. Free online tool, no registration required."
category: linux
keywords:
  - gentoo package search
  - linux package manager
  - eix package lookup
  - gentoo eix utility
  - search installed packages
  - find package descriptions
  - gentoo license search
  - eix command line
  - linux package database
  - gentoo software management
features:
  - Search for packages by name and keywords
  - Find installed packages quickly
  - Search package descriptions for specific terms
  - Filter packages by license type
  - Exclude packages based on license criteria
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# eix

> Utilities for searching local Gentoo packages.
> Update local package cache using `eix-update`.
> More information: <https://wiki.gentoo.org/wiki/Eix>.

- Search for a package:

`eix {{query}}`

- Search for installed packages:

`eix --installed {{query}}`

- Search in package descriptions:

`eix --description "{{description}}"`

- Search by package license:

`eix --license {{license}}`

- Exclude results from search:

`eix --not --license {{license}}`
