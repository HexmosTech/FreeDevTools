---
title: "Rip Files - Remove and Recover Files | Online Free DevTools by Hexmos"
name: rip
path: /freedevtools/tldr/common/rip
canonical: "https://hexmos.com/freedevtools/tldr/common/rip/"
description: "Remove files easily with Rip, the file deletion and recovery tool. Securely manage your deleted files and recover them when needed. Free online tool, no registration required."
category: common
keywords:
- file deletion
- file recovery
- command line file removal
- recycle bin alternative
- linux file deletion
- macos file deletion
- windows file deletion
- file management
- command line tools
- graveyard files
features:
- Remove files and directories to a recoverable location
- Interactively remove files with confirmation prompts
- List files in the graveyard for recovery
- Permanently delete files from the graveyard
- Recover files from the most recent removal operation
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# rip

> Remove files or directories by sending them to the graveyard, allowing for them to be recovered.
> More information: <https://github.com/nivekuil/rip>.

- Remove files or directories from specified locations and place them in the graveyard:

`rip {{path/to/file_or_directory}} {{path/to/another/file_or_directory}}`

- Interactively remove files or directories, with a prompt before every removal:

`rip --inspect {{path/to/file_or_directory}} {{path/to/another/file_or_directory}}`

- List all files and directories in the graveyard that were originally within the current directory:

`rip --seance`

- Permanently delete every file and directory in the graveyard:

`rip --decompose`

- Put back the files and directories which were affected by the most recent removal:

`rip --unbury`

- Put back every file and directory that is listed by `rip --seance`:

`rip --seance --unbury`
