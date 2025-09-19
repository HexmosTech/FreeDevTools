---
title: "Kitty Terminal - Control Terminal Sessions | Online Free DevTools by Hexmos"
name: kitty
path: /freedevtools/tldr/common/kitty
canonical: "https://hexmos.com/freedevtools/tldr/common/kitty/"
description: "Control terminal sessions easily with Kitty Terminal. Launch new windows, display images, and copy to clipboard using simple commands. Free online tool, no registration required."
category: common
keywords:
- GPU terminal emulator
- terminal session manager
- kitty command line
- terminal window control
- linux terminal emulator
- macos terminal emulator
- image display terminal
- clipboard integration terminal
- kitty themes
- terminal configuration tool
features:
- Open new terminal windows
- Set custom window titles
- Utilize built-in theme chooser
- Display images within the terminal
- Copy stdin contents to the clipboard
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# kitty

> A fast, feature-rich, GPU based terminal emulator.
> More information: <https://sw.kovidgoyal.net/kitty/>.

- Open a new terminal:

`kitty`

- Open a terminal with the specified title for the window:

`kitty --title "{{title}}"`

- Start the theme-chooser builtin:

`kitty +kitten themes`

- Display an image in the terminal:

`kitty +kitten icat {{path/to/image}}`

- Copy the contents of `stdin` to the clipboard:

`echo {{example}} | kitty +kitten clipboard`
