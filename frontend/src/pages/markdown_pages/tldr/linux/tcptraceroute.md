---
title: "Trace Route - Network Route Trace with tcptraceroute | Online Free DevTools by Hexmos"
name: tcptraceroute
path: /freedevtools/tldr/linux/tcptraceroute
canonical: "https://hexmos.com/freedevtools/tldr/linux/tcptraceroute/"
description: "Trace network routes with tcptraceroute, a powerful TCP traceroute utility. Analyze network paths and diagnose connectivity issues. Free online tool, no registration required."
category: linux
keywords:
- tcp route trace
- network route analysis
- linux traceroute
- tcptraceroute command
- destination port testing
- packet length verification
- source address specification
- ttl modification
- network diagnostics linux
- network troubleshooting command line
features:
- Trace TCP network route to a specified host
- Specify custom destination port for route tracing
- Modify packet length for network analysis
- Define custom source port and address for tracing
- Adjust TTL parameters for advanced control
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# tcptraceroute

> A traceroute implementation using TCP packets.
> More information: <https://manned.org/tcptraceroute>.

- Trace the route to a host:

`tcptraceroute {{host}}`

- Specify the destination port and packet length in bytes:

`tcptraceroute {{host}} {{destination_port}} {{packet_length}}`

- Specify the local source port and source address:

`tcptraceroute {{host}} -p {{source_port}} -s {{source_address}}`

- Set the first and maximum TTL:

`tcptraceroute {{host}} -f {{first_ttl}} -m {{max_ttl}}`

- Specify the wait time and number of queries per hop:

`tcptraceroute {{host}} -w {{wait_time}} -q {{number_of_queries}}`

- Specify the interface:

`tcptraceroute {{host}} -i {{interface}}`
