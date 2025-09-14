---
title: "Attrib - Control File Attributes on Windows | Free DevTools"
name: attrib
path: /freedevtools/tldr/windows/attrib
canonical: "https://hexmos.com/freedevtools/tldr/windows/attrib/"
description: "Control file attributes with Attrib on Windows. Modify read-only, hidden, system, and archive flags. Free online tool, no registration required."
category: windows
keywords:
- windows file attributes
- attrib command
- change file attributes
- windows command line
- file permission manager
- modify read only attribute
- hide files windows
- system file attribute
- archive file flag
- windows file visibility
features:
- Display attributes of files and directories.
- Add or remove read-only attribute.
- Add or remove hidden attribute.
- Add or remove system attribute.
- Recursively apply attribute changes to subdirectories.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# attrib

> Display or change attributes of files or directories.
> More information: <https://learn.microsoft.com/windows-server/administration/windows-commands/attrib>.

- Display all set attributes of files in the current directory:

`attrib`

- Display all set attributes of files in a specific directory:

`attrib {{path\to\directory}}`

- Display all set attributes of files and [d]irectories in the current directory:

`attrib /d`

- Display all set attributes of files in the current directory and [s]ub-directories:

`attrib /s`

- Add the `[r]ead-only` or `[a]rchive` or `[s]ystem` or `[h]idden` or `not content [i]ndexed` attribute to files or directories:

`attrib +{{r|a|s|h|i}} {{path\to\file_or_directory1 path\to\file_or_directory2 ...}}`

- Remove a specific attribute of files or directories:

`attrib -{{r|a|s|h|i}} {{path\to\file_or_directory1 path\to\file_or_directory2 ...}}`
