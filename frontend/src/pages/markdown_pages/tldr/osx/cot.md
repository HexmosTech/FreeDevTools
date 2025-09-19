---
title: "Edit Plain Text - Control Files with CotEditor | Online Free DevTools by Hexmos"
name: cot
path: /freedevtools/tldr/osx/cot
canonical: "https://hexmos.com/freedevtools/tldr/osx/cot/"
description: "Control plain text files with CotEditor on macOS. Open, edit, and manage text files directly from the command line. Free online tool, no registration required."
category: osx
keywords:
- text editor macos
- plain text editor osx
- cot editor command line
- macos text file editing
- osx command line text
- cot editor terminal
- text editor command macos
- plain text editor command
- macos file editor cli
- command line text editor
features:
- Open and edit text files from the command line
- Create new blank text documents quickly
- Open files with specific line and column numbers
- Wait for the editor to close before returning to the terminal
- Open multiple files simultaneously
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# cot

> The Plain-Text Editor for macOS.
> More information: <https://coteditor.com/cot>.

- Start CotEditor:

`cot`

- Open specific files:

`cot {{path/to/file1 path/to/file2 ...}}`

- Open a new blank document:

`cot --new`

- Open a specific file and block the terminal until it is closed:

`cot --wait {{path/to/file}}`

- Open a specific file with the cursor at a specific line and column:

`cot --line {{1}} --column {{80}} {{path/to/file}}`
