---
title: "Compare Compressed Files - xzdiff | Free DevTools"
name: xzdiff
path: /freedevtools/tldr/common/xzdiff
canonical: "https://hexmos.com/freedevtools/tldr/common/xzdiff/"
description: "Compare compressed files with xzdiff. Analyze file differences and verify data integrity across various compression formats. Free online tool, no registration required."
category: common
keywords:
- compressed file comparison
- xz file diff
- gzip diff
- bzip2 diff
- lzop diff
- zstd diff
- linux file comparison
- command line diff
- data integrity check
- compressed data analysis
features:
- Compare compressed files using various formats
- Display differences side-by-side for easier analysis
- Report only if files differ without detailed output
- Indicate when compressed files are identical
- Paginate results for large file comparisons
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# xzdiff

> Invokes `diff` on files compressed with `xz`, `lzma`, `gzip`, `bzip2`, `lzop`, or `zstd`.
> All options specified are passed directly to `diff`.
> More information: <https://manned.org/xzdiff>.

- Compare two files:

`xzdiff {{path/to/file1}} {{path/to/file2}}`

- Compare two files, showing the differences side by side:

`xzdiff --side-by-side {{path/to/file1}} {{path/to/file2}}`

- Compare two files and report only that they differ (no details on what is different):

`xzdiff --brief {{path/to/file1}} {{path/to/file2}}`

- Compare two files and report when the files are the same:

`xzdiff --report-identical-files {{path/to/file1}} {{path/to/file2}}`

- Compare two files using paginated results:

`xzdiff --paginate {{path/to/file1}} {{path/to/file2}}`
