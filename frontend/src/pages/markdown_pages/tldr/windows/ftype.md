---
title: "Ftype - Control File Associations | Online Free DevTools by Hexmos"
name: ftype
path: /freedevtools/tldr/windows/ftype
canonical: "https://hexmos.com/freedevtools/tldr/windows/ftype/"
description: "Control file associations with Ftype on Windows. Associate file extensions with specific programs for seamless workflow. Free online tool, no registration required."
category: windows
keywords:
- file association control
- file type association
- windows file associations
- ftype command windows
- file extension manager
- associate file extension
- modify file type
- ftype syntax
- windows command line
- file association utility
features:
- Display a list of all file types.
- Display the associated program for a file type.
- Set the associated program for a file type.
- Modify file associations via command line.
- Manage file type settings.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ftype

> Display or modify file types used for file extension association.
> More information: <https://learn.microsoft.com/windows-server/administration/windows-commands/ftype>.

- Display a list of all file types:

`ftype`

- Display the associated program for a specific file type:

`ftype {{file_type}}`

- Set the associated program for a specific file type:

`ftype {{file_type}}="{{path/to/executable_file}}"`
