---
title: "Create IP Aggregate Stats - Analyze Network Traffic | Free DevTools"
name: ipaggcreate
path: /freedevtools/tldr/common/ipaggcreate
canonical: "https://hexmos.com/freedevtools/tldr/common/ipaggcreate/"
description: "Create IP aggregate statistics with ipaggcreate. Analyze network traffic from PCAP files and network interfaces using command-line. Free online tool, no registration required."
category: common
keywords:
- pcap analyzer
- network traffic analysis
- ip statistics generator
- packet counter linux
- tcpdump aggregate
- network flow analysis
- bandwidth usage monitor
- ip address statistics
- traffic pattern identification
- linux network analysis
features:
- Analyze network traffic from PCAP files
- Aggregate IP packet statistics by various criteria
- Count packets by source address
- Group packets by IP packet length
- Count bytes sent between address pairs
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# ipaggcreate

> Produce aggregate statistics of TCP/IP dumps.
> More information: <https://manned.org/ipaggcreate>.

- Count the number of packets sent from each source address appearing in a PCAP file:

`ipaggcreate --src {{path/to/file.pcap}}`

- Group and count packets read from a network interface by IP packet length:

`ipaggcreate --interface {{eth0}} --length`

- Count the number of bytes sent between each address pair appearing in a PCAP file:

`ipaggcreate --address-pairs --bytes {{path/to/file.pcap}}`
