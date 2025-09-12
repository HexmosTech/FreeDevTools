---
title: "Size - Display Binary File Sections | Free DevTools"
name: size
path: /freedevtools/tldr/linux/size
canonical: "https://hexmos.com/freedevtools/tldr/linux/size/"
description: "Display binary file section sizes with Size. Analyze object and executable files to determine memory layout. Free online tool, no registration required."
category: linux
keywords:
  - binary size analyzer
  - executable size viewer
  - object file size
  - section size report
  - linux size command
  - macos size command
  - elf size analysis
  - coff size examination
  - binary file inspection
  - program size breakdown
features:
  - Display section sizes in object files
  - Analyze executable memory layout
  - Output sizes in octal, decimal, or hexadecimal
  - Provide a breakdown of file sections
  - Support various binary formats
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# size

> Display the sizes of sections inside binary files.
> More information: <https://sourceware.org/binutils/docs/binutils/size.html>.

- Display the size of sections in a given object or executable file:

`size {{path/to/file}}`

- Display the size of sections in a given object or executable file in [o]ctal:

`size {{[-o|--radix=8]}} {{path/to/file}}`

- Display the size of sections in a given object or executable file in [d]ecimal:

`size {{[-d|--radix=10]}} {{path/to/file}}`

- Display the size of sections in a given object or executable file in he[x]adecimal:

`size {{[-x|--radix=16]}} {{path/to/file}}`
