---
title: "Read ELF Files - Display ELF Data | Online Free DevTools by Hexmos"
name: eu-readelf
path: /freedevtools/tldr/linux/eu-readelf
canonical: "https://hexmos.com/freedevtools/tldr/linux/eu-readelf/"
description: "Display ELF data with eu-readelf. Analyze ELF files, extract information, and inspect notes. Free online tool, no registration required."
category: linux
keywords:
- ELF file analyzer
- Linux ELF reader
- ELF data extractor
- ELF file information
- eu-readelf command
- Linux binary analysis
- ELF note segment reader
- Linux executable format
- Object file inspection
- Shared library analyzer
features:
- Display all extractable information from ELF files
- Extract and analyze NOTE segments/sections
- Read ELF file headers
- Inspect program headers
- Analyze section headers
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# eu-readelf

> Display information about ELF files.
> More information: <https://manned.org/eu-readelf>.

- Display all extractable information contained in the ELF file:

`eu-readelf {{[-a|--all]}} {{path/to/file}}`

- Display the contents of all NOTE segments/sections, or of a particular segment/section:

`eu-readelf {{[-n|--notes]}} {{.note.ABI-tag}} {{path/to/file}}`
