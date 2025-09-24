---
title: "Display Teddy Bear - Control X Desktop with xteddy | Online Free DevTools by Hexmos"
name: xteddy
path: /freedevtools/tldr/common/xteddy
canonical: "https://hexmos.com/freedevtools/tldr/common/xteddy/"
description: "Display teddy bear on your X desktop with xteddy. Customize placement, keep it on top, and even replace it with another image. Free online tool, no registration required."
category: common
keywords:
- X Desktop Teddy Bear
- X Windows Bear
- Linux Desktop Toy
- X11 Teddy
- X Display Manager
- Image Display Tool
- Desktop Customization
- Window Manager Control
- X Geometry Tool
- Desktop Toy
features:
- Display a teddy bear on the X Windows desktop.
- Control the placement of the teddy bear using X geometry.
- Make the teddy bear stay on top of all other windows.
- Use a custom image instead of the default teddy bear.
- Prevent the teddy bear window from being closed with the 'q' key.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# xteddy

> A cuddly teddy bear for your X Windows desktop.
> More information: <https://manned.org/xteddy>.

- Display a cuddly teddy bear on your X desktop:

`xteddy`

- Use the window manager to display the teddy bear and ignore the "quit" (`q`) command:

`xteddy -wm -noquit`

- Make the teddy bear stay on top of all other windows:

`xteddy -float`

- Display another image [F]ile instead of the cuddly teddy bear:

`xteddy -F {{path/to/image}}`

- Set the initial location of the teddy bear (`width` and `height` are ignored):

`xteddy -geometry {{width}}x{{height}}+{{x}}+{{y}}`
