---
title: "UFW Firewall - Control Network Traffic with UFW | Free DevTools"
name: ufw
path: /freedevtools/tldr/unknown/ufw
canonical: "https://hexmos.com/freedevtools/tldr/unknown/ufw/"
description: "Control network traffic easily with UFW Firewall. Manage rules, allow/deny connections and secure your system with this command-line tool. Free online tool, no registration required."
category: unknown
keywords:
- ufw firewall
- linux firewall
- command line firewall
- network security
- ufw rules
- iptables frontend
- ubuntu firewall
- port management
- traffic control
- firewall configuration
features:
- Enable and disable the UFW firewall.
- Manage incoming and outgoing network traffic.
- Define rules for allowing or denying specific ports.
- Delete existing firewall rules by their number.
- Display firewall status and rule numbering.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ufw

> Uncomplicated Firewall.
> Frontend for `iptables` aiming to make configuration of a firewall easier.
> More information: <https://wiki.ubuntu.com/UncomplicatedFirewall>.

- Enable `ufw`:

`ufw enable`

- Disable `ufw`:

`ufw disable`

- Show `ufw` rules, along with their numbers:

`ufw status numbered`

- Allow incoming traffic on port 5432 on this host with a comment identifying the service:

`ufw allow 5432 comment "{{Service}}"`

- Allow only TCP traffic from 192.168.0.4 to any address on this host, on port 22:

`ufw allow proto tcp from 192.168.0.4 to any port 22`

- Deny traffic on port 80 on this host:

`ufw deny 80`

- Deny all UDP traffic to ports in range 8412:8500:

`ufw deny proto udp from any to any port 8412:8500`

- Delete a particular rule. The rule number can be retrieved from the `ufw status numbered` command:

`ufw delete {{rule_number}}`
