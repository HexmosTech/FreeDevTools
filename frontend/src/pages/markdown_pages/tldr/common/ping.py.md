---
title: "ICMP Ping - Check Host Reachability | Online Free DevTools by Hexmos"
name: ping.py
path: /freedevtools/tldr/common/ping.py
canonical: "https://hexmos.com/freedevtools/tldr/common/ping.py/"
description: "Check host reachability with ICMP Ping, diagnose network connectivity problems and troubleshoot network issues using command line. Free online tool, no registration required."
category: common
keywords:
- icmp ping check
- network reachability test
- host connectivity diagnostic
- ipv4 ping tool
- command line ping
- linux ping utility
- macos ping utility
- network troubleshooting
- packet echo request
- impacket ping
features:
- Verify IPv4 host reachability
- Send ICMP echo requests
- Listen for ICMP echo replies
- Ping from a specified source IPv4 address
- Diagnose network connectivity issues
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ping.py

> Simple ICMP ping using Impacket to check if an IPv4 host is reachable.
> Sends ICMP echo requests and listens for echo replies. Requires root privileges for raw socket access (e.g., run with `sudo`).
> More information: <https://github.com/fortra/impacket>.

- Ping a host from a specified source IPv4 address:

`ping.py {{source_ipv4}} {{destination_ipv4}}`

- Ping 192.168.1.100 from 192.168.1.10:

`ping.py 192.168.1.10 192.168.1.100`
