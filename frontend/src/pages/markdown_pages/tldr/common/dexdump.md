---
title: "DEX Dump - Analyze Android DEX Files | Free DevTools"
name: dexdump
path: /freedevtools/tldr/common/dexdump
canonical: "https://hexmos.com/freedevtools/tldr/common/dexdump/"
description: "Analyze Android DEX files with DEX Dump. Extract classes, display headers, and disassemble executable sections. Free online tool, no registration required."
category: common
keywords:
- android dex analyzer
- dex file dump
- apk decompiler
- android reverse engineering
- dexdump linux
- dexdump macos
- dexdump android
- dex bytecode analysis
- dex file extraction
- apk analysis tool
features:
- Extract classes and methods from APK files
- Display header information of DEX files
- Disassemble executable sections of DEX files
- Output results to a file
- Analyze DEX file structure
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# dexdump

> Display information about Android DEX files.
> More information: <https://manned.org/man/debian-stretch/dexdump>.

- Extract classes and methods from an APK file:

`dexdump {{path/to/file.apk}}`

- Display header information of DEX files contained in an APK file:

`dexdump -f {{path/to/file.apk}}`

- Display the dis-assembled output of executable sections:

`dexdump -d {{path/to/file.apk}}`

- Output results to a file:

`dexdump -o {{path/to/file}} {{path/to/file.apk}}`
