---
title: "Sngrep Capture - Display SIP Flows | Online Free DevTools by Hexmos"
name: sngrep
path: /freedevtools/tldr/common/sngrep
canonical: "https://hexmos.com/freedevtools/tldr/common/sngrep/"
description: "Capture SIP message flows with Sngrep. Analyze VoIP traffic and debug SIP communications with this command-line tool. Free online tool, no registration required."
category: common
keywords:
- SIP capture
- VoIP traffic analysis
- Sngrep SIP analyzer
- PCAP SIP capture
- SIP call flow visualization
- Linux SIP capture
- Command line SIP tool
- SIP debugging
- Real-time SIP monitoring
- SIP message decoder
features:
- Visualize SIP packets from PCAP files.
- Filter and display SIP dialogs based on INVITE packets.
- Monitor real-time SIP traffic on a specific network interface.
- Capture SIP packets to a file without displaying them on the interface.
- Analyze RTP packets within SIP communications.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# sngrep

> Display SIP calls message flows from terminal.
> More information: <https://manned.org/sngrep>.

- Visualize SIP packets from a PCAP file:

`sngrep -I {{path/to/file.pcap}}`

- Visualize only dialogs starting with INVITE packets with RTP packets from a PCAP file:

`sngrep -crI {{path/to/file.pcap}}`

- Real-time interface with only dialogs starting with INVITE packets with RTP packets:

`sngrep -cr`

- Only capture packets without interface to a file:

`sngrep -NO {{path/to/file.pcap}}`
