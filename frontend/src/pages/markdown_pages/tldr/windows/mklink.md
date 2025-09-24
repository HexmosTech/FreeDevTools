---
title: "Create Symbolic Links - mklink | Online Free DevTools by Hexmos"
name: mklink
path: /freedevtools/tldr/windows/mklink
canonical: "https://hexmos.com/freedevtools/tldr/windows/mklink/"
description: "Create symbolic links with mklink. Generate file and directory links, including hard links and directory junctions. Free online tool, no registration required."
category: windows
keywords:
- symbolic link creation
- windows symbolic link
- mklink command windows
- file link generation
- directory link creation
- hard link windows
- directory junction windows
- windows link management
- mklink example
- windows command line link
features:
- Create symbolic links to files
- Create symbolic links to directories
- Generate hard links to files
- Create directory junctions
- Manage file system links on Windows
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# mklink

> Create symbolic links.
> More information: <https://learn.microsoft.com/windows-server/administration/windows-commands/mklink>.

- Create a symbolic link to a file:

`mklink {{path\to\link_file}} {{path\to\source_file}}`

- Create a symbolic link to a directory:

`mklink /d {{path\to\link_file}} {{path\to\source_directory}}`

- Create a hard link to a file:

`mklink /h {{path\to\link_file}} {{path\to\source_file}}`

- Create a directory junction:

`mklink /j {{path\to\link_file}} {{path\to\source_file}}`
