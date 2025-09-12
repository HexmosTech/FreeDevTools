---
title: "Addr2line - Convert Addresses to Line Numbers | Free DevTools"
name: addr2line
path: /freedevtools/tldr/linux/addr2line
canonical: "https://hexmos.com/freedevtools/tldr/linux/addr2line/"
description: "Convert addresses to file names and line numbers with Addr2line.  Debug binaries efficiently by mapping addresses to source code locations. Free online tool, no registration required."
category: linux
keywords:
  - address converter
  - address debugger
  - binary address lookup
  - debug address
  - executable address
  - line number lookup
  - source code mapping
  - function address
  - addr2line command
  - linux debugging
features:
  - Translates memory addresses into source file locations.
  - Displays function names, file names, and line numbers.
  - Supports demangling of C++ function names.
  - Works with various executable file formats.
  - Facilitates debugging and troubleshooting of binary code.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# addr2line

> Convert addresses of a binary into file names and line numbers.
> More information: <https://manned.org/addr2line>.

- Display the filename and line number of the source code from an instruction address of an executable:

`addr2line {{[-e|--exe]}} {{path/to/executable}} {{address}}`

- Display the function name, filename and line number:

`addr2line {{[-e|--exe]}} {{path/to/executable}} {{[-f|--functions]}} {{address}}`

- Demangle the function name for C++ code:

`addr2line {{[-e|--exe]}} {{path/to/executable}} {{[-f|--functions]}} {{[-C|--demangle]}} {{address}}`
