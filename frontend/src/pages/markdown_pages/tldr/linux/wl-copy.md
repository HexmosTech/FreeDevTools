---
title: "Copy Clipboard - Control Wayland Clipboard | Online Free DevTools by Hexmos"
name: wl-copy
path: /freedevtools/tldr/linux/wl-copy
canonical: "https://hexmos.com/freedevtools/tldr/linux/wl-copy/"
description: "Control Wayland clipboard with wl-copy. Copy text, images, and output to the clipboard effortlessly on Linux systems. Free online tool, no registration required."
category: linux
keywords:
- wayland clipboard copy
- linux clipboard manager
- wl-copy command
- wayland clipboard tools
- command line clipboard
- copy text to clipboard
- clipboard copy paste linux
- wayland copy image
- linux terminal clipboard
- clear wayland clipboard
features:
- Copy text to the Wayland clipboard from the command line
- Pipe command output directly to the clipboard
- Copy content for single use and then clear the clipboard
- Transfer image data to the Wayland clipboard
- Clear the Wayland clipboard contents instantly
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# wl-copy

> Clear and copy to Wayland clipboard.
> See also: `wl-paste`, `xclip`.
> More information: <https://github.com/bugaevc/wl-clipboard>.

- Copy the text to the clipboard:

`wl-copy "{{text}}"`

- Pipe the command (`ls`) output to the clipboard:

`{{ls}} | wl-copy`

- Copy for only one paste and then clear it:

`wl-copy --paste-once "{{text}}"`

- Copy an image:

`wl-copy < {{path/to/image}}`

- Clear the clipboard:

`wl-copy --clear`
