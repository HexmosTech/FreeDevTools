---
title: "Forfiles - Control Files with Windows Command | Online Free DevTools by Hexmos"
name: forfiles
path: /freedevtools/tldr/windows/forfiles
canonical: "https://hexmos.com/freedevtools/tldr/windows/forfiles/"
description: "Control files effectively with Forfiles, the Windows command-line utility. Automate file processing and batch operations. Free online tool, no registration required."
category: windows
keywords:
- windows file management
- forfiles command
- batch file processing windows
- command line file selection
- windows file automation
- file date filter windows
- recursive file search windows
- glob pattern file selection
- windows command shell scripting
- file processing script windows
features:
- Select files based on date criteria
- Execute commands on a group of files
- Search for files recursively in subdirectories
- Filter files using glob patterns
- Automate batch processing operations on Windows
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# forfiles

> Select files to execute a specified command on.
> More information: <https://learn.microsoft.com/windows-server/administration/windows-commands/forfiles>.

- Search for files in the current directory:

`forfiles`

- Search for files in a specific directory:

`forfiles /p {{path\to\directory}}`

- Run the specified command for each file:

`forfiles /c "{{command}}"`

- Search for files using a specific glob mask:

`forfiles /m {{glob_pattern}}`

- Search for files recursively:

`forfiles /s`

- Search for files older than 5 days:

`forfiles /d +{{5}}`
