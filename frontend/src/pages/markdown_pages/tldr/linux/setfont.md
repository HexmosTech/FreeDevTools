---
title: "Setfont - Control Terminal Font | Free DevTools"
name: setfont
path: /freedevtools/tldr/linux/setfont
canonical: "https://hexmos.com/freedevtools/tldr/linux/setfont/"
description: "Control terminal font with Setfont, a linux command to customize TTY fonts. Enhance accessibility and personalization effortlessly. Free online tool, no registration required."
category: linux
keywords:
- terminal font control
- linux setfont command
- tty font configuration
- font size adjustment
- console font settings
- command-line font tool
- keyboard font mapping
- linux terminal customization
- setfont utility
- change tty font
features:
- Change the terminal font on TTYs
- Specify a font path for custom font selection
- Double the terminal font size for better visibility
- Reset the terminal font to the default setting
- Configure font mapping for different keyboard layouts
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# setfont

> Set the terminal font for TTYs.
> More information: <https://manned.org/setfont>.

- Change the terminal font:

`setfont {{font}}.gz`

- Change the terminal font by specifying a path:

`setfont /usr/share/kbd/{{mapping}}/{{font.ext}}`

- Double font size:

`setfont {{[-d|--double]}}`

- Reset to the default font:

`setfont`
