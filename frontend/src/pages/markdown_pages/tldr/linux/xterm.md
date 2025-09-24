---
title: "Control XTerm - Terminal Emulator for X Window System | Online Free DevTools by Hexmos"
name: xterm
path: /freedevtools/tldr/linux/xterm
canonical: "https://hexmos.com/freedevtools/tldr/linux/xterm/"
description: "Control terminal sessions with XTerm, a powerful terminal emulator for the X Window System. Customize appearance, geometry, and fonts with ease. Free online tool, no registration required."
category: linux
keywords:
  - xterm terminal emulator
  - x window system terminal
  - command line terminal
  - terminal customization
  - linux terminal commands
  - unix terminal emulator
  - x11 terminal configuration
  - terminal font settings
  - terminal geometry settings
  - terminal background color
features:
  - Customize terminal appearance with colors and fonts
  - Set terminal window geometry and position
  - Open terminal sessions in fullscreen mode
  - Specify terminal title for easy identification
  - Configure characters per line and number of lines
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# xterm

> A terminal emulator for the X Window System.
> More information: <https://manned.org/xterm>.

- Open the terminal with a title of `Example`:

`xterm -T {{Example}}`

- Open the terminal in fullscreen mode:

`xterm -fullscreen`

- Open the terminal with a dark blue background and yellow foreground (font color):

`xterm -bg {{darkblue}} -fg {{yellow}}`

- Open the terminal with 100 characters per line and 35 lines, in screen position x=200px, y=20px:

`xterm -geometry {{100}}x{{35}}+{{200}}+{{20}}`

- Open the terminal using a Serif font and a font size equal to 20:

`xterm -fa {{'Serif'}} -fs {{20}}`
