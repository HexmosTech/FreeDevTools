---
title: "Hostname - Show or Set Host Name | Online Free DevTools by Hexmos"
name: hostname
path: /freedevtools/tldr/common/hostname
canonical: "https://hexmos.com/freedevtools/tldr/common/hostname/"
description: "Show or set the hostname with the hostname command. Control system identification and manage network settings. Free online tool, no registration required."
category: common
keywords:
- hostname command
- set hostname
- show hostname
- linux hostname
- macos hostname
- network hostname
- system hostname
- fqdn hostname
- hostname ip address
- common commands
features:
- Display the current hostname of the system.
- Set a new hostname for the system.
- Show the network address associated with the hostname.
- Display the Fully Qualified Domain Name (FQDN).
- Manage system identification via command line.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# hostname

> Show or set the system's host name.
> More information: <https://manned.org/hostname>.

- Show current host name:

`hostname`

- Show the network address of the host name:

`hostname {{[-i|--ip-address]}}`

- Show the FQDN (Fully Qualified Domain Name):

`hostname {{[-f|--fqdn]}}`

- Set current host name:

`hostname {{new_hostname}}`
