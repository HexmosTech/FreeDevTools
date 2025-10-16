---
title: "Mesg Command - Control Terminal Messages | Online Free DevTools by Hexmos"
name: mesg
path: "/freedevtools/tldr/linux/mesg/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/mesg/"
description: "Control terminal message reception with the mesg command.  Manage incoming messages from other users using simple options. Free online tool, no registration required."
category: linux
keywords:
  - terminal message control
  - mesg command linux
  - unix message control
  - linux terminal settings
  - command line message
  - mesg command options
  - write command alternative
  - terminal communication
  - disable terminal messages
  - enable terminal messages
features:
  - Check current message reception status
  - Enable message reception from other users
  - Disable message reception from other users
  - Provide verbose output for non-terminal executions
  - Integrate seamlessly with the `write` command
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# mesg

> Check or set a terminal's ability to receive messages from other users, usually from the `write` command.
> See also: `write`, `talk`.
> More information: <https://manned.org/mesg>.

- Check terminal's openness to write messages:

`mesg`

- Disallow receiving messages from other users:

`mesg n`

- Allow receiving messages from other users:

`mesg y`

- Enable verbose mode, printing a warning if the command is not executed from a terminal:

`mesg {{[-v|--verbose]}}`
