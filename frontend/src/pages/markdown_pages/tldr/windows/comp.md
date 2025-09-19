---
title: "Compare Files - Compare File Contents | Online Free DevTools by Hexmos"
name: comp
path: /freedevtools/tldr/windows/comp
canonical: "https://hexmos.com/freedevtools/tldr/windows/comp/"
description: "Compare file contents easily with Compare Files. Find differences between files and sets of files using wildcard support. Free online tool, no registration required."
category: windows
keywords:
- file comparison
- compare files
- windows compare files
- file difference checker
- wildcard file comparison
- command line file comparison
- file content comparison
- ASCII file comparison
- decimal file comparison
- case insensitive comparison
features:
- Compare two specified files
- Compare sets of files using wildcards
- Display differences in decimal or ASCII format
- Display line numbers for differences
- Compare files case-insensitively
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# comp

> Compare the contents of two files or sets of files.
> Use wildcards (*) to compare sets of files.
> More information: <https://learn.microsoft.com/windows-server/administration/windows-commands/comp>.

- Compare files interactively:

`comp`

- Compare two specified files:

`comp {{path\to\file1}} {{path\to\file2}}`

- Compare two sets of files:

`comp {{path\to\directory1}}\* {{path\to\directory2}}\*`

- Display differences in [d]ecimal format:

`comp /d {{path\to\file1}} {{path\to\file2}}`

- Display differences in [a]SCII format:

`comp /a {{path\to\file1}} {{path\to\file2}}`

- Display [l]ine numbers for differences:

`comp /l {{path\to\file1}} {{path\to\file2}}`

- Compare files [c]ase-insensitively:

`comp /c {{path\to\file1}} {{path\to\file2}}`

- Compare only the first 5 lines of each file:

`comp /n=5 {{path\to\file1}} {{path\to\file2}}`
