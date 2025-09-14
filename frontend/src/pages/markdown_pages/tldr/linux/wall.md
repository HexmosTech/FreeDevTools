---
title: "Wall Command - Send Messages to Users | Free DevTools"
name: wall
path: /freedevtools/tldr/linux/wall
canonical: "https://hexmos.com/freedevtools/tldr/linux/wall/"
description: "Send system messages with Wall command on Linux. Broadcast to logged-in users and manage group communications efficiently. Free online tool, no registration required."
category: linux
keywords:
- linux wall command
- send system messages linux
- broadcast message linux
- wall message utility
- linux terminal messaging
- wall command examples
- group messaging linux
- linux system administration
- command-line messaging
- user communication linux
features:
- Broadcast messages to all logged-in users
- Send messages to specific user groups
- Read messages from a file
- Set a timeout for message delivery
- Write important system announcements
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# wall

> Write a message on the terminals of users currently logged in.
> More information: <https://manned.org/wall>.

- Send a message:

`wall {{message}}`

- Send a message to users that belong to a specific group:

`wall {{[-g|--group]}} {{group_name}} {{message}}`

- Send a message from a file:

`wall {{file}}`

- Send a message with timeout (default 300):

`wall {{[-t|--timeout]}} {{seconds}} {{file}}`
