---
title: "Set Keyboard Layout - Control X Keyboard with setxkbmap | Online Free DevTools by Hexmos"
name: setxkbmap
path: /freedevtools/tldr/linux/setxkbmap
canonical: "https://hexmos.com/freedevtools/tldr/linux/setxkbmap/"
description: "Control keyboard layouts with setxkbmap.  Easily switch between multiple keyboard layouts, variants, and options. Free online tool, no registration required."
category: linux
keywords:
  - keyboard layout manager
  - linux keyboard configuration
  - setxkbmap command
  - x keyboard extension
  - keyboard layout switcher
  - linux command line
  - keyboard layout options
  - x11 keyboard settings
  - multiple keyboard layouts
  - setxkbmap tutorial
features:
  - Set single keyboard layouts (e.g., French AZERTY).
  - Configure multiple keyboard layouts simultaneously.
  - Define keyboard layout variants (e.g., QWERTY).
  - Customize keyboard switching options (e.g., Alt+Caps Lock toggle).
  - List available layouts, variants, and options.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# setxkbmap

> Set the keyboard using the X Keyboard Extension.
> More information: <https://manned.org/setxkbmap>.

- Set the keyboard in French AZERTY:

`setxkbmap {{fr}}`

- Set multiple keyboard layouts, their variants and switching option:

`setxkbmap -layout {{us,de}} -variant {{,qwerty}} -option {{'grp:alt_caps_toggle'}}`

- List all layouts:

`localectl list-x11-keymap-layouts`

- List variants for the layout:

`localectl list-x11-keymap-variants {{de}}`

- List available switching options:

`localectl list-x11-keymap-options | grep grp:`

- Display help:

`setxkbmap -help`
