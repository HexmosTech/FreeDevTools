---
title: "Bulk Rename Files - Command Line Tool | Online Free DevTools by Hexmos"
name: rnm
path: /freedevtools/tldr/linux/rnm
canonical: "https://hexmos.com/freedevtools/tldr/linux/rnm/"
description: "Bulk rename files with the rnm command-line tool.  Automate renaming tasks, search/replace strings, and add indexes to files easily. Free online tool, no registration required."
category: linux
keywords:
  - bulk rename linux
  - batch file rename linux
  - command line file renaming linux
  - linux file renaming tool
  - rnm command line utility
  - regex filename replacement linux
  - indexed filename creation linux
  - file renaming from list linux
  - sort files by modification time linux
  - search and replace filenames linux
features:
  - Replace strings in filenames using regular expressions or literal matches.
  - Add auto-incrementing indexes to filenames.
  - Rename files based on a list of names from a text file.
  - Filter and rename files only (ignore directories and symlinks).
  - Sort files by modification time before renaming for precise control.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# rnm

> Bulk Rename Utility.
> More information: <https://github.com/neurobin/rnm>.

- Replace a search string with a replacement string in filenames:

`rnm -ss {{old}} -rs {{new}} {{path/to/directory}}`

- Use a fixed (literal) search and replace string instead of `regex`:

`rnm -ssf {{old}} -rs {{new}} {{path/to/files}}`

- Add an auto-incremented index to filenames starting from 1:

`rnm -i 1 -inc 1 -rs {{_}} {{path/to/files}}`

- Rename files using a list of new names from a text file:

`rnm -ns/f {{path/to/names.txt}} {{path/to/files}}`

- Rename only files (ignoring directories and links):

`rnm -fo -ss {{pattern}} -rs {{replacement}} {{path/to/files}}`

- Sort input files by modification time before renaming:

`rnm -s/mt -ss {{pattern}} -rs {{replacement}} {{path/to/files}}`

- Run a simulation without making actual changes:

`rnm -sim -ss {{pattern}} -rs {{replacement}} {{path/to/files}}`

- Undo the last renaming operation:

`rnm -u`
