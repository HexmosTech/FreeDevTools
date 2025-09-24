---
title: "Analyze Packets with tshark - Network Monitoring | Online Free DevTools by Hexmos"
name: tshark
path: /freedevtools/tldr/linux/tshark
canonical: "https://hexmos.com/freedevtools/tldr/linux/tshark/"
description: "Analyze network packets effectively with tshark, the command-line network protocol analyzer. Capture, filter, and decode packets with ease. Free online tool, no registration required."
category: linux
keywords:
  - packet analyzer CLI
  - network protocol analyzer command line
  - tshark capture filter
  - tshark packet decoding
  - command-line network monitoring
  - tshark output format
  - pcap file analysis tshark
  - tcpdump alternative tshark
  - network traffic analysis tshark
  - wireshark command line tshark
features:
  - Capture and analyze network packets in real-time.
  - Apply powerful capture and display filters for targeted analysis.
  - Decode various network protocols (e.g., HTTP, TCP, UDP).
  - Export captured packets in different formats (e.g., JSON, text).
  - Analyze packet captures from saved `.pcap` files.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# tshark

> Packet analysis tool, CLI version of Wireshark.
> More information: <https://tshark.dev/>.

- Monitor everything on localhost:

`tshark`

- Only capture packets matching a specific capture filter:

`tshark -f '{{udp port 53}}'`

- Only show packets matching a specific output filter:

`tshark -Y '{{http.request.method == "GET"}}'`

- Decode a TCP port using a specific protocol (e.g. HTTP):

`tshark -d tcp.port=={{8888}},{{http}}`

- Specify the format of captured output:

`tshark -T {{json|text|ps|...}}`

- Select specific fields to output:

`tshark -T {{fields|ek|json|pdml}} -e {{http.request.method}} -e {{ip.src}}`

- Write captured packet to a file:

`tshark -w {{path/to/file}}`

- Analyze packets from a file:

`tshark -r {{path/to/file.pcap}}`
