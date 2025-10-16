---
title: "Control VNC Server - Access X Displays | Online Free DevTools by Hexmos"
name: x0vncserver
path: "/freedevtools/tldr/linux/x0vncserver/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/x0vncserver/"
description: "Control remote access with x0vncserver. Securely access Linux X displays via VNC and manage connections remotely. Free online tool, no registration required."
category: linux
keywords:
- vnc server control
- linux vnc access
- remote desktop linux
- x display vnc
- tigervnc server
- vnc connection
- linux remote access
- x0vncserver linux
- remote display server
- vnc authentication
features:
- Starts a VNC server for existing X displays
- Authenticates VNC clients via password file
- Specifies the port for VNC connections
- Manages remote access to Linux desktops
- Configures secure VNC connections
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# x0vncserver

> TigerVNC Server for X displays.
> More information: <https://tigervnc.org/doc/x0vncserver.html>.

- Start a VNC server using a passwordfile:

`x0vncserver -display {{:0}} -passwordfile {{path/to/file}}`

- Start a VNC server using a specific port:

`x0vncserver -display {{:0}} -rfbport {{port}}`
