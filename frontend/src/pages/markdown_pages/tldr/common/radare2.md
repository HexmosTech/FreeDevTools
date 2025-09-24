---
title: "Reverse Engineer - Analyze Binaries with Radare2 | Online Free DevTools by Hexmos"
name: radare2
path: /freedevtools/tldr/common/radare2
canonical: "https://hexmos.com/freedevtools/tldr/common/radare2/"
description: "Reverse engineer binaries with Radare2, a powerful reverse engineering framework. Analyze executables, debug programs, and script automation tasks with ease. Free online tool, no registration required."
category: common
keywords:
- Binary analysis
- Reverse engineering tool
- Radare2 framework
- Executable analysis
- Debugging tool
- Malware analysis
- Shellcode analysis
- Linux reverse engineering
- Windows reverse engineering
- macOS reverse engineering
features:
- Open and analyze binary files without parsing headers
- Debug programs using the built-in debugger
- Execute custom scripts before interactive CLI starts
- Display help text for specific commands within radare2
- Dump raw bytes from the current block to a file
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# radare2

> A set of reverse engineering tools.
> More information: <https://www.radare.org/r/docs.html>.

- Open a file in write mode without parsing the file format headers:

`radare2 -nw {{path/to/binary}}`

- Debug a program:

`radare2 -d {{path/to/binary}}`

- Run a script before entering the interactive CLI:

`radare2 -i {{path/to/script.r2}} {{path/to/binary}}`

- Display help text for any command in the interactive CLI:

`{{radare2_command}}?`

- Run a shell command from the interactive CLI:

`!{{shell_command}}`

- Dump raw bytes of current block to a file:

`> pr > {{path/to/file.bin}}`
