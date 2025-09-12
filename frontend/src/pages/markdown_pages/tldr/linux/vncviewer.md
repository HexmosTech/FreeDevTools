---
title: "VNC Viewer - Control Remote Desktops | Free DevTools"
name: vncviewer
path: /freedevtools/tldr/linux/vncviewer
canonical: "https://hexmos.com/freedevtools/tldr/linux/vncviewer/"
description: "Control remote Linux desktops with VNC Viewer. Access graphical interfaces remotely and manage servers easily. Free online tool, no registration required."
category: linux
keywords:
- linux vnc viewer
- remote desktop control
- vnc client linux
- graphical interface access
- linux remote access
- vnc connection manager
- vnc screen sharing
- virtual network computing
- linux server management
- remote linux workstation
features:
- Connect to remote VNC servers
- Launch VNC sessions in full-screen mode
- Specify screen geometry for the VNC session
- Connect to VNC servers using specific ports
- Control remote Linux desktops from the command line
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# vncviewer

> Launches a VNC (Virtual Network Computing) client.
> More information: <https://manned.org/vncviewer>.

- Launch a VNC client which connects to a host on a given display:

`vncviewer {{host}}:{{display_number}}`

- Launch in full-screen mode:

`vncviewer -FullScreen {{host}}:{{display_number}}`

- Launch a VNC client with a specific screen geometry:

`vncviewer --geometry {{width}}x{{height}} {{host}}:{{display_number}}`

- Launch a VNC client which connects to a host on a given port:

`vncviewer {{host}}::{{port}}`
