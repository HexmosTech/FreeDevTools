---
title: "Write Message - Send User Messages on Terminal | Online Free DevTools by Hexmos"
name: write
path: /freedevtools/tldr/common/write
canonical: "https://hexmos.com/freedevtools/tldr/common/write/"
description: "Send messages with Write command to logged-in users on specific terminals. Communicate directly on Linux systems for real-time interaction. Free online tool, no registration required."
category: common
keywords:
- Linux message sending
- Terminal communication tool
- User message writing command
- Write command line utility
- System administrator messaging
- Real-time user communication
- TTY message sender
- PTS message writer
- Linux terminal interaction
- User notification system
features:
- Send direct messages to logged-in users.
- Target specific terminal IDs for message delivery.
- Communicate across multiple terminal sessions.
- Write messages in real-time on Linux systems.
- Interactively send and receive messages.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# write

> Write a message on the terminal of a specified logged in user (`<Ctrl c>` to stop writing messages).
> Use the `who` command to find out all terminal_ids of all active users active on the system.
> See also: `mesg`.
> More information: <https://manned.org/write.1p>.

- Send a message to a given user on a given terminal ID:

`write {{username}} {{terminal_id}}`

- Send message to "testuser" on terminal `/dev/tty/5`:

`write {{testuser}} {{tty/5}}`

- Send message to "johndoe" on pseudo terminal `/dev/pts/5`:

`write {{johndoe}} {{pts/5}}`
