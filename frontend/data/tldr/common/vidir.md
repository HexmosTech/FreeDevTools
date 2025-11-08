---
title: "Vidir Editor - Edit Directories in Editor | Online Free DevTools by Hexmos"
name: vidir
path: "/freedevtools/tldr/common/vidir/"
canonical: "https://hexmos.com/freedevtools/tldr/common/vidir/"
description: "Edit directories with Vidir Editor. Modify file lists using your favorite text editor, ensuring quick and efficient directory management. Free online tool, no registration required."
category: common
keywords:
- directory editor
- command line editor
- file list editor
- linux directory editor
- macos directory editor
- edit directory structure
- vidir command
- terminal editor
- directory management tool
- file system editor
features:
- Edit multiple directories simultaneously in a text editor.
- Customize the editor used via the EDITOR environment variable.
- View and modify directory contents as a list of files.
- Read a file list from standard input.
- Display verbose output to track actions.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# vidir

> Edit directories in a text editor.
> More information: <https://manned.org/vidir>.

- Edit the contents of the specified directories:

`vidir {{path/to/directory1 path/to/directory2 ...}}`

- Display each action taken by the program:

`vidir {{[-v|--verbose]}} {{path/to/directory1 path/to/directory2 ...}}`

- Edit the contents of current directory:

`vidir`

- Use the specified text editor:

`EDITOR={{vim}} vidir {{path/to/directory1 path/to/directory2 ...}}`

- Read a list of files to edit from `stdin`:

`{{command}} | vidir -`
