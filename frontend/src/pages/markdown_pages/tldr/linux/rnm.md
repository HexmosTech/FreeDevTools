---
title: "Rename Files - Bulk Rename Tool | Online Free DevTools by Hexmos"
name: rnm
path: /freedevtools/tldr/linux/rnm
canonical: "https://hexmos.com/freedevtools/tldr/linux/rnm/"
description: "Rename files in bulk with RNM, a powerful command-line utility. Automate file renaming tasks, search/replace strings, and add indexes. Free online tool, no registration required."
category: linux
keywords:
  - bulk rename linux
  - rename files command line
  - linux file rename
  - rnm rename utility
  - batch rename files
  - command line rename tool
  - find and replace filenames linux
  - rename files with index
  - rename files from list linux
  - rename files modification time
features:
  - Replace strings in filenames using regex or literal matches
  - Add auto-incrementing indexes to filenames for easy sequencing
  - Rename files using a list of new names from a text file
  - Filter files for renaming by type (files only, ignoring directories)
  - Sort files by modification time before applying renaming operations
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
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
