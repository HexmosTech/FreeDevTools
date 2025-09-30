---
title: "Ping IPv6 - Check Host Reachability | Online Free DevTools by Hexmos"
name: ping6.py
path: /freedevtools/tldr/common/ping6-py
canonical: "https://hexmos-com/freedevtools/tldr/common/ping6-py/"
description: "Check IPv6 host reachability with Ping IPv6 using ICMPv6 echo requests. Troubleshoot network connectivity and verify IPv6 configurations. Free online tool, no registration required."
category: common
keywords:
- IPv6 ping
- ICMPv6 ping
- IPv6 network test
- IPv6 connectivity check
- Linux IPv6 ping
- MacOS IPv6 ping
- Network troubleshooting
- ICMPv6 echo request
- IPv6 address ping
- Impacket ping6
features:
- Verify IPv6 host reachability
- Send ICMPv6 echo requests
- Listen for ICMPv6 echo replies
- Ping from a specified IPv6 source address
- Diagnose IPv6 network connectivity issues
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ping6.py

> Simple ICMPv6 ping using Impacket to check if an IPv6 host is reachable.
> Sends ICMPv6 echo requests and listens for echo replies. Requires root privileges for raw socket access (e.g., run with `sudo`).
> More information: <https://github.com/fortra/impacket>.

- Ping an IPv6 host from a specified source IPv6 address:

`ping6.py {{source_ipv6}} {{destination_ipv6}}`

- Ping 2001:db8::2 from 2001:db8::1:

`ping6.py 2001:db8::1 2001:db8::2`
