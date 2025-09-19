---
title: "xfreerdp Remote Desktop - Connect to Servers | Online Free DevTools by Hexmos"
name: xfreerdp
path: /freedevtools/tldr/linux/xfreerdp
canonical: "https://hexmos.com/freedevtools/tldr/linux/xfreerdp/"
description: "Connect to remote servers with xfreerdp.  Manage remote desktops securely and efficiently using command-line interface. Free online tool, no registration required."
category: linux
keywords:
  - remote desktop connection
  - xfreerdp command line
  - freeRDP client
  - remote server access
  - RDP client linux
  - Windows remote connection
  - xfreerdp tutorial
  - remote desktop protocol
  - command line RDP
  - secure remote access
features:
  - Connect to remote servers using username, password and IP address.
  - Enable audio output redirection for enhanced multimedia experience.
  - Support dynamic resolution adjustment for optimized viewing.
  - Enable clipboard sharing between local and remote machines.
  - Override certificate checks for easier connection to untrusted servers.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# xfreerdp

> Free Remote Desktop Protocol implementation.
> More information: <https://www.freerdp.com>.

- Connect to a FreeRDP server:

`xfreerdp /u:{{username}} /p:{{password}} /v:{{ip_address}}`

- Connect to a FreeRDP server and activate audio output redirection using `sys:alsa` device:

`xfreerdp /u:{{username}} /p:{{password}} /v:{{ip_address}} /sound:{{sys:alsa}}`

- Connect to a FreeRDP server with dynamic resolution:

`xfreerdp /v:{{ip_address}} /u:{{username}} /p:{{password}} /dynamic-resolution`

- Connect to a FreeRDP server with clipboard redirection:

`xfreerdp /v:{{ip_address}} /u:{{username}} /p:{{password}} +clipboard`

- Connect to a FreeRDP server ignoring any certificate checks:

`xfreerdp /v:{{ip_address}} /u:{{username}} /p:{{password}} /cert:ignore`

- Connect to a FreeRDP server with a shared directory:

`xfreerdp /v:{{ip_address}} /u:{{username}} /p:{{password}} /drive:{{path/to/directory}},{{share_name}}`
