---
title: "Pwn Exploit Tool - Generate Shellcode & Analyze Binaries | Online Free DevTools by Hexmos"
name: pwn
path: /freedevtools/tldr/linux/pwn
canonical: "https://hexmos.com/freedevtools/tldr/linux/pwn/"
description: "Generate shellcode and analyze binaries with the Pwn exploit development library.  Convert assembly, create cyclic patterns, encode/decode hex, and check binary security settings. Free online tool, no registration required."
category: linux
keywords:
  - assembly code generator
  - shellcode generator linux
  - hex encoder decoder
  - binary security analyzer
  - cyclic pattern creator
  - exploit development tool
  - pwn tool command line
  - linux binary analysis
  - x64 shellcode
  - elf file checker
features:
  - Convert assembly code to bytes
  - Create cyclic patterns of specified length
  - Encode and decode data in hexadecimal format
  - Generate x64 Linux shellcode for executing commands
  - Check security settings of ELF binaries
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# pwn

> Exploit Development Library designed for rapid prototyping.
> More information: <https://docs.pwntools.com/en/stable/commandline.html>.

- Convert the given assembly code to `bytes`:

`pwn asm "{{xor edi, edi}}"`

- Create a cyclic pattern of the specific number of characters:

`pwn cyclic {{number}}`

- Encode the given data into the hexadecimal system:

`pwn hex {{deafbeef}}`

- Decode the given data from hexadecimal:

`pwn unhex {{6c4f7645}}`

- Print a x64 Linux shellcode for running a shell:

`pwn shellcraft {{amd64.linux.sh}}`

- Check the binary security settings for the given ELF file:

`pwn checksec {{path/to/file}}`

- Check for Pwntools updates:

`pwn update`

- Display version:

`pwn version`
