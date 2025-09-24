---
title: "Configure UPnP Ports - Control Router Ports with upnpc | Online Free DevTools by Hexmos"
name: upnpc
path: /freedevtools/tldr/linux/upnpc
canonical: "https://hexmos.com/freedevtools/tldr/linux/upnpc/"
description: "Configure UPnP router ports easily with upnpc. Forward ports, delete redirections, and manage your network's port configuration via command line. Free online tool, no registration required."
category: linux
keywords:
- UPnP port forwarding
- linux port configuration
- router port management
- upnpc command
- UPnP configuration tool
- network port redirection
- command line port control
- UPnP protocol linux
- linux network tools
- manage router ports
features:
- Forward external ports to local machines
- Delete existing port redirections
- Retrieve information about UPnP devices
- List all current port redirections
- Configure port forwarding via UPnP protocol
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# upnpc

> Configure port forwarding rules on your router via the UPnP protocol.
> More information: <https://manned.org/upnpc>.

- Forward the external TCP port 80 to port 8080 on a local machine:

`upnpc -a {{192.168.0.1}} 8080 80 tcp`

- Delete any port redirection for external TCP port 80:

`upnpc -d 80 tcp`

- Get information about UPnP devices on your network:

`upnpc -s`

- List existing redirections:

`upnpc -l`
