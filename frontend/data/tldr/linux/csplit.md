---
title: "Split Files - csplit Command | Online Free DevTools by Hexmos"
name: csplit
path: "/freedevtools/tldr/linux/csplit/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/csplit/"
description: "Split files efficiently with the csplit command.  Manage large files, customize splits by line numbers or regex, and generate multiple output files easily. Free online tool, no registration required."
category: linux
keywords:
  - file splitter command
  - csplit linux command
  - split file by lines
  - split file by regex
  - command line file splitting
  - text file splitting tool
  - csplit tutorial
  - unix file splitting
  - large file management
  - file manipulation command
features:
  - Splits files based on line numbers.
  - Splits files based on regular expressions.
  - Allows custom prefixes for output files.
  - Handles files with a large number of lines.
  - Provides options to preserve files during splitting.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# csplit

> Split a file into pieces.
> This generates files named "xx00", "xx01", and so on.
> More information: <https://www.gnu.org/software/coreutils/manual/html_node/csplit-invocation.html>.

- Split a file at lines 5 and 23:

`csplit {{path/to/file}} 5 23`

- Split a file every 5 lines (this will fail if the total number of lines is not divisible by 5):

`csplit {{path/to/file}} 5 {*}`

- Split a file every 5 lines, ignoring exact-division error:

`csplit {{[-k|--keep-files]}} {{path/to/file}} 5 {*}`

- Split a file at line 5 and use a custom prefix for the output files:

`csplit {{path/to/file}} 5 {{[-f|--prefix]}} {{prefix}}`

- Split a file at a line matching a `regex`:

`csplit {{path/to/file}} /{{regex}}/`
