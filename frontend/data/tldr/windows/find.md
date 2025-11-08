---
title: "Find String - Search Files for Text | Online Free DevTools by Hexmos"
name: find
path: "/freedevtools/tldr/windows/find/"
canonical: "https://hexmos.com/freedevtools/tldr/windows/find/"
description: "Search files for specific text with Find. Efficiently locate strings and display line counts in files. Free online tool, no registration required."
category: windows
keywords:
  - text search tool
  - find string in files
  - file content search
  - command line find
  - search text in directory
  - find text in file windows
  - find string windows command
  - windows find command
  - find command examples
  - find text with line numbers
features:
  - Locate lines containing a specific string
  - Display lines that do not contain a specific string
  - Count the number of lines containing a string
  - Show line numbers for found text
  - Search for text in files and directories
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# find

> Find a specified string in files.
> More information: <https://learn.microsoft.com/windows-server/administration/windows-commands/find>.

- Find lines that contain a specified string:

`find "{{string}}" {{path\to\file_or_directory}}`

- Display lines that do not contain the specified string:

`find "{{string}}" {{path\to\file_or_directory}} /v`

- Display the count of lines that contain the specified string:

`find "{{string}}" {{path\to\file_or_directory}} /c`

- Display line numbers with the list of lines:

`find "{{string}}" {{path\to\file_or_directory}} /n`
