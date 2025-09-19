---
title: "Figlet Fonts - List & Control FIGlet Fonts | Online Free DevTools by Hexmos"
name: figlist
path: /freedevtools/tldr/common/figlist
canonical: "https://hexmos.com/freedevtools/tldr/common/figlist/"
description: "List FIGlet fonts with figlist, the command-line font listing tool. Discover available fonts, search by keyword, and count fonts. Free online tool, no registration required."
category: common
keywords:
- figlet fonts list
- figlet font viewer
- figlet font directory
- command line fonts
- ascii art fonts
- figlet custom fonts
- figlet linux
- figlet macos
- figlet common
- display fonts
features:
- List available figlet fonts
- Specify custom font directory
- Search for fonts by keyword
- Count total fonts in directory
- Control font output for figlet
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# figlist

> List the figlet fonts and control files.
> See also: `figlet`, `showfigfonts`, `chkfont`.
> More information: <https://manned.org/figlist>.

- List all available fonts using the default font directory:

`figlist`

- List fonts from a custom directory:

`figlist -d {{path/to/directory}}`

- Search for a font by keyword:

`figlist -d {{path/to/directory}} | grep {{keyword}}`

- Count the total number of available fonts in a specified directory:

`figlist -d {{path/to/directory}} | wc {{[-l|--lines]}}`
