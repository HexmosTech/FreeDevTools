---
title: "List Files - Control Directory Contents | Free DevTools"
name: ls
path: /freedevtools/tldr/common/ls
canonical: "https://hexmos.com/freedevtools/tldr/common/ls/"
description: "Control directory contents with List Files command. Display, sort, and filter files on Linux and macOS systems. Free online tool, no registration required."
category: common
keywords:
- directory listing
- file listing
- ls command
- linux ls
- macOS ls
- directory contents display
- file display options
- hidden files listing
- long format listing
- file sorting
features:
- List files with detailed information (permissions, size, modification date)
- Display hidden files and directories
- Sort files by size, modification time, or name
- Filter files based on type (directories, symbolic links)
- Display file sizes in human-readable format
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ls

> List directory contents.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/ls-invocation.html>.

- List files one per line:

`ls -1`

- List all files, including hidden files:

`ls {{[-a|--all]}}`

- List files with a trailing symbol to indicate file type (directory/, symbolic_link@, executable*, ...):

`ls {{[-F|--classify]}}`

- List all files in [l]ong format (permissions, ownership, size, and modification date):

`ls {{[-la|-l --all]}}`

- List files in [l]ong format with size displayed using human-readable units (KiB, MiB, GiB):

`ls {{[-lh|-l --human-readable]}}`

- List files in [l]ong format, sorted by [S]ize (descending) recursively:

`ls {{[-lSR|-lS --recursive]}}`

- List files in [l]ong format, sorted by [t]ime the file was modified and in reverse order (oldest first):

`ls {{[-ltr|-lt --reverse]}}`

- Only list directories:

`ls {{[-d|--directory]}} */`
