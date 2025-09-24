---
title: "Compare Files - Find Differences with sdiff | Online Free DevTools by Hexmos"
name: sdiff
path: /freedevtools/tldr/common/sdiff
canonical: "https://hexmos.com/freedevtools/tldr/common/sdiff/"
description: "Compare files instantly with sdiff. Identify differences between two files, merge changes, and generate output files. Free online tool, no registration required."
category: common
keywords:
- file comparison
- sdiff command
- file difference analysis
- linux file comparison
- unix file comparison
- text file comparison
- file merge tool
- command line file diff
- ignore whitespace comparison
- case insensitive file diff
features:
- Compare two files for differences
- Ignore whitespace during comparison
- Perform case-insensitive comparisons
- Merge two files into a new output file
- Display differences side-by-side
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# sdiff

> Compare the differences between and optionally merge 2 files.
> More information: <https://manned.org/sdiff>.

- Compare 2 files:

`sdiff {{path/to/file1}} {{path/to/file2}}`

- Compare 2 files, ignoring all tabs and whitespace:

`sdiff {{[-W|--ignore-all-space]}} {{path/to/file1}} {{path/to/file2}}`

- Compare 2 files, ignoring whitespace at the end of lines:

`sdiff {{[-Z|--ignore-trailing-space]}} {{path/to/file1}} {{path/to/file2}}`

- Compare 2 files in a case-insensitive manner:

`sdiff {{[-i|--ignore-case]}} {{path/to/file1}} {{path/to/file2}}`

- Compare and then merge, writing the output to a new file:

`sdiff {{[-o|--output]}} {{path/to/merged_file}} {{path/to/file1}} {{path/to/file2}}`
