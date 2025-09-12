---
title: "Manage IP Routes - Control Network Routing | Free DevTools"
name: ip-route
path: /freedevtools/tldr/linux/ip-route
canonical: "https://hexmos.com/freedevtools/tldr/linux/ip-route/"
description: "Control network routing with the ip route command.  Add, delete, and modify static routes efficiently. Free online tool, no registration required."
category: linux
keywords:
  - ip route command
  - network routing linux
  - manage ip routes
  - static route configuration
  - ip route add
  - ip route delete
  - linux network administration
  - command line networking
  - ip route show
  - default gateway configuration
features:
  - Add static IP routes to the system's routing table.
  - Delete existing static IP routes.
  - Modify existing static IP routes.
  - View the current routing table and its entries.
  - Configure default gateway using gateway IP or interface.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ip route

> IP Routing table management subcommand.
> More information: <https://manned.org/ip-route>.

- Display the `main` routing table:

`ip {{[r|route]}}`

- Add a default route using gateway forwarding:

`sudo ip {{[r|route]}} {{[a|add]}} default via {{gateway_ip}}`

- Add a default route using `ethX`:

`sudo ip {{[r|route]}} {{[a|add]}} default dev {{ethX}}`

- Add a static route:

`sudo ip {{[r|route]}} {{[a|add]}} {{destination_ip}} via {{gateway_ip}} dev {{ethX}}`

- Delete a static route:

`sudo ip {{[r|route]}} {{[d|delete]}} {{destination_ip}} dev {{ethX}}`

- Change or replace a static route:

`sudo ip {{[r|route]}} {{change|replace}} {{destination_ip}} via {{gateway_ip}} dev {{ethX}}`

- Show which route will be used by the kernel to reach an IP address:

`ip {{[r|route]}} {{[g|get]}} {{destination_ip}}`

- Display a specific routing table:

`ip {{[r|route]}} {{[l|list]}} {{[t|table]}} {{table_number}}`
