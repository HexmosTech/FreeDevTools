---
title: "Fossil Delete - Control Versioned Files | Online Free DevTools by Hexmos"
name: fossil-delete
path: "/freedevtools/tldr/fossil/fossil-delete/"
canonical: "https://hexmos.com/freedevtools/tldr/fossil/fossil-delete/"
description: "Control versioned files with Fossil Delete. Remove files or directories from version control with ease using this command line tool. Free online tool, no registration required."
category: common
keywords:
- fossil delete
- fossil remove
- fossil version control
- scm delete
- source control delete
- fossil rm
- fossil hard delete
- fossil reset delete
- versioned file removal
- fossil file management
features:
- Remove files from Fossil version control
- Remove directories from Fossil version control
- Hard delete files from both version control and disk
- Reset deletion by re-adding previously removed files
- Manage files in a Fossil repository
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# fossil delete

> Remove files or directories from Fossil version control.
> See also: `fossil forget`.
> More information: <https://fossil-scm.org/home/help/rm>.

- Remove a file or directory from Fossil version control:

`fossil {{[rm|delete]}} {{path/to/file_or_directory}}`

- Remove a file or directory from Fossil version control, and also delete it from the disk:

`fossil {{[rm|delete]}} --hard {{path/to/file_or_directory}}`

- Re-add all previously removed and uncommitted files to Fossil version control:

`fossil {{[rm|delete]}} --reset`
