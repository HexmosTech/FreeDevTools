---
title: "Replace Files - Manage File Replacement | Free DevTools"
name: replace
path: /freedevtools/tldr/windows/replace
canonical: "https://hexmos.com/freedevtools/tldr/windows/replace/"
description: "Manage file replacement with Replace Files, allowing you to efficiently update or add files in directories. Free online tool, no registration required."
category: windows
keywords:
- file replacement command
- windows file replace
- replace files windows
- command line file management
- batch file replace
- windows directory update
- file update utility
- command line replace tool
- windows replace command examples
- file replace automation
features:
- Replace files in a destination directory with source files
- Add new files to a directory without replacing existing ones
- Interactively prompt before replacing files
- Force replace read-only files
- Replace files in subdirectories recursively
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# replace

> Replace files.
> See also: `robocopy`, `move`, `copy`, `del`.
> More information: <https://learn.microsoft.com/windows-server/administration/windows-commands/replace>.

- Replace the destination file with the one from the source directory:

`replace {{path\to\file_or_directory}} {{path\to\destination_directory}}`

- Add files to the destination directory instead of replacing existing files:

`replace {{path\to\file_or_directory}} {{path\to\destination_directory}} /a`

- Interactively copy multiple files, with a prompt before replacing or adding a destination file:

`replace {{path\to\file_or_directory}} {{path\to\destination_directory}} /p`

- Replace even read only files:

`replace {{path\to\file_or_directory}} {{path\to\destination_directory}} /r`

- Wait for you to insert a disk before it replaces files (originally to allow inserting a floppy disk):

`replace {{path\to\file_or_directory}} {{path\to\destination_directory}} /w`

- Replace all files in subdirectories of the destination:

`replace {{path\to\file_or_directory}} {{path\to\destination_directory}} /s`

- Replace only files in the destination directory which are older than the files in the source directory:

`replace {{path\to\file_or_directory}} {{path\to\destination_directory}} /u`

- Display help:

`replace /?`
