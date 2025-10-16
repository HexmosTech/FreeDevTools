---
title: "Compare Files - Find File Differences with FC | Online Free DevTools by Hexmos"
name: fc
path: "/freedevtools/tldr/windows/fc/"
canonical: "https://hexmos.com/freedevtools/tldr/windows/fc/"
description: "Find file differences instantly with FC. Compare file content and identify changes across various file types. Free online tool, no registration required."
category: windows
keywords:
  - file comparison tool
  - file difference finder
  - fc command line
  - text file comparison
  - binary file comparison
  - compare file content
  - find file changes
  - file comparison windows
  - ascii file comparison
  - unicode file comparison
features:
  - Compare two specified files or sets of files
  - Perform case-insensitive file comparisons
  - Compare files as Unicode or ASCII text
  - Compare files in binary mode
  - Suppress tab expansion during comparison
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# fc

> Compare the differences between two files or sets of files.
> Use wildcards (\*) to compare sets of files.
> More information: <https://learn.microsoft.com/windows-server/administration/windows-commands/fc>.

- Compare 2 specified files:

`fc {{path\to\file1}} {{path\to\file2}}`

- Perform a case-insensitive comparison:

`fc /c {{path\to\file1}} {{path\to\file2}}`

- Compare files as Unicode text:

`fc /u {{path\to\file1}} {{path\to\file2}}`

- Compare files as ASCII text:

`fc /l {{path\to\file1}} {{path\to\file2}}`

- Compare files as binary:

`fc /b {{path\to\file1}} {{path\to\file2}}`

- Disable tab-to-space expansion:

`fc /t {{path\to\file1}} {{path\to\file2}}`

- Compress whitespace (tabs and spaces) for comparisons:

`fc /w {{path\to\file1}} {{path\to\file2}}`
