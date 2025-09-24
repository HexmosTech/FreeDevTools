---
title: "Pluma Text Editor - Edit Files in MATE | Online Free DevTools by Hexmos"
name: pluma
path: /freedevtools/tldr/linux/pluma
canonical: "https://hexmos.com/freedevtools/tldr/linux/pluma/"
description: "Edit files efficiently with Pluma text editor.  Open, edit, and save files with various encoding options. Free online tool, no registration required."
category: linux
keywords:
  - text editor linux
  - pluma editor
  - mate text editor
  - linux text editing
  - file editor command line
  - pluma encoding options
  - open file pluma
  - pluma line number
  - code editor mate
  - command line text editor
features:
  - Open and edit text files.
  - Supports various character encodings.
  - Allows opening multiple files simultaneously.
  - Enables navigating to specific line numbers.
  - Provides a simple and user-friendly interface within the MATE desktop environment.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# pluma

> Edit files in MATE desktop environment.
> More information: <https://manned.org/pluma>.

- Start the editor:

`pluma`

- Open specific documents:

`pluma {{path/to/file1 path/to/file2 ...}}`

- Open documents using a specific encoding:

`pluma --encoding {{WINDOWS-1252}} {{path/to/file1 path/to/file2 ...}}`

- Print all supported encodings:

`pluma --list-encodings`

- Open document and go to a specific line:

`pluma +{{10}} {{path/to/file}}`
