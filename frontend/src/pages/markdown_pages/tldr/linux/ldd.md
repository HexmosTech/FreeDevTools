---
title: "Display Shared Library Dependencies with ldd | Free DevTools"
name: ldd
path: /freedevtools/tldr/linux/ldd
canonical: "https://hexmos.com/freedevtools/tldr/linux/ldd/"
description: "Display shared library dependencies with ldd. Uncover hidden dependencies and resolve issues. Analyze binaries effortlessly. Free online tool, no registration required."
category: linux
keywords:
  - shared library dependencies
  - ldd dependency viewer
  - binary dependency analyzer
  - linux dependency checker
  - executable dependencies
  - shared object dependencies
  - dynamic linking analysis
  - elf dependency lister
  - library dependency explorer
  - ldd command options
features:
  - Display shared library dependencies
  - Identify missing dependencies
  - Perform data relocations analysis
  - Show unused direct dependencies
  - Report function relocations details
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ldd

> Display shared library dependencies of a binary.
> Do not use on an untrusted binary, use objdump for that instead.
> More information: <https://manned.org/ldd>.

- Display shared library dependencies of a binary:

`ldd {{path/to/binary}}`

- Display all information about dependencies:

`ldd {{[-v|--verbose]}} {{path/to/binary}}`

- Display unused direct dependencies:

`ldd {{[-u|--unused]}} {{path/to/binary}}`

- Report missing data objects and perform data relocations:

`ldd {{[-d|--data-relocs]}} {{path/to/binary}}`

- Report missing data objects and functions, and perform relocations for both:

`ldd {{[-r|--function-relocs]}} {{path/to/binary}}`
