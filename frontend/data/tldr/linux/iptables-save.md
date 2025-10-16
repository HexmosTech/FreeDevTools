---
title: "Control iptables - Save IPv4 Configuration | Online Free DevTools by Hexmos"
name: iptables-save
path: "/freedevtools/tldr/linux/iptables-save/"
canonical: "https://hexmos.com/freedevtools/tldr/linux/iptables-save/"
description: "Control iptables IPv4 configurations using iptables-save. Manage network traffic and firewall rules effortlessly. Free online tool, no registration required."
category: linux
keywords:
  - iptables configuration
  - iptables save
  - iptables firewall
  - IPv4 iptables
  - linux iptables
  - iptables rules
  - firewall configuration
  - network traffic control
  - iptables backup
  - iptables restore
features:
  - Save current iptables configuration
  - Save configuration to a specified file
  - Specify a table to save
  - Output configuration to standard output
  - Automate firewall rule backups
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# iptables-save

> Save the `iptables` IPv4 configuration.
> Use `ip6tables-save` to do the same for IPv6.
> More information: <https://manned.org/iptables-save>.

- Print the `iptables` configuration:

`sudo iptables-save`

- Print the `iptables` configuration of a specific table:

`sudo iptables-save {{[-t|--table]}} {{table}}`

- Save the `iptables` configuration to a file:

`sudo iptables-save {{[-f|--file]}} {{path/to/file}}`
