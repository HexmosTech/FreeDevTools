---
title: "Readelf - Display ELF Information | Online Free DevTools by Hexmos"
name: readelf
path: /freedevtools/tldr/linux/readelf
canonical: "https://hexmos.com/freedevtools/tldr/linux/readelf/"
description: "Display ELF information with Readelf, inspect ELF file structure, and analyze binary details. Free online tool, no registration required."
category: linux
keywords:
- ELF information analyzer
- Linux ELF reader
- Binary file inspector
- ELF header display
- Section header viewer
- Symbol table extractor
- ELF file analysis
- Linux binary analysis
- Readelf command
- ELF format parser
features:
- Display all information about ELF files
- Show ELF headers
- Extract symbol table entries
- Output ELF file header details
- Display ELF section headers
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# readelf

> Display information about ELF files.
> More information: <https://manned.org/readelf.1>.

- Display all information about the ELF file:

`readelf -all {{path/to/binary}}`

- Display all the headers present in the ELF file:

`readelf --headers {{path/to/binary}}`

- Display the entries in symbol table section of the ELF file, if it has one:

`readelf --symbols {{path/to/binary}}`

- Display ELF header information:

`readelf --file-header {{path/to/binary}}`

- Display ELF section header information:

`readelf --section-headers {{path/to/binary}}`
