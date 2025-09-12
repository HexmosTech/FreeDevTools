---
title: "Analyze Binary Files - Inspect with Rabin2 | Free DevTools"
name: rabin2
path: /freedevtools/tldr/common/rabin2
canonical: "https://hexmos.com/freedevtools/tldr/common/rabin2/"
description: "Analyze binary files with Rabin2, a powerful tool for extracting information such as symbols, sections, and linked libraries. Free online tool, no registration required."
category: common
keywords:
- ELF analysis
- PE file inspection
- Mach-O dissection
- Java CLASS examination
- binary information extraction
- radare2 binary analyzer
- linked library identification
- symbol table analysis
- executable file inspector
- malware analysis tool
features:
- Extract binary file metadata like architecture and entry point
- List all linked libraries required by the binary
- Dump symbol tables to identify functions and variables
- Extract strings embedded within the binary file
- Output analysis results in JSON format
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# rabin2

> Get information about binary files (ELF, PE, Java CLASS, Mach-O) - symbols, sections, linked libraries, etc.
> Comes bundled with `radare2`.
> More information: <https://manned.org/rabin2>.

- Display general information about a binary (architecture, type, endianness):

`rabin2 -I {{path/to/binary}}`

- Display linked libraries:

`rabin2 -l {{path/to/binary}}`

- Display symbols imported from libraries:

`rabin2 -i {{path/to/binary}}`

- Display strings contained in the binary:

`rabin2 -z {{path/to/binary}}`

- Display the output in JSON:

`rabin2 -j -I {{path/to/binary}}`
