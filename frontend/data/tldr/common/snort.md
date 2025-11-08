---
title: "Snort - Analyze Network Traffic | Online Free DevTools by Hexmos"
name: snort
path: "/freedevtools/tldr/common/snort/"
canonical: "https://hexmos.com/freedevtools/tldr/common/snort/"
description: "Analyze network traffic effectively with Snort, the open-source intrusion detection system. Capture packets, detect threats, and enhance network security. Free online tool, no registration required."
category: common
keywords:
- network traffic analysis
- intrusion detection system
- packet capture snort
- network security monitoring
- snort rules configuration
- linux network analysis
- tcpdump alternative
- network threat detection
- network intrusion prevention
- snort command line
features:
- Capture network packets with verbose output
- Dump application layer data from captured packets
- Display link layer packet headers for detailed analysis
- Save captured packets to a specified directory for later examination
- Analyze packets against defined rules and save alert-triggering packets
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# snort

> Open-source network intrusion detection system.
> More information: <https://www.snort.org/#documents>.

- Capture packets with verbose output:

`sudo snort -v -i {{interface}}`

- Capture packets and dump application layer data with verbose output:

`sudo snort -vd -i {{interface}}`

- Capture packets and display link layer packet headers with verbose output:

`sudo snort -ve -i {{interface}}`

- Capture packets and save them in the specified directory:

`sudo snort -i {{interface}} -l {{path/to/directory}}`

- Capture packets according to rules and save offending packets along with alerts:

`sudo snort -i {{interface}} -c {{path/to/rules.conf}} -l {{path/to/directory}}`
