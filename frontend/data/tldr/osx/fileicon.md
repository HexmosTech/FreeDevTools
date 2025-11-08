---
title: "Manage File Icons - Customize Icons on macOS | Online Free DevTools by Hexmos"
name: fileicon
path: "/freedevtools/tldr/osx/fileicon/"
canonical: "https://hexmos.com/freedevtools/tldr/osx/fileicon/"
description: "Manage file icons with fileicon. Customize macOS file and folder icons using the command line. Free online tool, no registration required."
category: osx
keywords:
- macOS file icon manager
- command line icon editor
- osx custom icon set
- file icon manipulator
- folder icon changer
- icns file creator
- terminal icon utility
- apple file icon tool
- macos icon customization
- fileicon tool
features:
- Set custom icons for files and directories
- Remove custom icons from files and directories
- Extract icon data from files as .icns
- Test if a file or directory has a custom icon
- Manage file and folder icons via command line
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# fileicon

> Manage custom file and folder icons.
> More information: <https://github.com/mklement0/fileicon>.

- Set a custom icon for a specific file or directory:

`fileicon set {{path/to/file_or_directory}} {{path/to/icon_file.png}}`

- Remove a custom icon from a specific file or directory:

`fileicon rm {{path/to/file_or_directory}}`

- Save the custom icon of a file or directory as a `.icns` file into the current directory:

`fileicon get {{path/to/file_or_directory}}`

- Test if a specific file or directory has a custom icon:

`fileicon test {{path/to/file_or_directory}}`
