---
title: "Ping Network Host - Test Network Connectivity | Online Free DevTools by Hexmos"
name: ping
path: /freedevtools/tldr/common/ping
canonical: "https://hexmos.com/freedevtools/tldr/common/ping/"
description: "Test network connectivity with Ping Network Host.  Check network latency and packet loss using this command-line tool. Free online tool, no registration required."
category: common
keywords:
  - network connectivity testing
  - ping command
  - icmp echo request
  - network diagnostics
  - command line ping
  - packet loss analysis
  - network troubleshooting
  - latency measurement
  - host reachability
  - network monitoring
features:
  - Send ICMP ECHO_REQUEST packets to remote hosts.
  - Measure round-trip time (latency) to network hosts.
  - Identify network packet loss.
  - Determine host reachability.
  - Control the number of pings sent and the interval between requests.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ping

> Send ICMP ECHO_REQUEST packets to network hosts.
> More information: <https://manned.org/ping>.

- Ping host:

`ping {{host}}`

- Ping a host only a specific number of times:

`ping -c {{count}} {{host}}`

- Ping host, specifying the interval in seconds between requests (default is 1 second):

`ping -i {{seconds}} {{host}}`

- Ping host without trying to lookup symbolic names for addresses:

`ping -n {{host}}`

- Ping host and ring the bell when a packet is received (if your terminal supports it):

`ping -a {{host}}`

- Also display a message if no response was received:

`ping -O {{host}}`

- Ping a host with specific number of pings, per-packet response timeout (`-W`), and total time limit (`-w`) of the entire ping run:

`ping -c {{count}} -W {{seconds}} -w {{seconds}} {{host}}`
