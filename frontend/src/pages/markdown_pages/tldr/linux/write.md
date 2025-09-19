---
title: "Write Message - Send Terminal Messages | Online Free DevTools by Hexmos"
name: write
path: /freedevtools/tldr/linux/write
canonical: "https://hexmos.com/freedevtools/tldr/linux/write/"
description: "Write messages to users on specific terminals with the Write command. Send instant alerts and communicate via command line. Free online tool, no registration required."
category: linux
keywords:
  - terminal message writer
  - command line messaging
  - unix write command
  - user terminal messaging
  - send message to terminal
  - write to tty
  - write to pts
  - linux message command
  - broadcast terminal message
  - system administrator messaging
features:
  - Send messages to specific users on the system
  - Target users based on their terminal ID
  - Communicate with users through their active terminal sessions
  - Allows real-time terminal interaction and messaging
  - Supports both TTY and PTS terminal types
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# write

> Write a message on the terminal of a specified logged in user (`<Ctrl c>` to stop writing messages).
> Use the `who` command to find out all terminal_ids of all active users active on the system.
> See also: `mesg`.
> More information: <https://manned.org/write>.

- Send a message to a given user on a given terminal ID:

`write {{username}} {{terminal_id}}`

- Send message to "testuser" on terminal `/dev/tty/5`:

`write {{testuser}} {{tty/5}}`

- Send message to "johndoe" on pseudo terminal `/dev/pts/5`:

`write {{johndoe}} {{pts/5}}`
