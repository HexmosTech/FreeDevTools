---
title: "Control Files - Manage Files with nnn | Online Free DevTools by Hexmos"
name: nnn
path: /freedevtools/tldr/common/nnn
canonical: "https://hexmos.com/freedevtools/tldr/common/nnn/"
description: "Manage files efficiently with nnn, an interactive terminal file manager. Analyze disk usage, sort files and open bookmarks in a terminal. Free online tool, no registration required."
category: common
keywords:
- terminal file manager
- console file explorer
- disk usage analyzer
- nnn linux
- nnn macos
- command line file management
- interactive file navigation
- terminal disk space
- file sorting tool
- bookmark file opener
features:
- Open directories in terminal
- Show hidden files and directories
- Open predefined bookmarks
- Sort files by different criteria
- Open selected files with external programs
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# nnn

> Interactive terminal file manager and disk usage analyzer.
> More information: <https://github.com/jarun/nnn/wiki/Usage#program-options>.

- Open the current directory (or specify one as the first argument):

`nnn`

- Start in detailed mode:

`nnn -d`

- Show hidden files:

`nnn -H`

- Open an existing bookmark (defined in the `NNN_BMS` environment variable):

`nnn -b {{bookmark_name}}`

- Sort files on [a]pparent disk usage / [d]isk usage / [e]xtension / [r]everse / [s]ize / [t]ime / [v]ersion:

`nnn -T {{a|d|e|r|s|t|v}}`

- Open a file you have selected. Select the file then press `<o>`, and type a program to open the file in:

`nnn -o`
