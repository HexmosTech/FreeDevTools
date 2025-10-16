---
title: "NVRAM Manager - Control Firmware Variables on macOS | Online Free DevTools by Hexmos"
name: nvram
path: "/freedevtools/tldr/osx/nvram/"
canonical: "https://hexmos.com/freedevtools/tldr/osx/nvram/"
description: "Control firmware variables effectively with NVRAM Manager. Manage, print, and delete NVRAM settings directly from the command line. Free online tool, no registration required."
category: osx
keywords:
- NVRAM manager
- macOS NVRAM control
- Firmware variable editor
- NVRAM variable print
- macOS boot settings
- NVRAM XML export
- NVRAM delete variable
- NVRAM clear settings
- NVRAM command line
- OSX NVRAM access
features:
- Print all NVRAM variables
- Export NVRAM variables to XML format
- Modify NVRAM variable values
- Delete specific NVRAM variables
- Clear all NVRAM settings
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# nvram

> Manipulate firmware variables.
> More information: <https://keith.github.io/xcode-man-pages/nvram.8.html>.

- [p]rint all the variables stored in the NVRAM:

`nvram -p`

- [p]rint all the variables stored in the NVRAM using [x]ML format:

`nvram -xp`

- Modify the value of a firmware variable:

`sudo nvram {{name}}="{{value}}"`

- [d]elete a firmware variable:

`sudo nvram -d {{name}}`

- [c]lear all the firmware variables:

`sudo nvram -c`

- Set a firmware variable from a specific [x]ML [f]ile:

`sudo nvram -xf {{path/to/file.xml}}`
