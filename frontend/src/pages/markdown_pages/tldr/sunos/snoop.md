---
title: snoop
name: snoop
path: /freedevtools/tldr/sunos/snoop
canonical: "https://hexmos.com/freedevtools/tldr/sunos/snoop/"
description: Network packet sniffer for capturing and analyzing network traffic.
category: sunos
keywords:
- network packet capture and analysis
- network traffic monitoring tool
- capturing data on network interfaces
- saving captured network data to files
- verbose protocol layer summary display
- filtering network packets by hostname and port
- hexadecimal dump of network packet data
- debugging network communication issues
- analyzing network protocols and data
- sunos network troubleshooting tool
features:
- capture packets on specific network interfaces
- save captured packets to a file
- display verbose protocol layer summary
- filter packets by hostname and port
- display a hexadecimal dump of network packets
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# snoop

> Network packet sniffer.
> SunOS equivalent of tcpdump.
> More information: <https://www.unix.com/man-page/sunos/1m/snoop>.

- Capture packets on a specific network interface:

`snoop -d {{e1000g0}}`

- Save captured packets in a file instead of displaying them:

`snoop -o {{path/to/file}}`

- Display verbose protocol layer summary of packets from a file:

`snoop -V -i {{path/to/file}}`

- Capture network packets that come from a hostname and go to a given port:

`snoop to port {{port}} from host {{hostname}}`

- Capture and show a hex-dump of network packets exchanged between two IP addresses:

`snoop -x0 -p4 {{ip1}} {{ip2}}`
