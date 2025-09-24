---
title: "Edit Text Files - Kwrite Text Editor | Online Free DevTools by Hexmos"
name: kwrite
path: /freedevtools/tldr/linux/kwrite
canonical: "https://hexmos.com/freedevtools/tldr/linux/kwrite/"
description: "Edit text files easily with Kwrite, the KDE text editor. Open, modify, and save text files with custom encoding. Free online tool, no registration required."
category: linux
keywords:
  - kwrite text editor
  - KDE text editor
  - text file editor
  - edit text files
  - open text files
  - modify text files
  - text encoding
  - command line editor
  - linux text editor
  - KDE desktop environment
features:
  - Open and edit text files from the command line
  - Open multiple text files simultaneously
  - Specify custom encoding for text files
  - Navigate to specific lines and columns within a text file
  - Integrate with the KDE desktop environment
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# kwrite

> Text editor of the KDE Desktop project.
> See also: `kate`.
> More information: <https://docs.kde.org/stable5/en/kate/kwrite/command-line-options.html>.

- Open a text file:

`kwrite {{path/to/file}}`

- Open multiple text files:

`kwrite {{file1 file2 ...}}`

- Open a text file with a specific encoding:

`kwrite --encoding {{UTF-8}} {{path/to/file}}`

- Open a text file and navigate to a specific line and column:

`kwrite --line {{line_number}} --column {{column_number}} {{path/to/file}}`
