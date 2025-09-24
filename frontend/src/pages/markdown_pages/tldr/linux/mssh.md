---
title: "Control SSH Servers - mssh | Online Free DevTools by Hexmos"
name: mssh
path: /freedevtools/tldr/linux/mssh
canonical: "https://hexmos.com/freedevtools/tldr/linux/mssh/"
description: "Control multiple SSH servers with mssh. Manage connections, execute commands across multiple hosts. Free online tool, no registration required."
category: linux
keywords:
  - multi SSH client
  - SSH connection manager
  - remote server management
  - Linux SSH tool
  - macOS SSH client
  - batch SSH command execution
  - SSH terminal multiplexer
  - concurrent SSH connections
  - cluster SSH management
  - mssh configuration
features:
  - Connect to multiple SSH servers simultaneously
  - Manage SSH connections in a single window
  - Execute commands on multiple servers at once
  - Connect to predefined server groups using aliases
  - Organize servers in ~/.mssh_clusters for easy access
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# mssh

> GTK+ based SSH client for interacting with multiple SSH servers at once.
> More information: <https://manned.org/mssh>.

- Open a new window and connect to multiple SSH servers:

`mssh {{user@host1 user@host2 ...}}`

- Open a new window and connect to a group of servers predefined in `~/.mssh_clusters`:

`mssh {{[-a|--alias]}} {{alias_name}}`
