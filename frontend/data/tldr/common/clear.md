---
title: "Clear Terminal - Erase Screen | Online Free DevTools by Hexmos"
name: clear
path: "/freedevtools/tldr/common/clear/"
canonical: "https://hexmos.com/freedevtools/tldr/common/clear/"
description: "Erase the terminal screen with Clear Terminal. Quickly clear your command line interface, preserve scrollback buffer, and specify terminal types. Free online tool, no registration required."
category: common
keywords:
- clear terminal screen
- erase command line
- terminal screen clear
- command line clear
- linux clear command
- macos clear command
- unix clear screen
- command prompt clear
- terminal reset
- ncurses clear
features:
- Erase the terminal display
- Preserve scrollback buffer
- Specify terminal type
- Display ncurses version
- Reset command line interface
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# clear

> Clears the screen of the terminal.
> More information: <https://manned.org/clear>.

- Clear the screen:

`clear`

- Clear the screen but keep the terminal's scrollback buffer (equivalent to pressing `<Ctrl l>` in Bash):

`clear -x`

- Indicate the type of terminal to clean (defaults to the value of the environment variable `TERM`):

`clear -T {{type_of_terminal}}`

- Display the version of `ncurses` used by `clear`:

`clear -V`
