---
title: "Create Virtual Drives - Control Paths with Subst | Online Free DevTools by Hexmos"
name: subst
path: "/freedevtools/tldr/windows/subst/"
canonical: "https://hexmos.com/freedevtools/tldr/windows/subst/"
description: "Create virtual drives instantly with Subst on Windows. Associate paths to drive letters for easier access and management. Free online tool, no registration required."
category: windows
keywords:
- virtual drive creator
- windows path manager
- subst command tool
- drive letter mapping
- path association utility
- create virtual drive windows
- mount folder as drive
- subst windows command
- virtual drive shortcut
- windows command line tools
features:
- Associate a path with a virtual drive letter
- List all active virtual drive associations
- Remove an existing virtual drive association
- Easily access deep file paths using a drive letter
- Create shortcuts for frequently used paths
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# subst

> Associates a path with a virtual drive letter.
> More information: <https://learn.microsoft.com/windows-server/administration/windows-commands/subst>.

- List active associations:

`subst`

- Add an association:

`subst {{Z:}} {{C:\Python2.7}}`

- Remove an association:

`subst {{Z:}} /d`
