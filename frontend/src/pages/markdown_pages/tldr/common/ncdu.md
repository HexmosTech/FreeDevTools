---
title: "Analyze Disk Usage - ncdu | Online Free DevTools by Hexmos"
name: ncdu
path: /freedevtools/tldr/common/ncdu
canonical: "https://hexmos.com/freedevtools/tldr/common/ncdu/"
description: "Analyze disk usage efficiently with ncdu. Identify large files and directories, and reclaim disk space. Free online tool, no registration required."
category: common
keywords:
- disk usage analyzer
- ncdu disk space
- terminal disk usage
- ncurses disk analyzer
- linux disk usage
- macos disk usage
- command line disk usage
- disk space monitoring
- file size analysis
- directory size analysis
features:
- Analyze disk usage in interactive mode
- Visualize disk space allocation
- Exclude specific files or patterns from analysis
- Save analysis results to a file
- Colorize output based on file size
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ncdu

> Disk usage analyzer with an ncurses interface.
> More information: <https://manned.org/ncdu>.

- Analyze the current working directory:

`ncdu`

- Colorize output:

`ncdu --color {{dark|off}}`

- Analyze a given directory:

`ncdu {{path/to/directory}}`

- Save results to a file:

`ncdu -o {{path/to/file}}`

- Exclude files that match a pattern, argument can be given multiple times to add more patterns:

`ncdu --exclude '{{*.txt}}'`
