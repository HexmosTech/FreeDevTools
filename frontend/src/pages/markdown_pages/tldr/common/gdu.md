---
title: "Analyze Disk Usage - Control Directory Sizes with GDU | Online Free DevTools by Hexmos"
name: gdu
path: /freedevtools/tldr/common/gdu
canonical: "https://hexmos.com/freedevtools/tldr/common/gdu/"
description: "Analyze disk usage efficiently with GDU. Find large files and directories quickly using this command-line tool. Free online tool, no registration required."
category: common
keywords:
- disk usage analyzer
- directory size analyzer
- command line disk usage
- terminal disk usage
- linux disk usage
- macos disk usage
- gdu command
- interactive disk usage
- disk space usage
- console disk usage
features:
- Display disk usage interactively
- Show disk usage for specific directories
- Ignore directories based on names
- Exclude directories using regex patterns
- Print disk usage without interactive mode
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# gdu

> Disk usage analyzer with console interface.
> More information: <https://github.com/dundee/gdu>.

- Interactively show the disk usage of the current directory:

`gdu`

- Interactively show the disk usage of a given directory:

`gdu {{path/to/directory}}`

- Interactively show the disk usage of all mounted disks:

`gdu --show-disks`

- Interactively show the disk usage of the current directory but ignore some sub-directories:

`gdu --ignore-dirs {{path/to/directory1,path/to/directory2,...}}`

- Ignore paths by `regex`:

`gdu --ignore-dirs-pattern '{{.*[abc]+}}'`

- Ignore hidden directories:

`gdu --no-hidden`

- Only print the result, do not enter interactive mode:

`gdu --non-interactive {{path/to/directory}}`

- Do not show the progress in non-interactive mode (useful in scripts):

`gdu --no-progress {{path/to/directory}}`
