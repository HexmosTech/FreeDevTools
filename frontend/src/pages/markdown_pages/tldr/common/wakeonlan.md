---
title: "Wake-on-LAN - Send WOL Packets | Free DevTools"
name: wakeonlan
path: /freedevtools/tldr/common/wakeonlan
canonical: "https://hexmos.com/freedevtools/tldr/common/wakeonlan/"
description: "Send Wake-on-LAN packets with Wakeonlan. Remotely power on computers over a network. Free online tool, no registration required."
category: common
keywords:
- wakeonlan packet sender
- wol packet generator
- wake on lan mac address
- remotely power on pc
- wake on lan command line
- lan wake up tool
- network wake up pc
- wakeonlan linux
- wakeonlan windows
- wakeonlan macos
features:
- Send WOL packets to a specified MAC address.
- Specify the IP address for sending WOL packets.
- Perform a dry-run to preview commands without executing.
- Execute the command in quiet mode to suppress output.
- Wake up computers on a local network remotely.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# wakeonlan

> Send packets to wake-on-LAN (WOL) enabled PCs.
> More information: <https://github.com/jpoliv/wakeonlan>.

- Send packets to all devices on the local network (255.255.255.255) by specifying a MAC address:

`wakeonlan {{01:02:03:04:05:06}}`

- Send packet to a specific device via IP address:

`wakeonlan {{01:02:03:04:05:06}} {{[-i|--ip]}} {{192.168.178.2}}`

- Print the commands, but don't execute them (dry-run):

`wakeonlan {{[-n|--dry-run]}} {{01:02:03:04:05:06}}`

- Run in quiet mode:

`wakeonlan {{[-q|--quiet]}} {{01:02:03:04:05:06}}`
