---
title: "Extract Package Data - Control Alpm Databases with expac | Online Free DevTools by Hexmos"
name: expac
path: /freedevtools/tldr/linux/expac
canonical: "https://hexmos.com/freedevtools/tldr/linux/expac/"
description: "Extract package data with expac. Control alpm databases and manage pacman utilities effortlessly. Free online tool, no registration required."
category: linux
keywords:
- alpm database extraction
- pacman package manager
- linux package analysis
- expac package dependencies
- software package metadata
- alpm query tool
- package size calculation
- dependency tree visualization
- arch linux package info
- pacman database inspection
features:
- Extract package dependencies
- List optional package dependencies
- Calculate package download sizes
- Identify packages marked for upgrade
- Display explicitly installed packages
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# expac

> A data extraction tool for alpm databases, offering printf-like flexibility for pacman-based utilities.
> See also: `pacman`.
> More information: <https://github.com/falconindy/expac>.

- List the dependencies of a package:

`expac {{[-S|--sync]}} '%D' {{package}}`

- List the optional dependencies of a package:

`expac {{[-S|--sync]}} "%o" {{package}}`

- List the download size of packages in MiB:

`expac {{[-S|--sync]}} {{[-H|--humansize]}} M '%k\t%n' {{package1 package2 ...}}`

- List packages marked for upgrade with their download size:

`expac {{[-S|--sync]}} {{[-H|--humansize]}} M '%k\t%n' $(pacman -Qqu) | sort {{[-sh|--sort --human-numeric-sort]}}`

- List explicitly-installed packages with their optional dependencies:

`expac {{[-d|--delim]}} '\n\n' {{[-l|--listdelim]}} '\n\t' {{[-Q|--query]}} '%n\n\t%O' $(pacman -Qeq)`
