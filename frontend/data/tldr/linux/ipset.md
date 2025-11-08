---
title: "Ipset - Create Firewall Rules | Online Free DevTools by Hexmos"
name: ipset
path: "/freedevtools/tldr/linux/ipset/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/ipset/"
description: "Create firewall rules with Ipset on Linux. Manage IP sets, add/remove IP addresses, and save configurations easily. Free online tool, no registration required."
category: linux
keywords:
- ipset firewall rules
- linux ipset management
- ipset create set
- ipset add ip address
- ipset delete ip address
- ipset save configuration
- firewall ip address set
- linux network security
- ipset command line tool
- ipset network filtering
features:
- Create and manage IP sets for network filtering.
- Add or remove IP addresses from specific IP sets.
- Save IP set configurations for later use.
- Destroy existing IP sets.
- Define network firewall rules using IP sets.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ipset

> Create IP sets for firewall rules.
> More information: <https://manned.org/ipset>.

- Create an empty IP set which will contain IP addresses:

`ipset create {{set_name}} hash:ip`

- Destroy a specific IP set:

`ipset destroy {{set_name}}`

- Add an IP address to a specific set:

`ipset add {{set_name}} {{192.168.1.25}}`

- Delete a specific IP address from a set:

`ipset del {{set_name}} {{192.168.1.25}}`

- Save an IP set:

`ipset save {{set_name}} > {{path/to/ip_set}}`
