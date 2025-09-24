---
title: "X11VNC Control - Remote Linux Desktops | Online Free DevTools by Hexmos"
name: x11vnc
path: /freedevtools/tldr/linux/x11vnc
canonical: "https://hexmos.com/freedevtools/tldr/linux/x11vnc/"
description: "Control remote Linux desktops with X11VNC. Enable VNC access on existing displays for easy management and collaboration. Free online tool, no registration required."
category: linux
keywords:
- linux vnc server
- x11vnc remote access
- desktop sharing linux
- vnc display control
- remote desktop viewer
- linux remote administration
- x11 vnc connection
- shared vnc session
- headless linux vnc
- vnc server configuration
features:
- Launch a VNC server on an existing display.
- Allow multiple VNC clients to connect simultaneously.
- Control a Linux desktop remotely using VNC.
- Configure view-only VNC sessions.
- Specify display and screen for VNC server.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# x11vnc

> A VNC server that will enable VNC on an existing display server.
> By default, the server will automatically terminate once all clients disconnect from it.
> More information: <https://manned.org/x11vnc>.

- Launch a VNC server that allows multiple clients to connect:

`x11vnc -shared`

- Launch a VNC server in view-only mode, and which won't terminate once the last client disconnects:

`x11vnc -forever -viewonly`

- Launch a VNC server on a specific display and screen (both starting at index zero):

`x11vnc -display :{{display}}.{{screen}}`

- Launch a VNC server on the third display's default screen:

`x11vnc -display :{{2}}`

- Launch a VNC server on the first display's second screen:

`x11vnc -display :{{0}}.{{1}}`
