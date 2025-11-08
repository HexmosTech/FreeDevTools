---
title: "Framebuffer Control - Modify Display Settings | Online Free DevTools by Hexmos"
name: fbset
path: "/freedevtools/tldr/linux/fbset/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/fbset/"
description: "Control framebuffer settings with fbset. Modify display resolution, geometry and color depth. Free online tool, no registration required."
category: linux
keywords:
  - framebuffer control
  - display settings modification
  - framebuffer resolution
  - linux framebuffer
  - console display
  - fbset command
  - display configuration
  - video mode setting
  - color depth control
  - tty settings
features:
  - Show current framebuffer settings
  - Set framebuffer mode from predefined configurations
  - Define arbitrary framebuffer modes
  - Configure display geometry
  - Adjust color depth settings
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# fbset

> Show and modify frame buffer device settings.
> More information: <https://manned.org/man/fbset.1>.

- Show current framebuffer settings:

`sudo fbset {{[-i|--info]}}`

- Set a framebuffer mode defined in `/etc/fb.modes`:

`sudo fbset "{{800}}x{{600}}-{{60}}"`

- Set an arbitrary framebuffer mode:

`sudo fbset {{[-g|--geometry]}} {{TTY_horizontal}} {{TTY_vertical}} {{monitor_horizontal}} {{monitor_vertical}} {{color_depth}}`
