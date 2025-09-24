---
title: "Disk Usage - Estimate Space Usage with du | Online Free DevTools by Hexmos"
name: du
path: /freedevtools/tldr/osx/du
canonical: "https://hexmos.com/freedevtools/tldr/osx/du/"
description: "Estimate file and directory space usage with du. Analyze disk usage effectively with this command-line utility. Free online tool, no registration required."
category: osx
keywords:
  - disk space analyzer
  - directory size estimator
  - file space usage
  - linux disk usage
  - macos disk usage
  - command line du
  - du command
  - file size summary
  - disk usage report
  - du command examples
features:
  - Estimate directory and subdirectory sizes
  - Summarize total disk usage
  - Display sizes in human-readable format
  - Control depth of directory traversal
  - Calculate cumulative size totals
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# du

> Disk usage: estimate and summarize file and directory space usage.
> More information: <https://keith.github.io/xcode-man-pages/du.1.html>.

- List the sizes of a directory and any subdirectories, in the given unit (KiB/MiB/GiB):

`du -{{k|m|g}} {{path/to/directory}}`

- List the sizes of a directory and any subdirectories, in human-readable form (i.e. auto-selecting the appropriate unit for each size):

`du -h {{path/to/directory}}`

- Show the size of a single directory, in human-readable units:

`du -sh {{path/to/directory}}`

- List the human-readable sizes of a directory and of all the files and directories within it:

`du -ah {{path/to/directory}}`

- List the human-readable sizes of a directory and any subdirectories, up to N levels deep:

`du -h -d {{2}} {{path/to/directory}}`

- List the human-readable size of all `.jpg` files in subdirectories of the current directory, and show a cumulative total at the end:

`du -ch {{*/*.jpg}}`
