---
title: "rdesktop Remote Desktop - Connect to Servers | Online Free DevTools by Hexmos"
name: rdesktop
path: /freedevtools/tldr/linux/rdesktop
canonical: "https://hexmos.com/freedevtools/tldr/linux/rdesktop/"
description: "Connect to remote computers with rdesktop, a powerful RDP client.  Manage remote sessions and access resources easily. Free online tool, no registration required."
category: linux
keywords:
  - rdesktop remote connection
  - rdesktop RDP client
  - rdesktop remote desktop software
  - rdesktop windows connection
  - rdesktop linux command
  - rdesktop server access
  - rdesktop terminal command
  - rdesktop network access
  - rdesktop remote administration
  - rdesktop session management
features:
  - Connect to remote computers via RDP.
  - Supports custom resolutions and color depths.
  - Enables full-screen remote desktop sessions.
  - Allows authentication using domain user credentials.
  - Offers command-line interface for automation.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# rdesktop

> Remote Desktop Protocol client.
> It can be used to connect the remote computer using the RDP protocol.
> More information: <https://manned.org/rdesktop>.

- Connect to a remote computer (default port is 3389):

`rdesktop -u {{username}} -p {{password}} {{host:port}}`

- Simple Examples:

`rdesktop -u Administrator -p passwd123 192.168.1.111:3389`

- Connect to a remote computer with full screen (press `<Ctrl Alt Enter>` to exist):

`rdesktop -u {{username}} -p {{password}} -f {{host:port}}`

- Use the customed resolution (use the letter 'x' between the number):

`rdesktop -u {{username}} -p {{password}} -g 1366x768 {{host:port}}`

- Connect to a remote computer using domain user:

`rdesktop -u {{username}} -p {{password}} -d {{domainname}} {{host:port}}`

- Use the 16-bit color (speed up):

`rdesktop -u {{username}} -p {{password}} -a 16 {{host:port}}`
