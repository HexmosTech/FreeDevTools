---
title: "Assoc - Manage File Associations | Online Free DevTools by Hexmos"
name: assoc
path: /freedevtools/tldr/windows/assoc
canonical: "https://hexmos.com/freedevtools/tldr/windows/assoc/"
description: "Manage file associations with Assoc. Configure file extension associations and control file type mappings with this Windows command. Free online tool, no registration required."
category: windows
keywords:
- file association manager
- file extension association
- windows file types
- assoc command windows
- change file association
- view file association
- configure file association
- windows command line tools
- file type mapping windows
- cmd assoc
features:
- Display existing file extension associations
- Change file extension associations
- Set a new file type for an extension
- List all file associations
- Page through the output with the more command
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# assoc

> Display or change associations between file extensions and file types.
> More information: <https://learn.microsoft.com/windows-server/administration/windows-commands/assoc>.

- List all associations between file extensions and file types:

`assoc`

- Display the associated file type for a specific extension:

`assoc {{.txt}}`

- Set the associated file type for a specific extension:

`assoc .{{txt}}={{txtfile}}`

- View the output of `assoc` one screen at a time:

`assoc | {{more}}`
