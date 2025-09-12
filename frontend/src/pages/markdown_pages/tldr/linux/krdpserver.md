---
title: "Start RDP Server - Control Remote Access | Free DevTools"
name: krdpserver
path: /freedevtools/tldr/unknown/krdpserver
canonical: "https://hexmos.com/freedevtools/tldr/unknown/krdpserver/"
description: "Start RDP Server with krdpserver, enabling remote access to desktops. Securely manage connections and share monitors via command line. Free online tool, no registration required."
category: unknown
keywords:
- RDP Server start
- Remote Desktop Protocol server
- KDE remote access
- Linux RDP
- krdpserver command
- Remote desktop manager
- Secure RDP connection
- Desktop sharing command
- Command line RDP
- KDE Plasma RDP
features:
- Start an RDP server with username and password authentication
- Specify a monitor to share using its index
- Enable remote desktop access through command line
- Configure user credentials for secure RDP sessions
- Facilitate remote desktop sharing on KDE Plasma
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# krdpserver

> Start an RDP server.
> More information: <https://invent.kde.org/plasma/krdp#running-the-example-server>.

- Start an RDP server with a username and password:

`krdpserver {{[-u|--username]}} {{user_name}} {{[-p|--password]}} {{password}}`

- Share a specific monitor marked by its index:

`krdpserver {{[-u|--username]}} {{user_name}} {{[-p|--password]}} {{password}} --monitor {{n}}`
