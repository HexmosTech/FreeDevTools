---
title: "Lipo Create Universal Binaries - Manage Mach-O | Online Free DevTools by Hexmos"
name: lipo
path: /freedevtools/tldr/osx/lipo
canonical: "https://hexmos.com/freedevtools/tldr/osx/lipo/"
description: "Create universal binaries with Lipo.  Manage Mach-O architecture slices and combine binaries. Free online tool, no registration required."
category: osx
keywords:
- mach-o universal binary
- lipo binary creator
- osx binary manager
- combine architectures macos
- fat binary utility
- arm64 binary tool
- x86_64 binary tool
- apple silicon binary
- lipo command line
- architecture extractor
features:
- Create universal binaries from multiple architectures
- List architectures within a universal binary
- Display detailed information about Mach-O files
- Extract specific architectures from universal binaries
- Thin universal binaries for single architecture deployment
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# lipo

> Handle Mach-O Universal Binaries.
> More information: <https://keith.github.io/xcode-man-pages/lipo.1.html>.

- Create a universal file from two single-architecture files:

`lipo {{path/to/binary_file.x86_64}} {{path/to/binary_file.arm64e}} -create -output {{path/to/binary_file}}`

- List all architectures contained in a universal file:

`lipo {{path/to/binary_file}} -archs`

- Display detailed information about a universal file:

`lipo {{path/to/binary_file}} -detailed_info`

- Extract a single-architecture file from a universal file:

`lipo {{path/to/binary_file}} -thin {{arm64e}} -output {{path/to/binary_file.arm64e}}`
