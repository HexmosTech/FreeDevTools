---
title: "Control clifm - Command-Line File Manager | Online Free DevTools by Hexmos"
name: clifm
path: /freedevtools/tldr/common/clifm
canonical: "https://hexmos.com/freedevtools/tldr/common/clifm/"
description: "Control files with clifm, a powerful command-line file manager for navigating and manipulating files on Linux, macOS, and other platforms. Free online tool, no registration required."
category: common
keywords:
- command-line file manager
- terminal file manager
- linux file navigation
- macos file management
- console file explorer
- cli file operations
- file system command line
- ncurses file manager
- lightweight file manager
- command-line directory tool
features:
- Navigate the file system using command-line interface
- Perform file operations directly from the terminal
- Search and filter files using regular expressions
- Select and manipulate multiple files efficiently
- Open files and directories by entry list number
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# clifm

> The command-line file manager.
> See also: `vifm`, `ranger`, `mc`, `nautilus`.
> More information: <https://github.com/leo-arch/clifm>.

- Start CliFM:

`clifm`

- Open the file or directory whose ELN (entry list number) is 12:

`12`

- Create a new file and a new directory:

`<n>file dir/`

- Search for PDF files in the current directory:

`</>*.pdf`

- Select all PNG files in the current directory:

`<s> *.png`

- Remove the previously selected files (use `<t>` to send the files to the recycle bin instead):

`<r>sel`

- Display help:

`<?>`

- Exit CliFM:

`<q>`
