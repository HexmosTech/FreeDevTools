---
title: "Nping - Generate Network Packets | Free DevTools"
name: nping
path: /freedevtools/tldr/common/nping
canonical: "https://hexmos.com/freedevtools/tldr/common/nping/"
description: "Generate network packets with Nping. Analyze network performance and troubleshoot connectivity issues. Free online tool, no registration required."
category: common
keywords:
- network packet generator
- network ping utility
- network troubleshooting tool
- command-line ping
- network analysis tool
- tcp packet generator
- udp packet generator
- icmp packet generator
- network packet scanner
- network security scanner
features:
- Generate ICMP, TCP, and UDP packets
- Perform network ping operations
- Customize packet parameters for analysis
- Scan network ranges and ports
- Analyze network performance
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# nping

> Network packet generation tool/ping utility.
> More information: <https://nmap.org/nping/>.

- Ping a specified host using ICMP if the user is allowed to, otherwise using TCP:

`nping {{example.com}}`

- Ping a specified host using ICMP assuming that the user is allowed to do so:

`nping --icmp --privileged {{example.com}}`

- Ping a specified host using UDP:

`nping --udp {{example.com}}`

- Ping a specified host on a given port using TCP:

`nping --tcp --dest-port {{443}} {{example.com}}`

- Ping a certain number of times:

`nping --count {{10}} {{example.com}}`

- Wait a certain amount of time between each ping:

`nping --delay {{5s}} {{example.com}}`

- Send the request over a specified interface:

`nping --interface {{eth0}} {{example.com}}`

- Ping an IP range:

`nping {{10.0.0.1-10}}`
