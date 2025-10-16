---
title: "Capture Network Packets with Snoop | Online Free DevTools by Hexmos"
name: snoop
path: "/freedevtools/tldr/sunos/snoop/"
canonical: "https://hexmos.com/freedevtools/tldr/sunos/snoop/"
description: "Capture network packets efficiently with Snoop, the SunOS network packet sniffer. Monitor network traffic and analyze data. Free online tool, no registration required."
category: sunos
keywords:
  - network packet capture and analysis
  - sunos network packet sniffer
  - network traffic monitoring on sunos
  - capturing network data on sunos
  - sunos network troubleshooting
  - network packet filtering by port
  - network protocol analysis tool
  - network debugging on sunos
  - hexadecimal packet data display
  - sunos snoop command
features:
  - capture packets on specific network interfaces
  - save captured network packets to a file
  - display verbose protocol layer summaries
  - filter network packets by hostname and port
  - display a hexadecimal dump of network packets
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
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
