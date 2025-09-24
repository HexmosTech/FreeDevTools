---
title: "Analyze Network Traffic - Zeek | Online Free DevTools by Hexmos"
name: zeek
path: /freedevtools/tldr/common/zeek
canonical: "https://hexmos.com/freedevtools/tldr/common/zeek/"
description: "Analyze network traffic passively with Zeek. Extract network metadata, perform security monitoring and gain insights with this powerful command-line tool. Free online tool, no registration required."
category: common
keywords:
- network traffic analysis
- zeek network analyzer
- network security monitoring
- packet capture analysis
- network metadata extraction
- zeek command line
- network intrusion detection
- pcap file analysis
- zeek scripting
- network protocol analysis
features:
- Analyze live network traffic from a specified interface.
- Process traffic data from PCAP files.
- Apply custom scripts for advanced analysis.
- Filter traffic based on tcpdump filters.
- Run Zeek in bare mode to disable script loading.
ogImage: "https://hexmos.com/freedevtools/site-banner.png"
twitterImage: "https://hexmos.com/freedevtools/site-banner.png"
---

# zeek

> Passive network traffic analyzer.
> Any output and log files will be saved to the current working directory.
> More information: <https://docs.zeek.org/en/lts/quickstart.html#zeek-as-a-command-line-utility>.

- Analyze live traffic from a network interface:

`sudo zeek --iface {{interface}}`

- Analyze live traffic from a network interface and load custom scripts:

`sudo zeek --iface {{interface}} {{script1 script2 ...}}`

- Analyze live traffic from a network interface, without loading any scripts:

`sudo zeek --bare-mode --iface {{interface}}`

- Analyze live traffic from a network interface, applying a `tcpdump` filter:

`sudo zeek --filter {{path/to/filter}} --iface {{interface}}`

- Analyze live traffic from a network interface using a watchdog timer:

`sudo zeek --watchdog --iface {{interface}}`

- Analyze traffic from a PCAP file:

`zeek --readfile {{path/to/file.trace}}`
