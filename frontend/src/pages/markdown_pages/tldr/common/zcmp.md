---
title: "Compare Compressed Files - Analyze gzip Files | Online Free DevTools by Hexmos"
name: zcmp
path: /freedevtools/tldr/common/zcmp
canonical: "https://hexmos.com/freedevtools/tldr/common/zcmp/"
description: "Compare compressed files easily with zcmp. Analyze gzip files and identify differences quickly. Free online tool, no registration required."
category: common
keywords:
- gzip file comparison
- compressed file analyzer
- zcmp command
- compare gz files
- linux file comparison
- unix file comparison
- compressed data analysis
- gzip diff tool
- file integrity check
- zcmp usage examples
features:
- Compare gzipped files directly
- Identify differences between compressed files
- Invoke cmp on gzipped files
- Compare a file with its gzipped version
- Streamline compressed file analysis
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# zcmp

> Compare compressed files.
> More information: <https://manned.org/zcmp>.

- Invoke `cmp` on two files compressed via `gzip`:

`zcmp {{path/to/file1.gz}} {{path/to/file2.gz}}`

- Compare a file to its gzipped version (assuming `.gz` exists already):

`zcmp {{path/to/file}}`
