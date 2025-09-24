---
title: "xhost - Control X Server Access | Online Free DevTools by Hexmos"
name: xhost
path: /freedevtools/tldr/linux/xhost
canonical: "https://hexmos.com/freedevtools/tldr/linux/xhost/"
description: "Control X server access lists with the xhost command. Manage connections from specific hosts or allow/deny all. Free online tool, no registration required."
category: linux
keywords:
  - xhost command
  - x server access control
  - manage xhost
  - linux xhost
  - unix xhost
  - xhost security
  - control xhost access
  - xhost allow host
  - xhost deny host
  - xhost list
features:
  - Display the current access control list.
  - Allow specific hosts to connect to the X server.
  - Deny specific hosts from connecting to the X server.
  - Allow all hosts to connect (disable access control).
  - Deny all hosts except those explicitly allowed (enable access control).
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# xhost

> Manage access control lists for X server connections.
> More information: <https://manned.org/xhost>.

- Display the current access control list:

`xhost`

- Allow a specific host to connect to the X server:

`xhost +{{hostname}}`

- Deny a specific host from connecting to the X server:

`xhost -{{hostname}}`

- Allow all hosts to connect (disable access control - insecure):

`xhost +`

- Deny all hosts except those explicitly allowed (enable access control):

`xhost -`

- Remove a specific user or address using a family prefix (like `inet:hostname` or `si:localuser:username`):

`xhost -{{family:name}}`
