---
title: "Disk Usage - Estimate File Space with du | Online Free DevTools by Hexmos"
name: du
path: /freedevtools/tldr/common/du
canonical: "https://hexmos.com/freedevtools/tldr/common/du/"
description: "Estimate disk usage with du. Analyze file and directory space efficiently. Free online tool, no registration required."
category: common
keywords:
- disk usage analyzer
- file space estimator
- directory size calculator
- linux disk usage
- du command line
- du linux
- du macos
- du estimate space
- du summarize usage
- du file size
features:
- Estimate disk space used by files and directories
- Summarize disk usage for a specific directory
- Display disk usage in human-readable format
- Limit the depth of directory traversal
- Calculate the total disk usage for a set of files
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# du

> Disk usage: estimate and summarize file and directory space usage.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/du-invocation.html>.

- List the sizes of a directory and any subdirectories, in the given unit (B/KiB/MiB):

`du -{{b|k|m}} {{path/to/directory}}`

- List the sizes of a directory and any subdirectories, in human-readable form (i.e. auto-selecting the appropriate unit for each size):

`du {{[-h|--human-readable]}} {{path/to/directory}}`

- Show the size of a single directory, in human-readable units:

`du {{[-sh|--summarize --human-readable]}} {{path/to/directory}}`

- List the human-readable sizes of a directory and of all the files and directories within it:

`du {{[-ah|--all --human-readable]}} {{path/to/directory}}`

- List the human-readable sizes of a directory and any subdirectories, up to N levels deep:

`du {{[-h|--human-readable]}} {{[-d|--max-depth]}} N {{path/to/directory}}`

- List the human-readable size of all `.jpg` files in current directory, and show a cumulative total at the end:

`du {{[-ch|--total --human-readable]}} {{./*.jpg}}`

- List all files and directories (including hidden ones) above a certain threshold size (useful for investigating what is actually taking up the space):

`du {{[-ah|--all --human-readable]}} {{[-t|--threshold]}} {{1G|1024M|1048576K}} .[^.]* *`
