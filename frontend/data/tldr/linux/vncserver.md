---
title: "VNC Server - Launch VNC Desktops | Online Free DevTools by Hexmos"
name: vncserver
path: "/freedevtools/tldr/linux/vncserver/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/vncserver/"
description: "Launch VNC servers and manage multiple desktop sessions with vncserver.  Control remote desktops easily and efficiently. Free online tool, no registration required."
category: linux
keywords:
  - vnc server launch
  - vncserver command
  - remote desktop access
  - vnc server management
  - vnc display control
  - linux vncserver
  - vnc server configuration
  - vnc geometry settings
  - remote desktop connection
  - vnc kill command
features:
  - Start a VNC server on the next available display.
  - Specify custom screen geometry for the VNC server.
  - Kill a running VNC server instance on a specific display.
  - Manage multiple VNC server sessions concurrently.
  - Access remote desktops securely via VNC.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# vncserver

> Launch a VNC (Virtual Network Computing) desktop.
> More information: <https://manned.org/vncserver.1x>.

- Launch a VNC Server on next available display:

`vncserver`

- Launch a VNC Server with specific screen geometry:

`vncserver --geometry {{width}}x{{height}}`

- Kill an instance of VNC Server running on a specific display:

`vncserver --kill :{{display_number}}`
