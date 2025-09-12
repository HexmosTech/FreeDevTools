---
title: "GVfs File Manager - Handle Files Easily | Free DevTools"
name: gio
path: /freedevtools/tldr/unknown/gio
canonical: "https://hexmos.com/freedevtools/tldr/unknown/gio/"
description: "Handle files easily with GVfs File Manager, a command-line tool for manipulating files and directories. Manage local and virtual files without GNOME. Free online tool, no registration required."
category: unknown
keywords:
- GVfs file manager
- virtual file system
- command line file management
- gio copy
- gio trash
- gio open
- linux file management
- desktop file handling
- GVfs command
- file manipulation
features:
- Open files with default applications
- List contents of directories
- Display detailed file information
- Copy files between locations
- Send files to the trash
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# gio

> Handle local and virtual files (GVfs).
> Part of GLib used in GNOME-based systems.
> More information: <https://manned.org/gio>.

- Open a file with the default application (e.g. PDF, image):

`gio open {{path/to/file}}`

- List files in a directory:

`gio list {{path/to/directory}}`

- Show information about a file:

`gio info {{path/to/file}}`

- Copy a file:

`gio copy {{path/to/source}} {{path/to/destination}}`

- Send a file to the trash (reversible):

`gio trash {{path/to/file}}`
