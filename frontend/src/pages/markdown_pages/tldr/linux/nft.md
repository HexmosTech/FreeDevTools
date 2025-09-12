---
title: "Nft - Configure Linux Firewall Rules | Free DevTools"
name: nft
path: /freedevtools/tldr/linux/nft
canonical: "https://hexmos.com/freedevtools/tldr/linux/nft/"
description: "Configure Linux firewall rules with Nft. Manage tables, chains, and rules, replacing iptables for efficient network traffic control. Free online tool, no registration required."
category: linux
keywords:
- linux firewall configuration
- nftables ruleset management
- nft command syntax
- nftables firewall rules
- nft masquerade rule
- nft add rule example
- nft delete rule example
- nft save configuration
- linux network traffic filter
- nftables tutorial
features:
- Add and manage nftables tables
- Define custom chains for traffic filtering
- Create rules based on various criteria like port and IP
- Implement Network Address Translation (NAT) rules
- Export and import nftables configurations
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# nft

> Allows configuration of tables, chains and rules provided by the Linux kernel firewall.
> Nftables replaces iptables.
> More information: <https://wiki.nftables.org/wiki-nftables/index.php/Main_Page>.

- View current configuration:

`sudo nft list ruleset`

- Add a new table with family "inet" and table "filter":

`sudo nft add table {{inet}} {{filter}}`

- Add a new chain to accept all inbound traffic:

`sudo nft add chain {{inet}} {{filter}} {{input}} \{ type {{filter}} hook {{input}} priority {{0}} \; policy {{accept}} \; \}`

- Add a new rule to accept several TCP ports:

`sudo nft add rule {{inet}} {{filter}} {{input}} {{tcp}} {{dport \{ telnet, ssh, http, https \} accept}}`

- Add a NAT rule to translate all traffic from the `192.168.0.0/24` subnet to the host's public IP:

`sudo nft add rule {{nat}} {{postrouting}} ip saddr {{192.168.0.0/24}} {{masquerade}}`

- Show rule handles:

`sudo nft --handle --numeric list chain {{family}} {{table}} {{chain}}`

- Delete a rule:

`sudo nft delete rule {{inet}} {{filter}} {{input}} handle {{3}}`

- Save current configuration:

`sudo nft list ruleset > {{/etc/nftables.conf}}`
