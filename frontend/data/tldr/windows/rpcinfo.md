---
title: "RPCInfo - List Remote Programs | Online Free DevTools by Hexmos"
name: rpcinfo
path: "/freedevtools/tldr/windows/rpcinfo/"
canonical: "https://hexmos.com/freedevtools/tldr/windows/rpcinfo/"
description: "List programs remotely with RPCInfo. Discover available services on remote Windows machines for network troubleshooting. Free online tool, no registration required."
category: windows
keywords:
- RPC program list
- Windows RPCInfo utility
- Remote service discovery
- Network program listing
- RPC endpoint mapper
- Windows network service
- Remote procedure call info
- RPC program enumeration
- Windows rpcinfo command
- Network troubleshooting tool
features:
- List programs registered on local computer
- List programs on a remote computer
- Call a program on remote computer via TCP
- Call a program on remote computer via UDP
- Discover remote services on Windows
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# rpcinfo

> List programs via RPC on remote computers.
> More information: <https://learn.microsoft.com/windows-server/administration/windows-commands/rpcinfo>.

- List all programs registered on the local computer:

`rpcinfo`

- List all programs registered on a remote computer:

`rpcinfo /p {{computer_name}}`

- Call a specific program on a remote computer using TCP:

`rpcinfo /t {{computer_name}} {{program_name}}`

- Call a specific program on a remote computer using UDP:

`rpcinfo /u {{computer_name}} {{program_name}}`
