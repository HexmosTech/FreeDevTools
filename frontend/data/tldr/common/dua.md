---
title: "Analyze Disk Usage - Manage Disk Space with dua | Online Free DevTools by Hexmos"
name: dua
path: "/freedevtools/tldr/common/dua/"
canonical: "https://hexmos.com/freedevtools/tldr/common/dua/"
description: "Analyze disk usage with dua, a command-line disk space analyzer. Quickly identify large files and directories to free up disk space. Free online tool, no registration required."
category: common
keywords:
- disk usage analyzer
- disk space analysis
- dua command
- command line disk usage
- file size analysis
- directory size analysis
- linux disk usage
- macos disk usage
- windows disk usage
- terminal disk usage
features:
- Analyze disk usage of specific directories
- Display apparent file sizes instead of disk usage
- Aggregate disk space consumption across multiple directories
- Launch a terminal user interface for interactive analysis
- Customize byte count formatting for improved readability
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# dua

> Dua (Disk Usage Analyzer): get the disk space usage of a directory.
> More information: <https://github.com/Byron/dua-cli>.

- Analyze specific directory:

`dua {{path/to/directory}}`

- Display apparent size instead of disk usage:

`dua --apparent-size`

- Count hard-linked files each time they are seen:

`dua --count-hard-links`

- Aggregate the consumed space of one or more directories or files:

`dua aggregate`

- Launch the terminal user interface:

`dua interactive`

- Format printing byte counts:

`dua --format {{metric|binary|bytes|GB|GiB|MB|MiB}}`

- Use a specific number of threads (defaults to the process number of threads):

`dua --threads {{count}}`
