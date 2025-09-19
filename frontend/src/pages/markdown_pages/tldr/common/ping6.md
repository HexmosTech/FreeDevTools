---
title: "Ping IPv6 - Send Network Packets with Ping6 | Online Free DevTools by Hexmos"
name: ping6
path: /freedevtools/tldr/common/ping6
canonical: "https://hexmos.com/freedevtools/tldr/common/ping6/"
description: "Send IPv6 network packets with Ping6. Diagnose network connectivity and measure round-trip time. Free online tool, no registration required."
category: common
keywords:
- IPv6 ping
- network packet sender
- network diagnostic tool
- ping6 command
- ipv6 network testing
- icmpv6 echo request
- network troubleshooting
- linux ping6
- macos ping6
- command line ping
features:
- Send ICMP ECHO_REQUEST packets to IPv6 hosts
- Specify the number of ping requests
- Set the interval between ping requests
- Disable symbolic name resolution for addresses
- Enable audible bell notification on packet receipt
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ping6

> Send ICMP ECHO_REQUEST packets to network hosts via IPv6 address.
> More information: <https://manned.org/ping6>.

- Ping a host:

`ping6 {{host}}`

- Ping a host only a specific number of times:

`ping6 -c {{count}} {{host}}`

- Ping a host, specifying the interval in seconds between requests (default is 1 second):

`ping6 -i {{seconds}} {{host}}`

- Ping a host without trying to lookup symbolic names for addresses:

`ping6 -n {{host}}`

- Ping a host and ring the bell when a packet is received (if your terminal supports it):

`ping6 -a {{host}}`
