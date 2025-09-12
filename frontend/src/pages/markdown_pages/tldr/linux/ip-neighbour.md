---
title: "Manage IP Neighbour - Control Network Neighbours | Free DevTools"
name: ip-neighbour
path: /freedevtools/tldr/linux/ip-neighbour
canonical: "https://hexmos.com/freedevtools/tldr/linux/ip-neighbour/"
description: "Control and manage network neighbour entries with the ip neighbour command.  View, add, delete, and modify ARP entries efficiently. Free online tool, no registration required."
category: linux
keywords:
  - ip neighbour commands
  - network neighbour management
  - arp table manipulation
  - linux ip commands
  - network troubleshooting
  - ip neighbour lookup
  - neighbour entry modification
  - ip neighbour flush
  - add ip neighbour entry
  - delete ip neighbour entry
features:
  - Display the neighbour/ARP table entries.
  - Remove entries from the neighbour table.
  - Perform neighbour lookups.
  - Add or delete ARP entries.
  - Change or replace existing ARP entries.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ip neighbour

> Neighbour/ARP tables management IP subcommand.
> More information: <https://manned.org/ip-neighbour.8>.

- Display the neighbour/ARP table entries:

`ip {{[n|neighbour]}}`

- Remove entries in the neighbour table on device `ethX`:

`sudo ip {{[n|neighbour]}} {{[f|flush]}} dev {{ethX}}`

- Perform a neighbour lookup and return a neighbour entry:

`ip {{[n|neighbour]}} {{[g|get]}} {{lookup_ip}} dev {{ethX}}`

- Add or delete an ARP entry for the neighbour IP address to `ethX`:

`sudo ip {{[n|neighbour]}} {{add|delete}} {{ip_address}} lladdr {{mac_address}} dev {{ethX}} nud reachable`

- Change or replace an ARP entry for the neighbour IP address to `ethX`:

`sudo ip {{[n|neighbour]}} {{change|replace}} {{ip_address}} lladdr {{new_mac_address}} dev {{ethX}}`
