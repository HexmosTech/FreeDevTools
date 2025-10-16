---
title: "Iptables Firewall - Control Linux Network Traffic | Online Free DevTools by Hexmos"
name: iptables
path: "/freedevtools/tldr/linux/iptables/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/iptables/"
description: "Control Linux network traffic with Iptables Firewall. Secure your server, manage rules, and configure network settings. Free online tool, no registration required."
category: linux
keywords:
- iptables firewall
- linux firewall
- network traffic control
- iptables rules
- firewall configuration
- iptables commands
- network security linux
- linux packet filtering
- iptables nat
- firewall management
features:
- Configure IPv4 firewall rules
- Manage network packet filtering
- Set chain policies for traffic control
- Append rules based on IP, protocol, and port
- Delete specific chain rules by line number
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# iptables

> Configure tables, chains and rules of the Linux kernel IPv4 firewall.
> Use `ip6tables` to set rules for IPv6 traffic.
> See also: `iptables-save`, `iptables-restore`.
> More information: <https://manned.org/iptables>.

- View chains, rules, packet/byte counters and line numbers for the filter table:

`sudo iptables {{[-vnL --line-numbers|--verbose --numeric --list --line-numbers]}}`

- Set chain policy rule:

`sudo iptables {{[-P|--policy]}} {{chain}} {{rule}}`

- Append rule to chain policy for IP:

`sudo iptables {{[-A|--append]}} {{chain}} {{[-s|--source]}} {{ip}} {{[-j|--jump]}} {{rule}}`

- Append rule to chain policy for IP considering protocol and port:

`sudo iptables {{[-A|--append]}} {{chain}} {{[-s|--source]}} {{ip}} {{[-p|--protocol]}} {{tcp|udp|icmp|...}} --dport {{port}} {{[-j|--jump]}} {{rule}}`

- Add a NAT rule to translate all traffic from the `192.168.0.0/24` subnet to the host's public IP:

`sudo iptables {{[-t|--table]}} {{nat}} {{[-A|--append]}} {{POSTROUTING}} {{[-s|--source]}} {{192.168.0.0/24}} {{[-j|--jump]}} {{MASQUERADE}}`

- Delete chain rule:

`sudo iptables {{[-D|--delete]}} {{chain}} {{rule_line_number}}`
