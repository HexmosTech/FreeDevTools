---
title: "Tracert - Trace Network Route | Free DevTools"
name: tracert
path: /freedevtools/tldr/windows/tracert
canonical: "https://hexmos.com/freedevtools/tldr/windows/tracert/"
description: "Trace a network route with Tracert. Diagnose network connectivity issues and identify bottlenecks with this Windows command line utility. Free online tool, no registration required."
category: windows
keywords:
- tracert command
- windows tracert
- network route tracer
- IP route trace
- command line tracert
- network diagnostics windows
- internet route analysis
- pathping alternative
- network hop analysis
- windows network troubleshooting
features:
- Trace the route to a specified network destination.
- Prevent hostname resolution for faster tracing.
- Force usage of IPv4 or IPv6 addresses.
- Limit the maximum number of hops in a route.
- Identify network latency and bottlenecks.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# tracert

> Receive information about each step in the route between your PC and the target.
> More information: <https://learn.microsoft.com/windows-server/administration/windows-commands/tracert>.

- Trace a route:

`tracert {{IP}}`

- Prevent `tracert` from resolving IP addresses to hostnames:

`tracert /d {{IP}}`

- Force `tracert` to use IPv4 only:

`tracert /4 {{IP}}`

- Force `tracert` to use IPv6 only:

`tracert /6 {{IP}}`

- Specify the maximum number of hops in the search for the target:

`tracert /h {{max_hops}} {{IP}}`

- Display help:

`tracert /?`
