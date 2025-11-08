---
title: "Simulate Keyboard Input - Control Text with wtype | Online Free DevTools by Hexmos"
name: wtype
path: "/freedevtools/tldr/linux/wtype/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/wtype/"
description: "Control keyboard input with wtype. Simulate text typing and key presses on Wayland, a powerful alternative to xdotool. Free online tool, no registration required."
category: linux
keywords:
- wayland keyboard input
- linux text typing
- simulate keystrokes linux
- wtype command line
- keyboard automation linux
- type text wayland
- linux input simulation
- wayland text control
- linux wtype tutorial
- command line keyboard input
features:
- Simulate text typing on Wayland
- Control specific key presses
- Press and release modifier keys (Shift, Ctrl)
- Introduce delays between keystrokes
- Read text from standard input (stdin)
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# wtype

> Simulate keyboard input on Wayland, similar to `xdotool type` for X11.
> See also: `ydotool`.
> More information: <https://manned.org/wtype>.

- Simulate typing text:

`wtype "{{Hello World}}"`

- Type a specific key:

`wtype -k {{Left}}`

- Press a modifier:

`wtype -M {{shift|ctrl|...}}`

- Release a modifier:

`wtype -m {{ctrl}}`

- Wait between keystrokes (in milliseconds):

`wtype -d {{500}} -- "{{text}}"`

- Read text from `stdin`:

`echo "{{text}}" | wtype -`
