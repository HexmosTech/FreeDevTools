---
title: "Start X Session - Control X11 Display | Online Free DevTools by Hexmos"
name: startx
path: /freedevtools/tldr/linux/startx
canonical: "https://hexmos.com/freedevtools/tldr/linux/startx/"
description: "Control X11 display sessions with startx. Start X sessions with custom depths and dpi settings. Free online tool, no registration required."
category: linux
keywords:
  - X11 session manager
  - X server controller
  - startx linux command
  - X window system launcher
  - display server manager
  - xinit frontend
  - X11 session customizer
  - linux display configuration
  - X server configuration
  - graphical environment starter
features:
  - Launch X sessions from the command line
  - Customize display depth for X sessions
  - Configure DPI settings for X sessions
  - Override .xinitrc settings to start specific environments
  - Start a graphical environment using a specified window manager
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# startx

> A front-end to `xinit` that provides a nice user interface for running a single session of the X Window System.
> More information: <https://x.org/releases/X11R7.5/doc/man/man1/startx.1.html>.

- Start an X session:

`startx`

- Start an X session with a predefined depth value:

`startx -- -depth {{value}}`

- Start an X session with a predefined dpi value:

`startx -- -dpi {{value}}`

- Override the settings in the `.xinitrc` file and start a new X session:

`startx /{{path/to/window_manager_or_desktop_environment}}`
