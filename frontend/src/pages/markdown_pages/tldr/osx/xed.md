---
title: "Xcode Editor - Open Files for Editing | Online Free DevTools by Hexmos"
name: xed
path: /freedevtools/tldr/osx/xed
canonical: "https://hexmos.com/freedevtools/tldr/osx/xed/"
description: "Open files for editing with Xcode Editor. Quickly launch and modify code files on your macOS system using the command line. Free online tool, no registration required."
category: osx
keywords:
- xcode editor
- macos code editor
- osx file editor
- command line xcode
- xed command
- xed macos
- xed xcode editor
- apple xcode
- code editor mac
- xcode file manager
features:
- Open files in Xcode from the command line
- Create new files if they don't exist using Xcode
- Jump to a specific line number in a file
- Edit code files on macOS using the terminal
- Quickly launch Xcode with specified files
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# xed

> Opens files for editing in Xcode.
> More information: <https://keith.github.io/xcode-man-pages/xed.1.html>.

- Open file in Xcode:

`xed {{path/to/file1 path/to/file2 ...}}`

- Open file(s) in Xcode, create if it doesn't exist:

`xed --create {{path/to/file1 path/to/file2 ...}}`

- Open a file in Xcode and jump to line number 75:

`xed --line 75 {{path/to/file}}`
