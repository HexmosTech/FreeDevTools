---
title: "Open Files - Access Files & URIs | Online Free DevTools by Hexmos"
name: open.fish
path: /freedevtools/tldr/common/open.fish
canonical: "https://hexmos.com/freedevtools/tldr/common/open.fish/"
description: "Access files with Open command. Quickly open files, directories, and URIs using default applications across platforms. Free online tool, no registration required."
category: common
keywords:
- file opener
- uri opener
- directory opener
- fish shell open
- haiku open command
- macos open command
- file association opener
- default application launcher
- open file extension
- open website
features:
- Open files with default applications
- Open directories with default file manager
- Open URLs with default browser
- Open URIs with registered applications
- Launch files by extension
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# open

> Opens files, directories, and URIs with default applications.
> This command is available through fish on operating systems without the built-in `open` command (e.g. Haiku and macOS).
> More information: <https://fishshell.com/docs/current/cmds/open.html>.

- Open a file with the associated application:

`open {{path/to/file.ext}}`

- Open all the files of a given extension in the current directory with the associated application:

`open {{*.ext}}`

- Open a directory using the default file manager:

`open {{path/to/directory}}`

- Open a website using the default web browser:

`open {{https://example.com}}`

- Open a specific URI using the default application that can handle it:

`open {{tel:123}}`
