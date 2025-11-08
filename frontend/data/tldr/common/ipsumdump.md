---
title: "Summarize PCAP Dumps - Control Network Traffic | Online Free DevTools by Hexmos"
name: ipsumdump
path: "/freedevtools/tldr/common/ipsumdump/"
canonical: "https://hexmos.com/freedevtools/tldr/common/ipsumdump/"
description: "Summarize PCAP dumps with Ipsumdump and analyze network traffic data. Get human-readable ASCII summaries of TCP/IP packets. Free online tool, no registration required."
category: common
keywords:
- PCAP data summarizer
- Network traffic analysis
- TCP/IP dump analyzer
- PCAP analyzer Linux
- Network packet summary
- Ipsumdump command
- PCAP data parser
- PCAP data extraction
- TCP/IP data analysis
- Network forensics tool
features:
- Summarize PCAP file contents into ASCII format
- Print source and destination IP addresses of packets
- Display timestamps and port information of network traffic
- Anonymize IP addresses in PCAP files
- Extract packet lengths from PCAP data
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# ipsumdump

> Summarise TCP/IP dumps into a human and machine readable ASCII format.
> More information: <https://manned.org/ipsumdump>.

- Print the source and destination IP addresses of all packets in a PCAP file:

`ipsumdump --src --dst {{path/to/file.pcap}}`

- Print the timestamps, source address, source port, destination address, destination port and protocol of all packets read from a given network interface:

`ipsumdump --interface {{eth0}} -tsSdDp`

- Print the anonymised source address, anonymised destination address, and IP packet length of all packets in a PCAP file:

`ipsumdump --src --dst --length --anonymize {{path/to/file.pcap}}`
