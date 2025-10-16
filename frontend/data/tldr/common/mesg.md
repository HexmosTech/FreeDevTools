---
title: "Control Terminal Messages - Mesg Command | Online Free DevTools by Hexmos"
name: mesg
path: "/freedevtools/tldr/common/mesg/"
canonical: "https://hexmos.com/freedevtools/tldr/common/mesg/"
description: "Control terminal message receiving with Mesg. Allow or disallow messages from the write command, enhancing terminal privacy. Free online tool, no registration required."
category: common
keywords:
- terminal message control
- mesg command
- write command permissions
- terminal privacy settings
- disable write messages
- enable write messages
- linux terminal
- unix terminal
- command-line interface
- user communication settings
features:
- Check terminal message status
- Disable message receiving
- Enable message receiving
- Configure terminal write permissions
- Manage user communication preferences
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# mesg

> Check or set a terminal's ability to receive messages from other users, usually from the `write` command.
> See also: `write`, `talk`.
> More information: <https://manned.org/mesg.1p>.

- Check terminal's openness to write messages:

`mesg`

- Disallow receiving messages from the write command:

`mesg n`

- Allow receiving messages from the write command:

`mesg y`
