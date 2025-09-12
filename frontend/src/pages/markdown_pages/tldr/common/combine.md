---
title: "Combine Files - Perform Set Operations on Lines | Free DevTools"
name: combine
path: /freedevtools/tldr/common/combine
canonical: "https://hexmos.com/freedevtools/tldr/common/combine/"
description: "Combine lines with Combine: perform set operations on lines of two files. Quickly identify common, unique, or differing lines. Free online tool, no registration required."
category: common
keywords:
- file set operations
- line comparison tool
- combine files linux
- combine files macos
- combine files common
- file intersection tool
- file union tool
- file difference tool
- file XOR tool
- command line file tools
features:
- Output lines present in both files
- Output lines unique to the first file
- Output lines present in either file
- Output lines present in only one file
- Perform set operations on lines of two files
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# combine

> Perform set operations on lines of two files.
> The order of the output lines is determined by the order of the lines in the first file.
> See also: `diff`.
> More information: <https://manned.org/combine>.

- Output lines that are in both specified files:

`combine {{path/to/file1}} and {{path/to/file2}}`

- Output lines that are in the first but not in the second file:

`combine {{path/to/file1}} not {{path/to/file2}}`

- Output lines that in are in either of the specified files:

`combine {{path/to/file1}} or {{path/to/file2}}`

- Output lines that are in exactly one of the specified files:

`combine {{path/to/file1}} xor {{path/to/file2}}`
