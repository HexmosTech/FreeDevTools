---
title: "Kate - Edit Text Files | Online Free DevTools by Hexmos"
name: kate
path: "/freedevtools/tldr/common/kate/"
canonical: "https://hexmos.com/freedevtools/tldr/common/kate/"
description: "Edit text files effortlessly with Kate, the advanced KDE text editor. Open, create, and modify files with ease using command line. Free online tool, no registration required."
category: common
keywords:
- text file editor
- KDE text editor
- command line text editor
- linux text editor
- edit text files online
- open remote files
- create new editor instance
- specify line number
- read from stdin
- kate editor
features:
- Open and edit local files
- Open and edit remote files using URLs
- Create new editor instances
- Open files at a specific line and column
- Create files by piping data from stdin
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# kate

> KDE's advanced text editor.
> More information: <https://docs.kde.org/stable/en/kate/kate/fundamentals.html#starting-from-the-command-line>.

- Open specific files:

`kate {{path/to/file1 path/to/file2 ...}}`

- Open specific remote files:

`kate {{https://example.com/path/to/file1 https://example.com/path/to/file2 ...}}`

- Create a new editor instance even if one is already open:

`kate {{[-n|--new]}}`

- Open a file with the cursor at the specific line:

`kate {{[-l|--line]}} {{line_number}} {{path/to/file}}`

- Open a file with the cursor at the specific line and column:

`kate {{[-l|--line]}} {{line_number}} {{[-c|--column]}} {{column_number}} {{path/to/file}}`

- Create a file from `stdin`:

`cat {{path/to/file}} | kate {{[-i|--stdin]}}`

- Display help:

`kate {{[-h|--help]}}`
