---
title: "Ping - Test Network Connectivity on OSX | Online Free DevTools by Hexmos"
name: ping
path: /freedevtools/tldr/osx/ping
canonical: "https://hexmos.com/freedevtools/tldr/osx/ping/"
description: "Test network connectivity with Ping on OSX. Diagnose network issues and verify host reachability using ICMP packets. Free online tool, no registration required."
category: osx
keywords:
- ICMP Echo Request OSX
- Network Connectivity Tester
- OSX Ping Command
- Diagnose Network Issues
- Verify Host Reachability
- Command Line Ping
- OSX Network Tools
- Network Troubleshooting OSX
- Ping Statistics
- Ping Latency Measurement
features:
- Test network connectivity to a specified host
- Specify the number of ICMP packets to send
- Define the interval between ping requests
- Suppress reverse DNS lookup for faster results
- Print timestamps for received packets
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ping

> Send ICMP ECHO_REQUEST packets to network hosts.
> More information: <https://keith.github.io/xcode-man-pages/ping.8.html>.

- Ping the specified host:

`ping "{{hostname}}"`

- Ping a host a specific number of times:

`ping -c {{count}} "{{host}}"`

- Ping a host, specifying the interval in seconds between requests (default is 1 second):

`ping -i {{seconds}} "{{host}}"`

- Ping a host without trying to lookup symbolic names for addresses:

`ping -n "{{host}}"`

- Ping a host and ring the bell when a packet is received (if your terminal supports it):

`ping -a "{{host}}"`

- Ping a host and prints the time a packet was received (this option is an Apple addition):

`ping --apple-time "{{host}}"`
