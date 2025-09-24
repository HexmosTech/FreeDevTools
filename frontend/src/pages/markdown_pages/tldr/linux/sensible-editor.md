---
title: "Open Editor - Launch Default Editor | Online Free DevTools by Hexmos"
name: sensible-editor
path: "/freedevtools/tldr/linux/sensible-editor"
canonical: "https://hexmos.com/freedevtools/tldr/linux/sensible-editor/"
description: "Open files with sensible-editor, the default editor on your system. Quickly edit files from the command line. Free online tool, no registration required."
category: linux
keywords:
  - default editor launcher
  - command line text editor
  - file editor linux
  - open file in default editor
  - sensible editor command
  - linux text editor
  - macos text editor
  - cli editor
  - text file opener
  - system editor launcher
features:
  - Open files in the system's default editor
  - Specify the cursor position within the file
  - Open multiple files simultaneously
  - Launch the editor from the command line
  - Work with file paths directly from the terminal
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# sensible-editor

> Open the default editor.
> More information: <https://manned.org/sensible-editor>.

- Open a file in the default editor:

`sensible-editor {{path/to/file}}`

- Open a file in the default editor, with the cursor at the end of the file:

`sensible-editor + {{path/to/file}}`

- Open a file in the default editor, with the cursor at the beginning of line 10:

`sensible-editor +10 {{path/to/file}}`

- Open 3 files in vertically split editor windows at the same time:

`sensible-editor -O3 {{path/to/file1 path/to/file2 path/to/file3}}`
