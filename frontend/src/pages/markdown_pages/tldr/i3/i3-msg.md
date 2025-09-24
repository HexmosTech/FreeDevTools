---
title: "Control i3 Windows - Send i3 Messages | Online Free DevTools by Hexmos"
name: i3-msg
path: /freedevtools/tldr/i3/i3-msg
canonical: "https://hexmos.com/freedevtools/tldr/i3/i3-msg/"
description: "Control i3 windows with i3-msg. Send commands to i3, manage workspaces, and query layout trees. Free online tool, no registration required."
category: common
keywords:
- i3 command
- i3 message
- i3 window manager control
- i3 IPC
- i3 workspace management
- i3 layout tree
- Linux i3-msg
- i3 config
- tiling window manager command
- i3wm scripting
features:
- Send commands to i3 using IPC
- Query workspace information in JSON format
- Retrieve the layout tree of i3 in JSON format
- Control i3 window behavior programmatically
- Automate i3 window management tasks
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# i3-msg

> Send messages to a running instance of i3 using IPC.
> See <https://i3wm.org/docs/userguide.html#list_of_commands> for available commands.
> More information: <https://manned.org/i3-msg>.

- Run an i3 command:

`i3-msg {{command}}`

- Print a list of workspaces in JSON:

`i3-msg -t get_workspaces`

- Print a layout tree of all open windows, containers, outputs, and workspaces in JSON:

`i3-msg -t get_tree`
