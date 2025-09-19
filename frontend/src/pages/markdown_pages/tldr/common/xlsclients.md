---
title: "Xlsclients - Control X11 Display Clients | Online Free DevTools by Hexmos"
name: xlsclients
path: /freedevtools/tldr/common/xlsclients
canonical: "https://hexmos.com/freedevtools/tldr/common/xlsclients/"
description: "Control X11 display clients with xlsclients. List, filter, and manage applications running on an X11 server using the command line. Free online tool, no registration required."
category: common
keywords:
- X11 display clients
- X11 window manager
- X11 client list
- X11 applications
- Linux window manager
- MacOS X11
- Unix X11
- X server manager
- X11 client debugging
- Remote X11 applications
features:
- List all client applications connected to an X11 display
- Display detailed information about X11 clients
- Limit the output length for each client
- Specify a particular display to inspect
- Show the version of the xlsclients utility
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# xlsclients

> List client applications running on an X11 display.
> More information: <https://manned.org/xlsclients>.

- List clients on the default display:

`xlsclients`

- List clients on all screens:

`xlsclients -a`

- List clients with detailed information:

`xlsclients -l`

- Limit the command output length per client to a specific number of characters:

`xlsclients -m {{max_command_length}}`

- Specify a particular display to inspect:

`xlsclients -display :{{display_number}}`

- List clients on remote host's display:

`xlsclients -display {{remote_host}}:0`

- Display version:

`xlsclients -version`
