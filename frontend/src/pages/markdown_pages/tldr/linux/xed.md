---
title: "Xed Editor - Edit Files on Linux | Free DevTools"
name: xed
path: /freedevtools/tldr/linux/xed
canonical: "https://hexmos.com/freedevtools/tldr/linux/xed/"
description: "Edit files quickly with the Xed text editor.  Open, edit, and save files with various encodings on your Linux system. Free online tool, no registration required."
category: linux
keywords:
  - linux text editor
  - linux file editor
  - xed command
  - xed editor linux
  - open files linux
  - edit files command line
  - file encoding linux
  - cinnamon desktop editor
  - linuxmint xed
  - command line text editor
features:
  - Opens files from the command line.
  - Supports various file encodings.
  - Allows opening multiple files simultaneously.
  - Enables direct navigation to specific lines within a file.
  - Provides a simple and efficient text editing experience.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# xed

> Edit files in Cinnamon desktop environment.
> More information: <https://github.com/linuxmint/xed>.

- Start the editor:

`xed`

- Open specific files:

`xed {{path/to/file1 path/to/file2 ...}}`

- Open files using a specific encoding:

`xed --encoding {{WINDOWS-1252}} {{path/to/file1 path/to/file2 ...}}`

- Print all supported encodings:

`xed --list-encodings`

- Open a file and go to a specific line:

`xed +{{10}} {{path/to/file}}`
