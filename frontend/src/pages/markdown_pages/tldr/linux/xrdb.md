---
title: "Xrdb Resource Database - Manage X Window System Settings | Free DevTools"
name: xrdb
path: /freedevtools/tldr/linux/xrdb
canonical: "https://hexmos.com/freedevtools/tldr/linux/xrdb/"
description: "Manage X Window System settings with xrdb. Load, query, and modify resource files for customized appearance and behavior. Free online tool, no registration required."
category: linux
keywords:
  - xrdb resource manager
  - xrdb resource editor
  - x window system configuration
  - linux xrdb command
  - unix xrdb utility
  - xrdb resource file editor
  - xrdb settings management
  - manage x resources
  - xrdb query command
  - xrdb load command
features:
  - Load resource settings from files
  - Query and display current resource settings
  - Modify X Window System resource database interactively
  - Apply custom styles and themes using resource files
  - Manage application-specific settings via resource files
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# xrdb

> X window server's resource database utility for Unix-like systems.
> More information: <https://www.x.org/releases/current/doc/man/man1/xrdb.1.xhtml>.

- Start `xrdb` in interactive mode:

`xrdb`

- Load values (e.g. style rules) from a resource file:

`xrdb -load {{~/.Xresources}}`

- Query the resource database and print currently set values:

`xrdb -query`
