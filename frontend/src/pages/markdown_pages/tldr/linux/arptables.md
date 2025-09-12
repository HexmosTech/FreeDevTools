---
title: "Arptables - Control ARP Filtering Rules | Free DevTools"
name: arptables
path: /freedevtools/tldr/linux/arptables
canonical: "https://hexmos.com/freedevtools/tldr/linux/arptables/"
description: "Control ARP packet filtering with Arptables. Manage network traffic and enhance security using Linux command line rules. Free online tool, no registration required."
category: linux
keywords:
- ARP filtering linux
- linux arptables rules
- arptables packet filter
- arptables network security
- arptables firewall configuration
- arptables IP address filter
- arptables rule management
- arptables packet dropping
- arptables network troubleshooting
- arptables traffic control
features:
- List existing ARP filtering rules
- Append rules to filter ARP packets
- Delete specific ARP filtering rules
- Flush all existing ARP filtering rules
- Set default policies for ARP traffic
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# arptables

> Manage ARP filtering rules using the `nftables` backend.
> Part of the `xtables-nft` suite for ARP packet filtering.
> More information: <https://manned.org/arptables>.

- List all ARP rules in the filter table:

`sudo arptables {{[-L|--list]}}`

- Append a rule to drop ARP packets from a specific IP address:

`sudo arptables {{[-A|--append]}} INPUT {{[-s|--source-ip]}} {{192.168.0.1}} {{[-j|--jump]}} DROP`

- Delete a specific rule from the INPUT chain by its rule number:

`sudo arptables {{[-D|--delete]}} INPUT {{rule_number}}`

- Flush all rules in the filter table:

`sudo arptables {{[-F|--flush]}}`

- Set the default policy of the OUTPUT chain to ACCEPT:

`sudo arptables {{[-P|--policy]}} OUTPUT ACCEPT`

- Save the current ARP rules to a file:

`sudo arptables-save > {{path/to/file}}`
