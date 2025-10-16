---
title: "Edit Text - Control Text with Mate Editor | Online Free DevTools by Hexmos"
name: mate
path: "/freedevtools/tldr/osx/mate/"
canonical: "https://hexmos.com/freedevtools/tldr/osx/mate/"
description: "Edit Text with Mate Editor on macOS. Open, modify, and save files using the command line. Supports file type specification and line/column navigation. Free online tool, no registration required."
category: osx
keywords:
- text editor osx
- mate text editor
- macOS text editor command line
- file editor macOS
- text editing tool macOS
- command line text editor mac
- mate editor command
- osx text editor cli
- specify file type mate
- open file line number mate
features:
- Open and edit files from the command line
- Specify the file type for proper syntax highlighting
- Open files at a specific line and column
- Wait for file editing to complete before continuing
- Edit multiple files simultaneously
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# mate

> General-purpose text editor for macOS.
> More information: <https://macromates.com/>.

- Start TextMate:

`mate`

- Open specific files:

`mate {{path/to/file1 path/to/file2 ...}}`

- Specify the filetype of a file:

`mate --type {{filetype}} {{path/to/file}}`

- Open and wait until finished editing a specific file:

`mate --wait {{path/to/file}}`

- Open a file with the cursor at a specific line and column:

`mate --line {{line_number}}:{{column_number}} {{path/to/file}}`
