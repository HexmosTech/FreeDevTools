---
title: "OLE VBA Parser - Extract Macros | Online Free DevTools by Hexmos"
name: olevba
path: "/freedevtools/tldr/common/olevba"
canonical: "https://hexmos.com/freedevtools/tldr/common/olevba/"
description: "Extract VBA macros with OLE VBA Parser. Analyze, deobfuscate and identify malicious code in OLE and OpenXML files. Free online tool, no registration required."
category: common
keywords:
- OLE VBA extraction
- VBA macro analysis
- OLE file parsing
- OpenXML macro extraction
- Malware analysis
- Macro deobfuscation
- VBA code extraction
- DOC macro analysis
- XLS macro analysis
- PPT macro analysis
features:
- Extract VBA macros from OLE and OpenXML files
- Deobfuscate and analyze malicious VBA code
- Recursively analyze files in a directory
- Provide passwords for encrypted Office files
- Display only macro source code or analysis results
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# olevba

> Parse OLE and OpenXML files (e.g., DOC, XLS, PPT, etc.) to extract VBA macros, deobfuscate, and analyze malicious code.
> Part of the `python-oletools` suite.
> More information: <https://github.com/decalage2/oletools>.

- Analyze a file, showing both macro code and analysis results:

`olevba {{path/to/file}}`

- Recursively analyze all supported files in a directory:

`olevba -r {{path/to/directory}}`

- Provide a password for encrypted Microsoft Office files (may be repeated):

`olevba {{[-p|--password]}} {{password}} {{path/to/encrypted_file}}`

- Display only analysis results, without showing macro source code:

`olevba {{[-a|--analysis]}} {{path/to/file}}`

- Display only macro source code:

`olevba {{[-c|--code]}} {{path/to/file}}`

- Show obfuscated strings and their decoded content:

`olevba --decode {{path/to/file}}`
