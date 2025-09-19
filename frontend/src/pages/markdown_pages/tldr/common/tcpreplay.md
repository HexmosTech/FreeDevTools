---
title: "Replay Network Traffic - Control Network Traffic with tcpreplay | Online Free DevTools by Hexmos"
name: tcpreplay
path: /freedevtools/tldr/common/tcpreplay
canonical: "https://hexmos.com/freedevtools/tldr/common/tcpreplay/"
description: "Control network traffic replay with tcpreplay. Analyze and simulate network behavior using pcap files on Linux. Free online tool, no registration required."
category: common
keywords:
- pcap replay
- network traffic analysis
- tcpreplay linux
- network packet replay
- network simulation
- traffic generator
- pcap analyzer
- network debugging
- traffic replay tool
- tcpdump replay
features:
- Replay network traffic from pcap files to specified network interfaces.
- Simulate network behavior for testing and analysis.
- Control replay speed using various options for accurate simulation.
- Loop replay traffic multiple times for sustained simulation.
- List available network interfaces for traffic replay.
ogImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
twitterImage: "https://hexmos.com/freedevtools/t/tool-banners/json-utilities-banner.png"
---

# tcpreplay

> Replay network traffic stored in a `pcap` file.
> More information: <https://tcpreplay.appneta.com/wiki/tcpreplay-man.html>.

- List available network interfaces:

`tcpreplay --listnics`

- Replay traffic to interface:

`tcpreplay {{[-i|--intf1]}} {{eth0}} {{traffic.pcap}}`

- Replay traffic to interface and `stdout`:

`tcpreplay {{[-i|--intf1]}} {{eth0}} {{[-v|--verbose]}} {{traffic.pcap}}`

- Replay traffic to interface as fast as possible:

`tcpreplay {{[-i|--intf1]}} {{eth0}} {{[-t|--topspeed]}} {{traffic.pcap}}`

- Replay traffic to interface at given Mbps:

`tcpreplay {{[-i|--intf1]}} {{eth0}} {{[-M|--mbps]}} {{10}} {{traffic.pcap}}`

- Replay traffic to interface several times:

`tcpreplay {{[-i|--intf1]}} {{eth0}} {{[-l|--loop]}} {{num_times}} {{traffic.pcap}}`
