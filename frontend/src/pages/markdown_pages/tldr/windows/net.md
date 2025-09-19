---
title: "Control Network Settings - Windows Net Command | Online Free DevTools by Hexmos"
name: net
path: /freedevtools/tldr/windows/net
canonical: "https://hexmos.com/freedevtools/tldr/windows/net/"
description: "Control network settings with Windows Net command. Manage SMB shares, users, and services using the command line interface. Free online tool, no registration required."
category: windows
keywords:
- windows network command
- net command windows
- windows smb share
- windows net use
- windows network management
- windows command line network tools
- network configuration windows
- windows service control net
- windows user management net
- net session windows
features:
- Start and stop Windows services
- Manage SMB share connections
- Display shared folders over SMB
- List users of SMB shares
- Manage local security group memberships
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# net

> System utility to view and modify network-related settings.
> More information: <https://learn.microsoft.com/previous-versions/windows/it-pro/windows-server-2012-r2-and-2012/gg651155(v=ws.11)>.

- Start or stop a Windows service synchronously:

`net {{start|stop}} {{service}}`

- Make sure an SMB share is available in the current console:

`net use {{\\smb_shared_folder}} /USER:{{username}}`

- Show the folders currently shared over SMB:

`net share`

- Show who is using your SMB shares (run in elevated console):

`net session`

- Show users in a local security group:

`net localgroup "{{Administrators}}"`

- Add a user to the local security group (run in elevated console):

`net localgroup "{{Administrators}}" {{username}} /add`

- Display help for a subcommand:

`net help {{subcommand}}`

- Display help:

`net help`
