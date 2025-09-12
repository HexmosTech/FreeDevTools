---
title: "Compile Terminfo - Manage Terminal Definitions | Free DevTools"
name: tic
path: /freedevtools/tldr/linux/tic
canonical: "https://hexmos.com/freedevtools/tldr/linux/tic/"
description: "Compile terminfo with tic for managing terminal definitions on Linux. Validate terminfo files and customize terminal behavior with this command-line tool. Free online tool, no registration required."
category: linux
keywords:
- terminfo compiler
- terminal definition manager
- linux terminfo
- ncurses terminfo
- terminal emulator configuration
- tic command linux
- compile terminal database
- validate terminfo file
- custom terminal settings
- terminal capabilities definition
features:
- Compile terminfo definitions for various terminals
- Validate terminfo files for syntax and errors
- Install compiled terminfo database for ncurses
- Customize terminal behavior using terminfo entries
- Print terminfo database locations
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# tic

> Compile terminfo and install for ncurses.
> More information: <https://manned.org/tic>.

- Compile and install terminfo for a terminal:

`tic -xe {{terminal}} {{path/to/terminal.info}}`

- Check terminfo file for errors:

`tic -c {{path/to/terminal.info}}`

- Print database locations:

`tic -D`
