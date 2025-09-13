---
title: "BIRD Control - Manage Routing with Birdc | Free DevTools"
name: birdc
path: /freedevtools/tldr/common/birdc
canonical: "https://hexmos.com/freedevtools/tldr/common/birdc/"
description: "Control routing information with Birdc, the BIRD routing daemon remote control. Inspect routes, protocols, and configure BIRD settings easily. Free online tool, no registration required."
category: common
keywords:
- BIRD routing control
- Routing daemon management
- Birdc configuration tool
- BIRD protocol inspection
- Network routing analysis
- BGP route debugging
- Linux routing command
- Network configuration tool
- Bird routing daemon
- Routing table viewer
features:
- Open a remote control console for BIRD.
- Reload BIRD configuration without restarting.
- Display the current status of the BIRD daemon.
- Show detailed information about configured routing protocols.
- Filter and display routes based on AS number or prefix.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# birdc

> BIRD remote control.
> Retrieve information like routes from bird and perform configurations during runtime.
> More information: <https://bird.network.cz/?get_doc&v=30&f=bird-4.html>.

- Open the remote control console:

`birdc`

- Reload the configuration without restarting BIRD:

`birdc configure`

- Show the current status of BIRD:

`birdc show status`

- Show all configured protocols:

`birdc show protocols`

- Show all details about a protocol:

`birdc show protocols {{upstream1}} all`

- Show all routes that contain a specific AS number:

`birdc "show route where bgp_path ~ [{{4242120045}}]"`

- Show all best routes:

`birdc show route primary`

- Show all details of all routes from a given prefix:

`birdc show route for {{fd00:/8}} all`
