---
title: "Disassemble Java - Inspect Class Files | Free DevTools"
name: javap
path: /freedevtools/tldr/common/javap
canonical: "https://hexmos.com/freedevtools/tldr/common/javap/"
description: "Inspect Java class files with Javap. Disassemble bytecode and analyze code structure for debugging and reverse engineering. Free online tool, no registration required."
category: common
keywords:
- Java class file disassembler
- Bytecode inspector
- Java reverse engineering tool
- Java class analysis
- javap command line
- javap Linux
- javap macOS
- Java bytecode viewer
- Decompile Java
- Java class structure analysis
features:
- Disassemble Java class files to bytecode
- Display constant pool information
- Show method signatures and fields
- Analyze inheritance and interfaces
- Output disassembled code to console
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# javap

> Disassemble class files and list them.
> More information: <https://docs.oracle.com/en/java/javase/20/docs/specs/man/javap.html>.

- Disassemble and list one or more `.class` files:

`javap {{path/to/file1.class path/to/file2.class ...}}`

- Disassemble and list a built-in class file:

`javap java.{{package}}.{{class}}`

- Display help:

`javap -help`

- Display version:

`javap -version`
